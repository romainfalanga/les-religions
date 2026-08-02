/**
 * Le cours : la colonne vertébrale pédagogique de l'atlas.
 *
 * Le reste du site est une encyclopédie — excellent pour vérifier, désastreux
 * pour commencer. Ce fichier fournit ce qui manquait : un ordre. Chaque
 * chapitre suit le cycle établi par David Merrill (*First Principles of
 * Instruction*) :
 *
 *   1. un problème réel à résoudre, énoncé comme question ;
 *   2. l'activation de ce que le lecteur croit déjà savoir — presque toujours
 *      une idée reçue, qu'on nomme avant de la défaire ;
 *   3. la démonstration, en trois ou quatre blocs courts ;
 *   4. l'application, sous forme de questions de rappel (retrieval practice,
 *      dont l'effet sur la rétention est mieux établi que celui de la relecture) ;
 *   5. l'intégration, par des liens vers les fiches de l'encyclopédie.
 *
 * La charge cognitive est bornée volontairement : quatre blocs maximum, une
 * idée-clé par chapitre, aucun choix à faire pendant la lecture.
 */

export type ExploreKind = 'tradition' | 'figure' | 'text' | 'theme' | 'concept' | 'event' | 'page';

export interface ExploreLink {
  kind: ExploreKind;
  id: string;
  /** Pourquoi aller voir cette fiche précisément, maintenant. */
  why: string;
  /** Pour kind === 'page' : le chemin et le libellé. */
  path?: string;
  label?: string;
}

export interface Chapter {
  id: string;
  n: number;
  part: string;
  title: string;
  /** Le problème auquel le chapitre répond. */
  question: string;
  minutes: number;
  /** Activation : ce que le lecteur croit probablement, et pourquoi c'est faux ou incomplet. */
  activate: { belief: string; trouble: string };
  blocks: { title: string; text: string }[];
  /** L'idée à retenir si l'on ne devait en retenir qu'une. */
  keyIdea: string;
  /** Rappel actif. Les réponses sont masquées par défaut : c'est le point. */
  checks: { q: string; a: string }[];
  explore: ExploreLink[];
}

export const parts: { id: string; label: string; description: string; color: string }[] = [
  {
    id: 'origines',
    label: 'I. Avant les religions',
    description:
      "Ce qu'on peut savoir des premières pratiques, et comment les premiers dieux sont devenus des institutions d'État.",
    color: '#a3603c',
  },
  {
    id: 'monotheismes',
    label: 'II. Les trois monothéismes',
    description:
      "Comment un dieu national est devenu le seul, puis s'est fait homme chez les uns et livre chez les autres.",
    color: '#2f5d8a',
  },
  {
    id: 'orient',
    label: 'III. Les autres questions',
    description:
      "L'Inde et la Chine ne répondent pas autrement à la même question : elles posent une autre question.",
    color: '#3f6b63',
  },
  {
    id: 'lecture',
    label: 'IV. Savoir lire',
    description:
      "Ce qui circule d'une religion à l'autre, comment on établit ce qu'on affirme, et ce qui se passe aujourd'hui.",
    color: '#7a5a72',
  },
];

