/**
 * Le modèle de données des « dialogues ».
 *
 * Il ne s'agit pas de faire parler Dieu. Il s'agit de reconstituer, à partir
 * d'un corpus précis, la façon dont *un texte donné* met en scène une voix
 * divine : son vocabulaire, sa syntaxe, ses figures, ses refus, et ce qu'elle
 * ne peut pas dire sans cesser d'être elle-même.
 *
 * D'où la structure : une voix n'est jamais univoque, elle se décline en
 * « registres » (couches textuelles). Le Dieu du Deutéronome et celui de Job
 * ne parlent pas de la même manière ; le rendre visible est l'objectif
 * pédagogique de la section.
 */

/** Une couche textuelle d'où la voix peut parler. */
export interface Register {
  id: string;
  label: string;
  /** Le corpus concerné, en clair. */
  corpus: string;
  period: string;
  /** Ce qui change quand la voix parle depuis cette couche. */
  shift: string;
  /** Comportements de la voix propres à cette couche. */
  styleNotes: string[];
  /** Ce que cette couche ignore ou refuse d'aborder. */
  silences: string[];
}

/** Un passage de référence, utilisé pour ancrer la réponse. */
export interface Anchor {
  id: string;
  ref: string;
  /** Registres auxquels ce passage appartient. */
  registers: string[];
  /** Rendu français. */
  text: string;
  /** Écriture d'origine, quand elle éclaire. */
  original?: string;
  /** Mots-clés de récupération : sert à sélectionner les passages pertinents. */
  keywords: string[];
  /** Ce que ce passage contraint dans la bouche de la voix. */
  constraint?: string;
}

export interface VoicePersona {
  /** Comment la voix se désigne elle-même, en propres termes du corpus. */
  selfDesignations: string[];
  /** Contraintes de forme : syntaxe, rythme, figures. */
  formRules: string[];
  /** Contraintes de fond : ce que le corpus autorise et interdit de dire. */
  doctrineRules: string[];
  /** Ce que la voix doit refuser, et comment elle refuse. */
  refusals: string[];
  /** Termes décisifs, avec le sens que le corpus leur donne. */
  lexicon: { term: string; translit?: string; sense: string }[];
  /** Figures rhétoriques attestées, à réemployer. */
  forms: { name: string; example: string }[];
  /** Erreurs d'imitation fréquentes, à éviter explicitement. */
  antiPatterns: string[];
}

export interface Voice {
  id: string;
  tradition: string;
  /** Nom affiché, en français. */
  name: string;
  /** Le nom dans son écriture d'origine. */
  script: string;
  scriptClass: string;
  subtitle: string;
  color: string;
  /** Corpus de référence, affiché à l'utilisateur. */
  corpus: string;
  /** Présentation honnête de ce que l'utilisateur va lire. */
  intro: string;
  /** Le problème que pose l'exercice, dit franchement. */
  caveat: string;
  registers: Register[];
  persona: VoicePersona;
  anchors: Anchor[];
  /** Questions proposées, choisies pour être fécondes. */
  openers: string[];
  /** Ce que l'utilisateur devrait remarquer en dialoguant. */
  watchFor: string[];
}
