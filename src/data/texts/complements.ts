import type { SacredText } from '../types';

export const textesComplements: SacredText[] = [
  {
    id: 'hymnes-orphiques',
    title: 'Les Hymnes orphiques et les lamelles d’or',
    traditions: ['religion-grecque'],
    composed: 'Lamelles : Ve-IIIe s. av. J.-C. ; hymnes : IIe-IIIe s. apr. J.-C.',
    sortYear: -400,
    language: 'Grec',
    genre: 'Liturgie initiatique, instructions funéraires',
    summary:
      "L'orphisme ne nous est connu que par bribes : de minces feuilles d'or déposées dans des tombes, portant les instructions à donner à l'âme après la mort, et un recueil d'hymnes bien plus tardif. C'est le contre-modèle de la religion civique grecque.",
    structure: [
      { part: 'Les lamelles d’or', description: 'Trouvées en Grande-Grèce, en Crète et en Thessalie : quelques lignes indiquant au mort quelle source éviter, quelle formule prononcer, quelle filiation revendiquer.' },
      { part: 'Les 87 hymnes', description: 'Recueil liturgique tardif adressé aux divinités, probablement destiné à une confrérie d’Asie Mineure.' },
      { part: 'Le papyrus de Derveni', description: 'Trouvé en 1962 dans une tombe macédonienne, c’est le plus ancien manuscrit européen conservé (IVe s. av. J.-C.) : un commentaire allégorique d’un poème orphique.' },
    ],
    keyTeachings: [
      { title: 'L’âme divine prisonnière', text: "« Je suis enfant de la Terre et du Ciel étoilé, mais ma race est céleste. » L'âme y est d'origine divine, tombée dans un corps qui est un tombeau (sôma / sêma). L'idée, étrangère à Homère, passera à Pythagore, à Platon, puis au christianisme." },
      { title: 'Le cycle des naissances', text: "Les lamelles évoquent une sortie du « cercle douloureux » : la métempsycose est ici attestée en Grèce, indépendamment de l'Inde." },
      { title: 'La mémoire contre l’oubli', text: "Le mort doit refuser la source de Léthé (l'oubli) et demander celle de Mnémosyne (la mémoire). Le salut passe par une connaissance à ne pas perdre — structure que reprendront les gnosticismes." },
      { title: 'Une religion à contre-courant', text: "Végétarisme, refus du sacrifice sanglant, salut individuel, textes révélés : tout y contredit la religion civique grecque. C'est le seul courant grec structurellement comparable aux religions de salut." },
    ],
    passages: [
      { text: 'Je suis enfant de la Terre et du Ciel étoilé ; mais ma race est céleste, et vous le savez vous-mêmes.', source: 'Lamelle de Petelia, IVe s. av. J.-C.' },
      { text: 'Je me suis envolé hors du cercle douloureux et pesant.', source: 'Lamelle de Thourioi' },
    ],
    transmission:
      "Presque tout a disparu. Les lamelles ont survécu parce qu'elles étaient en or et enterrées ; le papyrus de Derveni parce qu'il a été carbonisé sur un bûcher funéraire, ce qui l'a paradoxalement préservé.",
    scholarship:
      "L'existence même d'un « orphisme » cohérent a été contestée au XXe siècle, faute de sources. Les découvertes de lamelles et de Derveni ont renversé la tendance : on admet aujourd'hui un courant réel, initiatique et textuel, actif dès le VIe siècle av. J.-C.",
    howToRead:
      "Les lamelles se lisent en cinq minutes et sont bouleversantes : ce sont des mots donnés à un mort pour qu'il sache quoi dire. Les hymnes tardifs sont d'un intérêt moindre.",
    relatedTexts: ['republique-platon', 'iliade-odyssee', 'evangile-thomas'],
  },
  {
    id: 'livre-revelation',
    title: 'Le Livre de la Révélation (Kitêba Cilwe)',
    traditions: ['yezidisme'],
    composed: 'Tradition orale ; versions écrites XIXe-XXe s.',
    sortYear: 1900,
    language: 'Kurmandji',
    genre: 'Révélation, hymne',
    summary:
      "Un texte court dans lequel Tawusî Melek, l'ange-paon, parle à la première personne. Sa transmission écrite est tardive et controversée : les Yézidis ont longtemps interdit l'écriture de leur tradition.",
    structure: [{ part: 'Discours à la première personne', description: 'L’ange-paon y proclame sa souveraineté sur le monde et son antériorité à toute chose.' }],
    keyTeachings: [
      { title: 'L’intendant du monde', text: "Dieu a créé puis confié le monde à sept anges. Tawusî Melek, le premier d'entre eux, en est l'administrateur — non un rival de Dieu, ce que la calomnie séculaire lui a prêté." },
      { title: 'Le refus de se prosterner', text: "Comme Iblis dans le Coran, il refuse de se prosterner devant Adam. Mais pour les Yézidis, ce refus est une fidélité : il n'adore que Dieu. Le même récit, deux évaluations opposées — c'est ce renversement qui a coûté la vie à des dizaines de milliers de personnes." },
    ],
    passages: [{ text: 'J’étais, je suis, et je serai jusqu’à l’éternité, gouvernant toutes les créatures.', source: 'Kitêba Cilwe' }],
    transmission:
      "Les manuscrits publiés au début du XXe siècle par des orientalistes sont considérés par de nombreux chercheurs, et par des Yézidis, comme des compilations tardives voire des fabrications. La tradition authentique est essentiellement orale : les qewls, hymnes récités par des chanteurs spécialisés.",
    scholarship:
      "Le débat sur l'authenticité de ces « livres saints » est un cas d'école : une religion orale mise sous pression par des observateurs occidentaux qui exigeaient un livre a fini par en produire un. Les études actuelles privilégient le corpus oral des qewls.",
    howToRead:
      "À aborder avec les études savantes récentes, qui distinguent nettement les qewls oraux des manuscrits publiés au XIXe siècle.",
    relatedTexts: ['livre-noir', 'coran'],
  },
  {
    id: 'livre-noir',
    title: 'Le Livre noir (Mishefa Reş)',
    traditions: ['yezidisme'],
    composed: 'Tradition orale ; versions écrites XIXe-XXe s.',
    sortYear: 1900,
    language: 'Kurmandji, arabe',
    genre: 'Cosmogonie, prescriptions',
    summary:
      "Récit de la création du monde par Dieu et les sept anges, de la naissance d'Adam et de l'origine du peuple yézidi — accompagné des interdits qui structurent la communauté.",
    structure: [{ part: 'Cosmogonie et prescriptions', description: 'Création en sept jours par sept anges, façonnement d’Adam, généalogie yézidie, interdits alimentaires et vestimentaires.' }],
    keyTeachings: [
      { title: 'Une origine séparée', text: "Les Yézidis se disent descendants d'Adam seul, sans Ève. Cette généalogie distincte fonde la clôture absolue de la communauté : on naît yézidi, on ne le devient pas." },
      { title: 'Les interdits', text: "Laitue, couleur bleue, certains mots — dont le nom du Malin, jamais prononcé. Les interdits fonctionnent ici comme le marqueur identitaire d'une minorité en danger permanent." },
    ],
    passages: [{ text: 'Dieu créa d’abord la Perle blanche, puis l’oiseau nommé Anfar, et il plaça la Perle sur son dos.', source: 'Mishefa Reş' }],
    transmission: "Même statut incertain que le Livre de la Révélation ; la tradition vivante est portée par les qewls et par les castes religieuses.",
    scholarship: "Les chercheurs contemporains (Philip Kreyenbroek, Christine Allison) ont réorienté l'étude du yézidisme vers son corpus oral et ses pratiques, plutôt que vers ces textes tardifs.",
    howToRead: "À lire comme un document sur la rencontre entre une religion orale et l'exigence occidentale du livre, autant que sur le yézidisme lui-même.",
    relatedTexts: ['livre-revelation', 'avesta'],
  },
];
