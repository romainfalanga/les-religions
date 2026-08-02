/**
 * Les mécanismes par lesquels une religion naît, se fixe, se divise et se diffuse.
 *
 * Ce fichier ne décrit pas des religions, mais des processus qu'on retrouve dans
 * plusieurs d'entre elles. C'est un outil de comparaison structurelle : il permet
 * de voir qu'une même mécanique produit des contenus très différents — et que des
 * contenus proches peuvent naître de mécaniques opposées.
 */

export interface MechanismCase {
  /** Tradition concernée (id de tradition). */
  tradition: string;
  title: string;
  text: string;
  /** Renvois vers les autres sections de l'atlas. */
  figures?: string[];
  texts?: string[];
  events?: string[];
}

export interface Mechanism {
  id: string;
  /** Étape du cycle : naissance, fixation, division, diffusion, transformation. */
  stage: 'naissance' | 'fixation' | 'division' | 'diffusion' | 'transformation';
  title: string;
  /** Une phrase qui énonce le mécanisme. */
  claim: string;
  /** Comment on le reconnaît. */
  signals: string[];
  description: string;
  cases: MechanismCase[];
  /** Ce que le mécanisme n'explique pas — le garde-fou contre le réductionnisme. */
  limit: string;
}

export const stageInfo: Record<Mechanism['stage'], { label: string; color: string; text: string }> = {
  naissance: {
    label: 'Naissance',
    color: '#a3603c',
    text: "Ce qui se passe avant qu'il y ait une religion : une crise, une voix, un petit groupe.",
  },
  fixation: {
    label: 'Fixation',
    color: '#8a6d3b',
    text: "Comment un message oral devient un texte, un texte devient un canon, un canon devient une norme.",
  },
  division: {
    label: 'Division',
    color: '#7a5a72',
    text: "Pourquoi toute tradition se scinde, et ce que les schismes révèlent de ce qui compte vraiment.",
  },
  diffusion: {
    label: 'Diffusion',
    color: '#3f6b63',
    text: "Comment une religion sort de son berceau : par la route, par l'épée, par le mariage, par la traduction.",
  },
  transformation: {
    label: 'Transformation',
    color: '#4a5f86',
    text: "Réformes, réveils, sorties de religion : ce qui arrive aux traditions installées.",
  },
};

