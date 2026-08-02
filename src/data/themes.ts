import type { Theme } from './types';

/**
 * Thèmes comparatifs : une question, plusieurs réponses traditionnelles.
 * C'est ici que se joue la compréhension des corrélations entre religions.
 */
export const themes: Theme[] = [
  {
    id: 'dieu',
    title: 'Qu’est-ce que l’absolu ?',
    question: 'Un, plusieurs, impersonnel, absent ? Ce que les traditions placent au fondement du réel.',
    icon: '◉',
    summary:
      "La question paraît simple ; elle ne l'est pas. Les traditions ne donnent pas des réponses différentes à une même question, elles ne posent parfois pas la même question. Certaines cherchent une personne, d'autres un principe, d'autres encore refusent de chercher.",
    positions: [
      { traditionId: 'judaisme', label: 'Un Dieu unique, personnel, sans image', text: "YHWH parle, s'engage, se met en colère, se repent. Il est un et sans représentation possible. La théologie négative de Maïmonide poussera l'exigence à l'extrême : on ne peut rien affirmer de lui, seulement nier." },
      { traditionId: 'christianisme', label: 'Un Dieu en trois personnes', text: "Une seule substance divine, trois personnes distinctes. La formule cherche à tenir l'unicité héritée du judaïsme et l'expérience du Christ. Elle reste le point de rupture avec le judaïsme et l'islam." },
      { traditionId: 'islam', label: 'Unicité absolue, sans associé', text: "Le tawhid exclut tout partage, toute engendrement, toute image. Associer quoi que ce soit à Dieu est la seule faute décrite comme impardonnable." },
      { traditionId: 'hindouisme', label: 'Un réel qu’on nomme diversement', text: "Brahman impersonnel pour l'advaita, Dieu personnel pour la bhakti, la Déesse pour le shaktisme. « Ce qui est un, les sages le nomment de multiples façons. » Le pluralisme n'est pas une tolérance mais une doctrine." },
      { traditionId: 'bouddhisme', label: 'La question est écartée', text: "Ni affirmée ni niée : le Bouddha refuse de répondre à ce qui ne conduit pas à la libération. Des dieux existent dans sa cosmologie, mais ils sont mortels et n'ont pas créé le monde." },
      { traditionId: 'taoisme', label: 'Un fonctionnement, non un être', text: "Le Dao n'est ni personne ni volonté : il est la façon dont les choses vont. « Le Dao qu'on peut nommer n'est pas le Dao constant. »" },
      { traditionId: 'confucianisme', label: 'Un Ciel normatif et discret', text: "Tian ordonne sans parler. Confucius écarte poliment la question des esprits : « Tu ne sais pas encore servir les hommes… »" },
      { traditionId: 'zoroastrisme', label: 'Un Dieu bon, face à un principe mauvais', text: "Ahura Mazda est bon et n'est pas l'auteur du mal. C'est la solution la plus économique au problème du mal — au prix de l'unicité absolue." },
      { traditionId: 'jainisme', label: 'Aucun créateur', text: "L'univers est éternel et non créé. Des dieux existent mais sont eux-mêmes soumis au cycle. Chacun est seul responsable de sa libération." },
      { traditionId: 'religions-africaines', label: 'Un créateur lointain, des intermédiaires proches', text: "Le Dieu suprême est reconnu partout mais rarement culté ; l'attention rituelle va aux divinités et aux ancêtres, plus impliqués dans le quotidien." },
      { traditionId: 'humanisme-seculier', label: 'Rien au-delà de la nature', text: "Le monde s'explique sans surnaturel. Reste alors à construire soi-même le sens, ce qui est une tâche et non une évidence." },
    ],
    convergences: [
      "Presque toutes les traditions affirment que l'absolu excède le langage : théologie négative juive, apophatisme chrétien, tanzih musulman, neti neti hindou, ineffabilité du Dao.",
      "Une même hésitation revient partout entre un absolu personnel (auquel on peut parler) et un absolu impersonnel (qu'on ne peut que réaliser) — et souvent les deux coexistent dans une même tradition.",
      "Les mystiques des traditions les plus opposées se ressemblent davantage entre eux que chacun ne ressemble aux théologiens de sa propre religion.",
    ],
    divergences: [
      "Personnel contre impersonnel : peut-on prier le Dao ? Peut-on réaliser YHWH ?",
      "Créateur ou non : la question sépare radicalement les traditions abrahamiques des traditions indiennes et est-asiatiques.",
      "Unicité stricte contre incarnation : c'est l'obstacle infranchissable entre judaïsme, islam et christianisme.",
    ],
    analysis:
      "L'erreur la plus fréquente est de projeter la question abrahamique (« Dieu existe-t-il ? ») sur des traditions qui ne la posent pas. Pour un bouddhiste theravada, cette question est mal formée ; pour un taoïste, elle suppose une personnification qui trahit le sujet ; pour un confucéen, elle détourne de l'urgent. Comprendre une religion, c'est d'abord comprendre quelle question elle traite comme fondamentale — et l'écart entre ces questions est souvent plus instructif que l'écart entre les réponses.",
  },

  {
    id: 'apres-la-mort',
    title: 'Que devient-on après la mort ?',
    question: 'Résurrection, réincarnation, extinction, néant : l’inventaire des réponses.',
    icon: '⌛',
    summary:
      "Aucune question ne différencie autant les traditions — et aucune n'a autant évolué à l'intérieur de chacune. Le judaïsme biblique ancien n'avait pas d'au-delà rétributif ; l'Égypte l'avait, mais réservé au roi ; l'Inde a inventé un cycle dont il faut sortir.",
    positions: [
      { traditionId: 'judaisme', label: 'D’un shéol indifférencié à la résurrection', text: "La Bible ancienne ne connaît que le shéol, où vont tous les morts sans distinction morale. La résurrection apparaît tardivement (Daniel 12, IIe s. av. J.-C.), au moment où des justes meurent en martyrs. Le judaïsme contemporain met l'accent sur ce monde-ci plus que sur l'autre." },
      { traditionId: 'christianisme', label: 'Résurrection des corps et jugement', text: "Non l'immortalité d'une âme séparée (idée grecque) mais la résurrection de la personne entière. L'enfer éternel est majoritaire mais contesté depuis Origène ; l'universalisme du salut reste une option minoritaire persistante." },
      { traditionId: 'islam', label: 'Résurrection, pesée, Paradis ou Enfer', text: "L'eschatologie coranique est vive et concrète : jardins, fleuves, feu. Le Paradis y est explicitement corporel. Certains théologiens ont soutenu que l'Enfer n'est pas éternel." },
      { traditionId: 'hindouisme', label: 'Renaissance jusqu’à la libération', text: "Le samsara n'est pas un espoir mais une lassitude. Ciels et enfers existent mais sont temporaires. Le but est de sortir du cycle (moksha), non d'y obtenir une meilleure place." },
      { traditionId: 'bouddhisme', label: 'Renaissance sans âme qui transmigre', text: "Le processus continue sans qu'aucune entité passe d'un corps à l'autre — image de la flamme qui allume une autre flamme. Le nirvana est l'extinction du feu de l'avidité, pas l'annihilation d'une personne." },
      { traditionId: 'zoroastrisme', label: 'Jugement individuel puis salut universel', text: "Le pont Chinvat trie les âmes trois jours après la mort ; mais à la Frashokereti finale, tous, y compris les damnés, sont purifiés et sauvés." },
      { traditionId: 'religion-egyptienne', label: 'La pesée du cœur', text: "Le cœur pesé contre la plume de Maât devant Osiris. L'échec n'est pas un châtiment éternel mais l'anéantissement : le monstre Ammout dévore." },
      { traditionId: 'religion-mesopotamienne', label: 'Un séjour poussiéreux pour tous', text: "Le Kur accueille justes et injustes sans distinction. Aucune rétribution morale — c'est ce qui rend l'Épopée de Gilgamesh si sombre." },
      { traditionId: 'religion-grecque', label: 'Hadès, puis les mystères', text: "L'Odyssée décrit une survie diminuée et sans joie. Les cultes à mystères et l'orphisme promettent ensuite un sort meilleur aux initiés — c'est précisément ce que le culte civique n'offrait pas." },
      { traditionId: 'confucianisme', label: 'La présence des ancêtres', text: "Pas de doctrine élaborée de l'au-delà, mais un culte des ancêtres qui les maintient membres actifs de la famille. L'immortalité est mémorielle et lignagère." },
      { traditionId: 'humanisme-seculier', label: 'Rien, et c’est à intégrer', text: "Position d'Épicure : « quand la mort est là, nous ne sommes plus ». Les traditions séculières développent des rites funéraires propres, preuve que le besoin symbolique survit à la croyance." },
    ],
    convergences: [
      "Presque toutes les traditions refusent que l'injustice ait le dernier mot — que ce soit par un jugement, un rééquilibrage karmique ou une mémoire.",
      "Partout, les conceptions de l'au-delà s'élaborent ou se durcissent en période de persécution : Daniel sous Antiochos, l'Apocalypse sous Domitien, le culte de Husayn après Kerbala.",
      "Le rite funéraire est le plus universel des rites : aucune société connue ne se débarrasse simplement de ses morts.",
    ],
    divergences: [
      "Une seule vie ou une chaîne de vies : c'est le grand partage entre traditions abrahamiques et traditions indiennes.",
      "Sauver quelque chose de la personne, ou constater qu'il n'y a pas de personne à sauver (bouddhisme).",
      "Éternité du châtiment : affirmée, tempérée ou niée selon les courants — y compris à l'intérieur d'une même religion.",
    ],
    analysis:
      "L'évolution interne est plus instructive que la comparaison statique. Le judaïsme passe en quelques siècles d'un shéol sans jugement à la résurrection, précisément pendant et après le contact avec la Perse zoroastrienne, et au moment où le martyre rend intolérable l'idée d'une mort sans réparation. L'Égypte démocratise l'accès à l'immortalité, d'abord royale. L'Inde invente un cycle puis cherche à en sortir. Dans tous les cas, la doctrine de l'au-delà répond à une pression historique : elle ne tombe pas du ciel.",
  },

  {
    id: 'origine-du-mal',
    title: 'D’où vient le mal ?',
    question: 'La question que toute religion doit affronter — et à laquelle aucune ne répond pleinement.',
    icon: '⚖',
    summary:
      "Si un Dieu est bon et tout-puissant, pourquoi la souffrance ? Le problème ne se pose avec cette acuité que dans le monothéisme ; les autres traditions le résolvent en amont, par leur structure même.",
    positions: [
      { traditionId: 'zoroastrisme', label: 'Deux principes', text: "La réponse la plus économique : Dieu est bon, un autre principe est mauvais, et le combat se résoudra par la victoire du bien. Le prix payé est l'abandon de l'unicité absolue." },
      { traditionId: 'judaisme', label: 'Le refus des réponses faciles', text: "Le livre de Job donne tort aux amis qui expliquent la souffrance par la faute, et raison à celui qui proteste. Le judaïsme rabbinique n'a jamais dogmatisé de théodicée. Après la Shoah, certains théologiens ont carrément mis Dieu en accusation." },
      { traditionId: 'christianisme', label: 'Privation et péché originel', text: "Augustin : le mal n'est pas une substance mais un manque d'être, et la liberté humaine mal usée l'a introduit. Réponse philosophiquement élégante, moralement contestée : elle explique mal la souffrance des innocents et des animaux." },
      { traditionId: 'islam', label: 'Épreuve et décret', text: "Le mal est une épreuve (bala) au sein d'un décret divin dont la sagesse échappe. La tension entre toute-puissance et justice divine a opposé mutazilites et ash'arites — les premiers, défenseurs d'une justice rationnellement contraignante, ont perdu." },
      { traditionId: 'hindouisme', label: 'Le karma', text: "La souffrance présente résulte d'actes passés, sur plusieurs vies. La réponse est cohérente et complète — mais elle risque de justifier l'inaction devant l'injustice, ce qu'Ambedkar lui a violemment reproché." },
      { traditionId: 'bouddhisme', label: 'Une mécanique, pas un mystère', text: "La souffrance a une cause identifiable — l'avidité fondée sur l'illusion du moi — et donc un remède. Il n'y a pas de problème du mal parce qu'il n'y a pas de créateur à disculper." },
      { traditionId: 'gnosticisme', label: 'Le monde est raté', text: "La solution la plus radicale : ce monde n'a pas été fait par le vrai Dieu mais par un démiurge inférieur et ignorant. Le mal n'est pas un accident, c'est la structure de la réalité matérielle." },
      { traditionId: 'jainisme', label: 'Une substance qui colle', text: "Le karma est ici matériel : une substance subtile que la violence attache à l'âme. Cesser de nuire, c'est cesser d'accumuler." },
      { traditionId: 'judaisme', label: 'Le retrait de Dieu (Louria)', text: "Pour créer, l'infini s'est contracté ; les vases destinés à recevoir sa lumière se sont brisés. Le monde tel qu'il est n'est pas le monde tel qu'il devait être, et c'est à nous de le réparer." },
      { traditionId: 'humanisme-seculier', label: 'Il n’y a rien à expliquer', text: "Sans providence, la souffrance n'appelle pas de justification, seulement une action. L'argument du mal reste l'objection la plus forte au théisme — et la théodicée son chantier le plus fréquenté." },
    ],
    convergences: [
      "Toutes les traditions reconnaissent que le mal est un scandale, non un simple fait : personne ne s'en accommode théoriquement.",
      "Toutes valorisent, à des degrés divers, la souffrance assumée pour autrui : Serviteur souffrant, croix, Husayn, bodhisattva, satyagraha.",
      "Presque toutes finissent par avouer une limite : « le dharma est subtil », « mes voies ne sont pas vos voies », le silence du Bouddha, le tourbillon de Job.",
    ],
    divergences: [
      "Le mal a-t-il une cause morale (karma, péché) ou est-il gratuit (Job) ?",
      "Est-il extérieur (un principe mauvais, un démiurge) ou intérieur (l'ignorance, le désir) ?",
      "Sera-t-il vaincu (zoroastrisme, christianisme) ou simplement quitté (bouddhisme, gnosticisme) ?",
    ],
    analysis:
      "Un test utile pour comparer les traditions : demandez à chacune ce qu'elle dit à un parent dont l'enfant vient de mourir. Le karma répond « il y a une raison » — cohérent mais dur. Job répond « il n'y a pas de raison, et ceux qui prétendent le contraire ont tort ». Louria répond « Dieu lui-même est brisé, et tu peux réparer ». Le bouddhisme répond « l'attachement est la source de ta douleur, et elle peut cesser ». L'humanisme répond « rien ne le justifie, et c'est pourquoi il faut lutter ». Chacune de ces réponses a un coût, et aucune ne clôt la question.",
  },

  {
    id: 'regle-or',
    title: 'La règle d’or',
    question: 'Le principe moral le plus universellement attesté — et ses variantes révélatrices.',
    icon: '↔',
    summary:
      "Toutes les grandes traditions formulent une version de la réciprocité morale, souvent sans contact historique. Les écarts entre formulations — positive ou négative, universelle ou limitée — sont plus instructifs que la ressemblance.",
    positions: [
      { traditionId: 'confucianisme', label: '« Ne l’impose pas à autrui »', text: "« Ce que tu ne souhaites pas pour toi-même, ne l'impose pas à autrui » (Entretiens 15,24). La plus ancienne formulation attestée, au Ve siècle av. J.-C." },
      { traditionId: 'judaisme', label: '« Va et étudie »', text: "Hillel : « Ce qui t'est odieux, ne le fais pas à ton prochain : c'est toute la Torah, le reste est commentaire. » La forme négative laisse à l'autre le soin de définir son bien." },
      { traditionId: 'christianisme', label: 'Formulation positive', text: "« Tout ce que vous voulez que les hommes fassent pour vous, faites-le pour eux » (Matthieu 7,12). Plus exigeante — et plus risquée : elle suppose que mon bien soit le bien d'autrui." },
      { traditionId: 'islam', label: 'Le désir pour son frère', text: "« Aucun de vous ne croit vraiment tant qu'il ne désire pas pour son frère ce qu'il désire pour lui-même » (hadith de Bukhari). Elle fait de la réciprocité une condition de la foi." },
      { traditionId: 'hindouisme', label: 'La somme du devoir', text: "« Voici la somme du devoir : ne fais pas à autrui ce qui te causerait de la peine si on te le faisait » (Mahabharata 5,1517)." },
      { traditionId: 'bouddhisme', label: 'La comparaison avec soi', text: "« Comme je suis, ainsi sont-ils ; comme ils sont, ainsi suis-je. Ayant fait la comparaison, ne tue pas et ne fais pas tuer » (Sutta Nipata 705)." },
      { traditionId: 'jainisme', label: 'L’extension au vivant', text: "« On doit traiter toutes les créatures comme on voudrait être traité soi-même. » La réciprocité s'étend ici à tout ce qui vit, insectes compris." },
      { traditionId: 'zoroastrisme', label: 'Le critère du bien', text: "« Cette nature seule est bonne qui s'abstient de faire à autrui ce qui ne serait pas bon pour soi » (Dadistan-i Dinik)." },
      { traditionId: 'religions-africaines', label: 'Ubuntu', text: "« Je suis parce que nous sommes. » La réciprocité y est moins une règle qu'une ontologie : nuire à autrui, c'est se diminuer soi-même." },
      { traditionId: 'religion-egyptienne', label: 'Le paysan éloquent', text: "« Fais à celui qui agit pour que lui aussi agisse » — attesté vers 1800 av. J.-C., peut-être la plus ancienne formulation écrite connue." },
    ],
    convergences: [
      "Une convergence indépendante remarquable : ces formulations apparaissent sur trois continents sans contact établi entre elles.",
      "Toutes reposent sur une capacité d'imagination de la place d'autrui, qui est peut-être le socle cognitif commun.",
    ],
    divergences: [
      "Forme négative (ne pas faire) ou positive (faire) : la seconde est plus généreuse mais suppose qu'on sache ce qui est bon pour autrui.",
      "Qui est « autrui » ? Le membre du groupe, l'humain, ou tout être sensible ? L'extension varie considérablement — et c'est l'histoire des morales.",
      "Une règle formelle ne dit pas quoi faire dans un conflit d'obligations : le Mahabharata et le Talmud passent des milliers de pages sur ce que la règle d'or ne résout pas.",
    ],
    analysis:
      "La règle d'or est régulièrement invoquée comme preuve d'une « morale universelle ». C'est vrai sur le principe et faux dans l'application : les traditions divergent sur le cercle des bénéficiaires (le compatriote ? l'esclave ? l'ennemi ? l'animal ?) et sur ce que la réciprocité implique concrètement. L'histoire morale de l'humanité est moins celle de la découverte de la règle que celle de l'élargissement progressif, et toujours contesté, de son périmètre.",
  },

  {
    id: 'deluges',
    title: 'Le déluge et les mythes partagés',
    question: 'Pourquoi les mêmes récits reviennent-ils d’une culture à l’autre ?',
    icon: '🌊',
    summary:
      "Déluges, jumeaux rivaux, dieux qui meurent et reviennent, enfants sauvés des eaux : certains récits circulent, d'autres se réinventent. Distinguer l'emprunt du parallèle est l'un des exercices les plus formateurs de l'histoire des religions.",
    positions: [
      { traditionId: 'religion-mesopotamienne', label: 'Atrahasis et Gilgamesh', text: "Les dieux, dérangés par le bruit des humains, décident de les détruire ; un homme averti construit un bateau, embarque les animaux, envoie des oiseaux, accoste sur une montagne et offre un sacrifice." },
      { traditionId: 'judaisme', label: 'Noé : le même récit, une autre théologie', text: "Tous les éléments sont là — arche, animaux, oiseaux, montagne, sacrifice —, mais le motif change : ce n'est plus le bruit qui déclenche le déluge, c'est la corruption morale. L'emprunt est aussi une polémique." },
      { traditionId: 'hindouisme', label: 'Manu et le poisson', text: "Un poisson averti Manu, qui construit un bateau et est remorqué jusqu'à une montagne. Le récit apparaît dans le Shatapatha Brahmana, sans lien démontré avec la Mésopotamie." },
      { traditionId: 'religion-grecque', label: 'Deucalion et Pyrrha', text: "Zeus noie l'humanité ; le couple survivant repeuple la terre en jetant des pierres. Contact probable avec le Proche-Orient." },
      { traditionId: 'religions-amerindiennes', label: 'Des déluges sans contact', text: "Des récits de déluge existent dans de nombreuses traditions américaines et océaniennes, sans transmission possible. Certains reflètent probablement des événements réels — montée des eaux post-glaciaire, tsunamis." },
    ],
    convergences: [
      "Le déluge est peut-être le mythe le plus répandu au monde ; l'inventaire de Frazer en recensait déjà des dizaines sur tous les continents.",
      "Le motif du dieu qui meurt et revient (Dumuzi, Osiris, Adonis, Perséphone, Baal) est également largement distribué autour de la Méditerranée.",
      "Le motif de l'enfant royal sauvé des eaux : Sargon d'Akkad, Moïse, Karna, Romulus. Le cas de Sargon précède Moïse d'un millénaire.",
    ],
    divergences: [
      "Emprunt direct : la relation Gilgamesh/Genèse est établie par la précision des correspondances et la proximité géographique.",
      "Héritage commun : les parallèles védiques-avestiques (soma/haoma, Mitra/Mithra) viennent d'un ancêtre indo-iranien.",
      "Convergence indépendante : les déluges américains, ou la règle d'or, s'expliquent par des causes structurelles, non par une transmission.",
    ],
    analysis:
      "Trois explications sont disponibles pour un parallèle, et il faut apprendre à les distinguer. La diffusion (le récit a voyagé) se prouve par la géographie, la chronologie et la précision des détails partagés. L'héritage (les deux viennent d'une source commune perdue) se prouve par la linguistique comparée. La convergence (les mêmes causes produisent les mêmes effets) explique les récurrences sans contact possible. L'erreur du XIXe siècle — celle de Frazer et de son Rameau d'or — fut de tout ramener au premier modèle et d'en conclure que toutes les religions racontaient au fond la même histoire. L'erreur inverse consiste à nier des emprunts pourtant documentés. Le cas Gilgamesh/Genèse est le meilleur terrain d'entraînement : l'emprunt est certain, et la transformation théologique qui l'accompagne est le vrai sujet.",
  },

  {
    id: 'messianisme',
    title: 'Attendre un sauveur',
    question: 'Messie, mahdi, maitreya, saoshyant : la structure commune de l’attente.',
    icon: '★',
    summary:
      "L'idée qu'un personnage viendra rétablir la justice traverse presque toutes les traditions. Sa forme varie — roi, prophète, bouddha, avatar — mais la fonction est constante : rendre l'histoire supportable en lui donnant un terme.",
    positions: [
      { traditionId: 'zoroastrisme', label: 'Le Saoshyant', text: "Un sauveur né miraculeusement de la semence de Zarathoustra, qui présidera à la résurrection et à la rénovation du monde. Probablement le prototype de toute la famille." },
      { traditionId: 'judaisme', label: 'Le Messie fils de David', text: "Une figure humaine, royale, qui rassemblera les exilés, rebâtira le Temple et instaurera la paix. Maïmonide insiste : rien de l'ordre du monde ne changera, sinon la fin de l'oppression. Beaucoup de courants préfèrent parler d'une ère que d'un individu." },
      { traditionId: 'christianisme', label: 'Le Messie déjà venu, et qui revient', text: "L'originalité chrétienne est de dédoubler l'attente : le Messie est venu, il a échoué selon les critères attendus, et il reviendra. Le report indéfini de ce retour est l'un des grands moteurs de l'institutionnalisation de l'Église." },
      { traditionId: 'islam', label: 'Le Mahdi', text: "Chez les sunnites, une figure eschatologique aux contours flous. Chez les chiites duodécimains, le douzième imam, occulté depuis 874 et attendu comme guide — doctrine aux conséquences politiques considérables en Iran." },
      { traditionId: 'bouddhisme', label: 'Maitreya', text: "Le bouddha à venir, qui enseignera à nouveau le dharma quand celui-ci aura disparu. Des mouvements millénaristes maitreyens ont provoqué des révoltes en Chine." },
      { traditionId: 'hindouisme', label: 'Kalki', text: "Le dixième avatar de Vishnou, cavalier à l'épée flamboyante, qui mettra fin au Kali Yuga. Sa fonction est cyclique, non historique : le monde ne finit pas, il recommence." },
      { traditionId: 'bahaisme', label: 'L’attente accomplie et rouverte', text: "Le Báb et Bahá'u'lláh se présentent comme l'accomplissement des attentes juive, chrétienne, musulmane et zoroastrienne — tout en annonçant qu'une autre Manifestation viendra, pas avant mille ans." },
      { traditionId: 'rastafari', label: 'Le retour déjà survenu', text: "Le couronnement de Haïlé Sélassié en 1930 est lu comme accomplissement prophétique. Le cas illustre la capacité d'une attente à s'ancrer dans un événement contemporain vérifiable." },
      { traditionId: 'humanisme-seculier', label: 'Les messianismes sécularisés', text: "Karl Löwith et Jacob Taubes ont montré que les philosophies du progrès et de la révolution reprennent la structure eschatologique juive et chrétienne : une histoire orientée, une crise finale, une société réconciliée." },
    ],
    convergences: [
      "Presque partout, la même structure : le monde va mal, cela ne durera pas, quelqu'un viendra, et la justice sera faite.",
      "Les attentes messianiques s'intensifient systématiquement en période de crise : occupation étrangère, persécution, effondrement social.",
      "Toutes les traditions ont dû gérer la déception : report, spiritualisation, réinterprétation. Le sabbatéisme, l'adventisme et le christianisme primitif offrent trois solutions différentes au même problème.",
    ],
    divergences: [
      "Le sauveur est-il humain (judaïsme), divin (christianisme), déjà né et caché (chiisme) ou encore à naître (bouddhisme) ?",
      "L'attente est-elle historique (une fin) ou cyclique (un recommencement) ?",
      "Faut-il hâter la venue par l'action, ou attendre passivement ? Cette question a produit des quiétismes et des insurrections.",
    ],
    analysis:
      "Le messianisme est peut-être la contribution la plus lourde de conséquences des religions abrahamiques à l'histoire politique. Il introduit l'idée que le temps va quelque part, que l'ordre présent est provisoire et que l'injustice est une anomalie destinée à finir. Sécularisée, cette structure devient la philosophie de l'histoire, l'idée de progrès, et les grands récits révolutionnaires du XIXe et du XXe siècle. Comprendre le messianisme, c'est comprendre pourquoi l'Occident a du mal à penser un temps qui ne mène nulle part.",
  },

  {
    id: 'femmes',
    title: 'La place des femmes',
    question: 'Ce que les traditions ont dit, ce qu’elles ont fait, et ce qui change.',
    icon: '♀',
    summary:
      "Presque toutes les traditions se sont constituées dans des sociétés patriarcales et en portent la marque dans leurs textes. Presque toutes contiennent aussi des figures et des textes qui contredisent cette marque. Le conflit est donc interne, pas seulement externe.",
    positions: [
      { traditionId: 'judaisme', label: 'Exclusion rituelle et autorité réelle', text: "Exemption des commandements liés au temps, absence du minyan, difficulté du divorce (le problème des agounot). Mais aussi Myriam, Déborah, Houlda, les prières de Hannah devenues modèle liturgique. Rabbins femmes depuis 1935 (réformé) et 1985 (conservateur)." },
      { traditionId: 'christianisme', label: 'Une contradiction fondatrice', text: "Galates 3,28 abolit la distinction homme/femme « dans le Christ » ; les Pastorales imposent le silence. Les premières témoins de la résurrection sont des femmes. Diaconesses attestées, puis effacées. Ordination presbytérale ouverte chez les protestants et anglicans, fermée chez catholiques et orthodoxes." },
      { traditionId: 'islam', label: 'Réformes réelles et blocages persistants', text: "Droit à l'héritage, à la propriété et au consentement au mariage, dans un contexte où la femme était souvent elle-même un bien. Mais témoignage inégal, héritage inégal, tutelle. Aïcha transmet plus de 2 000 hadiths ; les femmes disparaissent ensuite du savoir religieux — évolution, non donnée originelle." },
      { traditionId: 'hindouisme', label: 'Déesses puissantes, femmes contraintes', text: "Le shaktisme fait de la Déesse l'énergie ultime ; Manu déclare qu'une femme ne doit jamais être indépendante. Gargi débat avec Yajnavalkya ; les veuves furent brûlées. Aucune synthèse ne rend justice à cet écart." },
      { traditionId: 'bouddhisme', label: 'Ordination obtenue puis perdue', text: "Mahaprajapati obtient l'ordination après trois refus ; les Therigatha sont le plus ancien corpus littéraire féminin connu. Mais huit règles supplémentaires subordonnent les moniales, et la lignée d'ordination s'est éteinte dans le Theravada — sa restauration divise aujourd'hui." },
      { traditionId: 'sikhisme', label: 'Égalité doctrinale explicite', text: "Nanak : « Pourquoi la traiter de mauvaise, celle qui donne naissance aux rois ? » Les femmes peuvent diriger le culte et lire l'Écriture ; les initiées portent toutes le nom de Kaur. La pratique reste en retrait de la doctrine." },
      { traditionId: 'bahaisme', label: 'Principe fondateur', text: "Égalité des sexes énoncée comme principe au XIXe siècle, priorité donnée à l'éducation des filles en cas de ressources limitées. Une seule institution leur reste fermée : la Maison universelle de justice — point débattu." },
      { traditionId: 'religions-africaines', label: 'Prêtresses et possession', text: "De nombreux cultes sont dirigés par des femmes ; le candomblé brésilien est largement structuré autour des mães de santo. La possession rituelle donne une autorité que l'ordre social ne donne pas." },
      { traditionId: 'neopaganisme', label: 'Le féminin divin comme projet', text: "Réintroduction explicite d'une Déesse en réponse à un imaginaire jugé exclusivement masculin. C'est la seule famille religieuse dont le féminisme soit une cause fondatrice." },
    ],
    convergences: [
      "Partout, un écart entre les textes fondateurs (souvent plus ouverts qu'on ne croit) et l'institutionnalisation ultérieure (presque toujours plus fermée).",
      "Partout, la mystique offre aux femmes une autorité que le droit leur refuse : Thérèse d'Ávila, Rabia, Mirabai, les moniales du Therigatha, les uqqal druzes.",
      "Partout depuis un siècle, une exégèse féministe interne qui relit les sources contre leur réception — Amina Wadud, Elisabeth Schüssler Fiorenza, Judith Plaskow.",
    ],
    divergences: [
      "Certaines traditions ont ouvert l'ordination et le leadership rituel ; d'autres le refusent au nom d'une ontologie ou d'une tradition.",
      "Le divin est-il genré ? La Chekhina juive, la Déesse hindoue, la Vierge catholique et « Dieu notre mère » chez Julienne de Norwich offrent des réponses très différentes.",
    ],
    analysis:
      "Le débat public oppose souvent des religions « patriarcales » à une modernité « égalitaire ». Le tableau réel est plus intéressant : les conflits sont majoritairement internes, ils opposent des lectures d'un même corpus, et ils s'appuient sur des ressources textuelles anciennes. Aucune tradition ne peut être réduite à ses passages les plus restrictifs, et aucune ne peut faire l'économie de les affronter. Le critère le plus honnête pour évaluer une tradition sur ce point n'est pas ce que dit son texte le plus favorable, mais ce qu'elle fait aujourd'hui de son texte le plus défavorable.",
  },

  {
    id: 'violence',
    title: 'Religion et violence',
    question: 'Les religions rendent-elles violent, ou la violence se sert-elle des religions ?',
    icon: '⚔',
    summary:
      "Aucune tradition majeure n'a un bilan propre. Aucune ne se réduit non plus à ses violences. La question utile n'est pas « la religion est-elle violente ? » mais « à quelles conditions un discours religieux légitime-t-il la violence, et à quelles conditions la freine-t-il ? ».",
    positions: [
      { traditionId: 'judaisme', label: 'Le herem et son désamorçage', text: "Les ordres d'extermination du livre de Josué sont le texte le plus difficile de la Bible hébraïque. La tradition rabbinique les a largement neutralisés en déclarant les peuples visés introuvables. Mais le texte a servi ailleurs, notamment aux colonisations puritaines." },
      { traditionId: 'christianisme', label: 'Une religion de non-violence au pouvoir', text: "« Aimez vos ennemis » — puis croisades, Inquisition, guerres de religion, conquêtes coloniales, bénédiction des armées. Le tournant est constantinien : une religion persécutée devient religion d'État en un siècle." },
      { traditionId: 'islam', label: 'Un droit de la guerre, et son abandon', text: "Le fiqh classique encadre strictement le combat : pas de meurtre de non-combattants, de destruction des récoltes, de mutilation. Les groupes jihadistes contemporains rompent avec cette jurisprudence, notamment en généralisant le takfir — l'excommunication d'autres musulmans." },
      { traditionId: 'hindouisme', label: 'Ahimsa et devoir du guerrier', text: "La Gita justifie qu'Arjuna combatte, au nom du devoir de sa caste. Gandhi la lisait allégoriquement ; le nationalisme hindou contemporain la lit littéralement. Le même texte, deux politiques." },
      { traditionId: 'bouddhisme', label: 'Le démenti des faits', text: "Moines-soldats japonais, soutien du zen au militarisme impérial (documenté par Brian Victoria), nationalismes bouddhistes birman et cingalais. La doctrine de non-violence n'a jamais garanti l'innocence institutionnelle." },
      { traditionId: 'sikhisme', label: 'La force strictement subordonnée', text: "Le sant-sipahi ne prend les armes qu'en dernier recours et pour défendre l'opprimé, y compris d'une autre foi. Guru Tegh Bahadur meurt pour le droit des hindous à pratiquer leur religion." },
      { traditionId: 'jainisme', label: 'Le seul bilan à peu près propre', text: "L'ahimsa absolue exclut l'armée et l'agriculture. Le jaïnisme est probablement la seule tradition majeure sans histoire de violence organisée — au prix d'une clôture sociale étroite." },
      { traditionId: 'humanisme-seculier', label: 'Les violences séculières', text: "Les régimes athées du XXe siècle ont persécuté et tué massivement au nom d'idéologies non religieuses. Cela n'excuse rien, mais interdit d'imputer la violence à la seule religion." },
    ],
    convergences: [
      "Toutes les traditions disposent de ressources pour légitimer la violence et de ressources pour la contester : le conflit est interne.",
      "La violence religieuse s'intensifie systématiquement lorsque la religion se confond avec une identité nationale ou ethnique menacée.",
      "Les périodes de plus grande violence coïncident presque toujours avec l'alliance du religieux et de l'appareil d'État.",
    ],
    divergences: [
      "Certaines traditions disposent d'un droit de la guerre élaboré (islam, catholicisme avec la guerre juste), d'autres non.",
      "Certaines ont un fondateur politique et militaire (Muhammad, Gobind Singh), d'autres un fondateur exécuté par le pouvoir (Jésus, Socrate, al-Hallaj).",
    ],
    analysis:
      "Deux thèses simples circulent, toutes deux fausses. « La religion cause la violence » ignore que les mêmes traditions produisent Gandhi, King et Romero, et que les États athées ont tué à grande échelle. « La religion n'y est pour rien » ignore que les textes fournissent des scripts, des justifications et une transcendance qui rend les compromis plus difficiles. La position défendable est intermédiaire : la religion est rarement la cause première d'un conflit — les causes sont politiques, économiques, territoriales — mais elle est un puissant amplificateur, parce qu'elle transforme un intérêt en absolu. Le meilleur test pour évaluer une tradition n'est pas son passé, que tout le monde partage, mais sa capacité actuelle à condamner explicitement ses propres extrémistes.",
  },

  {
    id: 'rituel',
    title: 'À quoi servent les rites ?',
    question: 'Répétition, corps, communauté : la part la plus universelle et la moins expliquée du religieux.',
    icon: '◈',
    summary:
      "On peut avoir une religion sans dogme (shintō), sans dieu (bouddhisme theravada), sans clergé (islam sunnite) — mais on n'en connaît aucune sans rite. C'est probablement l'élément le plus fondamental, et le plus mal compris par une modernité qui privilégie la croyance.",
    positions: [
      { traditionId: 'judaisme', label: 'Sanctifier le temps ordinaire', text: "613 commandements couvrant le repas, la semaine, le vêtement, le champ. Le geste précède l'intention : « nous ferons et nous écouterons » (Exode 24,7), dans cet ordre." },
      { traditionId: 'christianisme', label: 'Signes efficaces', text: "Le sacrement est un signe visible qui produit ce qu'il signifie. Le désaccord sur son efficacité — réelle ou symbolique — est l'une des lignes de fracture majeures entre confessions." },
      { traditionId: 'islam', label: 'Cinq prières, un pèlerinage', text: "La salat structure la journée ; le hajj, vêtu du même tissu blanc que deux millions d'autres, produit une expérience d'égalité que nul discours n'égale." },
      { traditionId: 'hindouisme', label: 'Le rite comme technique', text: "Le sacrifice védique agit par sa correction formelle, indépendamment de la piété de l'officiant — position de la mimamsa, poussée jusqu'à l'athéisme rituel." },
      { traditionId: 'confucianisme', label: 'Le rite forme l’intérieur', text: "Li : la conduite juste façonne le caractère par le corps. Xunzi va plus loin : les rites n'ont pas d'efficacité surnaturelle, mais ils fabriquent la société et l'humanité." },
      { traditionId: 'shintoisme', label: 'Orthopraxie sans dogme', text: "On peut accomplir les rites shintō sans y « croire » au sens occidental. La majorité des Japonais se déclarent sans religion et pratiquent." },
      { traditionId: 'religions-africaines', label: 'Le corps comme lieu du divin', text: "La possession rituelle rend la divinité présente dans un corps humain. Le sacré n'est pas énoncé, il est incarné et dansé." },
      { traditionId: 'humanisme-seculier', label: 'Rites séculiers', text: "Cérémonies humanistes de naissance, de mariage et de funérailles ; reconnaissance officielle dans plusieurs pays. Preuve empirique que le besoin rituel ne disparaît pas avec la croyance." },
    ],
    convergences: [
      "Le rite de passage (naissance, puberté, mariage, mort) est présent dans toutes les sociétés connues, avec la structure décrite par Van Gennep : séparation, marge, agrégation.",
      "Partout, le rite produit du groupe : l'effervescence collective décrite par Durkheim est observable dans une procession, un pèlerinage, un concert et un stade.",
      "Partout, le rite marque le temps : la semaine, l'année, la vie. Le calendrier est une invention religieuse.",
    ],
    divergences: [
      "Le rite est-il efficace en lui-même (ex opere operato) ou dépendant de l'intention ? La question a divisé le christianisme et la mimamsa hindoue.",
      "Certaines traditions ont périodiquement dénoncé le rite au nom de l'intériorité — prophètes bibliques, Kabir, protestantisme, Nanak — sans jamais parvenir à s'en passer.",
    ],
    analysis:
      "La modernité occidentale a hérité d'une conception protestante puis séculière de la religion comme ensemble de croyances : on « croit » ou non. Cette grille rend inintelligible la majorité des religions humaines, où l'appartenance est d'abord une pratique. Un Japonais qui se marie au sanctuaire shintō, fête Noël et est enterré selon le rite bouddhique ne se contredit pas : il ne joue simplement pas au même jeu. Prendre le rite au sérieux — comme technique du corps, comme production de communauté, comme structuration du temps — est probablement le déplacement le plus utile pour comprendre le fait religieux de l'intérieur.",
  },

  {
    id: 'mystique',
    title: 'L’expérience mystique',
    question: 'Les mystiques de traditions opposées se ressemblent-ils vraiment ?',
    icon: '✧',
    summary:
      "Eckhart et Shankara, Rumi et Jean de la Croix, le zen et l'hésychasme : les convergences sont frappantes. Mais faut-il en conclure à une expérience universelle sous des vocabulaires différents, ou à des expériences réellement différentes que nous rapprochons abusivement ?",
    positions: [
      { traditionId: 'hindouisme', label: 'Identité', text: "L'advaita conclut à l'identité du soi et de l'absolu : « tu es cela ». La dualité était une illusion." },
      { traditionId: 'christianisme', label: 'Union sans confusion', text: "Eckhart : « L'œil par lequel je vois Dieu est le même œil par lequel Dieu me voit. » Mais l'orthodoxie maintient une distinction : la créature ne devient pas Dieu, elle participe à ses énergies (Palamas)." },
      { traditionId: 'islam', label: 'Fana et le scandale', text: "L'extinction du moi en Dieu. Al-Hallaj proclame « Je suis la Vérité » et est exécuté. Ibn Arabi systématise l'unité de l'être ; ses adversaires y voient du panthéisme." },
      { traditionId: 'judaisme', label: 'Devekout, l’adhésion', text: "La mystique juive parle d'adhésion (devekout) plutôt que de fusion : la distance entre créature et créateur est maintenue, sauf chez quelques kabbalistes audacieux." },
      { traditionId: 'bouddhisme', label: 'Ni union ni fusion', text: "Il n'y a ni soi ni absolu à unir. Le zen refuse même le mot « expérience » : il n'y a rien à obtenir, seulement à cesser de chercher." },
      { traditionId: 'taoisme', label: 'L’assise dans l’oubli', text: "Zuowang : oublier son corps, congédier son intelligence, s'identifier au grand cheminement. Ni union avec un dieu ni réalisation d'un soi." },
    ],
    convergences: [
      "Une structure récurrente : purification, illumination, union — décrite indépendamment en Inde, en Grèce, en islam et dans le christianisme.",
      "Un vocabulaire commun de l'ineffable et de la négation : neti neti, la nuée de l'inconnaissance, la théologie négative, le « ni ceci ni cela » du Dao.",
      "Une méfiance partagée envers les phénomènes extraordinaires : Patanjali dit d'ignorer les pouvoirs, Thérèse d'Ávila juge les extases sur leurs fruits concrets, le zen appelle « makyo » les visions.",
      "Des techniques étonnamment proches : répétition d'une formule au rythme du souffle chez les hésychastes, les soufis et les hindous.",
    ],
    divergences: [
      "Union avec un Dieu personnel, réalisation d'une identité impersonnelle, ou dissolution d'une illusion : ce ne sont peut-être pas trois descriptions d'une même chose.",
      "Certaines traditions font de l'expérience mystique le sommet, d'autres s'en méfient comme d'une distraction (le judaïsme rabbinique après Sabbataï, l'islam littéraliste)." ,
    ],
    analysis:
      "Le débat oppose deux camps. Les « pérennialistes » (Aldous Huxley, Frithjof Schuon, en partie William James) soutiennent qu'il existe une expérience mystique universelle diversement interprétée. Les « constructivistes » (Steven Katz) répondent qu'aucune expérience n'est brute : un carme s'attend à rencontrer le Christ et rencontre le Christ ; un bouddhiste ne s'attend à rencontrer personne et ne rencontre personne. La position la plus solide aujourd'hui reconnaît des invariants réels — techniques attentionnelles, phénoménologie de la dissolution du moi, effets sur le caractère — tout en refusant de conclure que les traditions disent la même chose. Les neurosciences documentent des corrélats communs sans trancher la question philosophique, qui n'est pas de leur ressort.",
  },

  {
    id: 'pureté',
    title: 'Pur et impur',
    question: 'Pourquoi presque toutes les religions classent-elles le monde en pur et impur ?',
    icon: '◐',
    summary:
      "Interdits alimentaires, purifications, castes, tabous du sang et de la mort : une grammaire quasi universelle, souvent indépendante de la morale. On peut être impur sans avoir mal agi.",
    positions: [
      { traditionId: 'judaisme', label: 'La cacherout et la pureté rituelle', text: "Animaux permis et interdits, séparation lait/viande, impureté liée au contact du mort, aux règles, à l'accouchement. Aucune faute morale n'est en jeu : c'est un autre registre." },
      { traditionId: 'islam', label: 'Halal, haram, ablutions', text: "Ablutions avant chaque prière, interdits du porc, de l'alcool, du sang. Système plus léger que le lévitique mais de même logique." },
      { traditionId: 'hindouisme', label: 'Pureté et hiérarchie sociale', text: "Ici, la pureté structure la société entière : les castes sont classées selon leur degré de pureté, et l'intouchabilité en découle. C'est le cas où le système de pureté a les effets sociaux les plus lourds." },
      { traditionId: 'shintoisme', label: 'Kegare et harae', text: "La souillure vient du contact avec la mort, le sang, la maladie ; elle se lave par des rites. La faute morale y est secondaire par rapport à la souillure." },
      { traditionId: 'zoroastrisme', label: 'Ne pas souiller les éléments', text: "Terre, eau, feu et air étant purs, le cadavre ne doit les toucher : d'où l'exposition aux vautours. Une écologie sacrale avant la lettre." },
      { traditionId: 'jainisme', label: 'La pureté comme non-violence', text: "Les interdits alimentaires jaïns ne relèvent pas de la souillure mais du calcul du nombre d'êtres tués : pas de racines, pas de repas après le coucher du soleil." },
      { traditionId: 'christianisme', label: 'L’abolition revendiquée', text: "« Rien de ce qui entre dans l'homme ne peut le souiller » (Marc 7) et la vision de Pierre à Joppé. Le christianisme s'est largement construit en abolissant les codes de pureté — geste qui a rendu possible son universalisation." },
    ],
    convergences: [
      "Les catégories de pureté sont presque toujours indépendantes de la morale : c'est ce qui les rend si déroutantes pour un regard moderne.",
      "Elles concernent partout les mêmes zones : la mort, le sang, la sexualité, l'alimentation, les frontières du corps.",
      "Elles fonctionnent partout comme marqueurs identitaires : ce qu'on mange dit avec qui on peut manger, donc qui l'on est.",
    ],
    divergences: [
      "Certaines traditions ont fait de la pureté un principe de hiérarchie sociale permanente (castes), d'autres un état temporaire et réparable.",
      "Le christianisme et une part du bouddhisme ont explicitement rompu avec les codes de pureté — ce qui est un événement rare et lourd de conséquences.",
    ],
    analysis:
      "L'analyse la plus éclairante reste celle de Mary Douglas dans De la souillure (1966) : l'impur est ce qui brouille les catégories du système de classement. Les animaux interdits du Lévitique sont ceux qui ne rentrent pas dans les cases — le porc a le sabot fendu mais ne rumine pas, les crustacés vivent dans l'eau sans nageoires ni écailles. Le tabou n'est pas irrationnel : il est le revers d'un ordre. Cette lecture explique aussi pourquoi les codes de pureté se renforcent quand un groupe se sent menacé dans ses frontières, et pourquoi les rompre est toujours un acte politique — ce que Pierre à Joppé, le langar sikh et le repas partagé de Jésus avec les collecteurs d'impôts illustrent chacun à leur manière.",
  },

  {
    id: 'salut',
    title: 'Par la foi, par les œuvres, par la connaissance ?',
    question: 'Comment échappe-t-on à la condition ordinaire ? La question du salut et de la grâce.',
    icon: '⤴',
    summary:
      "Faut-il faire quelque chose pour être sauvé, ou est-ce donné ? La question a divisé le christianisme au XVIe siècle — et elle a divisé le bouddhisme japonais au XIIIe, sans aucun contact.",
    positions: [
      { traditionId: 'christianisme', label: 'La grâce seule', text: "Paul, Augustin, Luther : le salut est un don, jamais un salaire. Le catholicisme et l'orthodoxie maintiennent une coopération de la liberté humaine ; le calvinisme pousse jusqu'à la prédestination." },
      { traditionId: 'judaisme', label: 'La question ne se pose pas ainsi', text: "L'alliance est déjà donnée ; il s'agit d'y être fidèle. La techouva — le retour — est toujours possible. Le judaïsme n'a pas de doctrine du salut individuel comparable." },
      { traditionId: 'islam', label: 'Actes et miséricorde', text: "La pesée des actes, mais aussi la miséricorde divine qui excède la justice : « Ma miséricorde embrasse toute chose » (7,156). L'intercession du Prophète tempère la comptabilité." },
      { traditionId: 'hindouisme', label: 'Trois voies', text: "Action désintéressée, connaissance libératrice, amour dévotionnel. La Gita les déclare équivalentes ; les écoles de bhakti font ensuite de la grâce divine le facteur décisif." },
      { traditionId: 'bouddhisme', label: 'Effort propre', text: "Dans le Theravada, personne ne peut vous libérer : « Soyez à vous-mêmes votre propre lampe. » Le Bouddha montre le chemin, il ne le parcourt pas pour vous." },
      { traditionId: 'bouddhisme', label: 'Force de l’autre (Terre Pure)', text: "Shinran renverse tout : nous sommes incapables de nous sauver, seul le vœu d'Amida sauve, et même la foi est un don. « Si même l'homme bon renaît en Terre Pure, à plus forte raison le méchant. » Un parallèle stupéfiant avec Luther, sans aucun contact." },
      { traditionId: 'jainisme', label: 'Aucune aide possible', text: "Pas de dieu, pas de grâce : la libération s'obtient par l'ascèse seule. La position la plus rigoureusement autonome." },
      { traditionId: 'sikhisme', label: 'Grâce et souvenir', text: "Le nam simran dissout l'ego, mais la libération dépend finalement de la nadar, le regard de grâce divine." },
    ],
    convergences: [
      "Partout, la même tension : si l'effort suffit, l'absolu devient superflu ; si la grâce fait tout, l'effort devient absurde. Aucune tradition ne résout ce paradoxe, toutes le gèrent.",
      "Partout, la métaphore animale : le singe qui s'accroche (l'effort) contre le chat qui est porté (la grâce) — image des écoles vishnouites, structurellement identique aux débats chrétiens sur le semi-pélagianisme.",
    ],
    divergences: [
      "Le salut est-il individuel (christianisme, bouddhisme) ou collectif (judaïsme, où l'on parle du monde à venir pour un peuple et pour l'humanité) ?",
      "Faut-il sortir du monde ou le transformer ? La réponse détermine l'attitude politique de chaque tradition.",
    ],
    analysis:
      "La convergence entre Luther et Shinran est l'un des faits les plus troublants de l'histoire comparée des religions. Deux hommes, séparés de trois siècles et de dix mille kilomètres, sans le moindre contact, aboutissent à la même conclusion : l'effort de se sauver soi-même est encore de l'orgueil, seule une force extérieure sauve, et la foi elle-même est reçue. Cela ne prouve pas qu'ils ont raison ; cela suggère que la structure du problème — un être fini se sachant incapable d'atteindre l'absolu — impose une gamme limitée de solutions. C'est l'un des meilleurs arguments en faveur d'une approche comparative : certaines réponses sont réinventées parce que la question est la même.",
  },

  {
    id: 'ecologie',
    title: 'Les religions et la nature',
    question: 'Ressource à exploiter, parentèle, ou illusion à quitter ?',
    icon: '🌿',
    summary:
      "Depuis un article célèbre de Lynn White (1967) accusant le christianisme d'avoir autorisé l'exploitation de la nature, toutes les traditions ont relu leurs sources. Le résultat est plus contrasté que le procès initial.",
    positions: [
      { traditionId: 'judaisme', label: 'Dominer ou garder ?', text: "Genèse 1,28 dit « soumettez la terre », mais Genèse 2,15 dit « pour la cultiver et la garder ». La loi interdit de couper les arbres fruitiers en temps de guerre (Dt 20,19) et impose le repos de la terre une année sur sept." },
      { traditionId: 'christianisme', label: 'De la domination à la gérance', text: "L'accusation de Lynn White a produit une réaction : théologie de l'intendance, redécouverte de François d'Assise, encyclique Laudato si' (2015). La question de savoir si c'est une redécouverte ou une réinvention reste ouverte." },
      { traditionId: 'islam', label: 'Le khalifa responsable', text: "L'humain est « lieutenant » sur terre, responsable devant Dieu. Le fiqh classique comportait des règles sur l'eau, les zones protégées (hima) et le traitement des animaux." },
      { traditionId: 'hindouisme', label: 'Sacralité et pollution réelle', text: "Fleuves divinisés, arbres sacrés, vaches protégées — et le Gange parmi les fleuves les plus pollués du monde. L'écart entre la sacralité symbolique et la pratique est ici particulièrement net." },
      { traditionId: 'jainisme', label: 'La cohérence maximale', text: "« Les êtres vivants se rendent service les uns aux autres. » L'ahimsa étendue aux plantes et aux micro-organismes produit l'éthique environnementale la plus stricte qui existe." },
      { traditionId: 'bouddhisme', label: 'Interdépendance', text: "La coproduction conditionnée fournit une base conceptuelle solide : rien n'existe séparément. Thich Nhat Hanh en a tiré la notion d'interêtre, largement reprise par l'écologie spirituelle." },
      { traditionId: 'taoisme', label: 'Ne pas forcer', text: "Wu wei et ziran : laisser les choses suivre leur cours plutôt que les contraindre. La critique taoïste de l'interventionnisme humain trouve aujourd'hui un écho écologique direct." },
      { traditionId: 'religions-amerindiennes', label: 'Le vivant comme parentèle', text: "Les autres qu'humains sont des personnes avec lesquelles on a des obligations de réciprocité. Le principe des sept générations et la reconnaissance juridique de fleuves comme personnes (Whanganui, 2017) en dérivent." },
      { traditionId: 'shintoisme', label: 'Forêts sacrées', text: "Les bosquets entourant les sanctuaires (chinju no mori) sont des îlots de biodiversité préservés depuis des siècles par une contrainte religieuse." },
    ],
    convergences: [
      "Toutes les traditions ont produit, depuis cinquante ans, une lecture écologique de leurs sources — signe qu'elles disposent effectivement de ressources en ce sens.",
      "Presque toutes valorisent la frugalité et critiquent l'avidité, ce qui constitue un point d'appui direct.",
      "Les lieux sacrés fonctionnent empiriquement comme des réserves naturelles : forêts sacrées africaines et indiennes, bosquets shintō, sanctuaires himalayens.",
    ],
    divergences: [
      "Le monde matériel est-il bon (judaïsme, islam, zoroastrisme), neutre (bouddhisme), ou illusoire voire mauvais (advaita strict, gnosticisme) ? La réponse change tout.",
      "Le temps est-il linéaire avec une fin — ce qui peut relativiser l'enjeu terrestre — ou cyclique, ce qui l'inscrit dans une durée indéfinie ?",
    ],
    analysis:
      "La thèse de Lynn White a eu un effet paradoxal : en accusant le christianisme, elle a déclenché dans toutes les traditions un travail de relecture qui a produit un champ entier — l'écothéologie. Deux prudences s'imposent. D'abord, ne pas idéaliser : les sociétés traditionnelles ont provoqué des extinctions et des déforestations ; ce qui est documenté, ce sont des institutions religieuses de régulation des prélèvements, ce qui est plus intéressant et plus transposable qu'une harmonie innée. Ensuite, ne pas confondre ressource textuelle et pratique effective : le Gange est sacré et gravement pollué. La question utile n'est pas « quelle religion est écologique ? » mais « quels dispositifs concrets une tradition a-t-elle produits qui limitaient effectivement les prélèvements ? ».",
  },

  {
    id: 'autorite',
    title: 'Qui a le droit de dire ce qui est vrai ?',
    question: 'Texte, tradition, institution, expérience : les sources de l’autorité religieuse.',
    icon: '⚑',
    summary:
      "Toute religion doit répondre à une question pratique : quand deux personnes sont en désaccord, qui tranche ? Les réponses données déterminent la capacité d'une tradition à évoluer, à se réformer et à se fracturer.",
    positions: [
      { traditionId: 'judaisme', label: 'La majorité des sages', text: "« Elle n'est pas dans le ciel » : même une voix céleste ne l'emporte pas sur la décision majoritaire des sages. Un système remarquablement décentralisé et procédural." },
      { traditionId: 'christianisme', label: 'Trois modèles rivaux', text: "Catholique : magistère et pape. Orthodoxe : consensus des conciles et de l'Église entière. Protestant : Écriture seule — dont la conséquence non voulue est la fragmentation, chacun l'interprétant." },
      { traditionId: 'islam', label: 'Une autorité savante et diffuse', text: "Pas de clergé ni de magistère : l'autorité appartient aux savants, par consensus et compétence. D'où une grande souplesse historique — et la difficulté contemporaine à savoir qui parle au nom de l'islam à l'ère d'internet." },
      { traditionId: 'islam', label: 'Chiisme : l’imam et son représentant', text: "L'imam infaillible étant occulté, l'autorité passe aux juristes ; Khomeyni en tire le velayat-e faqih, innovation majeure contestée par une part du clergé chiite." },
      { traditionId: 'hindouisme', label: 'Aucune autorité centrale', text: "Ni pape, ni concile, ni credo. Les écoles se multiplient sans excommunication mutuelle. Une capacité d'absorption qui explique la longévité et la difficulté à définir la tradition." },
      { traditionId: 'bouddhisme', label: 'La vérification personnelle', text: "Le discours aux Kalama invite à ne rien croire sur autorité, pas même celle du Bouddha. Dans les faits, les lignées de transmission et les institutions monastiques exercent une autorité forte." },
      { traditionId: 'sikhisme', label: 'Le livre comme gourou', text: "Depuis 1708, l'autorité est le Guru Granth Sahib et l'assemblée. Un transfert délibéré de l'autorité personnelle vers le texte et la communauté." },
      { traditionId: 'bahaisme', label: 'Institutions élues', text: "Assemblées élues sans candidature ni campagne, et une Maison universelle de justice. Le fondateur a écrit lui-même les dispositions successorales — ce qui a largement prévenu les schismes." },
    ],
    convergences: [
      "Toutes les traditions connaissent la même tension entre la lettre du texte, la tradition d'interprétation, l'institution et l'expérience personnelle.",
      "Toutes ont vécu au moins une crise majeure d'autorité, généralement à l'occasion d'un changement technique de diffusion : imprimerie, alphabétisation, internet.",
      "Weber a nommé le mécanisme général : une autorité charismatique naît, puis doit se routiniser en institution pour durer — en perdant ce qui l'avait fondée.",
    ],
    divergences: [
      "Autorité concentrée (papauté) ou diffuse (islam sunnite, hindouisme) : la première permet des réformes rapides et rend les schismes nets ; la seconde absorbe la diversité mais peine à trancher.",
      "Le texte peut-il être relu historiquement ? La réponse à cette question sépare aujourd'hui, à l'intérieur de chaque tradition, les courants littéralistes des courants historicisants — clivage souvent plus significatif que le clivage entre religions.",
    ],
    analysis:
      "Internet est en train de faire aux autorités religieuses ce que l'imprimerie leur avait fait au XVIe siècle : court-circuiter la chaîne de transmission. Un jeune musulman peut aujourd'hui trouver une fatwa correspondant à n'importe quelle position ; un catholique peut suivre des prédicateurs en ligne contre son évêque ; un bouddhiste occidental peut pratiquer sans lignée. Le résultat n'est pas la fin de l'autorité mais sa fragmentation et sa radicalisation aux marges, exactement comme au XVIe siècle. C'est probablement la transformation la plus importante du paysage religieux mondial actuel, et elle traverse toutes les traditions.",
  },

  {
    id: 'conversion',
    title: 'Peut-on changer de religion ?',
    question: 'Naissance, adhésion, exclusion : comment on entre et comment on sort.',
    icon: '⇄',
    summary:
      "Certaines traditions cherchent activement des convertis, d'autres les découragent, d'autres encore les refusent absolument. Ce choix structure toute leur démographie, leur rapport au monde et leur histoire politique.",
    positions: [
      { traditionId: 'christianisme', label: 'Missionnaire par vocation', text: "« Allez, faites de toutes les nations des disciples. » L'universalisme paulinien rend la mission constitutive. Il a produit une expansion mondiale — et une complicité massive avec la colonisation." },
      { traditionId: 'islam', label: 'Universel sans mission organisée', text: "L'islam s'adresse à tous, mais son expansion s'est faite bien plus par le commerce et les confréries soufies que par une institution missionnaire. L'Indonésie, premier pays musulman du monde, n'a jamais été conquise." },
      { traditionId: 'bouddhisme', label: 'La première religion missionnaire', text: "Ashoka envoie des émissaires jusqu'en Grèce au IIIe siècle av. J.-C. Le bouddhisme s'implante presque partout sans conquête, en s'adaptant profondément aux cultures locales." },
      { traditionId: 'judaisme', label: 'Ouvert mais non prosélyte', text: "La conversion est possible et fut parfois massive (Khazars, Adiabène). Mais le judaïsme ne fait pas de prosélytisme : les justes des nations ont part au monde à venir, donc rien ne presse." },
      { traditionId: 'hindouisme', label: 'Une question récente', text: "Traditionnellement, on naît hindou. Les mouvements réformistes du XIXe siècle ont introduit la conversion ; plusieurs États indiens ont aujourd'hui des lois anti-conversion visant surtout les christianismes et l'islam." },
      { traditionId: 'zoroastrisme', label: 'La clôture mortelle', text: "L'endogamie stricte et le refus majoritaire de la conversion menacent directement la survie démographique de la communauté. Le débat interne est vital au sens propre." },
      { traditionId: 'yezidisme', label: 'Aucune entrée possible', text: "On naît yézidi ou on ne l'est pas ; les castes sont endogames. Une clôture qui a permis la survie d'une minorité persécutée, et qui la fragilise aujourd'hui." },
      { traditionId: 'druzisme', label: 'Fermé depuis 1043', text: "Aucune conversion admise depuis onze siècles. La croyance en un nombre fixe d'âmes qui se réincarnent rend cette clôture cohérente." },
    ],
    convergences: [
      "Toutes les traditions distinguent, de fait, ceux qui sont nés dedans et ceux qui sont entrés — même quand la doctrine affirme l'égalité.",
      "Toutes ont dû gérer la question de la sortie : apostasie, excommunication, herem. Les sanctions ont partout diminué là où l'État ne les soutient plus.",
    ],
    divergences: [
      "Missionnaire ou non : ce choix détermine l'expansion géographique et la démographie sur le long terme.",
      "L'apostasie est-elle un crime ? La question reste juridiquement ouverte dans plusieurs pays, et théologiquement débattue en islam contemporain.",
    ],
    analysis:
      "La croissance ou le déclin d'une religion s'explique aujourd'hui bien moins par la conversion que par trois facteurs démographiques : la fécondité, la transmission intergénérationnelle et la migration. C'est ce qui explique la croissance de l'islam et du christianisme en Afrique subsaharienne, le vieillissement du christianisme européen, et la crise démographique des petites communautés fermées. Une religion qui ne convertit pas peut prospérer si elle transmet ; une religion qui convertit beaucoup peut décliner si elle ne transmet pas. Le sociologue Rodney Stark a montré que la croissance du christianisme antique s'explique par des taux de croissance modestes mais soutenus sur trois siècles, non par des conversions de masse.",
  },
];
