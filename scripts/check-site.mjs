// Checks the built site in dist/: broken internal links and images, and that
// every page has a unique title, a description, a canonical URL and one <h1>.
// Run with: npm run build && npm run check:site
import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(import.meta.dirname, '..', 'dist');
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => (d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]));
const files = walk(dist);
const pages = files.filter((f) => f.endsWith('.html'));
const redirects = fs.existsSync(path.join(dist, '..', 'netlify.toml'))
  ? [...fs.readFileSync(path.join(dist, '..', 'netlify.toml'), 'utf8').matchAll(/from = "([^"]+)"/g)].map((m) => m[1])
  : [];

const exists = (url) => {
  const clean = decodeURIComponent(url.split('#')[0].split('?')[0]).replace(/\/$/, '');
  if (clean === '') return true;
  if (redirects.includes(clean)) return true;
  return ['', '.html', '/index.html'].some((ext) => {
    const p = path.join(dist, clean + ext);
    return fs.existsSync(p) && fs.statSync(p).isFile();
  });
};

const problems = [];
const titles = new Map();
const descriptions = new Map();
for (const file of pages) {
  const rel = '/' + path.relative(dist, file);
  const html = fs.readFileSync(file, 'utf8');
  const noindex = /<meta name="robots" content="noindex"/.test(html);

  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1];
  const desc = /<meta name="description" content="([^"]*)"/.exec(html)?.[1];
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (!title) problems.push(`${rel}: missing <title>`);
  if (!noindex) {
    if (!desc) problems.push(`${rel}: missing meta description`);
    if (desc && desc.length > 170) problems.push(`${rel}: description is ${desc.length} characters`);
    if (title && title.length > 70) problems.push(`${rel}: title is ${title.length} characters`);
    if (!/<link rel="canonical" href="https?:\/\/[^"]+"/.test(html)) problems.push(`${rel}: missing canonical`);
    if (title) titles.set(title, [...(titles.get(title) ?? []), rel]);
    if (desc) descriptions.set(desc, [...(descriptions.get(desc) ?? []), rel]);
  }
  if (h1 !== 1) problems.push(`${rel}: has ${h1} <h1> elements`);
  if (!/<html lang="/.test(html)) problems.push(`${rel}: missing lang`);

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt(=|\s|>)/.test(m[0])) problems.push(`${rel}: image without alt: ${m[0].slice(0, 80)}`);
    if (!/\bwidth="/.test(m[0]) || !/\bheight="/.test(m[0])) problems.push(`${rel}: image without dimensions`);
  }
  const urls = [
    ...[...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/\bsrcset="([^"]+)"/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(/\s+/)[0])),
  ];
  for (const url of new Set(urls)) {
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    if (!exists(url)) problems.push(`${rel}: broken link or asset ${url}`);
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { problems.push(`${rel}: invalid JSON-LD`); }
  }
}
for (const [t, where] of titles) if (where.length > 1) problems.push(`duplicate title "${t}": ${where.join(', ')}`);
for (const where of descriptions.values()) if (where.length > 1) problems.push(`duplicate description: ${where.join(', ')}`);

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} problem(s) in ${pages.length} pages.`);
  process.exit(1);
}
console.log(`${pages.length} pages checked: links, images, titles, descriptions, canonicals and headings all OK.`);
