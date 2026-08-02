import { traditions } from '../data/traditions';
import { figures } from '../data/figures';
import { texts } from '../data/texts';
import { themes } from '../data/themes';
import { concepts } from '../data/concepts';
import { timeline } from '../data/timeline';
import { learningPaths } from '../data/influences';
import { places } from '../data/geo';
import { corpusBooks } from '../data/corpus';
import { mechanisms } from '../data/emergence';
import { normalize } from './utils';

export type SearchKind =
  | 'tradition'
  | 'figure'
  | 'text'
  | 'theme'
  | 'concept'
  | 'event'
  | 'path'
  | 'place'
  | 'passage'
  | 'mechanism';

export interface SearchItem {
  kind: SearchKind;
  id: string;
  title: string;
  subtitle: string;
  href: string;
  haystack: string;
}

export const kindLabels: Record<SearchKind, string> = {
  tradition: 'Tradition',
  figure: 'Personnage',
  text: 'Texte',
  theme: 'Comparaison',
  concept: 'Notion',
  event: 'Événement',
  path: 'Parcours',
  place: 'Lieu',
  passage: 'Passage original',
  mechanism: 'Mécanisme',
};

const placeKindLabels: Record<string, string> = {
  berceau: 'Berceau',
  sanctuaire: 'Sanctuaire',
  texte: 'Lieu de texte',
  concile: 'Concile',
  savoir: 'Centre de savoir',
  conflit: 'Conflit',
  archeologie: 'Site archéologique',
  diaspora: 'Diaspora',
};
const placeLabel = (k: string) => placeKindLabels[k] ?? k;

let cache: SearchItem[] | null = null;

export function searchIndex(): SearchItem[] {
  if (cache) return cache;
  const items: SearchItem[] = [];

  for (const t of traditions) {
    items.push({
      kind: 'tradition',
      id: t.id,
      title: t.name,
      subtitle: t.tagline,
      href: `/traditions/${t.id}`,
      haystack: normalize(
        [t.name, ...(t.altNames ?? []), t.tagline, t.summary, t.essence, t.origin].join(' '),
      ),
    });
  }

  for (const f of figures) {
    items.push({
      kind: 'figure',
      id: f.id,
      title: f.name,
      subtitle: `${f.role} · ${f.dates}`,
      href: `/personnages/${f.id}`,
      haystack: normalize([f.name, ...(f.altNames ?? []), f.role, f.summary, f.region, f.whyItMatters].join(' ')),
    });
  }

  for (const t of texts) {
    items.push({
      kind: 'text',
      id: t.id,
      title: t.title,
      subtitle: `${t.genre} · ${t.composed}`,
      href: `/textes/${t.id}`,
      haystack: normalize([t.title, t.originalTitle ?? '', t.genre, t.summary, t.language].join(' ')),
    });
  }

  for (const t of themes) {
    items.push({
      kind: 'theme',
      id: t.id,
      title: t.title,
      subtitle: t.question,
      href: `/comparaisons/${t.id}`,
      haystack: normalize([t.title, t.question, t.summary, t.analysis].join(' ')),
    });
  }

  for (const c of concepts) {
    items.push({
      kind: 'concept',
      id: c.id,
      title: c.term,
      subtitle: c.definition,
      href: `/notions#${c.id}`,
      haystack: normalize([c.term, c.original ?? '', c.definition, c.elaboration].join(' ')),
    });
  }

  for (const e of timeline) {
    items.push({
      kind: 'event',
      id: e.id,
      title: e.title,
      subtitle: e.displayDate,
      href: `/chronologie#${e.id}`,
      haystack: normalize([e.title, e.description, e.displayDate, e.place ?? ''].join(' ')),
    });
  }

  for (const p of learningPaths) {
    items.push({
      kind: 'path',
      id: p.id,
      title: p.title,
      subtitle: p.subtitle,
      href: `/parcours/${p.id}`,
      haystack: normalize([p.title, p.subtitle, p.goal].join(' ')),
    });
  }

  for (const p of places) {
    items.push({
      kind: 'place',
      id: p.id,
      title: p.name,
      subtitle: p.modern ? `${placeLabel(p.kind)} · ${p.modern}` : placeLabel(p.kind),
      href: `/carte?lieu=${p.id}`,
      haystack: normalize([p.name, p.modern ?? '', p.summary, placeLabel(p.kind)].join(' ')),
    });
  }

  for (const b of corpusBooks) {
    for (const u of b.units) {
      items.push({
        kind: 'passage',
        id: `${b.id}/${u.id}`,
        title: u.ref,
        subtitle: u.label ? `${b.title} — ${u.label}` : b.title,
        href: `/atelier?livre=${b.id}&page=${Math.floor(b.units.indexOf(u) / 2) + 1}`,
        haystack: normalize(
          [
            u.ref,
            u.label ?? '',
            b.title,
            u.translit,
            u.literal,
            u.issue?.title ?? '',
            u.issue?.text ?? '',
            ...u.translations.map((t) => `${t.source} ${t.text}`),
            ...(u.gloss ?? []).map((g) => `${g.translit} ${g.sense}`),
          ].join(' '),
        ),
      });
    }
  }

  for (const m of mechanisms) {
    items.push({
      kind: 'mechanism',
      id: m.id,
      title: m.title,
      subtitle: m.claim,
      href: `/emergence#${m.id}`,
      haystack: normalize(
        [m.title, m.claim, m.description, ...m.cases.map((c) => `${c.title} ${c.text}`)].join(' '),
      ),
    });
  }

  cache = items;
  return items;
}

const kindPriority: Record<SearchKind, number> = {
  tradition: 0,
  figure: 1,
  text: 2,
  theme: 3,
  concept: 4,
  path: 5,
  mechanism: 6,
  event: 7,
  place: 8,
  passage: 9,
};

export function search(query: string, limit = 30): SearchItem[] {
  const q = normalize(query.trim());
  if (q.length < 2) return [];
  const terms = q.split(/\s+/);
  const scored: { item: SearchItem; score: number }[] = [];

  for (const item of searchIndex()) {
    const title = normalize(item.title);
    let score = 0;
    let matchesAll = true;
    for (const term of terms) {
      if (title.startsWith(term)) score += 100;
      else if (title.includes(term)) score += 60;
      else if (item.haystack.includes(term)) score += 12;
      else {
        matchesAll = false;
        break;
      }
    }
    if (!matchesAll) continue;
    score -= kindPriority[item.kind];
    scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.item);
}
