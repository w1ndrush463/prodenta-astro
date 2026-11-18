// Checks that .pages.yml and the content files agree, so nothing shows up
// blank in Pages CMS and nothing is silently dropped when the client saves.
// Run with: npm run check:cms
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const root = path.join(import.meta.dirname, '..');
const config = YAML.parse(fs.readFileSync(path.join(root, '.pages.yml'), 'utf8'));
const components = config.components ?? {};
const problems = [];

const resolve = (f) => (f.component ? { ...components[f.component], ...f } : f);
const flatten = (items) => items.flatMap((i) => (i.type === 'group' ? flatten(i.items ?? []) : [i]));

function frontmatter(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
  return m ? { ...YAML.parse(m[1]), body: m[2] } : { body: raw };
}

function compare(data, fields, where) {
  if (data === null || typeof data !== 'object' || Array.isArray(data)) return;
  const defined = new Map(fields.map((f) => [f.name, resolve(f)]));
  for (const key of Object.keys(data)) {
    if (!defined.has(key)) problems.push(`${where}: "${key}" is in the content but has no CMS field`);
  }
  for (const [name, f] of defined) {
    if (f.component && !components[f.component]) problems.push(`${where}: unknown component "${f.component}"`);
    if (!(name in data)) {
      problems.push(`${where}: CMS field "${name}" is missing from the content`);
      continue;
    }
    if (f.type !== 'object' || !f.fields) continue;
    const value = data[name];
    if (f.list) {
      if (!Array.isArray(value)) problems.push(`${where}.${name}: expected a list`);
      else value.forEach((v, i) => compare(v, f.fields, `${where}.${name}[${i}]`));
    } else {
      compare(value, f.fields, `${where}.${name}`);
    }
  }
}

let files = 0;
for (const entry of flatten(config.content)) {
  const target = path.join(root, entry.path);
  if (!fs.existsSync(target)) {
    problems.push(`${entry.name}: path "${entry.path}" does not exist`);
    continue;
  }
  if (entry.type === 'file') {
    files++;
    compare(JSON.parse(fs.readFileSync(target, 'utf8')), entry.fields, entry.path);
  } else {
    for (const name of fs.readdirSync(target).filter((n) => n.endsWith('.md'))) {
      files++;
      compare(frontmatter(path.join(target, name)), entry.fields, `${entry.path}/${name}`);
    }
  }
}

// Every content file should be reachable from the CMS.
const covered = new Set(flatten(config.content).map((e) => e.path));
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]));
for (const file of walk(path.join(root, 'src/content'))) {
  const rel = path.relative(root, file);
  if (!covered.has(rel) && !covered.has(path.dirname(rel))) problems.push(`${rel}: not editable in the CMS`);
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} problem(s) found.`);
  process.exit(1);
}
console.log(`CMS config matches all ${files} content files.`);
