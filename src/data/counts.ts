/**
 * Volumétrie de l'atlas, tenue à la main.
 *
 * La page d'accueil affiche ces chiffres. Les importer depuis les données
 * elles-mêmes obligerait le navigateur à télécharger tout le corpus avant
 * d'afficher la première page — d'où cette copie.
 *
 * `npm run check:data` échoue si l'un de ces nombres ne correspond plus.
 */
export const counts = {
  traditions: 27,
  figures: 227,
  texts: 101,
  events: 156,
  themes: 15,
  concepts: 38,
  influences: 47,
  paths: 9,
  places: 175,
  routes: 22,
  corpusBooks: 11,
  corpusUnits: 56,
  mechanisms: 14,
  chapters: 12,
  voices: 3,
  anchors: 87,
};
