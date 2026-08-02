/**
 * L'organisateur préalable (advance organizer, Ausubel 1960).
 *
 * Principe : avant d'exposer un contenu dense, on présente une structure plus
 * générale et plus abstraite à laquelle le détail viendra s'accrocher. Sans
 * elle, le lecteur reçoit une masse d'informations qu'il ne peut relier à rien
 * — c'est exactement l'effet que produisait cet atlas quand il commençait par
 * une grille de onze rubriques équivalentes.
 *
 * Ces sept clés sont donc délibérément peu nombreuses, formulées comme des
 * renversements d'idées reçues, et destinées à être lues d'une traite.
 */

export interface Key {
  id: string;
  n: number;
  /** L'idée reçue, telle qu'on l'a spontanément. */
  common: string;
  /** Ce qu'il faut lui substituer. */
  key: string;
  text: string;
  /** Où cela se travaille dans l'atlas. */
  path: string;
  pathLabel: string;
}

export const keys: Key[] = [
  {
    id: 'categorie',
    n: 1,
    common: 'Une religion, c’est croire en Dieu.',
    key: '« Religion » est une catégorie européenne récente, pas une chose du monde.',
    text: "Le mot vient du latin religio, le scrupule rituel, et prend son sens actuel en Europe au moment où le christianisme se fracture. Appliqué au shintō, au confucianisme ou aux traditions autochtones, il déforme ce qu'il décrit. La plupart des faux débats sur les religions viennent de là.",
    path: '/cours/quest-ce-quune-religion',
    pathLabel: 'Chapitre 1',
  },
  {
    id: 'question',
    n: 2,
    common: 'Les religions donnent des réponses différentes aux mêmes questions.',
    key: 'Elles ne posent pas les mêmes questions.',
    text: "Le problème central du judaïsme est l'alliance ; du christianisme, le salut par une personne ; de l'islam, la soumission à une parole ; de l'Inde, la sortie du cycle des renaissances ; de la Chine, l'harmonie des ordres. Comparer les réponses sans avoir comparé les questions produit des contresens en série.",
    path: '/comparaisons',
    pathLabel: 'Les comparaisons',
  },
  {
    id: 'devenir',
    n: 3,
    common: 'Une religion est ce que son fondateur a enseigné.',
    key: 'Aucune religion n’est ce qu’elle était au départ.',
    text: "Le monothéisme strict est un aboutissement d'Israël, pas son point de départ. La Trinité met trois siècles à se formuler. Le mot « hindouisme » date du XIXe siècle. Une tradition est un processus — crise, charisme, écrit, canon, schisme, diffusion, réforme — et ce processus obéit à des régularités repérables.",
    path: '/emergence',
    pathLabel: 'Comment une religion naît',
  },
  {
    id: 'circulation',
    n: 4,
    common: 'Chaque religion est un bloc autonome.',
    key: 'Tout circule, tout le temps.',
    text: "Le déluge biblique reprend Gilgamesh ; l'angélologie juive doit au monde iranien ; le vocabulaire des conciles est grec ; le Coran suppose les récits bibliques connus. Reconnaître un emprunt ne dévalue rien : la question intéressante n'est pas qui a copié, mais ce que chacun a fait de ce qu'il a reçu.",
    path: '/influences',
    pathLabel: 'L’arbre des influences',
  },
  {
    id: 'traduction',
    n: 5,
    common: 'On peut lire les textes sacrés en traduction sans perte notable.',
    key: 'Toute traduction est déjà une interprétation, et certaines ont fait l’histoire.',
    text: "« Vierge » pour ʿalmah dans Isaïe fonde la naissance virginale. « Faites pénitence » pour metanoeite déclenche la Réforme quand Érasme le corrige. « Souffrance » pour dukkha fabrique le bouddhisme pessimiste des Européens. Ce sont des décisions de traducteurs, repérables une par une.",
    path: '/atelier',
    pathLabel: 'L’atelier de traduction',
  },
  {
    id: 'registres',
    n: 6,
    common: 'Un texte sacré dit une chose, cohérente.',
    key: 'Chaque corpus est une bibliothèque en débat avec elle-même.',
    text: "Le Dieu qui légifère dans le Deutéronome et celui qui répond à Job par des questions sans réponse ne promettent pas la même chose. Le Jésus des paraboles de Marc et le « je suis » solennel de Jean ne parlent pas pareil. Les sourates mecquoises et médinoises ne font pas le même travail. Citer un texte sacré sans dire de quelle couche, c'est ne rien dire.",
    path: '/dialogues',
    pathLabel: 'Parler aux textes',
  },
  {
    id: 'preuve',
    n: 7,
    common: 'Soit c’est historique, soit c’est inventé.',
    key: 'L’attestation historique est un dégradé à cinq niveaux, et l’histoire ne tranche pas tout.',
    text: "Attesté, probable, débattu, légendaire, mythique : savoir ranger une figure dans ce dégradé vaut mieux que trancher. Et sur la résurrection, la révélation ou le miracle, la méthode historique ne conclut ni dans un sens ni dans l'autre — ce ne sont pas des énoncés qu'elle sait traiter.",
    path: '/methode',
    pathLabel: 'Méthode et limites',
  },
];

/** Trois entrées, selon ce que le lecteur vient chercher. */
export const doors: {
  id: string;
  label: string;
  who: string;
  text: string;
  path: string;
  cta: string;
  minutes: string;
}[] = [
  {
    id: 'cours',
    label: 'Je pars de zéro',
    who: 'Vous voulez comprendre, dans l’ordre, sans savoir par où prendre le sujet.',
    text: "Douze chapitres courts, à lire dans l'ordre. Chacun part d'une question, désamorce une idée reçue, expose l'essentiel en trois ou quatre blocs, puis vous fait rappeler ce que vous venez de lire. À la fin, vous saurez situer n'importe quelle information trouvée ailleurs.",
    path: '/cours',
    cta: 'Commencer le cours',
    minutes: '≈ 1 h 50 au total, par tranches de 8 à 10 minutes',
  },
  {
    id: 'question',
    label: 'J’ai une question précise',
    who: 'Vous vous demandez ce que les religions disent de la mort, du mal, des femmes, de la violence.',
    text: "Quinze dossiers comparatifs posent une même question à toutes les traditions à la fois, avec les convergences, les divergences réelles, et l'analyse de ce que l'écart révèle. C'est la façon la plus rapide d'entrer par le fond plutôt que par la chronologie.",
    path: '/comparaisons',
    cta: 'Voir les questions',
    minutes: '≈ 10 minutes par dossier',
  },
  {
    id: 'reference',
    label: 'Je cherche quelque chose',
    who: 'Vous voulez une fiche sur une personne, un texte, une date, un lieu, une notion.',
    text: "L'encyclopédie : 27 traditions, 227 personnages, 101 textes, 156 événements, 175 lieux cartographiés, 38 notions. Chaque fiche distingue explicitement ce que la tradition affirme et ce que l'histoire établit. La recherche globale ouvre avec ⌘K.",
    path: '/explorer',
    cta: 'Ouvrir l’encyclopédie',
    minutes: 'Consultation libre',
  },
];
