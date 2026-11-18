# ProDenta website

Astro 7 + Tailwind CSS 4 static site for ProDenta, deployed on Netlify and edited by the client through Pages CMS.

## Develop

Requires Node 22.23.4 or newer (`.nvmrc` pins 24).

```sh
npm install
npm run dev          # local dev server
npm run build        # production build to dist/
npm run check        # type check
npm run check:cms    # .pages.yml matches every content file
npm run check:site   # links, images, titles, headings in dist/ (run after build)
```

## Where things live

| Path | What |
|---|---|
| `src/content/` | All editable content (Markdown and JSON). Schemas in `src/content.config.ts` |
| `.pages.yml` | Pages CMS configuration. See `CMS-GUIDE.md` for the client guide |
| `src/assets/images/` | All images. Also the CMS media folder, so uploads are optimised by Astro |
| `src/styles/global.css` | Design tokens (`@theme`): fonts, colours, type scale, spacing |
| `src/components/TreatmentPage.astro` | The one template behind every `/dental/*` and `/aesthetics/*` page |
| `src/lib/` | Content helpers and the image path resolver |
| `netlify.toml` | Build settings, cache and security headers, redirects |

## Adding a field the client can edit

1. Add the value to the content file and read it in the template.
2. Add the field to `.pages.yml`.
3. Run `npm run check:cms` to confirm the two agree.

## Launch checklist

- Set the live domain in `astro.config.mjs` (`SITE`) and `public/robots.txt`.
- Connect the repository at https://app.pagescms.org and invite the client.
- Enable form notifications for the `enquiry` form in Netlify.
- Replace stock photos (`IMAGE-CREDITS.md`) and placeholder policy pages.
