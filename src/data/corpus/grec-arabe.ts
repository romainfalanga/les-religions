import type { CorpusBook } from './types';

export const corpusGrecArabe: CorpusBook[] = [
  {
    id: 'evangiles-gr',
    title: 'Évangiles',
    textId: 'evangiles',
    traditions: ['christianisme'],
    language: 'Grec koinè',
    script: 'Alphabet grec',
    rtl: false,
    composed: '≈ 70-110 apr. J.-C.',
    intro:
      "Des Galiléens de langue araméenne, dont les paroles nous parviennent en grec, transcrites une à deux générations plus tard. Chaque évangile est déjà une traduction — et une interprétation.",
    translationNote:
      "Le grec du Nouveau Testament est une langue de contact : vocabulaire grec, syntaxe souvent sémitique, concepts juifs. Traduire en français, c'est franchir une seconde fois une frontière déjà franchie une fois.",
    units: [
      {
        id: 'mc-1-15',
        ref: 'Marc 1,15',
        original: 'Πεπλήρωται ὁ καιρὸς καὶ ἤγγικεν ἡ βασιλεία τοῦ θεοῦ· μετανοεῖτε καὶ πιστεύετε ἐν τῷ εὐαγγελίῳ.',
        translit: 'Peplērōtai ho kairos kai ēngiken hē basileia tou theou : metanoeite kai pisteuete en tō euangeliō.',
        literal: 'A-été-accompli le moment-opportun et s’est-approché le règne de-Dieu ; changez-d’esprit et faites-confiance dans l’annonce.',
        translations: [
          { source: 'Vulgate', year: 'IVe s.', text: 'Paenitemini et credite Evangelio — « Faites pénitence et croyez à l’Évangile »', note: 'Traduction de Jérôme qui oriente vers le sacrement de pénitence.' },
          { source: 'Segond', year: '1910', text: 'Repentez-vous, et croyez à la bonne nouvelle.' },
          { source: 'TOB', year: '1988', text: 'Convertissez-vous et croyez à la Bonne Nouvelle.' },
          { source: 'Érasme', year: '1516', text: 'resipiscite — « ressaisissez-vous, retrouvez vos esprits »', note: 'Sa correction du latin de Jérôme est l’étincelle que Luther utilisera dès sa première thèse.' },
        ],
        gloss: [
          { term: 'μετανοέω', translit: 'metanoeō', sense: 'Changer d’esprit, retourner sa manière de voir. Rien à voir avec la contrition ni avec un acte sacramentel.' },
          { term: 'καιρός', translit: 'kairos', sense: 'Le moment opportun, par opposition à chronos, le temps qui s’écoule. Le grec distingue deux temps ; le français n’en a qu’un.' },
          { term: 'βασιλεία', translit: 'basileia', sense: 'Plutôt l’acte de régner que le territoire. « Règne » est plus juste que « royaume ».' },
        ],
        issue: {
          title: 'Le mot qui a déclenché la Réforme',
          text: "La première des 95 thèses de Luther porte exactement là-dessus : « Quand notre Seigneur dit metanoeite, il a voulu que la vie entière soit une conversion » — et non, comme le laissait entendre le paenitemini de la Vulgate, qu'on accomplisse des actes de pénitence. Érasme venait de publier le texte grec et de corriger la traduction latine. Sans cette correction philologique, la contestation des indulgences perdait son fondement. Un choix de traduction du IVe siècle, révisé au XVIe, a fracturé la chrétienté.",
        },
      },
      {
        id: 'mt-5-3',
        ref: 'Matthieu 5,3',
        original: 'Μακάριοι οἱ πτωχοὶ τῷ πνεύματι, ὅτι αὐτῶν ἐστιν ἡ βασιλεία τῶν οὐρανῶν.',
        translit: 'Makarioi hoi ptōchoi tō pneumati, hoti autōn estin hē basileia tōn ouranōn.',
        literal: 'Bienheureux les mendiants par-le-souffle, car d’eux est le règne des cieux.',
        translations: [
          { source: 'Segond', year: '1910', text: 'Heureux les pauvres en esprit, car le royaume des cieux est à eux !' },
          { source: 'Luc 6,20 (parallèle)', year: '≈85', text: 'Heureux vous les pauvres — sans « en esprit ».', note: 'Luc supprime la qualification spirituelle : la béatitude vise les pauvres réels.' },
          { source: 'Bible Bayard', year: '2001', text: 'Joie de ceux qui n’ont rien, le règne des cieux est à eux.' },
        ],
        gloss: [
          { term: 'πτωχός', translit: 'ptōchos', sense: 'Non le pauvre qui travaille (penēs) mais le mendiant, celui qui est réduit à tendre la main. Le mot est brutal.' },
          { term: 'μακάριος', translit: 'makarios', sense: 'Terme des inscriptions funéraires et des dieux : « bienheureux ». « Heureux » est trop faible, « chanceux » trop léger.' },
        ],
        issue: {
          title: 'Deux évangiles, deux pauvretés',
          text: "Matthieu ajoute « en esprit » ; Luc ne l'a pas. La formule matthéenne a permis de spiritualiser la béatitude — être détaché intérieurement des richesses —, ce que la version de Luc interdit. La traduction française « pauvres en esprit » a en outre produit un contresens durable, le lecteur y entendant une faiblesse intellectuelle. Le grec dit : ceux dont le souffle même est mendiant. La comparaison des deux versions est le meilleur exercice pour comprendre qu'un évangéliste interprète en rapportant.",
        },
      },
      {
        id: 'jn-1-1',
        ref: 'Jean 1,1',
        original: 'Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.',
        translit: 'En archē ēn ho logos, kai ho logos ēn pros ton theon, kai theos ēn ho logos.',
        literal: 'En commencement était le logos, et le logos était vers le dieu, et dieu était le logos.',
        translations: [
          { source: 'Segond', year: '1910', text: 'Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu.' },
          { source: 'Vulgate', year: 'IVe s.', text: 'In principio erat Verbum… — « Verbe »' },
          { source: 'Chouraqui', year: '1974', text: 'Entête, c’est le logos.' },
          { source: 'Traduction du monde nouveau (Témoins de Jéhovah)', year: '1974', text: '…et la Parole était un dieu.', note: 'S’appuie sur l’absence d’article devant theos. Position grammaticalement discutée et rejetée par la quasi-totalité des hellénistes.' },
        ],
        gloss: [
          { term: 'λόγος', translit: 'logos', sense: 'Parole, discours, raison, principe rationnel du monde chez les stoïciens, intermédiaire divin chez Philon d’Alexandrie. Aucun mot français ne porte ces quatre sens à la fois.' },
          { term: 'θεὸς ἦν ὁ λόγος', translit: 'theos ēn ho logos', sense: 'L’ordre des mots et l’absence d’article devant theos indiquent un attribut, non une identification : « le logos était de nature divine ». Le grec permet une nuance que le français aplatit.' },
          { term: 'πρός', translit: 'pros', sense: '« Vers », avec une idée de mouvement et de face-à-face — plus dynamique que « avec ».' },
        ],
        issue: {
          title: 'Le mot qui a rendu possible la théologie chrétienne',
          text: "En choisissant logos, l'auteur du prologue branche le récit juif de Jésus sur la philosophie grecque : le logos stoïcien, principe rationnel du cosmos, et le logos de Philon, intermédiaire entre Dieu et le monde. C'est la passerelle par laquelle le christianisme entre dans le monde intellectuel gréco-romain, et sans laquelle Nicée est impensable. « Parole » ou « Verbe » ne rendent qu'une facette : le lecteur français perd la raison, la structure et le principe cosmique. Toute la christologie tient dans ce que la traduction ne peut pas dire.",
        },
      },
      {
        id: 'jn-1-14',
        ref: 'Jean 1,14',
        original: 'Καὶ ὁ λόγος σὰρξ ἐγένετο καὶ ἐσκήνωσεν ἐν ἡμῖν',
        translit: 'Kai ho logos sarx egeneto kai eskēnōsen en hēmin',
        literal: 'Et le logos chair devint et planta-sa-tente parmi nous',
        translations: [
          { source: 'Segond', year: '1910', text: 'Et la parole a été faite chair, et elle a habité parmi nous.' },
          { source: 'TOB', year: '1988', text: 'Et le Verbe s’est fait chair et il a habité parmi nous.' },
          { source: 'Traduction littérale', year: '—', text: '…et il a dressé sa tente parmi nous.' },
        ],
        gloss: [
          { term: 'σάρξ', translit: 'sarx', sense: 'La chair au sens le plus matériel : viande, corps périssable. Le mot est délibérément cru — il exclut toute incarnation apparente.' },
          { term: 'ἐσκήνωσεν', translit: 'eskēnōsen', sense: 'Verbe formé sur skēnē, la tente. Il évoque la Tente de la Rencontre du désert et la Shekhina, la présence divine qui campe avec Israël.' },
        ],
        issue: {
          title: 'Une allusion que le français efface',
          text: "« Il a habité parmi nous » est correct et plat. « Il a planté sa tente » réveille l'allusion : la présence divine qui campait avec le peuple au désert campe désormais dans un corps. Le mot grec skēnē porte en outre une assonance avec l'hébreu shakhan, « demeurer », dont vient Shekhina. Toute la théologie de l'Incarnation comme continuité de la présence divine dans l'histoire d'Israël se joue dans ce verbe — et disparaît dès qu'on le traduit correctement en bon français.",
        },
      },
      {
        id: 'jn-8-58',
        ref: 'Jean 8,58',
        original: 'πρὶν Ἀβραὰμ γενέσθαι ἐγὼ εἰμί',
        translit: 'Prin Abraam genesthai egō eimi',
        literal: 'Avant Abraham devenir, moi je-suis',
        translations: [
          { source: 'Segond', year: '1910', text: 'Avant qu’Abraham fût, je suis.' },
          { source: 'TOB', year: '1988', text: 'Avant qu’Abraham fût, je suis.' },
          { source: 'Traduction du monde nouveau', year: '1974', text: 'Avant qu’Abraham vienne à l’existence, j’étais.', note: 'Rend le présent grec par un passé, ce qui supprime l’allusion au nom divin.' },
        ],
        gloss: [
          { term: 'ἐγὼ εἰμί', translit: 'egō eimi', sense: 'Formule ordinaire (« c’est moi ») — mais aussi la formule par laquelle la Septante rend le nom divin en Exode 3,14 et chez le Second Isaïe.' },
        ],
        issue: {
          title: 'Quand une banalité grammaticale devient une revendication',
          text: "En grec courant, egō eimi ne veut rien dire de plus que « c'est moi ». Mais dans un texte qui cite constamment la Septante, où cette même formule traduit le nom divin, l'emploi est chargé. Les auditeurs du récit ramassent des pierres immédiatement après — le narrateur indique donc comment il veut qu'on entende. Toute la difficulté est là : le sens ne vient pas du mot mais du réseau de citations, que seul un lecteur formé perçoit et qu'aucune traduction ne peut restituer.",
        },
      },
      {
        id: 'mt-16-18',
        ref: 'Matthieu 16,18',
        original: 'σὺ εἶ Πέτρος, καὶ ἐπὶ ταύτῃ τῇ πέτρᾳ οἰκοδομήσω μου τὴν ἐκκλησίαν',
        translit: 'Sy ei Petros, kai epi tautē tē petra oikodomēsō mou tēn ekklēsian',
        literal: 'Toi tu-es Pierre, et sur cette la pierre je-bâtirai de-moi l’assemblée',
        translations: [
          { source: 'Segond', year: '1910', text: 'Tu es Pierre, et sur cette pierre je bâtirai mon Église.' },
          { source: 'Lecture araméenne reconstituée', year: '—', text: '« Tu es Kepha, et sur ce kepha… » — un seul et même mot.', note: 'En araméen, le jeu de mots est parfait ; en grec, Petros et petra diffèrent en genre et en forme.' },
        ],
        gloss: [
          { term: 'Πέτρος / πέτρα', translit: 'Petros / petra', sense: 'Le premier est masculin et désigne plutôt un caillou ; le second est féminin et désigne le roc. La distinction, absente de l’araméen, a nourri des siècles de controverse.' },
          { term: 'ἐκκλησία', translit: 'ekklēsia', sense: 'À l’origine, l’assemblée civique convoquée d’une cité grecque. Le mot ne désigne pas une institution religieuse : « Église » est un décalque tardif qui projette quinze siècles d’histoire.' },
        ],
        issue: {
          title: 'Le verset sur lequel repose la papauté',
          text: "Le catholicisme y lit la fondation de la primauté de Pierre et de ses successeurs. Les protestants ont soutenu que la « pierre » désigne la confession de foi que Pierre vient de prononcer, non sa personne — s'appuyant sur la différence entre Petros et petra. Mais si Jésus a parlé araméen, il a employé deux fois kepha et la distinction disparaît. On ne peut donc pas trancher un désaccord ecclésiologique majeur sur une nuance grecque qui n'existait probablement pas dans la langue d'origine.",
        },
      },
      {
        id: 'mt-25-46',
        ref: 'Matthieu 25,46',
        original: 'καὶ ἀπελεύσονται οὗτοι εἰς κόλασιν αἰώνιον, οἱ δὲ δίκαιοι εἰς ζωὴν αἰώνιον',
        translit: 'Kai apeleusontai houtoi eis kolasin aiōnion, hoi de dikaioi eis zōēn aiōnion',
        literal: 'Et s’en-iront ceux-ci vers châtiment de-l’âge, les mais justes vers vie de-l’âge',
        translations: [
          { source: 'Segond', year: '1910', text: '…au châtiment éternel… à la vie éternelle.' },
          { source: 'Lecture universaliste', year: 'Origène et après', text: '…à un châtiment de l’âge à venir… à la vie de l’âge à venir.', note: 'Si aiōnios qualifie une durée limitée, l’enfer cesse d’être éternel.' },
        ],
        gloss: [
          { term: 'αἰώνιος', translit: 'aiōnios', sense: 'Adjectif tiré de aiōn, l’âge ou la longue durée. Il peut signifier « éternel » ou « relatif à l’âge à venir ». Le grec possède un autre mot pour l’éternité absolue (aïdios), et le texte ne l’emploie pas.' },
          { term: 'κόλασις', translit: 'kolasis', sense: 'À l’origine, la taille d’un arbre : un châtiment correctif, orienté vers l’amendement — par opposition à timōria, la punition vindicative.' },
        ],
        issue: {
          title: 'L’enfer éternel dépend d’un adjectif',
          text: "Si aiōnios veut dire « éternel », le châtiment est sans fin. S'il veut dire « de l'âge à venir », sa durée n'est pas précisée — et si kolasis est correctif, il a même une fin visée. Origène en tira l'apocatastase, la restauration finale de toutes les créatures ; il fut condamné en 553. Les Églises orientales ont conservé une hésitation que l'Occident a perdue. Deux mots grecs décident donc de la question de savoir si la damnation est réversible.",
        },
      },
      {
        id: 'mt-6-12',
        ref: 'Matthieu 6,12',
        original: 'καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν, ὡς καὶ ἡμεῖς ἀφήκαμεν τοῖς ὀφειλέταις ἡμῶν',
        translit: 'Kai aphes hēmin ta opheilēmata hēmōn, hōs kai hēmeis aphēkamen tois opheiletais hēmōn',
        literal: 'Et remets à-nous les dettes de-nous, comme aussi nous avons-remis aux débiteurs de-nous',
        translations: [
          { source: 'Segond', year: '1910', text: 'Pardonne-nous nos offenses, comme nous aussi nous pardonnons à ceux qui nous ont offensés.' },
          { source: 'Traduction littérale', year: '—', text: 'Remets-nous nos dettes, comme nous avons remis à nos débiteurs.' },
          { source: 'Luc 11,4 (parallèle)', year: '≈85', text: 'Pardonne-nous nos péchés, car nous aussi nous pardonnons à quiconque nous doit.', note: 'Luc convertit la première dette en péché, mais conserve la seconde au sens économique.' },
        ],
        gloss: [
          { term: 'ὀφείλημα', translit: 'opheilēma', sense: 'Dette au sens comptable. Le mot appartient au vocabulaire du prêt, pas à celui de la morale.' },
          { term: 'ἀφήκαμεν', translit: 'aphēkamen', sense: 'Passé accompli : « nous avons déjà remis ». La condition est présentée comme remplie avant la demande, non comme une promesse.' },
        ],
        issue: {
          title: 'Une prière économique devenue morale',
          text: "Le Notre Père demande l'annulation d'une dette, dans un contexte où l'endettement rural écrasait la Galilée et où la Torah prévoyait des remises périodiques. Traduire par « offenses » spiritualise entièrement la demande et supprime sa portée sociale. Luc, déjà, hésite : il spiritualise la première occurrence et garde la seconde au sens propre. La prière la plus récitée du monde a donc perdu, en français, la moitié de ce qu'elle demandait.",
        },
      },
    ],
  },

  {
    id: 'paul-gr',
    title: 'Épîtres de Paul',
    textId: 'epitres-paul',
    traditions: ['christianisme'],
    language: 'Grec koinè',
    script: 'Alphabet grec',
    rtl: false,
    composed: '≈ 50-62 apr. J.-C.',
    intro:
      "Les plus anciens textes chrétiens conservés. Ce sont des lettres de circonstance, dictées, souvent véhémentes, où la théologie s'invente en répondant à des problèmes précis.",
    translationNote:
      "Paul écrit vite, se coupe, empile les subordonnées. Les traductions lissent sa syntaxe — et lui donnent une autorité systématique qu'il n'a pas dans l'original.",
    units: [
      {
        id: 'rm-1-17',
        ref: 'Romains 1,17',
        original: 'δικαιοσύνη γὰρ θεοῦ ἐν αὐτῷ ἀποκαλύπτεται ἐκ πίστεως εἰς πίστιν',
        translit: 'Dikaiosynē gar theou en autō apokalyptetai ek pisteōs eis pistin',
        literal: 'Justice car de-Dieu en lui est-révélée depuis confiance vers confiance',
        translations: [
          { source: 'Segond', year: '1910', text: 'la justice de Dieu s’y révèle par la foi et pour la foi' },
          { source: 'Lecture de Luther', year: '1515', text: '« La justice que Dieu donne », et non « la justice avec laquelle Dieu juge ».', note: 'Ce déplacement — génitif subjectif ou objectif — est le déclencheur de sa conversion intérieure.' },
          { source: 'TOB', year: '1988', text: 'la justice de Dieu y est révélée, de la foi à la foi' },
        ],
        gloss: [
          { term: 'δικαιοσύνη θεοῦ', translit: 'dikaiosynē theou', sense: 'Le génitif grec est ambigu : justice qui appartient à Dieu (et qui condamne) ou justice qui vient de Dieu (et qui est donnée). Le grec ne tranche pas.' },
          { term: 'πίστις', translit: 'pistis', sense: 'Confiance, fidélité, loyauté. « Foi » au sens d’adhésion à des propositions est un rétrécissement moderne. Certains hellénistes traduisent même pistis Christou par « la fidélité du Christ », et non « la foi en Christ » — ce qui change tout.' },
        ],
        issue: {
          title: 'Une ambiguïté grammaticale qui a coupé l’Europe en deux',
          text: "Luther raconte être resté bloqué des années sur ce verset : si la « justice de Dieu » est celle par laquelle il juge, l'Évangile n'est qu'une menace de plus. Le jour où il l'a comprise comme la justice que Dieu donne, il a dit être « entré par des portes ouvertes dans le paradis ». Le grec autorise les deux lectures. La Réforme, les guerres de religion et la carte confessionnelle de l'Europe reposent, pour une part, sur la manière de lire un génitif.",
        },
      },
      {
        id: 'ga-3-28',
        ref: 'Galates 3,28',
        original: 'οὐκ ἔνι Ἰουδαῖος οὐδὲ Ἕλλην, οὐκ ἔνι δοῦλος οὐδὲ ἐλεύθερος, οὐκ ἔνι ἄρσεν καὶ θῆλυ',
        translit: 'Ouk eni Ioudaios oude Hellēn, ouk eni doulos oude eleutheros, ouk eni arsen kai thēly',
        literal: 'Non il-y-a Juif ni Grec, non il-y-a esclave ni libre, non il-y-a mâle et femelle',
        translations: [
          { source: 'Segond', year: '1910', text: 'Il n’y a plus ni Juif ni Grec, il n’y a plus ni esclave ni libre, il n’y a plus ni homme ni femme.' },
          { source: 'TOB', year: '1988', text: 'Il n’y a plus ni Juif ni Grec, il n’y a plus ni esclave ni homme libre, il n’y a plus l’homme et la femme.' },
        ],
        gloss: [
          { term: 'ἄρσεν καὶ θῆλυ', translit: 'arsen kai thēly', sense: 'Rupture de construction : les deux premières paires emploient « ni… ni », la troisième « et ». C’est la citation exacte de Genèse 1,27 dans la Septante — « mâle et femelle il les créa ».' },
        ],
        issue: {
          title: 'Une citation cachée dans une conjonction',
          text: "Paul change de conjonction au troisième terme, et ce n'est pas une maladresse : il cite la Genèse. Ce qui est aboli n'est donc pas la différence des sexes en général, mais la hiérarchie fondée sur le récit de création. Aucune traduction française ne signale cette rupture, et le lecteur ne voit qu'une énumération. Ce détail est au cœur des débats contemporains sur la portée du verset — que ses adversaires réduisent à une égalité « spirituelle » sans conséquence pratique.",
        },
      },
      {
        id: 'ph-2-6',
        ref: 'Philippiens 2,6-7',
        original: 'ὃς ἐν μορφῇ θεοῦ ὑπάρχων οὐχ ἁρπαγμὸν ἡγήσατο τὸ εἶναι ἴσα θεῷ, ἀλλὰ ἑαυτὸν ἐκένωσεν',
        translit: 'Hos en morphē theou hyparchōn ouch harpagmon hēgēsato to einai isa theō, alla heauton ekenōsen',
        literal: 'Lequel en forme de-dieu subsistant non rapine estima le être égal à-dieu, mais lui-même vida',
        translations: [
          { source: 'Segond', year: '1910', text: '…n’a point regardé comme une proie à arracher d’être égal avec Dieu, mais s’est dépouillé lui-même.' },
          { source: 'TOB', year: '1988', text: '…ne retint pas jalousement le rang qui l’égalait à Dieu. Mais il s’est dépouillé.' },
          { source: 'Lecture alternative', year: '—', text: '…n’a pas considéré comme un butin à saisir d’être égal à Dieu', note: 'Selon qu’il possédait déjà ce rang ou qu’il aurait pu s’en emparer, la christologie change.' },
        ],
        gloss: [
          { term: 'ἁρπαγμός', translit: 'harpagmos', sense: 'Mot extrêmement rare. Il peut désigner un butin déjà saisi qu’on refuse de lâcher, ou une proie qu’on ne cherche pas à saisir. Les deux lectures produisent deux christologies opposées.' },
          { term: 'ἐκένωσεν', translit: 'ekenōsen', sense: '« Il s’est vidé ». De ce verbe vient la kénose, notion centrale de la théologie moderne de l’abaissement divin.' },
        ],
        issue: {
          title: 'Un mot rare qui décide de la divinité du Christ',
          text: "Ce passage est probablement un hymne antérieur à Paul, cité par lui vers l'an 55 — donc l'un des plus anciens témoignages chrétiens sur le statut du Christ. Mais tout dépend de harpagmos : s'il possédait déjà l'égalité avec Dieu et y a renoncé, le texte affirme une préexistence divine ; s'il aurait pu la revendiquer et s'en est abstenu, il décrit un homme exemplaire. Les hellénistes débattent encore. Le fondement textuel de la haute christologie primitive tient dans un hapax.",
        },
      },
      {
        id: '1co-13-4',
        ref: '1 Corinthiens 13,4-8',
        original: 'Ἡ ἀγάπη μακροθυμεῖ, χρηστεύεται ἡ ἀγάπη… ἡ ἀγάπη οὐδέποτε πίπτει',
        translit: 'Hē agapē makrothymei, chrēsteuetai hē agapē… hē agapē oudepote piptei',
        literal: 'L’agapè patiente-longuement, se-montre-utile l’agapè… l’agapè jamais ne-tombe',
        translations: [
          { source: 'Vulgate', year: 'IVe s.', text: 'caritas patiens est — d’où « la charité est patiente »' },
          { source: 'Segond', year: '1910', text: 'La charité est patiente, elle est pleine de bonté.' },
          { source: 'TOB', year: '1988', text: 'L’amour prend patience, l’amour rend service.' },
        ],
        gloss: [
          { term: 'ἀγάπη', translit: 'agapē', sense: 'Mot rare en grec profane, choisi précisément parce qu’il n’était pas chargé. Le grec dispose d’erōs (désir), philia (amitié), storgē (affection familiale) — le Nouveau Testament les évite presque tous.' },
          { term: 'caritas → charité', translit: '—', sense: 'La Vulgate rend agapē par caritas ; le français en tire « charité », qui a dérivé vers l’aumône. Le contresens est aujourd’hui presque total.' },
        ],
        issue: {
          title: 'Comment l’amour est devenu l’aumône',
          text: "Le grec agapē désigne un amour de décision, actif, non fondé sur l'attrait. Le latin caritas le rendait honorablement. Mais le français « charité » a glissé vers le don matériel condescendant, au point que les traductions modernes reviennent à « amour » — lequel, à son tour, évoque le sentiment et l'attachement que le grec évitait. Aucun mot français ne convient. Ce chapitre, lu dans presque tous les mariages, a été écrit pour régler une querelle de prestige entre chrétiens qui se disputaient sur les dons spirituels.",
        },
      },
    ],
  },

  {
    id: 'coran-ar',
    title: 'Coran',
    textId: 'coran',
    traditions: ['islam'],
    language: 'Arabe classique',
    script: 'Alphabet arabe, vocalisé',
    rtl: true,
    composed: '610-632 ; recension ≈ 650',
    intro:
      "Pour les musulmans, le Coran n'est traduisible en aucune langue : une traduction est appelée « interprétation du sens ». Le texte est d'abord oral, rythmé, assonancé ; le lire en silence sur une page est déjà en perdre une part.",
    translationNote:
      "L'arabe coranique fonctionne par racines trilitères : un même squelette de trois consonnes engendre des dizaines de mots apparentés. Le lecteur arabophone entend ces parentés ; aucune traduction ne les restitue. S'y ajoute la question du contexte de révélation, sans lequel de nombreux versets sont inintelligibles.",
    units: [
      {
        id: 'q-1',
        ref: '1,1-5',
        label: 'Al-Fatiha, l’ouverture',
        original:
          'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ\nالرَّحْمَٰنِ الرَّحِيمِ\nمَالِكِ يَوْمِ الدِّينِ\nإِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        translit: 'Bismi-llāhi r-raḥmāni r-raḥīm · al-ḥamdu li-llāhi rabbi l-‘ālamīn · ar-raḥmāni r-raḥīm · māliki yawmi d-dīn · iyyāka na‘budu wa-iyyāka nasta‘īn',
        literal:
          'Au-nom-de Dieu le-Matriciel le-Miséricordieux · la-louange à-Dieu seigneur-des mondes · le-Matriciel le-Miséricordieux · roi-du jour-du jugement · c’est-Toi nous-adorons et-c’est-Toi nous-appelons-au-secours',
        translations: [
          { source: 'Blachère', year: '1949', text: 'Au nom d’Allah, le Bienfaiteur miséricordieux. Louange à Allah, Seigneur des Mondes…' },
          { source: 'Hamidullah', year: '1959', text: 'Au nom d’Allah, le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah, Seigneur de l’univers…' },
          { source: 'Berque', year: '1990', text: 'Au nom de Dieu, le Tout miséricorde, le Miséricordieux… C’est Toi que nous adorons, Toi de qui le secours implorons.' },
          { source: 'Chouraqui', year: '1990', text: 'Au nom d’Allah, le Matriciel, le Matriciant.', note: 'Chouraqui rend la racine RḤM par sa parenté avec la matrice, raḥim.' },
        ],
        gloss: [
          { term: 'الرَّحْمَٰن', translit: 'ar-Raḥmān', sense: 'Racine R-Ḥ-M, celle de raḥim, la matrice, l’utérus. La miséricorde divine est étymologiquement matricielle — une résonance que « miséricordieux » perd entièrement.' },
          { term: 'اللَّه', translit: 'Allāh', sense: 'Contraction de al-ilāh, « le dieu ». Les chrétiens arabophones l’emploient depuis avant l’islam. Le laisser non traduit, comme le font beaucoup de versions françaises, suggère à tort une divinité spécifique.' },
          { term: 'الدِّين', translit: 'ad-dīn', sense: 'À la fois jugement, rétribution, dette et religion. « Jour du jugement » ne rend qu’un des sens.' },
        ],
        issue: {
          title: 'Traduire Allah, ou ne pas le traduire',
          text: "La plupart des traductions françaises conservent « Allah ». Le choix paraît respectueux ; il produit en réalité un contresens massif chez le lecteur non arabophone, qui croit à un dieu propre à l'islam. Le mot signifie simplement « Dieu », et la sourate elle-même affirme s'adresser au Seigneur des mondes — c'est-à-dire de tous. Jacques Berque et quelques autres traduisent « Dieu ». C'est l'un des rares cas où la fidélité littérale au mot trahit le sens du texte.",
        },
      },
      {
        id: 'q-112',
        ref: '112,1-4',
        label: 'Al-Ikhlas, la pureté',
        original: 'قُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nوَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        translit: 'Qul huwa-llāhu aḥad · allāhu ṣ-ṣamad · lam yalid wa-lam yūlad · wa-lam yakun lahu kufuwan aḥad',
        literal: 'Dis : Lui Dieu un · Dieu le-ṣamad · n’a-pas engendré et-n’a-pas été-engendré · et-n’a-pas été à-lui égal aucun',
        translations: [
          { source: 'Hamidullah', year: '1959', text: 'Dis : « Il est Allah, Unique. Allah, Le Seul à être imploré… Il n’a jamais engendré, n’a pas été engendré non plus. Et nul n’est égal à Lui. »' },
          { source: 'Berque', year: '1990', text: 'Dis : « Lui, Dieu, est Un. Dieu de plénitude. Il n’engendre ni n’est engendré. Il n’a pas d’égal, pas un. »' },
        ],
        gloss: [
          { term: 'الصَّمَد', translit: 'aṣ-ṣamad', sense: 'Hapax coranique dont le sens exact est débattu depuis les premiers commentateurs : le plein, le massif sans creux, celui vers qui l’on se tourne, l’autosuffisant. Aucune traduction ne fait consensus.' },
          { term: 'لَمْ يَلِدْ', translit: 'lam yalid', sense: '« Il n’a pas engendré » : visée polémique explicite contre la filiation divine du Christ, et contre les « filles d’Allah » du polythéisme mecquois.' },
        ],
        issue: {
          title: 'Un mot dont personne ne connaît le sens',
          text: "Aṣ-ṣamad n'apparaît qu'une fois dans tout le Coran, et les plus anciens commentateurs proposaient déjà des sens divergents. Cette sourate de quatre versets, que les musulmans tiennent pour l'équivalent d'un tiers du Coran, contient donc un terme irréductiblement obscur. C'est un rappel utile : même dans un texte fixé très tôt et transmis avec un soin extrême, le sens de certains mots s'est perdu — et la tradition l'assume plutôt qu'elle ne le dissimule.",
        },
      },
      {
        id: 'q-2-256',
        ref: '2,256',
        original: 'لَا إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',
        translit: 'Lā ikrāha fī d-dīn, qad tabayyana r-rushdu mina l-ghayy',
        literal: 'Pas de-contrainte dans la-religion ; déjà s’est-distinguée la-droiture de l’égarement',
        translations: [
          { source: 'Hamidullah', year: '1959', text: 'Nulle contrainte en religion ! Car le bon chemin s’est distingué de l’égarement.' },
          { source: 'Blachère', year: '1949', text: 'Point de contrainte en la religion ! La direction se distingue de l’aberration.' },
        ],
        gloss: [
          { term: 'إِكْرَاه', translit: 'ikrāh', sense: 'Contrainte, coercition — terme juridique désignant ce qui vicie un consentement. Le verset a donc une portée technique, non seulement morale.' },
          { term: 'دِين', translit: 'dīn', sense: 'Religion, mais aussi obéissance et dette. Le verset porte-t-il sur la conversion, sur la pratique, ou sur les deux ? Les juristes en débattent.' },
        ],
        issue: {
          title: 'Le verset le plus cité et le plus disputé',
          text: "Il est invoqué comme fondement de la liberté de conscience en islam. Les juristes classiques l'ont pourtant concilié avec le statut subordonné des dhimmis et avec les peines prévues pour l'apostasie — soit en restreignant sa portée aux gens du Livre, soit en le déclarant abrogé par des versets postérieurs. Les réformistes contemporains le tiennent au contraire pour un principe général qui doit primer. La traduction française ne dit rien de ce conflit ; le mot arabe non plus. C'est la théorie juridique de l'abrogation, extérieure au texte, qui décide.",
        },
      },
      {
        id: 'q-4-34',
        ref: '4,34',
        original: 'الرِّجَالُ قَوَّامُونَ عَلَى النِّسَاءِ … وَاضْرِبُوهُنَّ',
        translit: 'Ar-rijālu qawwāmūna ‘alā n-nisā’ … wa-ḍribūhunna',
        literal: 'Les-hommes se-tenant-debout-pour sur les-femmes … et-frappez-les',
        translations: [
          { source: 'Hamidullah', year: '1959', text: 'Les hommes ont autorité sur les femmes… et frappez-les.' },
          { source: 'Blachère', year: '1949', text: 'Les hommes ont autorité sur les femmes… frappez-les !' },
          { source: 'Berque', year: '1990', text: 'Les hommes assument les femmes à raison de ce dont Dieu les avantagea… corrigez-les.' },
          { source: 'Laleh Bakhtiar (anglais)', year: '2007', text: '« go away from them » — « éloignez-vous d’elles »', note: 'Elle relève que la racine Ḍ-R-B porte plus de trente sens, dont « partir, quitter », et retient celui-ci.' },
          { source: 'Asma Lamrabet / exégèse féministe', year: 'XXIe s.', text: 'Lecture contextuelle : le verset encadre et limite une pratique existante plutôt qu’il ne l’institue.' },
        ],
        gloss: [
          { term: 'قَوَّامُون', translit: 'qawwāmūn', sense: 'Participe intensif de la racine Q-W-M, « se tenir debout ». Il peut signifier « avoir autorité », mais aussi « prendre en charge, pourvoir à ». Le verset lie explicitement ce statut à la dépense matérielle.' },
          { term: 'اضْرِبُوهُنَّ', translit: 'iḍribūhunna', sense: 'Impératif de Ḍ-R-B, l’une des racines les plus polysémiques de l’arabe : frapper, mais aussi voyager, séparer, donner un exemple, imposer, quitter.' },
        ],
        issue: {
          title: 'Le verset où la traduction engage des vies',
          text: "Aucun autre passage n'illustre mieux l'enjeu. La lecture majoritaire classique traduit « frappez-les », en l'assortissant de restrictions considérables — dernier recours, sans laisser de trace, plusieurs juristes la déclarant déconseillée voire interdite. Des traductrices et exégètes contemporaines retiennent un autre sens de la racine. Les uns accusent les autres de plier le texte à la morale du jour ; les autres répondent que la traduction dominante a fait le même choix, dans l'autre sens, il y a mille ans. Le point à retenir n'est pas qu'une lecture soit vraie, mais que l'arabe autorise ce débat — et que le français, lui, tranche sans le dire.",
        },
      },
      {
        id: 'q-5-32',
        ref: '5,32',
        original: 'مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا',
        translit: 'Man qatala nafsan bi-ghayri nafsin aw fasādin fī l-arḍ, fa-ka-annamā qatala n-nāsa jamī‘an',
        literal: 'Qui a-tué une-âme sans une-âme ou corruption dans la-terre, alors comme-si il-avait-tué les-gens tous',
        translations: [
          { source: 'Hamidullah', year: '1959', text: 'Quiconque tuerait une personne non coupable d’un meurtre ou d’une corruption sur la terre, c’est comme s’il avait tué tous les hommes.' },
          { source: 'Mishna Sanhédrin 4,5', year: '≈200', text: '« Quiconque détruit une seule âme, l’Écriture le lui compte comme s’il avait détruit un monde entier. »', note: 'Le Coran cite explicitement une source juive antérieure — il l’annonce d’ailleurs : « c’est pourquoi nous avons prescrit aux fils d’Israël ».' },
        ],
        gloss: [
          { term: 'نَفْس', translit: 'nafs', sense: 'Âme, personne, soi — apparenté à l’hébreu nefesh, avec la même amplitude sémantique.' },
          { term: 'فَسَاد فِي الْأَرْض', translit: 'fasād fī l-arḍ', sense: '« Corruption sur la terre » : formule juridiquement floue, utilisée dans certains codes pénaux contemporains pour justifier des peines capitales très étendues.' },
        ],
        issue: {
          title: 'Une citation, et deux clauses restrictives',
          text: "Ce verset est le plus cité pour montrer que l'islam condamne le meurtre. Deux choses sont rarement dites. D'abord, le Coran indique lui-même qu'il reprend une prescription adressée aux fils d'Israël — la parenté avec la Mishna est explicite, non dissimulée. Ensuite, la phrase comporte deux exceptions : le meurtre en représailles d'un meurtre, et la « corruption sur la terre ». Les citations abrégées les suppriment, dans les deux camps — les uns pour idéaliser, les autres pour accuser. Lire le verset entier est plus instructif que les deux usages.",
        },
      },
      {
        id: 'q-24-31',
        ref: '24,31',
        original: 'وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَىٰ جُيُوبِهِنَّ',
        translit: 'Wa-l-yaḍribna bi-khumurihinna ‘alā juyūbihinna',
        literal: 'Et-qu’elles-rabattent de-leurs-khimār sur leurs-échancrures',
        translations: [
          { source: 'Hamidullah', year: '1959', text: 'qu’elles rabattent leur voile sur leurs poitrines' },
          { source: 'Blachère', year: '1949', text: 'qu’elles rabattent leurs voiles sur leurs gorges' },
          { source: 'Lecture historicisante', year: 'XXe-XXIe s.', text: 'qu’elles ramènent le pan de leur couvre-chef sur l’échancrure de leur vêtement', note: 'Le khimār était déjà porté ; le verset prescrit la manière de le disposer, non son adoption.' },
        ],
        gloss: [
          { term: 'خِمَار', translit: 'khimār', sense: 'Pièce d’étoffe couvrant la tête, déjà en usage dans l’Arabie préislamique et chez les femmes juives et chrétiennes de la région. Le mot ne désigne aucun des vêtements contemporains.' },
          { term: 'جَيْب', translit: 'jayb', sense: 'L’ouverture du vêtement au niveau du cou et de la poitrine — non « la poitrine » elle-même.' },
        ],
        issue: {
          title: 'Le verset ne prescrit pas ce qu’on lui fait dire',
          text: "Le texte ne demande pas de couvrir les cheveux : il suppose un couvre-chef déjà porté et demande d'en rabattre le pan sur le décolleté. Traduire khimār par « voile » projette sur le VIIe siècle un objet et un débat contemporains. Les formes concrètes — hijab, niqab, tchador — sont des constructions juridiques et culturelles postérieures, et restent discutées entre juristes. Ce cas montre comment une traduction anachronique transforme une prescription de pudeur vestimentaire en fondement scripturaire d'une controverse politique moderne.",
        },
      },
      {
        id: 'q-49-13',
        ref: '49,13',
        original: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',
        translit: 'Yā ayyuhā n-nāsu innā khalaqnākum min dhakarin wa-unthā wa-ja‘alnākum shu‘ūban wa-qabā’ila li-ta‘ārafū',
        literal: 'Ô les gens, nous vous-avons-créés depuis un-mâle et-une-femelle et-nous-vous-avons-faits peuples et-tribus pour-que-vous-vous-connaissiez-mutuellement',
        translations: [
          { source: 'Hamidullah', year: '1959', text: 'Ô hommes ! Nous vous avons créés d’un mâle et d’une femelle, et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez.' },
          { source: 'Berque', year: '1990', text: '…et vous avons répartis en peuples et en tribus pour que vous fassiez connaissance.' },
        ],
        gloss: [
          { term: 'لِتَعَارَفُوا', translit: 'li-ta‘ārafū', sense: 'Forme verbale de réciprocité : se connaître les uns les autres. La diversité y a une finalité positive et explicite.' },
          { term: 'النَّاس', translit: 'an-nās', sense: '« Les gens », l’humanité entière — et non « les croyants ». L’adresse est universelle.' },
        ],
        issue: {
          title: 'La forme réciproque que le français rend mal',
          text: "L'arabe possède une forme verbale dédiée à la réciprocité, sans équivalent simple en français. « Pour que vous vous entre-connaissiez » est laborieux ; « pour que vous fassiez connaissance » est plus léger mais perd la mutualité. Or c'est là que réside l'argument : la diversité des peuples n'est pas tolérée, elle a une raison d'être — se connaître mutuellement. Ce verset est le point d'appui principal des théologies musulmanes du pluralisme.",
        },
      },
      {
        id: 'q-96-1',
        ref: '96,1-5',
        label: 'Les premiers mots révélés',
        original: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ\nخَلَقَ الْإِنسَانَ مِنْ عَلَقٍ\nاقْرَأْ وَرَبُّكَ الْأَكْرَمُ',
        translit: 'Iqra’ bi-smi rabbika lladhī khalaq · khalaqa l-insāna min ‘alaq · iqra’ wa-rabbuka l-akram',
        literal: 'Lis / récite au-nom-de ton-seigneur qui a-créé · a-créé l’humain depuis un-caillot · lis et-ton-seigneur le-plus-généreux',
        translations: [
          { source: 'Hamidullah', year: '1959', text: 'Lis, au nom de ton Seigneur qui a créé, qui a créé l’homme d’une adhérence. Lis ! Ton Seigneur est le Très Noble.' },
          { source: 'Blachère', year: '1949', text: 'Prêche au nom de ton Seigneur qui créa !' },
          { source: 'Berque', year: '1990', text: 'Récite au nom de ton Seigneur qui créa…' },
        ],
        gloss: [
          { term: 'اقْرَأْ', translit: 'iqra’', sense: 'De la racine Q-R-’, dont vient aussi qur’ān. Le verbe signifie lire à voix haute, réciter, proclamer — pas nécessairement déchiffrer un écrit.' },
          { term: 'عَلَق', translit: '‘alaq', sense: 'Caillot, sangsue, ce qui adhère. Traduit « adhérence » par Hamidullah, « caillot de sang » ailleurs, « grumeau » chez d’autres.' },
        ],
        issue: {
          title: '« Lis » ou « Récite » ?',
          text: "Le premier mot de la révélation est ambigu. La tradition rapporte que Muhammad répond « je ne sais pas lire » — ce qui suppose « lis ». Mais la même racine donne son nom au Coran, « la récitation », et le texte est fondamentalement oral. « Récite » convient mieux au genre et à la pratique ; « lis » convient mieux au récit fondateur. Le choix du traducteur oriente donc la représentation même de ce qu'est ce livre : un écrit à déchiffrer, ou une parole à proférer.",
        },
      },
    ],
  },
];
