/** Une unité de texte : un verset, une strophe, un aphorisme. */
export interface CorpusUnit {
  id: string;
  /** Référence canonique, ex. « 1,1 ». */
  ref: string;
  /** Titre facultatif de l'unité. */
  label?: string;
  /** Le texte dans son écriture d'origine. */
  original: string;
  /** Translittération en caractères latins. */
  translit: string;
  /** Rendu mot à mot, volontairement pénible à lire : c'est le point de comparaison. */
  literal: string;
  /** Traductions françaises historiques, confessionnelles ou savantes. */
  translations: { source: string; year: string; text: string; note?: string }[];
  /** Décomposition des termes décisifs. */
  gloss?: { term: string; translit: string; sense: string }[];
  /** Le problème de traduction, et ce qu'il engage. */
  issue?: { title: string; text: string };
}

export interface CorpusBook {
  id: string;
  title: string;
  /** Identifiant du texte correspondant dans la section « Textes ». */
  textId?: string;
  traditions: string[];
  language: string;
  script: string;
  /** Écriture de droite à gauche. */
  rtl: boolean;
  composed: string;
  intro: string;
  /** Ce qui, dans cette langue, résiste structurellement au français. */
  translationNote: string;
  units: CorpusUnit[];
}
