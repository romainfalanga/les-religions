// ---------------------------------------------------------------------------
// Modèle de données de l'Atlas des Religions
// ---------------------------------------------------------------------------

/** Grandes familles religieuses (utilisées pour le filtrage et les couleurs). */
export type Family =
  | 'abrahamique'
  | 'dharmique'
  | 'est-asiatique'
  | 'iranienne'
  | 'antique'
  | 'indigene'
  | 'moderne';

/** Degré d'attestation historique d'un personnage. */
export type Historicity =
  | 'attesté' // sources contemporaines ou quasi contemporaines, consensus large
  | 'probable' // consensus majoritaire pour une existence réelle, biographie incertaine
  | 'débattu' // les spécialistes sont divisés
  | 'légendaire' // noyau historique possible mais irrécupérable
  | 'mythique'; // personnage de récit, sans prétention historique

export interface Section {
  title: string;
  text: string;
}

export interface Quote {
  text: string;
  source: string;
  comment?: string;
}

// ---------------------------------------------------------------------------

export interface Tradition {
  id: string;
  name: string;
  altNames?: string[];
  family: Family;
  /** Libellé affiché de la période de naissance. */
  founded: string;
  /** Année approximative pour le tri (négative = avant l'ère commune). */
  foundedYear: number;
  origin: string;
  adherents: string;
  symbol: string;
  color: string;
  /** Une phrase : ce que la tradition dit du monde. */
  tagline: string;
  summary: string;
  /** Le « noyau » : ce qui resterait si l'on retirait tout le reste. */
  essence: string;
  /** La question à laquelle la tradition répond en priorité. */
  centralQuestion: string;
  coreBeliefs: Section[];
  practices: Section[];
  ethics: Section[];
  history: Section[];
  branches: { name: string; when: string; description: string }[];
  keyTexts: string[];
  keyFigures: string[];
  influencedBy: string[];
  influenced: string[];
  misconceptions: { claim: string; reality: string }[];
  /** Ce que la tradition apporte de spécifique au patrimoine humain. */
  contribution: string;
  /** Tensions internes vivantes aujourd'hui. */
  livingDebates: string[];
}

// ---------------------------------------------------------------------------

export interface Figure {
  id: string;
  name: string;
  altNames?: string[];
  /** Traditions qui revendiquent, vénèrent ou discutent ce personnage. */
  traditions: string[];
  role: string;
  dates: string;
  /** Année approximative pour le tri chronologique. */
  sortYear: number;
  region: string;
  historicity: Historicity;
  historicityNote: string;
  /** Résumé en 2-3 phrases. */
  summary: string;
  /** Récit de vie, par étapes. */
  life: Section[];
  /** Le contenu doctrinal : ce que ce personnage a enseigné ou incarné. */
  teachings: Section[];
  quotes: Quote[];
  /** Postérité, influence, réception. */
  legacy: string;
  /** Lecture croisée : comment différentes traditions voient ce personnage. */
  crossViews?: { tradition: string; view: string }[];
  relations: { figureId: string; label: string }[];
  texts: string[];
  /** Pourquoi ce personnage compte, en une phrase-clé. */
  whyItMatters: string;
}

// ---------------------------------------------------------------------------

export interface SacredText {
  id: string;
  title: string;
  originalTitle?: string;
  traditions: string[];
  composed: string;
  sortYear: number;
  language: string;
  genre: string;
  length?: string;
  summary: string;
  /** Découpage interne du texte. */
  structure: { part: string; description: string }[];
  keyTeachings: Section[];
  passages: Quote[];
  /** Histoire matérielle : manuscrits, canonisation, transmission. */
  transmission: string;
  /** Ce que dit la recherche critique moderne. */
  scholarship: string;
  /** Conseils de lecture concrets. */
  howToRead: string;
  relatedTexts: string[];
}

// ---------------------------------------------------------------------------

export type EventCategory =
  | 'fondation'
  | 'texte'
  | 'schisme'
  | 'politique'
  | 'mystique'
  | 'reforme'
  | 'diffusion'
  | 'conflit'
  | 'pensee'
  | 'archeologie';

export interface TimelineEvent {
  id: string;
  year: number;
  yearEnd?: number;
  displayDate: string;
  title: string;
  description: string;
  traditions: string[];
  category: EventCategory;
  /** 1 = jalon majeur, 2 = important, 3 = contexte. */
  importance: 1 | 2 | 3;
  place?: string;
  figures?: string[];
}

// ---------------------------------------------------------------------------

/** Thème comparatif : une question, plusieurs réponses traditionnelles. */
export interface Theme {
  id: string;
  title: string;
  question: string;
  icon: string;
  summary: string;
  positions: { traditionId: string; label: string; text: string }[];
  convergences: string[];
  divergences: string[];
  /** Analyse de fond : d'où viennent ces écarts ? */
  analysis: string;
}

// ---------------------------------------------------------------------------

/** Notion religieuse, avec ses équivalents dans d'autres traditions. */
export interface Concept {
  id: string;
  term: string;
  original?: string;
  traditions: string[];
  definition: string;
  elaboration: string;
  parallels: { tradition: string; term: string; note: string }[];
  /** Faux amis fréquents. */
  falseFriend?: string;
  related: string[];
}

// ---------------------------------------------------------------------------

export type InfluenceType =
  | 'filiation' // A engendre B
  | 'schisme' // B se sépare de A
  | 'emprunt' // B reprend des éléments de A
  | 'reaction' // B se construit contre A
  | 'syncretisme'; // A et B fusionnent partiellement

export interface Influence {
  from: string;
  to: string;
  type: InfluenceType;
  label: string;
  period: string;
  detail: string;
}

// ---------------------------------------------------------------------------

export type PathStepKind = 'tradition' | 'figure' | 'text' | 'theme' | 'concept' | 'note';

export interface LearningPath {
  id: string;
  title: string;
  subtitle: string;
  level: 'découverte' | 'approfondissement' | 'avancé';
  duration: string;
  goal: string;
  steps: { kind: PathStepKind; id?: string; title?: string; note: string }[];
}
