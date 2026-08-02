export type PlaceKind =
  | 'berceau' // lieu de naissance d'une tradition
  | 'sanctuaire' // lieu saint, pèlerinage
  | 'texte' // lieu de composition, découverte ou fixation d'un corpus
  | 'concile' // décision doctrinale
  | 'savoir' // centre intellectuel
  | 'conflit' // rupture, destruction, persécution
  | 'archeologie' // site préhistorique ou disparu
  | 'diaspora'; // implantation issue d'un déplacement

export interface Place {
  id: string;
  name: string;
  altNames?: string[];
  lat: number;
  lon: number;
  kind: PlaceKind;
  modern: string;
  /** Période de pertinence religieuse du lieu. */
  fromYear: number;
  toYear: number;
  /** 1 = majeur, 2 = important, 3 = complémentaire. */
  importance: 1 | 2 | 3;
  traditions: string[];
  summary: string;
  figures?: string[];
  texts?: string[];
  events?: string[];
}

export interface Route {
  id: string;
  label: string;
  kind: 'diffusion' | 'exil' | 'pelerinage' | 'mission' | 'conquete' | 'commerce';
  traditions: string[];
  fromYear: number;
  toYear: number;
  period: string;
  detail: string;
  /** Suite de points [lon, lat]. */
  points: [number, number][];
}

// ===========================================================================
// LIEUX
// ===========================================================================

