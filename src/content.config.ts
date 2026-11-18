import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every field has a default so an empty CMS field never breaks the build.
const text = z.string().nullish().transform((v) => v ?? '');
const list = <T extends z.ZodType>(item: T) => z.array(item).nullish().transform((v) => v ?? []);

const seo = z
  .object({ title: text, description: text })
  .nullish()
  .transform((v) => v ?? { title: '', description: '' });

const titled = z.object({ title: text, text: text });

const treatments = defineCollection({
  loader: glob({ base: './src/content/treatments', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    category: z.string().default('maintain'),
    order: z.number().nullish().transform((v) => v ?? 99),
    summary: text,
    intro: text,
    image: text,
    imageAlt: text,
    price: text,
    priceNote: text,
    facts: list(z.object({ label: text, value: text })),
    helpsWith: list(titled),
    stepsHeading: text,
    steps: list(titled),
    benefits: list(titled),
    faqs: list(z.object({ question: text, answer: text })),
    related: list(z.string()),
    gallery: list(z.object({ image: text, caption: text })),
    seo,
  }),
});

const team = defineCollection({
  loader: glob({ base: './src/content/team', pattern: '*.md' }),
  schema: z.object({
    name: z.string(),
    role: text,
    group: z.string().default('Practice team'),
    order: z.number().nullish().transform((v) => v ?? 99),
    photo: text,
    expertise: list(z.string()),
  }),
});

const policies = defineCollection({
  loader: glob({ base: './src/content/policies', pattern: '*.md' }),
  schema: z.object({ title: z.string(), summary: text }),
});

// Single-page content and settings are loosely typed JSON; the pages read
// them through src/lib/content.ts which applies fallbacks.
const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '*.json' }),
  schema: z.looseObject({}),
});
const settings = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: '*.json' }),
  schema: z.looseObject({}),
});

export const collections = { treatments, team, policies, pages, settings };
