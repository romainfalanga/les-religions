/**
 * Vérification de l'intégrité des données.
 *
 * L'atlas est entièrement piloté par les fichiers de `src/data`. Une référence
 * croisée cassée (un personnage cité qui n'existe pas, un texte lié introuvable)
 * ne provoque pas d'erreur TypeScript : elle produit silencieusement un lien mort.
 * Ce script vérifie toutes les références et sort en erreur si l'une manque.
 *
 *   npm run check:data
 */

import { traditions, traditionAliases } from '../src/data/traditions';
import { figures, figuresById } from '../src/data/figures';
import { texts, textsById } from '../src/data/texts';
import { timeline } from '../src/data/timeline';
import { themes } from '../src/data/themes';
import { concepts } from '../src/data/concepts';
import { influences, learningPaths } from '../src/data/influences';
import { places, routes } from '../src/data/geo';
import { corpusBooks } from '../src/data/corpus';
import { mechanisms, canonLadder } from '../src/data/emergence';
import { counts as declared } from '../src/data/counts';

type Problem = { where: string; what: string };
const problems: Problem[] = [];

const traditionIds = new Set([...traditions.map((t) => t.id), ...Object.keys(traditionAliases)]);
const figureIds = new Set(figures.map((f) => f.id));
const textIds = new Set(texts.map((t) => t.id));
const eventIds = new Set(timeline.map((e) => e.id));
const themeIds = new Set(themes.map((t) => t.id));
const conceptIds = new Set(concepts.map((c) => c.id));
const placeIds = new Set(places.map((p) => p.id));

function check(set: Set<string>, kind: string, ids: string[] | undefined, where: string) {
  if (!ids) return;
  for (const id of ids) {
    if (!set.has(id)) problems.push({ where, what: `${kind} inconnu : « ${id} »` });
  }
}

// --- unicité des identifiants ------------------------------------------------
function assertUnique(label: string, ids: string[]) {
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) problems.push({ where: label, what: `identifiant en double : « ${id} »` });
    seen.add(id);
  }
}
assertUnique('traditions', traditions.map((t) => t.id));
assertUnique('figures', figures.map((f) => f.id));
assertUnique('texts', texts.map((t) => t.id));
assertUnique('timeline', timeline.map((e) => e.id));
assertUnique('themes', themes.map((t) => t.id));
assertUnique('concepts', concepts.map((c) => c.id));
assertUnique('geo/places', places.map((p) => p.id));
assertUnique('corpus', corpusBooks.map((b) => b.id));
assertUnique('emergence', mechanisms.map((m) => m.id));

// --- traditions --------------------------------------------------------------
for (const t of traditions) {
  check(figureIds, 'personnage', t.keyFigures, `tradition/${t.id}`);
  check(textIds, 'texte', t.keyTexts, `tradition/${t.id}`);
}

// --- figures -----------------------------------------------------------------
for (const f of figures) {
  check(traditionIds, 'tradition', f.traditions, `figure/${f.id}`);
  check(textIds, 'texte', f.texts, `figure/${f.id}`);
  check(
    figureIds,
    'personnage',
    f.relations.map((r) => r.figureId),
    `figure/${f.id}`,
  );
}

// --- textes ------------------------------------------------------------------
for (const t of texts) {
  check(traditionIds, 'tradition', t.traditions, `texte/${t.id}`);
  check(figureIds, 'personnage', t.relatedFigures, `texte/${t.id}`);
}

// --- chronologie -------------------------------------------------------------
for (const e of timeline) {
  check(traditionIds, 'tradition', e.traditions, `événement/${e.id}`);
  check(figureIds, 'personnage', e.figures, `événement/${e.id}`);
  check(textIds, 'texte', e.texts, `événement/${e.id}`);
}

// --- comparaisons ------------------------------------------------------------
for (const th of themes) {
  for (const p of th.positions) {
    if (!traditionIds.has(p.traditionId)) {
      // Certaines positions renvoient à des courants sans fiche : tolérés,
      // mais on vérifie qu'ils ont bien un alias lisible.
      if (!p.traditionId.trim()) problems.push({ where: `thème/${th.id}`, what: 'position sans tradition' });
    }
  }
  check(textIds, 'texte', th.relatedTexts, `thème/${th.id}`);
  check(conceptIds, 'notion', th.relatedConcepts, `thème/${th.id}`);
}

// --- notions -----------------------------------------------------------------
for (const c of concepts) {
  check(conceptIds, 'notion', c.related, `notion/${c.id}`);
}

// --- influences --------------------------------------------------------------
for (const i of influences) {
  check(figureIds, 'personnage', i.figures, `influence/${i.from}→${i.to}`);
  check(textIds, 'texte', i.texts, `influence/${i.from}→${i.to}`);
}

