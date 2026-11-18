// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Change this to the live domain at launch (e.g. https://www.prodenta.co.uk).
const SITE = 'https://prodenta-astro.netlify.app';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
  integrations: [
    sitemap({ filter: (page) => !page.includes('/thank-you') }),
  ],
  vite: { plugins: [tailwindcss()] },
});