export const mechanisms: Mechanism[] = [
  // ---------------------------------------------------------------- NAISSANCE
  {
    id: 'crise',
    stage: 'naissance',
    title: 'La crise fondatrice',
    claim:
      "Les religions ne naissent presque jamais en temps calme : elles naissent quand un monde cesse de tenir.",
    signals: [
      'Une défaite militaire, un exil, une occupation étrangère',
      'Un effondrement de la légitimité des élites religieuses en place',
      'Une urbanisation ou un bouleversement économique rapide',
      "Une attente déçue : la promesse ancienne ne s'est pas réalisée",
    ],
    description:
      "Le rapport est constant mais pas mécanique : la crise ne fabrique pas la religion, elle rend audible ce qui, autrement, resterait marginal. Un discours qui redéfinit ce qu'est le malheur, qui explique pourquoi le monde ancien est tombé, et qui indique quoi faire, trouve en temps de crise un public que le temps calme lui refuse. C'est pourquoi les mêmes idées peuvent circuler pendant des décennies sans prendre, puis prendre d'un coup.",
    cases: [
      {
        tradition: 'judaisme',
        title: "L'exil de Babylone (587 av. J.-C.)",
        text: "La destruction du Temple, la déportation des élites et la fin de la dynastie davidique auraient dû dissoudre le culte de YHWH comme elles ont dissous tant de cultes nationaux. C'est l'inverse qui se produit : privé de sanctuaire, le culte se déplace vers le texte, le sabbat et la circoncision — des pratiques transportables. Le monothéisme strict, la mise par écrit systématique et l'idée d'une élection qui survit à la défaite se cristallisent là.",
        figures: ['ezechiel', 'esdras', 'isaie'],
        texts: ['torah'],
        events: ['exil-babylone'],
      },
      {
        tradition: 'christianisme',
        title: 'La Judée sous occupation romaine',
        text: "Le premier siècle judéen est saturé de mouvements de rupture : baptistes du désert, prophètes de signes, zélotes, esséniens retirés à Qumrân. Jésus est l'un de ces prédicateurs — et le seul dont le mouvement survive à l'exécution de son fondateur, précisément parce que ses disciples réinterprètent cette exécution au lieu de la subir.",
        figures: ['jesus', 'jean-baptiste', 'paul'],
        events: ['destruction-temple'],
      },
      {
        tradition: 'bouddhisme',
        title: "L'urbanisation du bassin du Gange (VIe-Ve s. av. J.-C.)",
        text: "L'apparition de villes, de monnaie et de royaumes territoriaux déstabilise l'ordre védique fondé sur le clan et le sacrifice. Une génération entière de renonçants — le Bouddha, Mahāvīra, les Ājīvika, les matérialistes Cārvāka — conteste simultanément l'efficacité du rituel brahmanique. Le bouddhisme est le rejeton le plus durable d'une crise de croyance collective.",
        figures: ['bouddha', 'mahavira'],
      },
      {
        tradition: 'islam',
        title: 'La Mecque marchande du VIIe siècle',
        text: "Une économie caravanière enrichit une oligarchie tribale, tandis que les solidarités claniques qui protégeaient les faibles se distendent. La prédication mecquoise de Muḥammad est d'abord une critique sociale — orphelins négligés, richesse thésaurisée, jugement imminent — avant d'être une construction juridique.",
        figures: ['muhammad'],
        texts: ['coran'],
        events: ['hegire'],
      },
      {
        tradition: 'rastafari',
        title: "La Jamaïque coloniale des années 1930",
        text: "Une population descendante d'esclaves, sans terre et sans représentation, reçoit la nouvelle du couronnement d'un empereur noir en Éthiopie. Le mécanisme est lisible presque en direct : humiliation collective, quête d'une souveraineté symbolique, relecture biblique inversant les rôles de Babylone et de Sion.",
        figures: ['haile-selassie', 'marcus-garvey'],
      },
    ],
    limit:
      "Beaucoup de crises très violentes n'ont produit aucune religion nouvelle, et certaines traditions naissent en période de prospérité. La crise est un accélérateur, pas une cause suffisante — sinon on pourrait prédire les religions, ce que personne ne sait faire.",
  },
  {
    id: 'charisme',
    stage: 'naissance',
    title: "L'autorité charismatique",
    claim:
      "Au départ il n'y a ni institution ni texte : il y a quelqu'un dont la parole fait autorité sans mandat.",
    signals: [
      "Une autorité qui ne vient ni de l'hérédité, ni d'une fonction, ni d'une élection",
      'Une formule récurrente : « il vous a été dit… mais moi je vous dis »',
      "Un cercle restreint qui abandonne son métier ou sa famille",
      "Des récits de puissance : guérisons, prodiges, épreuves victorieuses",
    ],
    description:
      "Max Weber a nommé « charisme » ce type d'autorité : elle ne repose pas sur une charge, mais sur la reconnaissance par un groupe d'une qualité extraordinaire. Sa force est immense et sa faiblesse structurelle : elle ne survit pas à son porteur. Toute l'histoire des débuts d'une religion est celle du transfert de cette autorité vers quelque chose de transmissible — un texte, un successeur, un rite, une communauté.",
    cases: [
      {
        tradition: 'christianisme',
        title: "L'autorité sans titre de Jésus",
        text: "Les évangiles insistent : il enseigne « comme ayant autorité, et non comme les scribes ». Il n'est ni prêtre, ni docteur diplômé, ni roi. Cette absence de titre est le problème que ses adversaires soulèvent — « d'où lui vient cela ? » — et l'atout qui lui gagne des foules lassées des autorités constituées.",
        figures: ['jesus'],
      },
      {
        tradition: 'islam',
        title: 'Le prophète qui refuse le titre de roi',
        text: "Muḥammad exerce à Médine une autorité qui est simultanément religieuse, judiciaire et militaire, mais toujours justifiée par la révélation reçue et non par un statut hérité. La difficulté éclate à sa mort : rien dans le système ne prévoit ce qu'est un successeur, puisque la prophétie est déclarée close.",
        figures: ['muhammad', 'abu-bakr', 'ali'],
      },
      {
        tradition: 'sikhisme',
        title: 'Une chaîne de dix charismes',
        text: "Le sikhisme fait l'expérience la plus explicite du problème : neuf successeurs désignés perpétuent l'autorité de Nānak, puis le dixième la transfère délibérément à un livre et à la communauté. C'est une résolution consciente du problème weberien, formulée en 1708.",
        figures: ['guru-nanak', 'guru-gobind-singh'],
        texts: ['guru-granth-sahib'],
      },
      {
        tradition: 'bouddhisme',
        title: 'Un charisme qui se saborde',
        text: "Interrogé sur son successeur, le Bouddha aurait répondu que le dhamma et la discipline seraient le maître après lui. Le refus de désigner un héritier est un choix doctrinal cohérent avec l'anattā — et il explique que le bouddhisme n'ait jamais eu de pape, mais aussi qu'il se soit fragmenté très tôt.",
        figures: ['bouddha', 'ananda'],
      },
    ],
    limit:
      "Le charisme n'est pas une propriété de la personne mais une relation : il n'existe que reconnu. Les sources dont nous disposons sont écrites par ceux qui l'ont reconnu — nous n'avons presque jamais accès à ce que voyaient les autres.",
  },
  {
    id: 'echec-fecond',
    stage: 'naissance',
    title: "L'échec réinterprété",
    claim:
      "Une religion durable naît souvent du refus d'accepter un démenti — et de la reformulation qui le transforme en confirmation.",
    signals: [
      "Une prédiction publique non réalisée, ou une mort qui invalide une espérance",
      'Une reformulation qui déplace le sens sans abandonner la promesse',
      "Une intensification du prosélytisme juste après le démenti, et non un effondrement",
    ],
    description:
      "Le sociologue Leon Festinger a formalisé ce paradoxe sous le nom de dissonance cognitive : un groupe fortement engagé, confronté à un démenti factuel, ne se dissout pas nécessairement — il peut réinterpréter et recruter davantage, la conviction des nouveaux venus compensant l'ébranlement. Ce mécanisme, souvent invoqué de façon polémique, décrit surtout un fait bien attesté : le démenti est un moment de créativité doctrinale intense.",
    cases: [
      {
        tradition: 'christianisme',
        title: 'Un messie crucifié',
        text: "Aucune attente juive du Ier siècle ne prévoyait un messie exécuté par l'occupant. Le supplice aurait dû clore l'affaire, comme il l'a fait pour d'autres. La réinterprétation — la mort n'est pas l'échec du messie mais son œuvre — mobilise Isaïe 53, réorganise tout le rapport à la Loi et engendre en une génération une théologie inédite.",
        figures: ['jesus', 'paul', 'pierre'],
        texts: ['epitres-paul'],
      },
      {
        tradition: 'judaisme',
        title: 'Le Temple détruit, et le culte qui continue',
        text: "En 70, la destruction du sanctuaire supprime le sacrifice, cœur du culte prescrit. Yohanan ben Zakkaï obtient de fonder une école à Yavné : l'étude et la prière remplacent l'autel, le rabbin remplace le prêtre. Le judaïsme rabbinique naît d'un désastre traité comme une réorientation.",
        figures: ['yohanan-ben-zakkai'],
        texts: ['mishna'],
        events: ['destruction-temple'],
      },
      {
        tradition: 'judaisme',
        title: "L'apostasie de Sabbataï Tsevi (1666)",
        text: "Le messie le plus largement reconnu de l'histoire juive se convertit à l'islam sous la menace. La majorité de ses partisans se rétracte — mais un noyau élabore que la conversion était la descente ultime du messie dans l'impureté pour y libérer les étincelles. Le cas montre le mécanisme à l'œuvre et sa limite : il fonctionne, mais il ne fonctionne pas pour tout le monde.",
        figures: ['sabbatai-tsevi'],
      },
      {
        tradition: 'christianisme',
        title: 'La parousie qui tarde',
        text: "Les textes les plus anciens du Nouveau Testament attendent un retour imminent. Deux générations plus tard, la Deuxième épître de Pierre doit gérer l'objection : « où est la promesse de son avènement ? » — et répond que mille ans sont comme un jour. L'eschatologie devient horizon au lieu d'échéance ; c'est cette conversion qui rend l'Église possible comme institution durable.",
        texts: ['evangiles'],
      },
    ],
    limit:
      "Le schéma explique la survie de certains groupes après un démenti, pas la vérité ou la fausseté de ce qu'ils affirment. Il décrit aussi mal les traditions sans prédiction datée. Et il a été utilisé de façon paresseuse, comme une manière de disqualifier une croyance sans l'examiner.",
  },

  // ---------------------------------------------------------------- FIXATION
  {
    id: 'oral-ecrit',
    stage: 'fixation',
    title: "Le passage de l'oral à l'écrit",
    claim:
      "L'écriture ne conserve pas un message : elle le transforme en le figeant, et crée du même coup le métier de ceux qui l'interprètent.",
    signals: [
      "Un décalage d'une à plusieurs générations entre la prédication et sa mise par écrit",
      "Des traces de style oral dans le texte : formules répétées, listes numérotées, rythmes mnémotechniques",
      "Une méfiance initiale envers l'écrit, parfois explicite",
      "L'apparition d'une classe de copistes, puis de commentateurs",
    ],
    description:
      "Presque toutes les grandes traditions ont commencé par refuser l'écrit ou s'en méfier. Le Veda a été transmis oralement avec une précision phonétique extrême pendant plus d'un millénaire ; la Torah orale a été mise par écrit à contrecœur ; les paroles du Bouddha ont été récitées collectivement pendant quatre siècles. Le passage à l'écrit répond en général à une menace — dispersion, persécution, mort des derniers témoins — et il a toujours un coût : ce qui est fixé cesse de s'ajuster, et il faut désormais une technique pour le faire parler au présent.",
    cases: [
      {
        tradition: 'hindouisme',
        title: "Une oralité de haute précision",
        text: "Le Ṛgveda a été transmis avec des techniques de récitation redondantes (pada, krama, jaṭā, ghana) conçues pour détecter toute altération, ce qui en fait un des textes les mieux conservés de l'humanité — sans écriture. Ici l'oral n'est pas un stade approximatif précédant l'écrit : c'est une technologie de conservation supérieure, choisie et défendue.",
        texts: ['rig-veda'],
      },
      {
        tradition: 'bouddhisme',
        title: 'Le concile qui récite',
        text: "Les conciles bouddhiques sont d'abord des séances de récitation collective : la mémoire du groupe fait fonction d'archive et de contrôle. La mise par écrit à Ceylan, vers 29 av. J.-C., est décidée dans un contexte de famine et de guerre où la chaîne des récitants risquait de se rompre.",
        texts: ['canon-pali'],
      },
      {
        tradition: 'judaisme',
        title: "La Loi orale mise par écrit malgré l'interdit",
        text: "Le principe voulait que la Loi orale ne fût pas écrite. La Mishna l'est vers 200, puis le Talmud. La justification rabbinique — « il est temps d'agir pour le Seigneur : on a violé ta Loi » — assume la transgression comme sauvetage. Le résultat est un texte qui garde la forme du débat oral : on y entend des voix qui ne sont pas d'accord.",
        figures: ['juda-le-prince'],
        texts: ['mishna', 'talmud'],
      },
      {
        tradition: 'islam',
        title: 'La collecte après les morts de Yamāma',
        text: "La tradition rapporte que la mort de nombreux récitants lors d'une bataille motive la collecte du Coran sous Abū Bakr, puis l'établissement d'une recension officielle sous ʿUthmān, avec destruction des copies divergentes. Le geste crée un texte unifié et, simultanément, une mémoire des variantes qui alimentera la science des qirā'āt.",
        figures: ['uthman', 'abu-bakr'],
        texts: ['coran'],
      },
    ],
    limit:
      "L'écrit ne supprime jamais l'oral : le Coran reste d'abord récité, la Torah chantée, le Talmud étudié à voix haute. Opposer les deux comme des stades successifs est une simplification d'historien.",
  },
  {
    id: 'canon',
    stage: 'fixation',
    title: 'La clôture du canon',
    claim:
      "Décider quels livres font autorité, c'est décider ce que la communauté est — et exclure ceux qui lisaient les autres.",
    signals: [
      'Des listes qui apparaissent, se contredisent, puis convergent',
      "Un critère invoqué : ancienneté, apostolicité, usage liturgique, conformité doctrinale",
      "Des textes rejetés qui continuent de circuler en marge",
      "Une clôture qui suit, plutôt qu'elle ne précède, un conflit interne",
    ],
    description:
      "Un canon n'est pas une collection de livres, c'est une frontière. Il se fixe rarement par décision unique : le plus souvent, un usage s'impose, des contestations le testent, et une autorité entérine. Le moment décisif est presque toujours un affrontement — contre un rival interne dont les textes doivent être écartés. Marcion, en établissant vers 140 sa propre liste réduite, oblige les Églises à formuler la leur.",
    cases: [
      {
        tradition: 'christianisme',
        title: 'Vingt-sept livres, et ceux qui restent dehors',
        text: "La lettre festale d'Athanase, en 367, est le premier document connu à énumérer exactement les vingt-sept livres du Nouveau Testament actuel. Avant elle, l'Apocalypse est contestée en Orient, l'Épître aux Hébreux en Occident, le Pasteur d'Hermas est lu à l'office dans certaines Églises. La découverte de Nag Hammadi en 1945 a rendu leurs voix aux exclus.",
        figures: ['athanase', 'marcion', 'irenee'],
        texts: ['evangiles', 'evangile-thomas'],
      },
      {
        tradition: 'judaisme',
        title: 'Un canon sans concile',
        text: "L'idée d'un « synode de Yavné » ayant clos la Bible hébraïque vers 90 est aujourd'hui abandonnée par les historiens : les traces montrent des discussions ponctuelles (sur l'Ecclésiaste, le Cantique des cantiques) dans un processus long et diffus. Le canon juif s'est fixé par usage plus que par décret — et diffère de celui des Bibles chrétiennes, qui ont suivi la Septante grecque, plus large.",
        texts: ['torah', 'ketouvim'],
      },
      {
        tradition: 'bouddhisme',
        title: 'Trois canons qui coexistent',
        text: "Le bouddhisme n'a jamais clos un canon unique : le Tipiṭaka pāli, les canons chinois et tibétains diffèrent en volume et en contenu, et le mahāyāna a continué de produire des sūtra présentés comme paroles du Bouddha longtemps après lui. Un canon ouvert est une possibilité structurelle, pas une anomalie.",
        texts: ['canon-pali', 'sutra-lotus'],
      },
      {
        tradition: 'islam',
        title: 'Le canon du texte et le tri des hadiths',
        text: "Le Coran est clos très tôt, mais l'essentiel du travail canonique porte ensuite sur les hadiths : al-Bukhārī aurait retenu quelques milliers de traditions sur des centaines de milliers examinées, en développant une science de la chaîne de transmission. Le tri n'est pas ici entre livres mais entre énoncés, un par un.",
        figures: ['bukhari'],
        texts: ['hadith'],
      },
    ],
    limit:
      "Un canon clos ne clôt pas l'interprétation : le corpus figé déplace simplement l'enjeu vers l'herméneutique. Et les textes exclus laissent des traces durables dans l'iconographie, la liturgie et la piété populaire.",
  },
  {
    id: 'orthodoxie',
    stage: 'fixation',
    title: "L'invention de l'hérésie",
    claim:
      "L'orthodoxie n'existe pas avant l'hérésie : les deux se produisent ensemble, dans le même geste de délimitation.",
    signals: [
      "Un concile, un synode, une consultation de juristes convoqués pour trancher",
      'Un vocabulaire technique forgé pour la circonstance',
      "Une doctrine perdante rétrospectivement décrite comme une nouveauté",
      "Des sanctions civiles qui suivent la condamnation religieuse",
    ],
    description:
      "Walter Bauer a montré dès 1934 que dans plusieurs régions, ce que l'on appellera plus tard hérésie était la forme majoritaire du christianisme local. Le schéma d'une vérité originelle pure que des déviations viendraient corrompre est en général une reconstruction du camp vainqueur. La réalité est plus intéressante : une pluralité initiale, un conflit, une définition qui tranche — et qui, en tranchant, crée simultanément la norme et sa transgression.",
    cases: [
      {
        tradition: 'christianisme',
        title: 'Nicée et un iota',
        text: "En 325, la controverse porte sur la relation du Fils au Père. Le concile impose homoousios, « de même substance », contre homoiousios, « de substance semblable ». Un iota sépare les deux mots grecs. Ce n'est pas une querelle de mots : c'est la question de savoir si le Christ est Dieu ou la première créature, et donc ce que signifie être sauvé par lui.",
        figures: ['arius', 'athanase', 'constantin'],
        events: ['nicee'],
      },
      {
        tradition: 'christianisme',
        title: 'Chalcédoine et les Églises qui partent',
        text: "En 451, la définition des deux natures du Christ provoque la première rupture durable : les Églises copte, syriaque, arménienne et éthiopienne refusent la formule. Quinze siècles plus tard, des déclarations communes constatent que le désaccord tenait largement au vocabulaire — mais les Églises séparées le sont restées.",
        events: ['chalcedoine'],
      },
      {
        tradition: 'islam',
        title: "La miḥna, une inquisition à l'envers",
        text: "De 833 à 848, le calife al-Ma'mūn impose par la contrainte la doctrine mutazilite du Coran créé, contre les traditionalistes. Ibn Ḥanbal, emprisonné, refuse. Le rapport de force finit par s'inverser, et c'est la position persécutée qui devient majoritaire. L'épisode montre que l'orthodoxie n'est pas la doctrine du pouvoir : c'est celle qui gagne, ce qui n'est pas la même chose.",
      },
      {
        tradition: 'bouddhisme',
        title: 'Une divergence qui ne condamne pas',
        text: "Les premières scissions bouddhiques portent sur la discipline monastique et le statut de l'arhat. Elles produisent des écoles distinctes, non des hérésies au sens de doctrines punissables : sans autorité centrale ni bras séculier systématique, la divergence se traduit en pluralisme plutôt qu'en exclusion.",
      },
    ],
    limit:
      "Dire que l'orthodoxie est construite ne signifie pas que toutes les positions se valent, ni que les débats étaient de pure politique. Les acteurs argumentaient réellement, et sur des enjeux qu'ils tenaient pour vitaux.",
  },

  // ---------------------------------------------------------------- DIVISION
  {
    id: 'succession',
    stage: 'division',
    title: 'La crise de succession',
    claim:
      "La question de savoir qui hérite de l'autorité produit plus de divisions durables que les désaccords doctrinaux.",
    signals: [
      "Aucune règle claire de dévolution au moment de la mort du fondateur",
      'Deux principes concurrents : la compétence et le sang',
      "Une divergence initialement politique qui se dote après coup d'une théologie",
    ],
    description:
      "Le schisme le plus tenace n'est presque jamais celui qui porte sur Dieu : c'est celui qui porte sur qui parle en son nom. La raison est structurelle — une divergence doctrinale peut se négocier par formule commune, une divergence sur l'autorité ne le peut pas, puisqu'elle porte précisément sur qui aurait le droit de formuler.",
    cases: [
      {
        tradition: 'islam',
        title: '632 : Saqīfa',
        text: "À la mort de Muḥammad, un groupe désigne Abū Bakr par consensus des notables, tandis que d'autres tiennent que ʿAlī, cousin et gendre, avait été désigné. Le partage sunnite/chiite commence là, comme une question de légitimité politique ; les théologies distinctes — imamat, infaillibilité, occultation — se construisent ensuite, sur des siècles.",
        figures: ['abu-bakr', 'ali', 'husayn', 'fatima'],
        events: ['kerbala'],
      },
      {
        tradition: 'christianisme',
        title: 'Rome, Constantinople, et la primauté',
        text: "Le schisme de 1054 est habituellement expliqué par le Filioque, une clause ajoutée au Credo latin. Mais le fond est la question de savoir si l'évêque de Rome a une primauté de juridiction ou seulement d'honneur. Les excommunications de 1054 ne font que solder des siècles de divergence, et n'ont été levées qu'en 1965.",
        events: ['schisme-1054'],
      },
      {
        tradition: 'bouddhisme',
        title: 'Reconnaître un enfant',
        text: "Le tulkou tibétain résout la succession par la réincarnation reconnue : le successeur est retrouvé, non désigné. Le système garantit la continuité charismatique et crée une vulnérabilité — celui qui contrôle la procédure de reconnaissance contrôle l'institution, ce dont plusieurs pouvoirs séculiers se sont servis.",
        figures: ['dalai-lama-14'],
      },
      {
        tradition: 'sikhisme',
        title: 'Une succession transférée à un livre',
        text: "Gobind Singh clôt la lignée humaine en déclarant le Granth Sāhib guru perpétuel. La solution est élégante — un texte ne meurt pas — et déplace le problème vers l'interprétation : qui lit fait autorité, ce qui a produit ses propres conflits.",
        figures: ['guru-gobind-singh'],
        texts: ['guru-granth-sahib'],
      },
    ],
    limit:
      "Réduire les schismes à des luttes de pouvoir manque ce qui s'y jouait : dans ces sociétés, savoir qui a autorité, c'est savoir ce qu'est le salut et par quel canal il passe.",
  },
  {
    id: 'lettre-esprit',
    stage: 'division',
    title: 'La lettre et l’esprit',
    claim:
      "Toute tradition oscille entre ceux qui veulent appliquer le texte et ceux qui veulent en atteindre l'intention — et cette oscillation produit ses écoles.",
    signals: [
      "Une école littéraliste qui reproche à l'autre de dissoudre la norme",
      "Une école allégorique qui reproche à l'autre de manquer le sens",
      "Des règles herméneutiques codifiées pour arbitrer",
      "Un troisième camp mystique qui déclare les deux insuffisants",
    ],
    description:
      "Le clivage est transversal : on le retrouve entre pharisiens et sadducéens, entre l'école d'Alexandrie et celle d'Antioche, entre ẓāhirites et bāṭinites, entre mīmāṃsā ritualiste et vedānta. Il n'oppose pas des croyants sérieux à des croyants tièdes : il oppose deux manières de rester fidèle, dont chacune accuse l'autre d'infidélité.",
    cases: [
      {
        tradition: 'judaisme',
        title: 'Karaïtes contre rabbanites',
        text: "Au VIIIe siècle, les karaïtes rejettent la Loi orale et n'admettent que l'Écriture. Le résultat n'est pas moins d'interprétation mais davantage : privés du corpus rabbinique, ils doivent tout redéduire du texte, et développent une exégèse grammaticale d'une grande finesse. Refuser la tradition ne dispense pas d'interpréter.",
      },
      {
        tradition: 'christianisme',
        title: 'Alexandrie et Antioche',
        text: "Origène lit l'Écriture à trois niveaux et cherche partout le sens spirituel ; l'école d'Antioche défend le sens historique et se méfie de l'allégorie qui permet de faire dire au texte ce qu'on veut. Le Moyen Âge latin en tirera la doctrine des quatre sens, qui est un compromis institutionnalisé.",
        figures: ['origene', 'jean-chrysostome'],
      },
      {
        tradition: 'islam',
        title: 'Ẓāhir et bāṭin',
        text: "Les ẓāhirites s'en tiennent au sens apparent du texte et refusent l'analogie ; les courants ésotériques, notamment ismaéliens, tiennent que chaque énoncé a un sens caché accessible à l'initié. Entre les deux, les quatre écoles juridiques sunnites élaborent des méthodes réglées d'inférence — le fiqh est précisément l'art de ne céder ni au littéralisme ni à l'arbitraire.",
        figures: ['shafii', 'al-ghazali', 'ibn-taymiyya'],
      },
    ],
    limit:
      "Les catégories « littéral » et « allégorique » sont nos catégories : les acteurs eux-mêmes se décrivaient rarement ainsi, et les plus grands exégètes pratiquaient les deux registres simultanément.",
  },
  {
    id: 'pouvoir',
    stage: 'division',
    title: "L'alliance avec le pouvoir",
    claim:
      "Quand une religion cesse d'être persécutée pour devenir officielle, elle gagne des moyens et perd des marges — et produit aussitôt des mouvements qui lui reprochent ce gain.",
    signals: [
      "Une reconnaissance légale, puis un statut de religion d'État",
      'Un droit religieux qui devient exécutoire par la puissance publique',
      "L'apparition simultanée d'un monachisme ou d'un mouvement de rigueur",
      'Une architecture monumentale et une bureaucratie cléricale',
    ],
    description:
      "Le tournant constantinien est le cas type, mais le schéma se répète : Aśoka pour le bouddhisme, les Omeyyades pour l'islam, Vladimir pour la Rus'. Il produit à chaque fois le même contre-mouvement — dès que le christianisme cesse d'être dangereux, les déserts d'Égypte se peuplent d'ascètes cherchant ailleurs le martyre devenu introuvable.",
    cases: [
      {
        tradition: 'christianisme',
        title: 'De Milan à Thessalonique',
        text: "L'édit de 313 tolère ; celui de 380 impose. En deux générations, une minorité persécutée devient l'unique religion licite de l'Empire, avec pouvoir de contrainte sur les autres cultes. Le christianisme y gagne l'Europe et y perd la position critique qui l'avait caractérisé.",
        figures: ['constantin'],
        events: ['edit-milan', 'theodose'],
      },
      {
        tradition: 'bouddhisme',
        title: "Aśoka, un empereur qui grave sa conversion",
        text: "Après la guerre du Kaliṅga, Aśoka fait graver sur des rochers et des piliers une politique de dhamma : non-violence, tolérance entre sectes, bien-être des sujets. C'est la première fois qu'un pouvoir d'État se réclame publiquement du bouddhisme, et c'est ce patronage qui le fait sortir de l'Inde.",
        figures: ['ashoka'],
        events: ['ashoka-conversion'],
      },
      {
        tradition: 'christianisme',
        title: 'Le désert comme protestation',
        text: "Antoine se retire au IIIe siècle, mais c'est au IVe, quand l'Église devient impériale, que le mouvement devient massif. Les Pères du désert ne théorisent pas contre Constantin : ils partent. Le monachisme est la réponse structurelle à l'institutionnalisation, et il finira lui-même institutionnalisé.",
        figures: ['benoit'],
        events: ['antoine-desert', 'benoit-regle'],
      },
    ],
    limit:
      "Le récit d'une pureté primitive corrompue par le pouvoir est lui-même un topos religieux, utilisé par tous les réformateurs. L'institutionnalisation a aussi permis la conservation des textes, l'hôpital, l'école et la transmission — elle n'a pas que des coûts.",
  },

  // ---------------------------------------------------------------- DIFFUSION
  {
    id: 'route',
    stage: 'diffusion',
    title: 'La route, le port, le marché',
    claim:
      "Les religions ont voyagé d'abord avec les marchands, plus souvent qu'avec les armées ou les missionnaires.",
    signals: [
      'Une implantation initiale dans les villes portuaires ou les relais caravaniers',
      'Des communautés diasporiques qui précèdent la conversion locale',
      'Une géographie religieuse qui épouse les axes commerciaux',
    ],
    description:
      "La carte des religions ressemble beaucoup à la carte des échanges. Le bouddhisme suit la route de la soie jusqu'en Chine, l'islam atteint l'Indonésie et l'Afrique de l'Est par le commerce maritime bien avant toute conquête, le christianisme se répand d'abord dans le réseau des synagogues méditerranéennes. Le marchand est un missionnaire involontaire : il installe une communauté, un lieu de culte, un régime alimentaire visible, et le voisinage prolongé fait le reste.",
    cases: [
      {
        tradition: 'bouddhisme',
        title: 'La route de la soie',
        text: "Les oasis du Tarim — Khotan, Kucha, Dunhuang — deviennent des centres de traduction où le bouddhisme indien se reformule en chinois. La grotte aux manuscrits de Dunhuang, murée vers l'an 1000 et rouverte en 1900, a livré des dizaines de milliers de documents en une vingtaine de langues.",
        events: ['sutra-diamant-imprime'],
      },
      {
        tradition: 'islam',
        title: "L'islam par la mer",
        text: "L'Indonésie, pays musulman le plus peuplé du monde, n'a jamais été conquise par une armée arabe : l'islam y arrive par les marchands du golfe et du Gujarat entre le XIIIe et le XVIe siècle, et se diffuse par les cours locales et les confréries soufies.",
      },
      {
        tradition: 'christianisme',
        title: "L'Église d'Orient jusqu'en Chine",
        text: "La stèle de Xi'an, gravée en 781, atteste une présence chrétienne syriaque en Chine depuis 635. Cette Église, souvent appelée nestorienne, a essaimé le long des mêmes routes que le bouddhisme, en sens inverse, et disparu presque sans trace occidentale.",
      },
    ],
    limit:
      "La conquête a joué son rôle, et l'opposer au commerce est artificiel : les routes commerciales sont souvent sécurisées par une puissance militaire, et les deux mécanismes se soutiennent.",
  },
  {
    id: 'traduction',
    stage: 'diffusion',
    title: 'La traduction comme transformation',
    claim:
      "Une religion qui change de langue change de contenu : traduire, c'est choisir dans le lexique d'arrivée des mots qui portent déjà une histoire.",
    signals: [
      "Un terme central rendu par un mot du répertoire religieux local, avec ses connotations",
      "Des controverses sur la licéité même de traduire",
      "Un texte traduit qui devient à son tour original pour une autre traduction",
    ],
    description:
      "Le premier bouddhisme chinois emprunte son vocabulaire au taoïsme et devient, pendant deux siècles, difficile à distinguer de lui. La Septante grecque, en rendant l'hébreu par des concepts grecs, prépare la théologie patristique. Les missionnaires en Chine se déchirent sur le mot qui désignera Dieu. La traduction n'est pas un canal transparent : c'est le lieu où une religion se reformule dans le monde mental d'autrui — et l'atelier de traduction de cet atlas est consacré à rendre ce processus visible.",
    cases: [
      {
        tradition: 'bouddhisme',
        title: 'Le geyi chinois',
        text: "Pour rendre les concepts indiens, les premiers traducteurs utilisent des termes taoïstes : le nirvāṇa devient wúwéi, le dharma devient dào. La méthode, appelée geyi, « appariement des concepts », rend le bouddhisme lisible et le déforme. Kumārajīva, au Ve siècle, entreprend de la corriger avec une équipe de plusieurs centaines de collaborateurs.",
      },
      {
        tradition: 'judaisme',
        title: "La Septante et l'almah d'Isaïe",
        text: "En traduisant ʿalmah (jeune fille) par parthenos (vierge), les traducteurs grecs d'Isaïe 7,14 produisent involontairement le socle scripturaire de la naissance virginale. Le Nouveau Testament cite la Septante, non l'hébreu. Un choix lexical du IIIe siècle avant notre ère a fondé un dogme.",
        events: ['septante'],
      },
      {
        tradition: 'christianisme',
        title: 'La querelle des rites chinois',
        text: "Comment dire « Dieu » en chinois : Tiān (le Ciel), Shàngdì (le Souverain d'en haut), ou un néologisme ? Et les rites aux ancêtres sont-ils un culte idolâtrique ou une politesse civile ? La condamnation romaine de 1704 tranche contre les jésuites et fait perdre à la mission chinoise deux siècles.",
      },
      {
        tradition: 'islam',
        title: 'Un texte réputé intraduisible',
        text: "Le Coran se déclare arabe, et la théologie majoritaire tient qu'il n'est Coran qu'en arabe : les versions en d'autres langues sont des « interprétations du sens ». Cette position protège le texte de la dérive lexicale et crée une immense population de croyants qui récitent sans comprendre — deux effets d'une même décision.",
        texts: ['coran'],
      },
    ],
    limit:
      "Les traducteurs n'étaient pas naïfs : la plupart des cas cités ont été discutés à l'époque même, parfois avec plus de finesse que dans la polémique moderne qui les invoque.",
  },
  {
    id: 'inculturation',
    stage: 'diffusion',
    title: "L'inculturation et le substrat",
    claim:
      "Une religion qui s'implante ne remplace jamais le fond religieux local : elle se superpose, absorbe, renomme.",
    signals: [
      'Des sanctuaires antérieurs réoccupés plutôt que détruits',
      'Un calendrier de fêtes calqué sur le cycle agraire local',
      'Des figures secondaires — saints, esprits, divinités mineures — qui prennent la place des anciennes',
      'Une pratique populaire nettement distincte de la doctrine officielle',
    ],
    description:
      "Grégoire le Grand écrit en 601 à un missionnaire en Angleterre de ne pas détruire les temples mais de les asperger d'eau bénite et d'y placer des reliques : « on ne peut retrancher tout d'un coup, à des esprits grossiers, toutes leurs habitudes ». La consigne décrit exactement le mécanisme. Il n'est ni une trahison ni une ruse : c'est la condition ordinaire de toute implantation durable.",
    cases: [
      {
        tradition: 'christianisme',
        title: 'Guadalupe',
        text: "L'apparition mariale de 1531 a lieu sur la colline de Tepeyac, site d'un culte à la déesse Tonantzin. La Vierge y apparaît à un Nahua, parle nahuatl, et son image porte des symboles lisibles dans les deux codes. Elle est devenue le symbole national mexicain, y compris pour des mouvements anticléricaux.",
      },
      {
        tradition: 'shintoisme',
        title: 'Le shinbutsu-shūgō japonais',
        text: "Pendant plus de mille ans, kami shinto et bouddhas coexistent dans les mêmes sanctuaires, les premiers étant interprétés comme des manifestations locales des seconds. La séparation forcée des deux, en 1868, est une décision politique de l'État Meiji — l'unité était l'état normal, la distinction est l'artefact récent.",
      },
      {
        tradition: 'religions-africaines',
        title: 'Les religions afro-atlantiques',
        text: "Candomblé, santería, vaudou : des orishas ouest-africains identifiés à des saints catholiques, d'abord par nécessité de dissimulation sous la contrainte esclavagiste, puis comme structure théologique stable. Le résultat n'est pas un christianisme dégradé ni un paganisme survivant, mais un système propre.",
      },
      {
        tradition: 'hindouisme',
        title: 'Sanskritisation',
        text: "Le sociologue M. N. Srinivas a nommé sanskritisation le processus par lequel des cultes locaux et des groupes de statut inférieur adoptent rites, végétarisme et divinités du répertoire brahmanique pour s'élever dans la hiérarchie — pendant que, symétriquement, des divinités villageoises sont intégrées au panthéon comme formes de Śiva ou de la Déesse.",
      },
    ],
    limit:
      "Parler de « survivances païennes » a longtemps servi à disqualifier la piété populaire comme superstition. Les pratiques décrites ici sont des systèmes cohérents pour ceux qui les vivent, pas des restes mal digérés.",
  },

  // ------------------------------------------------------------ TRANSFORMATION
  {
    id: 'reforme',
    stage: 'transformation',
    title: 'Le retour aux sources',
    claim:
      "Le mouvement le plus fréquent dans l'histoire religieuse est l'appel à revenir à l'origine — et il produit systématiquement du nouveau.",
    signals: [
      "Un slogan de retour : à l'Écriture seule, aux pieux ancêtres, au Veda, à la règle primitive",
      "Une origine reconstruite à partir des préoccupations du présent",
      "Une innovation majeure présentée comme une restauration",
      'Une technologie ou un contexte nouveau qui rend la restauration possible',
    ],
    description:
      "Aucun réformateur ne se présente comme innovateur : tous disent restaurer. C'est un fait sur le langage de la légitimité dans les sociétés de tradition, pas une hypocrisie. Mais l'origine à laquelle on revient est toujours une origine reconstruite, et le retour produit une configuration qui n'a jamais existé : la sola scriptura de Luther suppose l'imprimerie et l'alphabétisation, elle ne restaure aucun état antérieur de l'Église.",
    cases: [
      {
        tradition: 'christianisme',
        title: '1517, et la presse',
        text: "Luther conjugue un argument philologique — Érasme vient de rétablir le texte grec — et un médium neuf. Ses thèses sont imprimées et diffusées en quelques semaines dans tout l'Empire. La Réforme est inséparable d'une révolution technique : sans l'imprimerie, elle aurait sans doute été une hérésie régionale de plus.",
        figures: ['luther', 'erasme', 'calvin'],
        events: ['luther-1517'],
      },
      {
        tradition: 'islam',
        title: 'Les salaf comme horizon',
        text: "Le salafisme se définit par le retour aux trois premières générations de musulmans. Le mouvement est moderne dans ses moyens — imprimés, cassettes, réseaux — et dans plusieurs de ses positions, notamment son rejet des quatre écoles juridiques établies, qui est une rupture avec quinze siècles de pratique.",
        figures: ['ibn-taymiyya'],
        events: ['wahhabisme'],
      },
      {
        tradition: 'hindouisme',
        title: 'Arya Samaj',
        text: "Dayananda Sarasvatī fonde en 1875 un mouvement de retour au Veda seul, rejetant les images, les castes héréditaires et les purāṇa. Sa lecture du Veda — monothéiste, anti-rituelle, compatible avec la science — doit beaucoup au protestantisme que la présence britannique avait rendu familier.",
        events: ['ram-mohan-roy'],
      },
      {
        tradition: 'bouddhisme',
        title: 'Le bouddhisme moderniste',
        text: "Le « bouddhisme protestant » cinghalais, puis le modernisme bouddhique du XXe siècle, se réclament du canon pāli originel contre les dévotions monastiques — et produisent une religion inédite : rationnelle, laïque, centrée sur la méditation, largement exportable en Occident. La méditation de pleine conscience en est l'héritière directe.",
        events: ['parlement-religions'],
      },
    ],
    limit:
      "Distinguer restauration et innovation est un jugement d'historien qu'aucun acteur ne partagerait. Et certaines réformes ont réellement restauré des pratiques attestées — le schéma ne s'applique pas uniformément.",
  },
  {
    id: 'secularisation',
    stage: 'transformation',
    title: 'Sécularisation et recompositions',
    claim:
      "La sortie de religion n'a pas produit la disparition annoncée, mais un déplacement : de l'appartenance héritée vers le choix individuel.",
    signals: [
      "Une baisse de la pratique institutionnelle sans baisse équivalente de la croyance déclarée",
      'Une montée des « sans religion » qui ne sont pas tous athées',
      'Un marché de biens spirituels détachés de toute institution',
      'Une religiosité qui se reformule en éthique, en bien-être ou en identité culturelle',
    ],
    description:
      "La thèse classique — modernisation égale déclin religieux — a été largement révisée. Elle décrit correctement l'Europe de l'Ouest, mal les États-Unis, et pas du tout l'Afrique subsaharienne ou le monde musulman. Ce qui recule presque partout, c'est l'autorité des institutions à prescrire ; ce qui se maintient ou se recompose, c'est la demande de sens, désormais satisfaite par des offres modulaires que Danièle Hervieu-Léger décrit comme une religiosité « à la carte », et Grace Davie comme un « croire sans appartenir ».",
    cases: [
      {
        tradition: 'humanisme-seculier',
        title: 'Les nones',
        text: "La catégorie statistique des sans-religion est la plus dynamique dans la plupart des pays occidentaux. Les enquêtes montrent qu'elle mélange athées convaincus, agnostiques indifférents et croyants sans affiliation — ces derniers étant souvent majoritaires. « Sans religion » ne veut pas dire « sans croyance ».",
      },
      {
        tradition: 'christianisme',
        title: 'Le pentecôtisme, contre-exemple massif',
        text: "Né en 1906 à Los Angeles, le mouvement pentecôtiste compte aujourd'hui plusieurs centaines de millions de fidèles, en croissance rapide en Afrique, en Amérique latine et en Asie. Sa dynamique — expérience directe, guérison, mobilité sociale — contredit frontalement l'idée que la modernisation érode la religion.",
        events: ['azusa'],
      },
      {
        tradition: 'bouddhisme',
        title: 'La méditation sans le bouddhisme',
        text: "La mindfulness, extraite du canon bouddhique, validée par protocole clinique et diffusée en entreprise et à l'hôpital, illustre un mécanisme précis : une technique religieuse est détachée de sa cosmologie, reformulée en langage thérapeutique, et adoptée par des publics qui refuseraient l'ensemble d'origine.",
        events: ['kabat-zinn'],
      },
    ],
    limit:
      "Le vocabulaire de la sécularisation est né en Europe et porte son histoire particulière. L'appliquer tel quel à des sociétés où religion, droit et communauté n'ont jamais été des sphères distinctes produit des diagnostics faussés.",
  },
];