export const places: Place[] = [
  // ---------- Préhistoire et premières civilisations ----------
  { id: 'gobekli-tepe-p', name: 'Göbekli Tepe', lat: 37.223, lon: 38.922, kind: 'archeologie', modern: 'Turquie', fromYear: -9600, toYear: -8000, importance: 1, traditions: [], summary: "Le plus ancien sanctuaire monumental connu, bâti par des chasseurs-cueilleurs avant l'agriculture. Le temple y précède la ville, renversant l'ordre supposé.", events: ['gobekli-tepe'] },
  { id: 'catal-huyuk-p', name: 'Çatal Höyük', lat: 37.667, lon: 32.828, kind: 'archeologie', modern: 'Turquie', fromYear: -7500, toYear: -5700, importance: 3, traditions: [], summary: "Ville néolithique aux maisons ornées de crânes de taureaux et de figurines féminines, objet d'interprétations très disputées.", events: ['catal-huyuk'] },
  { id: 'qafzeh', name: 'Qafzeh et Skhul', lat: 32.68, lon: 35.31, kind: 'archeologie', modern: 'Israël', fromYear: -100000, toYear: -90000, importance: 3, traditions: [], summary: "Premières sépultures intentionnelles avec offrandes : le plus ancien indice matériel d'un rapport symbolique à la mort.", events: ['sepulture-qafzeh'] },
  { id: 'chauvet', name: 'Grotte Chauvet', lat: 44.388, lon: 4.415, kind: 'archeologie', modern: 'France', fromYear: -36000, toYear: -28000, importance: 3, traditions: [], summary: "Art pariétal parmi les plus anciens ; figures composites mi-humaines mi-animales dont le sens nous échappe.", events: ['art-parietal'] },
  { id: 'stonehenge', name: 'Stonehenge', lat: 51.179, lon: -1.826, kind: 'archeologie', modern: 'Royaume-Uni', fromYear: -3000, toYear: -1600, importance: 3, traditions: ['religion-nordique'], summary: "Alignement mégalithique orienté sur les solstices, achevé plus d'un millénaire avant l'apparition des Celtes — les druides n'y sont pour rien.", },

  { id: 'uruk', name: 'Uruk', lat: 31.323, lon: 45.638, kind: 'texte', modern: 'Irak', fromYear: -4000, toYear: -300, importance: 1, traditions: ['religion-mesopotamienne'], summary: "L'écriture y naît vers 3300 av. J.-C. pour la comptabilité des temples : le premier usage de l'écrit est religieux et administratif.", texts: ['epopee-gilgamesh'], figures: ['gilgamesh'], events: ['ecriture-sumer'] },
  { id: 'ur', name: 'Ur', lat: 30.962, lon: 46.103, kind: 'sanctuaire', modern: 'Irak', fromYear: -3000, toYear: -500, importance: 2, traditions: ['religion-mesopotamienne', 'judaisme'], summary: "Grande ziggourat de Nanna, où officia Enheduanna. La Genèse en fait la ville d'origine d'Abraham — mention anachronique (« Ur des Chaldéens »).", figures: ['enheduanna', 'abraham'], events: ['enheduanna-ev'] },
  { id: 'babylone', name: 'Babylone', lat: 32.542, lon: 44.421, kind: 'conflit', modern: 'Irak', fromYear: -1900, toYear: 100, importance: 1, traditions: ['religion-mesopotamienne', 'judaisme'], summary: "Capitale de Hammurabi puis de Nabuchodonosor. L'Exil des Judéens (586-538) y transforme la religion d'Israël en religion du livre.", figures: ['hammurabi', 'ezechiel'], texts: ['enuma-elish', 'code-hammurabi'], events: ['exil-babylone', 'hammurabi-ev'] },
  { id: 'ninive', name: 'Ninive', lat: 36.36, lon: 43.152, kind: 'texte', modern: 'Irak', fromYear: -800, toYear: -612, importance: 2, traditions: ['religion-mesopotamienne', 'judaisme'], summary: "La bibliothèque d'Assurbanipal y a livré l'Épopée de Gilgamesh, déchiffrée en 1872 — révélant que la Bible avait des sources.", texts: ['epopee-gilgamesh'], figures: ['jonas'] },
  { id: 'harran', name: 'Harran', lat: 36.864, lon: 39.031, kind: 'sanctuaire', modern: 'Turquie', fromYear: -2000, toYear: 1200, importance: 3, traditions: ['judaisme', 'religion-mesopotamienne'], summary: "Grand centre du culte lunaire de Sîn, et étape d'Abraham entre Ur et Canaan selon la Genèse.", figures: ['abraham'] },

  { id: 'saqqarah', name: 'Saqqarah', lat: 29.871, lon: 31.216, kind: 'texte', modern: 'Égypte', fromYear: -2650, toYear: -2150, importance: 1, traditions: ['religion-egyptienne'], summary: "Pyramide à degrés d'Imhotep, et Textes des Pyramides — le plus ancien corpus religieux écrit conservé au monde.", figures: ['imhotep', 'ptahhotep'], texts: ['textes-pyramides'], events: ['textes-pyramides-ev'] },
  { id: 'gizeh', name: 'Gizeh', lat: 29.979, lon: 31.134, kind: 'archeologie', modern: 'Égypte', fromYear: -2560, toYear: -2450, importance: 2, traditions: ['religion-egyptienne'], summary: "Les pyramides, bâties par des ouvriers égyptiens rémunérés — un millénaire avant toute présence israélite plausible.", },
  { id: 'amarna', name: 'Amarna', lat: 27.646, lon: 30.896, kind: 'berceau', modern: 'Égypte', fromYear: -1353, toYear: -1332, importance: 1, traditions: ['religion-egyptienne'], summary: "Capitale bâtie ex nihilo par Akhenaton pour le culte exclusif d'Aton, puis abandonnée et martelée. Première tentative d'exclusivisme religieux d'État.", figures: ['akhenaton'], events: ['akhenaton-ev'] },
  { id: 'thebes-eg', name: 'Thèbes et Karnak', lat: 25.718, lon: 32.657, kind: 'sanctuaire', modern: 'Égypte', fromYear: -2000, toYear: 400, importance: 2, traditions: ['religion-egyptienne'], summary: "Le plus vaste complexe cultuel de l'Égypte, dédié à Amon — celui dont Akhenaton ferma les temples.", texts: ['livre-des-morts'] },
  { id: 'philae', name: 'Philae', lat: 24.025, lon: 32.884, kind: 'conflit', modern: 'Égypte', fromYear: -380, toYear: 537, importance: 2, traditions: ['religion-egyptienne'], summary: "Dernier temple égyptien en activité, fermé vers 537 par Justinien : la fin, documentée, d'une religion de trois millénaires.", },
  { id: 'nag-hammadi-p', name: 'Nag Hammadi', lat: 26.049, lon: 32.239, kind: 'texte', modern: 'Égypte', fromYear: 350, toYear: 400, importance: 1, traditions: ['gnosticisme'], summary: "Treize codices coptes exhumés en 1945 : pour la première fois, les gnostiques se lisent dans leurs propres mots.", texts: ['evangile-thomas', 'apocryphon-jean', 'evangile-verite'], events: ['nag-hammadi'] },
  { id: 'alexandrie', name: 'Alexandrie', lat: 31.2, lon: 29.919, kind: 'savoir', modern: 'Égypte', fromYear: -331, toYear: 641, importance: 1, traditions: ['judaisme', 'christianisme', 'gnosticisme', 'religion-grecque'], summary: "Traduction de la Septante, exégèse allégorique de Philon, école d'Origène, écoles gnostiques, patriarcat d'Athanase : le laboratoire du monde antique.", figures: ['origene', 'athanase', 'arius', 'valentin'], events: ['septante', 'canon-athanase'] },

  // ---------- Levant et monde biblique ----------
  { id: 'jerusalem', name: 'Jérusalem', lat: 31.778, lon: 35.235, kind: 'sanctuaire', modern: 'Israël / Palestine', fromYear: -1000, toYear: 2030, importance: 1, traditions: ['judaisme', 'christianisme', 'islam'], summary: "Le site le plus disputé du monde : mont du Temple, Saint-Sépulcre, esplanade des Mosquées. David y installe l'arche, Titus y détruit le Temple en 70, Muhammad y est transporté selon la sourate 17.", figures: ['david', 'salomon', 'jesus', 'jeremie', 'esdras', 'umar'], events: ['destruction-temple', 'second-temple', 'reforme-josias'] },
  { id: 'bethleem', name: 'Bethléem', lat: 31.705, lon: 35.203, kind: 'sanctuaire', modern: 'Palestine', fromYear: -1000, toYear: 2030, importance: 2, traditions: ['christianisme', 'judaisme'], summary: "Ville de David, et lieu de naissance de Jésus selon Matthieu et Luc — les historiens penchent majoritairement pour Nazareth.", figures: ['david', 'jesus', 'ruth'] },
  { id: 'nazareth', name: 'Nazareth', lat: 32.702, lon: 35.298, kind: 'berceau', modern: 'Israël', fromYear: -50, toYear: 100, importance: 1, traditions: ['christianisme'], summary: "Village galiléen d'une centaine d'habitants dont Jésus est très probablement originaire.", figures: ['jesus', 'marie', 'joseph-nazareth'] },
  { id: 'capharnaum', name: 'Capharnaüm', lat: 32.881, lon: 35.575, kind: 'berceau', modern: 'Israël', fromYear: -50, toYear: 100, importance: 2, traditions: ['christianisme'], summary: "Base du ministère galiléen de Jésus, sur la rive du lac. Synagogue et maison dite de Pierre exhumées.", figures: ['jesus', 'pierre'] },
  { id: 'jourdain', name: 'Le Jourdain (Béthanie au-delà)', lat: 31.837, lon: 35.545, kind: 'sanctuaire', modern: 'Jordanie', fromYear: -30, toYear: 2030, importance: 2, traditions: ['christianisme', 'mandeisme'], summary: "Lieu du baptême de Jésus par Jean — l'un des deux faits sur lesquels le consensus historique est le plus large.", figures: ['jean-baptiste', 'jesus'] },
  { id: 'qumran-p', name: 'Qumrân', lat: 31.741, lon: 35.459, kind: 'texte', modern: 'Cisjordanie', fromYear: -150, toYear: 68, importance: 1, traditions: ['judaisme'], summary: "Neuf cents manuscrits cachés avant la répression romaine, retrouvés en 1947 : le judaïsme du Second Temple restitué de première main.", texts: ['manuscrits-mer-morte'], events: ['qumran', 'qumran-decouverte'] },
  { id: 'garizim', name: 'Mont Garizim', lat: 32.2, lon: 35.273, kind: 'sanctuaire', modern: 'Cisjordanie', fromYear: -400, toYear: 2030, importance: 2, traditions: ['samaritanisme'], summary: "Lieu saint des Samaritains, où se pratique encore chaque année l'unique sacrifice pascal biblique subsistant au monde.", texts: ['pentateuque-samaritain'] },
  { id: 'sinai', name: 'Mont Sinaï (Horeb)', lat: 28.539, lon: 33.975, kind: 'sanctuaire', modern: 'Égypte', fromYear: -1250, toYear: 2030, importance: 1, traditions: ['judaisme', 'christianisme', 'islam'], summary: "Lieu traditionnel de la révélation de la Loi. L'identification au Djebel Moussa est byzantine ; la localisation réelle est inconnue.", figures: ['moise', 'elie'] },
  { id: 'nebo', name: 'Mont Nebo', lat: 31.769, lon: 35.725, kind: 'sanctuaire', modern: 'Jordanie', fromYear: -1200, toYear: 2030, importance: 3, traditions: ['judaisme', 'christianisme'], summary: "Moïse y voit la terre promise sans y entrer, et y meurt ; « nul n'a connu son tombeau ».", figures: ['moise'] },
  { id: 'madian', name: 'Madian', lat: 28.4, lon: 35.3, kind: 'berceau', modern: 'Arabie saoudite', fromYear: -1300, toYear: -1200, importance: 2, traditions: ['judaisme'], summary: "Pays de Jéthro, prêtre madianite. L'hypothèse d'une origine méridionale de YHWH s'appuie sur cet ancrage.", figures: ['moise', 'jethro'] },
  { id: 'antioche', name: 'Antioche', lat: 36.202, lon: 36.16, kind: 'berceau', modern: 'Turquie', fromYear: 40, toYear: 700, importance: 1, traditions: ['christianisme'], summary: "C'est là que les disciples sont pour la première fois appelés « chrétiens », et là que Paul prend Pierre à partie sur les repas avec les non-juifs.", figures: ['paul', 'pierre', 'jean-chrysostome'] },
  { id: 'damas', name: 'Damas', lat: 33.513, lon: 36.292, kind: 'berceau', modern: 'Syrie', fromYear: 35, toYear: 2030, importance: 2, traditions: ['christianisme', 'islam'], summary: "Le chemin de Damas et la conversion de Paul ; puis capitale du califat omeyyade et site de la Grande Mosquée.", figures: ['paul', 'ibn-taymiyya'] },
  { id: 'acre', name: 'Acre et Haïfa', lat: 32.925, lon: 35.075, kind: 'sanctuaire', modern: 'Israël', fromYear: 1868, toYear: 2030, importance: 1, traditions: ['bahaisme'], summary: "Prison-exil de Bahá'u'lláh, puis centre mondial de la foi bahá'íe : mausolée du Báb et Maison universelle de justice à Haïfa.", figures: ['bahaullah', 'abdul-baha', 'bab'] },
  { id: 'lalesh', name: 'Lalesh', lat: 36.772, lon: 43.308, kind: 'sanctuaire', modern: 'Irak', fromYear: 1162, toYear: 2030, importance: 2, traditions: ['yezidisme'], summary: "Tombeau de Cheikh Adî et sanctuaire central du yézidisme ; on y entre pieds nus, sans marcher sur les seuils.", figures: ['cheikh-adi'] },
  { id: 'sinjar', name: 'Sinjar', lat: 36.32, lon: 41.868, kind: 'conflit', modern: 'Irak', fromYear: 2014, toYear: 2030, importance: 1, traditions: ['yezidisme'], summary: "Août 2014 : l'État islamique y perpètre le génocide des Yézidis — exécutions de masse et esclavage sexuel.", figures: ['nadia-murad'], events: ['genocide-yezidi'] },
  { id: 'hittin', name: 'Hittin (tombeau de Jéthro)', lat: 32.8, lon: 35.45, kind: 'sanctuaire', modern: 'Israël', fromYear: 1100, toYear: 2030, importance: 3, traditions: ['druzisme'], summary: "Principal lieu de pèlerinage druze, autour du tombeau attribué à Nabi Shu'ayb, le Jéthro biblique.", figures: ['jethro'] },

  // ---------- Iran et monde perse ----------
  { id: 'pasargades', name: 'Pasargades', lat: 30.194, lon: 53.168, kind: 'berceau', modern: 'Iran', fromYear: -550, toYear: -330, importance: 2, traditions: ['zoroastrisme'], summary: "Capitale et tombeau de Cyrus, le seul étranger que la Bible appelle « oint » de Dieu.", figures: ['cyrus'], events: ['cyrus-edit'] },
  { id: 'persepolis', name: 'Persépolis', lat: 29.935, lon: 52.891, kind: 'sanctuaire', modern: 'Iran', fromYear: -518, toYear: -330, importance: 2, traditions: ['zoroastrisme'], summary: "Capitale cérémonielle achéménide, où le Nouvel An (Nowruz) était célébré par toutes les nations de l'empire.", figures: ['darius'] },
  { id: 'behistun', name: 'Behistun', lat: 34.389, lon: 47.436, kind: 'texte', modern: 'Iran', fromYear: -520, toYear: -520, importance: 2, traditions: ['zoroastrisme'], summary: "Inscription trilingue de Darius invoquant Ahura Mazda — et clé du déchiffrement du cunéiforme.", figures: ['darius'] },
  { id: 'yazd', name: 'Yazd', lat: 31.897, lon: 54.368, kind: 'sanctuaire', modern: 'Iran', fromYear: 400, toYear: 2030, importance: 2, traditions: ['zoroastrisme'], summary: "Principal foyer zoroastrien d'Iran ; le feu d'Atash Behram y brûlerait sans interruption depuis le Ve siècle.", texts: ['avesta'] },
  { id: 'ctesiphon', name: 'Ctésiphon', lat: 33.093, lon: 44.581, kind: 'conflit', modern: 'Irak', fromYear: 224, toYear: 651, importance: 2, traditions: ['manicheisme', 'zoroastrisme', 'mandeisme'], summary: "Capitale sassanide où Mani obtint d'abord la faveur royale, puis fut mis à mort sous la pression du clergé mazdéen.", figures: ['mani'], events: ['mani-ev'] },
  { id: 'chiraz', name: 'Chiraz', lat: 29.591, lon: 52.584, kind: 'berceau', modern: 'Iran', fromYear: 1844, toYear: 1850, importance: 2, traditions: ['bahaisme'], summary: "Le Báb y déclare sa mission le 23 mai 1844 ; le mouvement babi embrase l'Iran en quelques années.", figures: ['bab'], events: ['bab-declaration'] },
  { id: 'tabriz', name: 'Tabriz', lat: 38.08, lon: 46.293, kind: 'conflit', modern: 'Iran', fromYear: 1850, toYear: 1850, importance: 3, traditions: ['bahaisme'], summary: "Exécution publique du Báb en 1850, devant des milliers de témoins.", figures: ['bab'] },
  { id: 'qom', name: 'Qom', lat: 34.64, lon: 50.876, kind: 'savoir', modern: 'Iran', fromYear: 800, toYear: 2030, importance: 2, traditions: ['islam'], summary: "Grand centre du savoir chiite, où fut formulée la théorie du gouvernement du juriste appliquée en 1979.", figures: ['khomeyni'], events: ['revolution-iran'] },

  // ---------- Arabie et monde musulman ----------
  { id: 'la-mecque', name: 'La Mecque', lat: 21.423, lon: 39.826, kind: 'berceau', modern: 'Arabie saoudite', fromYear: 570, toYear: 2030, importance: 1, traditions: ['islam'], summary: "Naissance de Muhammad, première révélation à Hira, Kaaba, et destination du hajj — plus de deux millions de pèlerins par an.", figures: ['muhammad', 'khadija', 'abraham', 'agar'], texts: ['coran'], events: ['revelation-coran'] },
  { id: 'medine', name: 'Médine', lat: 24.47, lon: 39.611, kind: 'berceau', modern: 'Arabie saoudite', fromYear: 622, toYear: 2030, importance: 1, traditions: ['islam'], summary: "L'Hégire de 622 y fonde la première communauté politique musulmane — an 1 du calendrier. Tombeau du Prophète.", figures: ['muhammad', 'abu-bakr', 'aisha', 'fatima'], events: ['hegire', 'mort-muhammad'] },
  { id: 'kerbala', name: 'Kerbala', lat: 32.614, lon: 44.024, kind: 'conflit', modern: 'Irak', fromYear: 680, toYear: 2030, importance: 1, traditions: ['islam'], summary: "Massacre de Husayn en 680. La défaite devient le fondement émotionnel du chiisme ; l'Arbaïn y réunit chaque année des millions de pèlerins.", figures: ['husayn'], events: ['kerbala'] },
  { id: 'najaf', name: 'Najaf', lat: 31.989, lon: 44.328, kind: 'sanctuaire', modern: 'Irak', fromYear: 661, toYear: 2030, importance: 2, traditions: ['islam'], summary: "Tombeau d'Ali et grande université chiite, dont l'école maintient la séparation du religieux et du politique.", figures: ['ali', 'khomeyni'] },
  { id: 'koufa', name: 'Koufa', lat: 32.033, lon: 44.4, kind: 'conflit', modern: 'Irak', fromYear: 638, toYear: 900, importance: 2, traditions: ['islam'], summary: "Capitale d'Ali, lieu de son assassinat en 661, et berceau de l'école juridique hanafite.", figures: ['ali', 'abu-hanifa'] },
  { id: 'bagdad', name: 'Bagdad', lat: 33.315, lon: 44.366, kind: 'savoir', modern: 'Irak', fromYear: 762, toYear: 1258, importance: 1, traditions: ['islam'], summary: "Maison de la Sagesse : traduction massive du grec, du persan et du sanskrit. Al-Ghazali y enseigne puis y abandonne tout.", figures: ['al-ghazali', 'al-hallaj', 'bukhari'], events: ['maison-sagesse'] },
  { id: 'bassora', name: 'Bassora', lat: 30.508, lon: 47.783, kind: 'savoir', modern: 'Irak', fromYear: 638, toYear: 1000, importance: 3, traditions: ['islam', 'mandeisme'], summary: "Ville de Rabia al-Adawiyya et des premiers cercles mystiques ; les Mandéens y vivaient dans les marais alentour.", figures: ['rabia'] },
  { id: 'le-caire', name: 'Le Caire', lat: 30.044, lon: 31.236, kind: 'savoir', modern: 'Égypte', fromYear: 969, toYear: 2030, importance: 1, traditions: ['islam', 'druzisme'], summary: "Fondation d'al-Azhar par les Fatimides ismaéliens ; proclamation druze de 1017 ; réformisme de Muhammad Abduh.", figures: ['al-hakim', 'hamza-ibn-ali', 'muhammad-abduh', 'maimonide', 'shafii'] },
  { id: 'kairouan', name: 'Kairouan', lat: 35.678, lon: 10.096, kind: 'sanctuaire', modern: 'Tunisie', fromYear: 670, toYear: 2030, importance: 3, traditions: ['islam'], summary: "Première grande ville musulmane du Maghreb et foyer de l'école malikite en Afrique du Nord.", },
  { id: 'fes', name: 'Fès', lat: 34.034, lon: -4.999, kind: 'savoir', modern: 'Maroc', fromYear: 859, toYear: 2030, importance: 2, traditions: ['islam', 'judaisme'], summary: "Université al-Qarawiyyin, fondée en 859 par Fatima al-Fihri — souvent tenue pour la plus ancienne du monde encore en activité.", figures: ['maimonide'] },
  { id: 'cordoue', name: 'Cordoue', lat: 37.888, lon: -4.779, kind: 'savoir', modern: 'Espagne', fromYear: 756, toYear: 1236, importance: 1, traditions: ['islam', 'judaisme', 'christianisme'], summary: "Averroès et Maïmonide y naissent à douze ans d'intervalle. La transmission d'Aristote à l'Occident latin passe par là.", figures: ['averroes', 'maimonide'], events: ['averroes-ev'] },
  { id: 'tolede', name: 'Tolède', lat: 39.862, lon: -4.027, kind: 'savoir', modern: 'Espagne', fromYear: 1085, toYear: 1300, importance: 1, traditions: ['christianisme', 'islam', 'judaisme'], summary: "L'école des traducteurs y fait passer en latin Aristote, Avicenne, Averroès et Maïmonide : sans Tolède, pas de Thomas d'Aquin.", figures: ['averroes', 'thomas-aquin', 'juda-halevi'] },
  { id: 'boukhara', name: 'Boukhara', lat: 39.767, lon: 64.423, kind: 'savoir', modern: 'Ouzbékistan', fromYear: 850, toYear: 1500, importance: 2, traditions: ['islam'], summary: "Ville d'al-Bukhari, compilateur de hadiths, et d'Avicenne. Carrefour entre monde persan, turc et route de la soie.", figures: ['bukhari', 'ibn-sina'] },
  { id: 'konya', name: 'Konya', lat: 37.874, lon: 32.492, kind: 'sanctuaire', modern: 'Turquie', fromYear: 1228, toYear: 2030, importance: 2, traditions: ['islam'], summary: "Rumi y écrit le Masnavi ; l'ordre mevlevi et la danse tournante y naissent après sa mort.", figures: ['rumi'], texts: ['mathnawi'], events: ['rumi-masnavi'] },
  { id: 'murcie', name: 'Murcie', lat: 37.987, lon: -1.13, kind: 'berceau', modern: 'Espagne', fromYear: 1165, toYear: 1200, importance: 3, traditions: ['islam'], summary: "Naissance d'Ibn Arabi, auteur de la théologie du pluralisme religieux la plus élaborée du Moyen Âge.", figures: ['ibn-arabi'] },
  { id: 'istanbul', name: 'Constantinople', altNames: ['Istanbul'], lat: 41.008, lon: 28.978, kind: 'concile', modern: 'Turquie', fromYear: 330, toYear: 2030, importance: 1, traditions: ['christianisme', 'islam'], summary: "Capitale chrétienne d'Orient, Sainte-Sophie, conciles de 381 et 553, schisme de 1054, sac de 1204, conquête ottomane de 1453 et califat.", figures: ['jean-chrysostome', 'constantin'], events: ['schisme-1054'] },

  // ---------- Monde grec et romain ----------
  { id: 'athenes', name: 'Athènes', lat: 37.984, lon: 23.728, kind: 'savoir', modern: 'Grèce', fromYear: -500, toYear: 529, importance: 1, traditions: ['religion-grecque', 'humanisme-seculier'], summary: "Condamnation de Socrate pour impiété (399), Académie de Platon, discours de Paul à l'Aréopage, fermeture de l'école par Justinien en 529.", figures: ['socrate', 'platon', 'aristote-fig', 'epicure', 'paul'], events: ['socrate-mort', 'fermeture-athenes'] },
  { id: 'delphes', name: 'Delphes', lat: 38.482, lon: 22.501, kind: 'sanctuaire', modern: 'Grèce', fromYear: -800, toYear: 390, importance: 2, traditions: ['religion-grecque'], summary: "L'oracle le plus consulté du monde grec ; aucune décision politique majeure ne s'y prenait sans le consulter.", },
  { id: 'eleusis', name: 'Éleusis', lat: 38.041, lon: 23.538, kind: 'sanctuaire', modern: 'Grèce', fromYear: -1500, toYear: 396, importance: 2, traditions: ['religion-grecque'], summary: "Mystères de Déméter et Perséphone : initiation secrète promettant un sort meilleur après la mort — ce que le culte civique n'offrait pas.", },
  { id: 'olympie', name: 'Olympie', lat: 37.638, lon: 21.63, kind: 'sanctuaire', modern: 'Grèce', fromYear: -776, toYear: 393, importance: 3, traditions: ['religion-grecque'], summary: "Les Jeux y étaient une fête religieuse en l'honneur de Zeus, non une compétition profane.", },
  { id: 'crotone', name: 'Crotone', lat: 39.081, lon: 17.128, kind: 'berceau', modern: 'Italie', fromYear: -530, toYear: -450, importance: 3, traditions: ['religion-grecque'], summary: "Pythagore y fonde une communauté à la fois savante, ascétique et politique, qui prendra le pouvoir avant d'être chassée.", figures: ['pythagore'] },
  { id: 'rome', name: 'Rome', lat: 41.902, lon: 12.496, kind: 'concile', modern: 'Italie', fromYear: -500, toYear: 2030, importance: 1, traditions: ['christianisme', 'religion-grecque'], summary: "Culte impérial et persécutions, martyre de Pierre et Paul, papauté, sac de 410 qui déclenche La Cité de Dieu, Vatican I et II.", figures: ['pierre', 'paul', 'plotin', 'marcion', 'valentin', 'constantin'], events: ['vatican-ii', 'vatican-i'] },
  { id: 'nicee', name: 'Nicée', lat: 40.429, lon: 29.72, kind: 'concile', modern: 'Turquie', fromYear: 325, toYear: 787, importance: 1, traditions: ['christianisme'], summary: "Concile de 325 : le Fils est déclaré consubstantiel au Père contre Arius. Le concile ne choisit ni les évangiles ni le canon.", figures: ['arius', 'athanase', 'constantin'], events: ['nicee'] },
  { id: 'chalcedoine', name: 'Chalcédoine', lat: 40.981, lon: 29.026, kind: 'concile', modern: 'Turquie', fromYear: 451, toYear: 451, importance: 1, traditions: ['christianisme'], summary: "Le Christ y est déclaré vrai Dieu et vrai homme ; coptes, syriaques, arméniens et éthiopiens s'en séparent.", events: ['chalcedoine'] },
  { id: 'ephese', name: 'Éphèse', lat: 37.941, lon: 27.341, kind: 'concile', modern: 'Turquie', fromYear: -600, toYear: 500, importance: 2, traditions: ['christianisme', 'religion-grecque'], summary: "Temple d'Artémis, communauté paulinienne, et concile de 431 proclamant Marie Theotokos.", figures: ['paul', 'marie', 'jean-evangeliste'], events: ['ephese'] },
  { id: 'corinthe', name: 'Corinthe', lat: 37.938, lon: 22.933, kind: 'berceau', modern: 'Grèce', fromYear: 50, toYear: 100, importance: 2, traditions: ['christianisme'], summary: "Communauté turbulente à laquelle Paul écrit ses lettres les plus concrètes — dont l'hymne à l'amour, rédigé pour calmer une querelle.", figures: ['paul'], texts: ['epitres-paul'] },
  { id: 'patmos', name: 'Patmos', lat: 37.309, lon: 26.548, kind: 'texte', modern: 'Grèce', fromYear: 95, toYear: 95, importance: 2, traditions: ['christianisme'], summary: "Île d'exil où l'Apocalypse est écrite sous persécution, dans un langage codé dénonçant l'Empire.", texts: ['apocalypse'], events: ['apocalypse-ev'] },
  { id: 'hippone', name: 'Hippone', lat: 36.883, lon: 7.767, kind: 'savoir', modern: 'Algérie', fromYear: 395, toYear: 430, importance: 1, traditions: ['christianisme'], summary: "Augustin y est évêque et y meurt pendant le siège vandale. Péché originel, grâce et Cité de Dieu y sont formulés.", figures: ['augustin'], texts: ['cite-de-dieu', 'confessions'], events: ['augustin-confessions'] },
  { id: 'lyon', name: 'Lyon', lat: 45.764, lon: 4.836, kind: 'savoir', modern: 'France', fromYear: 177, toYear: 202, importance: 2, traditions: ['christianisme'], summary: "Irénée y forge les trois outils de l'orthodoxie : canon des quatre évangiles, règle de foi, succession épiscopale.", figures: ['irenee'] },
  { id: 'carthage', name: 'Carthage', lat: 36.853, lon: 10.323, kind: 'savoir', modern: 'Tunisie', fromYear: -800, toYear: 700, importance: 2, traditions: ['christianisme', 'religion-cananeenne'], summary: "Sacrifices d'enfants punique attestés archéologiquement (tophet) ; puis Tertullien, Cyprien, et le schisme donatiste.", figures: ['augustin'] },

  // ---------- Europe chrétienne ----------
  { id: 'mont-cassin', name: 'Mont-Cassin', lat: 41.489, lon: 13.814, kind: 'berceau', modern: 'Italie', fromYear: 529, toYear: 2030, importance: 1, traditions: ['christianisme'], summary: "Benoît y écrit une règle brève qui organisera des milliers de monastères pendant quinze siècles.", figures: ['benoit'], events: ['benoit-regle'] },
  { id: 'assise', name: 'Assise', lat: 43.071, lon: 12.617, kind: 'berceau', modern: 'Italie', fromYear: 1206, toYear: 2030, importance: 1, traditions: ['christianisme'], summary: "François et Claire y fondent deux ordres. Le Cantique des créatures y est composé — source de l'écologie chrétienne.", figures: ['francois-assise', 'claire-assise'] },
  { id: 'clairvaux', name: 'Clairvaux et Cîteaux', lat: 48.147, lon: 4.786, kind: 'berceau', modern: 'France', fromYear: 1098, toYear: 1300, importance: 2, traditions: ['christianisme'], summary: "L'ordre cistercien y naît et transforme l'agriculture et la métallurgie européennes.", figures: ['bernard-clairvaux'] },
  { id: 'troyes', name: 'Troyes', lat: 48.297, lon: 4.075, kind: 'savoir', modern: 'France', fromYear: 1040, toYear: 1105, importance: 2, traditions: ['judaisme'], summary: "Rachi, vigneron et commentateur : aucune édition du Talmud n'est publiée sans lui depuis mille ans.", figures: ['rachi'], events: ['rachi-ev'] },
  { id: 'paris-univ', name: 'Paris', lat: 48.853, lon: 2.349, kind: 'savoir', modern: 'France', fromYear: 1200, toYear: 2030, importance: 1, traditions: ['christianisme', 'judaisme'], summary: "Université, Thomas d'Aquin, condamnation de l'averroïsme en 1277 — et l'autodafé du Talmud en 1242.", figures: ['thomas-aquin', 'eckhart'], events: ['talmud-brule-paris'] },
  { id: 'bingen', name: 'Bingen et Rupertsberg', lat: 49.968, lon: 7.899, kind: 'savoir', modern: 'Allemagne', fromYear: 1098, toYear: 1179, importance: 2, traditions: ['christianisme'], summary: "Hildegarde y écrit théologie, médecine et musique — première femme autorisée par la papauté à écrire de la théologie.", figures: ['hildegarde'] },
  { id: 'norwich', name: 'Norwich', lat: 52.629, lon: 1.297, kind: 'savoir', modern: 'Royaume-Uni', fromYear: 1373, toYear: 1416, importance: 3, traditions: ['christianisme'], summary: "Julienne, recluse, y écrit le premier livre en anglais dû à une femme : « tout sera bien ».", figures: ['julienne-norwich'], events: ['julienne-ev'] },
  { id: 'wittenberg', name: 'Wittenberg', lat: 51.867, lon: 12.647, kind: 'berceau', modern: 'Allemagne', fromYear: 1517, toYear: 1546, importance: 1, traditions: ['christianisme'], summary: "Luther y publie ses 95 thèses en 1517 ; l'imprimerie transforme une querelle académique en fracture de la chrétienté.", figures: ['luther'], events: ['luther-1517'] },
  { id: 'worms', name: 'Worms', lat: 49.632, lon: 8.359, kind: 'conflit', modern: 'Allemagne', fromYear: 1096, toYear: 1521, importance: 2, traditions: ['christianisme', 'judaisme'], summary: "Massacres de juifs rhénans en 1096 lors de la première croisade ; puis la comparution de Luther devant Charles Quint en 1521.", figures: ['luther'] },
  { id: 'geneve', name: 'Genève', lat: 46.204, lon: 6.143, kind: 'berceau', modern: 'Suisse', fromYear: 1536, toYear: 1564, importance: 1, traditions: ['christianisme'], summary: "Calvin y organise le protestantisme réformé — et y fait brûler Michel Servet en 1553, provoquant le plaidoyer de Castellion pour la tolérance.", figures: ['calvin'], events: ['servet'] },
  { id: 'trente', name: 'Trente', lat: 46.067, lon: 11.121, kind: 'concile', modern: 'Italie', fromYear: 1545, toYear: 1563, importance: 1, traditions: ['christianisme'], summary: "Le concile qui définit pour quatre siècles ce que « catholique » veut dire : séminaires, catéchisme, canon confirmé.", events: ['trente'] },
  { id: 'avila', name: 'Ávila', lat: 40.657, lon: -4.7, kind: 'berceau', modern: 'Espagne', fromYear: 1515, toYear: 1582, importance: 2, traditions: ['christianisme'], summary: "Thérèse y réforme le Carmel et écrit, sous surveillance de l'Inquisition, la description la plus systématique de la vie mystique.", figures: ['therese-avila', 'jean-croix'] },
  { id: 'valladolid', name: 'Valladolid', lat: 41.652, lon: -4.724, kind: 'concile', modern: 'Espagne', fromYear: 1550, toYear: 1551, importance: 1, traditions: ['christianisme'], summary: "Las Casas y soutient contre Sepúlveda que les Amérindiens sont pleinement humains : premier grand débat sur l'universalité des droits.", figures: ['las-casas'], events: ['valladolid'] },
  { id: 'amsterdam', name: 'Amsterdam', lat: 52.372, lon: 4.9, kind: 'savoir', modern: 'Pays-Bas', fromYear: 1600, toYear: 1700, importance: 2, traditions: ['judaisme', 'humanisme-seculier'], summary: "Refuge des séfarades expulsés d'Ibérie, et lieu de l'excommunication de Spinoza en 1656 — d'où naît la critique biblique.", figures: ['spinoza'], events: ['spinoza-ttp'] },
  { id: 'berlin', name: 'Berlin', lat: 52.52, lon: 13.405, kind: 'savoir', modern: 'Allemagne', fromYear: 1743, toYear: 1945, importance: 2, traditions: ['judaisme', 'christianisme', 'humanisme-seculier'], summary: "Mendelssohn et la Haskala ; puis l'exégèse historico-critique allemande ; puis l'Église confessante face au nazisme.", figures: ['mendelssohn', 'bonhoeffer', 'feuerbach'], events: ['mendelssohn-jerusalem', 'barmen'] },
  { id: 'auschwitz', name: 'Auschwitz-Birkenau', lat: 50.036, lon: 19.178, kind: 'conflit', modern: 'Pologne', fromYear: 1940, toYear: 1945, importance: 1, traditions: ['judaisme'], summary: "Le lieu qui a rendu nécessaire une théologie d'après la Shoah — et rouvert, pour toutes les traditions, la question du silence de Dieu.", figures: ['levinas', 'heschel'], events: ['shoah'] },
  { id: 'vilna', name: 'Vilna', lat: 54.687, lon: 25.28, kind: 'savoir', modern: 'Lituanie', fromYear: 1720, toYear: 1941, importance: 2, traditions: ['judaisme'], summary: "« Jérusalem de Lituanie » : capitale de l'étude talmudique et de l'opposition mitnagdim au hassidisme.", figures: ['levinas'] },
  { id: 'ouman', name: 'Ouman', lat: 48.748, lon: 30.222, kind: 'sanctuaire', modern: 'Ukraine', fromYear: 1810, toYear: 2030, importance: 2, traditions: ['judaisme'], summary: "Tombeau de Nahman de Braslav, choisi sur un lieu de massacre. Des dizaines de milliers de pèlerins chaque Roch Hachana.", figures: ['nahman-braslav'] },
  { id: 'medziboj', name: 'Medjybij', lat: 49.436, lon: 27.412, kind: 'berceau', modern: 'Ukraine', fromYear: 1740, toYear: 1760, importance: 2, traditions: ['judaisme'], summary: "Le Baal Chem Tov y enseigne : la mystique devient accessible aux juifs pauvres et illettrés d'Europe orientale.", figures: ['baal-chem-tov'], events: ['baal-chem-tov-ev'] },
  { id: 'safed', name: 'Safed', lat: 32.965, lon: 35.496, kind: 'berceau', modern: 'Israël', fromYear: 1500, toYear: 1600, importance: 1, traditions: ['judaisme'], summary: "Capitale mondiale de la Kabbale au XVIe siècle : Isaac Louria y formule le retrait de Dieu et la réparation du monde.", figures: ['isaac-luria'], events: ['safed-luria'] },
  { id: 'smyrne', name: 'Smyrne', lat: 38.42, lon: 27.14, kind: 'berceau', modern: 'Turquie', fromYear: 1626, toYear: 1676, importance: 3, traditions: ['judaisme'], summary: "Naissance de Sabbataï Tsevi, dont le messianisme entraîna en 1666 la quasi-totalité du monde juif — puis un traumatisme durable.", figures: ['sabbatai-tsevi'], events: ['sabbatai'] },
  { id: 'uppsala', name: 'Uppsala', lat: 59.858, lon: 17.645, kind: 'sanctuaire', modern: 'Suède', fromYear: -100, toYear: 1100, importance: 2, traditions: ['religion-nordique'], summary: "Grand temple païen décrit par Adam de Brême, avec sacrifices tous les neuf ans — l'un des derniers foyers avant la christianisation.", figures: ['odin-fig'] },
  { id: 'thingvellir', name: 'Þingvellir', lat: 64.256, lon: -21.13, kind: 'concile', modern: 'Islande', fromYear: 1000, toYear: 1000, importance: 2, traditions: ['religion-nordique', 'christianisme'], summary: "En l'an 1000, l'Islande vote sa conversion au christianisme en assemblée, avec tolérance privée du paganisme — cas unique.", figures: ['snorri'] },

  // ---------- Inde ----------
  { id: 'harappa-p', name: 'Mohenjo-daro et Harappa', lat: 27.325, lon: 68.137, kind: 'archeologie', modern: 'Pakistan', fromYear: -2600, toYear: -1900, importance: 2, traditions: ['hindouisme'], summary: "Bains rituels et sceau d'une figure assise en posture yogique. L'écriture n'étant pas déchiffrée, la religion de l'Indus reste opaque.", events: ['harappa'] },
  { id: 'kurukshetra', name: 'Kurukshetra', lat: 29.969, lon: 76.878, kind: 'texte', modern: 'Inde', fromYear: -900, toYear: 200, importance: 2, traditions: ['hindouisme'], summary: "Champ de bataille du Mahabharata où Krishna révèle la Bhagavad-Gita à un guerrier qui refuse de combattre.", figures: ['krishna', 'arjuna'], texts: ['bhagavad-gita'] },
  { id: 'varanasi', name: 'Varanasi', altNames: ['Bénarès', 'Kashi'], lat: 25.317, lon: 83.01, kind: 'sanctuaire', modern: 'Inde', fromYear: -800, toYear: 2030, importance: 1, traditions: ['hindouisme', 'jainisme'], summary: "L'une des plus anciennes villes habitées ; mourir sur ses ghats libérerait du cycle. Kabir et Ravidas y ont vécu ; Parshvanatha y serait né.", figures: ['kabir', 'ravidas', 'parshvanatha', 'tulsidas'] },
  { id: 'sarnath', name: 'Sarnath', lat: 25.381, lon: 83.024, kind: 'berceau', modern: 'Inde', fromYear: -450, toYear: 1200, importance: 1, traditions: ['bouddhisme'], summary: "Premier sermon du Bouddha : les Quatre Nobles Vérités et la voie du milieu. Le chapiteau aux lions d'Ashoka y a été trouvé — emblème de l'Inde.", figures: ['bouddha', 'ashoka'] },
  { id: 'bodh-gaya', name: 'Bodh-Gaya', lat: 24.696, lon: 84.991, kind: 'berceau', modern: 'Inde', fromYear: -450, toYear: 2030, importance: 1, traditions: ['bouddhisme'], summary: "L'éveil sous le ficus. Le lieu le plus sacré du bouddhisme, visité par des pèlerins de toute l'Asie.", figures: ['bouddha'], events: ['bouddha-eveil'] },
  { id: 'lumbini', name: 'Lumbini', lat: 27.469, lon: 83.276, kind: 'berceau', modern: 'Népal', fromYear: -480, toYear: 2030, importance: 2, traditions: ['bouddhisme'], summary: "Lieu de naissance du Bouddha, attesté par un pilier d'Ashoka gravé vers 249 av. J.-C. — moins de deux siècles après sa mort.", figures: ['bouddha', 'ashoka'] },
  { id: 'kushinagar', name: 'Kushinagar', lat: 26.741, lon: 83.888, kind: 'berceau', modern: 'Inde', fromYear: -400, toYear: 1200, importance: 3, traditions: ['bouddhisme'], summary: "Mort du Bouddha à quatre-vingts ans, après un dernier repas dont il tint à ce que son hôte ne soit pas blâmé.", figures: ['bouddha'] },
  { id: 'vaishali', name: 'Vaishali', lat: 25.99, lon: 85.128, kind: 'berceau', modern: 'Inde', fromYear: -480, toYear: -300, importance: 2, traditions: ['bouddhisme', 'jainisme'], summary: "Mahaprajapati y obtient l'ordination des femmes après trois refus. Mahavira y serait né.", figures: ['mahaprajapati', 'ananda', 'mahavira'] },
  { id: 'pawapuri', name: 'Pawapuri', lat: 25.24, lon: 85.66, kind: 'berceau', modern: 'Inde', fromYear: -527, toYear: 2030, importance: 3, traditions: ['jainisme'], summary: "Mort de Mahavira par jeûne rituel ; l'anniversaire en est célébré comme Divali par les jaïns.", figures: ['mahavira'] },
  { id: 'nalanda-p', name: 'Nalanda', lat: 25.136, lon: 85.444, kind: 'savoir', modern: 'Inde', fromYear: 427, toYear: 1197, importance: 1, traditions: ['bouddhisme'], summary: "Université monastique de plusieurs milliers d'étudiants, détruite vers 1193 — l'un des facteurs de la disparition du bouddhisme en Inde.", figures: ['nagarjuna', 'shantideva', 'asanga'], events: ['nalanda-destruction'] },
  { id: 'sanchi', name: 'Sanchi', lat: 23.479, lon: 77.739, kind: 'sanctuaire', modern: 'Inde', fromYear: -250, toYear: 1200, importance: 2, traditions: ['bouddhisme'], summary: "Grand stupa d'Ashoka, l'un des plus anciens monuments de pierre de l'Inde, aux portiques sculptés d'une richesse exceptionnelle.", figures: ['ashoka'] },
  { id: 'pataliputra', name: 'Pataliputra', altNames: ['Patna'], lat: 25.594, lon: 85.138, kind: 'berceau', modern: 'Inde', fromYear: -320, toYear: 550, importance: 2, traditions: ['bouddhisme'], summary: "Capitale d'Ashoka, d'où partent vers 260 av. J.-C. les premières missions religieuses intercontinentales de l'histoire.", figures: ['ashoka'], events: ['ashoka-conversion'] },
  { id: 'mathura', name: 'Mathura et Vrindavan', lat: 27.492, lon: 77.673, kind: 'sanctuaire', modern: 'Inde', fromYear: -200, toYear: 2030, importance: 2, traditions: ['hindouisme'], summary: "Naissance et jeunesse de Krishna, la rasa-lila et la dévotion amoureuse : le foyer du vishnouisme krishnaïte.", figures: ['krishna', 'chaitanya', 'mirabai'] },
  { id: 'ayodhya-p', name: 'Ayodhya', lat: 26.799, lon: 82.204, kind: 'conflit', modern: 'Inde', fromYear: -300, toYear: 2030, importance: 2, traditions: ['hindouisme', 'islam'], summary: "Ville de Rama dans le Ramayana ; la destruction de la mosquée Babri en 1992 y a fait basculer la politique indienne.", figures: ['rama'], events: ['ayodhya'] },
  { id: 'haridwar', name: 'Haridwar et Prayagraj', lat: 29.946, lon: 78.164, kind: 'sanctuaire', modern: 'Inde', fromYear: -300, toYear: 2030, importance: 2, traditions: ['hindouisme'], summary: "Sites de la Kumbh Mela, qui réunit périodiquement plusieurs dizaines de millions de personnes : le plus grand rassemblement humain de la planète.", figures: ['guru-nanak'] },
  { id: 'srirangam', name: 'Srirangam', lat: 10.862, lon: 78.69, kind: 'sanctuaire', modern: 'Inde', fromYear: 900, toYear: 2030, importance: 2, traditions: ['hindouisme'], summary: "Ramanuja y enseigne, y ouvre le temple à des groupes exclus, et y crie publiquement un mantra qu'il devait garder secret.", figures: ['ramanuja'] },
  { id: 'udupi', name: 'Udupi', lat: 13.34, lon: 74.749, kind: 'sanctuaire', modern: 'Inde', fromYear: 1250, toYear: 2030, importance: 3, traditions: ['hindouisme'], summary: "Madhva y fonde huit monastères qui se relaient encore aujourd'hui pour le culte — le dualisme indien le plus strict.", figures: ['madhva'] },
  { id: 'kaladi', name: 'Kaladi et Sringeri', lat: 13.418, lon: 75.253, kind: 'savoir', modern: 'Inde', fromYear: 788, toYear: 2030, importance: 2, traditions: ['hindouisme'], summary: "Shankara, né au Kerala, fonde quatre monastères aux points cardinaux de l'Inde ; l'advaita devient la philosophie des élites brahmaniques.", figures: ['shankara'], events: ['shankara-ev'] },
  { id: 'shravanabelagola', name: 'Shravanabelagola', lat: 12.857, lon: 76.49, kind: 'sanctuaire', modern: 'Inde', fromYear: 981, toYear: 2030, importance: 3, traditions: ['jainisme'], summary: "Statue monolithique de Bahubali, haute de dix-sept mètres, oint tous les douze ans lors du Mahamastakabhisheka.", figures: ['mahavira'] },
  { id: 'palitana', name: 'Palitana', lat: 21.522, lon: 71.828, kind: 'sanctuaire', modern: 'Inde', fromYear: 1100, toYear: 2030, importance: 3, traditions: ['jainisme'], summary: "Près de neuf cents temples jaïns sur une seule colline du Gujarat, région dont la culture végétarienne a formé Gandhi.", figures: ['hemachandra', 'gandhi'] },
  { id: 'nankana', name: 'Nankana Sahib', lat: 31.452, lon: 73.706, kind: 'berceau', modern: 'Pakistan', fromYear: 1469, toYear: 2030, importance: 2, traditions: ['sikhisme'], summary: "Naissance de Guru Nanak. Le lieu est resté au Pakistan après la partition de 1947.", figures: ['guru-nanak'], events: ['nanak-ev'] },
  { id: 'amritsar', name: 'Amritsar', lat: 31.62, lon: 74.876, kind: 'sanctuaire', modern: 'Inde', fromYear: 1577, toYear: 2030, importance: 1, traditions: ['sikhisme'], summary: "Temple d'Or, bâti plus bas que le sol et ouvert aux quatre directions ; le langar y sert environ 100 000 repas par jour.", figures: ['guru-arjan', 'guru-gobind-singh'], events: ['adi-granth', 'blue-star'] },
  { id: 'anandpur', name: 'Anandpur Sahib', lat: 31.239, lon: 76.503, kind: 'berceau', modern: 'Inde', fromYear: 1699, toYear: 2030, importance: 2, traditions: ['sikhisme'], summary: "Fondation du Khalsa en 1699 : les cinq K, un nom unique pour tous, et un gourou qui reçoit l'initiation de ses disciples.", figures: ['guru-gobind-singh'], events: ['khalsa'] },
  { id: 'nagpur', name: 'Nagpur', lat: 21.146, lon: 79.088, kind: 'berceau', modern: 'Inde', fromYear: 1956, toYear: 2030, importance: 2, traditions: ['bouddhisme'], summary: "14 octobre 1956 : Ambedkar et près de 400 000 dalits se convertissent au bouddhisme en un seul jour.", figures: ['ambedkar'], events: ['ambedkar-conversion'] },
  { id: 'porbandar', name: 'Porbandar et Ahmedabad', lat: 21.642, lon: 69.62, kind: 'berceau', modern: 'Inde', fromYear: 1869, toYear: 1948, importance: 2, traditions: ['hindouisme', 'jainisme'], summary: "Gandhi naît au Gujarat, dans un milieu marqué par le jaïnisme ; il y installe ensuite son ashram.", figures: ['gandhi'], events: ['gandhi-sel'] },
  { id: 'calcutta', name: 'Calcutta et Dakshineswar', lat: 22.655, lon: 88.357, kind: 'berceau', modern: 'Inde', fromYear: 1836, toYear: 1902, importance: 2, traditions: ['hindouisme'], summary: "Ramakrishna y pratique successivement le tantrisme, l'advaita, l'islam et le christianisme ; Vivekananda en tire une mission mondiale.", figures: ['ramakrishna', 'vivekananda'] },
  { id: 'pondichery', name: 'Pondichéry et Auroville', lat: 11.934, lon: 79.83, kind: 'berceau', modern: 'Inde', fromYear: 1910, toYear: 2030, importance: 3, traditions: ['hindouisme'], summary: "Aurobindo y élabore le yoga intégral ; Auroville, cité expérimentale internationale, y est fondée en 1968.", figures: ['aurobindo'] },
  { id: 'dharamsala', name: 'Dharamsala', lat: 32.219, lon: 76.323, kind: 'diaspora', modern: 'Inde', fromYear: 1960, toYear: 2030, importance: 2, traditions: ['bouddhisme'], summary: "Siège du gouvernement tibétain en exil depuis 1960 ; d'où le bouddhisme tibétain s'est diffusé mondialement.", figures: ['dalai-lama-14'], events: ['exil-dalai-lama'] },

  // ---------- Himalaya et Asie centrale ----------
  { id: 'lhassa', name: 'Lhassa', lat: 29.652, lon: 91.122, kind: 'sanctuaire', modern: 'Chine (Tibet)', fromYear: 640, toYear: 2030, importance: 2, traditions: ['bouddhisme'], summary: "Jokhang et Potala : centre religieux et politique du Tibet jusqu'au soulèvement de 1959.", figures: ['dalai-lama-14', 'tsongkhapa'] },
  { id: 'samye', name: 'Samyé', lat: 29.331, lon: 91.503, kind: 'berceau', modern: 'Chine (Tibet)', fromYear: 779, toYear: 2030, importance: 2, traditions: ['bouddhisme'], summary: "Premier monastère tibétain, fondé avec Padmasambhava : le bouddhisme s'y implante en intégrant les divinités locales.", figures: ['padmasambhava'], events: ['padmasambhava-ev'] },
  { id: 'ganden', name: 'Ganden', lat: 29.758, lon: 91.475, kind: 'savoir', modern: 'Chine (Tibet)', fromYear: 1409, toYear: 2030, importance: 3, traditions: ['bouddhisme'], summary: "Tsongkhapa y fonde l'école Gelug et un cursus monastique de vingt ans, dont sortira l'institution des dalaï-lamas.", figures: ['tsongkhapa'], events: ['tsongkhapa-ev'] },
  { id: 'milarepa-grottes', name: 'Grottes de Milarepa', lat: 28.35, lon: 85.98, kind: 'sanctuaire', modern: 'Népal / Tibet', fromYear: 1080, toYear: 1135, importance: 3, traditions: ['bouddhisme'], summary: "Un meurtrier repenti y devient, par une ascèse extrême, le plus grand poète-yogi du Tibet.", figures: ['milarepa'] },
  { id: 'dunhuang', name: 'Dunhuang', lat: 40.142, lon: 94.662, kind: 'texte', modern: 'Chine', fromYear: 366, toYear: 1000, importance: 1, traditions: ['bouddhisme', 'manicheisme'], summary: "Grottes de Mogao et bibliothèque murée : des dizaines de milliers de manuscrits, dont le plus ancien livre imprimé daté au monde (868).", texts: ['sutra-diamant'], events: ['sutra-diamant-imprime'] },
  { id: 'tourfan', name: 'Tourfan', lat: 42.947, lon: 89.184, kind: 'texte', modern: 'Chine', fromYear: 762, toYear: 1000, importance: 2, traditions: ['manicheisme', 'bouddhisme'], summary: "Manuscrits manichéens retrouvés au XXe siècle, permettant de lire enfin le manichéisme autrement que par ses adversaires.", texts: ['kephalaia'], figures: ['mani'] },
  { id: 'bamiyan', name: 'Bamiyan', lat: 34.847, lon: 67.826, kind: 'conflit', modern: 'Afghanistan', fromYear: 550, toYear: 2001, importance: 2, traditions: ['bouddhisme'], summary: "Bouddhas géants taillés dans la falaise au VIe siècle, détruits par les talibans en 2001.", },
  { id: 'balkh', name: 'Balkh', lat: 36.758, lon: 66.899, kind: 'berceau', modern: 'Afghanistan', fromYear: -600, toYear: 1220, importance: 2, traditions: ['zoroastrisme', 'bouddhisme', 'islam'], summary: "Une tradition y situe la prédication de Zarathoustra ; Rumi y naît en 1207 avant la fuite devant les Mongols.", figures: ['zarathoustra', 'rumi'] },

  // ---------- Chine, Japon, Asie du Sud-Est ----------
  { id: 'qufu', name: 'Qufu', lat: 35.596, lon: 116.991, kind: 'berceau', modern: 'Chine', fromYear: -551, toYear: 2030, importance: 1, traditions: ['confucianisme'], summary: "Naissance et tombeau de Confucius ; le temple et la résidence de sa famille y ont été entretenus pendant deux millénaires.", figures: ['confucius', 'mencius'], events: ['lao-confucius'] },
  { id: 'xian', name: 'Chang’an', altNames: ['Xi’an'], lat: 34.266, lon: 108.954, kind: 'savoir', modern: 'Chine', fromYear: -200, toYear: 900, importance: 1, traditions: ['bouddhisme', 'taoisme', 'confucianisme', 'christianisme'], summary: "Terminus oriental de la route de la soie ; la stèle nestorienne de 781 y atteste une Église chrétienne en Chine dès 635.", figures: ['laozi', 'dong-zhongshu'] },
  { id: 'chengdu', name: 'Mont Heming (Sichuan)', lat: 30.45, lon: 103.5, kind: 'berceau', modern: 'Chine', fromYear: 142, toYear: 400, importance: 2, traditions: ['taoisme'], summary: "Zhang Daoling y reçoit en 142 la révélation de Laozi divinisé et fonde la première Église taoïste, avec clergé et territoire.", figures: ['zhang-daoling'], events: ['zhang-daoling-ev'] },
  { id: 'shaolin', name: 'Shaolin et Songshan', lat: 34.508, lon: 112.936, kind: 'berceau', modern: 'Chine', fromYear: 495, toYear: 2030, importance: 2, traditions: ['bouddhisme'], summary: "Bodhidharma y aurait médité neuf ans face à un mur : le Chan, futur Zen, y prend naissance selon la tradition.", figures: ['bodhidharma'], events: ['bodhidharma-ev'] },
  { id: 'wudang', name: 'Monts Wudang', lat: 32.4, lon: 111.0, kind: 'sanctuaire', modern: 'Chine', fromYear: 600, toYear: 2030, importance: 3, traditions: ['taoisme'], summary: "Haut lieu du taoïsme monastique et des arts internes ; le taijiquan y est traditionnellement rattaché.", figures: ['wang-chongyang'] },
  { id: 'pekin', name: 'Pékin', lat: 39.904, lon: 116.407, kind: 'savoir', modern: 'Chine', fromYear: 1271, toYear: 2030, importance: 2, traditions: ['confucianisme', 'taoisme', 'bouddhisme'], summary: "Temple du Ciel, monastère taoïste du Nuage Blanc, examens impériaux jusqu'en 1905, puis Révolution culturelle et réhabilitation actuelle.", figures: ['zhu-xi', 'wang-yangming'] },
  { id: 'nara', name: 'Nara', lat: 34.685, lon: 135.805, kind: 'berceau', modern: 'Japon', fromYear: 710, toYear: 794, importance: 2, traditions: ['bouddhisme', 'shintoisme'], summary: "Le Grand Bouddha du Tōdai-ji ; le Kojiki (712) et le Nihon Shoki (720) y fixent les mythes fondateurs de la maison impériale.", texts: ['kojiki', 'nihon-shoki'], events: ['kojiki-ev', 'bouddhisme-japon'] },
  { id: 'kyoto', name: 'Kyoto', lat: 35.011, lon: 135.768, kind: 'savoir', modern: 'Japon', fromYear: 794, toYear: 2030, importance: 2, traditions: ['bouddhisme', 'shintoisme'], summary: "Capitale religieuse du Japon : Tendai, Zen, Terre Pure. Hōnen et Shinran y prêchent avant d'être exilés.", figures: ['honen', 'shinran', 'dogen'] },
  { id: 'ise', name: 'Ise', lat: 34.455, lon: 136.725, kind: 'sanctuaire', modern: 'Japon', fromYear: -4, toYear: 2030, importance: 2, traditions: ['shintoisme'], summary: "Sanctuaire d'Amaterasu, reconstruit à l'identique tous les vingt ans depuis le VIIe siècle — une permanence par la reconstruction.", figures: ['amaterasu', 'motoori-norinaga'] },
  { id: 'koyasan', name: 'Kōyasan', lat: 34.213, lon: 135.583, kind: 'sanctuaire', modern: 'Japon', fromYear: 816, toYear: 2030, importance: 3, traditions: ['bouddhisme'], summary: "Centre du Shingon, bouddhisme ésotérique japonais fondé par Kūkai, avec sa nécropole de 200 000 tombes.", },
  { id: 'eiheiji', name: 'Eiheiji', lat: 36.054, lon: 136.356, kind: 'berceau', modern: 'Japon', fromYear: 1244, toYear: 2030, importance: 3, traditions: ['bouddhisme'], summary: "Dōgen y fonde le Sōtō : « juste s'asseoir », la pratique n'étant pas un moyen de l'éveil mais son expression.", figures: ['dogen'] },
  { id: 'tenri', name: 'Tenri', lat: 34.596, lon: 135.837, kind: 'berceau', modern: 'Japon', fromYear: 1838, toYear: 2030, importance: 3, traditions: ['shintoisme'], summary: "Nakayama Miki, paysanne devenue prophétesse en 1838, y fonde Tenrikyō — modèle des nouvelles religions japonaises.", figures: ['nakayama-miki'] },
  { id: 'anuradhapura', name: 'Anuradhapura', lat: 8.311, lon: 80.404, kind: 'texte', modern: 'Sri Lanka', fromYear: -250, toYear: 1000, importance: 1, traditions: ['bouddhisme'], summary: "Le Canon pali y est mis par écrit vers 29 av. J.-C. quand la famine menace la chaîne des récitants ; Buddhaghosa y travaille au Ve siècle.", figures: ['buddhaghosa', 'ashoka'], texts: ['canon-pali', 'visuddhimagga'], events: ['canon-pali-ecrit'] },
  { id: 'bagan', name: 'Bagan', lat: 21.171, lon: 94.86, kind: 'sanctuaire', modern: 'Birmanie', fromYear: 1044, toYear: 1300, importance: 3, traditions: ['bouddhisme'], summary: "Plus de deux mille temples bouddhiques dans une plaine : l'un des plus vastes ensembles religieux du monde.", },
  { id: 'borobudur', name: 'Borobudur', lat: -7.608, lon: 110.204, kind: 'sanctuaire', modern: 'Indonésie', fromYear: 800, toYear: 1000, importance: 2, traditions: ['bouddhisme'], summary: "Mandala de pierre à gravir en spirale : le plus grand monument bouddhique du monde, dans un pays aujourd'hui musulman.", },
  { id: 'angkor', name: 'Angkor', lat: 13.412, lon: 103.867, kind: 'sanctuaire', modern: 'Cambodge', fromYear: 900, toYear: 1400, importance: 2, traditions: ['hindouisme', 'bouddhisme'], summary: "Angkor Vat, bâti pour Vishnou puis converti au bouddhisme : la conversion d'un empire lisible dans la pierre.", figures: ['rama'] },
  { id: 'demak', name: 'Demak et Java', lat: -6.895, lon: 110.638, kind: 'diaspora', modern: 'Indonésie', fromYear: 1400, toYear: 1600, importance: 2, traditions: ['islam'], summary: "L'islamisation de Java se fait par le commerce et les confréries soufies, sans conquête : l'Indonésie deviendra le premier pays musulman du monde.", },

  // ---------- Afrique ----------
  { id: 'ile-ife', name: 'Ilé-Ifè', lat: 7.471, lon: 4.56, kind: 'berceau', modern: 'Nigeria', fromYear: -500, toYear: 2030, importance: 1, traditions: ['religions-africaines'], summary: "Centre spirituel du monde yoruba, où la tradition situe la création. Berceau du corpus divinatoire Ifa, aux 256 configurations.", figures: ['orunmila', 'shango'], texts: ['corpus-ifa'] },
  { id: 'ouidah', name: 'Ouidah et Abomey', lat: 6.363, lon: 2.086, kind: 'berceau', modern: 'Bénin', fromYear: 1600, toYear: 2030, importance: 2, traditions: ['religions-africaines'], summary: "Foyer du vodun, et port d'embarquement de la traite : c'est de là que les religions africaines traversent l'Atlantique.", },
  { id: 'aksoum', name: 'Aksoum', lat: 14.128, lon: 38.723, kind: 'sanctuaire', modern: 'Éthiopie', fromYear: 100, toYear: 2030, importance: 2, traditions: ['christianisme', 'rastafari'], summary: "Christianisation dès le IVe siècle ; l'Église éthiopienne y affirme conserver l'Arche d'alliance, gardée par un unique moine.", texts: ['bible-kebra-nagast'], figures: ['reine-saba', 'haile-selassie'] },
  { id: 'lalibela', name: 'Lalibela', lat: 12.031, lon: 39.047, kind: 'sanctuaire', modern: 'Éthiopie', fromYear: 1200, toYear: 2030, importance: 2, traditions: ['christianisme'], summary: "Onze églises taillées dans le roc à même le sol, conçues comme une nouvelle Jérusalem accessible sans pèlerinage.", },
  { id: 'tombouctou', name: 'Tombouctou', lat: 16.775, lon: -3.009, kind: 'savoir', modern: 'Mali', fromYear: 1300, toYear: 1600, importance: 2, traditions: ['islam'], summary: "Université de Sankoré et des centaines de milliers de manuscrits — dont une partie a été sauvée en 2012 des groupes armés.", },
  { id: 'le-cap', name: 'Le Cap et Johannesburg', lat: -29.0, lon: 25.5, kind: 'conflit', modern: 'Afrique du Sud', fromYear: 1948, toYear: 2030, importance: 2, traditions: ['christianisme', 'religions-africaines'], summary: "L'apartheid fut théologiquement justifié par une Église, et théologiquement combattu par une autre ; ubuntu fonde la Commission Vérité et Réconciliation.", figures: ['desmond-tutu', 'gandhi'] },

  // ---------- Amériques et Océanie ----------
  { id: 'teotihuacan', name: 'Teotihuacan', lat: 19.692, lon: -98.844, kind: 'sanctuaire', modern: 'Mexique', fromYear: -100, toYear: 550, importance: 2, traditions: ['religions-amerindiennes'], summary: "Pyramides du Soleil et de la Lune, temple du Serpent à plumes : la plus grande cité d'Amérique avant Tenochtitlan.", figures: ['quetzalcoatl'] },
  { id: 'tenochtitlan', name: 'Tenochtitlan', lat: 19.435, lon: -99.131, kind: 'conflit', modern: 'Mexique', fromYear: 1325, toYear: 1521, importance: 2, traditions: ['religions-amerindiennes', 'christianisme'], summary: "Capitale aztèque et son Templo Mayor ; sa chute en 1521 ouvre l'évangélisation forcée du continent.", figures: ['quetzalcoatl', 'las-casas'] },
  { id: 'copan', name: 'Copán et le monde maya', lat: 14.838, lon: -89.14, kind: 'texte', modern: 'Honduras / Guatemala', fromYear: -400, toYear: 900, importance: 2, traditions: ['religions-amerindiennes'], summary: "Calendriers imbriqués, cycles cosmiques et récits des jumeaux héroïques que le Popol Vuh transcrira au XVIe siècle.", texts: ['popol-vuh'] },
  { id: 'cusco', name: 'Cusco', lat: -13.517, lon: -71.978, kind: 'sanctuaire', modern: 'Pérou', fromYear: 1200, toYear: 2030, importance: 2, traditions: ['religions-amerindiennes'], summary: "Coricancha, temple du Soleil sur lequel les Espagnols ont bâti un couvent : la superposition matérielle de deux religions.", },
  { id: 'cahokia', name: 'Cahokia', lat: 38.66, lon: -90.062, kind: 'archeologie', modern: 'États-Unis', fromYear: 1050, toYear: 1350, importance: 3, traditions: ['religions-amerindiennes'], summary: "Plus grand tertre cérémoniel d'Amérique du Nord, au cœur d'une cité de plusieurs dizaines de milliers d'habitants.", },
  { id: 'haudenosaunee', name: 'Onondaga (Confédération haudenosaunee)', lat: 43.02, lon: -76.15, kind: 'concile', modern: 'États-Unis', fromYear: 1450, toYear: 2030, importance: 2, traditions: ['religions-amerindiennes'], summary: "La Grande Loi de la paix, constitution orale mémorisée sur ceintures de wampum, avec le principe des sept générations.", figures: ['deganawidah'] },
  { id: 'wounded-knee', name: 'Wounded Knee', lat: 43.142, lon: -102.365, kind: 'conflit', modern: 'États-Unis', fromYear: 1890, toYear: 1890, importance: 2, traditions: ['religions-amerindiennes'], summary: "Massacre de 1890 mettant fin à la Ghost Dance : « j'ai vu mourir le rêve d'un peuple » (Black Elk).", figures: ['black-elk'] },
  { id: 'palmyra-ny', name: 'Palmyra (New York)', lat: 43.062, lon: -77.233, kind: 'berceau', modern: 'États-Unis', fromYear: 1820, toYear: 1844, importance: 2, traditions: ['christianisme'], summary: "Joseph Smith y situe ses visions et la découverte des plaques d'or : la naissance d'une religion documentée en temps réel.", figures: ['joseph-smith'], events: ['mormons'] },
  { id: 'salt-lake', name: 'Salt Lake City', lat: 40.77, lon: -111.891, kind: 'diaspora', modern: 'États-Unis', fromYear: 1847, toYear: 2030, importance: 2, traditions: ['christianisme'], summary: "Terme de l'exode mormon vers l'Ouest et centre mondial de l'Église, avec son réseau missionnaire.", figures: ['joseph-smith'] },
  { id: 'azusa', name: 'Azusa Street, Los Angeles', lat: 34.049, lon: -118.24, kind: 'berceau', modern: 'États-Unis', fromYear: 1906, toYear: 1909, importance: 1, traditions: ['christianisme'], summary: "Un réveil racialement mixte dans un hangar, mené par un prédicateur noir borgne : le pentecôtisme y naît et dépassera 600 millions de fidèles.", events: ['azusa'] },
  { id: 'chicago', name: 'Chicago', lat: 41.882, lon: -87.628, kind: 'concile', modern: 'États-Unis', fromYear: 1893, toYear: 2030, importance: 2, traditions: ['hindouisme', 'bouddhisme', 'christianisme'], summary: "Parlement mondial des religions de 1893 : première grande rencontre interreligieuse, où Vivekananda redéfinit l'image de l'hindouisme.", figures: ['vivekananda'], events: ['parlement-religions'] },
  { id: 'selma-p', name: 'Selma et Montgomery', lat: 32.407, lon: -87.021, kind: 'conflit', modern: 'États-Unis', fromYear: 1955, toYear: 1968, importance: 2, traditions: ['christianisme', 'judaisme'], summary: "Boycott des bus, marches de Selma : une lecture rigoureuse des prophètes bibliques y produit un changement légal mesurable.", figures: ['martin-luther-king', 'heschel'], events: ['selma'] },
  { id: 'harlem', name: 'Harlem, New York', lat: 40.811, lon: -73.946, kind: 'berceau', modern: 'États-Unis', fromYear: 1916, toYear: 1965, importance: 2, traditions: ['islam', 'rastafari'], summary: "Marcus Garvey et l'UNIA, puis Malcolm X : panafricanisme, islam noir américain et théologie de la dignité.", figures: ['marcus-garvey', 'malcolm-x'] },
  { id: 'salvador-bahia', name: 'Salvador de Bahia', lat: -12.971, lon: -38.501, kind: 'diaspora', modern: 'Brésil', fromYear: 1550, toYear: 2030, importance: 1, traditions: ['religions-africaines', 'christianisme'], summary: "Capitale du candomblé : les orixás y ont survécu sous le masque des saints catholiques — un syncrétisme de survie.", figures: ['shango', 'orunmila'] },
  { id: 'haiti', name: 'Bois Caïman et Port-au-Prince', lat: 18.539, lon: -72.335, kind: 'berceau', modern: 'Haïti', fromYear: 1791, toYear: 2030, importance: 1, traditions: ['religions-africaines'], summary: "Une cérémonie vodou déclenche en 1791 la seule révolution d'esclaves victorieuse de l'histoire.", },
  { id: 'la-havane', name: 'La Havane et Matanzas', lat: 23.114, lon: -82.366, kind: 'diaspora', modern: 'Cuba', fromYear: 1550, toYear: 2030, importance: 2, traditions: ['religions-africaines'], summary: "La santería (Lucumí) y conserve le panthéon yoruba sous les noms des saints catholiques.", figures: ['shango'] },
  { id: 'kingston', name: 'Kingston', lat: 17.977, lon: -76.792, kind: 'berceau', modern: 'Jamaïque', fromYear: 1930, toYear: 2030, importance: 1, traditions: ['rastafari'], summary: "Le rastafari y naît en 1930 après le couronnement de Haïlé Sélassié, et se mondialise à partir des années 1970 par le reggae.", figures: ['bob-marley', 'marcus-garvey'], events: ['rastafari-1930'] },
  { id: 'medellin-p', name: 'Medellín', lat: 6.245, lon: -75.564, kind: 'concile', modern: 'Colombie', fromYear: 1968, toYear: 1968, importance: 2, traditions: ['christianisme'], summary: "Les évêques latino-américains y formulent l'« option préférentielle pour les pauvres » : la théologie de la libération.", events: ['medellin'] },
  { id: 'san-salvador', name: 'San Salvador', lat: 13.694, lon: -89.19, kind: 'conflit', modern: 'Salvador', fromYear: 1977, toYear: 1980, importance: 2, traditions: ['christianisme'], summary: "Mgr Romero y est assassiné en célébrant la messe, au lendemain d'une homélie ordonnant aux soldats de cesser la répression.", figures: ['romero'], events: ['romero-assassinat'] },
  { id: 'uluru', name: 'Uluru', lat: -25.345, lon: 131.036, kind: 'sanctuaire', modern: 'Australie', fromYear: -50000, toYear: 2030, importance: 2, traditions: ['religions-amerindiennes'], summary: "Site majeur du Temps du Rêve anangu, au croisement de pistes chantées qui sont à la fois cartes, récits et titres de responsabilité.", },
  { id: 'whanganui', name: 'Fleuve Whanganui', lat: -39.93, lon: 175.05, kind: 'sanctuaire', modern: 'Nouvelle-Zélande', fromYear: 2017, toYear: 2030, importance: 3, traditions: ['religions-amerindiennes'], summary: "Reconnu personne juridique en 2017 sur la base d'une cosmologie maorie : « je suis le fleuve, le fleuve est moi ».", },
  { id: 'isle-of-man', name: 'Île de Man', lat: 54.236, lon: -4.548, kind: 'berceau', modern: 'Royaume-Uni', fromYear: 1951, toYear: 1964, importance: 3, traditions: ['neopaganisme'], summary: "Gerald Gardner y tient un musée de la sorcellerie et y publie, en 1954, la Wicca — une religion composée au XXe siècle.", figures: ['gardner', 'aleister-crowley'], events: ['wicca-1954'] },
];