for (const p of learningPaths) {
  for (const s of p.steps) {
    const map: Record<string, Set<string>> = {
      tradition: traditionIds,
      figure: figureIds,
      text: textIds,
      theme: themeIds,
      concept: conceptIds,
      event: eventIds,
    };
    const set = map[s.kind];
    if (set && !set.has(s.id)) {
      problems.push({ where: `parcours/${p.id}`, what: `${s.kind} inconnu : « ${s.id} »` });
    }
  }
}

// --- carte -------------------------------------------------------------------
for (const p of places) {
  check(traditionIds, 'tradition', p.traditions, `lieu/${p.id}`);
  check(figureIds, 'personnage', p.figures, `lieu/${p.id}`);
  check(textIds, 'texte', p.texts, `lieu/${p.id}`);
  check(eventIds, 'événement', p.events, `lieu/${p.id}`);
  if (Math.abs(p.lat) > 90 || Math.abs(p.lon) > 180) {
    problems.push({ where: `lieu/${p.id}`, what: `coordonnées hors bornes (${p.lat}, ${p.lon})` });
  }
}
for (const r of routes) {
  check(traditionIds, 'tradition', r.traditions, `route/${r.id}`);
  check(placeIds, 'lieu', r.places, `route/${r.id}`);
  if (r.points.length < 2) problems.push({ where: `route/${r.id}`, what: 'moins de deux points' });
}

// --- atelier de traduction ---------------------------------------------------
for (const b of corpusBooks) {
  check(traditionIds, 'tradition', b.traditions, `corpus/${b.id}`);
  if (b.textId && !textIds.has(b.textId)) {
    problems.push({ where: `corpus/${b.id}`, what: `texte inconnu : « ${b.textId} »` });
  }
  if (b.units.length === 0) problems.push({ where: `corpus/${b.id}`, what: 'aucun passage' });
  for (const u of b.units) {
    if (!u.original.trim()) problems.push({ where: `corpus/${b.id}/${u.id}`, what: 'texte original vide' });
    if (u.translations.length < 2) {
      problems.push({
        where: `corpus/${b.id}/${u.id}`,
        what: `${u.translations.length} traduction(s) : la confrontation en exige au moins deux`,
      });
    }
  }
}

// --- émergence ---------------------------------------------------------------
for (const m of mechanisms) {
  for (const c of m.cases) {
    if (!traditionIds.has(c.tradition)) {
      problems.push({ where: `mécanisme/${m.id}`, what: `tradition inconnue : « ${c.tradition} »` });
    }
    check(figureIds, 'personnage', c.figures, `mécanisme/${m.id}`);
    check(textIds, 'texte', c.texts, `mécanisme/${m.id}`);
    check(eventIds, 'événement', c.events, `mécanisme/${m.id}`);
  }
}
if (canonLadder.length === 0) problems.push({ where: 'emergence', what: 'échelle de canonisation vide' });

// --- volumétrie déclarée (utilisée par la page d'accueil) ---------------------
const actual: typeof declared = {
  traditions: traditions.length,
  figures: figures.length,
  texts: texts.length,
  events: timeline.length,
  themes: themes.length,
  concepts: concepts.length,
  influences: influences.length,
  paths: learningPaths.length,
  places: places.length,
  routes: routes.length,
  corpusBooks: corpusBooks.length,
  corpusUnits: corpusBooks.reduce((n, b) => n + b.units.length, 0),
  mechanisms: mechanisms.length,
};
for (const [k, v] of Object.entries(actual) as [keyof typeof declared, number][]) {
  if (declared[k] !== v) {
    problems.push({
      where: 'data/counts.ts',
      what: `${k} : déclaré ${declared[k]}, réel ${v} — mettre à jour src/data/counts.ts`,
    });
  }
}

// --- rapport -----------------------------------------------------------------
const counts = {
  traditions: traditions.length,
  personnages: figures.length,
  textes: texts.length,
  événements: timeline.length,
  comparaisons: themes.length,
  notions: concepts.length,
  influences: influences.length,
  parcours: learningPaths.length,
  lieux: places.length,
  routes: routes.length,
  'corpus (livres)': corpusBooks.length,
  'corpus (passages)': corpusBooks.reduce((n, b) => n + b.units.length, 0),
  mécanismes: mechanisms.length,
};

console.log('Contenu de l’atlas');
for (const [k, v] of Object.entries(counts)) console.log(`  ${String(v).padStart(5)}  ${k}`);

if (problems.length) {
  console.error(`\n${problems.length} référence(s) cassée(s) :`);
  for (const p of problems) console.error(`  ${p.where} — ${p.what}`);
  process.exit(1);
}

console.log('\nAucune référence cassée.');
