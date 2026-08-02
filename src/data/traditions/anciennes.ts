import type { Tradition } from '../types';

export const traditionsAnciennes: Tradition[] = [
  // =========================================================================
  {
    id: 'zoroastrisme',
    name: 'Zoroastrisme',
    altNames: ['Mazdéisme', 'Parsisme', 'Behdin'],
    family: 'iranienne',
    founded: 'Entre 1500 et 600 av. J.-C. (datation très débattue)',
    foundedYear: -1200,
    origin: 'Asie centrale / plateau iranien',
    adherents: '≈ 110 000 - 200 000',
    symbol: '🔥',
    color: '#c9812a',
    tagline: 'La vie est un champ de bataille moral entre vérité et mensonge — et tu choisis.',
    summary:
      "Fondée par le prophète Zarathoustra, la première religion à placer le choix moral individuel au centre de la cosmologie. Elle est vraisemblablement la source d'idées devenues centrales dans le judaïsme tardif, le christianisme et l'islam : dualisme du bien et du mal, anges et démons, jugement individuel après la mort, résurrection, sauveur à venir, fin des temps.",
    essence:
      "Un Dieu bon, Ahura Mazda, n'est pas l'auteur du mal. Le mal (Angra Mainyu) est une force distincte, et l'histoire du monde est le procès de leur affrontement. L'humain n'est pas spectateur : chacune de ses bonnes pensées, bonnes paroles et bonnes actions renforce concrètement le camp de la vérité (asha). À la fin, le bien gagnera — et tous seront purifiés.",
    centralQuestion: "Si Dieu est bon, d'où vient le mal — et quel est mon rôle dans sa défaite ?",
    coreBeliefs: [
      {
        title: 'Ahura Mazda et le dualisme éthique',
        text: "Ahura Mazda, « Seigneur Sage », est bon, sage et créateur. Face à lui, Angra Mainyu (Ahriman), esprit destructeur, non créé par lui. Ce dualisme n'est pas métaphysique et éternel : il est temporaire et se résoudra. Il fournit une réponse à la théodicée que le monothéisme strict a beaucoup plus de mal à donner.",
      },
      {
        title: 'Asha et druj',
        text: "Asha : la vérité, l'ordre juste, le droit chemin. Druj : le mensonge, le désordre. Toute action relève de l'un ou de l'autre. La formule qui résume la religion tient en trois mots : humata, hukhta, huvarshta — bonnes pensées, bonnes paroles, bonnes actions.",
      },
      {
        title: 'Libre arbitre',
        text: "Zarathoustra insiste : chacun choisit. C'est peut-être la première affirmation explicite d'une responsabilité morale individuelle dans l'histoire religieuse, en rupture avec les religions de sacrifice et de destin.",
      },
      {
        title: 'Eschatologie',
        text: "Jugement individuel au pont Chinvat trois jours après la mort ; venue de sauveurs (Saoshyant) nés de la semence de Zarathoustra ; résurrection des corps ; épreuve du métal en fusion, douce pour les justes ; Frashokereti, la « rénovation » finale où le mal est éliminé et où tous, y compris les damnés, sont purifiés et sauvés. Un universalisme du salut rare dans l'Antiquité.",
      },
      {
        title: 'Le monde matériel est bon',
        text: "Contrairement aux gnosticismes, le zoroastrisme affirme la bonté de la création matérielle. L'ascétisme, le célibat et le jeûne y sont mal vus : bien vivre, se marier, avoir des enfants, cultiver la terre, c'est combattre pour Ahura Mazda.",
      },
    ],
    practices: [
      {
        title: 'Le feu',
        text: "Symbole de l'ordre et de la pureté, jamais adoré pour lui-même. Les temples du feu entretiennent des flammes parfois millénaires (celle de Yazd brûlerait depuis le Ve siècle). On prie face à une source de lumière.",
      },
      {
        title: 'Prières et kusti',
        text: "Cinq moments de prière par jour ; nouage et dénouage rituels du cordon sacré (kusti) autour de la chemise blanche (sudreh), reçus lors de l'initiation (navjote) vers 7-12 ans.",
      },
      {
        title: 'Funérailles',
        text: "Le cadavre étant impur, il ne doit souiller ni la terre, ni l'eau, ni le feu : d'où l'exposition aux vautours sur des « tours du silence » (dakhma). Pratique aujourd'hui largement remplacée par la crémation électrique ou l'inhumation en sarcophage, la population de vautours ayant chuté en Inde.",
      },
      {
        title: 'Fêtes',
        text: "Nowruz, le nouvel an au premier jour du printemps — fête zoroastrienne devenue patrimoine culturel de tout le monde iranien, turcique et centre-asiatique, célébrée par plus de 300 millions de personnes de toutes religions.",
      },
    ],
    ethics: [
      {
        title: 'Trois piliers',
        text: "Bonnes pensées, bonnes paroles, bonnes actions : une éthique d'une simplicité mémorable, où la pensée compte autant que l'acte.",
      },
      {
        title: 'Charité et honnêteté',
        text: "Le mensonge est la faute par excellence — les auteurs grecs notaient que les Perses enseignaient à leurs enfants « à monter à cheval, à tirer à l'arc et à dire la vérité » (Hérodote).",
      },
      {
        title: 'Écologie avant la lettre',
        text: "Terre, eau, feu et air étant sacrés, les polluer est une faute religieuse. La communauté parsie contemporaine se réclame de cet héritage dans les débats environnementaux.",
      },
    ],
    history: [
      {
        title: 'Zarathoustra',
        text: "Prêtre et poète de langue iranienne ancienne, auteur des Gathas. Sa datation oscille entre 1500 et 600 av. J.-C. ; la linguistique (les Gathas sont proches du sanskrit védique) pousse plutôt vers 1200-1000. Il réforme une religion indo-iranienne de sacrifice en y injectant une orientation éthique radicale.",
      },
      {
        title: 'Empires perses (550 av. – 651 apr.)',
        text: "Religion des Achéménides (Cyrus, Darius), puis des Parthes, puis religion d'État des Sassanides, avec un clergé structuré et un canon rassemblé. C'est sous domination perse que les judéens exilés reviennent — contact historique décisif pour la circulation des idées eschatologiques.",
      },
      {
        title: 'Après la conquête arabe',
        text: "Statut de dhimmi, conversions progressives, marginalisation. Au Xe siècle, un groupe émigre vers le Gujarat : ce sont les Parsis, qui deviendront une élite commerçante et industrielle de l'Inde britannique (Tata, Godrej, le chef d'orchestre Zubin Mehta, Freddie Mercury).",
      },
      {
        title: 'Aujourd’hui',
        text: "Communauté en déclin démographique préoccupant, du fait de l'endogamie stricte, d'une natalité très basse et de l'absence de conversion admise par les traditionalistes. Débat interne majeur sur l'acceptation des conversions et des enfants de mères zoroastriennes.",
      },
    ],
    branches: [
      { name: 'Parsis', when: 'Xe s.', description: "Communauté indienne, la plus nombreuse (~50-60 000), plutôt traditionaliste sur l'endogamie." },
      { name: 'Zoroastriens d’Iran (Behdin)', when: 'Continu', description: "≈ 15-25 000, essentiellement à Yazd, Kerman et Téhéran ; minorité reconnue mais discriminée." },
      { name: 'Diaspora et néo-zoroastriens', when: 'XXe-XXIe s.', description: "Amérique du Nord, Royaume-Uni, Australie ; courants ouverts à la conversion, notamment au Kurdistan et au Tadjikistan." },
    ],
    keyTexts: ['avesta', 'gathas', 'bundahishn'],
    keyFigures: ['zarathoustra', 'cyrus', 'darius'],
    influencedBy: ['religion-indo-iranienne'],
    influenced: ['judaisme', 'christianisme', 'islam', 'manicheisme', 'mithraisme', 'gnosticisme', 'bahaisme', 'yezidisme'],
    misconceptions: [
      {
        claim: '« Les zoroastriens adorent le feu. »',
        reality:
          "Le feu est une direction de prière et un symbole de pureté, exactement comme la Kaaba pour les musulmans ou l'autel pour les chrétiens. Les zoroastriens sont explicitement monothéistes autour d'Ahura Mazda.",
      },
      {
        claim: '« C’est une religion morte. »',
        reality:
          "Elle est vivante mais très minoritaire, avec des communautés actives en Inde, en Iran et en diaspora, et une liturgie continue depuis plus de deux millénaires.",
      },
    ],
    contribution:
      "Probablement la source la plus importante et la moins reconnue du monothéisme éthique occidental : jugement individuel post mortem, paradis et enfer, anges et démons, sauveur eschatologique, résurrection des corps, fin des temps et victoire finale du bien. Ces éléments apparaissent dans le judaïsme après l'Exil, précisément lorsqu'il passe deux siècles sous domination perse.",
    livingDebates: [
      "Conversion et mariages mixtes : ouvrir ou disparaître ?",
      "Statut des enfants de mère zoroastrienne et de père non zoroastrien",
      "Adaptation des rites funéraires aux contraintes modernes",
    ],
  },

  // =========================================================================
  {
    id: 'religion-egyptienne',
    name: 'Religion de l’Égypte antique',
    family: 'antique',
    founded: '≈ 3100 av. J.-C. (racines antérieures)',
    foundedYear: -3100,
    origin: 'Vallée du Nil',
    adherents: 'Éteinte (culte attesté jusqu’au VIe s. apr. J.-C.)',
    symbol: '𓂀',
    color: '#c9a227',
    tagline: 'Maintenir l’ordre du monde contre le chaos, et vaincre la mort.',
    summary:
      "Pendant plus de trois millénaires, la religion égyptienne a organisé la vie d'un État autour d'un principe — la Maât, l'ordre juste — et d'une obsession : franchir la mort. Elle a produit la plus vaste littérature funéraire de l'Antiquité et le premier jugement moral individuel post mortem documenté.",
    essence:
      "Le monde est né du chaos et y retournerait sans effort rituel constant. Le pharaon, les prêtres et chaque individu maintiennent la Maât — vérité, justice, équilibre — contre l'isfet. La mort n'est pas une fin mais un passage périlleux que la connaissance rituelle permet de franchir, à condition que le cœur pèse le poids d'une plume.",
    centralQuestion: "Comment maintenir l'ordre du cosmos, et comment survivre au passage de la mort ?",
    coreBeliefs: [
      {
        title: 'Maât',
        text: "Déesse et principe : vérité, justice, ordre cosmique et social. Le roi règne « pour que Maât remplace isfet ». Les vizirs juraient sur elle. C'est l'une des premières formulations d'un ordre normatif transcendant auquel le pouvoir lui-même est soumis.",
      },
      {
        title: 'Un polythéisme fluide',
        text: "Plus de 1 500 divinités, aux identités poreuses : elles fusionnent (Amon-Rê), se dédoublent, changent d'attributs selon le lieu et l'époque. Les théologies concurrentes d'Héliopolis, d'Hermopolis, de Memphis et de Thèbes coexistent sans souci de cohérence — logique religieuse profondément différente de la nôtre.",
      },
      {
        title: 'Le mythe osirien',
        text: "Osiris, roi assassiné et démembré par son frère Seth, reconstitué par son épouse Isis, conçoit posthumément Horus qui reconquiert le trône ; Osiris devient roi des morts. Récit fondateur de dieu tué et revenu à la vie, de deuil féminin et de justice rétablie, qui structure toute l'idéologie funéraire et royale.",
      },
      {
        title: 'La personne composite',
        text: "L'être humain comprend le corps (khat), le ka (force vitale, double), le ba (personnalité mobile, figurée en oiseau à tête humaine), l'akh (esprit transfiguré), le nom (ren) et l'ombre. Détruire le nom d'un mort, c'est le tuer une seconde fois — d'où les martelages d'inscriptions.",
      },
      {
        title: 'La pesée du cœur',
        text: "Devant Osiris, le cœur du défunt est pesé contre la plume de Maât. Le mort récite la « confession négative » : « Je n'ai pas fait souffrir, je n'ai pas volé, je n'ai pas fait pleurer... » Si le cœur est trop lourd, Ammout le dévore : c'est l'anéantissement. Premier jugement moral individuel après la mort connu de l'histoire.",
      },
    ],
    practices: [
      {
        title: 'Momification',
        text: "Soixante-dix jours de traitement : extraction des viscères placés en vases canopes, dessiccation au natron, bandelettes, amulettes. Le corps doit rester reconnaissable pour que le ba le retrouve.",
      },
      {
        title: 'Culte quotidien du temple',
        text: "Le temple n'est pas un lieu d'assemblée mais la maison du dieu. Chaque matin, le prêtre ouvre le naos, lave, habille, parfume et nourrit la statue. Le peuple n'y accède pas : il rencontre le dieu lors des processions.",
      },
      {
        title: 'Magie (heka)',
        text: "Non opposée à la religion : le heka est une énergie créatrice que dieux et humains utilisent. Formules, amulettes, statuettes ouchebtis destinées à travailler à la place du mort dans l'au-delà.",
      },
    ],
    ethics: [
      {
        title: 'La confession négative',
        text: "Le chapitre 125 du Livre des Morts énumère 42 fautes à nier : meurtre, vol, mensonge, calomnie, détournement des eaux d'irrigation, tricherie sur les poids. Une des plus anciennes listes morales détaillées de l'humanité, antérieure d'un millénaire au Décalogue.",
      },
      {
        title: 'Sagesse et instructions',
        text: "Les « instructions » (Ptahhotep, Ani, Amenemopé) enseignent la modération, le respect des inférieurs, la maîtrise de la parole. L'Instruction d'Amenemopé présente des parallèles textuels si étroits avec Proverbes 22-24 qu'un emprunt est très probable.",
      },
    ],
    history: [
      {
        title: 'Des origines à l’Ancien Empire',
        text: "Unification vers 3100. Le roi est Horus vivant, puis fils de Rê. Les Textes des Pyramides (~2350 av. J.-C.) sont le plus ancien corpus religieux écrit conservé au monde.",
      },
      {
        title: 'Démocratisation de l’au-delà',
        text: "Réservé au roi à l'Ancien Empire, l'accès à l'immortalité s'étend aux nobles (Textes des Sarcophages) puis à quiconque peut payer un Livre des Morts. Trajectoire remarquable : le salut se démocratise.",
      },
      {
        title: 'L’épisode d’Akhenaton (≈1353-1336)',
        text: "Aménophis IV impose le culte exclusif d'Aton, le disque solaire, ferme les temples d'Amon et fonde une capitale nouvelle. Première tentative documentée d'exclusivisme religieux imposé d'en haut. Elle est effacée dès sa mort. Freud en a tiré une hypothèse célèbre — mais spéculative — sur l'origine du monothéisme mosaïque.",
      },
      {
        title: 'Fin et postérité',
        text: "Hellénisation (Sérapis), diffusion du culte d'Isis dans tout l'Empire romain jusqu'en Bretagne, fermeture du temple de Philae vers 537 par Justinien. L'iconographie d'Isis allaitant Horus a probablement influencé celle de la Vierge à l'Enfant.",
      },
    ],
    branches: [],
    keyTexts: ['textes-pyramides', 'livre-des-morts', 'instruction-amenemope'],
    keyFigures: ['akhenaton', 'imhotep', 'ptahhotep'],
    influencedBy: [],
    influenced: ['judaisme', 'religion-grecque', 'christianisme', 'hermetisme', 'gnosticisme'],
    misconceptions: [
      {
        claim: '« Les pyramides ont été construites par des esclaves hébreux. »',
        reality:
          "Les pyramides de Gizeh datent de ~2560 av. J.-C., un millénaire avant toute présence israélite plausible. L'archéologie a mis au jour les villages, les rations et les tombes d'ouvriers égyptiens rémunérés et honorés.",
      },
      {
        claim: '« Les Égyptiens étaient obsédés par la mort. »',
        reality:
          "Ils étaient obsédés par la vie, au point de vouloir la prolonger indéfiniment. Nos sources sont déséquilibrées : les tombes en pierre du désert ont survécu, les maisons de brique crue du limon ont disparu.",
      },
    ],
    contribution:
      "Le premier jugement moral individuel après la mort ; une littérature de sagesse qui a directement irrigué la Bible ; le modèle du dieu mort et ressuscité ; l'iconographie de la mère divine à l'enfant ; une architecture sacrée et une conception du temps cyclique dont l'influence traverse le monde méditerranéen.",
    livingDebates: [
      "Akhenaton était-il monothéiste ou hénothéiste ?",
      "Nature et ampleur de l'influence égyptienne sur la Bible hébraïque",
      "Reconstructions néo-païennes (kémétisme) et rapport aux sources",
    ],
  },

  // =========================================================================
  {
    id: 'religion-mesopotamienne',
    name: 'Religions de Mésopotamie',
    altNames: ['Sumer', 'Akkad', 'Babylone', 'Assyrie'],
    family: 'antique',
    founded: '≈ 3500 av. J.-C.',
    foundedYear: -3500,
    origin: 'Entre Tigre et Euphrate',
    adherents: 'Éteinte (Ier s. apr. J.-C.)',
    symbol: '𒀭',
    color: '#a06a3f',
    tagline: 'Les humains ont été créés pour servir les dieux — et pour mourir.',
    summary:
      "Premières religions dotées d'une écriture, elles nous ont laissé les plus anciens mythes de création, de déluge et de descente aux enfers. Leur influence sur la Bible hébraïque est directe et documentée.",
    essence:
      "L'humanité est faite d'argile et du sang d'un dieu tué, créée pour prendre en charge le travail des dieux. Les dieux ne sont ni justes ni prévisibles ; l'immortalité n'est pas pour nous. Il reste à servir, à divertir les dieux par le culte, et à trouver dans le travail, la bière, l'amour et la mémoire de son nom la seule consolation disponible.",
    centralQuestion: "Que valent une vie et une cité sous des dieux puissants et imprévisibles ?",
    coreBeliefs: [
      {
        title: 'Un panthéon hiérarchisé',
        text: "An (ciel), Enlil (souffle, autorité), Enki/Ea (eaux douces, ruse et sagesse), Inanna/Ishtar (amour et guerre), Sîn (lune), Shamash (soleil et justice), Marduk qui devient roi des dieux quand Babylone devient capitale : les hiérarchies divines suivent les hiérarchies politiques.",
      },
      {
        title: 'L’humain serviteur',
        text: "Dans l'Atrahasis et l'Enuma Elish, l'humanité est créée pour libérer les dieux du travail agricole. Anthropologie sans dignité intrinsèque — que la Genèse renverse en faisant de l'humain une image de Dieu, dans un geste probablement polémique.",
      },
      {
        title: 'Le monde des morts',
        text: "Le Kur/Irkalla : un lieu poussiéreux où tous vont, justes et injustes, manger de la poussière. Aucune rétribution morale. Le culte des morts par les descendants adoucit seul leur sort. Cette vision est très proche du shéol biblique ancien.",
      },
      {
        title: 'Divination',
        text: "La volonté des dieux se lit dans le foie des animaux (hépatoscopie), les astres, les naissances anormales, les rêves. D'où une astronomie mathématique d'une précision remarquable, développée pour des raisons religieuses.",
      },
    ],
    practices: [
      {
        title: 'Ziggourats et culte',
        text: "Temple à degrés, « lien entre ciel et terre ». Le dieu réside dans sa statue, qu'on nourrit et habille. Le mariage sacré (hieros gamos) unit rituellement le roi à la déesse.",
      },
      {
        title: 'Akitu',
        text: "Fête du nouvel an babylonien : récitation de l'Enuma Elish, humiliation rituelle du roi giflé par le grand prêtre, restauration de l'ordre. Le renouvellement annuel du cosmos passe par un abaissement du pouvoir.",
      },
    ],
    ethics: [
      {
        title: 'Le code de Hammurabi',
        text: "~1750 av. J.-C. Reçu du dieu-soleil Shamash, il fonde le droit sur une autorité divine et énonce la loi du talion. Les parallèles avec le Code de l'Alliance (Exode 21-23) sont étroits, mais la Bible s'en écarte sur un point capital : elle ne module pas les peines selon la classe sociale de la victime.",
      },
      {
        title: 'Le juste souffrant',
        text: "Le Ludlul bel nemeqi et le « Théodicée babylonienne » posent, un demi-millénaire avant le livre de Job, la question du juste qui souffre sans raison.",
      },
    ],
    history: [
      {
        title: 'Sumer, Akkad, Babylone, Assyrie',
        text: "Invention de l'écriture cunéiforme vers 3300 av. J.-C. pour la comptabilité des temples : l'écriture naît d'une administration religieuse. Succession de cités-États et d'empires, chacun promouvant son dieu poliade.",
      },
      {
        title: 'Transmission',
        text: "L'Exil des Judéens à Babylone (586-538) met en contact direct les élites israélites avec cette littérature. Les récits du déluge (Gilgamesh XI / Genèse 6-9) présentent des correspondances de détail — envoi d'oiseaux, arche, sacrifice, arc-en-ciel — qui excluent la coïncidence.",
      },
    ],
    branches: [],
    keyTexts: ['epopee-gilgamesh', 'enuma-elish', 'code-hammurabi', 'atrahasis', 'descente-inanna'],
    keyFigures: ['gilgamesh', 'hammurabi', 'enheduanna'],
    influencedBy: [],
    influenced: ['judaisme', 'religion-grecque', 'zoroastrisme', 'mandeisme', 'astrologie'],
    misconceptions: [
      {
        claim: '« La Bible a simplement copié Gilgamesh. »',
        reality:
          "Le récit biblique retravaille un patrimoine commun proche-oriental en en inversant le sens : chez Atrahasis, le déluge vient du bruit des humains qui gêne le sommeil des dieux ; dans la Genèse, il vient d'un jugement moral. L'emprunt est aussi une polémique.",
      },
    ],
    contribution:
      "L'écriture, les mathématiques sexagésimales (nos 60 minutes et 360 degrés), l'astronomie, les premiers codes de lois, la première œuvre littéraire signée d'un auteur nommé (la prêtresse Enheduanna, XXIIIe s. av. J.-C.), et une bonne part de la matière narrative de la Genèse.",
    livingDebates: ["Nature et voies exactes de la transmission vers la Bible", "Rôle des femmes dans le clergé mésopotamien"],
  },

  // =========================================================================
  {
    id: 'religion-grecque',
    name: 'Religion grecque et romaine',
    family: 'antique',
    founded: '≈ 1600 av. J.-C.',
    foundedYear: -1600,
    origin: 'Égée, puis Méditerranée',
    adherents: 'Éteinte comme culte public (IVe-VIe s.), reconstructions modernes',
    symbol: '🏛',
    color: '#5b8fa8',
    tagline: 'Des dieux trop humains, des mystères qui promettent davantage.',
    summary:
      "La religion gréco-romaine était affaire de rites civiques plutôt que de croyance intime : on honorait les dieux par des sacrifices publics pour garantir la prospérité de la cité. À côté, les cultes à mystères offraient une expérience personnelle et une espérance d'au-delà, et la philosophie proposait une troisième voie.",
    essence:
      "Les dieux ne sont ni bons ni omniscients : ils sont puissants, immortels et susceptibles. Ils ne demandent pas la foi mais l'honneur rituel. Face à la mort, la cité n'offre rien de solide — ce sont les mystères et la philosophie qui prennent le relais, chacun à leur manière.",
    centralQuestion: "Comment obtenir la faveur des puissances, et que peut espérer un mortel ?",
    coreBeliefs: [
      {
        title: 'Le panthéon olympien',
        text: "Zeus, Héra, Athéna, Apollon, Artémis, Poséidon, Déméter, Dionysos, Arès, Aphrodite, Héphaïstos, Hermès, transposés à Rome (Jupiter, Junon, Minerve…). Dieux anthropomorphes, faillibles, jaloux. Homère et Hésiode « ont donné aux Grecs leurs dieux » (Hérodote) — c'est la poésie, non un clergé, qui fait la théologie.",
      },
      {
        title: 'Le destin au-dessus des dieux',
        text: "Moira, le lot assigné, s'impose même à Zeus. Le tragique grec naît de cet écart : l'humain est responsable de ce qu'il ne maîtrise pas. L'hybris, la démesure, appelle la némésis.",
      },
      {
        title: 'Les mystères',
        text: "Éleusis (Déméter et Perséphone), dionysisme, orphisme, puis Isis, Cybèle, Mithra. Initiation secrète, expérience émotionnelle intense, promesse d'un sort meilleur après la mort. Ils comblent exactement ce que le culte civique n'offrait pas, et constituent le principal concurrent du christianisme naissant.",
      },
      {
        title: 'La philosophie comme religion',
        text: "Platon (âme immortelle, monde intelligible), le stoïcisme (providence rationnelle, logos, vivre selon la nature), l'épicurisme (les dieux existent mais se désintéressent de nous ; ne crains pas la mort). Le néoplatonisme de Plotin fournira au christianisme une bonne part de son outillage conceptuel.",
      },
    ],
    practices: [
      {
        title: 'Sacrifice',
        text: "Le geste central : un animal est offert, brûlé pour les dieux, et mangé par la communauté. Le sacrifice est autant un repas civique qu'un acte cultuel. Les temples abritent la statue ; l'autel, à l'extérieur, accueille le rite.",
      },
      {
        title: 'Oracles et divination',
        text: "Delphes, Dodone, les sibylles, les auspices romains, l'examen des entrailles. Aucune décision politique majeure ne se prenait sans consultation.",
      },
      {
        title: 'Fêtes',
        text: "Panathénées, Dionysies (d'où naît le théâtre tragique et comique), Jeux olympiques — d'origine et de cadre religieux —, Saturnales romaines et leur inversion temporaire des rôles sociaux.",
      },
      {
        title: 'Culte impérial',
        text: "À Rome, le génie de l'empereur reçoit un culte. Le refus des chrétiens et des juifs d'y participer n'est pas perçu comme une opinion religieuse mais comme une déloyauté civique : c'est la clé des persécutions.",
      },
    ],
    ethics: [
      {
        title: 'Une morale hors du culte',
        text: "Les dieux ne dictent pas de commandements moraux. L'éthique relève de la philosophie (Aristote, les stoïciens), de la loi de la cité et de l'honneur. Séparation du religieux et du moral qui étonne les héritiers du monothéisme.",
      },
      {
        title: 'Hospitalité sacrée',
        text: "Zeus Xenios protège l'étranger et le suppliant. L'une des rares obligations proprement religieuses envers autrui.",
      },
    ],
    history: [
      {
        title: 'De Mycènes à la cité',
        text: "Les tablettes en linéaire B attestent dès le IIe millénaire des noms divins encore présents mille ans plus tard. La religion se structure avec la polis : chaque cité a sa divinité tutélaire.",
      },
      {
        title: 'Critique philosophique',
        text: "Xénophane raille l'anthropomorphisme (« si les bœufs avaient des dieux, ils leur ressembleraient ») ; Socrate est condamné en 399 pour impiété ; les stoïciens réinterprètent les mythes allégoriquement. La critique interne prépare le terrain au monothéisme.",
      },
      {
        title: 'Fin des cultes',
        text: "Constantin (312), interdictions successives de Théodose (391-392), fermeture de l'école d'Athènes en 529. Les derniers foyers païens résistent jusqu'au VIe siècle. Le paganisme meurt moins d'une réfutation que d'une perte de financement public et de prestige.",
      },
    ],
    branches: [],
    keyTexts: ['iliade-odyssee', 'theogonie', 'hymnes-orphiques', 'republique-platon'],
    keyFigures: ['homere', 'hesiode', 'pythagore', 'socrate', 'platon', 'plotin', 'julien-apostat'],
    influencedBy: ['religion-mesopotamienne', 'religion-egyptienne', 'religion-indo-europeenne'],
    influenced: ['christianisme', 'gnosticisme', 'islam', 'hermetisme', 'neopaganisme'],
    misconceptions: [
      {
        claim: '« Les Grecs croyaient littéralement à leurs mythes. »',
        reality:
          "Les degrés d'adhésion variaient énormément ; les mythes circulaient en versions contradictoires et étaient publiquement discutés, allégorisés ou moqués. Ce qui était obligatoire, c'était le rite, pas la croyance.",
      },
    ],
    contribution:
      "La distinction entre mythe et raison ; la philosophie comme voie de salut, qui fournira au christianisme sa métaphysique ; le théâtre né du rituel ; les Jeux olympiques ; un modèle de religion civique où l'appartenance prime sur la conviction.",
    livingDebates: ["Reconstructions néo-païennes (hellénisme moderne) et authenticité", "Rôle réel des mystères dans la genèse du christianisme"],
  },

  // =========================================================================
  {
    id: 'religion-nordique',
    name: 'Religions nordiques et celtiques',
    family: 'antique',
    founded: '≈ 1000 av. J.-C. – 1100 apr. J.-C.',
    foundedYear: -800,
    origin: 'Scandinavie, îles Britanniques, Gaule, Europe centrale',
    adherents: 'Éteintes ; reconstructions modernes (ásatrú, druidisme) ≈ 100 000',
    symbol: '⚔',
    color: '#6e8b7a',
    tagline: 'Un monde voué à finir, et l’honneur d’y tenir bon.',
    summary:
      "Traditions polythéistes d'Europe du Nord et de l'Ouest, connues surtout par des sources tardives et extérieures : les Eddas islandaises (XIIIe s., écrites par des chrétiens), César et les archéologues pour les Celtes. Leur trait le plus singulier est une eschatologie où les dieux eux-mêmes périssent.",
    essence:
      "Le monde a une fin écrite d'avance : au Ragnarök, les dieux tomberont. Savoir cela ne dispense pas de combattre — cela donne au courage sa valeur. L'honneur, la parole tenue et la réputation qui survit au mort sont ce qu'on peut opposer à un destin qu'on ne changera pas.",
    centralQuestion: "Comment vivre dignement dans un monde condamné ?",
    coreBeliefs: [
      {
        title: 'Ases et Vanes',
        text: "Odin (souverain, magie, poésie, sagesse acquise par sacrifice de soi et d'un œil), Thor (tonnerre, protecteur des hommes libres, le plus populaire), Freyja et Freyr (fertilité, Vanes), Loki (trickster ambigu). Neuf mondes reliés par l'arbre Yggdrasil.",
      },
      {
        title: 'Wyrd et Ragnarök',
        text: "Le destin est tissé par les Nornes. Le Ragnarök verra la mort d'Odin et de Thor, l'engloutissement du monde — puis sa renaissance. Une eschatologie sans salut individuel garanti, où même les dieux sont mortels.",
      },
      {
        title: 'Chez les Celtes',
        text: "Panthéon régional foisonnant (Lug, Dagda, Brigit, Cernunnos, Épona), sacralité des sources, des arbres et des îles, druides comme classe savante et judiciaire transmettant oralement pendant vingt ans, croyance en une survie de l'âme que César interprète comme une métempsycose.",
      },
    ],
    practices: [
      {
        title: 'Blót et sumbl',
        text: "Sacrifice d'animaux (et, selon les sources, parfois d'humains) dont le sang est aspergé sur l'assemblée ; banquet de boissons rituelles avec serments prononcés à voix haute. Le rite scelle la communauté et l'engagement.",
      },
      {
        title: 'Runes et seiðr',
        text: "Alphabet runique doté d'une valeur magique ; le seiðr, magie divinatoire et opérative associée à Freyja et à Odin, était surtout pratiqué par des femmes (völva).",
      },
      {
        title: 'Funérailles',
        text: "Tumulus, incinérations, tombes-navires (Oseberg, Sutton Hoo). Le mobilier funéraire suggère une continuité de statut dans l'au-delà.",
      },
    ],
    ethics: [
      {
        title: 'Honneur et parole donnée',
        text: "Le Hávamál, poème gnomique de l'Edda, conseille modération, hospitalité, prudence et amitié. Sa strophe la plus citée : « Les troupeaux meurent, les parents meurent, toi-même tu mourras ; je sais une chose qui ne meurt jamais : le renom de chaque mort. »",
      },
    ],
    history: [
      {
        title: 'Sources et biais',
        text: "Presque tout ce que nous savons du paganisme nordique a été écrit deux siècles après la christianisation, par des lettrés chrétiens islandais (Snorri Sturluson). Pour les Celtes, les sources sont romaines et hostiles, ou irlandaises et médiévales chrétiennes. Toute reconstruction est donc une lecture à travers un filtre.",
      },
      {
        title: 'Christianisation',
        text: "Progressive et souvent politique : conversion des rois (Islande vote sa conversion en l'an 1000 lors d'une assemblée, avec tolérance privée du paganisme), syncrétismes durables — les saints celtiques héritent d'attributs divins, Brigit déesse devient sainte Brigitte.",
      },
      {
        title: 'Récupérations modernes',
        text: "Romantisme national au XIXe s., instrumentalisation par le nazisme (runes, Ahnenerbe), puis reconstructions religieuses contemporaines : l'ásatrú est reconnu en Islande depuis 1973. Ces mouvances sont aujourd'hui traversées par un conflit ouvert entre courants inclusifs et courants racialistes.",
      },
    ],
    branches: [
      { name: 'Ásatrú / Forn Siðr', when: 'Depuis 1972', description: "Reconstructionnisme nordique, majoritairement universaliste et antiraciste en Islande et en Scandinavie." },
      { name: 'Druidisme moderne', when: 'XVIIIe s.', description: "Reconstruction celtique, largement inventée à l'époque romantique, aujourd'hui orientée nature et écologie." },
    ],
    keyTexts: ['edda-poetique', 'edda-prose', 'havamal', 'mabinogion'],
    keyFigures: ['odin-fig', 'snorri'],
    influencedBy: ['religion-indo-europeenne'],
    influenced: ['neopaganisme', 'fantasy-moderne'],
    misconceptions: [
      {
        claim: '« Le Valhalla accueille tous les Vikings. »',
        reality:
          "Selon Snorri, Odin ne reçoit que la moitié des morts au combat ; Freyja prend l'autre. La grande majorité des morts vont ailleurs (Hel), sans connotation de châtiment. La vision d'un « paradis des guerriers » généralisé est une simplification moderne.",
      },
      {
        claim: '« Les druides construisaient Stonehenge. »',
        reality: "Stonehenge est achevé vers 1600 av. J.-C., plus d'un millénaire avant l'apparition des Celtes en Bretagne.",
      },
    ],
    contribution:
      "Une mythologie de la finitude qui a durablement marqué l'imaginaire occidental (Wagner, Tolkien, la fantasy contemporaine) ; une éthique de l'honneur et de la parole ; et un cas d'école méthodologique sur la reconstruction de religions disparues à partir de sources hostiles ou tardives.",
    livingDebates: ["Néopaganisme inclusif contre folkisme raciste", "Fiabilité de Snorri comme source"],
  },

  // =========================================================================
  {
    id: 'gnosticisme',
    name: 'Gnosticismes',
    family: 'antique',
    founded: 'Ier-IIe s. apr. J.-C.',
    foundedYear: 100,
    origin: 'Égypte, Syrie, Mésopotamie',
    adherents: 'Éteints (sauf mandéisme) ; influence continue',
    symbol: '🜃',
    color: '#7b6ba8',
    tagline: 'Le monde est une prison, et tu as oublié qui tu es.',
    summary:
      "Ensemble de courants des premiers siècles qui partagent une intuition : le monde matériel est l'œuvre d'un démiurge inférieur ou mauvais, et l'humain porte en lui une étincelle divine exilée. Le salut vient de la gnose — une connaissance révélée de son origine véritable.",
    essence:
      "Tu n'es pas d'ici. Ce monde est raté, et son créateur — le dieu de la Genèse selon certains — est un usurpateur ignorant. Ce qui te sauve n'est ni la foi ni les œuvres mais un réveil : savoir d'où tu viens, où tu vas, et que ton origine est au-delà de ce cosmos.",
    centralQuestion: "Si le monde est si mauvais, qui l'a fait — et comment en sortir ?",
    coreBeliefs: [
      {
        title: 'Le démiurge',
        text: "Un dieu créateur inférieur (Ialdabaoth, Saklas, « l'insensé »), né d'une chute au sein du plérôme divin, façonne le monde matériel en s'imaginant être le seul dieu. Chez les gnostiques les plus radicaux, il est identifié au Dieu de l'Ancien Testament — d'où la violence de la réaction de l'Église.",
      },
      {
        title: 'L’étincelle et la gnose',
        text: "Un fragment divin est emprisonné dans certains humains (les pneumatiques). Un révélateur venu d'en haut — souvent le Christ, parfois Seth ou Sophia — apporte la connaissance qui réveille et permet la remontée à travers les sphères planétaires.",
      },
      {
        title: 'Dualisme et docétisme',
        text: "Esprit contre matière, lumière contre ténèbres. Le Christ n'a pu véritablement s'incarner ni souffrir : il n'a eu qu'une apparence de corps (docétisme). L'Église orthodoxe répondra en insistant lourdement sur la chair réelle et la mort réelle du Christ.",
      },
    ],
    practices: [
      {
        title: 'Initiation et sacrements',
        text: "Baptême, onction, « chambre nuptiale », rites de passage des sphères. Les valentiniens formaient un cercle initiatique au sein même des communautés chrétiennes ordinaires.",
      },
      {
        title: 'Ascèse ou licence',
        text: "Les sources orthodoxes accusent certains groupes de libertinage (puisque le corps est indifférent) ; les textes gnostiques retrouvés attestent surtout une ascèse rigoureuse. L'accusation était probablement en grande partie polémique.",
      },
    ],
    ethics: [
      {
        title: 'Une éthique du réveil',
        text: "La faute majeure n'est pas la désobéissance mais l'oubli et le sommeil. D'où une littérature de l'appel : « Réveille-toi, souviens-toi qui tu es. »",
      },
    ],
    history: [
      {
        title: 'Écoles et maîtres',
        text: "Valentin (le plus raffiné, qui faillit devenir évêque de Rome), Basilide, les séthiens, Marcion (qui n'est pas à proprement parler gnostique mais partage le rejet du Dieu créateur et constitue le premier canon chrétien connu, expurgé de tout ce qui est juif).",
      },
      {
        title: 'La bibliothèque de Nag Hammadi (1945)',
        text: "Treize codices coptes découverts en Haute-Égypte : Évangile de Thomas, Évangile de Philippe, Apocryphon de Jean, Évangile de Vérité. Pour la première fois, on lit les gnostiques dans leurs propres mots et non à travers leurs adversaires — révolution documentaire comparable à celle des manuscrits de la mer Morte.",
      },
      {
        title: 'Postérité',
        text: "Manichéisme, pauliciens, bogomiles, cathares partagent des structures voisines sans filiation directe démontrée. À l'époque moderne : Blake, Jung, la théosophie, Philip K. Dick, une partie de la science-fiction et du cinéma (Matrix).",
      },
    ],
    branches: [
      { name: 'Valentinisme', when: 'IIe s.', description: "Le plus élaboré : plérôme d'éons, chute de Sophia, trois classes d'humains." },
      { name: 'Séthianisme', when: 'IIe s.', description: "Seth comme ancêtre de la race spirituelle ; Apocryphon de Jean." },
      { name: 'Marcionisme', when: '144', description: "Rejet total de l'Ancien Testament et du Dieu créateur ; Église parallèle qui dura des siècles." },
    ],
    keyTexts: ['evangile-thomas', 'apocryphon-jean', 'evangile-verite', 'pistis-sophia'],
    keyFigures: ['valentin', 'marcion', 'simon-le-mage', 'irenee'],
    influencedBy: ['platonisme', 'judaisme', 'christianisme', 'zoroastrisme', 'religion-egyptienne'],
    influenced: ['manicheisme', 'mandeisme', 'catharisme', 'esoterisme-occidental', 'jungisme'],
    misconceptions: [
      {
        claim: '« Le gnosticisme était le christianisme originel, écrasé par l’Église. »',
        reality:
          "Les textes gnostiques sont en général plus tardifs (IIe-IVe s.) que les écrits du Nouveau Testament (Ier s.). L'Évangile de Thomas fait exception et pourrait conserver des logia anciens. Il y avait bien pluralité, mais pas antériorité gnostique.",
      },
    ],
    contribution:
      "La formulation la plus radicale du problème du mal ; une psychologie de l'aliénation et du réveil qui a fasciné Jung, la contre-culture et la science-fiction ; et, par contrecoup, le fait d'avoir contraint le christianisme à définir son canon, son credo et sa hiérarchie.",
    livingDebates: ["Le « gnosticisme » est-il une catégorie utile ou une construction des hérésiologues ?", "Datation et milieu de l'Évangile de Thomas"],
  },

  // =========================================================================
  {
    id: 'manicheisme',
    name: 'Manichéisme',
    family: 'iranienne',
    founded: '≈ 240 apr. J.-C.',
    foundedYear: 240,
    origin: 'Mésopotamie sassanide',
    adherents: 'Éteint (dernières traces en Chine, XVIIe s.)',
    symbol: '☯',
    color: '#8a7fb5',
    tagline: 'La première religion mondiale consciemment universelle.',
    summary:
      "Fondé par Mani, le manichéisme voulut être la synthèse achevée de toutes les révélations antérieures. Il s'étendit de l'Atlantique à la Chine et fut la principale religion universelle concurrente du christianisme et du bouddhisme avant d'être éradiqué partout.",
    essence:
      "Deux principes éternels et opposés, Lumière et Ténèbres, se sont mélangés par une agression des Ténèbres. Toute l'histoire cosmique est un processus de tri : libérer les particules de lumière prisonnières de la matière. Manger, digérer, prier et s'abstenir sont, littéralement, des opérations de séparation cosmique.",
    centralQuestion: "Comment libérer la lumière emprisonnée dans la matière ?",
    coreBeliefs: [
      {
        title: 'Dualisme absolu',
        text: "Contrairement au zoroastrisme où le mal sera vaincu, les deux principes manichéens sont co-éternels ; à la fin, ils seront simplement séparés à nouveau et définitivement.",
      },
      {
        title: 'Sceau des prophètes',
        text: "Mani se dit l'aboutissement d'une chaîne : Adam, Seth, Hénoch, Noé, Abraham, Zoroastre, Bouddha, Jésus, puis lui. Il écrit lui-même ses livres et les fait illustrer — pour éviter la corruption qu'ont subie, selon lui, les messages antérieurs. Modèle structurel qui préfigure celui de l'islam.",
      },
    ],
    practices: [
      {
        title: 'Élus et auditeurs',
        text: "Deux classes : les Élus, végétariens stricts, célibataires, sans travail manuel (qui blesserait la lumière dans les plantes), et les Auditeurs, qui les nourrissent et accumulent ainsi du mérite. Système économique et spirituel intégré, comparable à celui des ordres mendiants.",
      },
      {
        title: 'Les trois sceaux',
        text: "Sceau de la bouche (pureté de la parole et de la nourriture), de la main (ne pas nuire), du sein (continence).",
      },
    ],
    ethics: [
      {
        title: 'Non-violence cosmique',
        text: "Cueillir un fruit ou allumer un feu blesse la lumière : d'où une extrême délicatesse de conduite, proche du jaïnisme mais fondée sur une cosmologie différente.",
      },
    ],
    history: [
      {
        title: 'Mani (216-274/277)',
        text: "Élevé dans une communauté judéo-chrétienne baptiste (les elkasaïtes) en Babylonie, il reçoit des révélations de son « jumeau » céleste, prêche jusqu'en Inde, obtient d'abord la faveur du roi sassanide Shapour Ier, puis est mis à mort par Bahram Ier sous la pression du clergé zoroastrien.",
      },
      {
        title: 'Expansion et persécution',
        text: "De l'Afrique du Nord (Augustin fut manichéen auditeur pendant neuf ans) à la Chine, où le manichéisme devient religion d'État de l'empire ouïghour (762-840). Persécuté par Rome, par les Sassanides, par l'islam et par la Chine, il disparaît partout — cas rare d'extinction complète d'une religion mondiale.",
      },
    ],
    branches: [],
    keyTexts: ['kephalaia', 'psaumes-manicheens'],
    keyFigures: ['mani', 'augustin'],
    influencedBy: ['gnosticisme', 'zoroastrisme', 'christianisme', 'bouddhisme', 'judaisme'],
    influenced: ['christianisme', 'catharisme', 'bogomilisme', 'islam'],
    misconceptions: [
      {
        claim: '« Manichéen = qui voit tout en noir et blanc. »',
        reality:
          "L'usage courant du mot est un appauvrissement polémique. La doctrine réelle est une cosmologie mythologique complexe, et sa morale une éthique de la délicatesse extrême envers le vivant.",
      },
    ],
    contribution:
      "Le premier projet religieux explicitement universel et interculturel, avec un canon écrit et illustré par son fondateur pour résister à l'altération ; un aiguillon décisif dans la formation de la pensée d'Augustin, donc de tout l'Occident chrétien.",
    livingDebates: ["Reconstitution du corpus à partir des découvertes de Tourfan, de Medinet Madi et de Dakhleh"],
  },

  // =========================================================================
  {
    id: 'mandeisme',
    name: 'Mandéisme',
    family: 'iranienne',
    founded: 'Ier-IIIe s. apr. J.-C.',
    foundedYear: 100,
    origin: 'Jordanie/Palestine puis marais du sud de l’Irak',
    adherents: '≈ 60 000 - 100 000',
    symbol: '☖',
    color: '#5f9ea0',
    tagline: 'Le dernier gnosticisme vivant, et la religion de Jean-Baptiste.',
    summary:
      "Seule religion gnostique antique encore pratiquée. Les Mandéens vénèrent Jean-Baptiste comme leur prophète majeur, rejettent Abraham, Moïse et Jésus, et pratiquent des baptêmes répétés en eau vive.",
    essence:
      "Le monde matériel a été façonné par des puissances inférieures ; l'âme, venue du Monde de Lumière, doit y remonter après la mort à travers des postes de garde. L'eau courante (yardna) est le canal du Monde de Lumière : s'y immerger, souvent, purifie et relie.",
    centralQuestion: "Comment l'âme exilée remonte-t-elle au Monde de Lumière ?",
    coreBeliefs: [
      {
        title: 'Hayyi Rabbi',
        text: "La « Grande Vie », principe suprême. Le monde matériel est l'œuvre de Ptahil et dominé par Ruha ; l'âme y est étrangère.",
      },
      {
        title: 'Jean-Baptiste',
        text: "Yahya Yuhana est le grand prophète. Jésus est vu comme un faux prophète qui a détourné son baptême. C'est l'un des seuls témoignages religieux vivants d'un courant baptiste juif du Ier siècle.",
      },
    ],
    practices: [
      {
        title: 'Masbuta',
        text: "Baptême par immersion en rivière, répété chaque dimanche et à chaque occasion importante, célébré par un prêtre en habit blanc. Contrairement au baptême chrétien, il n'est pas unique mais itératif.",
      },
      {
        title: 'Masiqta',
        text: "Rituel complexe d'ascension de l'âme du défunt, mené sur plusieurs jours.",
      },
    ],
    ethics: [
      {
        title: 'Non-violence et famille',
        text: "Interdiction de la circoncision, de l'alcool fort, du jeûne ascétique ; mariage et procréation valorisés malgré le pessimisme cosmologique.",
      },
    ],
    history: [
      {
        title: 'Survie et exode',
        text: "Protégés comme « gens du Livre » sous l'islam, réfugiés dans les marais du Chatt-el-Arab. Après 2003, la guerre d'Irak, les persécutions et l'assèchement des marais ont provoqué la dispersion de plus de 80 % de la communauté vers la Suède, l'Australie et les États-Unis. Le mandéisme est aujourd'hui une religion en danger d'extinction — le sacerdoce ne se transmettant que par filiation.",
      },
    ],
    branches: [],
    keyTexts: ['ginza-rabba', 'draja-yahya'],
    keyFigures: ['jean-baptiste'],
    influencedBy: ['gnosticisme', 'judaisme', 'zoroastrisme'],
    influenced: [],
    misconceptions: [
      { claim: '« Les Mandéens sont des chrétiens de rite oriental. »', reality: "Ils rejettent explicitement Jésus et le christianisme, et n'ont jamais fait partie de l'Église." },
    ],
    contribution:
      "Un témoin unique et vivant des milieux baptistes juifs du Ier siècle, dans lesquels Jean-Baptiste et Jésus ont réellement évolué ; un corpus liturgique en araméen oriental d'une grande ancienneté.",
    livingDebates: ["Survie de la communauté et du sacerdoce héréditaire", "Reconnaissance comme minorité protégée"],
  },

  // =========================================================================
  {
    id: 'yezidisme',
    name: 'Yézidisme',
    family: 'iranienne',
    founded: 'XIIe s. (racines antérieures)',
    foundedYear: 1160,
    origin: 'Kurdistan (Lalesh, nord de l’Irak)',
    adherents: '≈ 700 000 - 1 million',
    symbol: '🦚',
    color: '#4a8fa0',
    tagline: 'L’ange-paon, injustement pris pour le diable.',
    summary:
      "Religion kurdophone monothéiste combinant des éléments iraniens anciens, soufis et gnostiques, transmise oralement. Ses fidèles ont subi des dizaines de massacres, dont le génocide perpétré par l'État islamique en 2014.",
    essence:
      "Dieu a créé le monde et l'a confié à sept anges, au premier rang desquels Tawusî Melek, l'ange-paon. Celui-ci refusa de se prosterner devant Adam — non par orgueil, mais par fidélité à l'ordre de n'adorer que Dieu. Il n'est donc pas un démon déchu mais l'intendant du monde et le pardonné par excellence.",
    centralQuestion: "Comment servir Dieu à travers ses anges, et purifier l'âme au fil des renaissances ?",
    coreBeliefs: [
      {
        title: 'Tawusî Melek',
        text: "L'ange-paon, chef des sept anges. Le récit de son refus de se prosterner recoupe celui d'Iblis dans le Coran — d'où l'accusation persistante et meurtrière d'« adorateurs du diable », que les Yézidis rejettent absolument. Le nom du Malin ne doit jamais être prononcé.",
      },
      {
        title: 'Réincarnation',
        text: "L'âme se purifie par des vies successives (« changer de chemise »). Croyance d'origine probablement iranienne ancienne.",
      },
    ],
    practices: [
      {
        title: 'Lalesh',
        text: "Sanctuaire et tombeau de Cheikh Adî, lieu de pèlerinage annuel. On y entre pieds nus, et l'on prend soin de ne pas marcher sur les seuils.",
      },
      {
        title: 'Castes et endogamie',
        text: "Trois castes héréditaires (cheikhs, pîrs, mirîds) strictement endogames. Aucune conversion n'est possible : on naît yézidi ou on ne l'est pas — clôture qui a permis la survie mais fragilise la démographie.",
      },
    ],
    ethics: [
      {
        title: 'Pureté et interdits',
        text: "Interdits alimentaires (laitue), vestimentaires (bleu), sociaux (mariages hors caste). Le système d'interdits fonctionne comme un marqueur identitaire d'une minorité en danger.",
      },
    ],
    history: [
      {
        title: 'Cheikh Adî et formation',
        text: "Adî ibn Musafir (mort en 1162), soufi d'origine libanaise installé au Kurdistan, cristallise autour de lui une tradition locale préexistante. La religion se constitue ensuite en communauté fermée.",
      },
      {
        title: 'Massacres et génocide',
        text: "La tradition compte 72 « firman » (persécutions) au cours de l'histoire. En août 2014, l'État islamique attaque le Sinjar : des milliers d'hommes exécutés, des milliers de femmes réduites en esclavage sexuel. L'ONU a qualifié ces faits de génocide. Nadia Murad, survivante, reçoit le prix Nobel de la paix en 2018.",
      },
    ],
    branches: [],
    keyTexts: ['livre-revelation', 'livre-noir'],
    keyFigures: ['cheikh-adi', 'nadia-murad'],
    influencedBy: ['zoroastrisme', 'islam', 'soufisme', 'gnosticisme', 'christianisme'],
    influenced: [],
    misconceptions: [
      {
        claim: '« Les Yézidis adorent le diable. »',
        reality:
          "Calomnie ancienne, née d'une lecture islamique de leur mythologie angélique, et qui a servi de justification à des siècles de massacres, jusqu'au génocide de 2014. Le yézidisme est monothéiste.",
      },
    ],
    contribution:
      "Un témoignage vivant de strates religieuses iraniennes préislamiques ; et un cas contemporain majeur pour comprendre comment une théologie mal comprise devient un prétexte génocidaire.",
    livingDebates: ["Réintégration des femmes survivantes et de leurs enfants", "Conversion et survie démographique", "Reconnaissance internationale du génocide"],
  },

  // =========================================================================
  {
    id: 'religions-africaines',
    name: 'Religions traditionnelles africaines',
    family: 'indigene',
    founded: 'Immémorial',
    foundedYear: -3000,
    origin: 'Afrique subsaharienne',
    adherents: '≈ 100 millions en Afrique ; diasporas afro-américaines très nombreuses',
    symbol: '🪘',
    color: '#b5743c',
    tagline: 'Les ancêtres ne sont pas morts : ils participent.',
    summary:
      "Sous ce pluriel se rangent des centaines de systèmes distincts (yoruba, akan, dogon, bantou, zoulou, san…). Des traits récurrents s'en dégagent : un Dieu créateur lointain, des divinités et esprits intermédiaires actifs, des ancêtres présents, et une religion inséparable de la vie sociale.",
    essence:
      "Le monde visible et le monde invisible ne sont pas séparés. La force vitale circule entre Dieu, les divinités, les ancêtres, les vivants, les animaux et la terre ; la maladie, la stérilité et le malheur signalent un déséquilibre relationnel qu'il faut diagnostiquer et réparer. La religion n'est pas un domaine de l'existence : c'est sa trame.",
    centralQuestion: "Comment maintenir l'équilibre des forces vitales entre les vivants, les ancêtres et les puissances ?",
    coreBeliefs: [
      {
        title: 'Dieu suprême et intermédiaires',
        text: "Olodumare (yoruba), Nyame (akan), Mulungu, Nzambi, Amma (dogon) : un créateur reconnu partout mais rarement culté directement. L'attention rituelle va aux divinités (orisha, vodun, abosom) et aux ancêtres, plus proches et plus impliqués.",
      },
      {
        title: 'Les ancêtres',
        text: "Les morts correctement enterrés et honorés restent membres actifs de la communauté, protecteurs et exigeants. La descendance est une nécessité religieuse : elle assure la continuité du culte. Mourir sans enfants est une catastrophe spirituelle.",
      },
      {
        title: 'Force vitale et destin',
        text: "Une énergie circule et peut être augmentée ou diminuée. Chez les Yoruba, chaque personne choisit avant sa naissance son ori (destin/tête intérieure) — et le rôle du devin est de l'aider à s'en souvenir et à s'y ajuster.",
      },
      {
        title: 'Divination',
        text: "L'Ifa yoruba est un système d'une complexité remarquable : 256 configurations (odu), chacune associée à un corpus de récits mémorisés par le babalawo au terme de dix à quinze ans de formation. Inscrit au patrimoine immatériel de l'UNESCO.",
      },
    ],
    practices: [
      {
        title: 'Sacrifice et libation',
        text: "Offrandes de nourriture, de boisson, d'animaux, versées à la terre pour les ancêtres. Le partage du repas sacrificiel réunit vivants, morts et divinités.",
      },
      {
        title: 'Possession rituelle',
        text: "La divinité « monte » son fidèle, qui devient temporairement son cheval. Danse, tambours et chants induisent l'état ; la communauté reconnaît la divinité à ses gestes et à ses attributs. Cette technique est au cœur des cultes afro-américains.",
      },
      {
        title: 'Initiations et masques',
        text: "Sociétés initiatiques (Poro et Sande, Bwiti, Egungun), rites de passage, masques par lesquels les esprits et les ancêtres se rendent présents. Le masque n'est pas un déguisement : porté, il est l'ancêtre.",
      },
    ],
    ethics: [
      {
        title: 'Ubuntu',
        text: "« Je suis parce que nous sommes. » La personne se constitue par la relation. Cette notion bantoue a été mobilisée par Desmond Tutu dans la Commission Vérité et Réconciliation sud-africaine comme fondement d'une justice restauratrice plutôt que punitive.",
      },
      {
        title: 'Iwa pele',
        text: "Chez les Yoruba, le « bon caractère » — patience, hospitalité, respect des aînés, honnêteté — est la vertu suprême, plus importante que l'exactitude rituelle.",
      },
    ],
    history: [
      {
        title: 'Transmission et traite',
        text: "Traditions essentiellement orales, portées par les griots, les devins et les initiés. La traite atlantique déporte, avec douze millions de personnes, leurs religions : elles survivent en se recomposant sous le masque des saints catholiques.",
      },
      {
        title: 'Religions afro-américaines',
        text: "Candomblé et umbanda (Brésil), santería/Lucumí (Cuba), vodou (Haïti), Winti (Suriname), obeah (Caraïbes anglophones). Le vodou haïtien a été un ressort de la seule révolution d'esclaves victorieuse de l'histoire (1791-1804).",
      },
      {
        title: 'Aujourd’hui',
        text: "Coexistence avec le christianisme et l'islam, souvent en pratique combinée. Renaissance identitaire de l'Ifa au Nigeria, dans la diaspora afro-américaine et au Brésil ; luttes contre la diffamation médiatique du vodou.",
      },
    ],
    branches: [
      { name: 'Religion yoruba / Ifa', when: 'Ancienne', description: "Olodumare, orisha (Shango, Yemoja, Oshun, Ogun), divination Ifa. Base des cultes afro-américains." },
      { name: 'Vodun / Vodou', when: 'Ancienne, recomposée aux XVIIe-XIXe s.', description: "Bénin, Togo, puis Haïti et Louisiane. Loas, Rada et Petro, syncrétisme catholique." },
      { name: 'Candomblé et santería', when: 'XIXe s.', description: "Brésil et Cuba. Orixás/orichas identifiés aux saints, initiation longue, batucada rituelle." },
    ],
    keyTexts: ['corpus-ifa', 'traditions-orales-africaines'],
    keyFigures: ['orunmila', 'shango', 'desmond-tutu'],
    influencedBy: [],
    influenced: ['christianisme-africain', 'vodou', 'candomble', 'santeria', 'rastafari', 'blues-gospel'],
    misconceptions: [
      {
        claim: '« C’est de l’animisme primitif. »',
        reality:
          "« Animisme » est une catégorie évolutionniste du XIXe siècle (Tylor) qui classait ces religions au bas d'une échelle imaginaire. Les systèmes concernés comportent des théologies élaborées, une éthique articulée et des corpus mémorisés considérables — le corpus Ifa représente des dizaines de milliers de vers.",
      },
      {
        claim: '« Le vodou, c’est la magie noire et les poupées. »',
        reality:
          "Image forgée par la propagande esclavagiste puis par le cinéma hollywoodien. Le vodou est une religion structurée, avec un clergé, une liturgie, une éthique et une fonction de guérison et de cohésion communautaire.",
      },
    ],
    contribution:
      "Ubuntu et la justice restauratrice ; des systèmes divinatoires d'une sophistication combinatoire remarquable ; une conception relationnelle de la personne ; et, par la diaspora, une part décisive de la musique mondiale — les rythmes rituels sont à la racine du blues, du jazz, de la samba, de la rumba et de leurs descendants.",
    livingDebates: [
      "Reconnaissance légale face au christianisme et à l'islam",
      "Sacrifice animal et législations contemporaines",
      "Restitution des objets rituels détenus par les musées occidentaux",
      "Accusations de sorcellerie et violences, notamment envers les enfants et les personnes âgées",
    ],
  },

  // =========================================================================
  {
    id: 'religions-amerindiennes',
    name: 'Religions amérindiennes et autochtones',
    family: 'indigene',
    founded: 'Immémorial',
    foundedYear: -12000,
    origin: 'Amériques, Australie, Arctique, Sibérie, Océanie',
    adherents: 'Plusieurs dizaines de millions',
    symbol: '🪶',
    color: '#7d9b6a',
    tagline: 'La terre n’est pas une ressource : c’est une parentèle.',
    summary:
      "Des milliers de traditions distinctes, sans texte ni clergé centralisé, partageant souvent : une continuité entre humains, animaux, plantes et lieux ; une transmission orale et rituelle ; et un rapport au territoire qui n'est pas propriétaire mais généalogique.",
    essence:
      "Les autres qu'humains — l'ours, la rivière, la montagne, le maïs — sont des personnes avec lesquelles on entretient des relations de parenté, d'obligation et de réciprocité. Prendre sans rendre est la faute fondamentale. Le savoir se transmet par le récit, le rite et le lieu, non par le livre.",
    centralQuestion: "Comment vivre en relation juste avec un monde entièrement peuplé de personnes non humaines ?",
    coreBeliefs: [
      {
        title: 'Réciprocité et don',
        text: "Toute prise appelle une contrepartie : tabac offert avant la cueillette, prière au gibier, première part rendue à la terre. L'économie du don s'étend au non-humain.",
      },
      {
        title: 'Le Temps du Rêve',
        text: "Chez les Aborigènes d'Australie, le Dreaming n'est pas un passé mais une strate toujours actuelle où les ancêtres ont chanté le monde en existence. Les « pistes chantées » (songlines) sont à la fois des cartes, des récits, des partitions et des titres de responsabilité territoriale.",
      },
      {
        title: 'Chamanisme',
        text: "Le chaman voyage entre les mondes pour retrouver une âme perdue, négocier avec les maîtres du gibier, diagnostiquer. Techniques : transe, tambour, jeûne, plantes (ayahuasca, peyotl). Le mot vient de l'évenk de Sibérie ; son extension à toute la planète est une généralisation savante, à manier avec précaution.",
      },
      {
        title: 'Cosmovisions mésoaméricaines et andines',
        text: "Chez les Mayas et les Aztèques : calendriers imbriqués, cycles cosmiques, sacrifice nourrissant le soleil, dualité créatrice. Dans les Andes : ayni (réciprocité), Pachamama (terre-mère), huacas (lieux et objets chargés), culte des ancêtres momifiés.",
      },
    ],
    practices: [
      {
        title: 'Cérémonies collectives',
        text: "Danse du Soleil des Plaines, potlatch de la côte nord-ouest (redistribution ostentatoire des richesses, interdit par le Canada de 1885 à 1951), hutte à sudation, quête de vision, corroboree australien.",
      },
      {
        title: 'Plantes et guérison',
        text: "Ayahuasca amazonienne, peyotl (Native American Church, protégé aux États-Unis depuis 1978 puis 1994), tabac sacré, San Pedro andin. Usage rituel encadré, très éloigné de la consommation récréative.",
      },
    ],
    ethics: [
      {
        title: 'Sept générations',
        text: "La Grande Loi de la paix haudenosaunee (iroquoise) demande d'évaluer chaque décision à l'aune de son effet sur la septième génération à venir. Ce principe a directement inspiré la pensée écologique contemporaine.",
      },
      {
        title: 'Responsabilité territoriale',
        text: "Le territoire n'est pas possédé mais confié : on en a la charge, on lui doit des rites. C'est la base juridique des revendications autochtones actuelles.",
      },
    ],
    history: [
      {
        title: 'Destruction coloniale',
        text: "Évangélisation forcée, interdiction des cérémonies (Ghost Dance réprimée à Wounded Knee en 1890, potlatch interdit, Sun Dance prohibée aux États-Unis de 1883 à 1978), pensionnats autochtones au Canada, en Australie et aux États-Unis qui arrachaient les enfants à leur langue et à leur rite. Le American Indian Religious Freedom Act ne date que de 1978.",
      },
      {
        title: 'Résurgences',
        text: "Renaissance des langues et des cérémonies, reconnaissance juridique de la personnalité de fleuves (Whanganui en Nouvelle-Zélande, 2017), mobilisations autour de sites sacrés (Standing Rock, 2016), rapatriement des restes humains et des objets rituels (NAGPRA, 1990).",
      },
    ],
    branches: [
      { name: 'Native American Church', when: '1918', description: "Syncrétisme peyotl et christianisme, présent dans de nombreuses nations d'Amérique du Nord." },
      { name: 'Traditions andines et mésoaméricaines', when: 'Continues', description: "Souvent entrelacées avec le catholicisme populaire (fête des morts mexicaine, pèlerinage du Qoyllur Rit'i)." },
      { name: 'Traditions aborigènes australiennes', when: 'Plus de 50 000 ans', description: "Sans doute la continuité religieuse la plus longue attestée sur terre." },
    ],
    keyTexts: ['popol-vuh', 'traditions-orales-autochtones'],
    keyFigures: ['quetzalcoatl', 'black-elk', 'deganawidah'],
    influencedBy: [],
    influenced: ['ecologie-profonde', 'neochamanisme', 'droit-nature'],
    misconceptions: [
      {
        claim: '« Les peuples autochtones sont naturellement écologistes. »',
        reality:
          "Idéalisation qui efface leur diversité et leurs transformations réelles de l'environnement (brûlis, extinctions de mégafaune). Ce qui est documenté, ce sont des institutions religieuses de régulation des prélèvements — ce qui est plus intéressant, et plus transposable, qu'une supposée harmonie innée.",
      },
      {
        claim: '« Le chamanisme est une religion mondiale unique. »',
        reality:
          "C'est une catégorie comparative construite par les anthropologues. Les pratiques concernées diffèrent profondément d'une aire à l'autre.",
      },
    ],
    contribution:
      "Une pensée de la réciprocité avec le vivant qui irrigue aujourd'hui le droit de l'environnement et l'éthique écologique ; des systèmes de mémoire orale d'une capacité stupéfiante ; la démonstration que le sacré peut être territorial plutôt que textuel.",
    livingDebates: [
      "Appropriation culturelle et « plastic shamans »",
      "Retour des restes humains et objets rituels",
      "Protection juridique des sites sacrés face à l'extraction minière",
      "Usage thérapeutique et commercial des plantes rituelles",
    ],
  },

  // =========================================================================
  {
    id: 'rastafari',
    name: 'Rastafari',
    family: 'moderne',
    founded: '1930',
    foundedYear: 1930,
    origin: 'Jamaïque',
    adherents: '≈ 1 million',
    symbol: '🦁',
    color: '#2f9e44',
    tagline: 'Babylone est un système ; Sion, un retour.',
    summary:
      "Mouvement né dans la Jamaïque coloniale autour du couronnement de Haïlé Sélassié Ier en Éthiopie, lu comme l'accomplissement d'une prophétie. Le rastafari mêle lecture afrocentrée de la Bible, critique radicale de l'ordre colonial et affirmation de la dignité noire.",
    essence:
      "Le Dieu de la Bible n'est pas blanc, et le peuple noir déporté est l'Israël exilé. « Babylone » désigne le système d'oppression — colonial, capitaliste, policier, mental. La libération commence par se déprendre de ses catégories : dans le langage, l'alimentation, l'apparence et la musique.",
    centralQuestion: "Comment se libérer, intérieurement et collectivement, d'un système d'oppression global ?",
    coreBeliefs: [
      {
        title: 'Jah et Haïlé Sélassié',
        text: "Jah (de Yahvé) est Dieu. Le ras Tafari Makonnen, couronné empereur d'Éthiopie sous le nom de Haïlé Sélassié Ier en 1930, est tenu par beaucoup pour une manifestation divine ou pour le Christ revenu — 225e successeur revendiqué de Salomon et de la reine de Saba. L'intéressé, chrétien orthodoxe, ne l'a jamais confirmé.",
      },
      {
        title: 'Babylone et Sion',
        text: "Babylone : l'ordre oppresseur, de la traite au capitalisme mondialisé. Sion : l'Éthiopie, l'Afrique, mais aussi un état intérieur de liberté. Le rapatriement, physique ou spirituel, est un thème central.",
      },
      {
        title: 'I and I',
        text: "Le langage rasta (« Iyaric ») remplace « me » par « I and I » pour signifier que Dieu habite chaque personne et que nul n'est un objet. Réforme lexicale délibérée : changer la langue pour changer la conscience.",
      },
    ],
    practices: [
      {
        title: 'Ital',
        text: "Alimentation vivante et pure : végétarienne ou végétalienne, sans sel raffiné, sans alcool ni conserves. Dérivé des règles bibliques et d'une éthique du naturel.",
      },
      {
        title: 'Dreadlocks',
        text: "Cheveux non coupés, référence au vœu de naziréat (Nombres 6). Signe visible de rupture avec les normes coloniales de respectabilité.",
      },
      {
        title: 'Reasoning et nyabinghi',
        text: "Cercles de discussion spirituelle, souvent accompagnés de ganja, comprise comme sacrement d'ouverture de la conscience ; assemblées de tambours nyabinghi dont dérive directement le rythme du reggae.",
      },
    ],
    ethics: [
      {
        title: 'Dignité et anticolonialisme',
        text: "Héritage direct de Marcus Garvey et de son mouvement de retour à l'Afrique. Le rastafari a été, dans les Caraïbes puis mondialement, un vecteur majeur de conscience anticoloniale.",
      },
      {
        title: 'Points de tension',
        text: "Le mouvement a longtemps porté des positions patriarcales et homophobes marquées ; des courants internes les contestent aujourd'hui.",
      },
    ],
    history: [
      {
        title: 'Naissance et diffusion',
        text: "Prédicateurs jamaïcains (Leonard Howell, dont la communauté de Pinnacle est détruite par la police) à partir de 1930. Longue répression coloniale. Dans les années 1970, Bob Marley porte le message sur tous les continents : rare cas où une religion se diffuse d'abord par la musique populaire.",
      },
    ],
    branches: [
      { name: 'Nyabinghi', when: 'Années 1930', description: "La plus ancienne et la plus traditionnelle des « mansions »." },
      { name: 'Douze Tribus d’Israël', when: '1968', description: "La plus internationale ; celle de Bob Marley. Christologie plus classique." },
      { name: 'Bobo Shanti', when: 'Années 1950', description: "Communautaire, ascétique, turbans et robes, forte structuration." },
    ],
    keyTexts: ['bible-kebra-nagast', 'holy-piby'],
    keyFigures: ['haile-selassie', 'marcus-garvey', 'bob-marley'],
    influencedBy: ['christianisme', 'judaisme', 'religions-africaines', 'garveyisme'],
    influenced: ['reggae', 'panafricanisme'],
    misconceptions: [
      {
        claim: '« Le rastafari, c’est fumer de la ganja et écouter du reggae. »',
        reality:
          "C'est une théologie afrocentrée avec une exégèse biblique propre, une éthique alimentaire stricte, une critique politique structurée et des institutions communautaires. La ganja y est un sacrement encadré, et tous les rastas n'en consomment pas.",
      },
    ],
    contribution:
      "Une théologie de la libération noire élaborée hors des institutions ; la démonstration qu'un mouvement religieux peut se mondialiser par la culture populaire ; une critique du langage comme lieu de domination.",
    livingDebates: ["Divinité de Haïlé Sélassié après sa mort en 1975", "Place des femmes et positions sur l'homosexualité", "Commercialisation mondiale des symboles rasta"],
  },

  // =========================================================================
  {
    id: 'neopaganisme',
    name: 'Néopaganismes',
    altNames: ['Wicca', 'reconstructionnismes', 'New Age'],
    family: 'moderne',
    founded: 'À partir de 1954',
    foundedYear: 1954,
    origin: 'Royaume-Uni, puis monde occidental',
    adherents: '≈ 2-3 millions',
    symbol: '🌙',
    color: '#9b6fb0',
    tagline: 'Réenchanter le monde, avec des dieux anciens et des rites neufs.',
    summary:
      "Famille de mouvements apparus au XXe siècle qui réinventent ou reconstruisent des religiosités préchrétiennes. Ils vont de la Wicca — largement composée dans les années 1940-1950 par Gerald Gardner — aux reconstructionnismes qui s'appuient sur la recherche historique.",
    essence:
      "Le divin est immanent, souvent polarisé en Déesse et Dieu, et le corps, la sexualité et la nature ne sont pas des obstacles mais des lieux du sacré. Le cycle des saisons remplace l'histoire du salut ; l'expérience personnelle prime sur l'autorité.",
    centralQuestion: "Peut-on retrouver un rapport sacré au corps, au cycle naturel et au féminin dans une culture qui les a dévalués ?",
    coreBeliefs: [
      { title: 'Immanence', text: "Le sacré est dans le monde, pas au-dessus. La Terre est souvent divinisée (Gaïa)." },
      { title: 'La Déesse', text: "Réintroduction d'un féminin divin — Triple Déesse (jeune fille, mère, vieille femme) —, en réponse explicite à un imaginaire religieux jugé exclusivement masculin." },
      { title: 'Roue de l’année', text: "Huit sabbats (solstices, équinoxes, fêtes intermédiaires : Samhain, Imbolc, Beltane, Lughnasadh) qui rythment un temps circulaire." },
    ],
    practices: [
      { title: 'Rituel en cercle', text: "Tracé d'un cercle, appel des quatre directions, travail énergétique, coupe et athamé. Souvent en petits groupes (covens) ou en solitaire." },
      { title: 'Magie', text: "Comprise comme un art de la volonté et de la conscience plus que comme une causalité physique. Chez beaucoup, un travail psychologique et symbolique assumé." },
    ],
    ethics: [
      { title: 'Le Rede wiccan', text: "« Fais ce que tu veux, tant que tu ne nuis à personne. » Éthique minimale et non prescriptive, complétée chez certains par la « loi du triple retour »." },
      { title: 'Écoféminisme', text: "Lien explicite entre domination de la nature et domination des femmes ; le néopaganisme a été un laboratoire de la spiritualité féministe (Starhawk)." },
    ],
    history: [
      {
        title: 'Invention et diffusion',
        text: "Gerald Gardner publie en 1954, après l'abrogation des lois anglaises sur la sorcellerie en 1951. Sa thèse d'une survivance ininterrompue d'un culte préchrétien (empruntée à Margaret Murray) est aujourd'hui réfutée par les historiens — ce que la plupart des praticiens assument désormais : la tradition est nouvelle, ce qui ne la rend pas illégitime.",
      },
      {
        title: 'Diversification',
        text: "Wicca gardnérienne et alexandrine, sorcellerie féministe (Dianic), reconstructionnismes (ásatrú, hellénisme, kémétisme, rodnoverie slave), druidisme, chaos magic, spiritualités New Age. Reconnaissance légale progressive (armée américaine, Islande, Royaume-Uni).",
      },
    ],
    branches: [
      { name: 'Wicca', when: '1954', description: "La plus connue : initiatique à l'origine, largement pratiquée en solitaire aujourd'hui." },
      { name: 'Reconstructionnismes', when: 'Années 1970-', description: "Ásatrú, hellénisme, kémétisme, rodnoverie : appui revendiqué sur les sources historiques." },
      { name: 'New Age', when: 'Années 1970-', description: "Nébuleuse plutôt qu'une religion : channeling, cristaux, réincarnation, développement personnel, syncrétisme oriental." },
    ],
    keyTexts: ['book-of-shadows', 'spiral-dance'],
    keyFigures: ['gardner', 'starhawk', 'aleister-crowley'],
    influencedBy: ['religion-nordique', 'religion-grecque', 'religion-celtique', 'esoterisme-occidental', 'hindouisme'],
    influenced: ['ecofeminisme', 'culture-populaire'],
    misconceptions: [
      {
        claim: '« La Wicca est la survivance de l’ancienne religion des sorcières. »',
        reality:
          "Thèse de Margaret Murray, historiquement réfutée. Les procès en sorcellerie des XVIe-XVIIe siècles n'ont pas visé une religion organisée mais, très majoritairement, des femmes accusées sur la base de conflits de voisinage et de démonologie savante.",
      },
      { claim: '« Les néopaïens adorent le diable. »', reality: "Satan est une figure chrétienne ; elle n'existe pas dans les panthéons préchrétiens ni dans la théologie wiccane." },
    ],
    contribution:
      "Une religiosité qui articule féminisme, écologie et rapport positif au corps ; un laboratoire de création rituelle contemporaine assumée comme telle ; et une question théorique intéressante : une tradition inventée récemment peut-elle être authentiquement religieuse ?",
    livingDebates: ["Authenticité historique contre créativité rituelle", "Appropriation de traditions autochtones", "Dérive identitaire de certains reconstructionnismes"],
  },

  // =========================================================================
  {
    id: 'humanisme-seculier',
    name: 'Humanismes séculiers et athéismes',
    family: 'moderne',
    founded: 'Racines antiques ; formes modernes à partir du XVIIIe s.',
    foundedYear: 1750,
    origin: 'Europe, puis mondial',
    adherents: '≈ 1,2 milliard de personnes sans affiliation religieuse',
    symbol: '⚛',
    color: '#5c7c8a',
    tagline: 'Chercher le sens sans révélation — et assumer qu’il faut le construire.',
    summary:
      "Ce n'est pas une religion, mais toute cartographie du religieux serait incomplète sans elle : la sortie de religion est aujourd'hui l'une des trajectoires majeures de l'humanité. Les « sans religion » forment le troisième groupe mondial après les chrétiens et les musulmans.",
    essence:
      "Aucune autorité surnaturelle ne fonde le sens ni la morale ; ce sont donc des tâches humaines. Cela ne supprime ni les questions religieuses — la mort, le mal, le sens, la communauté, le rite — ni le besoin d'y répondre : cela déplace le lieu où on les traite.",
    centralQuestion: "Que devient la question du sens, de la morale et du rituel quand la réponse religieuse cesse d'être disponible ?",
    coreBeliefs: [
      {
        title: 'Naturalisme',
        text: "Le monde s'explique sans recours au surnaturel. Position méthodologique pour la science, métaphysique pour l'athéisme philosophique — distinction souvent brouillée dans les débats publics.",
      },
      {
        title: 'Morale autonome',
        text: "L'éthique se fonde sur la raison, l'empathie, le contrat social ou le conséquentialisme. L'argument classique remonte au dilemme d'Euthyphron chez Platon : le bien est-il bien parce que Dieu le veut, ou Dieu le veut-il parce qu'il est bien ?",
      },
      {
        title: 'Agnosticisme',
        text: "Position distincte de l'athéisme : le terme est forgé par Huxley en 1869 pour dire que la question est indécidable, non que la réponse est négative.",
      },
      {
        title: 'Le sécularisme comme dispositif',
        text: "La laïcité n'est pas une doctrine sur Dieu mais une organisation du pouvoir : séparation des institutions, neutralité de l'État, liberté de conscience. Ses formes varient fortement — laïcité française, séparation américaine, sécularisme indien qui reconnaît toutes les religions plutôt que de s'en abstraire.",
      },
    ],
    practices: [
      {
        title: 'Rites séculiers',
        text: "Cérémonies humanistes de naissance, de mariage et de funérailles, célébrantes formées, aumôneries humanistes. Reconnaissance officielle en Écosse, en Norvège, en Belgique. Preuve empirique que le besoin rituel ne disparaît pas avec la croyance.",
      },
      {
        title: 'Méditation laïcisée',
        text: "Pleine conscience, stoïcisme pratique, communautés de méditation non confessionnelles. Reprise assumée de technologies spirituelles anciennes hors de leur cadre doctrinal.",
      },
    ],
    ethics: [
      {
        title: 'Droits humains',
        text: "La Déclaration universelle de 1948 est délibérément formulée sans fondement religieux, pour être signable par tous — l'un des grands textes normatifs mondiaux non révélés.",
      },
      {
        title: 'Critiques du religieux',
        text: "Feuerbach (Dieu comme projection de l'humain), Marx (opium du peuple, mais aussi « soupir de la créature accablée »), Nietzsche (la mort de Dieu comme événement dont on n'a pas mesuré la portée), Freud (illusion et figure paternelle), Durkheim (la religion comme société se rendant culte à elle-même).",
      },
    ],
    history: [
      {
        title: 'Antécédents anciens',
        text: "Cette position n'est pas une nouveauté occidentale : le Charvaka/Lokayata indien (VIe s. av. J.-C.) est matérialiste et nie l'au-delà ; l'épicurisme grec écarte la providence ; le confucianisme se tient à distance des esprits ; Xunzi explique le rituel sans surnature.",
      },
      {
        title: 'Modernité',
        text: "Lumières, Révolution française, critique historique de la Bible au XIXe siècle, darwinisme, athéismes d'État du XXe siècle (avec des persécutions religieuses massives dont l'ampleur doit être rappelée), « nouvel athéisme » des années 2000.",
      },
      {
        title: 'Sécularisation : un phénomène inégal',
        text: "La thèse d'un déclin universel de la religion est démentie par les faits : l'Europe se sécularise, mais la population religieuse mondiale croît en valeur absolue et le christianisme comme l'islam progressent en Afrique et en Asie. La sécularisation est une trajectoire régionale, pas une loi de l'histoire.",
      },
    ],
    branches: [
      { name: 'Humanisme séculier', when: '1933, 1973, 2003 (manifestes)', description: "Éthique et sens sans surnaturel, organisé en fédérations (Humanists International)." },
      { name: 'Athéismes philosophiques', when: 'XVIIIe-XXIe s.', description: "Matérialisme, existentialisme athée, naturalisme scientifique." },
      { name: '« Spirituels sans religion »', when: 'Fin XXe s.', description: "Catégorie sociologique en forte croissance : rejet des institutions, maintien d'une quête de transcendance." },
    ],
    keyTexts: ['manifeste-humaniste', 'traite-des-trois-imposteurs'],
    keyFigures: ['epicure', 'spinoza', 'hume', 'feuerbach', 'nietzsche', 'durkheim', 'freud'],
    influencedBy: ['religion-grecque', 'christianisme', 'bouddhisme', 'confucianisme'],
    influenced: ['droits-humains', 'bioethique'],
    misconceptions: [
      {
        claim: '« Sans religion, pas de morale. »',
        reality:
          "Les sociétés les plus sécularisées (Scandinavie, Japon) affichent des taux de criminalité parmi les plus bas au monde. La corrélation, si elle existe, ne va pas dans le sens supposé. L'argument philosophique bute par ailleurs sur le dilemme d'Euthyphron.",
      },
      {
        claim: '« Athéisme = neutralité, religion = croyance. »',
        reality:
          "L'athéisme est une position substantielle sur une question métaphysique, avec ses propres présupposés. L'agnosticisme et l'indifférence religieuse en sont distincts, et bien plus répandus.",
      },
      {
        claim: '« La science a réfuté la religion. »',
        reality:
          "La science est méthodologiquement muette sur les questions de sens et de valeur. De nombreux scientifiques sont croyants, d'autres non ; le conflit historique documenté (Galilée, Darwin) porte sur des empiètements précis, non sur une incompatibilité globale — modèle du « conflit permanent » aujourd'hui écarté par la plupart des historiens des sciences.",
      },
    ],
    contribution:
      "La liberté de conscience et la séparation des pouvoirs religieux et politiques ; la critique historique des textes sacrés, qui a paradoxalement enrichi la théologie ; les droits humains formulés sans fondement confessionnel ; et un miroir précieux pour les traditions religieuses, en les obligeant à formuler ce qu'elles tiennent pour essentiel.",
    livingDebates: [
      "Fondement de la morale sans transcendance",
      "Laïcité : neutralité de l'État ou effacement du religieux dans l'espace public ?",
      "Retour du religieux ou recomposition ?",
      "Rites et communautés séculières : peut-on remplacer ce que la religion offrait socialement ?",
    ],
  },
];