// ===========================================================================
// ROUTES
// ===========================================================================

export const routes: Route[] = [
  {
    id: 'missions-ashoka',
    label: 'Les missions d’Ashoka',
    kind: 'mission',
    traditions: ['bouddhisme'],
    fromYear: -260,
    toYear: -230,
    period: '≈ 260-230 av. J.-C.',
    detail:
      "Après la boucherie du Kalinga, Ashoka envoie des émissaires jusqu'à Ceylan, en Bactriane, en Égypte et auprès des rois hellénistiques qu'il nomme sur ses édits. Première diffusion religieuse intercontinentale organisée de l'histoire.",
    points: [[85.14, 25.59], [77.74, 23.48], [80.40, 8.31], [67.83, 34.85], [52.89, 29.94], [44.42, 32.54], [29.92, 31.20], [23.73, 37.98]],
  },
  {
    id: 'route-soie-bouddhisme',
    label: 'Le bouddhisme sur la route de la soie',
    kind: 'diffusion',
    traditions: ['bouddhisme'],
    fromYear: -100,
    toYear: 700,
    period: 'Ier s. av. – VIIe s. apr. J.-C.',
    detail:
      "De la vallée du Gange au Gandhara, puis par les oasis du Tarim jusqu'à Chang'an. Le bouddhisme y devient chinois : il emprunte le vocabulaire taoïste pour se traduire, et donne naissance au Chan.",
    points: [[85.44, 25.14], [67.83, 34.85], [66.90, 36.76], [89.18, 42.95], [94.66, 40.14], [108.95, 34.27], [112.94, 34.51]],
  },
  {
    id: 'bouddhisme-est',
    label: 'Le bouddhisme vers la Corée et le Japon',
    kind: 'diffusion',
    traditions: ['bouddhisme', 'shintoisme'],
    fromYear: 372,
    toYear: 800,
    period: 'IVe-VIIIe s.',
    detail:
      "De la Chine vers la Corée (372), puis du royaume de Paekche vers la cour japonaise en 552. Le Nihon Shoki conserve le débat de cour sur son adoption — un document de première main sur une conversion en train de se décider.",
    points: [[108.95, 34.27], [116.41, 39.90], [126.98, 37.57], [135.80, 34.69], [135.77, 35.01]],
  },
  {
    id: 'bouddhisme-sud',
    label: 'Le bouddhisme vers l’Asie du Sud-Est',
    kind: 'diffusion',
    traditions: ['bouddhisme'],
    fromYear: -250,
    toYear: 1300,
    period: 'IIIe s. av. – XIIIe s. apr. J.-C.',
    detail:
      "Ceylan reçoit le Theravada dès Ashoka et devient le conservatoire du Canon pali ; de là il gagne la Birmanie, le Siam, le Laos et le Cambodge, remplaçant progressivement l'hindouisme khmer.",
    points: [[85.14, 25.59], [80.40, 8.31], [94.86, 21.17], [100.50, 13.75], [103.87, 13.41], [102.14, 19.89]],
  },
  {
    id: 'bouddhisme-tibet',
    label: 'Le bouddhisme vers le Tibet',
    kind: 'diffusion',
    traditions: ['bouddhisme'],
    fromYear: 640,
    toYear: 1100,
    period: 'VIIe-XIe s.',
    detail:
      "Le tantrisme indien franchit l'Himalaya avec Padmasambhava. Il ne remplace pas les cultes locaux : il les soumet et les convertit en protecteurs du dharma — image exacte du processus historique.",
    points: [[85.44, 25.14], [83.28, 27.47], [85.98, 28.35], [91.50, 29.33], [91.12, 29.65]],
  },
  {
    id: 'exil-tibetain',
    label: 'L’exil tibétain de 1959',
    kind: 'exil',
    traditions: ['bouddhisme'],
    fromYear: 1959,
    toYear: 1960,
    period: '1959',
    detail:
      "Le 14e dalaï-lama franchit l'Himalaya à pied après le soulèvement de Lhassa. La diaspora installée à Dharamsala diffusera mondialement une tradition jusque-là confinée.",
    points: [[91.12, 29.65], [88.5, 28.0], [76.32, 32.22]],
  },
  {
    id: 'exode',
    label: 'L’Exode et la traversée du désert',
    kind: 'exil',
    traditions: ['judaisme'],
    fromYear: -1250,
    toYear: -1200,
    period: 'Tradition : XIIIe s. av. J.-C.',
    detail:
      "Tracé traditionnel, sans confirmation archéologique : ni trace d'un exode massif, ni occupation correspondante du Sinaï. Le noyau historique — un petit groupe échappé d'Égypte — reste plausible mais indémontrable.",
    points: [[31.25, 30.8], [32.6, 30.0], [33.97, 28.54], [35.3, 30.3], [35.72, 31.77]],
  },
  {
    id: 'exil-babylonien',
    label: 'L’Exil à Babylone et le retour',
    kind: 'exil',
    traditions: ['judaisme'],
    fromYear: -586,
    toYear: -515,
    period: '586-515 av. J.-C.',
    detail:
      "Sans terre ni temple, le judaïsme invente une religion portative : le livre, le Chabbat, la circoncision. Le monothéisme explicite s'y formule. Cyrus autorise le retour en 538.",
    points: [[35.24, 31.78], [39.03, 36.86], [44.42, 32.54], [35.24, 31.78]],
  },
  {
    id: 'voyages-paul',
    label: 'Les voyages de Paul',
    kind: 'mission',
    traditions: ['christianisme'],
    fromYear: 46,
    toYear: 62,
    period: '≈ 46-62',
    detail:
      "Trois périples missionnaires fondant des communautés urbaines dans tout l'Est méditerranéen, puis le transfert à Rome comme citoyen romain ayant fait appel à César.",
    points: [[35.24, 31.78], [36.16, 36.20], [27.34, 37.94], [22.93, 37.94], [23.73, 37.98], [12.50, 41.90]],
  },
  {
    id: 'eglise-orient',
    label: 'L’Église de l’Orient jusqu’en Chine',
    kind: 'mission',
    traditions: ['christianisme'],
    fromYear: 431,
    toYear: 845,
    period: 'Ve-IXe s.',
    detail:
      "Séparée après Éphèse, l'Église dite nestorienne évangélise la Perse, l'Asie centrale et l'Inde. La stèle de Xi'an, gravée en 781, atteste une présence chrétienne en Chine dès 635.",
    points: [[36.16, 36.20], [44.58, 33.09], [62.19, 37.66], [64.42, 39.77], [94.66, 40.14], [108.95, 34.27]],
  },
  {
    id: 'conquetes-arabes',
    label: 'L’expansion du califat',
    kind: 'conquete',
    traditions: ['islam'],
    fromYear: 634,
    toYear: 750,
    period: '634-750',
    detail:
      "En un siècle, un empire de l'Atlantique à l'Indus. La conquête politique est rapide ; la conversion des populations, elle, s'étale sur trois à quatre siècles — l'État n'ayant pas intérêt à perdre l'impôt des non-musulmans.",
    points: [[39.61, 24.47], [35.24, 31.78], [36.29, 33.51], [44.36, 33.31], [52.89, 29.94], [31.24, 30.04], [10.10, 35.68], [-4.78, 37.89]],
  },
  {
    id: 'islam-insulinde',
    label: 'L’islamisation de l’océan Indien',
    kind: 'commerce',
    traditions: ['islam'],
    fromYear: 1200,
    toYear: 1600,
    period: 'XIIIe-XVIe s.',
    detail:
      "Ni conquête ni mission organisée : le commerce et les confréries soufies. L'Indonésie, premier pays musulman du monde par le nombre, n'a jamais été conquise militairement.",
    points: [[39.83, 21.42], [47.78, 30.51], [72.8, 19.0], [80.0, 8.0], [95.32, 5.55], [110.64, -6.90]],
  },
  {
    id: 'islam-afrique-ouest',
    label: 'L’islam à travers le Sahara',
    kind: 'commerce',
    traditions: ['islam'],
    fromYear: 900,
    toYear: 1600,
    period: 'Xe-XVIe s.',
    detail:
      "Par les caravanes de sel et d'or. Tombouctou devient un centre de savoir avec des centaines de milliers de manuscrits ; le hajj de Mansa Moussa en 1324 fait connaître l'empire du Mali au monde méditerranéen.",
    points: [[10.10, 35.68], [-4.999, 34.03], [-3.01, 16.77], [2.09, 6.36]],
  },
  {
    id: 'parsis-inde',
    label: 'Les zoroastriens vers l’Inde',
    kind: 'exil',
    traditions: ['zoroastrisme'],
    fromYear: 936,
    toYear: 1100,
    period: 'Xe-XIe s.',
    detail:
      "Fuyant la marginalisation en Perse, un groupe s'installe au Gujarat : ce sont les Parsis, qui deviendront une élite industrielle de l'Inde britannique.",
    points: [[54.37, 31.90], [60.0, 27.5], [69.62, 21.64], [72.83, 18.96]],
  },
  {
    id: 'expulsion-sefarade',
    label: 'L’expulsion des juifs d’Espagne',
    kind: 'exil',
    traditions: ['judaisme'],
    fromYear: 1492,
    toYear: 1600,
    period: '1492 et après',
    detail:
      "Fin de la plus brillante symbiose du Moyen Âge. Les séfarades essaiment vers l'Empire ottoman, le Maghreb, l'Italie et les Pays-Bas — où naîtra, un siècle et demi plus tard, la critique biblique de Spinoza.",
    points: [[-4.78, 37.89], [-8.5, 38.7], [10.10, 35.68], [28.98, 41.01], [35.50, 32.96], [4.90, 52.37]],
  },
  {
    id: 'croisades',
    label: 'Les croisades',
    kind: 'conquete',
    traditions: ['christianisme', 'islam', 'judaisme'],
    fromYear: 1095,
    toYear: 1291,
    period: '1095-1291',
    detail:
      "Deux siècles d'expéditions armées présentées comme pèlerinages. Les conséquences les plus durables furent internes au christianisme : massacres de juifs rhénans dès 1096, et sac de Constantinople par des chrétiens en 1204.",
    points: [[2.35, 48.85], [8.36, 49.63], [11.12, 46.07], [28.98, 41.01], [36.16, 36.20], [35.24, 31.78]],
  },
  {
    id: 'traite-atlantique',
    label: 'La traite atlantique et les religions africaines',
    kind: 'exil',
    traditions: ['religions-africaines'],
    fromYear: 1550,
    toYear: 1870,
    period: 'XVIe-XIXe s.',
    detail:
      "Avec douze millions de personnes déportées, leurs religions traversent l'Atlantique et se recomposent sous contrainte : candomblé au Brésil, santería à Cuba, vodou à Haïti — les orishas survivant sous le masque des saints catholiques.",
    points: [[4.56, 7.47], [2.09, 6.36], [-38.50, -12.97], [-72.34, 18.54], [-82.37, 23.11], [-90.07, 29.95]],
  },
  {
    id: 'exil-bahaullah',
    label: 'L’exil de Bahá’u’lláh',
    kind: 'exil',
    traditions: ['bahaisme'],
    fromYear: 1853,
    toYear: 1892,
    period: '1853-1892',
    detail:
      "Quarante ans de déplacements forcés : Téhéran, Bagdad, Constantinople, Andrinople, puis la prison d'Acre. La foi bahá'íe se constitue entièrement en captivité, et son centre mondial est aujourd'hui là où elle fut emprisonnée.",
    points: [[51.39, 35.69], [44.36, 33.31], [28.98, 41.01], [26.55, 41.68], [35.08, 32.93]],
  },
  {
    id: 'voyages-nanak',
    label: 'Les udasis de Guru Nanak',
    kind: 'mission',
    traditions: ['sikhisme'],
    fromYear: 1500,
    toYear: 1524,
    period: '≈ 1500-1524',
    detail:
      "Vingt ans de voyages avec Mardana, musulman et joueur de rebab. La tradition le mène jusqu'à La Mecque, Bagdad et Ceylan : un maître hindou et un musulman voyageant ensemble sont déjà une thèse.",
    points: [[73.71, 31.45], [78.16, 29.95], [83.01, 25.32], [85.83, 19.81], [80.0, 8.0], [68.97, 22.24], [39.83, 21.42], [44.36, 33.31], [74.88, 31.62]],
  },
  {
    id: 'hajj',
    label: 'Les grandes routes du hajj',
    kind: 'pelerinage',
    traditions: ['islam'],
    fromYear: 700,
    toYear: 2030,
    period: 'VIIIe s. – aujourd’hui',
    detail:
      "Plus de deux millions de personnes par an, vêtues du même tissu blanc non cousu. C'est probablement l'expérience égalitaire la plus massive jamais organisée par une religion.",
    points: [[-3.01, 16.77], [31.24, 30.04], [36.29, 33.51], [44.36, 33.31], [39.61, 24.47], [39.83, 21.42]],
  },
  {
    id: 'missions-coloniales',
    label: 'Les missions chrétiennes et la colonisation',
    kind: 'mission',
    traditions: ['christianisme'],
    fromYear: 1492,
    toYear: 1960,
    period: 'XVIe-XXe s.',
    detail:
      "Évangélisation adossée à la conquête. Elle produit à la fois la controverse de Valladolid sur l'humanité des Indiens et, quatre siècles plus tard, le déplacement du centre de gravité démographique du christianisme vers le Sud.",
    points: [[-8.5, 38.7], [-99.13, 19.43], [-71.98, -13.52], [-38.50, -12.97], [12.50, 41.90], [4.56, 7.47], [79.83, 11.93], [121.0, 14.6]],
  },
  {
    id: 'diaspora-sikhe',
    label: 'La diaspora sikhe',
    kind: 'diffusion',
    traditions: ['sikhisme'],
    fromYear: 1849,
    toYear: 2030,
    period: 'XIXe-XXIe s.',
    detail:
      "Après l'annexion britannique du Pendjab, l'engagement massif dans l'armée coloniale, puis la partition de 1947, dispersent les sikhs vers le Royaume-Uni, le Canada et les États-Unis.",
    points: [[74.88, 31.62], [-0.13, 51.51], [-79.38, 43.65], [-123.12, 49.28]],
  },
];

