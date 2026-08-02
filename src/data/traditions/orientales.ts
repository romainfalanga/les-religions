import type { Tradition } from '../types';

export const traditionsOrientales: Tradition[] = [
  // =========================================================================
  {
    id: 'hindouisme',
    name: 'Hindouisme',
    altNames: ['Sanatana Dharma', 'Vaidika Dharma'],
    family: 'dharmique',
    founded: 'Continuum de ≈ 1500 av. J.-C. à nos jours',
    foundedYear: -1500,
    origin: 'Nord-Ouest du sous-continent indien',
    adherents: '≈ 1,2 milliard',
    symbol: 'ॐ',
    color: '#e0642e',
    tagline: 'Une même réalité ultime, une infinité de chemins et de visages.',
    summary:
      "L'hindouisme n'est pas une religion au sens abrahamique : ni fondateur, ni credo obligatoire, ni autorité centrale, ni date de naissance. C'est une famille de traditions issues du monde védique, unifiées par un socle textuel (les Veda), une structure sociale, un vocabulaire commun (dharma, karma, samsara, moksha) et une extraordinaire tolérance de la diversité doctrinale — du monisme absolu au théisme dévotionnel, en passant par des écoles athées.",
    essence:
      "Derrière la multiplicité éblouissante des dieux et des rites, une intuition récurrente : ce qui te constitue au plus intime (atman) et ce qui fonde le réel (brahman) ne sont pas deux. L'ignorance de cette identité est la source de la souffrance ; la connaissance, l'action désintéressée ou l'amour peuvent la dissiper. « La réalité est une, les sages la nomment diversement » (Rig-Veda 1.164.46).",
    centralQuestion: "Qui suis-je réellement, et comment sortir du cycle des renaissances ?",
    coreBeliefs: [
      {
        title: 'Brahman et atman',
        text: "Brahman est la réalité ultime, impersonnelle chez les uns, personnelle chez les autres. Atman est le soi profond. Les Upanishad affirment leur identité : tat tvam asi, « tu es cela ». Shankara (VIIIe s.) en fait un monisme strict (advaita) ; Ramanuja un monisme qualifié où l'âme reste distincte dans l'union ; Madhva un dualisme franc.",
      },
      {
        title: 'Karma et samsara',
        text: "Toute action porte une conséquence qui conditionne les naissances futures. Le samsara est le cycle des renaissances, moteur non d'espoir mais de lassitude : la libération (moksha) n'est pas une meilleure vie prochaine, c'est la sortie du cycle. Le karma est un principe causal impersonnel, pas une punition administrée par un juge.",
      },
      {
        title: 'Dharma',
        text: "Mot intraduisible : ordre du monde, devoir propre à chacun selon sa place, sa caste, son âge et son sexe (svadharma), loi morale et loi cosmique tout à la fois. Le Mahabharata explore inlassablement ses conflits internes : que faire quand deux devoirs s'opposent ?",
      },
      {
        title: 'Une divinité, mille visages',
        text: "Trimurti : Brahma (créateur, peu culté), Vishnou (préservateur, avec ses avatars Rama et Krishna), Shiva (transformateur). Les grands courants : vishnouisme, shivaïsme, shaktisme (culte de la Déesse), smartisme. La plupart des hindous pratiquent un monothéisme de fait (ishta-devata : sa divinité d'élection) dans un cadre théorique inclusif.",
      },
      {
        title: 'Les quatre buts et les quatre âges de la vie',
        text: "Purushartha : dharma (le devoir), artha (la prospérité), kama (le plaisir et le désir), moksha (la libération). L'hindouisme classique légitime donc explicitement la richesse et le plaisir à leur place. Ashrama : étudiant (brahmacharya), maître de maison (grihastha), retraite forestière (vanaprastha), renonçant (sannyasa).",
      },
      {
        title: 'Trois voies de salut',
        text: "Karma-yoga (l'action accomplie sans attachement au fruit), jnana-yoga (la connaissance libératrice), bhakti-yoga (l'amour dévotionnel personnel). La Bhagavad-Gita les articule et déclare la bhakti accessible à tous, y compris aux femmes et aux basses castes — geste démocratisant décisif.",
      },
    ],
    practices: [
      {
        title: 'Puja',
        text: "Culte domestique ou temple : offrande de fleurs, d'encens, de nourriture, de lumière (arati) à l'image (murti) de la divinité. L'image n'est pas Dieu mais son support de présence — distinction constamment mal comprise en Occident.",
      },
      {
        title: 'Yoga et méditation',
        text: "Les Yoga-Sutra de Patanjali (~IIe-IVe s.) codifient huit membres : disciplines éthiques (yama, niyama), postures, souffle, retrait des sens, concentration, méditation, samadhi. Le yoga postural moderne est une reformulation du XXe siècle, historiquement récente mais adossée à une tradition réelle.",
      },
      {
        title: 'Pèlerinages',
        text: "Varanasi, Haridwar, Tirupati, Rameshwaram, le Gange. La Kumbh Mela réunit périodiquement plusieurs dizaines de millions de personnes : le plus grand rassemblement humain de la planète.",
      },
      {
        title: 'Fêtes',
        text: "Divali (fête des lumières, victoire de la lumière sur l'obscurité), Holi (couleurs, renversement carnavalesque des hiérarchies), Navaratri et Durga Puja (la Déesse), Maha Shivaratri, Ganesh Chaturthi, Janmashtami.",
      },
      {
        title: 'Sanskaras',
        text: "Rites de passage : naissance, première nourriture solide, tonsure, initiation au cordon sacré (upanayana), mariage, crémation. Le rituel funéraire hindou vise à faciliter la transition de l'âme, non à conserver le corps.",
      },
    ],
    ethics: [
      {
        title: 'Ahimsa',
        text: "La non-violence en pensée, parole et acte. Développée d'abord et surtout par le jaïnisme et le bouddhisme, réintégrée dans l'hindouisme, elle devient chez Gandhi un instrument politique de masse — puis inspire Martin Luther King.",
      },
      {
        title: 'Action désintéressée',
        text: "« Tu as droit à l'action, jamais à ses fruits » (Gita 2,47). Une éthique qui déplace la valeur morale de la conséquence vers l'intention et le détachement — solution originale au conflit entre devoir et résultat.",
      },
      {
        title: 'La question des castes',
        text: "Le varna (quatre ordres) et la jati (des milliers de groupes endogames) sont légitimés par certains textes (Manusmriti) et contestés par d'autres courants dès l'origine (les bhakta médiévaux, les Lingayat, Ramanuja). L'intouchabilité est abolie par la Constitution indienne de 1950, largement sous l'impulsion d'Ambedkar ; les discriminations demeurent. Aucune présentation honnête de l'hindouisme ne peut faire l'économie de ce conflit interne.",
      },
    ],
    history: [
      {
        title: 'Substrat et période védique (≈2600-500 av. J.-C.)',
        text: "La civilisation de l'Indus (Harappa, Mohenjo-daro) laisse des indices — bains rituels, figure assise en posture yogique — non déchiffrables faute de lecture de son écriture. Vers 1500 av. J.-C., des populations de langue indo-européenne apportent le corpus védique, apparenté à l'Avesta iranien. Religion de sacrifice (yajna), de feu (Agni) et de parole efficace, dominée par les brahmanes.",
      },
      {
        title: 'Le tournant upanishadique (800-400 av. J.-C.)',
        text: "Contestation intérieure du ritualisme : le sacrifice est intériorisé, la question devient celle du soi et de la libération. C'est le moment indien de « l'âge axial », contemporain des prophètes juifs, de Bouddha, de Mahavira, de Confucius et des présocratiques.",
      },
      {
        title: 'Épopées, darshana et bhakti (400 av. – 1000 apr.)',
        text: "Composition du Mahabharata et du Ramayana ; six écoles philosophiques orthodoxes (nyaya, vaisheshika, samkhya, yoga, mimamsa, vedanta) ; essor des Purana et des grands cultes de Vishnou, Shiva et la Déesse ; explosion de la dévotion tamoule (Alvars et Nayanars) qui met la poésie amoureuse au service de Dieu.",
      },
      {
        title: 'Rencontre avec l’islam (1000-1750)',
        text: "Sultanats puis Empire moghol. Destructions de temples mais aussi symbioses : Kabir, Nanak, la musique et l'architecture indo-islamiques, la politique de tolérance d'Akbar. Le mouvement bhakti se déploie du Nord au Sud (Mirabai, Tulsidas, Chaitanya, Tukaram) et conteste les hiérarchies de caste au nom de l'amour de Dieu.",
      },
      {
        title: 'Colonisation et renaissance (1750-1947)',
        text: "L'orientalisme britannique « invente » en partie l'hindouisme comme religion unifiée. Réformateurs : Ram Mohan Roy (abolition de la sati), Dayananda Saraswati (retour aux Veda), Ramakrishna et Vivekananda (qui présente le vedanta au Parlement des religions de Chicago en 1893), Aurobindo, Gandhi.",
      },
      {
        title: 'Époque contemporaine',
        text: "Diffusion mondiale du yoga et de la méditation ; diaspora ; montée d'un nationalisme hindou (hindutva) qui redéfinit l'hindouisme en identité politique — mutation majeure, contestée à l'intérieur même de la tradition.",
      },
    ],
    branches: [
      {
        name: 'Vishnouisme',
        when: 'Structuré dès les premiers siècles apr. J.-C.',
        description:
          "Le plus nombreux (~640 M). Vishnou et ses avatars, en particulier Krishna et Rama. Fortement dévotionnel. Sous-écoles : Sri Vaishnava (Ramanuja), Gaudiya (Chaitanya, dont dérive le mouvement Hare Krishna).",
      },
      {
        name: 'Shivaïsme',
        when: 'Ancien, textes tantriques à partir du Ve s.',
        description:
          "~250 M. Shiva comme absolu. Shivaïsme du Cachemire (monisme tantrique d'Abhinavagupta), Shaiva Siddhanta tamoul, Lingayat (qui rejette caste et brahmanes), ascètes Nath et Aghori.",
      },
      {
        name: 'Shaktisme',
        when: 'Textes majeurs à partir du VIe s.',
        description:
          "Culte de la Déesse (Devi, Durga, Kali, Lakshmi, Saraswati) comme énergie ultime. Fort au Bengale, en Assam, au Kerala. Dimension tantrique développée.",
      },
      {
        name: 'Smartisme et Advaita Vedanta',
        when: 'VIIIe s., Shankara',
        description:
          "Culte de cinq divinités tenues pour des formes équivalentes du brahman impersonnel. Courant des élites brahmaniques et matrice de la présentation moderne « universaliste » de l'hindouisme.",
      },
      {
        name: 'Traditions réformistes et néo-hindouisme',
        when: 'XIXe-XXe s.',
        description:
          "Brahmo Samaj, Arya Samaj, Mission Ramakrishna, Auroville, mouvements de gourous mondialisés. Réinterprétation moderne, souvent monothéisante et anti-ritualiste.",
      },
    ],
    keyTexts: [
      'rig-veda',
      'upanishads',
      'bhagavad-gita',
      'mahabharata',
      'ramayana',
      'yoga-sutra',
      'puranas',
      'manusmriti',
      'brahma-sutra',
    ],
    keyFigures: [
      'krishna',
      'rama',
      'vyasa',
      'yajnavalkya',
      'patanjali',
      'shankara',
      'ramanuja',
      'madhva',
      'kabir',
      'mirabai',
      'chaitanya',
      'ramakrishna',
      'vivekananda',
      'gandhi',
      'ambedkar',
      'aurobindo',
    ],
    influencedBy: ['religion-indus', 'religion-vedique', 'religions-tribales-inde'],
    influenced: ['bouddhisme', 'jainisme', 'sikhisme', 'bouddhisme-tibetain', 'neopaganisme', 'theosophie'],
    misconceptions: [
      {
        claim: '« Les hindous adorent 330 millions de dieux. »',
        reality:
          "Le chiffre est une formule d'abondance, pas un recensement. La plupart des hindous adorent une divinité personnelle qu'ils tiennent pour l'absolu, les autres étant ses formes ou ses manifestations. Théologiquement, on parle plutôt de hénothéisme ou de monothéisme polymorphe.",
      },
      {
        claim: '« Les vaches sont sacrées, donc les hindous adorent les vaches. »',
        reality:
          "La vache est vénérée comme symbole de générosité maternelle et protégée par ahimsa ; elle n'est pas l'objet d'un culte. Le végétarisme n'est d'ailleurs majoritaire ni dans l'Inde ancienne (les Veda mentionnent des sacrifices bovins) ni dans l'Inde actuelle (environ 30 % de la population).",
      },
      {
        claim: '« Le karma, c’est la punition divine. »',
        reality:
          "C'est une loi causale impersonnelle, comparable à une physique morale. Aucun dieu ne « décide » ; et dans les écoles dévotionnelles, la grâce divine peut précisément suspendre cette mécanique.",
      },
      {
        claim: '« L’hindouisme est une religion, comme les autres. »',
        reality:
          "Le mot « hindou » est d'abord un exonyme géographique persan désignant les habitants au-delà de l'Indus. L'unification conceptuelle date largement du XIXe siècle, sous l'effet croisé de l'orientalisme et des réformateurs indiens.",
      },
    ],
    contribution:
      "Les notions de karma, de samsara et de libération ; le yoga et la méditation, aujourd'hui mondialisés ; une métaphysique de la conscience d'une finesse rare (Advaita, Samkhya, shivaïsme du Cachemire) ; une conception non exclusive de la vérité religieuse ; le zéro, la numération décimale et une grammaire scientifique (Panini) élaborés dans un cadre culturel religieux ; l'ahimsa, devenue outil politique mondial via Gandhi.",
    livingDebates: [
      "Caste : héritage religieux ou déformation sociale ? Réforme ou abolition ?",
      "Hindutva : l'hindouisme est-il une identité nationale ou une spiritualité universelle ?",
      "Place des femmes : prêtrise, accès aux temples (affaire de Sabarimala), veuvage",
      "Appropriation et sécularisation du yoga en Occident",
      "Conversion, contre-conversion, et lois anti-conversion",
    ],
  },

  // =========================================================================
  {
    id: 'bouddhisme',
    name: 'Bouddhisme',
    altNames: ['Buddha Dharma', 'Dhamma'],
    family: 'dharmique',
    founded: '≈ Ve siècle av. J.-C.',
    foundedYear: -500,
    origin: 'Plaine gangétique (Magadha, Kosala)',
    adherents: '≈ 520 millions',
    symbol: '☸',
    color: '#d99a2b',
    tagline: 'La souffrance a une cause ; elle peut donc cesser.',
    summary:
      "Fondé par Siddhartha Gautama, le bouddhisme se présente moins comme une doctrine sur Dieu que comme un diagnostic et une thérapeutique de la condition humaine. Il propose une analyse de l'insatisfaction (dukkha), de son mécanisme (le désir avide fondé sur l'illusion d'un moi permanent) et une méthode pour s'en libérer.",
    essence:
      "Rien n'a d'existence propre, séparée et permanente — ni les choses, ni toi. La souffrance vient de l'agrippement à des entités que l'on croit fixes. Voir clairement, à force d'attention et d'éthique, défait cet agrippement. Le Bouddha n'a pas dit « crois-moi » mais « viens et vois » (ehipassiko).",
    centralQuestion: "Pourquoi souffrons-nous alors même que nous obtenons ce que nous voulons — et comment cela peut-il cesser ?",
    coreBeliefs: [
      {
        title: 'Les Quatre Nobles Vérités',
        text: "1) Il y a dukkha (insatisfaction, souffrance, inadéquation). 2) Elle a une origine : la soif (tanha), l'attachement, alimentés par l'ignorance. 3) Elle peut cesser : c'est le nirvana. 4) Il existe un chemin : l'octuple sentier. Formulation calquée sur la médecine indienne : symptôme, étiologie, pronostic, traitement.",
      },
      {
        title: 'L’octuple sentier',
        text: "Vue juste, intention juste (sagesse) ; parole juste, action juste, moyens d'existence justes (éthique) ; effort juste, attention juste, concentration juste (méditation). « Juste » (samma) signifie « complet, ajusté », non « conforme à une règle ».",
      },
      {
        title: 'Les trois caractéristiques',
        text: "Anicca (impermanence : tout ce qui est composé se décompose), dukkha (rien d'impermanent ne peut satisfaire durablement), anatta (non-soi : aucun noyau permanent ne se trouve ni dans le corps, ni dans les sensations, ni dans les perceptions, ni dans les formations mentales, ni dans la conscience).",
      },
      {
        title: 'Anatta — le non-soi',
        text: "Rupture la plus radicale avec l'hindouisme : là où les Upanishad cherchent l'atman éternel, le Bouddha répond qu'aucune inspection ne le trouve. Ce qui existe est un processus, un flux de conditions, pas une substance. Il ne s'agit pas de nihilisme : le processus est réel, seule la substance est illusoire.",
      },
      {
        title: 'Coproduction conditionnée',
        text: "Pratityasamutpada : « ceci étant, cela est ; ceci apparaissant, cela apparaît ». Tout phénomène surgit en dépendance d'autres phénomènes. Nagarjuna (IIe s.) en déduit la vacuité (shunyata) : rien ne possède d'essence propre, y compris le nirvana et les Quatre Vérités elles-mêmes.",
      },
      {
        title: 'Karma, renaissance et nirvana',
        text: "Le karma bouddhique est intentionnel (cetana) : c'est le vouloir qui conditionne, pas l'acte extérieur. La renaissance a lieu sans âme qui transmigre — image classique : la flamme qui allume une autre flamme. Le nirvana est l'extinction (littéralement le « soufflage ») du feu de l'avidité, de la haine et de l'illusion.",
      },
      {
        title: 'Une religion sans Dieu créateur',
        text: "Le Bouddha n'a ni nié ni affirmé un absolu créateur : il a écarté la question comme non pertinente pour la libération (parabole de la flèche empoisonnée). Des dieux existent dans la cosmologie bouddhiste, mais ils sont eux-mêmes soumis à l'impermanence et au samsara.",
      },
    ],
    practices: [
      {
        title: 'Méditation samatha et vipassana',
        text: "Samatha : apaisement, concentration sur un objet (souvent le souffle) jusqu'aux états d'absorption (jhana). Vipassana : vision pénétrante, observation directe de l'impermanence des phénomènes. C'est de cette seconde famille que dérive la « pleine conscience » séculière contemporaine (Kabat-Zinn, 1979).",
      },
      {
        title: 'Les cinq préceptes',
        text: "S'abstenir de tuer, de prendre ce qui n'est pas donné, d'une conduite sexuelle nuisible, de la parole fausse, des substances qui obscurcissent l'esprit. Ce sont des entraînements volontaires, non des commandements divins.",
      },
      {
        title: 'Vie monastique',
        text: "Le sangha des moines (bhikkhu) et moniales (bhikkhuni) suit le Vinaya : 227 règles pour les moines, plus de 300 pour les moniales dans le canon pali. La lignée d'ordination des moniales, éteinte dans le Theravada, fait l'objet d'une restauration disputée depuis les années 1990.",
      },
      {
        title: 'Les quatre demeures sublimes',
        text: "Metta (bienveillance), karuna (compassion), mudita (joie sympathique face au bonheur d'autrui), upekkha (équanimité). Cultivées par des méditations dirigées, en cercles concentriques allant de soi jusqu'aux ennemis.",
      },
      {
        title: 'Dévotion et rituel',
        text: "Contrairement à l'image occidentale d'un bouddhisme purement rationnel, la pratique majoritaire dans le monde inclut offrandes, prosternations, récitation de sutras, culte des reliques, protection par les amulettes, mérite transféré aux défunts.",
      },
    ],
    ethics: [
      {
        title: 'Compassion universelle',
        text: "Le Mahayana radicalise : le vœu du bodhisattva est de différer son propre nirvana jusqu'à la libération de tous les êtres. Shantideva : « Tant que durera l'espace, tant que dureront les êtres, puissé-je moi aussi demeurer, pour dissiper la souffrance du monde. »",
      },
      {
        title: 'Non-violence et végétarisme',
        text: "Le premier précepte fonde une éthique de non-nuisance étendue aux animaux. Le végétarisme est obligatoire dans le bouddhisme est-asiatique, optionnel dans le Theravada (le moine mange ce qu'on lui donne) et rare au Tibet pour des raisons d'altitude.",
      },
      {
        title: 'Moyens d’existence justes',
        text: "Le canon proscrit explicitement le commerce des armes, des êtres humains, de la viande, des poisons et des intoxicants — une éthique professionnelle formulée il y a 2 500 ans.",
      },
      {
        title: 'Les limites historiques',
        text: "Le bouddhisme n'a pas échappé à la violence : moines-soldats japonais, soutien du zen au militarisme impérial (documenté par Brian Victoria), nationalisme bouddhiste au Sri Lanka et en Birmanie. La doctrine de non-violence n'a jamais garanti l'innocence institutionnelle.",
      },
    ],
    history: [
      {
        title: 'Le Bouddha et la première communauté (Ve s. av. J.-C.)',
        text: "Siddhartha Gautama, fils d'un chef Shakya, quitte son milieu, expérimente l'ascèse extrême, la rejette, et atteint l'éveil sous un ficus à Bodh-Gaya. Il enseigne quarante-cinq ans dans le bassin du Gange et fonde un ordre ouvert à toutes les castes — geste socialement subversif dans l'Inde de son temps.",
      },
      {
        title: 'Conciles et diffusion (IVe-IIIe s. av. J.-C.)',
        text: "Après sa mort, des conciles fixent l'enseignement oralement. L'empereur Ashoka (~268-232 av. J.-C.), après la boucherie du Kalinga, se convertit, fait graver des édits sur pilier et envoie des missions jusqu'en Grèce, en Égypte et à Ceylan : première mondialisation religieuse documentée.",
      },
      {
        title: 'Naissance du Mahayana (Ier s. av. – IIe s. apr.)',
        text: "Émergence du « Grand Véhicule » : idéal du bodhisattva plutôt que de l'arhat, vacuité universelle, bouddhas cosmiques, salut accessible aux laïcs. Nagarjuna fonde le Madhyamaka ; Asanga et Vasubandhu le Yogacara (« rien que conscience »).",
      },
      {
        title: 'Expansion asiatique (Ier-XIIIe s.)',
        text: "Route de la soie vers la Chine (Ier s.), où le bouddhisme rencontre le taoïsme et engendre le Chan (Zen) ; Corée, Japon (VIe s.), Vietnam ; Theravada consolidé à Ceylan puis en Birmanie, Thaïlande, Laos, Cambodge ; Tibet à partir du VIIe s., avec le tantrisme (Padmasambhava). Grandes universités monastiques de Nalanda et Vikramashila.",
      },
      {
        title: 'Disparition en Inde, survie ailleurs (XIIe-XIXe s.)',
        text: "Le bouddhisme s'éteint presque totalement dans son pays d'origine, sous l'effet combiné de la réabsorption par l'hindouisme dévotionnel, de la perte du soutien royal et des destructions des invasions turco-afghanes (Nalanda détruite vers 1193). Il prospère partout ailleurs en Asie.",
      },
      {
        title: 'Renaissance et mondialisation (XIXe-XXIe s.)',
        text: "Redécouverte par la philologie occidentale, mouvement Vipassana birman, conversion massive des dalits menée par Ambedkar en 1956 (près d'un demi-million de personnes en un jour), exil du 14e dalaï-lama (1959) et diffusion du bouddhisme tibétain, essor mondial de la pleine conscience laïcisée, dialogue avec les neurosciences.",
      },
    ],
    branches: [
      {
        name: 'Theravada',
        when: 'Se réclame de la tradition la plus ancienne ; canon fixé par écrit vers 29 av. J.-C.',
        description:
          "« Doctrine des Anciens ». Sri Lanka, Birmanie, Thaïlande, Laos, Cambodge. Canon pali, idéal de l'arhat, primat du monachisme et de la méditation vipassana.",
      },
      {
        name: 'Mahayana',
        when: 'À partir du Ier s. av. J.-C.',
        description:
          "Chine, Japon, Corée, Vietnam. Idéal du bodhisattva, sutras nouveaux (Lotus, Cœur, Diamant), vacuité, bouddhas et bodhisattvas cosmiques (Amitabha, Avalokiteshvara/Guanyin). Écoles : Chan/Zen, Terre Pure, Tiantai/Tendai, Nichiren, Huayan.",
      },
      {
        name: 'Vajrayana',
        when: 'VIe-VIIIe s., Inde puis Tibet',
        description:
          "« Véhicule de diamant ». Tibet, Mongolie, Bhoutan, Himalaya, Japon (Shingon). Tantras, mantras, mandalas, visualisations, transmission ésotérique de maître à disciple, lignées de réincarnation (tulkou). Écoles : Nyingma, Kagyu, Sakya, Gelug (celle du dalaï-lama).",
      },
      {
        name: 'Terre Pure',
        when: 'Chine Ve s., Japon XIIe-XIIIe s.',
        description:
          "Numériquement dominante en Asie de l'Est. Confiance dans le vœu du bouddha Amitabha : la récitation de son nom (nembutsu) suffit à renaître dans sa Terre Pure. Shinran pousse jusqu'à une théologie de la grâce pure, comparable à celle de Luther.",
      },
      {
        name: 'Zen / Chan / Sŏn / Thiền',
        when: 'Chine VIe s.',
        description:
          "« Transmission spéciale hors des écritures. » Primat de l'assise silencieuse (zazen) et de l'éveil soudain. Rinzai (koans, Hakuin) et Sōtō (Dōgen, « juste s'asseoir »).",
      },
      {
        name: 'Bouddhismes modernes',
        when: 'XIXe-XXe s.',
        description:
          "Navayana d'Ambedkar (bouddhisme social des dalits), Sōka Gakkai (nichirenisme laïc mondialisé), bouddhisme engagé (Thich Nhat Hanh), mindfulness séculière.",
      },
    ],
    keyTexts: [
      'canon-pali',
      'dhammapada',
      'sutra-lotus',
      'sutra-coeur',
      'sutra-diamant',
      'bodhicharyavatara',
      'livre-morts-tibetain',
      'visuddhimagga',
    ],
    keyFigures: [
      'bouddha',
      'ananda',
      'ashoka',
      'nagarjuna',
      'asanga',
      'bodhidharma',
      'buddhaghosa',
      'padmasambhava',
      'milarepa',
      'shantideva',
      'huineng',
      'dogen',
      'shinran',
      'nichiren',
      'tsongkhapa',
      'dalai-lama-14',
      'thich-nhat-hanh',
      'ambedkar',
    ],
    influencedBy: ['hindouisme', 'religion-vedique', 'jainisme', 'sramana'],
    influenced: ['taoisme', 'shintoisme', 'confucianisme', 'bon', 'manicheisme', 'humanisme-seculier'],
    misconceptions: [
      {
        claim: '« Le bouddhisme est une philosophie, pas une religion. »',
        reality:
          "Présentation occidentale forgée au XIXe siècle. Le bouddhisme vécu comporte cosmologie, êtres surnaturels, rituels, reliques, mérite, prière et institutions cléricales. Il est atypique par l'absence de Dieu créateur, non par l'absence de religiosité.",
      },
      {
        claim: '« Le nirvana, c’est le néant. »',
        reality:
          "Les textes refusent explicitement de le décrire comme existence ou non-existence. C'est l'extinction du feu de l'avidité, pas l'annihilation d'une personne — d'autant qu'aucune personne substantielle n'était là au départ.",
      },
      {
        claim: '« Le Bouddha est un dieu qu’on adore. »',
        reality:
          "Il est un être humain éveillé, mort, et qui a refusé le statut divin. Les prosternations honorent l'enseignement et l'éveil. Cela dit, certains courants (Terre Pure, Vajrayana) développent une dévotion à des bouddhas cosmiques qui fonctionne religieusement comme un théisme.",
      },
      {
        claim: '« Le bouddhisme, c’est le détachement, donc l’indifférence. »',
        reality:
          "Le détachement porte sur l'agrippement, pas sur l'engagement. Les quatre demeures sublimes visent une implication émotionnelle intense mais non possessive ; le vœu du bodhisattva est l'inverse exact de l'indifférence.",
      },
    ],
    contribution:
      "Une analyse psychologique de la souffrance et de l'attention d'une précision qui intéresse aujourd'hui la clinique et les neurosciences ; l'idée que la libération relève de l'entraînement de l'esprit et non de la grâce ou du sacrifice ; une éthique sans commandement divin ; une logique et une épistémologie sophistiquées (Dignaga, Dharmakirti) ; une critique radicale de la substance qui a intéressé Hume, Schopenhauer, Nietzsche et la philosophie analytique de l'esprit.",
    livingDebates: [
      "Réordination des moniales dans le Theravada et le Vajrayana",
      "La mindfulness séculière : diffusion utile ou dénaturation ?",
      "Nationalismes bouddhistes (Birmanie, Sri Lanka) et violence",
      "Abus de pouvoir de maîtres charismatiques en Occident et réforme de l'autorité",
      "Succession du dalaï-lama et interférence de l'État chinois",
    ],
  },

  // =========================================================================
  {
    id: 'jainisme',
    name: 'Jaïnisme',
    family: 'dharmique',
    founded: 'Mahavira, VIe-Ve s. av. J.-C. (tradition : éternel)',
    foundedYear: -550,
    origin: 'Bihar, Inde du Nord',
    adherents: '≈ 5-7 millions',
    symbol: '🖐',
    color: '#4fa07d',
    tagline: 'Ne nuire à rien de vivant, et savoir qu’aucune vérité n’est totale.',
    summary:
      "Le jaïnisme pousse la non-violence à son extrémité logique et fait de l'ascèse la voie de libération de l'âme. Il enseigne que la réalité est trop complexe pour être épuisée par un seul point de vue — doctrine de perspectivisme (anekantavada) rare dans l'histoire religieuse.",
    essence:
      "Chaque être vivant possède une âme (jiva) éternelle, alourdie par la matière karmique que génère toute violence. Cesser de nuire, c'est cesser d'accumuler ; l'ascèse consume ce qui reste ; l'âme libérée remonte au sommet de l'univers, omnisciente et sereine. Nul dieu créateur n'intervient : l'univers est éternel et la libération, entièrement à la charge de chacun.",
    centralQuestion: "Comment vivre en cessant absolument de nuire, dans un monde où toute vie en consomme une autre ?",
    coreBeliefs: [
      {
        title: 'Ahimsa absolue',
        text: "La non-violence s'étend aux insectes, aux plantes et jusqu'aux êtres à un seul sens (nigoda) présents dans l'eau, l'air, le feu et la terre. Les moines balaient le sol devant eux, filtrent leur eau, portent parfois un masque, ne mangent ni racines ni tubercules (dont l'arrachage tue la plante entière).",
      },
      {
        title: 'Anekantavada',
        text: "« Non-unilatéralité » : toute assertion n'est vraie que sous un certain point de vue. La célèbre parabole des aveugles et de l'éléphant en est l'illustration. Corollaire : syadvada, la doctrine du « en un sens », qui produit une logique à sept valeurs. C'est aussi une éthique intellectuelle — le dogmatisme est une forme de violence.",
      },
      {
        title: 'Karma matériel',
        text: "Différence importante avec l'hindouisme et le bouddhisme : le karma est ici une substance subtile qui adhère physiquement à l'âme et l'alourdit. La libération consiste à en arrêter l'afflux (samvara) puis à l'épuiser (nirjara) par l'ascèse.",
      },
      {
        title: 'Univers sans créateur',
        text: "L'univers est éternel, non créé, régi par des lois. Les dieux existent mais sont eux-mêmes prisonniers du cycle. Les 24 Tirthankara (« passeurs de gué ») ne sont pas des sauveurs mais des modèles ayant montré le chemin — Mahavira est le 24e, Parshvanatha (IXe-VIIIe s. av. J.-C.) le 23e et probablement historique.",
      },
    ],
    practices: [
      {
        title: 'Les cinq vœux',
        text: "Non-violence, véracité, non-vol, chasteté, non-possession. Sous forme atténuée (anuvrata) pour les laïcs, absolue (mahavrata) pour les moines.",
      },
      {
        title: 'Ascèse et jeûne',
        text: "Jeûnes fréquents, notamment pendant Paryushana. Le sallekhana, jeûne volontaire jusqu'à la mort chez le vieillard ou le malade incurable, est un rite reconnu — juridiquement contesté en Inde, distingué du suicide par l'absence de passion et la préparation communautaire.",
      },
      {
        title: 'Métiers sans violence',
        text: "Agriculture et armée étant exclues, les jaïns se sont concentrés dans le commerce, la finance et l'édition. Cette contrainte religieuse explique la prospérité et l'influence d'une communauté qui représente 0,4 % de la population indienne mais une part très supérieure de ses impôts et de sa philanthropie.",
      },
    ],
    ethics: [
      {
        title: 'Végétarisme strict et végétalisme',
        text: "Ni viande, ni poisson, ni œufs ; souvent ni miel, ni alcool, ni légumes-racines ; repas pris avant le coucher du soleil pour éviter de tuer des insectes invisibles. Le jaïnisme est probablement la tradition la plus rigoureuse au monde en matière alimentaire.",
      },
      {
        title: 'Aparigraha — non-possession',
        text: "L'attachement matériel lie l'âme. Les moines digambara vont nus ; les laïcs sont invités à limiter volontairement leurs biens. Une critique de la consommation formulée il y a 2 500 ans.",
      },
      {
        title: 'Institutions de soin animal',
        text: "Les panjrapole, hôpitaux et refuges pour animaux blessés ou âgés, sont une invention jaïne toujours vivante.",
      },
    ],
    history: [
      {
        title: 'Origines et Mahavira',
        text: "Le jaïnisme s'inscrit dans le courant shramana (ascètes errants) qui conteste, au VIe siècle av. J.-C., l'autorité védique et le sacrifice sanglant. Vardhamana Mahavira, contemporain du Bouddha, réforme et structure la communauté après douze ans d'ascèse.",
      },
      {
        title: 'Schisme et diffusion',
        text: "Vers le Ier siècle apr. J.-C., séparation entre Digambara (« vêtus de ciel », nus, qui estiment qu'une femme doit d'abord renaître homme) et Shvetambara (« vêtus de blanc », qui admettent la libération des femmes et dont la 19e Tirthankara Malli est une femme). Le jaïnisme prospère au Gujarat, au Rajasthan et au Karnataka, sous patronage royal.",
      },
      {
        title: 'Influence moderne',
        text: "Gandhi, élevé au Gujarat dans un milieu marqué par le jaïnisme et conseillé par le jaïn Raychandbhai Mehta, transpose ahimsa et anekantavada dans l'action politique. Par lui, une éthique monastique indienne devient un instrument de lutte anticoloniale, puis un modèle pour les droits civiques américains.",
      },
    ],
    branches: [
      {
        name: 'Digambara',
        when: 'Ier s. apr. J.-C.',
        description:
          "Moines entièrement nus, canon ancien tenu pour perdu, libération féminine impossible sans renaissance masculine. Principalement au Karnataka et au Maharashtra.",
      },
      {
        name: 'Shvetambara',
        when: 'Ier s. apr. J.-C.',
        description:
          "Moines vêtus de blanc, conservation des Agama, moniales nombreuses (elles sont majoritaires parmi les ascètes jaïns). Gujarat, Rajasthan.",
      },
      {
        name: 'Sthanakavasi et Terapanth',
        when: 'XVe et XVIIIe s.',
        description: "Réformes iconoclastes rejetant le culte des images et les grands temples.",
      },
    ],
    keyTexts: ['agamas-jain', 'tattvartha-sutra'],
    keyFigures: ['mahavira', 'parshvanatha', 'umasvati', 'hemachandra', 'gandhi'],
    influencedBy: ['sramana', 'religion-vedique'],
    influenced: ['hindouisme', 'bouddhisme', 'gandhisme', 'ecologie-profonde'],
    misconceptions: [
      {
        claim: '« Le jaïnisme est une secte de l’hindouisme. »',
        reality:
          "C'est une religion indépendante, plus ancienne que la plupart des formes actuelles d'hindouisme, avec sa propre métaphysique (âmes multiples, absence de brahman, absence de créateur) et son propre canon. Le droit indien l'a longtemps classée sous l'hindouisme, ce que les jaïns contestent.",
      },
      {
        claim: '« Mahavira a fondé le jaïnisme. »',
        reality:
          "Il est le 24e Tirthankara ; son prédécesseur Parshvanatha est tenu pour historique par de nombreux chercheurs. Mahavira réforme une tradition existante.",
      },
    ],
    contribution:
      "L'éthique de non-violence la plus conséquente jamais formulée, source directe du gandhisme ; l'anekantavada, l'une des rares doctrines religieuses à intégrer la pluralité des points de vue comme principe et non comme concession ; une contribution ancienne aux mathématiques indiennes ; un modèle de rapport non exploiteur au vivant qui inspire l'éthique animale et environnementale contemporaine.",
    livingDebates: [
      "Légalité du sallekhana en droit indien",
      "Nudité monastique digambara et statut des femmes",
      "Adaptation de l'ahimsa à l'économie industrielle et à l'agriculture moderne",
    ],
  },

  // =========================================================================
  {
    id: 'sikhisme',
    name: 'Sikhisme',
    family: 'dharmique',
    founded: '1499-1708',
    foundedYear: 1499,
    origin: 'Pendjab',
    adherents: '≈ 30 millions',
    symbol: '☬',
    color: '#e8842c',
    tagline: 'Un Dieu sans forme, un travail honnête, un repas partagé par tous.',
    summary:
      "Fondé par Guru Nanak dans le Pendjab au tournant du XVIe siècle, le sikhisme professe un monothéisme sans image, rejette caste, rituel formel et ascétisme, et enchâsse sa spiritualité dans la vie ordinaire : travailler honnêtement, partager, se souvenir de Dieu.",
    essence:
      "Il n'y a qu'un seul Réel (Ik Onkar), sans forme, présent en tout. Nul besoin de renoncer au monde, de payer un prêtre ou de naître dans la bonne caste : la libération se joue dans une vie de famille menée avec droiture, mémoire et générosité. Le repas communautaire, où le roi et le mendiant s'assoient au même niveau, est la doctrine mise en actes.",
    centralQuestion: "Comment être pleinement engagé dans le monde — travail, famille, justice — tout en demeurant tourné vers Dieu ?",
    coreBeliefs: [
      {
        title: 'Ik Onkar',
        text: "Le Guru Granth Sahib s'ouvre sur le Mul Mantar : « Il n'y a qu'un Être, Vérité est son nom, créateur, sans peur, sans haine, hors du temps, non né, existant par lui-même, connu par la grâce du guru. » Dieu est nirgun (sans attributs) et sargun (présent en toute chose) à la fois.",
      },
      {
        title: 'Le Guru',
        text: "Dix gurus humains de Nanak (1469-1539) à Gobind Singh (1666-1708), après quoi la fonction passe définitivement à l'Écriture, le Guru Granth Sahib, traité comme un guru vivant : on l'installe sur un trône, on l'évente, on le couche la nuit.",
      },
      {
        title: 'Karma, renaissance et grâce',
        text: "Le sikhisme conserve karma et renaissance mais y ajoute la centralité de la grâce divine (nadar) et du nam simran, le souvenir constant du Nom, qui dissout le haumai — l'ego qui sépare de Dieu.",
      },
      {
        title: 'Rejet des médiations',
        text: "Ni caste, ni prêtres, ni idoles, ni pèlerinage obligatoire, ni ascèse, ni jeûne rituel. Nanak, sur ce point, tranche autant avec l'hindouisme brahmanique qu'avec le formalisme musulman de son temps.",
      },
    ],
    practices: [
      {
        title: 'Les trois piliers',
        text: "Naam Japna (méditer le Nom divin), Kirat Karni (gagner sa vie honnêtement par son travail), Vand Chakna (partager avec autrui). Une spiritualité intégralement laïque au sens où elle ne demande aucun retrait du monde.",
      },
      {
        title: 'Le langar',
        text: "Cuisine communautaire attachée à chaque gurdwara, servant gratuitement à toute personne, quelles que soient sa religion, sa caste ou sa condition, assise par terre au même rang. Le Temple d'Or d'Amritsar sert environ 100 000 repas par jour. C'est probablement la critique des castes la plus efficace jamais mise en œuvre.",
      },
      {
        title: 'Les cinq K du Khalsa',
        text: "Kesh (cheveux non coupés, couverts du turban), Kangha (peigne), Kara (bracelet d'acier), Kachera (sous-vêtement), Kirpan (épée courte). Institués par Gobind Singh en 1699 : une identité visible, assumée, impossible à dissimuler en temps de persécution.",
      },
      {
        title: 'Kirtan et gurdwara',
        text: "Le culte consiste essentiellement à chanter les hymnes du Guru Granth Sahib, composés sur 31 modes musicaux (raga) précisés dans le texte. Le gurdwara est ouvert à tous, avec quatre portes symbolisant l'accueil des quatre directions.",
      },
    ],
    ethics: [
      {
        title: 'Égalité radicale',
        text: "Nanak : « Il n'y a ni hindou ni musulman. » Égalité des castes et des sexes affirmée au XVIe siècle : les femmes peuvent diriger le culte, lire l'Écriture, être initiées au Khalsa. Toutes les initiées portent le nom de Kaur (« princesse »), les initiés celui de Singh (« lion ») — abolissant le nom de caste.",
      },
      {
        title: 'Défense du faible',
        text: "Le concept de sant-sipahi (« saint-soldat ») : les armes ne sont légitimes qu'en dernier recours pour défendre l'opprimé, y compris d'une autre religion. Guru Tegh Bahadur est décapité en 1675 pour avoir défendu le droit des hindous cachemiris à pratiquer leur foi.",
      },
      {
        title: 'Seva',
        text: "Le service désintéressé — cuisiner, nettoyer les chaussures des visiteurs, soigner — est une pratique spirituelle centrale, pas une œuvre annexe.",
      },
    ],
    history: [
      {
        title: 'Nanak et les gurus (1499-1708)',
        text: "Après une expérience mystique à 30 ans, Nanak voyage et prêche pendant deux décennies. Ses successeurs construisent la communauté : Angad codifie l'écriture gurmukhi, Amar Das institutionnalise le langar, Ram Das fonde Amritsar, Arjan compile l'Adi Granth (1604) et devient le premier martyr (1606), Hargobind prend les armes, Tegh Bahadur est martyrisé, Gobind Singh crée le Khalsa (1699) et clôt la lignée humaine.",
      },
      {
        title: 'Empire et colonisation (1799-1947)',
        text: "Ranjit Singh fonde un empire sikh au Pendjab (1799-1849), remarquable par sa tolérance religieuse. Annexion britannique en 1849 ; les sikhs deviennent un contingent majeur de l'armée coloniale. Massacre d'Amritsar en 1919.",
      },
      {
        title: 'Partition et époque contemporaine',
        text: "La partition de 1947 coupe le Pendjab en deux : environ un million de morts et des millions de déplacés, les sikhs parmi les plus touchés. 1984 : assaut de l'armée indienne sur le Temple d'Or (opération Blue Star), assassinat d'Indira Gandhi, pogroms anti-sikhs à Delhi. Diaspora importante au Canada, au Royaume-Uni et aux États-Unis, où les sikhs sont fréquemment confondus avec des musulmans et victimes de violences post-11 septembre.",
      },
    ],
    branches: [
      {
        name: 'Khalsa',
        when: '1699',
        description: "Communauté des initiés (amritdhari) portant les cinq K et suivant le code de conduite (Rehat Maryada).",
      },
      {
        name: 'Sahajdhari',
        when: 'Continu',
        description: "Sikhs non initiés, qui suivent l'enseignement sans les marques extérieures.",
      },
      {
        name: 'Namdhari, Nirankari, Udasi',
        when: 'XIXe s. et antérieur',
        description:
          "Courants marginaux, dont certains reconnaissent une succession de gurus vivants — position rejetée par le sikhisme majoritaire.",
      },
    ],
    keyTexts: ['guru-granth-sahib', 'dasam-granth'],
    keyFigures: ['guru-nanak', 'guru-arjan', 'guru-tegh-bahadur', 'guru-gobind-singh', 'kabir'],
    influencedBy: ['hindouisme', 'islam', 'bhakti', 'soufisme'],
    influenced: [],
    misconceptions: [
      {
        claim: '« Le sikhisme est un mélange d’hindouisme et d’islam. »',
        reality:
          "Il naît dans un contexte de contact et partage du vocabulaire avec les deux, mais se conçoit comme une révélation propre. Il rejette aussi bien l'incarnation divine et les castes hindoues que la finalité prophétique et la loi rituelle musulmanes.",
      },
      {
        claim: '« Le turban est un signe islamique. »',
        reality:
          "Le turban sikh (dastar) couvre les cheveux non coupés du Khalsa et n'a aucun rapport avec l'islam. Cette confusion a coûté des vies, notamment aux États-Unis après 2001.",
      },
    ],
    contribution:
      "L'institutionnalisation la plus concrète de l'égalité — le langar, servi quotidiennement à des millions de personnes ; une spiritualité pleinement compatible avec la vie familiale et le travail ; un modèle d'engagement armé strictement subordonné à la défense d'autrui, y compris d'une autre foi ; l'un des rares cas où une écriture sainte inclut les poèmes de saints d'autres religions (Kabir, Farid, Ravidas y figurent).",
    livingDebates: [
      "Identité sikhe et revendications politiques du Khalistan",
      "Persistance officieuse de la caste dans les mariages et certains gurdwaras",
      "Port du kirpan et des cinq K dans les sociétés laïques",
      "Autorité religieuse : qui interprète le Guru Granth Sahib ?",
    ],
  },

  // =========================================================================
  {
    id: 'taoisme',
    name: 'Taoïsme',
    altNames: ['Daoisme'],
    family: 'est-asiatique',
    founded: 'Textes fondateurs IVe-IIIe s. av. J.-C. ; religion organisée IIe s. apr. J.-C.',
    foundedYear: -350,
    origin: 'Chine',
    adherents: '≈ 12-20 millions déclarés, influence culturelle sur des centaines de millions',
    symbol: '☯',
    color: '#4f8ba8',
    tagline: 'Épouser le courant plutôt que le forcer.',
    summary:
      "Le taoïsme désigne à la fois une philosophie (Laozi, Zhuangzi) et une religion organisée avec clergé, liturgie et panthéon. Son intuition centrale : il existe un principe indicible, le Dao, dont procède tout ce qui est ; l'humain souffre de vouloir contrarier ce mouvement, et se rétablit en accordant son action à lui.",
    essence:
      "Le vrai ne se saisit pas : « Le Dao qu'on peut nommer n'est pas le Dao constant. » L'efficacité maximale vient du non-agir (wu wei) — non l'inaction, mais l'action sans forçage, comme l'eau qui use la pierre en cédant. Le faible vainc le fort, le vide rend le plein utilisable.",
    centralQuestion: "Comment agir sans forcer, gouverner sans opprimer, vivre sans se raidir contre ce qui vient ?",
    coreBeliefs: [
      {
        title: 'Le Dao',
        text: "Principe ineffable, antérieur au ciel et à la terre, source et retour de tout. Ni personne ni volonté : un fonctionnement plutôt qu'un être. C'est ce qui rend le taoïsme structurellement étranger à la question « Dieu existe-t-il ? ».",
      },
      {
        title: 'Wu wei',
        text: "Non-agir, ou agir sans intervention forcée. Le sage gouverne « comme on fait cuire un petit poisson » : le moins possible. Le paradoxe est fécond en politique (critique de l'interventionnisme), en art (le geste juste et sans effort) et en éthique.",
      },
      {
        title: 'Yin et yang, qi',
        text: "Deux polarités complémentaires et non morales — ni bien ni mal — dont l'alternance produit les phénomènes. Le qi, souffle-énergie, circule dans le cosmos comme dans le corps ; sa régulation fonde la médecine chinoise, l'acupuncture, le qigong et le taijiquan.",
      },
      {
        title: 'Ziran',
        text: "« De soi-même ainsi » : la spontanéité, l'auto-engendrement du réel. L'idéal n'est pas la vertu volontaire mais le retour à un naturel non contraint — position en tension explicite avec le confucianisme et ses rites.",
      },
      {
        title: 'Longévité et immortalité',
        text: "Le taoïsme religieux développe une quête de longue vie puis d'immortalité : alchimie externe (waidan, élixirs — qui empoisonna plusieurs empereurs), puis alchimie interne (neidan), où l'élixir est produit par la circulation des énergies dans le corps même.",
      },
    ],
    practices: [
      {
        title: 'Méditation et gymnastiques',
        text: "« Assise dans l'oubli » (zuowang), respiration embryonnaire, visualisation des divinités internes, taijiquan et qigong. Le corps est ici un paysage habité, non un obstacle.",
      },
      {
        title: 'Liturgie et talismans',
        text: "Le clergé taoïste (daoshi) célèbre des rituels complexes (jiao de renouvellement cosmique, rites funéraires), rédige des placets adressés aux divinités célestes et des talismans (fu) protecteurs.",
      },
      {
        title: 'Panthéon et temples',
        text: "Empereur de Jade, Trois Purs, Immortels, dieux locaux. Dans la pratique populaire chinoise, taoïsme, bouddhisme et culte des ancêtres se combinent sans que le fidèle éprouve le besoin de choisir.",
      },
    ],
    ethics: [
      {
        title: 'Les trois trésors',
        text: "« J'ai trois trésors que je garde : la compassion, la frugalité, et ne pas oser être le premier au monde » (Daodejing 67). Une éthique de la modestie et de la retenue.",
      },
      {
        title: 'Relativité des valeurs',
        text: "Zhuangzi démonte les oppositions rigides : le rêve du papillon, l'arbre inutile qui survit parce qu'il ne vaut rien pour le charpentier. Ce relativisme n'est pas nihiliste, il libère de la tyrannie des catégories.",
      },
      {
        title: 'Critique du pouvoir',
        text: "« Plus il y a de lois, plus il y a de voleurs. » Le taoïsme fournit à la Chine une contre-culture antipolitique durable, refuge des lettrés disgraciés et des ermites.",
      },
    ],
    history: [
      {
        title: 'Textes fondateurs (IVe-IIIe s. av. J.-C.)',
        text: "Le Daodejing, attribué à un Laozi probablement légendaire, est une compilation ; le Zhuangzi, d'une inventivité littéraire éblouissante, en est le pendant. Les manuscrits de Guodian (~300 av. J.-C.) et de Mawangdui ont bouleversé la datation de ces textes.",
      },
      {
        title: 'Naissance de la religion (142-500)',
        text: "En 142, Zhang Daoling reçoit une révélation de Laozi divinisé et fonde les Maîtres Célestes, avec hiérarchie, taxe (« cinq boisseaux de riz ») et confession des fautes. Suivent les révélations du Shangqing (364-370) et du Lingbao : le taoïsme se dote d'un canon (Daozang), d'un clergé et d'une liturgie.",
      },
      {
        title: 'Âge d’or et confrontation avec le bouddhisme (VIIe-XIIIe s.)',
        text: "Religion d'État sous les Tang, dont la dynastie se dit descendante de Laozi. Emprunts mutuels intenses avec le bouddhisme : le Chan doit beaucoup au vocabulaire taoïste, le taoïsme adopte monastères et cosmologies bouddhiques. Fondation de l'école Quanzhen (XIIe s.), monastique et végétarienne.",
      },
      {
        title: 'Époque contemporaine',
        text: "Répression sous la République puis la Révolution culturelle ; renaissance depuis les années 1980, encadrée par l'Association taoïste de Chine. Diffusion mondiale du taijiquan, du feng shui et du Yijing, souvent détachés de leur cadre religieux.",
      },
    ],
    branches: [
      {
        name: 'Zhengyi (Maîtres Célestes)',
        when: '142',
        description: "Prêtres mariés, héréditaires, liturgie rituelle et talismanique. Dominant à Taïwan et dans le sud de la Chine.",
      },
      {
        name: 'Quanzhen',
        when: '1170',
        description: "Monastique, célibataire, végétarienne, tournée vers l'alchimie intérieure ; syncrétise taoïsme, bouddhisme et confucianisme.",
      },
    ],
    keyTexts: ['daodejing', 'zhuangzi', 'liezi', 'yijing', 'taipingjing'],
    keyFigures: ['laozi', 'zhuangzi', 'zhang-daoling', 'ge-hong', 'wang-chongyang'],
    influencedBy: ['religion-chinoise-ancienne', 'chamanisme-chinois'],
    influenced: ['bouddhisme', 'confucianisme', 'shintoisme', 'medecine-chinoise', 'contreculture-occidentale'],
    misconceptions: [
      {
        claim: '« Le taoïsme, c’est le Yin et le Yang. »',
        reality:
          "Le couple yin/yang appartient à la cosmologie chinoise commune (École du Yin-Yang, Yijing) et se retrouve tout autant dans le confucianisme et la médecine. Le taoïsme s'en sert, il ne l'invente pas.",
      },
      {
        claim: '« Wu wei signifie ne rien faire. »',
        reality:
          "Il s'agit d'agir sans forcer ni contrarier la tendance des choses — plus proche du geste de l'artisan expert ou du nageur qui suit le courant que de la passivité.",
      },
      {
        claim: '« Laozi a écrit le Daodejing au VIe siècle av. J.-C. »',
        reality:
          "Les recherches actuelles considèrent Laozi comme une figure composite et le texte comme une compilation progressive, achevée vers le IIIe siècle av. J.-C.",
      },
    ],
    contribution:
      "Une pensée de l'efficacité indirecte et du non-forçage qui influence stratégie, management, arts martiaux et écologie ; la médecine chinoise et les techniques du corps ; une esthétique du vide et du non-dit qui structure la peinture et la poésie d'Extrême-Orient ; une critique libertaire précoce de l'appareil d'État.",
    livingDebates: [
      "Encadrement du religieux par l'État chinois",
      "Taoïsme comme religion ou comme sagesse séculière en Occident",
      "Commercialisation du feng shui et des pratiques dérivées",
    ],
  },

  // =========================================================================
  {
    id: 'confucianisme',
    name: 'Confucianisme',
    altNames: ['Rujia', 'École des lettrés'],
    family: 'est-asiatique',
    founded: 'Ve siècle av. J.-C.',
    foundedYear: -500,
    origin: 'Chine (État de Lu)',
    adherents: 'Influence culturelle sur ≈ 1,5 milliard de personnes',
    symbol: '儒',
    color: '#a8564f',
    tagline: 'Devenir pleinement humain dans la relation à autrui.',
    summary:
      "Ni église ni révélation : le confucianisme est un projet de culture morale de la personne et de la société, centré sur la famille, le rite, l'étude et la responsabilité du gouvernant. Sa question n'est pas le salut de l'âme mais la qualité du lien social.",
    essence:
      "On ne naît pas humain, on le devient — par l'éducation, l'exercice des rites et le soin des relations. La bienveillance (ren) se cultive comme une plante. Une société juste ne résulte pas de bonnes lois mais de personnes devenues bonnes, à commencer par ceux qui gouvernent.",
    centralQuestion: "Comment devenir une personne accomplie, et comment un tel devenir peut-il ordonner la famille, l'État et le monde ?",
    coreBeliefs: [
      {
        title: 'Ren — l’humanité bienveillante',
        text: "La vertu cardinale : le caractère associe « humain » et « deux ». Être humain, c'est être-avec. Ren ne se définit pas abstraitement ; Confucius y répond différemment selon le disciple qui l'interroge — la vertu est située.",
      },
      {
        title: 'Li — les rites',
        text: "Bien plus que l'étiquette : les formes justes de la conduite, du salut à la cérémonie funéraire. Les rites façonnent l'intériorité en formant le corps. « Se maîtriser et revenir aux rites, voilà l'humanité » (Entretiens 12,1).",
      },
      {
        title: 'Xiao — la piété filiale',
        text: "Racine de toutes les vertus. Le respect dû aux parents et aux ancêtres est le prototype de tout lien social. Le culte des ancêtres n'est pas une superstition annexe : il fonde la continuité du groupe dans le temps.",
      },
      {
        title: 'Les cinq relations',
        text: "Souverain/sujet, père/fils, mari/femme, aîné/cadet, ami/ami. Hiérarchiques mais réciproques : le supérieur doit protection et exemple, l'inférieur loyauté. Quatre de ces cinq relations sont asymétriques — c'est le point le plus critiqué par la modernité.",
      },
      {
        title: 'Junzi et mandat du Ciel',
        text: "Le junzi, l'« homme de bien », remplace l'aristocrate de naissance par l'aristocrate de mérite : révolution sociale majeure. Le Ciel (Tian) confie au souverain un mandat conditionnel ; s'il gouverne mal, le mandat lui est retiré — doctrine qui a légitimé nombre de révoltes chinoises.",
      },
      {
        title: 'Nature humaine : le grand débat',
        text: "Mencius soutient que la nature humaine est bonne et qu'il suffit de la cultiver ; Xunzi qu'elle est mauvaise et que les rites la redressent. Ce débat structure toute la pensée chinoise ultérieure — et rejoint, sans contact, la controverse occidentale sur le péché originel.",
      },
    ],
    practices: [
      {
        title: 'Culte des ancêtres',
        text: "Tablettes, offrandes, entretien des tombes, fête de Qingming. La mémoire familiale est l'institution religieuse centrale du monde chinois.",
      },
      {
        title: 'Étude des classiques',
        text: "Les Quatre Livres et les Cinq Classiques ont fondé, de 605 à 1905, le système des examens impériaux — première méritocratie bureaucratique de l'histoire, imitée plus tard par les fonctions publiques européennes.",
      },
      {
        title: 'Rites de passage et deuil',
        text: "Capping, mariage, funérailles, deuil de trois ans pour un parent. La ritualisation de la mort est le laboratoire de l'éthique confucéenne.",
      },
    ],
    ethics: [
      {
        title: 'La règle d’or négative',
        text: "« Ce que tu ne souhaites pas pour toi-même, ne l'impose pas à autrui » (Entretiens 15,24). Formulation antérieure d'un siècle à celle de Hillel, avec la même prudence négative.",
      },
      {
        title: 'Réciprocité et loyauté',
        text: "Shu (réciprocité, empathie par analogie avec soi) et zhong (loyauté, fidélité à sa fonction) forment, selon un disciple, « le fil unique » de l'enseignement du maître.",
      },
      {
        title: 'Devoir de remontrance',
        text: "Le ministre confucéen doit avertir le souverain qui s'égare, au péril de sa vie. Le confucianisme n'est donc pas la doctrine d'obéissance qu'on lui prête souvent : Mencius admet le tyrannicide.",
      },
    ],
    history: [
      {
        title: 'Confucius et les premiers disciples (551-479 av. J.-C.)',
        text: "Kongzi, fonctionnaire subalterne de l'État de Lu, échoue à obtenir un poste d'influence et enseigne. Ses paroles sont recueillies après sa mort dans les Entretiens (Lunyu). Mencius (IVe s.) et Xunzi (IIIe s.) développent deux lectures opposées.",
      },
      {
        title: 'Institutionnalisation (IIe s. av. J.-C.)',
        text: "Après la persécution légiste des Qin, la dynastie Han fait du confucianisme l'idéologie d'État (Dong Zhongshu, ~136 av. J.-C.), et instaure l'académie impériale. La doctrine devient la grammaire du pouvoir chinois pour deux millénaires.",
      },
      {
        title: 'Néo-confucianisme (XIe-XVIe s.)',
        text: "Confrontés au bouddhisme, Zhu Xi (1130-1200) puis Wang Yangming (1472-1529) refondent la doctrine avec une métaphysique du principe (li) et du souffle (qi), et une pratique de l'introspection. Cette synthèse s'exporte en Corée (où elle devient hégémonique), au Japon et au Vietnam.",
      },
      {
        title: 'Rejet et retour (XXe-XXIe s.)',
        text: "Le Mouvement du 4 mai 1919 accuse le confucianisme d'avoir figé la Chine ; la Révolution culturelle le persécute violemment. Depuis les années 1990, réhabilitation officielle : Instituts Confucius, « société harmonieuse », et un courant intellectuel de « nouveau confucianisme » qui cherche à le concilier avec les droits humains et la démocratie.",
      },
    ],
    branches: [
      {
        name: 'Confucianisme classique',
        when: 'Ve-IIIe s. av. J.-C.',
        description: "Confucius, Mencius, Xunzi. Éthique, politique, rite.",
      },
      {
        name: 'Néo-confucianisme (Lixue)',
        when: 'XIe-XIIIe s.',
        description: "Zhu Xi. Métaphysique du li, « investigation des choses », orthodoxie des examens jusqu'en 1905.",
      },
      {
        name: 'École de l’esprit (Xinxue)',
        when: 'XVe-XVIe s.',
        description: "Wang Yangming : le principe est dans l'esprit ; unité du savoir et de l'action. Grande influence au Japon.",
      },
      {
        name: 'Nouveau confucianisme',
        when: 'XXe-XXIe s.',
        description: "Mou Zongsan, Tu Weiming : dialogue avec Kant, la démocratie et les droits de l'homme.",
      },
    ],
    keyTexts: ['entretiens-confucius', 'mencius', 'grande-etude', 'invariable-milieu', 'yijing', 'classique-piete-filiale'],
    keyFigures: ['confucius', 'mencius', 'xunzi', 'zhu-xi', 'wang-yangming', 'dong-zhongshu'],
    influencedBy: ['religion-chinoise-ancienne'],
    influenced: ['taoisme', 'bouddhisme', 'shintoisme', 'neoconfucianisme-coreen', 'lumieres-europeennes'],
    misconceptions: [
      {
        claim: '« Le confucianisme n’est pas une religion. »',
        reality:
          "Il n'a ni dieu créateur ni salut individuel, mais il comporte un Ciel normatif, des rites, un culte des ancêtres, des temples et une orthodoxie. La question révèle surtout l'étroitesse de la définition occidentale de « religion ».",
      },
      {
        claim: '« Le confucianisme prône l’obéissance aveugle. »',
        reality:
          "Mencius légitime le renversement du tyran, et la tradition impose au lettré le devoir de remontrance. C'est le confucianisme d'État, impérial puis autoritaire, qui a sélectionné la seule composante d'obéissance.",
      },
    ],
    contribution:
      "L'idée que le mérite et l'éducation, non la naissance, doivent qualifier les gouvernants ; le premier système d'examens de la fonction publique ; une éthique relationnelle, aujourd'hui redécouverte par le care et l'éthique de la vertu ; une conception de la personne comme nœud de relations plutôt que comme individu isolé ; la matrice culturelle commune de la Chine, de la Corée, du Japon et du Vietnam.",
    livingDebates: [
      "Compatibilité avec la démocratie et les droits individuels",
      "Instrumentalisation par le pouvoir chinois contemporain",
      "Hiérarchie de genre et féminisme confucéen",
      "Confucianisme et capitalisme est-asiatique",
    ],
  },

  // =========================================================================
  {
    id: 'shintoisme',
    name: 'Shintoïsme',
    altNames: ['Shintō', 'la voie des kami'],
    family: 'est-asiatique',
    founded: 'Immémorial ; nommé au VIe s. par contraste avec le bouddhisme',
    foundedYear: -300,
    origin: 'Archipel japonais',
    adherents: '≈ 100 millions de pratiquants rituels au Japon',
    symbol: '⛩',
    color: '#c9556b',
    tagline: 'Le sacré affleure partout : dans la cascade, l’arbre, l’ancêtre, l’empereur.',
    summary:
      "Le shintō est la religion indigène du Japon : un ensemble de cultes rendus aux kami, présences sacrées associées à des lieux, des phénomènes naturels, des ancêtres ou des héros. Il privilégie la pureté et le rite sur la doctrine, et n'a longtemps eu ni fondateur, ni écriture normative, ni nom.",
    essence:
      "Le sacré n'est pas ailleurs : il est ce qui, dans ce monde-ci, force le respect — un rocher, une cascade, un vieil arbre, un ancêtre. La faute majeure n'est pas le péché moral mais la souillure (kegare), qui se lave. Vivre bien, c'est rester en relation juste avec ces présences et avec la communauté.",
    centralQuestion: "Comment rester pur et en accord avec les présences sacrées qui habitent ce monde-ci ?",
    coreBeliefs: [
      {
        title: 'Les kami',
        text: "Yaoyorozu no kami, « les huit millions de kami » : le nombre signifie l'innombrable. Amaterasu (soleil), Susanoo, Inari (riz et commerce), mais aussi des montagnes, des empereurs défunts, des morts au combat. Un kami n'est pas nécessairement bon : il est puissant et demande égard.",
      },
      {
        title: 'Pureté et souillure',
        text: "Kegare (souillure liée à la mort, au sang, à la maladie) s'oppose à harae, la purification. D'où l'ablution avant d'entrer dans un sanctuaire, le sel jeté sur le ring de sumo, le rite de purification des voitures neuves.",
      },
      {
        title: 'Pas de dogme ni de salut',
        text: "Le shintō n'a ni credo, ni théodicée, ni eschatologie développée. Il ne concurrence donc pas le bouddhisme : la plupart des Japonais se marient au sanctuaire shintō et sont enterrés selon le rite bouddhique, sans contradiction ressentie.",
      },
    ],
    practices: [
      {
        title: 'Le sanctuaire (jinja)',
        text: "Torii marquant le seuil, bassin d'ablution, corde shimenawa délimitant le sacré. On sonne, on s'incline deux fois, on frappe deux fois dans ses mains, on prie, on s'incline. Environ 80 000 sanctuaires au Japon.",
      },
      {
        title: 'Matsuri',
        text: "Fêtes où le kami est porté en procession dans un palanquin (mikoshi) à travers le quartier : le sacré visite la communauté. Moments d'effervescence collective essentiels à la vie sociale japonaise.",
      },
      {
        title: 'Rites du quotidien',
        text: "Autel domestique (kamidana), amulettes (omamori), oracles (omikuji), ex-voto de bois (ema), première visite de l'année (hatsumōde) qui rassemble chaque janvier des dizaines de millions de personnes.",
      },
    ],
    ethics: [
      {
        title: 'Makoto — la sincérité',
        text: "Plutôt qu'un code moral, une exigence d'authenticité et de droiture du cœur dans l'accomplissement du rite et du devoir.",
      },
      {
        title: 'Harmonie et gratitude',
        text: "Reconnaissance envers la nature, les ancêtres et la communauté. L'éthique shintō est moins prescriptive qu'orientée vers l'ajustement des relations.",
      },
    ],
    history: [
      {
        title: 'Origines et mise par écrit',
        text: "Cultes locaux immémoriaux. Le Kojiki (712) et le Nihon Shoki (720) fixent les mythes — naissance des îles par Izanagi et Izanami, retrait d'Amaterasu dans la grotte — dans un but politique : légitimer la descendance solaire de la maison impériale.",
      },
      {
        title: 'Symbiose avec le bouddhisme (VIe-XIXe s.)',
        text: "Le shinbutsu-shūgō fusionne les deux : les kami sont interprétés comme des manifestations locales de bouddhas. Sanctuaires et temples cohabitent souvent dans la même enceinte pendant plus de mille ans.",
      },
      {
        title: 'Shintō d’État (1868-1945)',
        text: "La restauration Meiji sépare de force shintō et bouddhisme, nationalise les sanctuaires et fait du culte impérial un devoir civique — instrument du nationalisme et de l'expansion militaire. Le sanctuaire Yasukuni, où sont honorés des criminels de guerre, reste une plaie diplomatique.",
      },
      {
        title: 'Après 1945',
        text: "L'empereur renonce à sa nature divine (1946) ; le shintō est désétatisé. Il subsiste comme religiosité culturelle, largement rituelle et peu doctrinale, revivifiée par un souci écologique (forêts sacrées) et par sa présence dans la culture populaire (l'univers de Miyazaki).",
      },
    ],
    branches: [
      {
        name: 'Shintō des sanctuaires (jinja)',
        when: 'Principal',
        description: "Fédéré par l'Association des sanctuaires shintō. Culte local et national.",
      },
      {
        name: 'Shintō sectaire (kyōha)',
        when: 'XIXe s.',
        description: "Treize mouvements reconnus à l'ère Meiji : Tenrikyō, Konkōkyō, Kurozumikyō, avec fondateurs et doctrines propres.",
      },
      {
        name: 'Shintō populaire et nouvelles religions',
        when: 'Continu / XXe s.',
        description: "Cultes domestiques et de village ; nouvelles religions japonaises (Ōmoto, Sekai Kyūseikyō) issues de ce terreau.",
      },
    ],
    keyTexts: ['kojiki', 'nihon-shoki', 'engishiki'],
    keyFigures: ['amaterasu', 'jimmu', 'motoori-norinaga', 'nakayama-miki'],
    influencedBy: ['chamanisme-siberien', 'religion-chinoise-ancienne'],
    influenced: ['bouddhisme-japonais', 'nouvelles-religions-japonaises'],
    misconceptions: [
      {
        claim: '« Le shintoïsme est du polythéisme comme la Grèce antique. »',
        reality:
          "Les kami sont moins des personnalités mythologiques que des présences ou des qualités sacrées ; beaucoup n'ont ni récit ni figure. Le terme « animisme relationnel » est souvent plus juste.",
      },
      {
        claim: '« Les Japonais sont shintoïstes. »',
        reality:
          "La majorité ne se déclare d'aucune religion tout en participant aux rites shintō et bouddhiques. L'appartenance exclusive, présupposée par les sondages occidentaux, ne correspond pas à la pratique japonaise.",
      },
    ],
    contribution:
      "Une relation au sacré qui ne sépare pas la nature du divin, aujourd'hui mobilisée dans la réflexion écologique ; une esthétique de l'épure, du seuil et de l'impermanence qui a marqué l'architecture et le design mondiaux ; l'exemple d'une religiosité orthopraxique où le rite prime sur la croyance.",
    livingDebates: [
      "Yasukuni, mémoire de guerre et relations avec la Chine et la Corée",
      "Prêtresses et transmission héréditaire des sanctuaires",
      "Shintō et écologie : réappropriation ou nationalisme vert ?",
    ],
  },
];
