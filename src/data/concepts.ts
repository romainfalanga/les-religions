import type { Concept } from './types';

/** Glossaire raisonné : les notions dont dépend la compréhension, avec leurs équivalents croisés. */
export const concepts: Concept[] = [
  {
    id: 'karma',
    term: 'Karma',
    original: 'कर्म (sanskrit : « action »)',
    traditions: ['hindouisme', 'bouddhisme', 'jainisme', 'sikhisme'],
    definition: "Loi causale selon laquelle toute action produit un effet conditionnant les existences futures.",
    elaboration:
      "Ce n'est ni une punition ni une décision divine : c'est une régularité, comparable à une physique morale. Les traditions divergent profondément sur son mécanisme. Pour le bouddhisme, ce qui compte est l'intention (cetana), non l'acte extérieur. Pour le jaïnisme, le karma est une substance subtile qui adhère physiquement à l'âme et l'alourdit. Pour les écoles de bhakti, la grâce divine peut suspendre cette mécanique. Ambedkar a violemment rejeté l'usage du karma pour justifier la condition des intouchables : expliquer la misère d'autrui par ses vies antérieures est une opération politique autant que métaphysique.",
    parallels: [
      { tradition: 'judaisme', term: 'Mesure pour mesure (midda ke-neged midda)', note: "Le Talmud décrit une correspondance entre l'acte et sa conséquence, mais dans une seule vie et sous providence divine." },
      { tradition: 'christianisme', term: 'On récolte ce qu’on a semé', note: "Galates 6,7. Structure analogue, mais sans réincarnation et tempérée par la grâce." },
      { tradition: 'religion-grecque', term: 'Némésis', note: "Le retour de la démesure sur celui qui l'a commise, sans mécanisme causal explicite." },
    ],
    falseFriend:
      "Dans l'usage occidental courant, « karma » désigne une justice immanente rapide (« le karma l'a rattrapé »). La notion originale porte sur plusieurs existences et n'implique aucune satisfaction morale à court terme.",
    related: ['samsara', 'moksha', 'dharma'],
  },
  {
    id: 'dharma',
    term: 'Dharma',
    original: 'धर्म / धम्म (« ce qui soutient »)',
    traditions: ['hindouisme', 'bouddhisme', 'jainisme', 'sikhisme'],
    definition: "Ordre du monde, loi, devoir propre, enseignement — selon le contexte et la tradition.",
    elaboration:
      "L'un des mots les plus intraduisibles. Dans l'hindouisme, il désigne à la fois l'ordre cosmique et le devoir particulier de chacun selon sa caste, son âge et son sexe (svadharma) — d'où les conflits explorés sans relâche par le Mahabharata : « le dharma est subtil ». Dans le bouddhisme, dhamma désigne l'enseignement du Bouddha et, au pluriel, les phénomènes élémentaires de l'expérience. Traduire par « religion » ou « loi » fait perdre l'essentiel : le dharma n'est pas édicté, il est ce qui tient.",
    parallels: [
      { tradition: 'confucianisme', term: 'Li et Dao', note: "Le rite et la voie : un ordre normatif qui n'est pas décrété par une volonté." },
      { tradition: 'religion-egyptienne', term: 'Maât', note: "Vérité, justice, ordre cosmique — auquel le pharaon lui-même est soumis." },
      { tradition: 'zoroastrisme', term: 'Asha', note: "L'ordre juste, opposé au mensonge (druj)." },
      { tradition: 'christianisme', term: 'Loi naturelle', note: "Chez Thomas d'Aquin, un ordre moral accessible à la raison, indépendant de la révélation." },
    ],
    related: ['karma', 'moksha'],
  },
  {
    id: 'samsara',
    term: 'Samsara',
    original: 'संसार (« errance »)',
    traditions: ['hindouisme', 'bouddhisme', 'jainisme', 'sikhisme'],
    definition: "Le cycle des naissances, morts et renaissances, mû par le karma et l'ignorance.",
    elaboration:
      "Il faut se défaire d'un contresens fréquent : la réincarnation n'est pas une bonne nouvelle. C'est le problème, pas la solution. Le samsara est décrit comme épuisant, sans commencement assignable et sans terme automatique. Toute la spiritualité indienne vise à en sortir, non à y obtenir une meilleure place. Le bouddhisme y ajoute un paradoxe : le processus continue sans qu'aucune âme ne transmigre — image de la flamme qui allume une autre flamme.",
    parallels: [
      { tradition: 'religion-grecque', term: 'Métempsycose', note: "Pythagore, l'orphisme et Platon (mythe d'Er) enseignent une transmigration des âmes, sans lien démontré avec l'Inde." },
      { tradition: 'druzisme', term: 'Taqammus', note: "Réincarnation immédiate dans un autre corps druze, en nombre fixe d'âmes." },
      { tradition: 'yezidisme', term: 'Changer de chemise', note: "Purification de l'âme au fil des vies successives." },
    ],
    falseFriend:
      "La « réincarnation » telle qu'elle circule en Occident — une chance de recommencer, souvent avec l'espoir d'avoir été quelqu'un d'important — est presque l'inverse de la notion indienne.",
    related: ['karma', 'moksha', 'nirvana'],
  },
  {
    id: 'moksha',
    term: 'Moksha',
    original: 'मोक्ष (« libération »)',
    traditions: ['hindouisme', 'jainisme', 'sikhisme'],
    definition: "La libération définitive du cycle des renaissances.",
    elaboration:
      "Ce que recouvre la libération dépend entièrement de la métaphysique adoptée. Pour l'advaita, c'est la réalisation que le soi n'a jamais été séparé du brahman : rien n'est obtenu, une erreur est dissipée. Pour Ramanuja, l'âme demeure distincte et jouit éternellement de Dieu. Pour le jaïnisme, l'âme allégée de tout karma remonte au sommet de l'univers, omnisciente et sereine. Le quatrième des buts de l'existence, après le devoir, la prospérité et le plaisir.",
    parallels: [
      { tradition: 'bouddhisme', term: 'Nirvana', note: "Extinction du feu de l'avidité ; sans soi à libérer." },
      { tradition: 'christianisme', term: 'Salut', note: "Restauration d'une relation rompue plutôt que sortie d'un cycle." },
      { tradition: 'gnosticisme', term: 'Gnose', note: "Connaissance libératrice de sa véritable origine ; structurellement proche du jnana." },
    ],
    related: ['samsara', 'nirvana', 'karma'],
  },
  {
    id: 'nirvana',
    term: 'Nirvana',
    original: 'निर्वाण / निब्बान (« extinction, soufflage »)',
    traditions: ['bouddhisme', 'jainisme'],
    definition: "L'extinction du feu de l'avidité, de la haine et de l'illusion ; la fin de la souffrance.",
    elaboration:
      "L'image est celle d'une flamme qui s'éteint faute de combustible. Les textes refusent explicitement de le décrire comme existence ou non-existence : les quatre branches de l'alternative sont écartées. Ce n'est pas un lieu, ni un état de conscience à obtenir, ni l'annihilation d'une personne — d'autant qu'aucune personne substantielle n'était là au départ. Nagarjuna franchit un pas de plus : « Le samsara n'a aucune différence avec le nirvana. »",
    parallels: [
      { tradition: 'hindouisme', term: 'Moksha', note: "Même fonction structurelle, métaphysique opposée : il y a un soi à libérer." },
      { tradition: 'christianisme', term: 'Vision béatifique', note: "Terme ultime, mais relationnel et personnel." },
    ],
    falseFriend: "« Nirvana » employé pour un état de béatitude ou de détente est un contresens complet.",
    related: ['moksha', 'anatta', 'samsara'],
  },
  {
    id: 'anatta',
    term: 'Anatta / Anatman',
    original: 'अनात्मन् (« non-soi »)',
    traditions: ['bouddhisme'],
    definition: "L'absence d'un soi permanent, substantiel et indépendant dans la personne.",
    elaboration:
      "La thèse la plus originale et la plus contre-intuitive du bouddhisme. Aucun des cinq agrégats — corps, sensations, perceptions, formations mentales, conscience — n'est « moi » ni « à moi ». Ce qu'on appelle une personne est un processus, non une chose. Ce n'est pas du nihilisme : le processus est réel, seule la substance est illusoire. La rupture avec les Upanishad est frontale : là où elles cherchent l'atman éternel, le Bouddha répond qu'aucune inspection ne le trouve.",
    parallels: [
      { tradition: 'humanisme-seculier', term: 'Le moi comme faisceau (Hume)', note: "« Je ne trouve jamais que des perceptions particulières » — thèse presque identique, atteinte indépendamment au XVIIIe siècle." },
      { tradition: 'hindouisme', term: 'Atman', note: "L'exact opposé : le soi profond est réel, éternel et identique au brahman." },
    ],
    related: ['nirvana', 'sunyata'],
  },
  {
    id: 'sunyata',
    term: 'Sunyata',
    original: 'शून्यता (« vacuité »)',
    traditions: ['bouddhisme'],
    definition: "L'absence d'existence propre et indépendante en toute chose.",
    elaboration:
      "Nagarjuna généralise l'anatta à l'ensemble du réel : rien ne possède d'essence (svabhava), tout n'existe qu'en relation. Ce n'est pas dire que rien n'existe, mais que rien n'existe indépendamment. Et la vacuité elle-même est vide : « ceux qui font de la vacuité une opinion sont incurables ». L'outil critique se retourne sur lui-même pour éviter de devenir une nouvelle idole.",
    parallels: [
      { tradition: 'taoisme', term: 'L’utilité du vide', note: "« C'est le vide du moyeu qui rend la roue utile » — intuition voisine, moins systématique." },
      { tradition: 'christianisme', term: 'Théologie négative', note: "On ne peut dire de Dieu que ce qu'il n'est pas. Méthode analogue appliquée à l'absolu, non aux phénomènes." },
    ],
    related: ['anatta', 'nirvana'],
  },
  {
    id: 'ahimsa',
    term: 'Ahimsa',
    original: 'अहिंसा (« non-nuisance »)',
    traditions: ['jainisme', 'bouddhisme', 'hindouisme'],
    definition: "L'abstention de nuire, en acte, en parole et en pensée.",
    elaboration:
      "Développée d'abord et surtout par le jaïnisme, qui l'étend aux insectes, aux plantes et aux êtres à un seul sens. Reprise par le bouddhisme et réintégrée dans l'hindouisme. Ce n'est pas une simple abstention : Gandhi en fait une force active — le satyagraha — et une méthode politique de masse, transmise ensuite à Martin Luther King et à des dizaines de mouvements.",
    parallels: [
      { tradition: 'christianisme', term: 'Amour des ennemis', note: "Refus de rendre le mal, avec une exigence positive supplémentaire." },
      { tradition: 'judaisme', term: 'Bal tashkhit', note: "Interdiction de détruire inutilement, étendue par les rabbins bien au-delà des arbres fruitiers." },
    ],
    related: ['karma', 'dharma'],
  },
  {
    id: 'tawhid',
    term: 'Tawhid',
    original: 'توحيد (« affirmation de l’unicité »)',
    traditions: ['islam', 'druzisme'],
    definition: "L'unicité absolue de Dieu, sans associé, sans partie, sans image.",
    elaboration:
      "Ce n'est pas seulement une thèse numérique (un seul dieu) mais une exigence : rien ne doit être absolutisé — ni un roi, ni une image, ni un prêtre, ni soi-même. Son contraire, le shirk (associationnisme), est la seule faute décrite comme impardonnable. Il explique l'aniconisme musulman et le développement d'un art de la calligraphie et de la géométrie. Le soufisme le pousse jusqu'à l'unité de l'être (wahdat al-wujud) chez Ibn Arabi, ce qui lui vaut l'accusation de panthéisme.",
    parallels: [
      { tradition: 'judaisme', term: 'Chema Israël', note: "« Le Seigneur est un » — même exigence, même refus de l'image." },
      { tradition: 'sikhisme', term: 'Ik Onkar', note: "« Il n'y a qu'un Être » : formulation d'ouverture du Guru Granth Sahib." },
    ],
    related: ['shirk', 'chema'],
  },
  {
    id: 'shirk',
    term: 'Shirk',
    original: 'شرك (« association »)',
    traditions: ['islam'],
    definition: "Le fait d'associer quoi que ce soit à Dieu dans son unicité ou son adoration.",
    elaboration:
      "Faute majeure, présentée comme la seule impardonnable. Sa définition précise est un enjeu majeur : les courants littéralistes y incluent la vénération des saints, la visite des tombeaux et l'intercession, que la majorité des musulmans pratiquent sans y voir de shirk. Ce désaccord de définition est à l'origine de conflits internes considérables, du wahhabisme naissant aux destructions de mausolées contemporaines.",
    parallels: [
      { tradition: 'judaisme', term: 'Avoda zara', note: "« Culte étranger » : l'idolâtrie, faute pour laquelle il faut se laisser tuer plutôt que la commettre." },
      { tradition: 'christianisme', term: 'Idolâtrie', note: "Le débat sur les images a provoqué la crise iconoclaste byzantine et les destructions protestantes." },
    ],
    related: ['tawhid'],
  },
  {
    id: 'chema',
    term: 'Chema Israël',
    original: 'שְׁמַע יִשְׂרָאֵל',
    traditions: ['judaisme'],
    definition: "« Écoute Israël, YHWH notre Dieu, YHWH est un » (Deutéronome 6,4).",
    elaboration:
      "La déclaration centrale du judaïsme, récitée matin et soir, inscrite dans les tefillin et les mezouzot, et prononcée en dernier avant de mourir. Rabbi Akiva expira en la récitant sous la torture. Elle n'est pas un credo mais une injonction à écouter : le verbe est à l'impératif.",
    parallels: [
      { tradition: 'islam', term: 'Shahada', note: "« Il n'y a de dieu que Dieu » — même fonction attestative." },
      { tradition: 'christianisme', term: 'Credo', note: "Fonction analogue, mais énumérant des articles de foi plutôt qu'une seule affirmation." },
    ],
    related: ['tawhid'],
  },
  {
    id: 'grace',
    term: 'Grâce',
    traditions: ['christianisme', 'hindouisme', 'bouddhisme', 'sikhisme', 'islam'],
    definition: "Don gratuit et non mérité par lequel l'absolu vient au-devant de la créature.",
    elaboration:
      "Notion apparemment chrétienne, en réalité largement distribuée. Chez Paul et Augustin, elle précède et rend possible toute réponse humaine ; Luther en fait le cœur de la Réforme. Mais Shinran, au Japon du XIIIe siècle et sans aucun contact, aboutit exactement à la même conclusion : la « force de l'autre » sauve, et même la foi est reçue. Dans le vishnouisme, le débat entre l'école du singe (le petit s'accroche) et celle du chat (la mère porte) reproduit trait pour trait la controverse occidentale sur la coopération de la liberté.",
    parallels: [
      { tradition: 'bouddhisme', term: 'Tariki', note: "« Force de l'autre » : le vœu d'Amida sauve celui qui ne le peut pas lui-même." },
      { tradition: 'sikhisme', term: 'Nadar', note: "Le regard de grâce, sans lequel le souvenir du Nom ne suffit pas." },
      { tradition: 'islam', term: 'Rahma', note: "La miséricorde divine, qui « embrasse toute chose » et excède la comptabilité des actes." },
    ],
    related: ['salut', 'foi'],
  },
  {
    id: 'foi',
    term: 'Foi',
    traditions: ['christianisme', 'judaisme', 'islam', 'bouddhisme'],
    definition: "Confiance, fidélité, adhésion — selon les traditions, le mot recouvre des attitudes très différentes.",
    elaboration:
      "L'assimilation de la foi à la croyance en des propositions invérifiables est une construction moderne, largement occidentale. L'emounah hébraïque signifie d'abord la fidélité et la solidité (même racine que « amen »). L'iman arabe est une confiance qui engage la conduite. La saddha bouddhique est une confiance provisoire dans une méthode, destinée à être remplacée par la vérification personnelle. La pistis grecque du Nouveau Testament est plus proche de la loyauté que de l'assentiment intellectuel.",
    parallels: [
      { tradition: 'bouddhisme', term: 'Saddha', note: "Confiance de départ, explicitement provisoire : « viens et vois »." },
      { tradition: 'hindouisme', term: 'Shraddha', note: "Confiance qui rend l'enseignement opérant, plus proche de la disposition que de l'opinion." },
    ],
    falseFriend:
      "« Avoir la foi » au sens de « croire sans preuve » est une définition tardive et polémique, forgée dans les débats modernes entre science et religion. Elle rend inintelligible l'usage des textes anciens.",
    related: ['grace', 'salut'],
  },
  {
    id: 'salut',
    term: 'Salut',
    traditions: ['christianisme', 'islam', 'judaisme', 'zoroastrisme'],
    definition: "État final positif auquel une tradition destine l'être humain, et moyens d'y accéder.",
    elaboration:
      "La question « comment être sauvé ? » n'a pas la même urgence partout. Elle est centrale dans le christianisme, importante en islam, marginale dans le judaïsme rabbinique — qui parle plutôt de fidélité à l'alliance — et mal formée dans le confucianisme. Projeter cette question sur toutes les traditions est l'un des biais les plus fréquents de la lecture occidentale.",
    parallels: [
      { tradition: 'hindouisme', term: 'Moksha', note: "Sortie du cycle plutôt que restauration d'une relation." },
      { tradition: 'bouddhisme', term: 'Nirvana', note: "Extinction plutôt qu'accession à un état." },
      { tradition: 'judaisme', term: 'Olam ha-ba', note: "Le monde à venir, auquel « les justes de toutes les nations » ont part." },
    ],
    related: ['grace', 'moksha', 'nirvana'],
  },
  {
    id: 'prophete',
    term: 'Prophète',
    original: 'נביא (nabi) / προφήτης',
    traditions: ['judaisme', 'christianisme', 'islam', 'bahaisme'],
    definition: "Celui qui parle au nom de Dieu — et non, au premier chef, celui qui prédit l'avenir.",
    elaboration:
      "Le contresens le plus répandu. Le prophète biblique annonce moins l'avenir qu'il ne dénonce le présent : il interpelle le roi, prend le parti de la veuve et de l'étranger, et déclare que Dieu rejette le culte d'une société injuste. Ses annonces de malheur sont conditionnelles — Jonas en fait la démonstration comique : Ninive se convertit, la catastrophe n'a pas lieu, et le prophète est furieux. En islam, la prophétie est une chaîne de 124 000 envoyés scellée par Muhammad ; dans le bahaïsme, elle reste ouverte.",
    parallels: [
      { tradition: 'religion-grecque', term: 'Oracle', note: "La Pythie prédit ; elle ne dénonce pas l'injustice sociale. Fonction toute différente." },
      { tradition: 'religions-africaines', term: 'Babalawo', note: "Le devin diagnostique un déséquilibre relationnel et prescrit un rééquilibrage." },
    ],
    falseFriend: "« Prophétie » au sens de prédiction datée est un usage tardif, à l'origine de tous les millénarismes déçus.",
    related: ['messie', 'revelation'],
  },
  {
    id: 'messie',
    term: 'Messie',
    original: 'משיח (« oint ») / χριστός',
    traditions: ['judaisme', 'christianisme', 'islam', 'rastafari'],
    definition: "Figure attendue chargée de rétablir la justice et d'inaugurer une ère nouvelle.",
    elaboration:
      "Le mot signifie simplement « oint » : rois et grands prêtres l'étaient. Cyrus, roi perse et non juif, est appelé « mon oint » par Isaïe. Le messianisme juif attend une figure humaine, royale, davidique, dont les critères sont vérifiables : paix universelle, rassemblement des exilés, reconstruction du Temple. Le christianisme redéfinit entièrement le terme en l'appliquant à un crucifié — retournement qui est la source de la rupture entre les deux traditions.",
    parallels: [
      { tradition: 'zoroastrisme', term: 'Saoshyant', note: "Sauveur eschatologique, probablement le prototype de la famille." },
      { tradition: 'islam', term: 'Mahdi', note: "Chez les duodécimains, le douzième imam occulté depuis 874." },
      { tradition: 'bouddhisme', term: 'Maitreya', note: "Le bouddha à venir, qui réenseignera le dharma disparu." },
    ],
    related: ['prophete', 'eschatologie'],
  },
  {
    id: 'eschatologie',
    term: 'Eschatologie',
    original: 'du grec eschatos, « dernier »',
    traditions: ['zoroastrisme', 'judaisme', 'christianisme', 'islam'],
    definition: "Discours sur les fins dernières : mort, jugement, fin du monde, restauration.",
    elaboration:
      "La conception d'un temps orienté vers une fin est probablement d'origine iranienne, transmise au judaïsme post-exilique puis au christianisme et à l'islam. Elle s'oppose au temps cyclique indien et gréco-romain. Sa portée dépasse largement le religieux : sécularisée, elle devient la philosophie de l'histoire, l'idée de progrès et les grands récits révolutionnaires. Löwith et Taubes ont montré que Marx et Hegel héritent d'une structure eschatologique.",
    parallels: [
      { tradition: 'hindouisme', term: 'Yuga', note: "Cycles cosmiques de millions d'années : le monde ne finit pas, il recommence." },
      { tradition: 'religion-nordique', term: 'Ragnarök', note: "Fin du monde où les dieux eux-mêmes périssent, suivie d'une renaissance." },
    ],
    related: ['messie', 'apocalypse'],
  },
  {
    id: 'apocalypse',
    term: 'Apocalypse',
    original: 'ἀποκάλυψις (« dévoilement »)',
    traditions: ['judaisme', 'christianisme'],
    definition: "Genre littéraire révélant, sous un langage codé, le sens caché de l'histoire présente.",
    elaboration:
      "Le mot ne signifie pas catastrophe mais dévoilement. Le genre naît sous persécution — Daniel sous Antiochos IV, Jean sous Domitien — et emploie un code (bêtes, nombres, symboles) pour dénoncer un empire sans être compris de lui. C'est de la littérature de résistance. Sa lecture comme calendrier prophétique est un contresens de genre, à l'origine de deux mille ans de prédictions démenties.",
    parallels: [
      { tradition: 'zoroastrisme', term: 'Littérature apocalyptique pehlevi', note: "Textes annonçant la fin du mélange et la rénovation." },
      { tradition: 'islam', term: 'Signes de l’Heure', note: "Traditions eschatologiques abondamment mobilisées par les mouvements contemporains." },
    ],
    falseFriend: "« Apocalyptique » au sens de « catastrophique » inverse le sens du mot.",
    related: ['eschatologie', 'messie'],
  },
  {
    id: 'revelation',
    term: 'Révélation',
    traditions: ['judaisme', 'christianisme', 'islam', 'bahaisme'],
    definition: "Communication d'un contenu par une source divine à un ou plusieurs humains.",
    elaboration:
      "Les modalités diffèrent radicalement. Dans l'islam, le Coran est dicté mot à mot, et le prophète est un canal ; on parle de révélation verbale. Dans le christianisme, la révélation est d'abord une personne — le Christ —, les Écritures en témoignant sous inspiration humaine. Dans le judaïsme, la révélation du Sinaï est complétée par une interprétation humaine qui a autorité (« elle n'est pas dans le ciel »). Ces différences expliquent pourquoi la critique historique des textes a été plus facilement absorbée par le christianisme que par l'islam.",
    parallels: [
      { tradition: 'hindouisme', term: 'Shruti', note: "« Ce qui est entendu » : les Veda sont sans auteur, ni humain ni divin — ils sont éternels et perçus par des voyants." },
      { tradition: 'bouddhisme', term: 'Découverte', note: "Le Bouddha ne reçoit rien : il découvre une loi qui existait déjà, comme on découvre un chemin ancien." },
    ],
    related: ['prophete', 'canon'],
  },
  {
    id: 'canon',
    term: 'Canon',
    original: 'du grec kanôn, « règle, mesure »',
    traditions: ['judaisme', 'christianisme', 'islam', 'bouddhisme'],
    definition: "Liste close des textes reconnus comme faisant autorité dans une tradition.",
    elaboration:
      "Un canon est toujours le produit d'un processus historique, généralement long et conflictuel. Le canon juif se stabilise sur plusieurs siècles ; le canon chrétien n'est fixé qu'au IVe siècle et diffère selon les confessions (66 livres chez les protestants, 73 chez les catholiques, 81 dans l'Église éthiopienne). Le Coran est fixé en une génération. Le canon bouddhique existe en versions pali, chinoise et tibétaine, de tailles très différentes. Fait notable : c'est souvent un hérétique qui provoque la clôture — Marcion pour le christianisme.",
    parallels: [
      { tradition: 'hindouisme', term: 'Shruti et smriti', note: "Distinction entre textes révélés et textes de tradition ; les frontières restent poreuses." },
      { tradition: 'sikhisme', term: 'Guru Granth Sahib', note: "Canon clos par le fondateur lui-même, avec pagination identique dans le monde entier." },
    ],
    related: ['revelation', 'exegese'],
  },
  {
    id: 'exegese',
    term: 'Exégèse et herméneutique',
    traditions: ['judaisme', 'christianisme', 'islam', 'hindouisme'],
    definition: "L'art d'interpréter un texte faisant autorité, et la théorie de cette interprétation.",
    elaboration:
      "Toutes les traditions du livre ont développé des théories sophistiquées des niveaux de sens. Le judaïsme distingue quatre niveaux (PaRDeS : littéral, allusif, homilétique, secret) ; Origène en propose trois (corps, âme, esprit) ; l'islam distingue zahir (apparent) et batin (caché), le chiisme et le soufisme insistant sur le second. Ce qui est en jeu est toujours le même : comment un texte ancien peut-il dire quelque chose à une situation nouvelle sans qu'on avoue le changer ?",
    parallels: [
      { tradition: 'hindouisme', term: 'Mimamsa', note: "École entière consacrée aux règles d'interprétation des textes rituels, d'une technicité extrême." },
      { tradition: 'humanisme-seculier', term: 'Méthode historico-critique', note: "Née chez Spinoza et développée au XIXe siècle : lire le texte comme un produit daté d'un milieu." },
    ],
    related: ['canon', 'revelation'],
  },
  {
    id: 'orthodoxie-orthopraxie',
    term: 'Orthodoxie / orthopraxie',
    traditions: ['christianisme', 'judaisme', 'islam', 'shintoisme'],
    definition: "Primauté de la croyance correcte, ou primauté de la pratique correcte.",
    elaboration:
      "Distinction cruciale et largement ignorée. Le christianisme est la religion la plus orthodoxique de l'histoire : ses grandes crises ont porté sur des formulations doctrinales, et il a inventé le credo comme instrument d'exclusion. Le judaïsme, l'islam, l'hindouisme et le shintō sont plutôt orthopraxiques : on y juge sur ce qui est fait. Un juif athée qui observe le Chabbat pose moins de problème qu'un chrétien qui nie la Trinité. Cette différence structurelle explique pourquoi la question « y croyez-vous vraiment ? » n'a pas le même poids selon les traditions.",
    parallels: [
      { tradition: 'shintoisme', term: 'Rite sans dogme', note: "La majorité des Japonais se déclarent sans religion et participent aux rites. Aucune contradiction n'est ressentie." },
    ],
    related: ['rituel', 'foi'],
  },
  {
    id: 'rituel',
    term: 'Rite',
    traditions: ['judaisme', 'christianisme', 'islam', 'hindouisme', 'shintoisme', 'religions-africaines'],
    definition: "Action codifiée, répétée, qui produit ou manifeste une réalité sociale et symbolique.",
    elaboration:
      "L'élément le plus universel du religieux : on connaît des religions sans dieu, sans dogme et sans clergé, aucune sans rite. Van Gennep a montré que les rites de passage suivent partout la même structure : séparation, marge, agrégation. Durkheim a montré que le rassemblement rituel produit une effervescence qui fait le groupe. Le rite ne se réduit pas à l'expression d'une croyance : le plus souvent, il la précède et la produit.",
    parallels: [
      { tradition: 'confucianisme', term: 'Li', note: "Le rite forme l'intérieur par le corps ; Xunzi en donne une théorie fonctionnaliste au IIIe siècle av. J.-C." },
      { tradition: 'humanisme-seculier', term: 'Cérémonies séculières', note: "Naissances, mariages et funérailles humanistes, officiellement reconnus dans plusieurs pays." },
    ],
    related: ['orthodoxie-orthopraxie', 'purete'],
  },
  {
    id: 'purete',
    term: 'Pur et impur',
    traditions: ['judaisme', 'islam', 'hindouisme', 'shintoisme', 'zoroastrisme'],
    definition: "Classement rituel des personnes, des objets et des états, indépendant de la moralité.",
    elaboration:
      "On peut être impur sans avoir mal agi : accoucher, enterrer un mort, avoir ses règles. C'est un registre distinct de la faute morale, ce qui déroute le regard moderne. Mary Douglas a proposé l'explication la plus convaincante : l'impur est ce qui brouille les catégories du système de classement. Les animaux interdits du Lévitique sont les anomalies taxinomiques. Le tabou est le revers d'un ordre.",
    parallels: [
      { tradition: 'christianisme', term: 'Abolition revendiquée', note: "« Rien de ce qui entre dans l'homme ne peut le souiller » (Marc 7) : une rupture rare et lourde de conséquences." },
    ],
    related: ['rituel', 'tabou'],
  },
  {
    id: 'tabou',
    term: 'Tabou',
    original: 'du tongien tapu',
    traditions: ['religions-amerindiennes', 'shintoisme', 'religions-africaines'],
    definition: "Interdit dont la transgression entraîne un danger automatique, indépendamment de l'intention.",
    elaboration:
      "Mot polynésien entré dans le vocabulaire savant au XVIIIe siècle via le capitaine Cook. Il désigne à la fois le sacré et l'interdit : ce qui est mis à part est dangereux à toucher. Le concept a été généralisé — parfois abusivement — à toutes les cultures. Sa force est de rappeler que l'interdit religieux n'est pas toujours moral : il peut être une question de contact et de contamination.",
    parallels: [
      { tradition: 'judaisme', term: 'Qadosh', note: "« Saint » signifie d'abord « séparé » ; le sacré est ce qu'on ne manipule pas ordinairement." },
    ],
    related: ['purete', 'sacre'],
  },
  {
    id: 'sacre',
    term: 'Sacré / profane',
    traditions: [],
    definition: "Distinction entre ce qui est mis à part et ce qui relève de l'usage ordinaire.",
    elaboration:
      "Durkheim en fait la définition même du religieux : « toutes les croyances religieuses connues supposent une classification des choses en deux genres, le profane et le sacré ». Cette dichotomie, plutôt que la croyance en Dieu, permet d'inclure le bouddhisme et les totémismes. Rudolf Otto y ajoute une phénoménologie : le numineux comme mysterium tremendum et fascinans, à la fois effrayant et attirant. Eliade décrit les hiérophanies : le sacré fait irruption dans le profane et y crée un centre.",
    parallels: [
      { tradition: 'shintoisme', term: 'Le torii', note: "Un portique qui ne ferme rien mais marque un seuil : on change de régime en le franchissant." },
    ],
    related: ['tabou', 'rituel'],
  },
  {
    id: 'mystique',
    term: 'Mystique',
    traditions: ['christianisme', 'islam', 'judaisme', 'hindouisme', 'bouddhisme'],
    definition: "Recherche et expérience d'un contact direct avec l'absolu, au-delà de la médiation doctrinale.",
    elaboration:
      "Les traditions mystiques se ressemblent souvent davantage entre elles que chacune ne ressemble à la théologie officielle de sa propre religion. Elles partagent un vocabulaire de la négation, une méfiance envers les phénomènes extraordinaires, des techniques attentionnelles proches et un rapport tendu à l'institution. Elles ont produit des martyrs des deux côtés : al-Hallaj exécuté, Eckhart condamné, Molinos emprisonné.",
    parallels: [
      { tradition: 'islam', term: 'Tasawwuf', note: "Le soufisme : dhikr, maître, confrérie, extinction du moi." },
      { tradition: 'judaisme', term: 'Kabbale', note: "Sefirot, tsimtsoum, tiqqoun ; une mystique très spéculative et théurgique." },
      { tradition: 'christianisme', term: 'Hésychasme', note: "Prière du cœur au rythme du souffle, très proche formellement du dhikr et du japa." },
    ],
    related: ['ascese', 'sunyata'],
  },
  {
    id: 'ascese',
    term: 'Ascèse',
    original: 'du grec askēsis, « exercice »',
    traditions: ['jainisme', 'christianisme', 'islam', 'hindouisme', 'bouddhisme'],
    definition: "Ensemble d'exercices de privation et de discipline visant une transformation intérieure.",
    elaboration:
      "Le mot vient de l'entraînement sportif : c'est un exercice, non une punition. Les traditions divergent radicalement sur son intensité. Le jaïnisme la pousse à l'extrême jusqu'au jeûne mortel volontaire ; le bouddhisme la rejette explicitement (le Bouddha abandonne la mortification) ; le zoroastrisme la juge néfaste, la vie bonne consistant à se marier et cultiver ; le judaïsme la limite ; le protestantisme la déplace du monastère au travail — c'est « l'ascèse intramondaine » de Weber.",
    parallels: [
      { tradition: 'islam', term: 'Zuhd', note: "Détachement intérieur du monde, sans nécessairement de privation extérieure." },
      { tradition: 'confucianisme', term: 'Culture de soi', note: "Discipline sans privation : c'est le rite et l'étude qui façonnent." },
    ],
    related: ['mystique', 'rituel'],
  },
  {
    id: 'syncretisme',
    term: 'Syncrétisme',
    traditions: [],
    definition: "Combinaison d'éléments issus de traditions différentes en un ensemble nouveau.",
    elaboration:
      "Terme souvent péjoratif dans la bouche des théologiens et purement descriptif chez les historiens. Or toutes les religions sont, à des degrés divers, syncrétiques : le christianisme combine judaïsme et philosophie grecque, l'islam intègre des matériaux juifs, chrétiens et arabes, le bouddhisme japonais fusionne avec le shintō pendant mille ans, le candomblé masque les orixás derrière les saints. La question intéressante n'est pas « est-ce syncrétique ? » mais « qui a intérêt à le nier ? ».",
    parallels: [
      { tradition: 'religions-africaines', term: 'Santería, candomblé, vodou', note: "Syncrétisme de survie sous l'esclavage : le masque catholique a permis la conservation du panthéon." },
      { tradition: 'taoisme', term: 'Les trois enseignements en un', note: "Wang Chongyang institue le syncrétisme comme méthode, non comme compromis." },
    ],
    related: ['inculturation'],
  },
  {
    id: 'inculturation',
    term: 'Inculturation',
    traditions: ['christianisme', 'bouddhisme', 'islam'],
    definition: "Processus par lequel une religion s'exprime dans les catégories d'une culture d'accueil.",
    elaboration:
      "Toute diffusion religieuse est une traduction, et toute traduction transforme. Le bouddhisme devient le Chan en Chine en empruntant au taoïsme ; le christianisme adopte les fêtes solsticiales et le vocabulaire philosophique grec ; l'islam absorbe les structures administratives perses. La question de la limite — jusqu'où adapter sans dénaturer ? — a produit des conflits majeurs : la querelle des rites chinois (XVIIe-XVIIIe s.) a fait condamner par Rome les jésuites qui autorisaient le culte des ancêtres, avec des conséquences durables sur l'implantation du catholicisme en Chine.",
    parallels: [
      { tradition: 'bouddhisme', term: 'Upaya', note: "Les « moyens habiles » : adapter l'enseignement à l'auditeur est doctrinalement légitime." },
    ],
    related: ['syncretisme'],
  },
  {
    id: 'age-axial',
    term: 'Âge axial',
    traditions: [],
    definition: "Période (≈ 800-200 av. J.-C.) où seraient apparues, indépendamment, les grandes réorientations spirituelles de l'humanité.",
    elaboration:
      "Concept forgé par Karl Jaspers en 1949. Entre le VIIIe et le IIIe siècle av. J.-C. apparaissent, sans contact établi, les prophètes d'Israël, les Upanishad, le Bouddha, Mahavira, Confucius, Laozi, Zarathoustra (selon la datation basse) et les présocratiques. Points communs allégués : critique du ritualisme, intériorisation, universalisation de l'éthique, réflexivité. La thèse est contestée — la simultanéité est approximative, l'Égypte et la Mésopotamie en sont exclues arbitrairement — mais elle reste un outil de comparaison fécond.",
    parallels: [],
    related: ['exegese'],
  },
  {
    id: 'secularisation',
    term: 'Sécularisation',
    traditions: ['humanisme-seculier'],
    definition: "Processus de retrait du religieux hors des institutions, des pratiques et des croyances.",
    elaboration:
      "Il faut distinguer trois phénomènes souvent confondus : la différenciation institutionnelle (l'État, l'école et la médecine cessent d'être religieux), le déclin de la pratique, et la privatisation de la croyance. Les trois ne vont pas nécessairement ensemble : les États-Unis sont institutionnellement séculiers et très pratiquants ; la Suède est peu pratiquante avec une Église longtemps d'État. La « thèse de la sécularisation » — déclin universel et irréversible — est aujourd'hui abandonnée par la plupart des sociologues : la population religieuse mondiale croît en valeur absolue.",
    parallels: [
      { tradition: 'humanisme-seculier', term: 'Laïcité', note: "Terme français désignant un régime juridique précis, difficilement traduisible ; le sécularisme indien reconnaît toutes les religions au lieu de s'en abstraire." },
    ],
    related: ['sacre'],
  },
  {
    id: 'fondamentalisme',
    term: 'Fondamentalisme',
    traditions: [],
    definition: "Réaction moderne affirmant l'inerrance d'un texte et le retour à un état d'origine idéalisé.",
    elaboration:
      "Le mot vient de brochures protestantes américaines publiées entre 1910 et 1915, The Fundamentals. C'est un phénomène moderne, non un archaïsme : il présuppose la critique historique à laquelle il réagit, et il emploie volontiers les moyens techniques les plus récents. Il existe dans toutes les traditions — créationnisme protestant, salafisme, sionisme religieux messianique, nationalisme hindou, nationalisme bouddhiste birman — avec des traits communs : sélection d'un noyau non négociable, refus de l'historicisation, frontière nette entre purs et impurs, et masculinisation de l'autorité.",
    parallels: [],
    related: ['secularisation', 'exegese'],
  },
  {
    id: 'theodicee',
    term: 'Théodicée',
    original: 'de Leibniz : « justice de Dieu »',
    traditions: ['christianisme', 'judaisme', 'islam'],
    definition: "Tentative de justifier la bonté et la puissance de Dieu malgré l'existence du mal.",
    elaboration:
      "Le terme est forgé par Leibniz en 1710. Les stratégies classiques : le mal comme privation (Augustin), comme condition du libre arbitre, comme pédagogie, comme partie d'un tout dont nous ne voyons pas le plan. Toutes se heurtent au cas de la souffrance des innocents et des animaux. Levinas a formulé l'objection la plus radicale après la Shoah : on peut donner un sens à sa propre souffrance, jamais à celle du voisin ; toute théodicée qui justifie la souffrance d'autrui est immorale.",
    parallels: [
      { tradition: 'hindouisme', term: 'Karma', note: "Résout le problème mais au risque de justifier l'injustice sociale." },
      { tradition: 'zoroastrisme', term: 'Dualisme', note: "Résout le problème en abandonnant l'unicité absolue." },
    ],
    related: ['grace', 'salut'],
  },
  {
    id: 'monotheisme',
    term: 'Monothéisme / hénothéisme / monolâtrie',
    traditions: ['judaisme', 'christianisme', 'islam', 'zoroastrisme'],
    definition: "Distinctions entre affirmer qu'un seul dieu existe, en adorer un seul, ou en privilégier un.",
    elaboration:
      "Distinctions indispensables pour lire l'histoire biblique. La monolâtrie adore un dieu sans nier l'existence des autres — position d'Israël pendant des siècles (« tu n'auras pas d'autres dieux devant ma face » suppose qu'il y en a). L'hénothéisme élève temporairement un dieu au-dessus des autres, courant dans le védisme. Le monothéisme strict, qui nie l'existence même des autres dieux, est formulé explicitement pour la première fois chez le Second Isaïe, pendant l'Exil. Le passage de l'une à l'autre est un processus historique documentable, non une donnée originelle.",
    parallels: [
      { tradition: 'hindouisme', term: 'Ishta-devata', note: "La divinité d'élection, adorée comme absolue dans un cadre théorique inclusif : une forme de monothéisme pratique." },
      { tradition: 'religion-egyptienne', term: 'Aton sous Akhenaton', note: "Cas discuté : monothéisme ou hénothéisme imposé par l'État ?" },
    ],
    related: ['tawhid', 'chema'],
  },
  {
    id: 'chamanisme',
    term: 'Chamanisme',
    original: 'de l’évenk šaman',
    traditions: ['religions-amerindiennes', 'religions-africaines'],
    definition: "Ensemble de pratiques où un spécialiste entre en transe pour agir dans un monde invisible.",
    elaboration:
      "Le mot vient d'une langue de Sibérie et a été généralisé par les ethnologues à des pratiques très diverses sur tous les continents — généralisation utile mais qui efface les différences. Traits récurrents : vocation par la maladie ou la crise, apprentissage auprès d'un maître, voyage de l'âme, recouvrement d'âmes perdues, négociation avec les maîtres du gibier. Le néochamanisme occidental prélève ces techniques hors de leur cadre communautaire, ce qui pose des questions d'appropriation vivement débattues par les communautés concernées.",
    parallels: [
      { tradition: 'taoisme', term: 'Wu', note: "Médiums de la Chine archaïque, à l'origine de certaines pratiques taoïstes." },
      { tradition: 'religions-africaines', term: 'Possession rituelle', note: "Mécanisme inverse : ce n'est pas l'esprit qu'on va chercher, c'est lui qui vient." },
    ],
    related: ['sacre'],
  },
  {
    id: 'martyre',
    term: 'Martyre',
    original: 'du grec martys, « témoin »',
    traditions: ['christianisme', 'islam', 'judaisme', 'sikhisme', 'bahaisme'],
    definition: "Mort acceptée plutôt que de renier sa foi ; le mot signifie littéralement « témoignage ».",
    elaboration:
      "Le concept naît dans le judaïsme des Maccabées, se développe dans le christianisme persécuté, prend une forme centrale dans le chiisme après Kerbala, et structure l'identité sikhe après Guru Arjan et Guru Tegh Bahadur. Tertullien : « Le sang des martyrs est une semence. » La sociologie confirme partiellement : la persécution visible renforce souvent la cohésion d'un groupe minoritaire. Le glissement contemporain du martyr — de celui qui subit à celui qui tue en mourant — est une rupture majeure avec la définition classique, et il est contesté à l'intérieur même des traditions concernées.",
    parallels: [
      { tradition: 'judaisme', term: 'Kiddouch ha-Chem', note: "« Sanctification du Nom » : mourir plutôt que commettre idolâtrie, meurtre ou inceste." },
      { tradition: 'islam', term: 'Shahid', note: "Même étymologie que « témoin ». Le droit classique exclut explicitement le suicide." },
    ],
    related: ['salut'],
  },
  {
    id: 'pelerinage',
    term: 'Pèlerinage',
    traditions: ['islam', 'christianisme', 'hindouisme', 'judaisme', 'bouddhisme', 'shintoisme'],
    definition: "Déplacement rituel vers un lieu tenu pour chargé de présence sacrée.",
    elaboration:
      "L'un des rites les plus universels et les plus massifs. Le hajj rassemble plus de deux millions de personnes ; la Kumbh Mela hindoue plusieurs dizaines de millions — le plus grand rassemblement humain de la planète ; l'Arbaïn chiite à Kerbala en réunit des millions. Victor Turner a analysé le pèlerinage comme une situation de communitas : hors des structures sociales ordinaires, dans une égalité temporaire qui est souvent l'expérience religieuse la plus forte des participants.",
    parallels: [
      { tradition: 'shintoisme', term: 'Hatsumōde', note: "Première visite au sanctuaire de l'année : des dizaines de millions de Japonais chaque janvier." },
      { tradition: 'humanisme-seculier', term: 'Pèlerinages séculiers', note: "Mémoriaux, tombes d'artistes, lieux de mémoire : la structure se maintient hors du religieux." },
    ],
    related: ['rituel', 'sacre'],
  },
];
