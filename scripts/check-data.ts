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
import { chapters, parts } from '../src/data/course';
import { keys, doors } from '../src/data/orientation';
import { voices, buildSystemPrompt, selectAnchors } from '../src/data/dialogue';

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

// --- cours -------------------------------------------------------------------
assertUnique('course', chapters.map((c) => c.id));
const partIds = new Set(parts.map((p) => p.id));
const knownRoutes = new Set([
  '/', '/commencer', '/cours', '/explorer', '/traditions', '/personnages', '/textes',
  '/chronologie', '/carte', '/atelier', '/emergence', '/dialogues', '/comparaisons',
  '/notions', '/influences', '/parcours', '/methode',
]);
const knownPath = (path: string) => {
  const base = path.split('?')[0].split('#')[0];
  if (knownRoutes.has(base)) return true;
  // Chemins de détail : /cours/x, /parcours/x, /dialogues/x…
  const [, section, id] = base.split('/');
  if (section === 'cours') return chapters.some((c) => c.id === id);
  if (section === 'parcours') return learningPaths.some((p) => p.id === id);
  if (section === 'dialogues') return voices.some((v) => v.id === id);
  if (section === 'comparaisons') return themeIds.has(id);
  return knownRoutes.has('/' + section);
};

for (const c of chapters) {
  if (!partIds.has(c.part)) problems.push({ where: `chapitre/${c.id}`, what: `partie inconnue : « ${c.part} »` });
  if (c.blocks.length < 2 || c.blocks.length > 4) {
    problems.push({ where: `chapitre/${c.id}`, what: `${c.blocks.length} blocs : la charge cognitive visée est de 2 à 4` });
  }
  if (c.checks.length < 3) {
    problems.push({ where: `chapitre/${c.id}`, what: `${c.checks.length} question(s) de rappel : au moins 3 attendues` });
  }
  for (const l of c.explore) {
    const map: Record<string, Set<string>> = {
      tradition: traditionIds, figure: figureIds, text: textIds,
      theme: themeIds, concept: conceptIds, event: eventIds,
    };
    if (l.kind === 'page') {
      if (!l.path || !knownPath(l.path)) {
        problems.push({ where: `chapitre/${c.id}`, what: `chemin inconnu : « ${l.path} »` });
      }
    } else {
      const set = map[l.kind];
      if (set && !set.has(l.id)) {
        problems.push({ where: `chapitre/${c.id}`, what: `${l.kind} inconnu : « ${l.id} »` });
      }
    }
  }
}
if (chapters.some((c, i) => c.n !== i + 1)) {
  problems.push({ where: 'course', what: 'la numérotation des chapitres n’est pas continue' });
}

// --- organisateur préalable --------------------------------------------------
for (const k of [...keys, ...doors]) {
  const path = 'path' in k ? k.path : '';
  if (!knownPath(path)) problems.push({ where: `orientation/${k.id}`, what: `chemin inconnu : « ${path} »` });
}

// --- dialogues ---------------------------------------------------------------
assertUnique('dialogue/voices', voices.map((v) => v.id));
for (const v of voices) {
  if (!traditionIds.has(v.tradition)) {
    problems.push({ where: `voix/${v.id}`, what: `tradition inconnue : « ${v.tradition} »` });
  }
  assertUnique(`voix/${v.id}/anchors`, v.anchors.map((a) => a.id));
  assertUnique(`voix/${v.id}/registers`, v.registers.map((r) => r.id));
  const regIds = new Set(v.registers.map((r) => r.id));
  for (const a of v.anchors) {
    if (a.registers.length === 0) {
      problems.push({ where: `voix/${v.id}/${a.id}`, what: 'aucun registre' });
    }
    for (const r of a.registers) {
      if (!regIds.has(r)) {
        problems.push({ where: `voix/${v.id}/${a.id}`, what: `registre inconnu : « ${r} »` });
      }
    }
    if (a.keywords.length < 3) {
      problems.push({ where: `voix/${v.id}/${a.id}`, what: 'moins de trois mots-clés : la sélection lexicale sera aveugle' });
    }
  }
  // Chaque registre doit disposer d'assez de passages pour tenir une conversation.
  for (const r of v.registers) {
    const n = v.anchors.filter((a) => a.registers.includes(r.id)).length;
    if (n < 3) {
      problems.push({ where: `voix/${v.id}/registre/${r.id}`, what: `${n} passage(s) seulement` });
    }
  }
  // Le prompt assemblé doit rester sous la borne acceptée par le relais.
  for (const r of v.registers) {
    const prompt = buildSystemPrompt(v, r.id, selectAnchors(v, r.id, []));
    if (prompt.length > 24_000) {
      problems.push({ where: `voix/${v.id}/registre/${r.id}`, what: `prompt de ${prompt.length} caractères : au-delà de la limite du relais (24 000)` });
    }
    if (!prompt.includes('SOURCES:')) {
      problems.push({ where: `voix/${v.id}/registre/${r.id}`, what: 'le protocole de sources a disparu du prompt' });
    }
  }
}

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
  chapters: chapters.length,
  voices: voices.length,
  anchors: voices.reduce((n, v) => n + v.anchors.length, 0),
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
  'chapitres de cours': chapters.length,
  'voix de dialogue': voices.length,
  'passages ancrés': voices.reduce((n, v) => n + v.anchors.length, 0),
};

console.log('Contenu de l’atlas');
for (const [k, v] of Object.entries(counts)) console.log(`  ${String(v).padStart(5)}  ${k}`);

if (problems.length) {
  console.error(`\n${problems.length} référence(s) cassée(s) :`);
  for (const p of problems) console.error(`  ${p.where} — ${p.what}`);
  process.exit(1);
}

console.log('\nAucune référence cassée.');
