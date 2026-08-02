import type { SacredText } from '../types';

export const textesAbrahamiques: SacredText[] = [
  {
    id: 'torah',
    title: 'La Torah (Pentateuque)',
    originalTitle: 'תּוֹרָה',
    traditions: ['judaisme', 'christianisme', 'samaritanisme', 'islam'],
    composed: 'IXe-Ve s. av. J.-C. (rédaction finale ≈ 450-400)',
    sortYear: -500,
    language: 'Hébreu biblique (quelques passages araméens)',
    genre: 'Récit fondateur, généalogie, code de lois, liturgie',
    length: '5 livres, 187 chapitres, ≈ 80 000 mots',
    summary:
      "Les cinq premiers livres de la Bible : de la création du monde à la mort de Moïse aux portes de la terre promise. C'est à la fois un récit d'origine, une constitution, un code de lois et un livre liturgique — lu intégralement chaque année dans les synagogues.",
    structure: [
      { part: 'Genèse (Bereshit)', description: "Création, déluge, Babel, puis les patriarches : Abraham, Isaac, Jacob, Joseph. Passage d'une histoire universelle à une histoire familiale." },
      { part: 'Exode (Shemot)', description: "Esclavage, Moïse, sortie d'Égypte, alliance du Sinaï, Décalogue, veau d'or, construction du sanctuaire portatif." },
      { part: 'Lévitique (Vayikra)', description: "Sacrifices, prêtrise, pureté, alimentation, sexualité, et le « code de sainteté » (ch. 17-26) qui contient « aime ton prochain comme toi-même »." },
      { part: 'Nombres (Bemidbar)', description: "Recensements, quarante ans d'errance, révoltes, Balaam et son ânesse, préparation de l'entrée en Canaan." },
      { part: 'Deutéronome (Devarim)', description: "Trois discours de Moïse reprenant la Loi, le Chema Israël, la centralisation du culte, bénédictions et malédictions, mort de Moïse." },
    ],
    keyTeachings: [
      { title: 'L’humain à l’image de Dieu', text: "Genèse 1,27 étend à tout être humain une qualité que le Proche-Orient réservait au roi. C'est la racine lointaine de l'idée de dignité universelle." },
      { title: 'L’alliance', text: "Une relation contractuelle entre Dieu et un peuple, avec obligations réciproques. Le modèle formel est celui des traités de vassalité hittites, retourné en théologie." },
      { title: 'Une justice qui protège', text: "Limitation de l'esclavage dans le temps, année sabbatique, jubilé, glanage réservé aux pauvres, protection de l'étranger répétée trente-six fois." },
      { title: 'Le Chabbat', text: "Un jour sur sept où même l'esclave, l'étranger et le bœuf cessent de travailler. Institution sociale sans équivalent dans l'Antiquité." },
      { title: 'L’interdit de l’image', text: "Aucune représentation de Dieu. Cette prescription oriente toute une civilisation vers le texte, l'abstraction et la critique des idoles — y compris politiques." },
    ],
    passages: [
      { text: 'Au commencement, Dieu créa le ciel et la terre.', source: 'Genèse 1,1' },
      { text: 'Écoute Israël : le Seigneur notre Dieu, le Seigneur est un.', source: 'Deutéronome 6,4', comment: 'Le Chema, prière centrale du judaïsme.' },
      { text: 'Tu aimeras ton prochain comme toi-même.', source: 'Lévitique 19,18' },
      { text: 'Vous aimerez l’étranger, car vous avez été étrangers en Égypte.', source: 'Deutéronome 10,19' },
      { text: 'Je mets devant toi la vie et la mort… choisis la vie.', source: 'Deutéronome 30,19' },
    ],
    transmission:
      "Transmise oralement puis par des scribes d'une méticulosité extrême. Le texte massorétique, vocalisé entre le VIIe et le Xe siècle, est la référence. Les rouleaux de Qumrân (IIIe s. av. – Ier s. apr. J.-C.) montrent une stabilité remarquable du consonantique, avec des variantes réelles mais limitées. Le rouleau de Torah de synagogue est encore aujourd'hui copié à la main, sans voyelles, selon des règles inchangées.",
    scholarship:
      "L'hypothèse documentaire classique (Wellhausen, XIXe s.) distinguait quatre sources — yahwiste, élohiste, deutéronomiste, sacerdotale — repérables par le nom divin employé, le vocabulaire et les doublets (deux récits de création, deux versions du déluge, trois épisodes de « ma sœur est ma femme »). La recherche actuelle a complexifié ce modèle : on parle plutôt de blocs traditionnels agrégés, avec un rôle décisif de l'époque perse. Le consensus porte sur un point : le Pentateuque est un texte composite, mis en forme sur plusieurs siècles.",
    howToRead:
      "Ne commencez pas par le Lévitique. Lisez Genèse 1-11 (mythes d'origine, à comparer avec Gilgamesh et l'Enuma Elish), puis Genèse 12-50 (les patriarches, comme un roman familial), puis Exode 1-24 (libération et alliance). Le Deutéronome se lit bien d'un trait comme discours d'adieu. Lisez avec une édition annotée : sans notes, la moitié des enjeux échappe.",
    relatedTexts: ['nevi-im', 'ketouvim', 'coran', 'epopee-gilgamesh', 'code-hammurabi', 'pentateuque-samaritain'],
  },

  {
    id: 'nevi-im',
    title: 'Les Prophètes (Nevi’im)',
    traditions: ['judaisme', 'christianisme'],
    composed: 'VIIIe-IIe s. av. J.-C.',
    sortYear: -600,
    language: 'Hébreu biblique',
    genre: 'Histoire, oracle, poésie prophétique',
    summary:
      "Deuxième partie de la Bible hébraïque : les livres historiques (Josué à Rois) et les recueils prophétiques. C'est là que naît la critique religieuse du pouvoir et l'exigence de justice sociale au nom de Dieu.",
    structure: [
      { part: 'Prophètes antérieurs', description: 'Josué, Juges, Samuel, Rois : une histoire d’Israël lue théologiquement, de la conquête à l’exil.' },
      { part: 'Prophètes majeurs', description: 'Isaïe, Jérémie, Ézéchiel : trois grands recueils, chacun composite.' },
      { part: 'Les Douze', description: 'Osée, Joël, Amos, Abdias, Jonas, Michée, Nahum, Habaquq, Sophonie, Aggée, Zacharie, Malachie — comptés comme un seul livre.' },
    ],
    keyTeachings: [
      { title: 'La justice avant le culte', text: "Amos, Osée, Isaïe et Michée affirment tous que Dieu rejette les sacrifices d'une société injuste. Renversement radical de la logique religieuse antique." },
      { title: 'Le prophète contre le roi', text: "Natan contre David, Élie contre Achab, Jérémie contre Sédécias : la parole religieuse comme contre-pouvoir. Modèle repris par tous les mouvements de contestation religieuse ultérieurs." },
      { title: 'La défaite comme jugement', text: "Plutôt que d'admettre la supériorité des dieux vainqueurs, les prophètes lisent les catastrophes nationales comme le jugement de leur propre Dieu. Cette opération théologique sauve le monothéisme de la réfutation par les faits." },
      { title: 'L’espérance messianique', text: "Paix universelle, retour des exilés, roi juste, connaissance de Dieu par tous. Ces oracles alimenteront le messianisme juif, chrétien et musulman." },
    ],
    passages: [
      { text: 'Que le droit coule comme de l’eau, et la justice comme un torrent intarissable.', source: 'Amos 5,24' },
      { text: 'On t’a fait connaître ce qui est bien : pratiquer la justice, aimer la bonté, et marcher humblement avec ton Dieu.', source: 'Michée 6,8' },
      { text: 'Ils briseront leurs épées pour en faire des socs de charrue.', source: 'Isaïe 2,4' },
      { text: 'Une voix de fin silence.', source: '1 Rois 19,12' },
    ],
    transmission: "Transmis avec la Torah ; le grand rouleau d'Isaïe de Qumrân (≈125 av. J.-C.) est le plus ancien manuscrit biblique complet d'un livre, remarquablement proche du texte massorétique.",
    scholarship:
      "Les livres historiques forment probablement une « histoire deutéronomiste » composée à l'époque de Josias et révisée pendant l'Exil. Les recueils prophétiques sont composites : le livre d'Isaïe rassemble au moins trois auteurs séparés par deux siècles. L'archéologie confirme le cadre historique à partir du IXe siècle (stèle de Mésha, stèle de Tel Dan, annales assyriennes) mais contredit les récits de conquête.",
    howToRead:
      "Commencez par Amos (9 chapitres, brutal et clair), puis Osée, puis Jonas (4 chapitres, ironique). Isaïe 40-55 est le sommet poétique. Pour l'histoire, 1-2 Samuel se lisent comme un roman politique. Repérez toujours à quelle crise historique le texte répond.",
    relatedTexts: ['torah', 'ketouvim', 'evangiles'],
  },

  {
    id: 'ketouvim',
    title: 'Les Écrits (Ketouvim)',
    traditions: ['judaisme', 'christianisme'],
    composed: 'Xe-IIe s. av. J.-C.',
    sortYear: -300,
    language: 'Hébreu, araméen',
    genre: 'Poésie, sagesse, liturgie, apocalypse, nouvelle',
    summary:
      "Troisième partie de la Bible hébraïque, la plus hétérogène : les Psaumes, Job, les Proverbes, le Cantique des cantiques, l'Ecclésiaste, Daniel, Esther, Ruth. On y trouve la prière, la révolte, l'érotisme et le scepticisme.",
    structure: [
      { part: 'Psaumes', description: '150 poèmes liturgiques : louange, plainte, action de grâce, imprécation. Le livre le plus cité du Nouveau Testament.' },
      { part: 'Sagesse', description: 'Proverbes (sagesse pratique), Job (le juste souffrant), Ecclésiaste (scepticisme radical). Trois positions inconciliables réunies dans un même canon.' },
      { part: 'Les cinq rouleaux', description: 'Cantique, Ruth, Lamentations, Ecclésiaste, Esther — chacun lu lors d’une fête.' },
      { part: 'Historiques et apocalyptiques', description: 'Daniel, Esdras-Néhémie, Chroniques.' },
    ],
    keyTeachings: [
      { title: 'La plainte est légitime', text: "Un tiers des psaumes sont des plaintes, parfois des accusations directes : « Pourquoi dors-tu, Seigneur ? » La liturgie inclut la protestation." },
      { title: 'La sagesse contradictoire', text: "Les Proverbes affirment que le juste prospère ; Job et l'Ecclésiaste démontrent le contraire. Le canon assume la contradiction plutôt que de trancher." },
      { title: 'Le désir sans Dieu', text: "Le Cantique des cantiques est un poème amoureux sensuel où Dieu n'est jamais nommé. Son maintien dans le canon, défendu par Rabbi Akiva, est un choix remarquable." },
      { title: 'La résurrection', text: "Daniel 12,2 formule pour la première fois clairement l'espérance d'une résurrection des morts — au IIe siècle av. J.-C., en contexte de martyre." },
    ],
    passages: [
      { text: 'Le Seigneur est mon berger, je ne manquerai de rien.', source: 'Psaume 23,1' },
      { text: 'Vanité des vanités, tout est vanité.', source: 'Ecclésiaste 1,2' },
      { text: 'L’amour est fort comme la mort.', source: 'Cantique 8,6' },
      { text: 'Sur les fleuves de Babylone, nous étions assis et nous pleurions.', source: 'Psaume 137,1' },
    ],
    transmission: "Dernière section canonisée ; l'inclusion d'Esther, de l'Ecclésiaste et du Cantique fut discutée jusqu'aux premiers siècles de l'ère commune.",
    scholarship:
      "Les Psaumes couvrent près d'un millénaire de composition ; l'attribution à David est liturgique. Daniel est daté de 165 av. J.-C. avec une grande sûreté. L'Ecclésiaste porte des traces linguistiques tardives et des échos de la philosophie hellénistique.",
    howToRead:
      "Les Psaumes se lisent quelques-uns à la fois, à voix haute. Job se lit d'un trait — mais sautez éventuellement les discours d'Élihu (32-37), ajout tardif. L'Ecclésiaste est court et déroutant : lisez-le entièrement.",
    relatedTexts: ['torah', 'nevi-im', 'instruction-amenemope'],
  },

  {
    id: 'mishna',
    title: 'La Mishna',
    originalTitle: 'משנה',
    traditions: ['judaisme'],
    composed: '≈ 200 apr. J.-C.',
    sortYear: 200,
    language: 'Hébreu mishnique',
    genre: 'Code juridique et recueil de débats',
    summary:
      "Première mise par écrit de la « Torah orale » : la loi juive organisée par thèmes, avec les opinions divergentes conservées. C'est le socle sur lequel tout le judaïsme rabbinique s'est bâti.",
    structure: [
      { part: 'Zeraïm (Semences)', description: 'Agriculture, dîmes, prières, année sabbatique.' },
      { part: 'Moed (Fêtes)', description: 'Chabbat, Pessah, Yom Kippour, Souccot.' },
      { part: 'Nachim (Femmes)', description: 'Mariage, divorce, vœux, lévirat.' },
      { part: 'Nezikin (Dommages)', description: 'Droit civil et pénal ; contient Pirké Avot, traité d’éthique sans contenu juridique.' },
      { part: 'Kodachim (Choses saintes)', description: 'Sacrifices et Temple — codifiés alors que le Temple était détruit depuis 130 ans.' },
      { part: 'Toharot (Puretés)', description: 'Pureté rituelle, le plus volumineux et le plus technique.' },
    ],
    keyTeachings: [
      { title: 'Conserver le désaccord', text: "Les opinions rejetées sont consignées « afin que si un tribunal juge nécessaire de s'y appuyer, il le puisse » (Edouyot 1,5). La minorité d'aujourd'hui peut être la loi de demain." },
      { title: 'Pirké Avot', text: "Le traité des Pères, purement éthique : « Sur trois choses le monde repose : la Torah, le culte et les actes de bonté » (1,2). Lu chaque semaine entre Pessah et Chavouot." },
      { title: 'La valeur d’une vie', text: "« C'est pourquoi un seul homme fut créé : pour t'enseigner que quiconque détruit une seule âme, l'Écriture le lui compte comme s'il avait détruit un monde entier » (Sanhédrin 4,5)." },
      { title: 'Codifier l’impossible', text: "Un tiers de la Mishna traite d'un Temple qui n'existe plus. Ce n'est pas de la nostalgie : c'est une manière de garder vivante une structure symbolique en attendant." },
    ],
    passages: [
      { text: 'Sois des disciples d’Aaron : aime la paix, poursuis la paix, aime les créatures et rapproche-les de la Torah.', source: 'Pirké Avot 1,12' },
      { text: 'Ce n’est pas à toi d’achever le travail, mais tu n’es pas libre de t’y soustraire.', source: 'Pirké Avot 2,16' },
    ],
    transmission: "Écrite en hébreu concis, mémorisée par des récitateurs professionnels (tannaïm). Premières éditions imprimées à partir de 1492.",
    scholarship: "Compilée par Juda le Prince à partir de collections antérieures ; la datation de ses strates fait l'objet d'une recherche active (Jacob Neusner et ses critiques).",
    howToRead: "Commencez par Pirké Avot, seul traité entièrement lisible sans formation. Le reste demande un commentaire.",
    relatedTexts: ['talmud', 'torah', 'michne-torah'],
  },

  {
    id: 'talmud',
    title: 'Le Talmud',
    originalTitle: 'תלמוד',
    traditions: ['judaisme'],
    composed: 'Talmud de Jérusalem ≈ 400 ; de Babylone ≈ 500-600',
    sortYear: 500,
    language: 'Hébreu et araméen babylonien',
    genre: 'Commentaire, discussion juridique, récit, exégèse',
    length: '≈ 2,5 millions de mots, 63 traités, 37 volumes en édition courante',
    summary:
      "La Mishna entourée d'un océan de discussions (la Guemara). Ce n'est pas un code mais un procès-verbal de débats sur mille ans : la forme même du texte enseigne que la vérité se cherche à plusieurs et ne se clôt pas.",
    structure: [
      { part: 'Mishna', description: 'Le noyau, en hébreu, au centre de la page.' },
      { part: 'Guemara', description: 'La discussion araméenne qui l’analyse phrase par phrase — le gros du volume.' },
      { part: 'Halakha', description: 'La matière juridique : environ deux tiers du texte.' },
      { part: 'Aggada', description: 'Récits, légendes, médecine, astronomie, théologie, anecdotes de rabbins : un tiers, souvent la partie la plus lue par les non-spécialistes.' },
    ],
    keyTeachings: [
      { title: 'Le four d’Akhnaï', text: "Rabbi Éliézer prouve son opinion par des miracles ; un caroubier se déplace, un fleuve remonte, une voix céleste lui donne raison. Rabbi Josué se lève : « Elle n'est pas dans le ciel » (Deutéronome 30,12) — la Torah a été donnée aux humains, c'est à eux d'en décider à la majorité. Et Dieu, dit le texte, sourit : « Mes fils m'ont vaincu. » (Baba Metsia 59b)" },
      { title: 'L’étude comme culte', text: "« L'étude de la Torah équivaut à tous les autres commandements » (Peah 1,1). Le savoir n'est pas préparatoire à l'action religieuse, il en est une forme." },
      { title: 'La méthode', text: "Question, objection, contre-objection, distinction, tentative de résolution, parfois « teiku » — la question reste ouverte. Cette gymnastique dialectique a formé des générations à un mode de pensée particulier." },
      { title: 'Les deux Talmuds', text: "Celui de Jérusalem, plus bref et abrupt, achevé sous pression byzantine ; celui de Babylone, plus développé, devenu la référence. Un même corpus, deux climats intellectuels." },
    ],
    passages: [
      { text: 'Elle n’est pas dans le ciel.', source: 'Baba Metsia 59b', comment: 'L’interprétation appartient aux humains, pas au ciel.' },
      { text: 'Ces paroles et celles-là sont paroles du Dieu vivant.', source: 'Erouvin 13b', comment: 'Sur les écoles opposées de Hillel et Shammaï.' },
      { text: 'Qui sauve une seule vie, c’est comme s’il avait sauvé le monde entier.', source: 'Sanhédrin 37a' },
    ],
    transmission:
      "Brûlé publiquement à de multiples reprises — Paris 1242 (vingt-quatre charretées), Rome 1553, et jusqu'au XXe siècle. Première édition imprimée complète par Daniel Bomberg à Venise (1520-23), dont la pagination est encore universellement utilisée.",
    scholarship:
      "La critique distingue les couches : citations tannaïtiques, discussions amoraïques, et couche anonyme tardive (stam) qui structure les débats et qui est peut-être postérieure de plusieurs générations. Ce travail a renouvelé la compréhension du texte depuis les années 1980.",
    howToRead:
      "Impossible à lire seul sans guide. Le meilleur accès pour un francophone : les traductions annotées de traités isolés, ou les recueils d'aggadot. Le programme mondial du Daf Yomi (une page par jour) achève le cycle en sept ans et demi.",
    relatedTexts: ['mishna', 'torah', 'michne-torah', 'zohar'],
  },

  {
    id: 'michne-torah',
    title: 'Michné Torah',
    traditions: ['judaisme'],
    composed: '1170-1180',
    sortYear: 1178,
    language: 'Hébreu mishnique',
    genre: 'Code de loi systématique',
    summary:
      "Maïmonide y réorganise l'intégralité de la loi juive en quatorze livres thématiques, dans un hébreu limpide, sans citer ses sources ni les débats — ambition unique et fortement contestée.",
    structure: [
      { part: 'Livre de la connaissance', description: 'Théologie, éthique, repentance, étude — placés en tête : la pensée avant la pratique.' },
      { part: 'Livres rituels et civils', description: 'Prière, fêtes, mariage, tribunaux, dommages, acquisitions.' },
      { part: 'Livres du Temple', description: 'Sacrifices et pureté, codifiés pour un Temple à reconstruire.' },
      { part: 'Livre des juges', description: 'Se clôt sur les lois du roi et du Messie.' },
    ],
    keyTeachings: [
      { title: 'Les huit degrés de la charité', text: "Du don donné à contrecœur jusqu'au plus élevé : permettre à autrui de ne plus avoir besoin d'aide (Dons aux pauvres 10,7)." },
      { title: 'La repentance', text: "Le repentir complet, c'est se retrouver dans la même situation, avec la même occasion, et ne pas recommencer (Techouva 2,1)." },
      { title: 'L’ère messianique démythifiée', text: "« Ne t'imagine pas que dans les jours du Messie quoi que ce soit de l'ordre du monde changera… la seule différence sera l'affranchissement de la servitude » (Rois 12,1-2). Un messianisme sobre, sans miracle." },
    ],
    passages: [{ text: 'Le monde ne poursuivra que la connaissance de Dieu ; c’est pourquoi ils seront de grands sages.', source: 'Michné Torah, Rois 12,5' }],
    transmission: "Diffusé très vite dans tout le monde juif ; combattu par ceux qui lui reprochaient de supprimer les sources et de rendre le Talmud inutile.",
    scholarship: "Sa clarté a fait de lui un objet d'étude permanent ; les commentateurs ont consacré des siècles à retrouver les sources qu'il n'indiquait pas.",
    howToRead: "Le Livre de la connaissance est accessible à un lecteur non spécialiste et donne une idée de ce qu'est une théologie juive systématique.",
    relatedTexts: ['talmud', 'guide-egares', 'mishna'],
  },

  {
    id: 'guide-egares',
    title: 'Le Guide des égarés',
    traditions: ['judaisme'],
    composed: '≈ 1190',
    sortYear: 1190,
    language: 'Arabe en caractères hébraïques (judéo-arabe)',
    genre: 'Traité philosophique',
    summary:
      "Maïmonide s'adresse à celui qui, formé à la philosophie, ne parvient plus à concilier sa raison avec le sens littéral des textes. Le livre est délibérément écrit avec des contradictions destinées à en réserver le sens profond.",
    structure: [
      { part: 'Première partie', description: 'Le langage anthropomorphique de la Bible ; théologie négative ; les noms divins.' },
      { part: 'Deuxième partie', description: 'Création ou éternité du monde ; prophétie ; cosmologie aristotélicienne.' },
      { part: 'Troisième partie', description: 'Providence, mal, raisons des commandements, perfection humaine.' },
    ],
    keyTeachings: [
      { title: 'On ne peut rien dire de Dieu', text: "Toute affirmation positive le limite. On ne peut que nier : il n'est pas corporel, pas multiple, pas ignorant. Position d'une exigence extrême, qui a scandalisé." },
      { title: 'Le mal comme privation', text: "Le mal n'est pas une entité ; la plupart des maux sont causés par les humains eux-mêmes. Réponse proche de celle d'Augustin, atteinte indépendamment." },
      { title: 'Les raisons des commandements', text: "Il propose une explication historique et rationnelle des rites, notamment des sacrifices, présentés comme une concession pédagogique à des habitudes anciennes. Thèse audacieuse et durablement controversée." },
    ],
    passages: [{ text: 'Le silence est la louange qui te convient.', source: 'Guide I,59, citant le Psaume 65' }],
    transmission: "Traduit en hébreu de son vivant, puis en latin ; lu par Thomas d'Aquin, Albert le Grand, Spinoza et Leibniz. Brûlé par des rabbins provençaux au XIIIe siècle.",
    scholarship: "Leo Strauss a soutenu que Maïmonide y pratique une écriture ésotérique, réservant ses positions réelles au lecteur attentif — lecture influente et discutée.",
    howToRead: "Ne se lit pas linéairement. Commencez par l'introduction et le chapitre I,50-60 sur les attributs divins.",
    relatedTexts: ['michne-torah', 'talmud'],
  },

  {
    id: 'zohar',
    title: 'Le Zohar',
    originalTitle: 'ספר הזוהר',
    traditions: ['judaisme'],
    composed: '≈ 1280, Castille',
    sortYear: 1280,
    language: 'Araméen artificiel',
    genre: 'Commentaire mystique de la Torah',
    summary:
      "Le livre central de la Kabbale : un commentaire narratif de la Torah, attribué au sage du IIe siècle Chimon bar Yohaï, mais composé en Castille au XIIIe siècle, probablement par Moïse de León.",
    structure: [
      { part: 'Le corps du Zohar', description: 'Commentaire suivant l’ordre des sections hebdomadaires de la Torah, sous forme de promenades et de dialogues entre sages.' },
      { part: 'Idra Rabba et Idra Zutta', description: 'Sections sur les « visages » divins, parmi les plus obscures.' },
      { part: 'Tikkounei ha-Zohar', description: 'Soixante-dix interprétations du premier mot de la Genèse.' },
    ],
    keyTeachings: [
      { title: 'Les dix sefirot', text: "Dix émanations par lesquelles l'infini (Ein Sof) se manifeste : couronne, sagesse, intelligence, bonté, rigueur, beauté, victoire, gloire, fondement, royauté. Elles forment un arbre et un corps symbolique." },
      { title: 'La Chekhina', text: "La présence divine, dixième sefira, pensée au féminin, en exil avec le peuple. Introduction d'une polarité masculin/féminin au sein même du divin — audace considérable dans un monothéisme." },
      { title: 'La théurgie', text: "Les actes humains ont un effet sur les mondes supérieurs. Accomplir un commandement avec intention répare l'harmonie divine. La responsabilité humaine devient cosmique." },
      { title: 'Quatre niveaux de sens', text: "Pchat (littéral), remez (allusif), drash (homilétique), sod (secret) — acronyme PaRDeS, « le verger ». Le texte est un espace à plusieurs étages." },
    ],
    passages: [{ text: 'Malheur à qui dit que la Torah raconte de simples histoires ; ses récits sont son vêtement.', source: 'Zohar III,152a' }],
    transmission: "Diffusé à partir de la Castille ; imprimé à Mantoue en 1558 malgré l'opposition de rabbins qui le jugeaient dangereux pour les non-initiés.",
    scholarship:
      "Gershom Scholem a établi par l'analyse linguistique que l'araméen du Zohar est artificiel, calqué sur l'hébreu médiéval, et que l'auteur principal est Moïse de León. Des travaux plus récents (Yehuda Liebes) proposent une composition collective.",
    howToRead: "Illisible sans guide. Les anthologies commentées (Charles Mopsik en français) sont la seule porte d'entrée raisonnable.",
    relatedTexts: ['torah', 'talmud'],
  },

  {
    id: 'manuscrits-mer-morte',
    title: 'Les manuscrits de la mer Morte',
    traditions: ['judaisme', 'christianisme'],
    composed: '≈ 250 av. J.-C. – 68 apr. J.-C.',
    sortYear: -100,
    language: 'Hébreu, araméen, grec',
    genre: 'Bibliothèque : textes bibliques, règles communautaires, hymnes, apocalypses',
    summary:
      "Découverts entre 1947 et 1956 dans onze grottes près de Qumrân : environ 900 manuscrits qui ont bouleversé notre connaissance du judaïsme du Second Temple et du milieu dans lequel est né le christianisme.",
    structure: [
      { part: 'Textes bibliques', description: 'Des fragments de tous les livres sauf Esther. Le grand rouleau d’Isaïe est complet et antérieur de mille ans aux plus anciens manuscrits connus jusque-là.' },
      { part: 'Textes sectaires', description: 'Règle de la Communauté, Document de Damas, Rouleau de la Guerre, Hymnes, Commentaire d’Habaquq.' },
      { part: 'Textes parabibliques', description: 'Hénoch, Jubilés, Rouleau du Temple, Genèse apocryphe.' },
    ],
    keyTeachings: [
      { title: 'Un judaïsme pluriel', text: "Ils révèlent une communauté séparée, dirigée par un « Maître de justice », hostile au sacerdoce de Jérusalem, avec un calendrier solaire différent, des bains rituels quotidiens et des repas communs." },
      { title: 'Les fils de lumière', text: "Le Rouleau de la Guerre décrit un affrontement eschatologique entre fils de lumière et fils de ténèbres. Ce dualisme, probablement d'influence iranienne, éclaire le vocabulaire de l'évangile de Jean." },
      { title: 'La stabilité du texte biblique', text: "Ils confirment la fidélité remarquable de la transmission tout en révélant l'existence de familles textuelles distinctes, dont certaines correspondent à la Septante grecque ou au Pentateuque samaritain." },
      { title: 'Ce qu’ils ne disent pas', text: "Aucune mention de Jésus, de Jean-Baptiste ou du christianisme, contrairement à une rumeur tenace. Leur intérêt est de restituer l'atmosphère, non de livrer un scoop." },
    ],
    passages: [{ text: 'Ils devront chercher Dieu de tout leur cœur et de toute leur âme, faire ce qui est bon et droit devant lui.', source: 'Règle de la Communauté 1QS I,1-2' }],
    transmission: "Cachés probablement avant la répression romaine de 68. Leur publication a été scandaleusement lente : certains fragments ne furent accessibles qu'en 1991.",
    scholarship: "Le lien avec les esséniens décrits par Pline, Philon et Josèphe est majoritairement accepté, mais reste discuté. Les rouleaux sont aujourd'hui intégralement numérisés et consultables en ligne.",
    howToRead: "La Règle de la Communauté et le Document de Damas sont courts et donnent une idée saisissante d'une secte juive du Ier siècle.",
    relatedTexts: ['torah', 'nevi-im', 'evangiles'],
  },

  {
    id: 'pentateuque-samaritain',
    title: 'Le Pentateuque samaritain',
    traditions: ['samaritanisme'],
    composed: 'Tradition textuelle distincte à partir du IIe s. av. J.-C.',
    sortYear: -150,
    language: 'Hébreu, écriture paléo-hébraïque',
    genre: 'Torah',
    summary:
      "La seule Écriture reconnue par les Samaritains : les cinq livres de Moïse dans une version présentant environ 6 000 différences avec le texte massorétique juif.",
    structure: [{ part: 'Cinq livres', description: 'Mêmes livres que la Torah juive, texte différent en de nombreux points.' }],
    keyTeachings: [
      { title: 'Garizim et non Sion', text: "Le dixième commandement samaritain ordonne de bâtir un autel sur le mont Garizim. Le point de rupture est inscrit dans le texte lui-même." },
      { title: 'Un témoin textuel précieux', text: "Environ 1 900 de ses variantes s'accordent avec la Septante grecque contre le texte massorétique, et plusieurs sont confirmées par Qumrân : la version samaritaine n'est donc pas une simple falsification tardive mais une branche textuelle ancienne." },
    ],
    passages: [],
    transmission: "Le rouleau d'Abisha, conservé à Naplouse, est tenu par la communauté pour très ancien ; les datations scientifiques le placent plus tardivement.",
    scholarship: "Sa redécouverte en Europe au XVIIe siècle a été l'un des premiers chocs pour la croyance en un texte biblique unique et immuable.",
    howToRead: "Se consulte en édition comparative, colonne contre colonne avec le texte massorétique.",
    relatedTexts: ['torah', 'manuscrits-mer-morte'],
  },

  {
    id: 'evangiles',
    title: 'Les quatre Évangiles',
    traditions: ['christianisme'],
    composed: '≈ 70-110 apr. J.-C.',
    sortYear: 80,
    language: 'Grec koinè',
    genre: 'Biographie antique à visée théologique',
    summary:
      "Quatre récits de la vie, de la mort et de la résurrection de Jésus. Ils ne sont ni des chroniques ni des biographies modernes : chacun écrit pour une communauté, avec une théologie propre, et assume de sélectionner et d'organiser.",
    structure: [
      { part: 'Marc (≈70)', description: 'Le plus ancien et le plus bref. Rythme haletant, Jésus humain, disciples qui ne comprennent rien, finale abrupte au tombeau vide (16,8) — la suite est un ajout postérieur.' },
      { part: 'Matthieu (≈80-90)', description: "Écrit pour des judéo-chrétiens : Jésus nouveau Moïse, cinq grands discours, citations constantes de l'Ancien Testament, Sermon sur la montagne." },
      { part: 'Luc (≈80-90)', description: "Le plus littéraire, adressé au monde gréco-romain. Attention aux pauvres, aux femmes et aux exclus. Paraboles exclusives : bon Samaritain, fils prodigue. Suivi des Actes." },
      { part: 'Jean (≈90-110)', description: 'Tout autre : longs discours, sept « signes », sept « Je suis », chronologie différente, christologie haute dès le prologue.' },
    ],
    keyTeachings: [
      { title: 'Le Royaume de Dieu', text: "Cœur de la prédication chez les trois synoptiques : une irruption déjà commencée, décrite en paraboles paradoxales plutôt qu'en définitions." },
      { title: 'Le Sermon sur la montagne', text: "Matthieu 5-7 : béatitudes, radicalisation de la Loi, amour des ennemis, refus de juger, Notre Père. Probablement le texte moral le plus influent de l'histoire occidentale." },
      { title: 'Les paraboles', text: "Le bon Samaritain (le prochain est celui qui agit), le fils prodigue (le père court sans exiger réparation), les ouvriers de la onzième heure (la grâce n'est pas un salaire). Elles piègent l'auditeur dans son propre jugement." },
      { title: 'Le récit de la Passion', text: "Le plus stable et le plus ancien des blocs narratifs, présent dans les quatre évangiles avec des variations. Sa mise en forme, écrite après 70 sous domination romaine, tend à déplacer la responsabilité vers les autorités juives — lecture aux conséquences historiques désastreuses, corrigée officiellement par les Églises depuis 1965." },
    ],
    passages: [
      { text: 'Heureux les artisans de paix, car ils seront appelés fils de Dieu.', source: 'Matthieu 5,9' },
      { text: 'Le sabbat a été fait pour l’homme, et non l’homme pour le sabbat.', source: 'Marc 2,27' },
      { text: 'Va, et toi aussi fais de même.', source: 'Luc 10,37', comment: 'Conclusion de la parabole du bon Samaritain.' },
      { text: 'Au commencement était le Verbe, et le Verbe s’est fait chair.', source: 'Jean 1,1.14' },
    ],
    transmission:
      "Plus de 5 800 manuscrits grecs conservés, du fragment P52 (≈125, quelques versets de Jean) aux grands codices du IVe siècle. Aucune œuvre antique n'est aussi bien attestée matériellement — ce qui permet aussi de repérer précisément les variantes, dont certaines significatives (la femme adultère de Jean 8 est absente des meilleurs manuscrits).",
    scholarship:
      "Le « problème synoptique » : Marc est la source de Matthieu et Luc, qui utilisent en outre une collection de paroles (la source Q) et des matériaux propres. La recherche sur le Jésus historique distingue trois « quêtes » successives et emploie des critères (attestation multiple, embarras, dissemblance, plausibilité contextuelle) aujourd'hui eux-mêmes discutés.",
    howToRead:
      "Commencez par Marc, d'un seul trait — c'est une heure de lecture et l'effet est saisissant. Puis Luc pour les paraboles, Matthieu pour le Sermon, Jean en dernier. Utilisez une synopse (les trois textes en colonnes) pour voir concrètement comment chaque évangéliste retravaille sa source.",
    relatedTexts: ['epitres-paul', 'actes', 'apocalypse', 'evangile-thomas', 'coran'],
  },

  {
    id: 'epitres-paul',
    title: 'Les Épîtres de Paul',
    traditions: ['christianisme'],
    composed: '≈ 50-62 apr. J.-C. (lettres authentiques)',
    sortYear: 55,
    language: 'Grec koinè',
    genre: 'Correspondance pastorale et théologique',
    summary:
      "Les plus anciens textes chrétiens conservés — antérieurs aux évangiles. Ce sont des lettres de circonstance, adressées à des communautés précises pour régler des problèmes concrets, dans lesquelles s'élabore la théologie chrétienne.",
    structure: [
      { part: 'Lettres incontestées (7)', description: 'Romains, 1-2 Corinthiens, Galates, Philippiens, 1 Thessaloniciens, Philémon.' },
      { part: 'Lettres débattues (3)', description: 'Éphésiens, Colossiens, 2 Thessaloniciens — vocabulaire et style s’écartent notablement.' },
      { part: 'Pastorales (3)', description: '1-2 Timothée, Tite : très majoritairement tenues pour pseudépigraphes, du début du IIe siècle. Ce sont elles qui contiennent les prescriptions les plus restrictives sur les femmes.' },
      { part: 'Hébreux', description: 'Anonyme, attribuée à Paul par tradition mais d’un tout autre style ; Origène disait déjà que « Dieu seul sait qui l’a écrite ».' },
    ],
    keyTeachings: [
      { title: 'La justification par la foi', text: "Romains et Galates : la Loi révèle la faute sans en délivrer ; c'est le don gratuit de Dieu qui justifie. Verset déclencheur de la Réforme (Romains 1,17)." },
      { title: 'L’universalisme', text: "Galates 3,28 abolit, « dans le Christ », les trois grandes divisions du monde antique : ethnique, sociale et sexuelle. Le décalage entre cette formule et les pratiques ecclésiales ultérieures est l'un des grands sujets de débat interne au christianisme." },
      { title: 'Le corps du Christ', text: "1 Corinthiens 12 : la communauté est un corps où chaque membre est indispensable, et où « les membres les plus faibles sont les plus nécessaires ». Une théorie organique de la communauté." },
      { title: 'L’hymne à l’amour', text: "1 Corinthiens 13, écrit non pour un mariage mais pour calmer une querelle de prestige entre chrétiens qui se disputaient sur les dons spirituels." },
      { title: 'La nouvelle perspective', text: "Depuis les années 1970, la recherche relit Paul non comme un homme rongé par la culpabilité mais comme un juif discutant des conditions d'entrée des non-juifs dans le peuple de Dieu. Ce déplacement change considérablement la lecture de Romains et de Galates." },
    ],
    passages: [
      { text: 'Il n’y a plus ni juif ni grec, ni esclave ni homme libre, ni homme ni femme.', source: 'Galates 3,28' },
      { text: 'L’amour ne passera jamais.', source: '1 Corinthiens 13,8' },
      { text: 'Ma puissance donne toute sa mesure dans la faiblesse.', source: '2 Corinthiens 12,9' },
      { text: 'Je ne fais pas le bien que je veux, mais le mal que je ne veux pas.', source: 'Romains 7,19' },
    ],
    transmission: "Rassemblées très tôt en corpus ; Marcion en possédait dix vers 144. Le papyrus P46 (≈200) en conserve une large part.",
    scholarship:
      "L'analyse stylométrique et thématique fonde la distinction entre lettres authentiques et pseudépigraphes. Certains passages des lettres authentiques elles-mêmes (1 Co 14,34-35) sont soupçonnés d'être des interpolations, sur la base de leur déplacement dans certains manuscrits.",
    howToRead:
      "Commencez par Philémon (une page), puis 1 Thessaloniciens, puis Galates (le Paul polémique), puis Romains (le plus construit). Ayez toujours en tête la question : à quel problème concret cette lettre répond-elle ?",
    relatedTexts: ['evangiles', 'actes'],
  },

  {
    id: 'actes',
    title: 'Les Actes des Apôtres',
    traditions: ['christianisme'],
    composed: '≈ 80-90 apr. J.-C.',
    sortYear: 85,
    language: 'Grec koinè',
    genre: 'Histoire édifiante',
    summary:
      "Suite de l'évangile de Luc : comment un petit groupe de disciples juifs à Jérusalem devient un mouvement présent dans tout l'Empire, jusqu'à Rome. C'est notre principale source sur les trente premières années du christianisme.",
    structure: [
      { part: 'Jérusalem (1-7)', description: 'Pentecôte, communauté des biens, premières persécutions, martyre d’Étienne.' },
      { part: 'Élargissement (8-12)', description: 'Samarie, l’Éthiopien, conversion de Paul, Pierre et Corneille : la barrière juif/païen tombe.' },
      { part: 'Les voyages de Paul (13-28)', description: 'Trois missions, concile de Jérusalem, arrestation, procès, voyage à Rome.' },
    ],
    keyTeachings: [
      { title: 'La Pentecôte', text: "Chacun entend dans sa propre langue : contre-image de Babel. L'universalisme n'y est pas l'uniformité mais la traduction." },
      { title: 'La communauté des biens', text: "« Ils mettaient tout en commun… nul n'était dans le besoin » (4,32-35). Ce passage a nourri tous les communismes chrétiens, du monachisme aux communautés de base." },
      { title: 'Le concile de Jérusalem', text: "Chapitre 15 : la décision de ne pas imposer la circoncision aux païens. Sans doute la décision institutionnelle la plus lourde de conséquences de l'histoire chrétienne." },
      { title: 'Un récit orienté', text: "Luc harmonise : son Paul est plus conciliant que celui des lettres, et le conflit d'Antioche disparaît. À lire en confrontant systématiquement avec Galates." },
    ],
    passages: [
      { text: 'Ils étaient assidus à l’enseignement des apôtres, à la communion fraternelle, à la fraction du pain et aux prières.', source: 'Actes 2,42' },
      { text: 'Il y a plus de bonheur à donner qu’à recevoir.', source: 'Actes 20,35' },
    ],
    transmission: "Transmis avec l'évangile de Luc ; le « texte occidental » des Actes est notablement plus long, cas remarquable de double tradition textuelle.",
    scholarship: "Sa valeur historique est débattue : les « sections en nous » suggèrent un témoin oculaire, mais les discours sont composés selon les conventions de l'historiographie antique.",
    howToRead: "Lisez les chapitres 15 (le concile) et 17 (le discours d'Athènes) en priorité : ils condensent tout l'enjeu du passage au monde grec.",
    relatedTexts: ['evangiles', 'epitres-paul'],
  },

  {
    id: 'apocalypse',
    title: 'L’Apocalypse de Jean',
    traditions: ['christianisme'],
    composed: '≈ 95 apr. J.-C.',
    sortYear: 95,
    language: 'Grec koinè (fortement sémitisant)',
    genre: 'Apocalypse, littérature de résistance',
    summary:
      "Une vision codée écrite pour des communautés persécutées sous Domitien. Le mot grec apokalypsis signifie « dévoilement » : le texte prétend montrer ce qui se joue réellement derrière les apparences du pouvoir impérial.",
    structure: [
      { part: 'Lettres aux sept Églises (1-3)', description: 'Éloges et reproches adressés à des communautés d’Asie Mineure réelles.' },
      { part: 'Les sceaux, trompettes et coupes (4-16)', description: 'Trois séries de sept fléaux, structure liturgique et cyclique plutôt que chronologique.' },
      { part: 'Babylone et la Bête (17-20)', description: 'Chute de la grande prostituée — Rome —, combat final, millénium.' },
      { part: 'La Jérusalem nouvelle (21-22)', description: 'Ciel nouveau, terre nouvelle, plus de larmes, plus de temple car Dieu y habite.' },
    ],
    keyTeachings: [
      { title: 'Un code politique', text: "Babylone est Rome ; la Bête est l'Empire ; le 666 correspond, en gématrie hébraïque, à « Néron César ». Le texte dit ce qu'on ne peut pas dire ouvertement sous une dictature." },
      { title: 'La victoire de l’agneau', text: "Le vainqueur n'est pas un lion mais un agneau égorgé. Inversion complète de l'imaginaire du pouvoir, cohérente avec l'ensemble du Nouveau Testament." },
      { title: 'La fin n’est pas la destruction', text: "Le livre s'achève sur une ville, un jardin et un fleuve : une création restaurée, non un anéantissement. Contresens fréquent des lectures catastrophistes." },
      { title: 'Le malentendu millénariste', text: "Lu comme un calendrier prophétique, il a produit d'innombrables prédictions de fin du monde, toutes démenties. Lu comme littérature de résistance, il redevient intelligible." },
    ],
    passages: [
      { text: 'Il essuiera toute larme de leurs yeux, et la mort ne sera plus.', source: 'Apocalypse 21,4' },
      { text: 'Voici, je fais toutes choses nouvelles.', source: 'Apocalypse 21,5' },
    ],
    transmission: "Son entrée dans le canon fut longtemps contestée, surtout en Orient ; il reste absent du lectionnaire liturgique orthodoxe.",
    scholarship: "Genre bien identifié, avec des parallèles nombreux (Daniel, Hénoch, 4 Esdras). Sa datation sous Domitien s'appuie sur Irénée et sur des indices internes.",
    howToRead: "Lisez d'abord les chapitres 1-3 et 21-22, puis le reste en gardant à l'esprit qu'il s'agit d'images, non de prédictions datées. Un commentaire historique est indispensable.",
    relatedTexts: ['evangiles', 'ketouvim'],
  },

  {
    id: 'cite-de-dieu',
    title: 'La Cité de Dieu',
    traditions: ['christianisme'],
    composed: '413-426',
    sortYear: 420,
    language: 'Latin',
    genre: 'Apologétique, philosophie de l’histoire',
    summary:
      "Écrit après le sac de Rome de 410, qu'on imputait à l'abandon des dieux traditionnels. Augustin y répond en distinguant deux cités mêlées dans l'histoire, et fonde ainsi la première philosophie chrétienne de l'histoire.",
    structure: [
      { part: 'Livres I-X', description: 'Réfutation du paganisme : les dieux n’ont jamais protégé Rome, et sa grandeur eut des causes humaines.' },
      { part: 'Livres XI-XXII', description: 'Origine, développement et fins des deux cités, de la création au jugement.' },
    ],
    keyTeachings: [
      { title: 'Les deux amours', text: "« Deux amours ont bâti deux cités : l'amour de soi jusqu'au mépris de Dieu, la cité terrestre ; l'amour de Dieu jusqu'au mépris de soi, la cité céleste. » Elles sont entremêlées jusqu'à la fin — aucun régime politique n'est la cité de Dieu." },
      { title: 'La désacralisation du politique', text: "Aucun empire n'est éternel ni sacré. Cette relativisation, héritée par l'Occident, prépare de loin la distinction entre pouvoir spirituel et pouvoir temporel." },
      { title: 'La justice comme critère', text: "« Sans la justice, que sont les royaumes sinon de grandes bandes de brigands ? » (IV,4)" },
      { title: 'Une philosophie de l’histoire', text: "L'histoire a un sens et une direction. Cette conception linéaire, sécularisée, nourrira les philosophies du progrès de Hegel à Marx." },
    ],
    passages: [{ text: 'Sans la justice, que sont les royaumes sinon de grandes bandes de brigands ?', source: 'La Cité de Dieu IV,4' }],
    transmission: "Copié massivement au Moyen Âge ; lu par Charlemagne, cité par tous les théoriciens politiques médiévaux.",
    scholarship: "Souvent lu comme un traité politique, alors qu'il est d'abord une apologétique de circonstance ; les lectures « théocratiques » qu'on en a tirées forcent le texte.",
    howToRead: "Le livre XIX (sur la paix et la société) et le livre XIV (sur les deux amours) suffisent à saisir la thèse centrale.",
    relatedTexts: ['confessions', 'epitres-paul'],
  },

  {
    id: 'confessions',
    title: 'Les Confessions',
    traditions: ['christianisme'],
    composed: '≈ 397-400',
    sortYear: 398,
    language: 'Latin',
    genre: 'Autobiographie spirituelle, méditation philosophique',
    summary:
      "La première autobiographie introspective de la littérature occidentale. Augustin y raconte sa vie non pour se justifier mais comme une prière adressée à Dieu — et y invente une manière de parler de soi qui n'existait pas.",
    structure: [
      { part: 'Livres I-IX', description: 'Enfance, école, vol des poires, Carthage, manichéisme, Milan, conversion au jardin, mort de Monique.' },
      { part: 'Livre X', description: 'Analyse de la mémoire : « Je suis devenu pour moi-même une terre de difficulté ».' },
      { part: 'Livres XI-XIII', description: 'Commentaire de la Genèse, méditation sur le temps et la création.' },
    ],
    keyTeachings: [
      { title: 'Le temps', text: "« Qu'est-ce donc que le temps ? Si personne ne me le demande, je le sais ; si je veux l'expliquer, je ne le sais plus. » Il propose une théorie du temps comme distension de l'âme — passé, présent et futur n'existant que dans la mémoire, l'attention et l'attente." },
      { title: 'Le désir', text: "« Tu nous as faits pour toi, et notre cœur est sans repos tant qu'il ne repose en toi. » L'inquiétude humaine y est un indice, non un défaut." },
      { title: 'Le vol des poires', text: "Il analyse longuement un larcin d'adolescence sans intérêt : il volait pour le plaisir de mal faire. Première analyse psychologique du mal gratuit." },
    ],
    passages: [
      { text: 'Tard je t’ai aimée, ô beauté si ancienne et si nouvelle.', source: 'Confessions X,27' },
      { text: 'Donne-moi la chasteté et la continence, mais pas tout de suite.', source: 'Confessions VIII,7' },
    ],
    transmission: "L'un des textes latins les plus copiés du Moyen Âge.",
    scholarship: "La véracité factuelle du récit de conversion (la voix de l'enfant, « prends et lis ») est discutée : le texte est écrit treize ans après, avec une forte mise en forme littéraire.",
    howToRead: "Les livres I à IX se lisent comme un récit. Le livre XI sur le temps est un classique de la philosophie, lisible séparément.",
    relatedTexts: ['cite-de-dieu', 'epitres-paul'],
  },

  {
    id: 'somme-theologique',
    title: 'La Somme théologique',
    traditions: ['christianisme'],
    composed: '1265-1274 (inachevée)',
    sortYear: 1270,
    language: 'Latin',
    genre: 'Traité scolastique',
    length: '512 questions, 2 669 articles, ≈ 1,8 million de mots',
    summary:
      "L'exposé le plus complet de la théologie médiévale, conçu comme un manuel pour débutants. Sa méthode — exposer d'abord les objections dans leur meilleure formulation — est un modèle d'honnêteté intellectuelle.",
    structure: [
      { part: 'Prima pars', description: 'Dieu, la Trinité, la création, les anges, l’humain.' },
      { part: 'Secunda pars', description: 'L’agir humain : béatitude, passions, vertus, loi, grâce. La plus longue et la plus lue aujourd’hui.' },
      { part: 'Tertia pars', description: 'Le Christ, les sacrements — interrompue par le silence final de Thomas.' },
    ],
    keyTeachings: [
      { title: 'Les cinq voies', text: "Cinq raisonnements sur l'existence de Dieu, à partir du mouvement, de la causalité, de la contingence, des degrés de perfection et de la finalité. Ils portent sur une dépendance permanente, non sur un premier instant — d'où l'inanité de l'objection « et qui a créé Dieu ? »." },
      { title: 'La loi naturelle', text: "Une loi morale accessible à la raison humaine indépendamment de la révélation. Ancêtre direct du droit naturel moderne et des droits humains." },
      { title: 'Foi et raison', text: "« La grâce ne détruit pas la nature mais la perfectionne. » Il n'y a pas deux vérités contradictoires : ce que la raison établit solidement ne peut contredire la foi." },
      { title: 'La méthode des objections', text: "Chaque article commence par « Il semble que… », expose les meilleurs arguments adverses, puis répond point par point. Rien n'oblige un auteur à formuler ainsi les positions qu'il combat." },
    ],
    passages: [{ text: 'La grâce ne détruit pas la nature, elle la perfectionne.', source: 'Somme théologique I, q.1, a.8' }],
    transmission: "Devenue le manuel de référence de la théologie catholique ; placée sur l'autel au concile de Trente à côté de la Bible, selon une tradition.",
    scholarship: "La lecture « manuelliste » du XIXe siècle a figé Thomas en système ; les études contemporaines soulignent au contraire son caractère ouvert et son rapport constant à la controverse.",
    howToRead: "N'essayez pas de la lire linéairement. Choisissez une question (par exemple I-II, q.94 sur la loi naturelle) et lisez ses articles : la structure devient vite familière.",
    relatedTexts: ['cite-de-dieu', 'guide-egares'],
  },

  {
    id: 'philocalie',
    title: 'La Philocalie',
    traditions: ['christianisme'],
    composed: 'Textes du IVe au XVe s. ; anthologie publiée en 1782',
    sortYear: 1782,
    language: 'Grec',
    genre: 'Anthologie spirituelle',
    summary:
      "Recueil de textes de Pères du désert et de moines byzantins sur la prière du cœur et la vigilance intérieure. Publié à Venise en 1782, il a relancé la spiritualité orthodoxe dans tout le monde slave.",
    structure: [{ part: 'Trente-six auteurs', description: 'D’Évagre le Pontique et Maxime le Confesseur à Grégoire Palamas.' }],
    keyTeachings: [
      { title: 'La prière du cœur', text: "« Seigneur Jésus-Christ, Fils de Dieu, aie pitié de moi, pécheur » — répétée jusqu'à devenir continue, souvent au rythme du souffle. Parenté frappante avec le dhikr soufi et le japa hindou, sans contact historique établi." },
      { title: 'Nepsis', text: "La sobriété vigilante : observer les pensées (logismoi) dès leur apparition, avant qu'elles ne deviennent passion. Une psychologie de l'attention élaborée au IVe siècle." },
      { title: 'La déification', text: "Grégoire Palamas distingue l'essence divine, inaccessible, et les énergies divines, auxquelles l'humain peut participer réellement." },
    ],
    passages: [{ text: 'Garde ton esprit dans l’enfer et ne désespère pas.', source: 'Silouane l’Athonite (postérieur, dans la même tradition)' }],
    transmission: "Traduit en slavon par Païssy Velitchkovsky, puis en russe : c'est ce livre qu'emporte le pèlerin des Récits d'un pèlerin russe, best-seller mondial de la spiritualité.",
    scholarship: "L'hésychasme fut violemment contesté au XIVe siècle par Barlaam le Calabrais ; les conciles palamites de 1341-1351 tranchèrent en sa faveur.",
    howToRead: "Les Récits d'un pèlerin russe sont l'introduction la plus accessible. La Philocalie elle-même se lit par fragments.",
    relatedTexts: ['evangiles', 'mathnawi'],
  },

  {
    id: 'coran',
    title: 'Le Coran',
    originalTitle: 'القرآن',
    traditions: ['islam'],
    composed: '610-632 ; recension ≈ 650',
    sortYear: 632,
    language: 'Arabe classique',
    genre: 'Révélation, oracle, récit, loi, hymne',
    length: '114 sourates, 6 236 versets, ≈ 77 000 mots',
    summary:
      "Pour les musulmans, la parole même de Dieu récitée à Muhammad par l'ange Gabriel — non un livre écrit sur Dieu mais Dieu s'adressant directement. Le mot qur'an signifie « récitation » : c'est d'abord un texte oral, dont la sonorité fait partie du message.",
    structure: [
      { part: 'Ordre du texte', description: "Les sourates sont classées non par chronologie mais approximativement de la plus longue à la plus courte, après la Fatiha. Cette organisation déroute le lecteur qui cherche un récit." },
      { part: 'Sourates mecquoises', description: "Les premières : courtes, rythmées, serments, jugement dernier, unicité de Dieu, dénonciation de l'injustice. Elles se trouvent à la fin du livre." },
      { part: 'Sourates médinoises', description: 'Plus longues : organisation de la communauté, droit, famille, guerre, relations avec juifs et chrétiens.' },
      { part: 'La Fatiha', description: 'Sept versets d’ouverture, récités dans chaque unité de prière — soit des dizaines de fois par jour.' },
    ],
    keyTeachings: [
      { title: 'Le tawhid', text: "Sourate 112 en quatre versets : « Dis : il est Dieu, unique ; Dieu, l'Absolu ; il n'a pas engendré et n'a pas été engendré ; nul n'est égal à lui. » Tout l'islam tient là." },
      { title: 'La continuité prophétique', text: "Le Coran se présente comme confirmant et rectifiant les révélations antérieures. Adam, Noé, Abraham, Joseph, Moïse, David, Jésus y sont des prophètes ; Marie y a une sourate à son nom." },
      { title: 'La justice sociale', text: "Protection de l'orphelin, aumône obligatoire, interdiction de l'usure, exactitude des poids et mesures, droits successoraux des femmes. Les sourates mecquoises sont d'une virulence remarquable contre l'accumulation." },
      { title: 'Les versets difficiles', text: "Les passages de combat (9,5 ; 9,29) sont au cœur des controverses. Les juristes classiques les rapportaient à des circonstances précises et les encadraient strictement ; les lectures littéralistes contemporaines les universalisent. La question du contexte (asbab al-nuzul) et de l'abrogation (naskh) est ici centrale." },
      { title: 'L’inimitabilité', text: "Le i'jaz : le Coran défie quiconque de produire une sourate semblable (2,23). Pour les musulmans, sa beauté formelle est elle-même le miracle — ce qui explique le poids de la récitation psalmodiée (tajwid) dans la piété." },
    ],
    passages: [
      { text: 'Nulle contrainte en religion.', source: 'Coran 2,256' },
      { text: 'Quiconque tue un homme… c’est comme s’il avait tué l’humanité entière ; et quiconque en sauve un, c’est comme s’il avait sauvé l’humanité entière.', source: 'Coran 5,32' },
      { text: 'Dieu est la lumière des cieux et de la terre.', source: 'Coran 24,35' },
      { text: 'Nous vous avons créés en peuples et en tribus pour que vous vous connaissiez.', source: 'Coran 49,13' },
      { text: 'Ma miséricorde embrasse toute chose.', source: 'Coran 7,156' },
    ],
    transmission:
      "Mémorisé et partiellement écrit du vivant de Muhammad, rassemblé sous Abu Bakr, unifié sous Uthman vers 650 avec destruction des versions divergentes. Les manuscrits les plus anciens — palimpseste de Sanaa, folios de Birmingham datés au carbone entre 568 et 645 — confirment une stabilité très précoce du texte consonantique. Les points diacritiques et voyelles ont été ajoutés progressivement ; dix lectures (qira'at) canoniques subsistent, aux différences généralement mineures.",
    scholarship:
      "La recherche occidentale se partage entre une approche « traditionnelle-critique », qui accepte pour l'essentiel la chronologie musulmane tout en l'historicisant (Nöldeke, Neuwirth), et une école révisionniste plus radicale (Wansbrough, Crone) qui postule une élaboration plus tardive. Les découvertes manuscrites récentes ont plutôt renforcé la première. L'exégèse historicisante par des penseurs musulmans (Fazlur Rahman, Arkoun, Abu Zayd, Amina Wadud) est aujourd'hui un champ vivant et parfois dangereux pour ses auteurs.",
    howToRead:
      "Ne commencez pas par le début. Lisez la Fatiha, puis les dernières sourates (78-114, courtes et puissantes, qui sont les plus anciennes), puis les récits : sourate 12 (Joseph), 18 (la Caverne), 19 (Marie). Une traduction annotée précisant le contexte de révélation est indispensable. Si possible, écoutez une récitation : le texte est fait pour l'oreille.",
    relatedTexts: ['hadith', 'sira', 'torah', 'evangiles'],
  },

  {
    id: 'hadith',
    title: 'Les recueils de hadiths',
    traditions: ['islam'],
    composed: 'IXe-Xe s. (transmissions antérieures)',
    sortYear: 870,
    language: 'Arabe',
    genre: 'Traditions rapportées, jurisprudence',
    summary:
      "Paroles, actes et approbations attribués à Muhammad, transmis par des chaînes de garants. Deuxième source du droit islamique après le Coran, ils décrivent avec une minutie inégalée la vie quotidienne d'un fondateur religieux.",
    structure: [
      { part: 'Les six livres sunnites', description: 'Bukhari et Muslim (les deux « Sahih », tenus pour les plus fiables), Abu Dawud, Tirmidhi, Nasa’i, Ibn Maja.' },
      { part: 'Les quatre livres chiites', description: 'Al-Kafi de Kulayni, et trois recueils postérieurs, incluant les paroles des imams.' },
      { part: 'Anatomie d’un hadith', description: 'Une chaîne de transmetteurs (isnad) suivie du contenu (matn). La critique classique porte surtout sur la chaîne.' },
    ],
    keyTeachings: [
      { title: 'L’intention', text: "« Les actes ne valent que par les intentions » — premier hadith du Sahih de Bukhari, et principe fondamental du droit musulman." },
      { title: 'Les hadiths qudsi', text: "Paroles où Dieu parle à la première personne sans faire partie du Coran. « Ô mes serviteurs, je me suis interdit l'injustice et je l'ai interdite entre vous : ne soyez donc pas injustes. »" },
      { title: 'La science du hadith', text: "Classement en authentique (sahih), bon (hasan), faible (daïf), forgé (mawdu'). Des dictionnaires biographiques recensent des dizaines de milliers de transmetteurs avec leur réputation — une entreprise critique sans équivalent médiéval." },
      { title: 'Les limites', text: "Les hadiths ont été mis par écrit deux siècles après les faits, dans un contexte où chaque parti avait intérêt à en produire. Goldziher et Schacht ont contesté la fiabilité globale de la méthode ; des travaux plus récents (Motzki, Juynboll) proposent des résultats plus nuancés. Le débat reste ouvert, y compris chez des penseurs musulmans « coranistes » qui rejettent le corpus." },
    ],
    passages: [
      { text: 'Les actes ne valent que par les intentions.', source: 'Bukhari 1' },
      { text: 'Aucun de vous ne croit vraiment tant qu’il ne désire pas pour son frère ce qu’il désire pour lui-même.', source: 'Bukhari 13' },
      { text: 'Dieu est beau et il aime la beauté.', source: 'Muslim 91' },
    ],
    transmission: "Transmis oralement avec attestation de licence (ijaza) de maître à disciple, chaîne d'autorisation qui se poursuit aujourd'hui.",
    scholarship: "Champ de recherche très actif, où les méthodes numériques d'analyse des chaînes de transmission apportent depuis peu de nouveaux résultats.",
    howToRead: "Les Quarante hadiths de Nawawi (quarante-deux textes courts) sont la meilleure introduction, largement traduits.",
    relatedTexts: ['coran', 'sira', 'nahj-al-balagha'],
  },

  {
    id: 'sira',
    title: 'La Sira (biographie du Prophète)',
    traditions: ['islam'],
    composed: 'Ibn Ishaq ≈ 767 ; recension d’Ibn Hisham ≈ 833',
    sortYear: 800,
    language: 'Arabe',
    genre: 'Biographie, chronique',
    summary:
      "Le récit de la vie de Muhammad, principale source narrative sur les origines de l'islam. Composée cent trente à deux cents ans après les faits, elle mêle mémoire, tradition orale et matériaux hagiographiques.",
    structure: [
      { part: 'Avant l’islam', description: 'Généalogie, Arabie préislamique, naissance et jeunesse.' },
      { part: 'La Mecque', description: 'Révélation, premiers convertis, persécutions, boycott, émigration en Abyssinie.' },
      { part: 'Médine', description: 'Hégire, constitution, batailles, conflits avec les tribus juives, expéditions.' },
      { part: 'La fin', description: 'Prise de La Mecque, pèlerinage d’adieu, mort.' },
    ],
    keyTeachings: [
      { title: 'Le contexte des versets', text: "La sira fournit les circonstances de révélation sans lesquelles de nombreux versets coraniques sont inintelligibles. C'est la clé de toute lecture contextuelle." },
      { title: 'Un texte à lire de façon critique', text: "L'original d'Ibn Ishaq est perdu ; nous le lisons à travers Ibn Hisham, qui déclare avoir supprimé ce qui « ferait de la peine à certains ». La sélection est donc explicite." },
    ],
    passages: [{ text: 'Ô hommes, votre Seigneur est un et votre père est un : vous descendez tous d’Adam.', source: 'Sermon d’adieu, rapporté par la sira' }],
    transmission: "Complétée par les Maghazi de Waqidi et les Tabaqat d'Ibn Sa'd.",
    scholarship: "L'école révisionniste conteste sa valeur historique ; d'autres chercheurs y repèrent des noyaux anciens fiables. Le débat est l'un des plus vifs des études islamiques.",
    howToRead: "Existe en traduction française ; les passages sur La Mecque et l'Hégire sont les plus éclairants pour comprendre le Coran.",
    relatedTexts: ['coran', 'hadith'],
  },

  {
    id: 'nahj-al-balagha',
    title: 'Nahj al-Balagha',
    traditions: ['islam'],
    composed: 'Compilé ≈ 1009 par al-Sharif al-Radi',
    sortYear: 1009,
    language: 'Arabe',
    genre: 'Sermons, lettres, aphorismes',
    summary:
      "Recueil de discours, lettres et sentences attribués à Ali ibn Abi Talib. Sommet de la prose arabe et texte fondamental du chiisme, il traite de gouvernement, de justice, de mort et de connaissance de soi.",
    structure: [
      { part: 'Sermons', description: '241 discours sur Dieu, la création, la mort, la politique.' },
      { part: 'Lettres', description: '79 lettres, dont l’instruction à Malik al-Ashtar, gouverneur d’Égypte — un traité de gouvernance complet.' },
      { part: 'Maximes', description: '480 aphorismes brefs.' },
    ],
    keyTeachings: [
      { title: 'La lettre à Malik', text: "« Fais que ton cœur ressente la miséricorde pour les sujets… car ils sont de deux sortes : ton frère en religion, ou ton semblable en humanité. » Elle recommande aussi de se méfier des flatteurs, de recevoir les plaignants sans intermédiaire et de ne pas s'enrichir de sa fonction." },
      { title: 'Justice et pauvreté', text: "« Je n'ai jamais vu de richesse excessive sans y trouver un droit bafoué à côté. »" },
      { title: 'Connaissance de soi', text: "« Celui qui se connaît soi-même connaît son Seigneur » — formule reprise ensuite par tout le soufisme." },
    ],
    passages: [
      { text: 'Ne sois pas l’esclave d’autrui : Dieu t’a créé libre.', source: 'Lettre 31' },
      { text: 'Deux sortes d’hommes : ton frère en religion, ou ton semblable en humanité.', source: 'Lettre 53' },
    ],
    transmission: "Compilé quatre siècles après Ali ; l'authenticité de certains passages est contestée par des savants sunnites, la valeur littéraire ne l'est par personne.",
    scholarship: "Les études contemporaines distinguent des couches, certaines très probablement authentiques, d'autres plus tardives.",
    howToRead: "La lettre 53 se lit seule et constitue l'un des plus beaux textes de gouvernance de la littérature mondiale.",
    relatedTexts: ['coran', 'hadith'],
  },

  {
    id: 'ihya-ulum-din',
    title: 'La Revivification des sciences de la religion',
    originalTitle: 'إحياء علوم الدين',
    traditions: ['islam'],
    composed: '≈ 1105',
    sortYear: 1105,
    language: 'Arabe',
    genre: 'Somme spirituelle et éthique',
    summary:
      "Al-Ghazali y montre que chaque prescription légale a un sens intérieur, sans lequel elle devient formalisme vide. L'ouvrage a réconcilié le droit et le soufisme et reste, mille ans plus tard, l'un des livres les plus lus du monde musulman.",
    structure: [
      { part: 'Les actes du culte', description: 'Savoir, croyance, purification, prière, aumône, jeûne, pèlerinage, lecture du Coran.' },
      { part: 'Les usages', description: 'Nourriture, mariage, gains, licite et illicite, amitié, voyage, musique.' },
      { part: 'Les vices destructeurs', description: 'Gourmandise, colère, envie, avarice, orgueil, vanité, amour du monde.' },
      { part: 'Les vertus salvatrices', description: 'Repentir, patience, gratitude, espérance, sincérité, confiance en Dieu, amour, méditation de la mort.' },
    ],
    keyTeachings: [
      { title: 'L’intérieur du rite', text: "Il décrit systématiquement les « secrets » de chaque acte : que doit vivre celui qui prie, jeûne, fait l'aumône ? Sans cela, le geste est un corps sans âme." },
      { title: 'La psychologie des vices', text: "Ses analyses de la colère, de l'envie et de l'orgueil sont d'une finesse clinique remarquable, souvent comparées à celles des Pères du désert." },
      { title: 'Le livre de la mort', text: "Le dernier quart s'achève sur une méditation sur la mort et l'au-delà, considérée comme l'un des sommets de la littérature spirituelle." },
    ],
    passages: [{ text: 'Le savoir sans l’action est folie ; l’action sans le savoir ne peut être.', source: 'Ihya, Livre du savoir' }],
    transmission: "Brûlé en Andalousie par des juristes malikites de son vivant ; devenu ensuite un classique universel.",
    scholarship: "Sa réception a été étudiée comme un cas majeur d'intégration institutionnelle de la mystique.",
    howToRead: "Les livres sur la patience, la gratitude et la méditation de la mort se lisent séparément et existent en traduction française.",
    relatedTexts: ['coran', 'hadith', 'mathnawi'],
  },

  {
    id: 'mathnawi',
    title: 'Le Masnavi',
    traditions: ['islam'],
    composed: '1258-1273',
    sortYear: 1265,
    language: 'Persan',
    genre: 'Poème mystique didactique',
    length: '≈ 25 000 distiques, 6 livres',
    summary:
      "Souvent appelé « le Coran en persan », le grand œuvre de Rumi enchaîne fables, anecdotes, digressions et commentaires coraniques pour dire une seule chose : la séparation d'avec l'origine et le chemin du retour.",
    structure: [
      { part: 'Le prologue du roseau', description: 'Dix-huit vers célèbres : la plainte du roseau coupé de la roselière, qui fonde tout le poème.' },
      { part: 'Six livres', description: 'Sans plan apparent : une histoire en amène une autre, souvent interrompue, et le sens surgit des digressions.' },
    ],
    keyTeachings: [
      { title: 'La séparation', text: "« Écoute le roseau raconter son histoire, se plaindre des séparations. » Toute musique, tout désir vient de l'arrachement à l'origine." },
      { title: 'L’amour comme méthode', text: "L'intellect est une béquille ; l'amour est la voie. Mais Rumi était un juriste érudit : ce n'est pas un anti-intellectualisme, c'est une hiérarchisation." },
      { title: 'Les fables', text: "L'éléphant dans le noir (chacun le décrit selon la partie qu'il touche — parabole d'origine indienne sur la relativité des théologies), le marchand et le perroquet, l'homme qui priait et à qui Dieu répond : « Ton appel même était ma réponse. »" },
      { title: 'Ce que les traductions perdent', text: "Les versions occidentales les plus diffusées (Coleman Barks) sont des adaptations sans connaissance du persan, qui effacent le vocabulaire coranique. Rumi y perd son islam." },
    ],
    passages: [
      { text: 'Écoute le roseau raconter son histoire ; il se plaint des séparations.', source: 'Masnavi I,1' },
      { text: 'Ton appel « ô Seigneur » était lui-même mon « me voici ».', source: 'Masnavi III' },
    ],
    transmission: "Récité et commenté sans interruption depuis le XIIIe siècle, de l'Anatolie au Bengale.",
    scholarship: "L'édition critique de Reynold Nicholson (1925-1940) fait référence ; les traductions françaises d'Eva de Vitray-Meyerovitch sont fidèles.",
    howToRead: "Ne cherchez pas de progression : ouvrez au hasard, lisez une histoire. Le prologue du roseau est incontournable.",
    relatedTexts: ['coran', 'ihya-ulum-din'],
  },

  {
    id: 'kitab-i-aqdas',
    title: 'Le Kitáb-i-Aqdas',
    traditions: ['bahaisme'],
    composed: '≈ 1873',
    sortYear: 1873,
    language: 'Arabe',
    genre: 'Livre de lois',
    summary:
      "« Le Livre le plus saint » : le texte législatif central de la foi bahá'íe, fixant prière, jeûne, mariage, héritage, institutions, et abrogeant les lois antérieures.",
    structure: [{ part: 'Texte continu', description: 'Sans chapitres ; lois, exhortations et avertissements aux souverains s’y entremêlent.' }],
    keyTeachings: [
      { title: 'Investigation indépendante', text: "L'imitation aveugle de la foi des ancêtres est interdite : chacun doit chercher la vérité par lui-même." },
      { title: 'Un ordre mondial', text: "Il appelle les souverains à réduire leurs armements, à régler leurs différends par un tribunal international et à adopter une langue auxiliaire universelle." },
      { title: 'Le travail comme culte', text: "Le travail accompli dans un esprit de service est élevé au rang d'adoration ; la mendicité et le monachisme sont proscrits." },
    ],
    passages: [{ text: 'Ne vous croyez pas autorisés à imposer votre volonté à votre prochain.', source: 'Kitáb-i-Aqdas' }],
    transmission: "Traduction anglaise officielle publiée seulement en 1992 ; auparavant diffusé par résumés.",
    scholarship: "Étudié comme cas de constitution religieuse écrite par le fondateur lui-même, ce qui est rare.",
    howToRead: "Lire d'abord Les Paroles cachées, beaucoup plus accessibles.",
    relatedTexts: ['kitab-i-iqan', 'paroles-cachees', 'coran'],
  },

  {
    id: 'kitab-i-iqan',
    title: 'Le Livre de la certitude',
    traditions: ['bahaisme'],
    composed: '1861',
    sortYear: 1861,
    language: 'Persan',
    genre: 'Traité théologique',
    summary:
      "Écrit en deux jours et deux nuits, il expose la doctrine de la révélation progressive en relisant les prophéties bibliques et coraniques comme symboliques plutôt que littérales.",
    structure: [{ part: 'Deux parties', description: 'Les prophètes rejetés par leurs contemporains ; la nature de la révélation et des Manifestations.' }],
    keyTeachings: [
      { title: 'Pourquoi on rejette les prophètes', text: "Chaque génération attend des signes littéraux et manque celui qui vient. La lecture littérale des prophéties est présentée comme le principal obstacle à la foi." },
      { title: 'Les Manifestations', text: "Elles sont des miroirs parfaits du divin, chacune apportant les lois adaptées à son temps." },
    ],
    passages: [{ text: 'Aucun homme n’atteindra les rivages de l’océan de la vraie compréhension sans se détacher de tout ce qui est au ciel et sur la terre.', source: 'Kitáb-i-Íqán' }],
    transmission: "Considéré comme le principal ouvrage doctrinal de Bahá'u'lláh.",
    scholarship: "Étudié pour sa méthode herméneutique, qui généralise l'allégorie à toutes les traditions.",
    howToRead: "Se lit d'un trait ; la première partie est la plus accessible.",
    relatedTexts: ['kitab-i-aqdas', 'coran', 'evangiles'],
  },

  {
    id: 'paroles-cachees',
    title: 'Les Paroles cachées',
    traditions: ['bahaisme'],
    composed: '1858',
    sortYear: 1858,
    language: 'Arabe et persan',
    genre: 'Aphorismes mystiques',
    summary: "Bref recueil de 153 versets présentés comme l'essence des enseignements de tous les prophètes, écrit dans un style d'adresse directe.",
    structure: [{ part: 'Deux parties', description: '71 versets arabes, 82 versets persans.' }],
    keyTeachings: [
      { title: 'La noblesse humaine', text: "« Ô fils de l'esprit ! Je t'ai créé noble, pourquoi t'abaisses-tu ? »" },
      { title: 'Le bilan quotidien', text: "« Demande-toi des comptes chaque jour avant qu'on ne t'en demande. »" },
    ],
    passages: [
      { text: 'Ô fils de l’esprit ! Mon premier conseil est celui-ci : possède un cœur pur, bon et radieux.', source: 'Paroles cachées, arabe 1' },
    ],
    transmission: "Le texte bahá'í le plus lu et le plus traduit.",
    scholarship: "Genre proche des recueils de sagesse soufis dont il s'inspire formellement.",
    howToRead: "Quelques versets à la fois. C'est la meilleure porte d'entrée dans la foi bahá'íe.",
    relatedTexts: ['kitab-i-aqdas'],
  },

  {
    id: 'epitres-sagesse',
    title: 'Les Épîtres de la Sagesse',
    traditions: ['druzisme'],
    composed: '1017-1043',
    sortYear: 1030,
    language: 'Arabe',
    genre: 'Corpus ésotérique',
    summary:
      "Le corpus sacré druze, réservé aux initiés (uqqal) et longtemps inaccessible. 111 épîtres attribuées à Hamza ibn Ali et à ses successeurs.",
    structure: [{ part: 'Six volumes', description: 'Épîtres doctrinales, polémiques et administratives.' }],
    keyTeachings: [
      { title: 'Le tawhid druze', text: "Un unitarisme abstrait, dépouillé de tout attribut, combiné à une cosmologie néoplatonicienne de cinq principes." },
      { title: 'Le secret', text: "L'accès réservé n'est pas une coquetterie : il a permis à une petite communauté de survivre onze siècles en milieu hostile." },
    ],
    passages: [],
    transmission: "Des copies ont circulé en Occident depuis le XIXe siècle ; leur publication a été et reste mal vue par la communauté.",
    scholarship: "Étudiées principalement par les orientalistes ; les études internes restent rares.",
    howToRead: "Les traductions disponibles sont partielles ; se rabattre sur les études académiques.",
    relatedTexts: ['coran'],
  },

  {
    id: 'ginza-rabba',
    title: 'Le Ginza Rabba',
    traditions: ['mandeisme'],
    composed: 'IIe-VIIe s.',
    sortYear: 400,
    language: 'Araméen mandéen',
    genre: 'Cosmologie, liturgie, eschatologie',
    summary: "« Le Grand Trésor » : le livre principal du mandéisme, dernière religion gnostique vivante. Il décrit l'origine du monde, la chute de l'âme et sa remontée vers le Monde de Lumière.",
    structure: [
      { part: 'Ginza de droite', description: 'Cosmologie, morale, histoire — lu à l’endroit.' },
      { part: 'Ginza de gauche', description: 'Sort de l’âme après la mort — le livre se retourne pour le lire.' },
    ],
    keyTeachings: [
      { title: 'L’âme étrangère', text: "L'âme vient du Monde de Lumière et doit y remonter à travers des postes de garde. Le monde matériel est l'œuvre de puissances inférieures." },
      { title: 'Le baptême répété', text: "L'eau vive (yardna) relie au Monde de Lumière ; l'immersion se répète chaque dimanche, contrairement au baptême chrétien unique." },
    ],
    passages: [{ text: 'Au nom de la Grande Vie, que la lumière sublime soit glorifiée.', source: 'Ginza Rabba, formule liturgique' }],
    transmission: "Copié à la main par les prêtres ; la survie du corpus est menacée par la dispersion de la communauté depuis 2003.",
    scholarship: "Source majeure sur les milieux baptistes juifs du Ier siècle ; les travaux de Lady Drower restent fondateurs.",
    howToRead: "Traductions académiques partielles ; l'accès reste difficile.",
    relatedTexts: ['evangile-thomas', 'evangiles'],
  },
];
