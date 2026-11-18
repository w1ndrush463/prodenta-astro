import type { ImageMetadata } from 'astro';

// All images live in src/assets/images (also the Pages CMS media folder), so
// content files can reference them by path and still get optimised by Astro.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG}',
  { eager: true },
);

/**
 * Turn a path stored in content ("/src/assets/images/x.jpg", "src/assets/images/x.jpg"
 * or just "x.jpg") into image metadata. Returns undefined when the file is missing,
 * so a bad path in the CMS shows a placeholder instead of failing the build.
 */
export function resolveImage(path?: string | null): ImageMetadata | undefined {
  if (!path) return undefined;
  const clean = decodeURIComponent(path.trim()).replace(/^\.?\/?/, '/');
  const candidates = [clean, `/src/assets/images${clean}`, `/src/assets/images/${clean.split('/').pop()}`];
  for (const c of candidates) {
    if (files[c]) return files[c].default;
  }
  return undefined;
}