export const chapters: Chapter[] = [
  // ------------------------------------------------------------ I. ORIGINES
  {
    id: 'quest-ce-quune-religion',
    n: 1,
    part: 'origines',
    title: 'Qu’est-ce qu’une religion ?',
    question:
      'Vous devez décider si le confucianisme, le stoïcisme et le football sont des religions. Sur quel critère ?',
    minutes: 8,
    activate: {
      belief:
        'Une religion, c’est croire en Dieu, avec un livre saint, des prêtres et un lieu de culte.',
      trouble:
        'Aucun de ces quatre éléments n’est universel. Le bouddhisme ancien n’a pas de dieu créateur ; le shintō n’a pas de fondateur ni de texte fondateur ; les religions grecque et romaine n’avaient pas de credo ; le judaïsme rabbinique n’a plus de prêtres depuis 70. Une définition qui exclut la moitié de son objet n’est pas une définition.',
    },
    blocks: [
      {
        title: 'Le mot lui-même est un piège',
        text: "« Religion » vient du latin religio, qui désignait le scrupule rituel — l'obligation de faire les gestes correctement — et non un rapport de foi à une personne divine. Le mot a pris son sens moderne en Europe, à l'époque où le christianisme se scindait et où il fallait nommer des blocs concurrents. Il a ensuite été exporté et plaqué sur des réalités qui ne se pensaient pas ainsi : le mot hindi dharma, le chinois jiao (enseignement), l'arabe dīn (dette, jugement, obéissance) ne se recouvrent pas.",
      },
      {
        title: 'Quatre familles de définitions',
        text: "Les définitions **substantielles** disent de quoi ça parle (le surnaturel, le sacré) — elles excluent le bouddhisme ancien. Les définitions **fonctionnelles** disent à quoi ça sert (donner du sens, souder un groupe) — elles finissent par inclure le nationalisme et le supportérisme. Les définitions **par ressemblance de famille**, inspirées de Wittgenstein, renoncent au critère unique : il y a un air de famille, pas un trait commun. Les définitions **critiques** vont plus loin — Talal Asad soutient qu'il n'y a pas d'essence de la religion, seulement des configurations historiques.",
      },
      {
        title: 'Ce qu’on gagne à renoncer à une définition',
        text: "Chercher la définition juste fait perdre du temps ; observer ce que les gens font en fait gagner. Presque partout on trouve les mêmes briques, en proportions variables : des récits d'origine, des gestes réglés, des interdits, des spécialistes, des lieux, une communauté, une idée de ce qui vaut. Ce sont ces briques que l'atlas compare, tradition par tradition, plutôt qu'une essence introuvable.",
      },
    ],
    keyIdea:
      "« Religion » n'est pas une chose qu'on découvre dans le monde : c'est une catégorie européenne moderne, utile si l'on sait qu'elle déforme, trompeuse si l'on croit qu'elle décrit.",
    checks: [
      {
        q: 'Pourquoi une définition par la croyance en Dieu ne fonctionne-t-elle pas ?',
        a: 'Parce qu’elle exclut le bouddhisme ancien, le jaïnisme et une bonne partie du confucianisme et du taoïsme, qui n’ont pas de dieu créateur central — et qu’une catégorie qui exclut des centaines de millions de pratiquants ne décrit pas son objet.',
      },
      {
        q: 'Que voulait dire religio en latin ?',
        a: 'Le scrupule dans l’accomplissement des rites — faire les gestes correctement. Pas la foi, pas l’adhésion intérieure à des énoncés.',
      },
      {
        q: 'Quel est le défaut des définitions fonctionnelles ?',
        a: 'Elles sont trop larges : si une religion est « ce qui donne du sens et soude un groupe », alors le nationalisme, un club sportif ou un parti y entrent aussi.',
      },
    ],
    explore: [
      { kind: 'concept', id: 'sacre', why: 'La notion la plus fréquemment invoquée pour définir la religion — et ses limites.' },
      { kind: 'tradition', id: 'confucianisme', why: 'Le cas qui met toute définition en difficulté : morale d’État, ou religion ?' },
      { kind: 'page', id: 'methode', path: '/methode', label: 'Méthode', why: 'Les partis pris de vocabulaire retenus dans tout l’atlas.' },
    ],
  },
  {
    id: 'avant-lecriture',
    n: 2,
    part: 'origines',
    title: 'Avant l’écriture',
    question:
      'Que peut-on affirmer sur la religion préhistorique — et à partir de quel moment invente-t-on ?',
    minutes: 8,
    activate: {
      belief:
        'Les hommes préhistoriques adoraient des déesses-mères et pratiquaient un chamanisme universel, comme le montrent les peintures des grottes.',
      trouble:
        'Presque tout cela est de l’interprétation. On a des objets et des sépultures, pas des croyances. La « déesse-mère paléolithique » est une reconstruction du XXe siècle à partir de statuettes dont on ignore l’usage. La prudence n’est pas de la frilosité : c’est ce qui distingue l’archéologie du roman.',
    },
    blocks: [
      {
        title: 'Ce qui est établi',
        text: "On a des sépultures intentionnelles très anciennes — Qafzeh en Israël, autour de −100 000, avec des ossements disposés et parfois accompagnés d'objets. On a de l'ocre, des coquillages percés, des pigments. On a l'art pariétal, à partir de −40 000 environ. On a Göbekli Tepe en Anatolie, vers −9500 : des enceintes de piliers en T monumentaux, sculptés d'animaux, érigés par des populations qui ne cultivaient pas encore.",
      },
      {
        title: 'Ce qui est déduit, et de quel poids',
        text: "Une sépulture soignée suggère que la mort est traitée comme un problème et non comme un simple fait — c'est une inférence solide. Que les peintures de Lascaux soient des rituels de chasse, des cartes du ciel ou des exercices d'apprentissage : là, les hypothèses concurrentes sont nombreuses et aucune ne l'emporte. Göbekli Tepe a renversé un consensus : on croyait que l'agriculture précédait le monumental religieux, le site suggère l'inverse ou du moins leur simultanéité.",
      },
      {
        title: 'Le piège de l’analogie ethnographique',
        text: "Pour interpréter, on s'appuie souvent sur les sociétés de chasseurs-cueilleurs observées aux XIXe et XXe siècles. C'est utile et dangereux : ces sociétés ne sont pas des fossiles vivants, elles ont leur propre histoire, souvent marquée par le contact colonial. Le mot « chamanisme », emprunté aux peuples de Sibérie, a été étendu à la planète entière au point de ne plus rien désigner de précis.",
      },
    ],
    keyIdea:
      "Sur la préhistoire religieuse, la bonne posture est de savoir énoncer trois choses distinctes : ce qu'on a trouvé, ce qu'on en déduit raisonnablement, et ce qu'on projette. La plupart des livres grand public confondent les trois.",
    checks: [
      {
        q: 'Pourquoi Göbekli Tepe a-t-il changé la chronologie admise ?',
        a: 'Parce que ce site monumental à fonction vraisemblablement rituelle date d’environ −9500, avant l’agriculture dans la région : on pensait que la sédentarisation agricole précédait les grands aménagements collectifs, l’ordre est au moins à réexaminer.',
      },
      {
        q: 'Quelle inférence peut-on tirer d’une sépulture soignée ?',
        a: 'Que la mort fait l’objet d’un traitement social délibéré. On ne peut pas en déduire une croyance précise en un au-delà : le geste est attesté, son contenu mental ne l’est pas.',
      },
      {
        q: 'Quel est le risque de l’analogie avec les peuples chasseurs-cueilleurs contemporains ?',
        a: 'Les traiter comme des survivances immobiles de la préhistoire, alors qu’ils ont une histoire propre et ont souvent été transformés par le contact colonial.',
      },
    ],
    explore: [
      { kind: 'event', id: 'gobekli-tepe', why: 'Le site qui a forcé à réviser la chronologie.' },
      { kind: 'event', id: 'sepulture-qafzeh', why: 'La plus ancienne sépulture intentionnelle attestée de l’atlas.' },
      { kind: 'concept', id: 'chamanisme', why: 'Un mot devenu si large qu’il ne désigne presque plus rien.' },
    ],
  },
  {
    id: 'dieux-et-etats',
    n: 3,
    part: 'origines',
    title: 'Les premiers dieux ont des archives',
    question:
      'Pourquoi les premières religions dont on ait le texte sont-elles des religions d’État ?',
    minutes: 9,
    activate: {
      belief:
        'La religion est d’abord une affaire personnelle : on croit, puis on s’organise.',
      trouble:
        'Les premiers documents religieux ne parlent pas de croyance individuelle. Ce sont des inventaires de temple, des calendriers de sacrifices, des hymnes royaux et des codes de lois. La religion y est une fonction publique — l’équivalent d’un ministère — avant d’être une conviction.',
    },
    blocks: [
      {
        title: 'L’écriture naît de la comptabilité des temples',
        text: "Le cunéiforme apparaît en Mésopotamie vers −3300, d'abord pour compter des sacs d'orge et des têtes de bétail appartenant aux sanctuaires. Le premier auteur connu de l'histoire dont on ait le nom est une femme, Enheduanna, grande prêtresse d'Ur au XXIIIe siècle, autrice d'hymnes à Inanna. La littérature religieuse et l'administration naissent du même geste.",
      },
      {
        title: 'Le roi tient le monde en place',
        text: "En Égypte, le pharaon maintient la maât — l'ordre juste du monde — contre le chaos ; sa fonction est cosmique, pas seulement politique. En Mésopotamie, le roi reçoit la loi du dieu : la stèle de Hammurabi le montre debout devant Shamash. La religion y répond moins à « que dois-je croire ? » qu'à « comment le monde tient-il, et qui en est responsable ? ».",
      },
      {
        title: 'Une exception qui éclaire',
        text: "Vers −1350, Akhenaton impose en Égypte le culte exclusif d'Aton, ferme les temples des autres dieux, martèle leurs noms. C'est la première tentative documentée de monolâtrie d'État. Elle ne survit pas à son auteur : les temples rouvrent, son nom est effacé. Freud y a vu la source du monothéisme hébreu — l'hypothèse est séduisante et sans preuve, mais l'épisode montre qu'un tel geste est pensable au IIe millénaire.",
      },
      {
        title: 'Ce que ces textes nous laissent',
        text: "Beaucoup plus qu'on ne le croit. Le déluge d'Atrahasis et de Gilgamesh précède celui de la Genèse et lui ressemble jusque dans le détail de l'oiseau lâché. Le code de Hammurabi précède les lois du Pentateuque et partage avec elles la loi du talion. Les Instructions d'Amenemopé, en Égypte, ressemblent de si près à un passage des Proverbes que la dépendance est largement admise. Rien de tout cela ne naît de rien.",
      },
    ],
    keyIdea:
      "Les religions attestées les plus anciennes sont des systèmes de maintien de l'ordre du monde, administrés par l'État. La religion comme affaire de conviction intérieure est une évolution tardive, pas le point de départ.",
    checks: [
      {
        q: 'À quoi a d’abord servi l’écriture en Mésopotamie ?',
        a: 'À la comptabilité des temples : inventaires de grain et de bétail. La littérature religieuse est venue ensuite, portée par le même outil.',
      },
      {
        q: 'Qu’est-ce que la maât égyptienne ?',
        a: 'L’ordre juste du monde — vérité, équilibre, justice — que le pharaon a pour fonction de maintenir contre le chaos. Une notion cosmique et politique à la fois.',
      },
      {
        q: 'Citez deux emprunts documentés entre le Proche-Orient ancien et la Bible.',
        a: 'Le récit du déluge (Atrahasis et Gilgamesh, avec l’épisode de l’oiseau lâché) et la loi du talion du code de Hammurabi. On peut ajouter les Instructions d’Amenemopé et les Proverbes.',
      },
    ],
    explore: [
      { kind: 'figure', id: 'enheduanna', why: 'Le premier auteur signé de l’histoire — une prêtresse.' },
      { kind: 'figure', id: 'akhenaton', why: 'La première monolâtrie d’État documentée, et son échec.' },
      { kind: 'theme', id: 'deluges', why: 'Le dossier comparatif qui aligne les récits de déluge, du plus ancien au plus récent.' },
    ],
  },
  {
    id: 'age-axial',
    n: 4,
    part: 'origines',
    title: 'Le moment où tout bascule',
    question:
      'Bouddha, Confucius, les prophètes hébreux et les premiers philosophes grecs sont presque contemporains. Coïncidence ?',
    minutes: 9,
    activate: {
      belief:
        'C’est une coïncidence extraordinaire, ou bien le signe d’un éveil spirituel simultané de l’humanité.',
      trouble:
        'Ni l’un ni l’autre. La concentration est réelle mais moins nette qu’on ne le dit, et les causes proposées sont matérielles : villes, monnaie, écriture alphabétique, empires. La thèse est utile comme question, douteuse comme explication.',
    },
    blocks: [
      {
        title: 'Le constat',
        text: "Entre le VIIIe et le IIIe siècle avant notre ère, sans contact établi, plusieurs foyers produisent des ruptures comparables : en Inde, le Bouddha et Mahāvīra contestent le sacrifice védique ; en Chine, Confucius et les auteurs taoïstes cherchent un ordre qui ne repose plus sur la seule divination ; en Israël, Amos et Isaïe subordonnent le culte à la justice ; en Grèce, Socrate déplace la question du cosmos vers la conduite. Karl Jaspers a nommé cela l'« âge axial » en 1949.",
      },
      {
        title: 'Ce qui change vraiment',
        text: "Un même déplacement, dans des langues différentes : de l'efficacité du rite vers l'intériorité de l'intention ; du groupe vers l'individu responsable ; d'un ordre donné vers un ordre à justifier. Apparaît partout une distinction entre le monde tel qu'il est et le monde tel qu'il devrait être — et avec elle, la possibilité de critiquer sa propre société au nom d'un principe supérieur.",
      },
      {
        title: 'Les objections',
        text: "La fenêtre est large — cinq siècles — et l'on y fait entrer ce qu'on veut. Zarathoustra est difficile à dater et déborde de toute façon. L'Égypte et la Mésopotamie, qui ne produisent pas de rupture comparable, sont écartées sans justification. Enfin, expliquer la simultanéité par « les villes et la monnaie » ne suffit pas : ces conditions existent ailleurs sans produire d'âge axial. La thèse décrit bien, elle explique mal.",
      },
    ],
    keyIdea:
      "L'âge axial est un excellent instrument de comparaison et une mauvaise théorie causale. Retenez le déplacement qu'il pointe — du rite vers l'intention, du groupe vers l'individu — plus que la coïncidence chronologique.",
    checks: [
      {
        q: 'Quel déplacement commun l’âge axial désigne-t-il ?',
        a: 'Du rituel exact vers l’intention intérieure, du collectif vers l’individu responsable, et l’apparition d’un écart entre le monde tel qu’il est et le monde tel qu’il devrait être.',
      },
      {
        q: 'Donnez deux objections sérieuses à la thèse.',
        a: 'La fenêtre chronologique est si large qu’elle permet d’y faire entrer presque n’importe quoi ; et les civilisations qui ne produisent pas de rupture comparable (Égypte, Mésopotamie) sont écartées sans critère explicite.',
      },
      {
        q: 'Qui a forgé l’expression, et quand ?',
        a: 'Karl Jaspers, en 1949.',
      },
    ],
    explore: [
      { kind: 'concept', id: 'age-axial', why: 'La notice complète, avec l’historiographie du débat.' },
      { kind: 'figure', id: 'bouddha', why: 'Le cas le mieux documenté de la rupture indienne.' },
      { kind: 'figure', id: 'amos', why: 'Le prophète qui subordonne le sacrifice à la justice — la rupture israélite en une phrase.' },
    ],
  },

  // ------------------------------------------------------- II. MONOTHÉISMES
  {
    id: 'naissance-monotheisme',
    n: 5,
    part: 'monotheismes',
    title: 'Comment un dieu devient le seul',
    question:
      'Le monothéisme est-il le point de départ de la Bible, ou son point d’arrivée ?',
    minutes: 10,
    activate: {
      belief:
        'Abraham a découvert qu’il n’y a qu’un seul Dieu, et Israël l’a su depuis toujours.',
      trouble:
        'Le texte lui-même dit autre chose. Le premier commandement n’énonce pas que les autres dieux n’existent pas, mais qu’on ne doit pas les préférer : « Tu n’auras pas d’autres dieux devant ma face. » On n’interdit pas ce qui n’existe pas.',
    },
    blocks: [
      {
        title: 'Trois étages, pas un',
        text: "Les historiens distinguent trois positions successives. La **polylâtrie** : YHWH parmi d'autres. La **monolâtrie** : d'autres dieux existent, mais Israël n'en sert qu'un — c'est la position du Décalogue et de la plupart des textes anciens. Le **monothéisme** strict : les autres n'existent pas, ce ne sont que du bois et de la pierre — position qui s'impose tardivement, dans les textes exiliques, notamment chez le second Isaïe : « Je suis le premier et je suis le dernier, hors moi il n'y a pas de dieu. »",
      },
      {
        title: 'L’archéologie a compliqué l’affaire',
        text: "Les inscriptions de Kuntillet Ajrud, au Sinaï, datées du VIIIe siècle, mentionnent une bénédiction « par YHWH et son ashéra » — le nom d'une déesse ou de son symbole cultuel. Des figurines féminines en terre cuite sont retrouvées par milliers dans les maisons de Juda. La religion pratiquée sur le terrain n'était pas celle que les textes prescrivent : les prophètes tempêtent précisément parce qu'on fait autrement.",
      },
      {
        title: 'La catastrophe comme accélérateur',
        text: "En 587, Nabuchodonosor détruit le Temple, déporte les élites, met fin à la dynastie. La logique antique voudrait qu'on en conclue que le dieu d'Israël a perdu. Les prophètes de l'exil font l'inverse : si YHWH gouverne toute l'histoire, alors il a lui-même armé Babylone pour châtier son peuple. La défaite devient une preuve de puissance — et le dieu d'un petit royaume devient le maître de l'univers.",
      },
      {
        title: 'Ce que l’exil invente d’autre',
        text: "Sans temple ni sacrifice, il faut d'autres appuis : le texte qu'on lit, le sabbat qu'on garde, la circoncision qu'on porte. Tous trois sont transportables. Le judaïsme se dote alors de ce qui lui permettra de survivre à toutes les destructions suivantes — dont celle de 70. Cyrus, le roi perse qui autorise le retour, est appelé « messie » par Isaïe : le seul non-israélite à recevoir ce titre.",
      },
    ],
    keyIdea:
      "Le monothéisme n'est pas le postulat de départ d'Israël mais son aboutissement, largement forgé dans une défaite. C'est en expliquant pourquoi son dieu ne l'avait pas protégé qu'Israël en a fait le dieu de tous.",
    checks: [
      {
        q: 'Quelle est la différence entre monolâtrie et monothéisme ?',
        a: 'La monolâtrie n’adore qu’un dieu tout en admettant que d’autres existent ; le monothéisme nie leur existence même. Le Décalogue est monolâtrique, le second Isaïe est monothéiste.',
      },
      {
        q: 'Qu’ont livré les inscriptions de Kuntillet Ajrud ?',
        a: 'Une bénédiction « par YHWH et son ashéra », qui atteste que le culte pratiqué au VIIIe siècle associait à YHWH une figure féminine — ce que les textes prescriptifs combattent.',
      },
      {
        q: 'Comment l’exil renforce-t-il le monothéisme au lieu de le détruire ?',
        a: 'En réinterprétant la défaite : ce n’est pas que YHWH a été vaincu, c’est qu’il s’est servi de Babylone pour châtier son peuple. Un dieu qui commande aussi aux empires étrangers est nécessairement universel.',
      },
    ],
    explore: [
      { kind: 'event', id: 'exil-babylone', why: 'L’événement charnière, avec son contexte.' },
      { kind: 'figure', id: 'isaie', why: 'Le corpus où le monothéisme strict s’énonce pour la première fois.' },
      { kind: 'concept', id: 'monotheisme', why: 'La notice, avec les distinctions techniques.' },
      { kind: 'page', id: 'parcours', path: '/parcours/genealogie-monotheisme', label: 'Parcours : généalogie du monothéisme', why: 'L’itinéraire détaillé, fiche par fiche.' },
    ],
  },
  {
    id: 'un-dieu-qui-meurt',
    n: 6,
    part: 'monotheismes',
    title: 'Un dieu qui meurt',
    question:
      'Comment un mouvement juif conduit par un homme exécuté est-il devenu une religion distincte ?',
    minutes: 10,
    activate: {
      belief:
        'Jésus a fondé le christianisme et institué l’Église en rupture avec le judaïsme.',
      trouble:
        'Jésus est mort juif, en Judée, sans avoir écrit une ligne, en s’adressant à des juifs. La séparation prend un à trois siècles selon les régions, et c’est Paul, puis les conflits du IIe siècle, qui la produisent — pas lui.',
    },
    blocks: [
      {
        title: 'Ce que l’histoire établit, et ce qu’elle laisse ouvert',
        text: "Peu de spécialistes doutent qu'un Galiléen nommé Yeshua ait été baptisé par Jean, ait prêché le Règne de Dieu, et ait été crucifié sous Ponce Pilate autour de 30. Deux détails plaident pour l'authenticité selon le critère d'embarras : personne n'aurait inventé que le maître se fasse baptiser par un autre, ni qu'il finisse au supplice des esclaves. Ce que l'histoire ne tranche pas : la résurrection, qui est une affirmation de foi et non un fait documentable.",
      },
      {
        title: 'Le supplice comme problème et comme solution',
        text: "Aucune attente juive du Ier siècle ne prévoyait un messie exécuté par l'occupant. L'exécution aurait dû dissoudre le mouvement — c'est ce qui est arrivé à d'autres. Ses disciples opèrent alors le geste décisif : ils réinterprètent la mort comme l'œuvre même du messie, en mobilisant le serviteur souffrant d'Isaïe 53. Ce n'est pas un ajustement mineur : c'est la naissance d'une théologie inédite.",
      },
      {
        title: 'Paul, ou l’ouverture aux non-juifs',
        text: "Les lettres de Paul sont les plus anciens textes chrétiens — antérieures aux évangiles de vingt ans. Sa question est pratique : un non-juif qui rejoint le mouvement doit-il se faire circoncire et suivre la Loi ? Sa réponse — non — désolidarise le mouvement de l'appartenance ethnique et le rend exportable. Sans elle, le christianisme serait probablement resté une secte juive parmi d'autres.",
      },
      {
        title: 'Puis quatre siècles pour définir qui est Jésus',
        text: "Le mot « Trinité » n'est pas dans le Nouveau Testament. Il faut Nicée en 325 pour trancher que le Fils est « de même substance » que le Père, contre Arius qui en fait la première créature. Il faut Chalcédoine en 451 pour formuler les deux natures — et cette formule scinde durablement l'Église, les Églises copte, syriaque, arménienne et éthiopienne la refusant. La doctrine chrétienne classique n'est pas donnée au départ : elle est le produit de trois siècles de conflits.",
      },
    ],
    keyIdea:
      "Le christianisme naît d'un échec retourné : une exécution qui aurait dû clore l'affaire est réinterprétée comme le cœur du message. Tout le reste — l'ouverture aux païens, la christologie, l'Église — découle de ce retournement.",
    checks: [
      {
        q: 'Qu’est-ce que le critère d’embarras, et comment s’applique-t-il ici ?',
        a: 'C’est le principe selon lequel un détail gênant pour la communauté qui transmet a peu de chances d’avoir été inventé. Le baptême de Jésus par Jean (qui le subordonne) et la crucifixion (supplice infamant) en relèvent.',
      },
      {
        q: 'Pourquoi les lettres de Paul sont-elles décisives pour l’historien ?',
        a: 'Ce sont les plus anciens textes chrétiens conservés, antérieurs d’une vingtaine d’années aux évangiles. Elles montrent l’état du mouvement avant sa mise en récit.',
      },
      {
        q: 'Qu’a tranché Nicée, et contre qui ?',
        a: 'Que le Fils est « de même substance » (homoousios) que le Père, contre Arius qui en faisait la première des créatures. Un iota sépare les deux termes grecs en débat.',
      },
    ],
    explore: [
      { kind: 'figure', id: 'jesus', why: 'La fiche, avec le partage explicite entre données historiques et affirmations de foi.' },
      { kind: 'figure', id: 'paul', why: 'L’homme sans qui le mouvement serait resté juif.' },
      { kind: 'event', id: 'nicee', why: 'Le concile qui fixe la christologie.' },
      { kind: 'page', id: 'parcours', path: '/parcours/naissance-christianisme', label: 'Parcours : naissance du christianisme', why: 'L’itinéraire complet en quinze étapes.' },
    ],
  },
  {
    id: 'un-dieu-qui-dicte',
    n: 7,
    part: 'monotheismes',
    title: 'Un dieu qui dicte un livre',
    question:
      'Pourquoi une troisième révélation, quand deux existaient déjà — et qu’est-ce qui la distingue ?',
    minutes: 10,
    activate: {
      belief:
        'L’islam est une religion née de la conquête, apparue loin des mondes juif et chrétien.',
      trouble:
        'L’Arabie du VIIe siècle est en contact constant avec ces mondes : tribus juives à Yathrib, chrétiens en Éthiopie et en Syrie, empires byzantin et sassanide aux frontières. Le Coran suppose ces récits connus de son auditoire — il y renvoie sans les raconter. Et la prédication mecquoise, avant toute conquête, est d’abord une critique sociale.',
    },
    blocks: [
      {
        title: 'Un texte qui se présente comme discours divin direct',
        text: "Différence structurelle avec les deux autres corpus. La Bible hébraïque raconte Dieu et rapporte ses paroles ; les évangiles racontent Jésus. Le Coran, lui, est présenté du début à la fin comme parole divine adressée — souvent au « Nous » de majesté, avec des ordres au Prophète (« Dis : … ») qui figurent dans le texte lui-même. Il n'y a pas de narrateur humain interposé.",
      },
      {
        title: 'Deux périodes, deux textes',
        text: "Les sourates mecquoises (≈ 610-622) sont brèves, rimées, martelées : unicité de Dieu, jugement imminent, dénonciation du riche qui repousse l'orphelin. Les sourates médinoises (622-632) sont longues et juridiques : héritage, mariage, contrats, combat, rapports avec les gens du Livre. Le Coran n'étant pas classé chronologiquement mais par longueur décroissante, ces deux couches sont mêlées dans le volume — d'où l'importance de savoir de laquelle on cite.",
      },
      {
        title: 'La reprise des prophètes antérieurs',
        text: "Adam, Noé, Abraham, Joseph, Moïse, David, Marie, Jésus : le Coran les convoque tous, souvent avec des variantes assumées. Jésus y est le Messie, né de Marie sans père, mais ni Dieu ni fils de Dieu. Marie est la seule femme nommée dans le texte, et une sourate porte son nom. La logique est celle d'une confirmation-rectification : le message est le même depuis toujours, les communautés antérieures l'auraient altéré.",
      },
      {
        title: 'Ce qui a été fixé, et comment',
        text: "La tradition rapporte une collecte sous Abū Bakr, puis une recension officielle sous ʿUthmān, avec destruction des copies divergentes. Les manuscrits anciens retrouvés — notamment le palimpseste de Sanaa, découvert en 1972 — présentent des variantes mineures qui alimentent une recherche active. La théologie majoritaire tenant le texte pour inimitable en arabe, les versions françaises sont officiellement des « interprétations du sens » : une décision qui protège le texte et crée une immense population de récitants non arabophones.",
      },
    ],
    keyIdea:
      "L'islam ne se présente pas comme une religion nouvelle mais comme la restauration d'un message originel altéré. Cette prétention — confirmer et rectifier — commande son rapport aux deux autres monothéismes.",
    checks: [
      {
        q: 'Qu’est-ce qui distingue formellement le Coran de la Bible et des évangiles ?',
        a: 'Il est présenté intégralement comme discours divin direct, sans narrateur humain. Les autres corpus racontent Dieu ou racontent Jésus ; celui-ci fait parler Dieu du premier au dernier verset.',
      },
      {
        q: 'Pourquoi savoir si un verset est mecquois ou médinois ?',
        a: 'Parce que les deux couches ne font pas la même chose : la mecquoise est brève, eschatologique et sociale, la médinoise est longue et juridique. Le classement du volume par longueur décroissante les mêle, ce qui permet toutes les citations hors contexte.',
      },
      {
        q: 'Quel statut le Coran donne-t-il à Jésus ?',
        a: 'Prophète et Messie, né de Marie sans père, mais ni divin ni fils de Dieu. La sourate 4,171 y insiste explicitement.',
      },
    ],
    explore: [
      { kind: 'figure', id: 'muhammad', why: 'La fiche, avec l’état des sources et leur datation.' },
      { kind: 'text', id: 'coran', why: 'Structure, transmission, état de la recherche critique.' },
      { kind: 'page', id: 'atelier', path: '/atelier?livre=coran-ar', label: 'Atelier : le Coran en arabe', why: 'Huit passages en arabe, avec quatre traductions françaises confrontées.' },
    ],
  },
  {
    id: 'trois-freres',
    n: 8,
    part: 'monotheismes',
    title: 'Trois frères qui ne se ressemblent pas',
    question:
      'Les trois monothéismes adorent-ils le même Dieu — et la question a-t-elle un sens ?',
    minutes: 9,
    activate: {
      belief:
        'Ce sont trois versions du même Dieu, séparées par des détails de rite et d’histoire.',
      trouble:
        'Sur le plan historique, la filiation est indiscutable. Sur le plan de ce qui est affirmé, les écarts portent sur l’essentiel : Dieu peut-il se faire homme ? Peut-il engendrer ? La Loi est-elle abolie, accomplie ou reconduite ? Ces questions ne sont pas des détails, ce sont les points de rupture.',
    },
    blocks: [
      {
        title: 'Ce qu’ils partagent réellement',
        text: "Un dieu unique, personnel, créateur, qui parle dans l'histoire et juge. Une révélation confiée à des prophètes et déposée dans un livre. Une éthique où le traitement du pauvre, de la veuve, de l'orphelin et de l'étranger fait partie du culte lui-même. Une figure commune : Abraham, invoqué comme ancêtre par les trois — mais avec trois fonctions différentes.",
      },
      {
        title: 'Trois réponses à la question « comment Dieu se donne-t-il ? »',
        text: "Le judaïsme répond : par une Loi confiée à un peuple, à pratiquer. Le christianisme : par une personne, à suivre et en qui se confier. L'islam : par un Livre, à réciter et à mettre en œuvre. Ce n'est pas la même chose de recevoir un code, une biographie ou une dictée — et cela commande la forme concrète de chaque religion : l'étude, la liturgie, la récitation.",
      },
      {
        title: 'Les points de rupture, nommés',
        text: "Pour le judaïsme, l'incarnation et la Trinité sont incompatibles avec l'unicité divine ; le messie n'est pas venu, le monde n'étant manifestement pas racheté. Pour le christianisme, la Loi est accomplie et non abolie, et Jésus est Dieu — refuser cela est le point de rupture. Pour l'islam, associer quoi que ce soit à Dieu est la faute majeure (shirk), et la prophétie est close avec Muḥammad, ce que les deux autres ne peuvent concéder.",
      },
      {
        title: 'Pourquoi la question du « même Dieu » est mal posée',
        text: "Elle mélange deux plans. Historiquement : oui, il y a filiation, emprunt et continuité, personne ne le conteste sérieusement. Théologiquement : chaque tradition affirme des choses que les autres tiennent pour fausses, et prétendre le contraire est un irénisme qui ne rend service à personne. La comparaison honnête ne consiste pas à effacer les écarts mais à les situer.",
      },
    ],
    keyIdea:
      "Les trois monothéismes ne diffèrent pas par les réponses à une même question, mais par ce que chacun considère comme le mode propre de la présence de Dieu : une Loi, une personne, un Livre.",
    checks: [
      {
        q: 'Formulez en trois mots le mode de révélation propre à chacun.',
        a: 'Judaïsme : une Loi. Christianisme : une personne. Islam : un Livre. Chacun commande une pratique différente — l’étude, la liturgie, la récitation.',
      },
      {
        q: 'Qu’est-ce que le shirk, et pourquoi est-ce central ?',
        a: 'L’association d’un partenaire à Dieu. C’est la faute majeure dans l’islam, ce qui rend la Trinité chrétienne inacceptable de son point de vue.',
      },
      {
        q: 'Pourquoi la question « est-ce le même Dieu ? » est-elle piégée ?',
        a: 'Parce qu’elle confond le plan historique — où la filiation est certaine — et le plan doctrinal — où chaque tradition tient pour faux ce que les autres affirment. Les deux réponses sont justes sur leur plan et fausses sur l’autre.',
      },
    ],
    explore: [
      { kind: 'theme', id: 'dieu', why: 'Le dossier comparatif : ce que chaque tradition entend par absolu.' },
      { kind: 'concept', id: 'tawhid', why: 'La notion qui rend la Trinité inacceptable côté musulman.' },
      { kind: 'concept', id: 'messie', why: 'Le mot dont les trois traditions ne font pas le même usage.' },
      { kind: 'page', id: 'dialogues', path: '/dialogues', label: 'Parler aux textes', why: 'Poser la même question aux trois corpus, et comparer les manières de répondre.' },
    ],
  },

  // ------------------------------------------------------------- III. ORIENT
  {
    id: 'inde',
    n: 9,
    part: 'orient',
    title: 'L’Inde ne cherche pas le salut',
    question:
      'Si le problème n’est pas le péché mais la répétition, à quoi ressemble une solution ?',
    minutes: 10,
    activate: {
      belief:
        'La réincarnation, c’est une seconde chance : une consolation face à la mort.',
      trouble:
        'C’est exactement l’inverse dans les textes. Renaître n’est pas une chance mais une condamnation à recommencer. Le but n’est pas de mieux renaître mais de sortir du cycle. Toute la sotériologie indienne est une théorie de l’évasion, pas de la survie.',
    },
    blocks: [
      {
        title: 'Un système à quatre termes',
        text: "**Karma** : l'acte, et sa conséquence mécanique. Ce n'est pas une punition infligée par un juge, c'est une loi, comme la gravité. **Saṃsāra** : le cycle des renaissances, sans commencement assignable, sans fin naturelle. **Dharma** : ce qui tient — l'ordre, le devoir propre à sa position. **Mokṣa** (ou nirvāṇa côté bouddhiste) : la sortie. Retenez que le problème posé n'est pas la faute mais la répétition.",
      },
      {
        title: 'Des Veda aux Upaniṣad : le déplacement',
        text: "Les Veda, transmis oralement avec une précision phonétique extrême pendant plus d'un millénaire, sont d'abord des hymnes et des manuels de sacrifice. Les Upaniṣad, plus tardives, déplacent la question : ce qui compte n'est plus le rite correctement exécuté mais la connaissance de l'identité entre le soi profond (ātman) et l'absolu (brahman). C'est le sens de la formule tat tvam asi — « tu es cela ».",
      },
      {
        title: 'Ce que le Bouddha retire',
        text: "Il conserve karma et saṃsāra, et retire ce qui les portait : ni dieu créateur nécessaire, ni efficacité du sacrifice, ni caste comme critère spirituel, ni surtout de soi permanent. C'est le point le plus radical : anattā, non-soi. Il n'y a rien qui transmigre — seulement un processus qui se reconduit. Un bouddhisme athée est une lecture possible du canon ancien ; un bouddhisme nihiliste ne l'est pas, et c'est une invention de la traduction européenne du XIXe siècle.",
      },
      {
        title: 'Puis le retour du dieu personnel',
        text: "La Bhagavad-Gītā, insérée dans le Mahābhārata, opère une synthèse considérable : elle articule le devoir de caste, le renoncement au fruit de l'acte et la dévotion (bhakti) à un dieu personnel qui promet de sauver celui qui s'en remet à lui. C'est le texte hindou le plus lu aujourd'hui — et son dernier verset, qui invite à abandonner tous les dharma, se discute depuis mille ans.",
      },
    ],
    keyIdea:
      "Là où les monothéismes posent le problème en termes de faute et de pardon, l'Inde le pose en termes d'enchaînement et de sortie. Ce n'est pas une autre réponse : c'est une autre question, et c'est pourquoi les traductions croisées échouent si souvent.",
    checks: [
      {
        q: 'Pourquoi « réincarnation = seconde chance » est-il un contresens ?',
        a: 'Parce que le saṃsāra est présenté comme une condamnation à recommencer, pas comme une consolation. L’objectif des traditions indiennes n’est pas de mieux renaître mais de cesser de renaître.',
      },
      {
        q: 'Qu’est-ce que le Bouddha retire au système védique, et qu’en conserve-t-il ?',
        a: 'Il conserve le karma et le saṃsāra. Il retire l’efficacité du sacrifice, la nécessité d’un dieu créateur, la caste comme critère spirituel, et surtout le soi permanent (anattā).',
      },
      {
        q: 'Que déplacent les Upaniṣad par rapport aux Veda ?',
        a: 'Elles font passer l’enjeu du rite correctement exécuté à la connaissance de l’identité entre le soi (ātman) et l’absolu (brahman).',
      },
    ],
    explore: [
      { kind: 'concept', id: 'karma', why: 'Une loi, pas une sanction : la distinction décisive.' },
      { kind: 'concept', id: 'anatta', why: 'Le point le plus radical, et le plus mal traduit.' },
      { kind: 'page', id: 'atelier', path: '/atelier?livre=upanishads-sa', label: 'Atelier : les Upaniṣad', why: 'Tat tvam asi en sanskrit, et la querelle de mille ans sur un verbe absent.' },
      { kind: 'page', id: 'parcours', path: '/parcours/orient-liberation', label: 'Parcours : les voies de libération', why: 'L’itinéraire complet côté indien.' },
    ],
  },
  {
    id: 'chine',
    n: 10,
    part: 'orient',
    title: 'La Chine ne sépare pas les mondes',
    question:
      'Peut-il y avoir une religion sans dieu, sans salut et sans conversion ?',
    minutes: 9,
    activate: {
      belief:
        'Le confucianisme est une philosophie morale, pas une religion ; le taoïsme est une sagesse du lâcher-prise.',
      trouble:
        'Les deux formulations sont des reconstructions occidentales. Le confucianisme organise un culte des ancêtres, un calendrier, des temples et un clergé d’État ; le taoïsme religieux a des liturgies, un panthéon et une hiérarchie sacerdotale. Ce sont nos catégories qui ne découpent pas au bon endroit.',
    },
    blocks: [
      {
        title: 'Une question différente',
        text: "La question chinoise classique n'est pas « comment être sauvé ? » mais « comment le monde s'accorde-t-il ? ». Ordre du ciel, ordre de la nature, ordre de la cité et ordre de la famille sont un seul continuum. La conduite d'un homme n'est pas d'abord jugée par un dieu : elle produit ou détruit de l'harmonie, ici et maintenant, jusque dans le cosmos.",
      },
      {
        title: 'Confucius : le rite comme fabrique de l’humain',
        text: "Le li — rite, convenance, étiquette — n'est pas un formalisme vide : c'est ce par quoi on devient humain. Le ren, l'humanité, se cultive comme une compétence. La règle donnée en Entretiens 15,24 est formulée au négatif : « Ce que tu ne désires pas pour toi, ne l'inflige pas à autrui. » On l'oppose souvent, à son désavantage, à la règle d'or évangélique. À tort : la forme négative prescrit une abstention vérifiable, là où la forme positive suppose que mon désir soit un bon étalon de celui d'autrui.",
      },
      {
        title: 'Le Daodejing : ce qui sert, c’est ce qui manque',
        text: "Trente rayons convergent vers un moyeu : c'est le vide au centre qui rend la roue utile. Un pot est utile par ce qu'il ne contient pas encore. Le wu wei, souvent rendu par « non-agir », n'est pas la passivité : c'est l'action qui n'entrave pas, celle du bon nageur ou du bon menuisier. Le premier vers du livre a été modifié sous les Han par tabou du nom impérial — on ne l'a su qu'en 1973.",
      },
      {
        title: 'Trois enseignements, un seul homme',
        text: "En Chine, on n'a pas à choisir. La formule « les trois enseignements sont un » décrit une réalité sociale : confucéen pour l'administration et la famille, taoïste pour la santé et la nature, bouddhiste pour les funérailles. L'idée d'appartenance religieuse exclusive, évidente dans les mondes abrahamiques, est ici une importation. Au Japon, la séparation du shintō et du bouddhisme n'est pas un état naturel retrouvé : c'est une décision politique de 1868.",
      },
    ],
    keyIdea:
      "Les catégories occidentales — croyance, appartenance exclusive, conversion, salut — ne découpent pas la réalité religieuse chinoise. Ce n'est pas qu'elle y répondrait mal : c'est qu'elle ne pose pas ces questions.",
    checks: [
      {
        q: 'Que signifie li chez Confucius ?',
        a: 'Le rite, la convenance, l’étiquette — envisagés non comme un formalisme mais comme le moyen par lequel on devient proprement humain.',
      },
      {
        q: 'Pourquoi « non-agir » traduit-il mal wu wei ?',
        a: 'Parce qu’il suggère la passivité, alors que le terme désigne une action qui n’entrave pas le cours des choses — celle de l’artisan expert ou du bon nageur.',
      },
      {
        q: 'Que révèle la séparation du shintō et du bouddhisme en 1868 ?',
        a: 'Que leur distinction n’est pas un état naturel : ils avaient coexisté dans les mêmes sanctuaires pendant plus de mille ans. La séparation est une décision politique de l’État Meiji.',
      },
    ],
    explore: [
      { kind: 'tradition', id: 'taoisme', why: 'La fiche, avec la distinction entre taoïsme philosophique et taoïsme religieux.' },
      { kind: 'theme', id: 'regle-or', why: 'La comparaison des formulations positives et négatives, sans hiérarchie apologétique.' },
      { kind: 'page', id: 'atelier', path: '/atelier?livre=chinois', label: 'Atelier : les textes chinois', why: 'Cinq caractères, dix traductions, et un tabou impérial qui a modifié le texte.' },
    ],
  },

  // ------------------------------------------------------------ IV. LECTURE
  {
    id: 'ce-qui-circule',
    n: 11,
    part: 'lecture',
    title: 'Ce qui circule',
    question:
      'Quand deux religions se ressemblent, comment savoir s’il y a emprunt, héritage commun ou pure coïncidence ?',
    minutes: 9,
    activate: {
      belief:
        'Les ressemblances prouvent que tout vient d’une source unique — ou bien que tout se vaut.',
      trouble:
        'Ni l’un ni l’autre. Il existe des critères pour distinguer les cas, et les appliquer est précisément le métier. Une ressemblance thématique ne prouve rien ; une ressemblance de détail arbitraire, dans un contexte de contact attesté, prouve beaucoup.',
    },
    blocks: [
      {
        title: 'Quatre explications possibles',
        text: "**L'emprunt direct** : contact attesté, chronologie compatible, détails arbitraires partagés — l'oiseau lâché de l'arche, présent dans Gilgamesh et dans la Genèse. **L'héritage commun** : deux traditions issues d'un même fonds, sans emprunt de l'une à l'autre. **La convergence** : des problèmes semblables produisent des solutions semblables — toutes les sociétés doivent gérer la mort, l'inceste et l'étranger. **La construction savante** : la ressemblance est produite par le vocabulaire du comparatiste, comme lorsqu'on traduit avatāra par « incarnation ».",
      },
      {
        title: 'Le test des détails arbitraires',
        text: "L'indice le plus fort n'est jamais la ressemblance de thème mais celle du détail inutile. Que deux peuples racontent un déluge n'étonne pas — beaucoup vivent près de fleuves. Que dans les deux récits le héros lâche successivement des oiseaux pour tester le retrait des eaux, et que le dieu respire l'odeur du sacrifice, voilà qui ne s'explique pas par la géographie.",
      },
      {
        title: 'Trois circulations bien documentées',
        text: "Du zoroastrisme vers le judaïsme post-exilique : dualisme atténué, angélologie, jugement individuel, résurrection — les contacts sont attestés sous les Perses et la chronologie concorde. De la philosophie grecque vers les trois monothéismes : le vocabulaire de la substance, l'immortalité de l'âme, la théologie négative. De l'Inde vers l'Occident contemporain : karma, méditation, yoga — souvent détachés de leur cosmologie, ce qui est un mode de circulation à part entière.",
      },
      {
        title: 'Le sens de la circulation n’est jamais neutre',
        text: "Reconnaître un emprunt est rarement innocent : cela peut servir à disqualifier (« votre récit est copié ») ou à légitimer (« nous accomplissons ce qui vous précède »). Une même donnée historique, mobilisée dans une polémique, change de fonction. Séparer le constat de son usage polémique est la moitié du travail.",
      },
    ],
    keyIdea:
      "Aucune religion ne naît de rien, et cela ne les dévalue pas. La question utile n'est pas « qui a copié ? » mais « qu'est-ce que cette tradition a fait de ce qu'elle a reçu ? » — car la transformation est presque toujours plus intéressante que l'emprunt.",
    checks: [
      {
        q: 'Quel type de ressemblance constitue l’indice le plus fort d’un emprunt ?',
        a: 'La ressemblance de détail arbitraire — un élément qui n’a aucune raison d’apparaître spontanément deux fois, comme l’oiseau lâché de l’arche.',
      },
      {
        q: 'Citez trois éléments que le judaïsme post-exilique doit vraisemblablement au monde iranien.',
        a: 'Un dualisme atténué, une angélologie développée, et l’idée d’un jugement individuel avec résurrection. Les contacts sous domination perse sont attestés et la chronologie concorde.',
      },
      {
        q: 'Qu’appelle-t-on une ressemblance « construite par le savant » ?',
        a: 'Une ressemblance produite par le vocabulaire de la comparaison plutôt que par les textes — comme traduire avatāra par « incarnation », ce qui fabrique un parallèle que les doctrines ne portent pas.',
      },
    ],
    explore: [
      { kind: 'page', id: 'influences', path: '/influences', label: 'L’arbre des influences', why: 'Les 47 liens documentés un par un, avec leur degré de certitude.' },
      { kind: 'concept', id: 'syncretisme', why: 'Le mot et son histoire polémique.' },
      { kind: 'theme', id: 'deluges', why: 'Le cas d’école : quatre récits alignés, du plus ancien au plus récent.' },
    ],
  },
  {
    id: 'comment-on-sait',
    n: 12,
    part: 'lecture',
    title: 'Comment on sait ce qu’on sait',
    question:
      'On vous affirme qu’un personnage religieux a réellement existé. Que demandez-vous pour l’évaluer ?',
    minutes: 10,
    activate: {
      belief:
        'Un texte ancien qui raconte un événement en est un témoignage, à défaut d’autre chose.',
      trouble:
        'La question n’est pas ce que le texte raconte mais quand il a été rédigé, par qui, pour qui, contre qui, et à partir de quoi. Un récit rédigé deux siècles après les faits par des partisans n’a pas le même poids qu’un document contemporain hostile.',
    },
    blocks: [
      {
        title: 'Datez la source, pas seulement l’événement',
        text: "L'écart entre les faits et leur mise par écrit est la première donnée à établir. Les lettres de Paul sont à vingt ans de la mort de Jésus, les évangiles à quarante ou soixante-dix ; la sira de Muḥammad est écrite plus d'un siècle après lui ; les récits sur le Bouddha sont fixés quatre siècles après. Cela ne les invalide pas — cela dit ce qu'on peut en attendre.",
      },
      {
        title: 'Cinq outils de critique',
        text: "**L'attestation multiple** : plusieurs sources indépendantes valent mieux qu'une, à condition qu'elles soient vraiment indépendantes. **L'embarras** : un détail gênant pour ceux qui transmettent a peu de chances d'être inventé. **La cohérence de contexte** : un propos qui suppose un monde qui n'existe pas encore est suspect. **La source hostile** : Tacite et Flavius Josèphe, extérieurs au mouvement, ont un poids particulier. **L'archéologie** : elle tranche parfois — la stèle de Merneptah atteste le nom d'Israël en −1207, la stèle de Tel Dan mentionne une « maison de David ».",
      },
      {
        title: 'Cinq degrés, pas deux',
        text: "Le vrai contraire de « légendaire » n'est pas « vrai » : c'est un dégradé. L'atlas classe chaque personnage sur cinq niveaux — attesté par des sources extérieures, probable, débattu entre spécialistes, légendaire (un noyau possible sous une couche narrative), mythique (aucun ancrage historique recherché). Ranger correctement une figure dans ce dégradé est déjà un acquis considérable.",
      },
      {
        title: 'Ce que l’histoire ne peut pas faire',
        text: "Elle ne peut ni établir ni réfuter une résurrection, une révélation ou un miracle : ces énoncés ne sont pas du type que sa méthode traite. Dire « l'histoire ne le montre pas » n'équivaut pas à « c'est faux » — ni, symétriquement, à une concession. Tenir cette distinction évite les deux impasses symétriques : le scientisme qui croit réfuter, et l'apologétique qui croit prouver.",
      },
    ],
    keyIdea:
      "Ce chapitre est un outil, pas un contenu : appliquez-le à tout ce que vous lirez ensuite, ici comme ailleurs. Demandez toujours : quelle source, de quand, écrite par qui, et contre qui ?",
    checks: [
      {
        q: 'Pourquoi une source hostile a-t-elle un poids particulier ?',
        a: 'Parce qu’elle n’a aucun intérêt à confirmer l’existence ou l’action de ceux qu’elle combat. Tacite mentionnant l’exécution du Christ sous Pilate n’a rien à y gagner.',
      },
      {
        q: 'Quels sont les cinq degrés d’historicité employés dans l’atlas ?',
        a: 'Attesté, probable, débattu, légendaire, mythique. Le contraire de « légendaire » n’est pas « vrai » mais un dégradé de niveaux d’attestation.',
      },
      {
        q: 'Que répondre à « l’histoire prouve que la résurrection n’a pas eu lieu » ?',
        a: 'Que ce n’est pas de son ressort : la méthode historique ne traite pas ce type d’énoncé. Elle ne le prouve ni ne le réfute — et son silence n’est ni une réfutation ni une concession.',
      },
    ],
    explore: [
      { kind: 'page', id: 'methode', path: '/methode', label: 'Méthode et limites', why: 'L’échelle d’historicité en détail, et les limites assumées de l’atlas.' },
      { kind: 'page', id: 'personnages', path: '/personnages', label: 'Les personnages', why: 'La liste entière, filtrable par degré d’attestation : exercez le classement.' },
      { kind: 'page', id: 'emergence', path: '/emergence', label: 'Comment une religion naît', why: 'Les mécanismes récurrents — et, pour chacun, ce qu’il n’explique pas.' },
    ],
  },
];

export const chaptersById: Record<string, Chapter> = Object.fromEntries(
  chapters.map((c) => [c.id, c]),
);

export const totalMinutes = chapters.reduce((n, c) => n + c.minutes, 0);
