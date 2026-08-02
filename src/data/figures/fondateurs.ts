import type { Figure } from '../types';

export const figuresFondateurs: Figure[] = [
  // =========================================================================
  {
    id: 'abraham',
    name: 'Abraham',
    altNames: ['Avraham', 'Ibrahim', 'Abram'],
    traditions: ['judaisme', 'christianisme', 'islam', 'bahaisme', 'samaritanisme', 'druzisme'],
    role: 'Patriarche fondateur — le père des trois monothéismes',
    dates: 'Tradition : ≈ 2000-1800 av. J.-C.',
    sortYear: -1900,
    region: 'Ur en Chaldée → Harran → Canaan → Égypte',
    historicity: 'légendaire',
    historicityNote:
      "Aucune source extra-biblique ne mentionne Abraham. Les récits contiennent des anachronismes nets — chameaux domestiqués, Philistins, « Ur des Chaldéens » (les Chaldéens n'apparaissent qu'au premier millénaire). La recherche majoritaire y voit une figure fondatrice construite, probablement à partir de traditions de clans, et mise en forme entre le VIIIe et le Ve siècle av. J.-C. Cela ne diminue pas sa portée : son importance est théologique et identitaire, non archéologique.",
    summary:
      "Trois religions rassemblant plus de la moitié de l'humanité se réclament du même homme. Abraham est le premier personnage biblique à qui Dieu parle en s'engageant : il quitte tout sur une promesse, sans savoir où il va. Il est devenu le prototype universel de la foi comme confiance dans l'inconnu.",
    life: [
      {
        title: 'L’appel et le départ',
        text: "« Va-t'en de ton pays, de ta parenté et de la maison de ton père, vers le pays que je te montrerai » (Genèse 12,1). L'ordre est d'une brutalité remarquable : il commande une rupture totale, sans destination précisée. C'est ce départ, plus que toute doctrine, qui fonde la figure d'Abraham.",
      },
      {
        title: 'L’alliance et la circoncision',
        text: "Dieu promet une descendance nombreuse comme les étoiles et une terre. Le signe de l'alliance est inscrit dans la chair : la circoncision (Genèse 17). Abram devient Abraham, « père d'une multitude » — le changement de nom marque la refondation de l'identité.",
      },
      {
        title: 'Sarah, Agar, Isaac et Ismaël',
        text: "Sarah, longtemps stérile, donne sa servante Agar à Abraham : naît Ismaël. Puis Sarah enfante Isaac dans la vieillesse. Agar et Ismaël sont chassés au désert et sauvés par Dieu. De ces deux fils, la tradition juive et chrétienne fait descendre Israël par Isaac, la tradition musulmane fait descendre les Arabes par Ismaël. Toute la géopolitique religieuse du Proche-Orient s'enracine dans ce récit familial.",
      },
      {
        title: 'La ligature d’Isaac (Aqedah)',
        text: "Dieu ordonne le sacrifice du fils promis ; Abraham obéit jusqu'au dernier instant, où un ange l'arrête (Genèse 22). Dans le Coran (37,102-107), le fils — non nommé, identifié à Ismaël par la tradition majoritaire — est associé à la décision, ce qui déplace l'accent de l'obéissance vers le consentement partagé.",
      },
      {
        title: 'Le marchandage pour Sodome',
        text: "Épisode moins cité mais décisif (Genèse 18) : Abraham négocie avec Dieu le sort de Sodome, de cinquante justes jusqu'à dix. « Le juge de toute la terre n'agirait-il pas selon le droit ? » Un homme demande des comptes à Dieu au nom de la justice — geste inaugural d'une tradition de contestation religieuse qui traverse toute la Bible.",
      },
    ],
    teachings: [
      {
        title: 'La foi comme confiance, non comme adhésion',
        text: "Abraham n'énonce aucun dogme. Ce que la Bible appelle sa foi (emounah) est une fidélité éprouvée dans le temps, une capacité à tenir sur une promesse invérifiable. Paul en fera le modèle de la justification par la foi (Romains 4), Kierkegaard le paradigme du « saut » qui suspend l'éthique.",
      },
      {
        title: 'La rupture avec les idoles',
        text: "Un midrach juif — repris presque tel quel par le Coran (21,51-70) — raconte Abraham enfant brisant les idoles de son père fabricant. La rupture avec l'idolâtrie devient, dans l'islam, le cœur même du personnage : Ibrahim est hanif, monothéiste pur avant toute loi révélée.",
      },
      {
        title: 'L’hospitalité',
        text: "Aux chênes de Mamré, Abraham court au-devant de trois inconnus et les nourrit (Genèse 18). L'épisode est devenu, dans les trois traditions, l'icône de l'hospitalité sacrée — et, dans l'iconographie orthodoxe, une figure de la Trinité (l'icône de Roublev).",
      },
      {
        title: 'Le débat sur l’Aqedah',
        text: "Le texte ne dit rien des sentiments d'Abraham, ce qui a nourri deux millénaires d'interprétation : obéissance héroïque (tradition dominante), épreuve dont Abraham sort diminué (il ne reparle plus jamais à Isaac ni à Dieu), critique implicite du sacrifice d'enfants pratiqué par les voisins cananéens, ou — chez Kant — exemple de ce qu'il ne faut jamais faire.",
      },
    ],
    quotes: [
      { text: 'Va-t’en de ton pays, de ta parenté et de la maison de ton père, vers le pays que je te montrerai.', source: 'Genèse 12,1' },
      { text: 'Le juge de toute la terre n’agirait-il pas selon le droit ?', source: 'Genèse 18,25', comment: "La première contestation de Dieu par un humain au nom de la justice." },
      { text: 'Abraham n’était ni juif ni chrétien, mais il était un pur croyant soumis à Dieu.', source: 'Coran 3,67' },
    ],
    legacy:
      "Figure de convergence et de conflit : les trois monothéismes s'en réclament également, et chacun l'utilise pour se poser en héritier légitime. Depuis le XXe siècle, le terme « religions abrahamiques » sert de base au dialogue interreligieux — usage utile, mais qui masque des lectures radicalement divergentes du même personnage.",
    crossViews: [
      { tradition: 'judaisme', view: "Premier des trois patriarches, père du peuple par Isaac et Jacob. Modèle de hessed (bonté) et d'hospitalité. L'Aqedah est lue chaque Roch Hachana." },
      { tradition: 'christianisme', view: "« Père de tous les croyants » (Romains 4). Sa foi antérieure à la Loi prouve, pour Paul, que la justification ne vient pas des œuvres — argument central du christianisme paulinien." },
      { tradition: 'islam', view: "Ibrahim, khalil Allah (« l'ami de Dieu »), bâtisseur de la Kaaba avec Ismaël, instaurateur du hajj. Le sacrifice est commémoré chaque année par l'Aïd al-Adha, la plus grande fête musulmane." },
      { tradition: 'bahaisme', view: "Manifestation de Dieu à part entière, maillon d'une chaîne de révélations progressives." },
    ],
    relations: [
      { figureId: 'sarah', label: 'épouse' },
      { figureId: 'agar', label: 'seconde épouse / servante' },
      { figureId: 'isaac', label: 'fils' },
      { figureId: 'ismael', label: 'fils' },
      { figureId: 'jacob', label: 'petit-fils' },
      { figureId: 'melchisedek', label: 'béni par' },
    ],
    texts: ['torah', 'coran'],
    whyItMatters:
      "C'est le point de convergence revendiqué de plus de 4 milliards de croyants — et le meilleur exemple de la manière dont une même figure peut fonder des identités rivales.",
  },

  // =========================================================================
  {
    id: 'moise',
    name: 'Moïse',
    altNames: ['Moshé', 'Musa', 'Mosis'],
    traditions: ['judaisme', 'christianisme', 'islam', 'samaritanisme', 'bahaisme', 'rastafari'],
    role: 'Libérateur, législateur, prophète — le plus grand selon le judaïsme',
    dates: 'Tradition : XIIIe s. av. J.-C.',
    sortYear: -1250,
    region: 'Égypte, Sinaï, Madian, Moab',
    historicity: 'débattu',
    historicityNote:
      "Aucune trace égyptienne d'un exode massif ni de plaies ; l'archéologie du Sinaï ne montre pas d'occupation correspondante. Mais le nom Moshé est de formation égyptienne (comme dans Thoutmosis, Ramsès), plusieurs personnages lévites portent des noms égyptiens, et il est difficile d'expliquer pourquoi un peuple inventerait une origine servile. L'hypothèse majoritaire : un noyau historique restreint — un petit groupe échappé d'Égypte, mené par un chef réel — amplifié en récit national fondateur.",
    summary:
      "Moïse cumule quatre fonctions rarement réunies : libérateur politique, législateur, prophète et fondateur d'un peuple. Le judaïsme le tient pour le plus grand des prophètes, le seul à qui Dieu ait parlé « face à face ». Il meurt sans entrer dans la terre promise — détail que la tradition n'a jamais cessé de méditer.",
    life: [
      {
        title: 'Sauvé des eaux',
        text: "Né sous un décret d'infanticide, déposé dans une corbeille sur le Nil, recueilli par la fille de Pharaon, élevé au palais. Le motif de l'enfant royal sauvé des eaux est un topos proche-oriental — la légende de Sargon d'Akkad, mille ans plus tôt, est presque identique.",
      },
      {
        title: 'Le meurtre et la fuite',
        text: "Adulte, il tue un contremaître égyptien qui frappait un Hébreu et s'enfuit à Madian, où il épouse Séphora, fille du prêtre Jéthro. Ce détail est capital pour l'histoire des religions : Moïse rencontre YHWH dans un milieu madianite, ce qui appuie l'hypothèse d'une origine méridionale de ce dieu.",
      },
      {
        title: 'Le buisson ardent',
        text: "Dieu se révèle dans un buisson qui brûle sans se consumer et se nomme : « Ehyeh asher ehyeh » — « Je suis qui je serai », ou « Je serai qui je serai » (Exode 3,14). Formule volontairement insaisissable, qui refuse à Dieu un nom manipulable. Moïse résiste, invoque son bégaiement : c'est un prophète réticent, non un héros.",
      },
      {
        title: 'L’Exode',
        text: "Dix plaies, Pâque, passage de la mer. Le récit n'est pas seulement une libération : c'est un affrontement théologique, chaque plaie visant une puissance égyptienne (le Nil, le soleil, le bétail sacré). L'événement devient le paradigme biblique du salut — et, trois millénaires plus tard, la matrice des théologies de la libération et des spirituals afro-américains.",
      },
      {
        title: 'Le Sinaï et la Loi',
        text: "Alliance, Décalogue, tables de pierre. Moïse monte, redescend, brise les tables devant le veau d'or, remonte. Il devient l'intercesseur qui refuse l'offre divine de recommencer un peuple à partir de lui seul : « Efface-moi de ton livre, plutôt » (Exode 32,32).",
      },
      {
        title: 'Quarante ans et la mort au seuil',
        text: "Une génération entière meurt au désert : le peuple né esclave ne peut entrer libre. Moïse lui-même est exclu de la terre promise pour une faute obscure (Nombres 20). Il meurt sur le mont Nebo, voyant le pays sans y entrer, et « nul n'a connu son tombeau ». Le judaïsme y a lu un refus délibéré de toute tombe-sanctuaire.",
      },
    ],
    teachings: [
      {
        title: 'Le Décalogue',
        text: "Dix paroles articulant devoirs envers Dieu (unicité, pas d'image, nom, Chabbat) et envers autrui (parents, vie, fidélité, propriété, vérité, désir). Sa force tient à sa brièveté et à son universalité apparente — il a servi de socle moral partagé bien au-delà des croyants.",
      },
      {
        title: 'Une loi qui protège le faible',
        text: "Le Code de l'Alliance limite l'esclavage dans le temps, protège l'étranger, la veuve et l'orphelin, institue l'année sabbatique et le jubilé. Comparé au Code de Hammurabi, il se distingue par le refus de moduler la valeur d'une vie selon le rang social.",
      },
      {
        title: 'L’interdiction de l’image',
        text: "« Tu ne te feras pas d'image sculptée. » Cette prescription a des conséquences civilisationnelles immenses : elle oriente le judaïsme et l'islam vers l'écrit, le verbe et l'abstraction, et fournit à toute la tradition biblique un outil critique contre les pouvoirs qui se divinisent.",
      },
      {
        title: 'Le prophétisme comme contestation',
        text: "Moïse inaugure une posture : parler au nom de Dieu contre le pouvoir établi, et discuter avec Dieu lui-même. Cette double liberté deviendra la marque du prophétisme biblique.",
      },
    ],
    quotes: [
      { text: 'Je suis qui je serai.', source: 'Exode 3,14', comment: "Le nom qui refuse d'être un nom." },
      { text: 'Laisse partir mon peuple.', source: 'Exode 5,1', comment: "Devenu, via les spirituals, un slogan de toutes les luttes d'émancipation." },
      { text: 'Efface-moi de ton livre que tu as écrit.', source: 'Exode 32,32', comment: "Le chef qui refuse de se sauver seul." },
      { text: 'Il ne s’est plus levé en Israël de prophète comme Moïse, que le Seigneur connaissait face à face.', source: 'Deutéronome 34,10' },
    ],
    legacy:
      "Moïse est le modèle du législateur inspiré (Machiavel, Rousseau et Freud l'ont tous discuté), du libérateur (les spirituals « Go Down Moses », Harriet Tubman surnommée « Moïse », Martin Luther King qui, la veille de sa mort, se compare à un homme voyant la terre promise sans y entrer) et du prophète qui parle à Dieu comme à un ami.",
    crossViews: [
      { tradition: 'judaisme', view: "Moshé Rabbenou, « Moïse notre maître » : le plus grand prophète, jamais divinisé, dont la Pâque rejoue chaque année la libération." },
      { tradition: 'christianisme', view: "Préfigure le Christ (nouveau Moïse donnant une nouvelle Loi sur une montagne dans Matthieu) ; apparaît à la Transfiguration aux côtés d'Élie." },
      { tradition: 'islam', view: "Musa est le prophète le plus mentionné du Coran (136 occurrences), modèle du prophète confronté à un tyran ; interlocuteur direct de Dieu (kalim Allah)." },
      { tradition: 'rastafari', view: "L'Exode est la matrice de la lecture rasta : Babylone contre Sion, esclavage contre rapatriement." },
    ],
    relations: [
      { figureId: 'aaron', label: 'frère' },
      { figureId: 'myriam', label: 'sœur' },
      { figureId: 'josue', label: 'successeur' },
      { figureId: 'jethro', label: 'beau-père' },
      { figureId: 'abraham', label: 'ancêtre de l’alliance' },
    ],
    texts: ['torah', 'coran', 'pentateuque-samaritain'],
    whyItMatters:
      "Il est à l'origine de l'idée qu'une libération politique peut être un acte religieux — et que la loi peut venir contredire le pouvoir plutôt que le servir.",
  },

  // =========================================================================
  {
    id: 'jesus',
    name: 'Jésus de Nazareth',
    altNames: ['Yeshoua', 'Christ', 'Isa'],
    traditions: ['christianisme', 'islam', 'bahaisme', 'judaisme', 'hindouisme'],
    role: 'Prédicateur juif, Messie et Fils de Dieu pour les chrétiens, prophète pour l’islam',
    dates: '≈ 4 av. J.-C. – 30/33 apr. J.-C.',
    sortYear: 1,
    region: 'Galilée, Judée',
    historicity: 'attesté',
    historicityNote:
      "Son existence fait l'objet d'un consensus quasi total chez les historiens, y compris non chrétiens : sources chrétiennes précoces (les lettres de Paul, écrites vingt ans après sa mort, mentionnent des témoins vivants), et mentions extérieures chez Flavius Josèphe (Antiquités XVIII et XX) et Tacite (Annales XV). Deux faits font l'objet du plus large accord : il a été baptisé par Jean-Baptiste et crucifié sous Ponce Pilate — précisément parce qu'aucune communauté n'aurait inventé un fondateur soumis à un autre puis supplicié. Le contenu exact de sa prédication reste débattu.",
    summary:
      "Prédicateur juif itinérant de Galilée, annonçant l'irruption imminente du Royaume de Dieu, guérisseur et maître de paraboles, exécuté par Rome vers l'âge de trente-cinq ans. Ses disciples proclamèrent sa résurrection ; de cette proclamation naquit la religion la plus nombreuse de l'histoire.",
    life: [
      {
        title: 'Le contexte',
        text: "Galilée sous Hérode Antipas, Judée sous préfet romain. Judaïsme pluriel : pharisiens, sadducéens, esséniens, zélotes, prophètes populaires. Attente messianique intense, pression fiscale lourde, mémoire vive de révoltes réprimées. On ne comprend rien à Jésus si on l'extrait de ce judaïsme-là.",
      },
      {
        title: 'Naissance',
        text: "Les récits de l'enfance (Matthieu 1-2, Luc 1-2) sont tardifs, absents chez Marc et Paul, et divergents entre eux (généalogies différentes, Bethléem atteint pour des raisons contradictoires). Les historiens les tiennent majoritairement pour une construction théologique ; Nazareth reste le lieu d'origine probable.",
      },
      {
        title: 'Jean-Baptiste et le début',
        text: "Baptisé par Jean, prophète apocalyptique du désert, dont il fut probablement disciple. Après l'arrestation de Jean, il commence à prêcher pour son propre compte, avec un accent différent : le Royaume n'est pas seulement à venir, il commence déjà.",
      },
      {
        title: 'Le ministère',
        text: "Un à trois ans. Il enseigne en paraboles, guérit, exorcise, mange avec des collecteurs d'impôts et des prostituées, appelle douze disciples (nombre symbolique des tribus d'Israël) et compte des femmes parmi ses proches, ce qui est notable pour l'époque. Il n'écrit rien.",
      },
      {
        title: 'Jérusalem et la mort',
        text: "Monté à Jérusalem pour la Pâque, il provoque un incident au Temple, célèbre un dernier repas, est arrêté, jugé, et crucifié — supplice romain réservé aux séditieux, l'écriteau « roi des Juifs » indiquant le motif politique. La responsabilité de son exécution incombe historiquement à l'autorité romaine ; les évangiles, écrits après 70 sous domination romaine, tendent à en déplacer la charge sur les autorités juives — lecture qui a nourri des siècles d'antisémitisme et que les Églises ont officiellement corrigée (Vatican II, 1965).",
      },
      {
        title: 'Après',
        text: "Ses disciples affirment l'avoir vu vivant. Historiquement, ce qui est établi, c'est la conviction inébranlable de ces témoins et la transformation d'un groupe dispersé en mouvement missionnaire — la nature de l'événement lui-même échappe par construction à la méthode historique.",
      },
    ],
    teachings: [
      {
        title: 'Le Royaume de Dieu',
        text: "Cœur de sa prédication. Ni un territoire ni un au-delà, mais l'irruption du règne de Dieu, « déjà là et pas encore ». Il se dit dans des paraboles paradoxales : le Royaume est comme une graine minuscule, un levain caché, un trésor pour lequel on vend tout.",
      },
      {
        title: 'Le Sermon sur la montagne',
        text: "Béatitudes (heureux les pauvres, les doux, les artisans de paix), radicalisation de la Loi (« vous avez appris… moi je vous dis »), amour des ennemis, refus du jugement, Notre Père. Ce texte est probablement le plus influent de la morale occidentale — et le moins appliqué.",
      },
      {
        title: 'Renversement des grandeurs',
        text: "« Les premiers seront les derniers. » Enfants, pauvres, malades, pécheurs, samaritains et femmes occupent la place d'honneur dans ses paraboles. La logique du mérite et de la pureté est systématiquement défaite.",
      },
      {
        title: 'Le double commandement',
        text: "Interrogé sur le plus grand commandement, il cite deux versets de la Torah : aimer Dieu (Deutéronome 6,5) et aimer son prochain comme soi-même (Lévitique 19,18). Son originalité n'est pas dans le contenu mais dans la fusion des deux en un seul principe.",
      },
      {
        title: 'Les paraboles',
        text: "Une quarantaine de récits brefs : le bon Samaritain (le prochain est celui qui agit, pas celui qui appartient au bon groupe), le fils prodigue (le père court au-devant, sans exiger réparation), l'ouvrier de la onzième heure (la grâce n'est pas un salaire). Elles ne moralisent pas : elles piègent l'auditeur dans son propre jugement.",
      },
      {
        title: 'Qui disait-il être ?',
        text: "Question la plus débattue de la recherche. Il utilise « Fils de l'homme », expression ambiguë (Daniel 7 ou simple périphrase pour « moi »). Il n'y a pas d'accord sur la question de savoir s'il s'est déclaré Messie, encore moins divin. La confession de sa divinité est en tout cas très précoce : elle est déjà là dans les hymnes cités par Paul dans les années 50.",
      },
    ],
    quotes: [
      { text: 'Aimez vos ennemis, faites du bien à ceux qui vous haïssent.', source: 'Luc 6,27' },
      { text: 'Que celui d’entre vous qui est sans péché lui jette la première pierre.', source: 'Jean 8,7' },
      { text: 'Le sabbat a été fait pour l’homme, et non l’homme pour le sabbat.', source: 'Marc 2,27' },
      { text: 'Ce que vous avez fait à l’un de ces plus petits, c’est à moi que vous l’avez fait.', source: 'Matthieu 25,40' },
      { text: 'Mon Dieu, mon Dieu, pourquoi m’as-tu abandonné ?', source: 'Marc 15,34', comment: "Citation du Psaume 22 ; le cri d'abandon a nourri toute la théologie de la croix." },
    ],
    legacy:
      "Aucune vie humaine n'a laissé une empreinte comparable : le calendrier mondial, l'art occidental, l'idée de dignité inconditionnelle de la personne, l'hôpital, l'université, et aussi les croisades, les bûchers et les colonisations menées en son nom. Sa figure a été mobilisée par les pouvoirs comme par ceux qui les combattaient — Tolstoï, Gandhi (qui refusa le christianisme mais tint le Sermon sur la montagne pour un sommet), Martin Luther King, Óscar Romero.",
    crossViews: [
      { tradition: 'christianisme', view: "Fils de Dieu incarné, mort et ressuscité pour le salut du monde, deuxième personne de la Trinité." },
      { tradition: 'islam', view: "Isa ibn Maryam : prophète majeur, Messie, né d'une vierge, faiseur de miracles par permission divine, élevé au ciel sans avoir été crucifié (4,157) et qui reviendra à la fin des temps. Mais serviteur, non fils de Dieu — l'affirmation de sa divinité est explicitement rejetée." },
      { tradition: 'judaisme', view: "Un juif parmi d'autres prédicateurs de son temps. Le judaïsme ne le reconnaît pas comme messie (les critères messianiques — paix universelle, rassemblement des exilés, reconstruction du Temple — ne sont pas remplis) ni comme divin. Des chercheurs juifs contemporains (Geza Vermes, Amy-Jill Levine, Daniel Boyarin) ont largement contribué à le restituer à son contexte juif." },
      { tradition: 'hindouisme', view: "Souvent reçu comme un grand maître spirituel ou un avatar mineur ; Ramakrishna et Gandhi l'ont tenu en haute estime sans adopter le christianisme." },
      { tradition: 'bahaisme', view: "Manifestation de Dieu, maillon de la révélation progressive entre Moïse et Muhammad." },
    ],
    relations: [
      { figureId: 'marie', label: 'mère' },
      { figureId: 'jean-baptiste', label: 'baptiseur, cousin selon Luc' },
      { figureId: 'pierre', label: 'disciple' },
      { figureId: 'marie-madeleine', label: 'disciple' },
      { figureId: 'jacques-frere', label: 'frère' },
      { figureId: 'paul', label: 'apôtre posthume' },
      { figureId: 'judas', label: 'disciple, livreur' },
    ],
    texts: ['evangiles', 'coran', 'evangile-thomas'],
    whyItMatters:
      "Un artisan galiléen exécuté comme séditieux est devenu le centre de la civilisation la plus expansive de l'histoire — et le seul personnage vénéré à la fois comme Dieu, comme prophète et comme sage, par des traditions qui s'excluent mutuellement.",
  },

  // =========================================================================
  {
    id: 'muhammad',
    name: 'Muhammad',
    altNames: ['Mahomet', 'Muḥammad ibn ʿAbd Allāh'],
    traditions: ['islam', 'bahaisme', 'druzisme'],
    role: 'Prophète et sceau de la prophétie, fondateur de la communauté musulmane',
    dates: '≈ 570 – 8 juin 632',
    sortYear: 570,
    region: 'La Mecque, Médine',
    historicity: 'attesté',
    historicityNote:
      "Existence historique solidement établie : sources musulmanes très abondantes, mentions non musulmanes dès les années 630-640 (la Doctrina Jacobi, Sébéos), inscriptions, monnaies. Les biographies (sira d'Ibn Ishaq, remaniée par Ibn Hisham) datent toutefois de 130 à 200 ans après sa mort, et l'école révisionniste débat de la fiabilité du détail — sans que l'existence même du personnage soit sérieusement contestée.",
    summary:
      "Orphelin devenu marchand caravanier, puis prophète d'un monothéisme radical, puis chef d'État. En vingt-deux ans, il transforme une société tribale polythéiste en communauté unifiée par une loi et une foi — et laisse un texte qui deviendra la matrice d'une civilisation.",
    life: [
      {
        title: 'Avant la révélation',
        text: "Né à La Mecque dans le clan hachémite des Quraych, orphelin de père avant sa naissance et de mère à six ans, élevé par son grand-père puis son oncle Abu Talib. Marchand réputé pour sa probité (« al-Amin », le digne de confiance). À vingt-cinq ans, il épouse Khadija, riche commerçante de quinze ans son aînée, qui l'avait employé.",
      },
      {
        title: 'La première révélation',
        text: "Vers 610, dans la grotte de Hira où il se retirait, une présence le saisit et lui ordonne : « Lis ! » (Iqra). Il rentre bouleversé ; Khadija est la première à le croire — la première musulmane de l'histoire est une femme.",
      },
      {
        title: 'La Mecque : treize ans de prédication difficile',
        text: "Son message — Dieu unique, jugement, égalité des croyants, devoir envers le pauvre et l'orphelin — heurte l'ordre tribal et les intérêts liés au sanctuaire polythéiste. Persécutions, boycott de son clan, exil d'un groupe en Abyssinie où un roi chrétien les protège. En 619, « l'année de tristesse » : Khadija et Abu Talib meurent.",
      },
      {
        title: 'L’Hégire (622)',
        text: "Invité à arbitrer les conflits de Yathrib, il y émigre avec les siens. C'est l'an 1 du calendrier musulman — et le choix est révélateur : le point de départ n'est ni la naissance du prophète ni la première révélation, mais la fondation d'une communauté.",
      },
      {
        title: 'Médine : le prophète chef d’État',
        text: "Il rédige la « Constitution de Médine », qui reconnaît juifs et musulmans comme une même umma politique aux cultes distincts. Il légifère, arbitre, commande. Guerres avec La Mecque (Badr 624, victoire ; Uhud 625, défaite ; le Fossé 627). Conflits avec les tribus juives de Médine, culminant dans l'exécution des hommes des Banu Qurayza après le siège — épisode le plus âprement discuté de sa biographie, y compris par des historiens musulmans.",
      },
      {
        title: 'Le retour et la fin',
        text: "En 630, La Mecque se rend presque sans combat ; il fait détruire les idoles de la Kaaba et proclame une amnistie générale. Deux ans plus tard, après le pèlerinage d'adieu et son discours final, il meurt à Médine sans avoir désigné clairement de successeur — silence dont naîtra la division entre sunnites et chiites.",
      },
    ],
    teachings: [
      {
        title: 'Le tawhid',
        text: "Un seul Dieu, sans associé, sans image, sans intermédiaire. Cette affirmation démonte simultanément le polythéisme mecquois, les hiérarchies religieuses et la sacralisation du pouvoir.",
      },
      {
        title: 'Une réforme sociale',
        text: "Interdiction de l'infanticide des filles ; droit de la femme à hériter, à posséder et à consentir au mariage (dans un contexte où elle était souvent elle-même un bien) ; limitation de la polygamie ; encadrement strict de l'esclavage avec forte incitation à l'affranchissement ; obligation de la zakat. Ces mesures sont à évaluer par rapport à l'Arabie du VIIe siècle, non par rapport à nos normes.",
      },
      {
        title: 'Le prophète comme modèle',
        text: "Le Coran le désigne comme « bel exemple » (33,21). D'où l'importance de la sunna : sa manière de manger, de dormir, de se laver, de traiter ses proches devient normative. Aucun autre fondateur religieux n'a vu sa vie quotidienne codifiée à ce point.",
      },
      {
        title: 'Le sermon d’adieu',
        text: "« Un Arabe n'est pas supérieur à un non-Arabe, ni un Blanc à un Noir, sinon par la piété. Votre sang et vos biens vous sont sacrés. » Formulation d'une égalité fondamentale qui a fait de l'islam, historiquement, une religion particulièrement transversale aux ethnies.",
      },
    ],
    quotes: [
      { text: 'Lis, au nom de ton Seigneur qui a créé.', source: 'Coran 96,1', comment: 'Les premiers mots révélés.' },
      { text: 'Aucun de vous ne croit vraiment tant qu’il ne désire pas pour son frère ce qu’il désire pour lui-même.', source: 'Hadith, Bukhari 13' },
      { text: 'La recherche du savoir est un devoir pour tout musulman.', source: 'Hadith, Ibn Maja 224' },
      { text: 'Le meilleur d’entre vous est celui qui est le meilleur envers sa famille.', source: 'Hadith, Tirmidhi 3895' },
    ],
    legacy:
      "Fondateur de la seule religion mondiale dont le fondateur ait aussi été chef d'État, législateur et commandant militaire — configuration qui explique pourquoi la question du rapport entre islam et pouvoir politique se pose différemment de celle du christianisme. En un siècle, la communauté qu'il a fondée bâtit un empire de l'Atlantique à l'Indus ; en trois siècles, la civilisation la plus avancée de son temps.",
    crossViews: [
      { tradition: 'islam', view: "Sceau des prophètes, modèle parfait, intercesseur au jour du Jugement. Humain, jamais divin : lui rendre un culte serait du shirk." },
      { tradition: 'christianisme', view: "Longtemps caricaturé comme imposteur ou hérétique dans la polémique médiévale (Dante le place en enfer). Les positions catholique (Nostra Aetate) et protestantes contemporaines reconnaissent la valeur spirituelle de l'islam sans reconnaître sa prophétie." },
      { tradition: 'bahaisme', view: "Manifestation de Dieu, mais non le dernier : la révélation continue avec le Báb et Bahá'u'lláh — désaccord fondamental avec l'islam." },
    ],
    relations: [
      { figureId: 'khadija', label: 'première épouse' },
      { figureId: 'aisha', label: 'épouse' },
      { figureId: 'ali', label: 'cousin et gendre' },
      { figureId: 'fatima', label: 'fille' },
      { figureId: 'abu-bakr', label: 'compagnon, beau-père, premier calife' },
      { figureId: 'umar', label: 'compagnon, deuxième calife' },
    ],
    texts: ['coran', 'hadith', 'sira'],
    whyItMatters:
      "Il a réussi ce que presque aucun fondateur religieux n'a accompli de son vivant : voir son message triompher, et fonder à la fois une foi, un droit et un État.",
  },

  // =========================================================================
  {
    id: 'bouddha',
    name: 'Siddhartha Gautama, le Bouddha',
    altNames: ['Shakyamuni', 'Tathagata', 'Bouddha'],
    traditions: ['bouddhisme', 'hindouisme', 'bahaisme'],
    role: 'L’Éveillé — fondateur du bouddhisme',
    dates: '≈ 480-400 av. J.-C. (datation longue : 563-483)',
    sortYear: -480,
    region: 'Bassin du Gange (Lumbini, Bodh-Gaya, Sarnath, Kushinagar)',
    historicity: 'probable',
    historicityNote:
      "Existence largement acceptée. Les dates ont été révisées : la recherche récente situe sa mort plutôt vers 400 av. J.-C. que vers 483. Les récits biographiques, comme pour Jésus, se sont enrichis d'éléments légendaires (naissance miraculeuse, prophéties) au fil des siècles. Le pilier d'Ashoka à Lumbini (~249 av. J.-C.) atteste que son lieu de naissance était vénéré moins de deux siècles après sa mort.",
    summary:
      "Un prince du clan Shakya quitte son milieu à la découverte de la vieillesse, de la maladie et de la mort, cherche la libération pendant six ans, échoue par l'ascèse extrême, et trouve enfin par la voie du milieu. Il passe ensuite quarante-cinq ans à enseigner une méthode plutôt qu'une croyance.",
    life: [
      {
        title: 'Les quatre rencontres',
        text: "Élevé dans le confort et protégé de tout spectacle pénible, il aperçoit successivement un vieillard, un malade, un cadavre et un ascète serein. Le récit dit moins une biographie qu'un diagnostic : la condition humaine, quand on la regarde en face, est un problème.",
      },
      {
        title: 'Le grand départ',
        text: "À vingt-neuf ans, il quitte femme (Yashodhara) et fils (Rahula) — épisode que la tradition n'a jamais tout à fait cessé de trouver difficile. Il étudie auprès de maîtres de méditation, atteint leurs plus hauts états, et juge que cela ne suffit pas.",
      },
      {
        title: 'L’échec de l’ascèse',
        text: "Six ans de mortification extrême, jusqu'à pouvoir toucher sa colonne vertébrale par le ventre. Il comprend que l'affaiblissement du corps n'éclaire pas l'esprit, accepte un bol de riz au lait — et ses cinq compagnons, scandalisés, l'abandonnent. C'est la naissance de la « voie du milieu ».",
      },
      {
        title: 'L’éveil',
        text: "Assis sous un ficus à Bodh-Gaya, décidé à ne pas se lever avant d'avoir compris, il traverse les assauts de Mara (le désir, la peur, le doute) et atteint le nirvana au cours de la nuit. Il hésite ensuite à enseigner, jugeant sa découverte trop subtile — puis se décide « par compassion pour ceux qui n'ont qu'un peu de poussière sur les yeux ».",
      },
      {
        title: 'Quarante-cinq ans d’enseignement',
        text: "Premier sermon à Sarnath devant ses cinq anciens compagnons. Il fonde un ordre ouvert à toutes les castes, y admet des femmes après l'insistance de sa tante Mahaprajapati et d'Ananda. Il enseigne à des rois comme à des vidangeurs, refuse de se désigner un successeur autre que sa doctrine, et meurt à quatre-vingts ans d'une intoxication alimentaire, veillant à ce que son hôte ne soit pas blâmé.",
      },
    ],
    teachings: [
      {
        title: 'Les Quatre Nobles Vérités',
        text: "Il y a la souffrance ; elle a une cause ; elle peut cesser ; il y a un chemin. Structure de diagnostic médical appliquée à l'existence — le Bouddha se présente d'ailleurs comme un médecin, non comme un révélateur.",
      },
      {
        title: 'La voie du milieu',
        text: "Ni la recherche du plaisir ni la mortification. Ce principe d'évitement des extrêmes s'applique aussi à la métaphysique : ni éternalisme (une âme éternelle) ni annihilationnisme (rien ne subsiste).",
      },
      {
        title: 'Le non-soi',
        text: "Aucun des cinq agrégats (corps, sensations, perceptions, formations, conscience) n'est « moi » ni « à moi ». Ce qu'on appelle la personne est un processus, non une chose. C'est la thèse la plus contre-intuitive et la plus originale du bouddhisme.",
      },
      {
        title: 'L’autorité de l’expérience',
        text: "Aux Kalama, qui lui demandent comment trancher entre maîtres contradictoires, il répond : ne vous fiez ni à la tradition, ni aux écritures, ni à la rumeur, ni à l'autorité d'un maître — pas même à moi ; vérifiez par vous-mêmes ce qui conduit au bien. Rare invitation religieuse explicite à la vérification personnelle.",
      },
      {
        title: 'Le silence sur les questions métaphysiques',
        text: "Interrogé sur l'éternité du monde ou la survie de l'éveillé après la mort, il se tait. La parabole de la flèche : un homme blessé qui exigerait de connaître le nom de l'archer et la nature du bois avant qu'on le soigne mourrait de sa question.",
      },
    ],
    quotes: [
      { text: 'Nous sommes ce que nous pensons. Tout ce que nous sommes surgit de nos pensées.', source: 'Dhammapada 1' },
      { text: 'Ne croyez rien parce qu’on vous l’a dit, ni par tradition… mais quand vous constatez par vous-mêmes que cela mène au bien, alors acceptez-le.', source: 'Kalama Sutta, Anguttara Nikaya 3.65' },
      { text: 'Comme l’océan n’a qu’une saveur, celle du sel, ma doctrine n’a qu’une saveur : celle de la libération.', source: 'Udana 5.5' },
      { text: 'Soyez à vous-mêmes votre propre lampe.', source: 'Mahaparinibbana Sutta', comment: 'Parmi ses dernières paroles.' },
    ],
    legacy:
      "Il a fondé la première religion missionnaire de l'histoire, la première communauté monastique organisée, et une analyse de l'esprit qui, deux mille cinq cents ans plus tard, alimente la psychologie clinique et les neurosciences. Sa critique de la caste et du sacrifice a durablement transformé la religion indienne elle-même.",
    crossViews: [
      { tradition: 'bouddhisme', view: "Un être humain qui, par ses propres moyens, a découvert la voie et l'a enseignée. Ni dieu ni sauveur, mais un guide — bien que la dévotion populaire lui rende un culte." },
      { tradition: 'hindouisme', view: "Compté par certaines traditions comme le neuvième avatar de Vishnou — inclusion qui est aussi une manière de neutraliser une contestation." },
      { tradition: 'christianisme', view: "Récupéré au Moyen Âge sous une forme méconnaissable : la légende chrétienne de saint Josaphat est une transposition de sa vie, transmise via le géorgien et l'arabe." },
    ],
    relations: [
      { figureId: 'ananda', label: 'cousin et assistant' },
      { figureId: 'mahaprajapati', label: 'tante, première moniale' },
      { figureId: 'mahavira', label: 'contemporain, autre courant shramana' },
      { figureId: 'ashoka', label: 'propagateur posthume' },
    ],
    texts: ['canon-pali', 'dhammapada'],
    whyItMatters:
      "Il a proposé une libération sans dieu, sans âme et sans sacrifice — démontrant qu'une religion majeure pouvait se construire sur une méthode plutôt que sur une révélation.",
  },

  // =========================================================================
  {
    id: 'zarathoustra',
    name: 'Zarathoustra',
    altNames: ['Zoroastre', 'Zartosht'],
    traditions: ['zoroastrisme', 'bahaisme', 'manicheisme'],
    role: 'Prophète-poète, réformateur de la religion iranienne',
    dates: 'Entre 1500 et 600 av. J.-C.',
    sortYear: -1200,
    region: 'Asie centrale / est de l’Iran',
    historicity: 'probable',
    historicityNote:
      "Les Gathas, dix-sept hymnes en avestique ancien, sont attribués à un auteur unique qui parle à la première personne et se nomme — argument fort pour une personne réelle. La langue est si proche du sanskrit védique que la datation linguistique pousse vers 1200-1000 av. J.-C., contre la tradition grecque et parsie qui donne des dates bien plus basses ou fantaisistes.",
    summary:
      "Prêtre d'une religion sacrificielle indo-iranienne, Zarathoustra la refonde entièrement en la moralisant : il substitue à un panthéon un dieu bon unique, et fait du choix éthique individuel le moteur du cosmos. Ses intuitions ont vraisemblablement irrigué le judaïsme post-exilique, puis le christianisme et l'islam.",
    life: [
      {
        title: 'Ce que l’on sait',
        text: "Presque rien de biographique n'est assuré. Les Gathas le montrent comme un zaotar (prêtre sacrificateur) rejeté par les siens, cherchant protection auprès d'un souverain nommé Vishtaspa, qui finit par le soutenir. Le reste — naissance miraculeuse, épreuves, disputes — appartient à une hagiographie tardive.",
      },
      {
        title: 'La révolution qu’il opère',
        text: "Il conserve la structure rituelle indo-iranienne mais en change le sens : le sacrifice n'achète plus la faveur de puissances capricieuses, il soutient le camp de la vérité dans un combat cosmique. Les anciens daeva, dieux guerriers, sont rétrogradés au rang de démons.",
      },
    ],
    teachings: [
      {
        title: 'Le choix originel',
        text: "Gatha Yasna 30 : deux esprits primordiaux se présentent, et « chacun doit choisir ». La liberté humaine n'est pas une conséquence de la doctrine, elle en est le fondement.",
      },
      {
        title: 'Asha contre druj',
        text: "Vérité, ordre, justice d'un côté ; mensonge et désordre de l'autre. Le mensonge devient la faute cardinale — trait que les Grecs ont noté comme caractéristique des Perses.",
      },
      {
        title: 'Bonnes pensées, bonnes paroles, bonnes actions',
        text: "Une éthique tenant en trois termes, dont l'intégration de la pensée est notable : l'intérieur compte autant que le visible.",
      },
      {
        title: 'La fin heureuse',
        text: "L'histoire n'est pas un cycle mais une trajectoire qui s'achève par la défaite du mal et la purification universelle — y compris des damnés. C'est probablement la première eschatologie universaliste de l'histoire religieuse.",
      },
    ],
    quotes: [
      { text: 'Écoutez de vos oreilles ce qui est le meilleur, examinez-le d’un esprit clair, et que chacun, homme ou femme, choisisse pour soi-même.', source: 'Gatha, Yasna 30,2' },
      { text: 'Bonnes pensées, bonnes paroles, bonnes actions.', source: 'Formule zoroastrienne' },
    ],
    legacy:
      "Son influence est disproportionnée par rapport au nombre actuel de ses fidèles. Le jugement individuel après la mort, le paradis et l'enfer, les anges et les démons, le sauveur à venir, la résurrection des corps et la fin des temps entrent dans le judaïsme précisément pendant et après la domination perse. Nietzsche lui emprunte son nom pour renverser la morale qu'il lui attribue — hommage paradoxal à celui qu'il présente comme l'inventeur du couple bien/mal.",
    crossViews: [
      { tradition: 'zoroastrisme', view: "Le prophète, l'unique révélateur d'Ahura Mazda." },
      { tradition: 'islam', view: "Statut ambigu : les zoroastriens ont reçu le statut protégé de « gens du Livre », ce qui implique une reconnaissance de fait d'une révélation." },
      { tradition: 'bahaisme', view: "Manifestation de Dieu à part entière." },
    ],
    relations: [{ figureId: 'cyrus', label: 'souverain de tradition mazdéenne' }],
    texts: ['gathas', 'avesta'],
    whyItMatters:
      "Il a probablement inventé, ou du moins formulé le premier, le cadre eschatologique et moral dans lequel plus de la moitié de l'humanité pense encore le bien, le mal et l'après-mort.",
  },

  // =========================================================================
  {
    id: 'mahavira',
    name: 'Mahavira',
    altNames: ['Vardhamana', 'Jina'],
    traditions: ['jainisme'],
    role: '24e Tirthankara, réformateur du jaïnisme',
    dates: '≈ 599-527 av. J.-C. (ou 540-468)',
    sortYear: -540,
    region: 'Bihar (Vaishali, Pava)',
    historicity: 'probable',
    historicityNote:
      "Contemporain du Bouddha, mentionné dans les textes bouddhiques sous le nom de Nigantha Nataputta — un rival dont les positions sont discutées, ce qui constitue une attestation externe précieuse.",
    summary:
      "Fils d'une famille noble, il abandonne tout à trente ans, pratique douze ans d'ascèse extrême — dont une grande partie nu et silencieux — puis enseigne trente ans la non-violence la plus radicale jamais formulée.",
    life: [
      {
        title: 'Le renoncement',
        text: "Il quitte sa famille après la mort de ses parents, arrache ses cheveux à la main, se dépouille de ses vêtements et entreprend une errance de douze ans, supportant sans réagir insultes, morsures et coups — l'épreuve fait partie de la méthode.",
      },
      {
        title: 'Kevala jnana',
        text: "Il atteint l'omniscience sous un arbre sala, puis organise une communauté quadruple : moines, moniales, laïcs et laïques. Selon la tradition, ses moniales étaient trois fois plus nombreuses que ses moines.",
      },
      {
        title: 'La mort choisie',
        text: "Il meurt à Pava par sallekhana, jeûne rituel final. La date est célébrée comme Divali par les jaïns.",
      },
    ],
    teachings: [
      { title: 'Ahimsa', text: "« Toutes les créatures désirent vivre ; nul ne veut mourir. » La non-violence n'est pas une règle parmi d'autres : c'est le principe dont tout le reste dérive." },
      { title: 'Anekantavada', text: "Aucune assertion ne capture la totalité du réel. Une humilité épistémologique élevée au rang de doctrine — et une éthique de la discussion." },
      { title: 'Aparigraha', text: "Le non-attachement matériel ; la possession lie l'âme autant que la violence." },
      { title: 'Autonomie totale', text: "Pas de dieu créateur, pas de grâce : chacun est seul responsable de sa libération. Le Tirthankara montre le gué, il ne porte personne." },
    ],
    quotes: [
      { text: 'Toutes les créatures désirent vivre. Nul ne veut mourir.', source: 'Acharanga Sutra' },
      { text: 'Vivre et laisser vivre.', source: 'Maxime jaïne' },
    ],
    legacy:
      "Par Gandhi, l'éthique jaïne a quitté le monastère pour devenir un instrument politique mondial. L'anekantavada intéresse aujourd'hui la philosophie du pluralisme et la théorie du dialogue.",
    relations: [{ figureId: 'bouddha', label: 'contemporain et rival' }, { figureId: 'parshvanatha', label: 'prédécesseur' }],
    texts: ['agamas-jain'],
    whyItMatters: "Il a poussé la non-violence jusqu'à sa limite logique, et fourni au XXe siècle son arme politique la plus originale.",
  },

  // =========================================================================
  {
    id: 'laozi',
    name: 'Laozi',
    altNames: ['Lao Tseu', 'Li Er'],
    traditions: ['taoisme', 'confucianisme'],
    role: 'Auteur légendaire du Daodejing',
    dates: 'Tradition : VIe s. av. J.-C. ; texte : IVe-IIIe s.',
    sortYear: -500,
    region: 'Chine (État de Chu)',
    historicity: 'légendaire',
    historicityNote:
      "Sima Qian, qui écrit vers 100 av. J.-C., propose déjà trois identifications concurrentes et avoue son embarras. La recherche actuelle tient « Laozi » (littéralement « le vieux maître ») pour une figure d'auteur attachée à une compilation progressive.",
    summary:
      "Archiviste de la cour, il aurait quitté la Chine dégoûté de son déclin ; un gardien de passe l'aurait retenu jusqu'à ce qu'il écrive son enseignement en cinq mille caractères. Le texte qui en résulte est, après la Bible, l'un des plus traduits au monde.",
    life: [
      {
        title: 'La légende de la passe',
        text: "Monté sur un buffle vers l'Ouest, il est arrêté par le gardien Yinxi qui refuse de le laisser partir sans laisser trace de sa sagesse. Il écrit alors le Daodejing et disparaît, « et nul ne sait ce qu'il devint ».",
      },
      {
        title: 'La rencontre avec Confucius',
        text: "Un récit — sans doute apocryphe et d'origine taoïste — les fait se rencontrer : Laozi reproche à Confucius son goût des rites, et Confucius en sort déconcerté, le comparant à un dragon. L'anecdote résume la tension structurante de la pensée chinoise.",
      },
    ],
    teachings: [
      { title: 'Le Dao innommable', text: "« Le Dao qu'on peut nommer n'est pas le Dao constant. » Le texte s'ouvre en avertissant qu'il ne peut pas dire ce qu'il va dire." },
      { title: 'Wu wei', text: "Agir sans forcer. Le meilleur gouvernement est celui dont le peuple ignore l'existence ; le pire est celui qu'on adore." },
      { title: 'La force du faible', text: "« Rien au monde n'est plus souple que l'eau, et pourtant rien ne vaut mieux qu'elle pour user ce qui est dur. » Une théorie de la puissance inversée." },
      { title: 'L’utilité du vide', text: "« Trente rayons convergent au moyeu ; c'est le vide du moyeu qui rend la roue utile. » Le rien n'est pas l'absence : c'est la condition de fonctionnement." },
    ],
    quotes: [
      { text: 'Le Dao qu’on peut nommer n’est pas le Dao constant.', source: 'Daodejing 1' },
      { text: 'Un voyage de mille lieues commence sous le pied.', source: 'Daodejing 64' },
      { text: 'Connaître les autres, c’est la sagesse. Se connaître soi-même, c’est l’illumination.', source: 'Daodejing 33' },
      { text: 'Gouverner un grand État, c’est comme faire cuire un petit poisson.', source: 'Daodejing 60', comment: 'Ne pas trop remuer.' },
    ],
    legacy:
      "Le Daodejing a été traduit plus de 250 fois en anglais. Son influence dépasse largement le taoïsme : arts martiaux, stratégie, écologie, management, poésie, et une bonne part de la contre-culture occidentale des années 1960.",
    crossViews: [
      { tradition: 'taoisme', view: "Divinisé sous le nom de Taishang Laojun, l'un des Trois Purs ; révélateur à Zhang Daoling en 142." },
      { tradition: 'confucianisme', view: "Sage respecté mais dont le refus des rites et de l'engagement est jugé irresponsable." },
      { tradition: 'bouddhisme', view: "Une polémique chinoise (le Huahujing) prétendit que Laozi, parti vers l'Ouest, était devenu le Bouddha — tentative taoïste d'absorber un rival." },
    ],
    relations: [{ figureId: 'confucius', label: 'contemporain supposé' }, { figureId: 'zhuangzi', label: 'continuateur' }],
    texts: ['daodejing'],
    whyItMatters: "Il a formulé une théorie de l'efficacité par le retrait qui n'a pas d'équivalent dans les traditions occidentales.",
  },

  // =========================================================================
  {
    id: 'confucius',
    name: 'Confucius',
    altNames: ['Kongzi', 'Kong Fuzi', 'Maître Kong'],
    traditions: ['confucianisme'],
    role: 'Maître, éducateur, réformateur moral',
    dates: '551-479 av. J.-C.',
    sortYear: -551,
    region: 'État de Lu (Shandong)',
    historicity: 'attesté',
    historicityNote:
      "Personnage historique bien attesté, bien que les Entretiens aient été compilés par ses disciples et leurs disciples, en couches successives sur deux siècles.",
    summary:
      "Fonctionnaire de rang moyen qui ne parvint jamais à obtenir le poste d'influence dont il rêvait, Confucius devint enseignant faute de mieux — et transforma la civilisation chinoise pour deux millénaires et demi.",
    life: [
      {
        title: 'Un échec politique',
        text: "Né dans une famille aristocratique appauvrie, orphelin de père, il occupe de petits emplois puis des fonctions dans l'État de Lu, dont il démissionne. Il erre treize ans de cour en cour, offrant ses services, essuyant refus et humiliations. Il meurt convaincu d'avoir échoué.",
      },
      {
        title: 'L’enseignement',
        text: "Il accepte, dit-il, tout élève capable d'apporter « un paquet de viande séchée » — c'est-à-dire presque n'importe qui. Rompre le monopole aristocratique du savoir est son geste le plus subversif.",
      },
    ],
    teachings: [
      { title: 'Ren', text: "L'humanité bienveillante. Il refuse d'en donner une définition fixe, et répond différemment à chacun : la vertu s'incarne, elle ne se théorise pas." },
      { title: 'Les rites', text: "Non des formalités mais l'ossature visible de la vie morale. Le rite forme l'intérieur par l'extérieur — thèse que la psychologie moderne du comportement ne désavouerait pas." },
      { title: 'Le junzi', text: "L'« homme de bien » : l'excellence morale remplace la naissance comme critère de noblesse. Renversement social majeur, qui fonde une méritocratie." },
      { title: 'Rectification des noms', text: "« Que le prince soit prince, le père père, le fils fils. » Quand les mots ne correspondent plus aux réalités, l'ordre social se défait. Une théorie politique du langage." },
      { title: 'Réserve sur l’au-delà', text: "« Tu ne sais pas encore servir les hommes, comment servirais-tu les esprits ? » et « Tu ne connais pas encore la vie, comment connaîtrais-tu la mort ? » Il ne nie pas : il recentre." },
    ],
    quotes: [
      { text: 'Ce que tu ne souhaites pas pour toi-même, ne l’impose pas à autrui.', source: 'Entretiens 15,24' },
      { text: 'À quinze ans, mon esprit s’appliqua à l’étude ; à trente, je m’affermis ; à quarante, je n’eus plus de doutes ; à soixante-dix, je pus suivre les désirs de mon cœur sans dépasser la règle.', source: 'Entretiens 2,4' },
      { text: 'Étudier sans réfléchir est vain ; réfléchir sans étudier est dangereux.', source: 'Entretiens 2,15' },
      { text: 'Le sage cherche en lui-même ; l’homme de peu cherche chez les autres.', source: 'Entretiens 15,21' },
    ],
    legacy:
      "Ses idées ont fondé le système des examens impériaux (605-1905), première méritocratie administrative de l'histoire, imitée ensuite par les fonctions publiques européennes. Elles structurent encore la famille, l'éducation et la conception de l'autorité en Chine, en Corée, au Japon et au Vietnam.",
    relations: [
      { figureId: 'mencius', label: 'héritier (IVe s.)' },
      { figureId: 'xunzi', label: 'héritier rival' },
      { figureId: 'laozi', label: 'contemporain supposé' },
    ],
    texts: ['entretiens-confucius'],
    whyItMatters: "Un homme qui s'estimait raté a modelé la vie morale d'un cinquième de l'humanité pendant vingt-cinq siècles.",
  },

  // =========================================================================
  {
    id: 'guru-nanak',
    name: 'Guru Nanak',
    traditions: ['sikhisme'],
    role: 'Premier gourou, fondateur du sikhisme',
    dates: '1469-1539',
    sortYear: 1469,
    region: 'Pendjab (Talwandi, Kartarpur)',
    historicity: 'attesté',
    summary:
      "Né dans une famille hindoue d'un Pendjab sous domination musulmane, Nanak proclame après une expérience mystique qu'« il n'y a ni hindou ni musulman », et fonde une voie nouvelle centrée sur un Dieu sans forme, l'égalité et le travail honnête.",
    historicityNote: "Personnage historique. Les Janamsakhis, récits de sa vie, sont postérieurs et mêlent hagiographie et mémoire.",
    life: [
      {
        title: 'La disparition dans la rivière',
        text: "À trente ans, il disparaît trois jours dans la rivière Bein. On le croit noyé ; il reparaît et prononce ses premiers mots : « Il n'y a ni hindou ni musulman. » Il quitte son emploi et part.",
      },
      {
        title: 'Les udasis',
        text: "Vingt ans de voyages, jusqu'à La Mecque, Bagdad, Ceylan et le Tibet selon la tradition, accompagné de Mardana, musulman et joueur de rebab. Un maître hindou et un musulman voyageant ensemble : la composition du duo est déjà une thèse.",
      },
      {
        title: 'Kartarpur',
        text: "Il fonde une communauté agricole où il travaille de ses mains, institue le repas commun et la prière collective. Il désigne comme successeur non son fils mais son disciple le plus dévoué — établissant que la fonction se mérite.",
      },
    ],
    teachings: [
      { title: 'Ik Onkar', text: "Un seul Réel, créateur, sans peur ni haine, hors du temps, non né. Formule qui ouvre le Guru Granth Sahib et résume tout." },
      { title: 'Contre le rite vide', text: "À Hardwar, voyant des pèlerins jeter de l'eau vers le soleil pour leurs ancêtres, il se met à en jeter dans l'autre sens : « J'arrose mes champs au Pendjab. » — « Mais l'eau n'ira jamais si loin ! » — « Si elle ne peut atteindre mes champs, comment atteindrait-elle le soleil ? »" },
      { title: 'Égalité', text: "Contre la caste et contre l'infériorité des femmes : « Pourquoi la traiter de mauvaise, celle qui donne naissance aux rois ? »" },
      { title: 'Ni ascèse ni renoncement', text: "La libération se joue dans la vie de famille et le travail, non dans la forêt." },
    ],
    quotes: [
      { text: 'Il n’y a ni hindou ni musulman.', source: 'Janamsakhi' },
      { text: 'La vérité est haute, mais plus haute encore est la vie vécue selon la vérité.', source: 'Guru Granth Sahib, p. 62' },
      { text: 'Pourquoi la traiter de mauvaise, celle qui donne naissance aux rois ?', source: 'Guru Granth Sahib, Asa di Var' },
    ],
    legacy:
      "Il a fondé la cinquième religion mondiale par le nombre, et institué avec le langar l'une des critiques pratiques les plus efficaces jamais opposées au système des castes.",
    relations: [
      { figureId: 'kabir', label: 'prédécesseur spirituel' },
      { figureId: 'guru-arjan', label: 'cinquième successeur' },
      { figureId: 'guru-gobind-singh', label: 'dixième successeur' },
    ],
    texts: ['guru-granth-sahib'],
    whyItMatters: "Il a montré qu'on pouvait critiquer simultanément deux religions dominantes sans se réfugier dans l'athéisme ni dans le syncrétisme.",
  },

  // =========================================================================
  {
    id: 'bahaullah',
    name: 'Bahá’u’lláh',
    altNames: ['Mírzá Husayn-‘Alí Núrí'],
    traditions: ['bahaisme'],
    role: 'Fondateur de la foi bahá’íe',
    dates: '1817-1892',
    sortYear: 1817,
    region: 'Perse, Irak, Turquie, Palestine',
    historicity: 'attesté',
    historicityNote: "Personnage moderne parfaitement documenté, y compris par des sources diplomatiques occidentales.",
    summary:
      "Noble persan qui renonce à sa position pour suivre le Báb, il passe quarante ans en prison et en exil, et proclame en 1863 être le messager annoncé pour l'âge de l'unité humaine.",
    life: [
      {
        title: 'La fosse noire',
        text: "En 1852, emprisonné dans un cachot souterrain de Téhéran, chargé de chaînes, il reçoit ce qu'il décrira comme sa vocation prophétique. L'expérience est comparable, dans son cadre carcéral, à celle de Jean à Patmos.",
      },
      {
        title: 'Quarante ans d’exil',
        text: "Bagdad, Constantinople, Andrinople, puis la citadelle-prison d'Acre en Palestine ottomane, où il finit ses jours en résidence surveillée. Il y écrit une centaine d'ouvrages et adresse des lettres aux souverains de son temps — Napoléon III, la reine Victoria, le pape, le sultan — les appelant à la justice et au désarmement.",
      },
    ],
    teachings: [
      { title: 'Unité du genre humain', text: "« La terre n'est qu'un seul pays et les hommes en sont les citoyens. » Principe organisateur et non simple idéal moral." },
      { title: 'Révélation progressive', text: "Toutes les grandes religions viennent du même Dieu et se succèdent selon les besoins des époques. Aucune n'est finale, y compris la sienne." },
      { title: 'Programme social', text: "Égalité des sexes, éducation universelle obligatoire, langue auxiliaire mondiale, tribunal international, harmonie de la science et de la religion, élimination des extrêmes de richesse — formulés au XIXe siècle." },
      { title: 'Investigation indépendante', text: "L'imitation aveugle de la foi des ancêtres est explicitement condamnée : chacun doit chercher la vérité par lui-même." },
    ],
    quotes: [
      { text: 'La terre n’est qu’un seul pays et les hommes en sont les citoyens.', source: 'Tablettes de Bahá’u’lláh' },
      { text: 'Vous êtes tous les fruits d’un seul arbre et les feuilles d’une même branche.', source: 'Tablettes' },
      { text: 'Ne considérez pas les autres si ce n’est comme vous vous considérez vous-mêmes.', source: 'Paroles cachées' },
    ],
    legacy:
      "Fondateur de la religion indépendante la plus récente à s'être implantée mondialement, et de la formulation religieuse la plus systématique de l'unité de l'humanité.",
    relations: [
      { figureId: 'bab', label: 'précurseur' },
      { figureId: 'abdul-baha', label: 'fils et successeur' },
    ],
    texts: ['kitab-i-aqdas', 'kitab-i-iqan', 'paroles-cachees'],
    whyItMatters: "Il a transformé le pluralisme religieux en doctrine positive plutôt qu'en concession.",
  },

  // =========================================================================
  {
    id: 'mani',
    name: 'Mani',
    traditions: ['manicheisme'],
    role: 'Fondateur du manichéisme',
    dates: '216 – 274/277',
    sortYear: 216,
    region: 'Babylonie sassanide',
    historicity: 'attesté',
    historicityNote:
      "Le Codex manichéen de Cologne, minuscule parchemin grec découvert en 1969, contient une biographie ancienne et confirme son éducation dans une secte judéo-chrétienne baptiste.",
    summary:
      "Premier fondateur religieux à concevoir explicitement une religion universelle, à écrire lui-même son canon et à le faire illustrer pour qu'il ne soit pas déformé. Son Église s'étendit de l'Espagne à la Chine avant d'être éradiquée partout.",
    life: [
      {
        title: 'Le jumeau céleste',
        text: "Élevé chez les elkasaïtes, il reçoit à douze puis à vingt-quatre ans les visites de son « jumeau » (syzygos), double céleste qui lui révèle la doctrine. Il rompt avec sa communauté et part prêcher jusqu'en Inde, où il rencontre le bouddhisme.",
      },
      {
        title: 'Faveur puis martyre',
        text: "Shapour Ier l'autorise à prêcher dans tout l'empire. Sous Bahram Ier, le clergé zoroastrien obtient sa condamnation ; il meurt en prison, chargé de chaînes, et son corps est mutilé.",
      },
    ],
    teachings: [
      { title: 'Deux principes', text: "Lumière et Ténèbres, éternels et opposés. Le mélange actuel est un accident dont l'histoire est le démêlage." },
      { title: 'Une synthèse voulue', text: "Il intègre délibérément Jésus, Bouddha et Zoroastre comme ses prédécesseurs — première tentative consciente de religion mondiale interculturelle." },
      { title: 'Le canon écrit par le fondateur', text: "Constatant que les messages de ses prédécesseurs avaient été altérés par des disciples, il écrit lui-même sept livres et un album d'images. Innovation méthodologique remarquable." },
    ],
    quotes: [{ text: 'La religion que j’ai choisie est en dix points supérieure aux autres doctrines.', source: 'Kephalaia' }],
    legacy:
      "Augustin fut manichéen pendant neuf ans avant de se convertir au christianisme ; sa lutte contre son ancienne foi a façonné sa doctrine du mal, du péché et de la grâce — donc, indirectement, tout l'Occident chrétien. Le mot « manichéen » survit, appauvri, dans le langage courant.",
    relations: [{ figureId: 'augustin', label: 'ancien adepte devenu adversaire' }, { figureId: 'zarathoustra', label: 'prédécesseur revendiqué' }],
    texts: ['kephalaia'],
    whyItMatters: "Il a conçu le premier projet explicite de religion universelle et interculturelle — et son échec total montre les limites du syncrétisme volontariste.",
  },

  // =========================================================================
  {
    id: 'krishna',
    name: 'Krishna',
    traditions: ['hindouisme'],
    role: 'Avatar de Vishnou, maître de la Bhagavad-Gita',
    dates: 'Tradition : ≈ 3200 av. J.-C. ; textes : IVe s. av. – IVe s. apr. J.-C.',
    sortYear: -900,
    region: 'Mathura, Vrindavan, Dvaraka',
    historicity: 'mythique',
    historicityNote:
      "Aucune trace archéologique d'un Krishna historique. Un noyau de chef de clan Yadava est parfois postulé. La figure telle qu'on la connaît résulte de la fusion de plusieurs traditions : un héros épique, un dieu pastoral, un enfant espiègle et un maître métaphysique.",
    summary:
      "Le plus aimé des dieux hindous : enfant voleur de beurre, jeune homme dont la flûte appelle les bergères, ami et cocher d'Arjuna, et révélateur suprême dans la Bhagavad-Gita. Il combine sur une seule figure le divin transcendant et l'intimité amoureuse.",
    life: [
      {
        title: 'Naissance et enfance',
        text: "Né en prison, échappé à un roi qui veut le tuer, élevé chez des bouviers — motifs qu'on retrouve dans bien d'autres traditions. Ses espiègleries (voler le beurre, cacher les vêtements des baigneuses) sont célébrées : le divin y est joueur, non solennel.",
      },
      {
        title: 'Vrindavan et Radha',
        text: "La rasa-lila, danse nocturne avec les gopis, dont Radha est la préférée : l'amour humain, y compris dans sa dimension érotique et illégitime, devient métaphore de l'aspiration à Dieu. Toute une poésie et une musique en dérivent (Jayadeva, Mirabai, Chaitanya, la peinture moghole).",
      },
      {
        title: 'Kurukshetra',
        text: "Dans le Mahabharata, il est le conseiller des Pandava et le cocher d'Arjuna. Avant la bataille, il révèle la Bhagavad-Gita. Il meurt d'une flèche au talon tirée par un chasseur qui le prend pour un cerf — la mort la plus banale pour le plus grand des avatars.",
      },
    ],
    teachings: [
      { title: 'Le devoir sans attachement', text: "« Tu as droit à l'action, jamais à ses fruits » (Gita 2,47). Résolution originale du conflit entre morale du devoir et morale des conséquences." },
      { title: 'Les trois voies', text: "Action, connaissance et dévotion mènent également à la libération. La Gita légitime la multiplicité des tempéraments spirituels." },
      { title: 'La bhakti universelle', text: "« Même ceux qui naissent dans les conditions les plus basses… atteignent le but suprême » (9,32). L'amour de Dieu contourne la barrière de caste — verset abondamment cité par les réformateurs." },
      { title: 'Théophanie', text: "Au chapitre 11, Krishna se révèle sous sa forme cosmique, insoutenable. « Je suis le Temps, destructeur des mondes » — phrase que Robert Oppenheimer déclara avoir eue à l'esprit lors du premier essai atomique." },
    ],
    quotes: [
      { text: 'Tu as droit à l’action seule, jamais à ses fruits.', source: 'Bhagavad-Gita 2,47' },
      { text: 'Chaque fois que le dharma décline, je me manifeste.', source: 'Bhagavad-Gita 4,7' },
      { text: 'Abandonne tous les devoirs et viens à moi seul pour refuge ; je te délivrerai de tout mal.', source: 'Bhagavad-Gita 18,66' },
    ],
    legacy:
      "La Bhagavad-Gita est devenue le texte hindou le plus lu au monde. Gandhi la lisait quotidiennement et y voyait un allégorie du combat intérieur ; Thoreau, Emerson, Aldous Huxley l'ont célébrée. Le mouvement Hare Krishna a diffusé sa dévotion en Occident depuis 1966.",
    relations: [{ figureId: 'arjuna', label: 'disciple et ami' }, { figureId: 'vyasa', label: 'auteur traditionnel du Mahabharata' }, { figureId: 'rama', label: 'autre avatar de Vishnou' }],
    texts: ['bhagavad-gita', 'mahabharata', 'puranas'],
    whyItMatters: "Il incarne l'idée qu'un dieu peut être à la fois l'absolu métaphysique et un être qu'on aime personnellement, jusqu'à la passion.",
  },

  // =========================================================================
  {
    id: 'bab',
    name: 'Le Báb',
    altNames: ['Sayyid ‘Alí Muḥammad Shírází'],
    traditions: ['bahaisme'],
    role: 'Précurseur, fondateur du babisme',
    dates: '1819-1850',
    sortYear: 1819,
    region: 'Chiraz, Perse',
    historicity: 'attesté',
    historicityNote: "Documenté par des sources persanes et par des rapports diplomatiques européens contemporains.",
    summary:
      "Jeune marchand de Chiraz qui se déclare en 1844 la « Porte » vers une révélation imminente, déclenche un mouvement de masse, et est fusillé à trente ans après six ans de prédication.",
    life: [
      {
        title: 'La déclaration',
        text: "Le 23 mai 1844, il annonce à un premier disciple être le Qa'im attendu par le chiisme. Le mouvement se répand avec une rapidité fulgurante dans tout l'Iran.",
      },
      {
        title: 'L’exécution',
        text: "Fusillé à Tabriz le 9 juillet 1850 devant des milliers de témoins. Selon des récits concordants — dont celui du consul britannique —, la première salve trancha ses liens sans le blesser ; il fut retrouvé dans une pièce voisine, puis exécuté par un second peloton.",
      },
    ],
    teachings: [
      { title: 'Celui que Dieu manifestera', text: "L'essentiel de son message est d'annoncer un autre : sa propre religion se déclare provisoire, ce qui est rarissime." },
      { title: 'Rupture avec la loi islamique', text: "Le Bayan abroge la charia et institue un calendrier de 19 mois de 19 jours, marquant une religion nouvelle et non une réforme." },
    ],
    quotes: [{ text: 'Je ne suis que la lettre première de ce Livre le plus grand.', source: 'Bayan persan' }],
    legacy: "Plus de 20 000 babis furent tués. Le mouvement fut refondé par Bahá'u'lláh ; le mausolée du Báb à Haïfa est le second lieu saint bahá'í.",
    relations: [{ figureId: 'bahaullah', label: 'annoncé' }, { figureId: 'tahirih', label: 'disciple' }],
    texts: ['kitab-i-aqdas'],
    whyItMatters: "Cas rare d'un fondateur dont le message central est sa propre provisoire.",
  },
];
