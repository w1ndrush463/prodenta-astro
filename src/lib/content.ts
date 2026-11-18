import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type Treatment = CollectionEntry<'treatments'>;
export type TreatmentType = 'dental' | 'aesthetics';

/** Loosely typed JSON page/settings content. Missing keys read as undefined. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Json = Record<string, any>;

export async function page(id: string): Promise<Json> {
  return ((await getEntry('pages', id))?.data ?? {}) as Json;
}

export async function setting(id: string): Promise<Json> {
  return ((await getEntry('settings', id))?.data ?? {}) as Json;
}

export const site = () => setting('site');

export const telHref = (phone = '') => `tel:${phone.replace(/[^\d+]/g, '')}`;
export const whatsappHref = (number = '') =>
  `https://wa.me/${number.replace(/\D/g, '').replace(/^0/, '44')}`;

export const typeOf = (t: Treatment): TreatmentType =>
  t.id.startsWith('aesthetics/') ? 'aesthetics' : 'dental';
export const slugOf = (t: Treatment) => t.id.split('/').pop()!;
export const urlOf = (t: Treatment) => `/${t.id}`;

export async function treatmentsOf(type: TreatmentType): Promise<Treatment[]> {
  const all = await getCollection('treatments', (t) => t.id.startsWith(`${type}/`));
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export interface TreatmentGroup {
  id: string;
  title: string;
  text: string;
  items: Treatment[];
}

/** Treatments grouped by category, in the order set in Site settings. */
export async function groupedTreatments(type: TreatmentType): Promise<TreatmentGroup[]> {
  const [items, categories] = await Promise.all([treatmentsOf(type), setting('categories')]);
  const defined: Json[] = categories[type] ?? [];
  const groups: TreatmentGroup[] = defined.map((c) => ({
    id: c.id,
    title: c.title ?? c.id,
    text: c.text ?? '',
    items: items.filter((t) => t.data.category === c.id),
  }));
  const known = new Set(defined.map((c) => c.id));
  const other = items.filter((t) => !known.has(t.data.category));
  if (other.length) groups.push({ id: 'other', title: 'More treatments', text: '', items: other });
  return groups.filter((g) => g.items.length);
}

export const typeLabel = (type: TreatmentType) =>
  type === 'dental' ? 'Dental treatments' : 'Facial aesthetics';
export const typeIndexUrl = (type: TreatmentType) =>
  type === 'dental' ? '/treatments' : '/facial-aesthetics-treatments';