export const mechanismsById: Record<string, Mechanism> = Object.fromEntries(
  mechanisms.map((m) => [m.id, m]),
);

export const stages: Mechanism['stage'][] = [
  'naissance',
  'fixation',
  'division',
  'diffusion',
  'transformation',
];

/**
 * L'échelle par laquelle un énoncé devient une écriture sainte.
 * Elle est présentée comme une séquence, mais les étapes se chevauchent
 * et certaines traditions en sautent.
 */
export const canonLadder: { step: string; title: string; text: string; example: string }[] = [
  {
    step: '1',
    title: 'Une parole efficace',
    text: "Quelqu'un dit quelque chose que ses auditeurs jugent d'une autorité inhabituelle. Rien n'est encore fixé, tout circule sous forme de récit et de formule.",
    example: "Les paroles de Jésus circulent oralement pendant une génération ; Paul écrit avant qu'aucun évangile n'existe.",
  },
  {
    step: '2',
    title: 'Une mémoire organisée',
    text: "Le groupe met en forme : listes, sentences, récits-types. La mémoire n'est pas passive, elle sélectionne selon les besoins de la communauté — prêcher, trancher un litige, célébrer.",
    example: "La source Q, reconstruite par les exégètes, serait un recueil de paroles sans récit de la passion.",
  },
  {
    step: '3',
    title: 'Une mise par écrit',
    text: "Un support fixe le texte, souvent sous la pression d'une menace. L'écrit permet la diffusion à distance et rend possible la divergence entre copies.",
    example: "Le Tipiṭaka est écrit à Ceylan vers 29 av. J.-C., quand la chaîne des récitants est menacée.",
  },
  {
    step: '4',
    title: 'Un usage liturgique',
    text: "Le texte est lu dans le culte. C'est le critère de canonicité le plus opérant en pratique : ce qu'on lit à l'assemblée devient ce qui fait autorité.",
    example: "Justin décrit vers 150 la lecture des « mémoires des apôtres » à l'assemblée dominicale.",
  },
  {
    step: '5',
    title: 'Une liste et une frontière',
    text: "Une autorité énumère. La liste est toujours produite contre quelqu'un : elle exclut autant qu'elle inclut, et elle est souvent contestée pendant des siècles.",
    example: "La lettre d'Athanase (367) fixe les vingt-sept livres ; Trente (1546) tranche pour les catholiques sur les deutérocanoniques.",
  },
  {
    step: '6',
    title: 'Un texte standardisé',
    text: "On établit une version de référence, on vocalise, on numérote, on fixe l'orthographe. Le travail est technique et il a des effets doctrinaux considérables.",
    example: "Les Massorètes vocalisent l'hébreu du VIIe au Xe siècle ; l'édition du Caire fixe le Coran en 1924.",
  },
  {
    step: '7',
    title: 'Une science de la lecture',
    text: "Le texte étant clos, l'interprétation devient le lieu de l'invention. Des règles herméneutiques sont codifiées, des commentaires font autorité à leur tour.",
    example: "Les treize règles de Rabbi Ismaël, les quatre sens de l'Écriture latine, les uṣūl al-fiqh.",
  },
  {
    step: '8',
    title: 'Une traduction, et un autre monde',
    text: "Le texte franchit une langue. Chaque traduction crée une communauté de lecteurs pour qui c'est la traduction, et non l'original, qui est le texte.",
    example: "Vulgate, Septante, King James, Luther : des traductions devenues à leur tour intouchables.",
  },
];