export const placeKindInfo: Record<PlaceKind, { label: string; color: string; description: string }> = {
  berceau: { label: 'Berceau', color: '#8b5cf6', description: 'Lieu de naissance d’une tradition ou d’un mouvement' },
  sanctuaire: { label: 'Sanctuaire', color: '#0f9d6b', description: 'Lieu saint, pèlerinage, culte majeur' },
  texte: { label: 'Texte', color: '#3b6fb6', description: 'Composition, fixation ou découverte d’un corpus' },
  concile: { label: 'Décision', color: '#c9812a', description: 'Concile, assemblée, débat doctrinal décisif' },
  savoir: { label: 'Savoir', color: '#e0642e', description: 'Centre intellectuel, université, traduction' },
  conflit: { label: 'Conflit', color: '#9b2c2c', description: 'Destruction, persécution, rupture' },
  archeologie: { label: 'Archéologie', color: '#78716c', description: 'Site préhistorique ou religion disparue' },
  diaspora: { label: 'Diaspora', color: '#0891b2', description: 'Implantation issue d’un déplacement' },
};

export const routeKindInfo: Record<Route['kind'], { label: string; color: string }> = {
  diffusion: { label: 'Diffusion', color: '#0f9d6b' },
  exil: { label: 'Exil', color: '#9b2c2c' },
  pelerinage: { label: 'Pèlerinage', color: '#c9812a' },
  mission: { label: 'Mission', color: '#8b5cf6' },
  conquete: { label: 'Conquête', color: '#b45309' },
  commerce: { label: 'Commerce', color: '#3b6fb6' },
};
