import type { CorpusBook } from './types';

export const corpusOrient: CorpusBook[] = [
  {
    id: 'gita-sa',
    title: 'Bhagavad-Gītā',
    textId: 'bhagavad-gita',
    traditions: ['hindouisme'],
    language: 'Sanskrit',
    script: 'devanagari',
    rtl: false,
    composed: 'IIe s. av. — IIe s. apr. J.-C.',
    intro:
      "Sept cents strophes insérées dans le sixième livre du Mahābhārata. Un dialogue sur un champ de bataille, la veille du carnage, entre un guerrier qui refuse de combattre et son cocher qui se révèle être Dieu. Le texte est composé en śloka, un mètre de quatre octosyllabes, dont la contrainte rythmique force des ellipses que le français doit combler — et c'est en les comblant qu'il choisit.",
    translationNote:
      "Le sanskrit est une langue à cas (huit) et à composés : il peut agglutiner cinq mots en un seul dont la relation interne reste indéterminée. « Dharmakṣetre kurukṣetre » — « au champ du dharma, au champ des Kuru » — laisse ouvert si le second explique le premier ou s'y oppose. Le français, qui doit trancher entre « et », « c'est-à-dire » et « mais », prend une décision d'interprétation à chaque composé. Ajoutez que les mots clés (dharma, yoga, ātman, brahman, guṇa) n'ont pas d'équivalent : les traduire, c'est les rabattre sur des catégories occidentales — devoir, discipline, âme, Dieu, qualité — qui appartiennent à un autre monde mental.",
    units: [
      {
        id: 'gita-1-1',
        ref: 'Gītā 1,1',
        label: "L'ouverture",
        original: 'धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥',
        translit:
          'dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ | māmakāḥ pāṇḍavāś caiva kim akurvata sañjaya ||',
        literal:
          'Au-champ-du-dharma, au-champ-des-Kuru, rassemblés désirant-combattre, les-miens et les-Pāṇḍava aussi, qu’ont-ils-fait, Sañjaya ?',
        translations: [
          {
            source: 'Émile Burnouf',
            year: '1861',
            text: "Dans le champ du devoir, dans le champ des Kurus, réunis, prêts à combattre, les miens et les fils de Pandou, qu'ont-ils fait, ô Sandjaya ?",
            note: "Burnouf traduit dharma par « devoir » : la lecture morale, dominante au XIXe siècle français.",
          },
          {
            source: 'Anne-Marie Esnoul',
            year: '1972',
            text: "Sur le champ du dharma, sur le champ des Kuru, rassemblés, avides de combattre, les miens et les fils de Pāṇḍu, qu'ont-ils fait, ô Saṃjaya ?",
            note: 'Esnoul renonce à traduire dharma et le laisse en sanskrit : aveu que le mot ne passe pas.',
          },
          {
            source: 'Prabhupāda (trad. fr.)',
            year: '1977',
            text: "Ô Sañjaya, après que mes fils et ceux de Pāṇḍu se furent rassemblés au lieu de pèlerinage de Kurukṣetra, désireux de combattre, que firent-ils ?",
            note: "Ici dharmakṣetra devient « lieu de pèlerinage » : la lecture dévotionnelle transforme le champ de bataille en terre sainte.",
          },
        ],
        gloss: [
          {
            term: 'धर्म',
            translit: 'dharma',
            sense: "De la racine dhṛ, « soutenir, maintenir ». Ce qui tient le monde ensemble : ordre cosmique, loi, devoir propre à sa caste et à son âge, vertu, nature d'une chose, et — chez les bouddhistes — enseignement et élément de réalité. Aucun mot français ne recouvre cet éventail. « Devoir » retient la morale et perd la cosmologie ; « loi » retient la norme et perd le fait que le dharma du feu est de brûler.",
          },
          {
            term: 'क्षेत्र',
            translit: 'kṣetra',
            sense: "Champ, au sens agricole et au sens géométrique. Ailleurs dans la Gītā (13,1), kṣetra désigne le corps, « champ » où l'on sème des actes et récolte des fruits. La bataille est donc aussi une allégorie de la vie intérieure — lecture que le premier vers autorise sans l'imposer.",
          },
        ],
        issue: {
          title: 'Champ du devoir ou champ de la guerre ?',
          text: "Deux composés juxtaposés sans conjonction : dharmakṣetre kurukṣetre. Le sanskrit ne dit pas comment ils se rapportent. Trois lectures existent, et chacune donne un autre livre. (1) Apposition : « le champ des Kuru, qui est le champ du dharma » — la guerre est juste, tuer est légitime, et la Gītā justifie l'action guerrière. (2) Opposition : « au champ du dharma, [devenu] champ des Kuru » — la loi a dégénéré en querelle de clan, et le livre est une critique. (3) Allégorie : le corps comme champ où s'affrontent les tendances. Śaṅkara (VIIIe s.) lit (3), Rāmānuja (XIe s.) lit (1), Gandhi lit (3) pour désamorcer l'usage guerrier du texte — et les nationalistes hindous du XXe siècle lisent (1) pour le réarmer. Le premier vers du livre est déjà un choix politique.",
        },
      },
      {
        id: 'gita-2-47',
        ref: 'Gītā 2,47',
        label: "Agir sans en attendre le fruit",
        original:
          'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
        translit:
          'karmaṇy evādhikāras te mā phaleṣu kadācana | mā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi ||',
        literal:
          "Dans-l'acte seulement [est] ton-droit, jamais dans-les-fruits. Ne sois pas cause-du-fruit-de-l'acte ; que ton attachement ne soit pas non plus à-l'inaction.",
        translations: [
          {
            source: 'Émile Sénart',
            year: '1922',
            text: "Tu as droit à l'action, jamais à ses fruits. Que le fruit de l'action ne soit pas ton mobile ; mais ne t'attache pas non plus à l'inaction.",
          },
          {
            source: 'Anne-Marie Esnoul',
            year: '1972',
            text: "Tu as compétence sur l'acte seul, jamais sur ses fruits. N'aie pas pour mobile le fruit de tes actes ; ne t'attache pas non plus à l'inaction.",
            note: "« Compétence » pour adhikāra : plus juste que « droit », qui suggère une revendication ; adhikāra est la juridiction, le domaine où l'on est habilité.",
          },
          {
            source: 'Alain Porte',
            year: '2004',
            text: "Ton domaine, c'est l'acte, jamais ses fruits. Ne fais pas du fruit de l'acte ton motif, et ne t'attache pas non plus à ne pas agir.",
          },
        ],
        gloss: [
          {
            term: 'अधिकार',
            translit: 'adhikāra',
            sense: "Autorité, juridiction, qualification pour accomplir quelque chose. Traduit par « droit » (Sénart), le vers devient une déclaration quasi juridique ; traduit par « compétence » ou « domaine », il devient une description de ce sur quoi l'agent a réellement prise. La nuance décide si le vers commande ou constate.",
          },
          {
            term: 'फल',
            translit: 'phala',
            sense: "Fruit — au sens propre, botanique. Le résultat d'un acte est pensé comme un fruit qui mûrit à son rythme, parfois dans une vie ultérieure. Traduire par « résultat » perd la temporalité longue et l'idée que le fruit vient de lui-même, sans qu'on le fabrique.",
          },
        ],
        issue: {
          title: 'Le vers le plus cité, et le plus détourné',
          text: "Ce vers est devenu, en Occident, un slogan de développement personnel : « fais ce que tu as à faire sans te soucier du résultat ». Le contexte dit autre chose : Kṛṣṇa répond à un guerrier qui refuse de tuer ses proches. Le détachement du fruit sert ici à rendre l'acte guerrier possible sans culpabilité — l'action reste, seule tombe l'appropriation de ses conséquences. Gandhi a construit sa lecture non violente en s'appuyant précisément sur ce vers, en soutenant que le combat visé est intérieur. On peut trouver Gandhi théologiquement fécond et historiquement forcé : le poème parle bien d'une bataille avec des morts. Un même vers arme la non-violence et la guerre selon ce qu'on décide qu'il désigne.",
        },
      },
      {
        id: 'gita-4-7',
        ref: 'Gītā 4,7-8',
        label: "La descente de Dieu",
        original:
          'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥',
        translit:
          'yadā yadā hi dharmasya glānir bhavati bhārata | abhyutthānam adharmasya tadātmānaṃ sṛjāmy aham ||',
        literal:
          "Chaque-fois-que en-effet du-dharma un-affaissement se-produit, ô Bhārata, [et] un-redressement de-l'adharma, alors moi-même je-me-produis, moi.",
        translations: [
          {
            source: 'Émile Sénart',
            year: '1922',
            text: "Chaque fois que la loi défaille et que l'injustice se relève, alors je me produis moi-même.",
          },
          {
            source: 'Anne-Marie Esnoul',
            year: '1972',
            text: "Chaque fois que le dharma s'affaisse et que l'adharma se dresse, alors je m'émets moi-même.",
            note: "« Je m'émets » rend sṛjāmi (racine sṛj, projeter, émettre) mieux que « je nais » : le dieu ne naît pas, il se projette.",
          },
        ],
        gloss: [
          {
            term: 'अवतार',
            translit: 'avatāra',
            sense: "Le mot n'apparaît pas ici mais c'est le passage qui le fonde. De ava-tṝ, « descendre ». Traduire par « incarnation » importe la christologie : dans l'incarnation chrétienne, Dieu devient réellement homme, une fois, définitivement. L'avatāra est une manifestation, répétable, souvent non humaine (poisson, sanglier, tortue), et la Gītā précise en 4,6 que Kṛṣṇa naît « par sa propre māyā » — apparence maîtrisée. La différence est doctrinale, pas cosmétique.",
          },
        ],
        issue: {
          title: 'Avatāra n’est pas incarnation',
          text: "Les premiers traducteurs européens, formés à la théologie chrétienne, ont vu dans ce passage un parallèle du Credo — et l'ont traduit avec le vocabulaire de l'incarnation. Le rapprochement a nourri deux siècles de comparatisme facile (« Kṛṣṇa, le Christ indien »). Or les structures divergent : le christianisme affirme une incarnation unique, historique, où Dieu assume une chair réellement souffrante ; l'avatāra est périodique, la Gītā en dénombre plusieurs, et la question de savoir si Kṛṣṇa souffre vraiment divise les écoles indiennes. Le vocabulaire de traduction a fabriqué une ressemblance que les textes ne portent pas.",
        },
      },
      {
        id: 'gita-18-66',
        ref: 'Gītā 18,66',
        label: 'Le vers final',
        original:
          'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥',
        translit:
          'sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja | ahaṃ tvā sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ ||',
        literal:
          'Tous-les-dharma ayant-abandonné, vers-moi seul comme-refuge va. Moi, toi, de-tous-les-maux je-délivrerai. Ne t’afflige pas.',
        translations: [
          {
            source: 'Émile Sénart',
            year: '1922',
            text: "Renonce à tous les devoirs, prends refuge en moi seul ; je te délivrerai de tous les péchés, ne t'afflige point.",
          },
          {
            source: 'Anne-Marie Esnoul',
            year: '1972',
            text: "Abandonne tous les dharma et viens à moi seul comme refuge : je te délivrerai de tous les maux, n'aie pas de chagrin.",
          },
        ],
        gloss: [
          {
            term: 'पाप',
            translit: 'pāpa',
            sense: "Mal, malheur, souillure, faute — dans un système où l'acte mauvais produit mécaniquement un fruit amer. Traduire par « péché » importe l'idée d'offense faite à une personne divine et de pardon accordé, qui n'est pas centrale ici : le pāpa est d'abord une charge à épuiser, pas une dette à remettre.",
          },
          {
            term: 'शरण',
            translit: 'śaraṇa',
            sense: "Abri, refuge, protection. Le même mot ouvre la formule bouddhique des trois refuges. Il dit un geste de mise à couvert, pas une adhésion intellectuelle : « prendre refuge » n'est pas « croire ».",
          },
        ],
        issue: {
          title: 'Le vers qui congédie la Loi',
          text: "Dix-huit chapitres ont exposé les devoirs de caste, les sacrifices, les disciplines — et le dernier mot dit de tout abandonner. Les commentateurs se déchirent depuis mille ans. Śaṅkara lit : abandonne les rites, car seule la connaissance libère. Rāmānuja lit : abandonne non pas les devoirs mais l'idée d'en être l'auteur. Madhva lit : abandonne les autres dieux. Les traducteurs qui écrivent « renonce à tous les devoirs » livrent le vers à la première lecture ; ceux qui écrivent « abandonne tous les dharma » laissent la question ouverte. Le lecteur français, selon l'édition qu'il ouvre, tient un texte antinomiste ou un texte orthodoxe.",
        },
      },
    ],
  },

  {
    id: 'upanishads-sa',
    title: 'Upaniṣad',
    textId: 'upanishads',
    traditions: ['hindouisme'],
    language: 'Sanskrit védique et classique',
    script: 'devanagari',
    rtl: false,
    composed: 'VIIIe — IIIe s. av. J.-C. pour les plus anciennes',
    intro:
      "Des textes de fin de Veda — vedānta — où le rituel cède la place à la question de savoir ce qui, en l'homme, est réel. Ils procèdent par équations : ceci est cela. Ces équations sont brèves, presque algébriques, et toute leur portée tient dans le verbe « être » que le sanskrit, souvent, n'écrit même pas.",
    translationNote:
      "Le sanskrit omet la copule : « ayam ātmā brahma » se lit littéralement « ce soi, brahman » — sans « est ». Le français doit insérer un verbe, et ce faisant, il tranche : identité stricte, appartenance, participation ? Toute la querelle entre non-dualisme absolu (Śaṅkara) et non-dualisme qualifié (Rāmānuja) tient dans un mot que le sanskrit ne prononce pas.",
    units: [
      {
        id: 'chandogya-6-8-7',
        ref: 'Chāndogya Upaniṣad 6,8,7',
        label: 'Tat tvam asi',
        original: 'स य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो ।',
        translit: 'sa ya eṣo ’ṇimaitad-ātmyam idaṃ sarvaṃ tat satyaṃ sa ātmā tat tvam asi śvetaketo |',
        literal:
          "Ce qui est cette finesse, ayant-cela-pour-soi [est] tout ceci ; cela [est] le réel ; cela [est] le soi ; cela, toi, tu es, ô Śvetaketu.",
        translations: [
          {
            source: 'Émile Senart',
            year: '1930',
            text: "Cet être subtil, c'est l'âme de tout ce qui existe ; c'est le vrai, c'est l'âme, et toi, ô Çvetaketu, tu es cela.",
          },
          {
            source: 'Alyette Degrâces',
            year: '2014',
            text: "Ce qui est cette subtilité, l'univers entier a cela pour essence : cela est le réel, cela est le Soi. Tu es cela, Śvetaketu.",
          },
          {
            source: 'Lecture de Rāmānuja (XIe s.)',
            year: 'XIe s.',
            text: "« Tu as cela pour Soi » — le disciple n'est pas identique au brahman, il en est le corps.",
            note: "Rāmānuja segmente autrement : sa ātmā tat tvam asi devient « tu es celui dont cela est le Soi ». Une syllabe déplacée, et le monisme devient théisme.",
          },
        ],
        gloss: [
          {
            term: 'तत्त्वमसि',
            translit: 'tat tvam asi',
            sense: "Trois mots : cela, toi, tu es. La chaîne sanskrite ne pose pas de ponctuation ; on peut lire tat tvam asi (« tu es cela ») ou tat-tvam asi (« tu es de la nature de cela », le composé tat-tvam signifiant « cela-ité », d'où le mot tattva, « réalité »). Le premier découpage fonde le non-dualisme absolu, le second l'atténue.",
          },
          {
            term: 'सत्य',
            translit: 'satya',
            sense: "De sat, participe présent de « être ». Donc : ce qui est, l'étant, plutôt que « la vérité » au sens d'un énoncé conforme. Traduire satya par « vérité » fait glisser d'une ontologie vers une logique.",
          },
        ],
        issue: {
          title: 'Quatre mots, deux mille ans de dispute',
          text: "Cette formule est l'un des quatre « grands énoncés » (mahāvākya) du Vedānta. Śaṅkara y lit une identité pure : l'âme individuelle et l'absolu ne font qu'un, la différence est illusion. Rāmānuja, en resegmentant, y lit une relation d'inhérence : le monde et les âmes sont le corps de Dieu, distincts et inséparables. Madhva va jusqu'à lire une négation implicite. Aucune traduction française ne peut rester neutre : dès qu'on écrit « tu es cela », on a choisi Śaṅkara. Les traducteurs du XIXe siècle, séduits par la ressemblance avec l'idéalisme allemand, ont massivement imposé cette lecture en Europe — Schopenhauer tenait les Upaniṣad pour la consolation de sa vie, sur la foi d'une traduction latine faite depuis le persan.",
        },
      },
      {
        id: 'brihad-1-3-28',
        ref: 'Bṛhadāraṇyaka Upaniṣad 1,3,28',
        label: "Conduis-moi de l'irréel au réel",
        original:
          'असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मामृतं गमय ॥',
        translit: 'asato mā sad gamaya | tamaso mā jyotir gamaya | mṛtyor mā amṛtaṃ gamaya ||',
        literal:
          'Du-non-étant moi vers-l’étant fais-aller. De-la-ténèbre moi vers-la-lumière fais-aller. De-la-mort moi vers-le-non-mourir fais-aller.',
        translations: [
          {
            source: 'Émile Senart',
            year: '1934',
            text: "Du non-être conduis-moi à l'être, des ténèbres à la lumière, de la mort à l'immortalité.",
          },
          {
            source: 'Alyette Degrâces',
            year: '2014',
            text: "Du non-réel conduis-moi au réel, de l'obscurité conduis-moi à la lumière, de la mort conduis-moi au non-mourir.",
            note: "« Non-mourir » pour amṛta : le sanskrit forme un privatif (a-mṛta), il ne pose pas une substance « immortalité ».",
          },
        ],
        gloss: [
          {
            term: 'असत्',
            translit: 'asat',
            sense: "Le non-étant. Mais dans ce contexte rituel, asat désigne d'abord le désordre, l'inconsistant, ce qui n'a pas de tenue — pas le néant métaphysique. Traduire « du non-être à l'être » installe une ontologie grecque là où le texte parle de passer du chaos à ce qui tient.",
          },
        ],
        issue: {
          title: 'Une prière rituelle devenue slogan métaphysique',
          text: "Ces trois lignes sont, dans l'original, un fragment liturgique récité par le sacrifiant pendant un rite précis. Détachées, traduites en langage philosophique européen, elles sont devenues au XXe siècle un mantra universel — gravé au fronton d'institutions, cité dans des discours politiques indiens, imprimé sur des affiches. Le déplacement est instructif : ce n'est pas la traduction qui trahit mot à mot, c'est l'extraction du contexte rituel qui transforme une formule d'officiant en aphorisme spirituel.",
        },
      },
      {
        id: 'isha-1',
        ref: 'Īśā Upaniṣad 1',
        label: "Tout ceci est habité",
        original:
          'ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम् ॥',
        translit:
          'īśā vāsyam idaṃ sarvaṃ yat kiñca jagatyāṃ jagat | tena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam ||',
        literal:
          "Par-le-Seigneur [est] à-revêtir tout ceci, quoi-que-ce-soit de-mouvant dans-le-mouvant. Par-cela abandonné, jouis. Ne convoite pas — de-qui donc [est] la-richesse ?",
        translations: [
          {
            source: 'Louis Renou',
            year: '1943',
            text: "Tout ce qui se meut dans le monde mouvant doit être enveloppé par le Seigneur. Jouis de ce qu'il t'abandonne, ne convoite pas le bien d'autrui.",
          },
          {
            source: 'Alyette Degrâces',
            year: '2014',
            text: "Tout ceci doit être revêtu par le Seigneur, tout ce qui bouge dans ce qui bouge. Par ce renoncement, jouis ; ne convoite pas — de qui donc est la richesse ?",
          },
        ],
        gloss: [
          {
            term: 'वास्य',
            translit: 'vāsya',
            sense: "Deux racines homophones se disputent le mot : vas « vêtir » (donc : à revêtir, à envelopper) et vas « habiter » (donc : à habiter, où l'on réside). D'où deux textes : un monde à recouvrir du divin, ou un monde déjà habité par lui. Renou choisit le premier, d'autres le second.",
          },
        ],
        issue: {
          title: "Une écologie avant la lettre ?",
          text: "Ce verset est devenu, dans l'Inde contemporaine, l'argument scripturaire central de l'écologie hindoue : le monde appartient au divin, l'homme n'en a que l'usufruit, la convoitise est un vol. La lecture est défendable — mā gṛdhaḥ, « ne convoite pas », est bien là. Mais elle projette sur un texte du VIe siècle avant notre ère une problématique de propriété et de ressources qui n'est pas la sienne : tyakta, « abandonné, laissé », renvoie d'abord au renoncement ascétique, pas à la sobriété écologique. Cas d'école d'une traduction pilotée par un usage présent — ce qui n'invalide pas l'usage, mais doit rester visible.",
        },
      },
      {
        id: 'rigveda-1-164-46',
        ref: 'Ṛgveda 1,164,46',
        label: "L'Un que les sages nomment de plusieurs noms",
        original: 'एकं सद्विप्रा बहुधा वदन्त्यग्निं यमं मातरिश्वानमाहुः ।',
        translit: 'ekaṃ sad viprā bahudhā vadanty agniṃ yamaṃ mātariśvānam āhuḥ |',
        literal:
          "L'étant-un, les inspirés de-multiples-façons le-disent : Agni, Yama, Mātariśvan, [ainsi] ils-l'appellent.",
        translations: [
          {
            source: 'Louis Renou',
            year: '1956',
            text: "Ce qui est un, les poètes le disent de multiples manières : ils le nomment Agni, Yama, Mātariśvan.",
          },
          {
            source: 'Usage courant (XXe s.)',
            year: 'XXe s.',
            text: "La Vérité est une, les sages la désignent par des noms différents.",
            note: "Version popularisée par Vivekananda et le néo-hindouisme : sat devient « la Vérité », les viprā deviennent « les sages », et le verset devient une thèse sur l'unité des religions.",
          },
        ],
        gloss: [
          {
            term: 'सत्',
            translit: 'sat',
            sense: "Participe présent de « être » : l'étant, ce qui est. Le rendre par « la Vérité » (avec majuscule) transforme une notion ontologique en notion épistémique et charge le mot d'une majesté qu'il n'a pas dans l'hymne.",
          },
          {
            term: 'विप्र',
            translit: 'viprā',
            sense: "Les inspirés, les poètes vibrants — les auteurs d'hymnes. « Sages » les rend contemplatifs ; ce sont des ritualistes et des versificateurs.",
          },
        ],
        issue: {
          title: 'Le verset qui a fondé le pluralisme religieux moderne',
          text: "Ce demi-vers est probablement le plus cité de la littérature védique hors de l'Inde. Dans son contexte, il énumère des noms d'un même feu divin dans un hymne énigmatique consacré à des devinettes rituelles — il traite de théologie védique interne, pas des religions du monde. Vivekananda, au Parlement des religions de Chicago en 1893, l'a détaché pour en faire l'énoncé d'un universalisme : toutes les religions disent le même absolu. La formule a fait fortune, elle a nourri le dialogue interreligieux du XXe siècle, et elle est aujourd'hui plus connue dans sa version universaliste que dans son sens védique. Le texte n'est pas trahi mot à mot ; il est déplacé de niveau, ce qui produit une trahison plus efficace.",
        },
      },
    ],
  },

  {
    id: 'pali-canon',
    title: 'Canon pāli — Dhammapada et suttas',
    textId: 'dhammapada',
    traditions: ['bouddhisme'],
    language: 'Pāli',
    script: 'latin',
    rtl: false,
    composed: 'Ier s. av. J.-C. pour la mise par écrit ; matériaux plus anciens',
    intro:
      "Le pāli est une langue moyen-indienne, plus simple que le sanskrit, transmise oralement pendant quatre siècles avant d'être fixée à Ceylan. Sa poésie tient dans la répétition et la formule : le texte est construit pour être mémorisé, ce qui explique ses listes, ses cadences et ses redites — que les traductions élégantes suppriment, au prix de la forme.",
    translationNote:
      "Le vocabulaire bouddhique a été traduit en Europe au XIXe siècle par des philologues formés au christianisme et au pessimisme schopenhauerien. D'où un lexique français durablement faussé : dukkha rendu par « souffrance » (le bouddhisme devient pessimiste), anattā par « non-âme » (il devient nihiliste), nibbāna par « anéantissement » (il devient une religion du néant). Chaque terme mérite d'être repris.",
    units: [
      {
        id: 'dhp-1',
        ref: 'Dhammapada 1',
        label: "L'esprit précède",
        original: 'manopubbaṅgamā dhammā, manoseṭṭhā manomayā;\nmanasā ce paduṭṭhena, bhāsati vā karoti vā;\ntato naṃ dukkhamanveti, cakkaṃva vahato padaṃ.',
        translit: 'mano-pubbaṅgamā dhammā, mano-seṭṭhā mano-mayā …',
        literal:
          "Les phénomènes ont-l'esprit-pour-avant-coureur, ont-l'esprit-pour-meilleur, sont-faits-d'esprit. Si avec un esprit corrompu on parle ou on agit, alors le dukkha le suit, comme la roue [suit] le pied de qui tire.",
        translations: [
          {
            source: 'Fernand Hû',
            year: '1878',
            text: "Toutes les choses ont l'esprit pour prémisse, l'esprit pour chef, elles sont faites d'esprit.",
          },
          {
            source: 'Jean-Pierre Osier',
            year: '1997',
            text: "Les phénomènes sont précédés par l'esprit, dirigés par l'esprit, produits par l'esprit. Qui parle ou agit avec un esprit corrompu, la souffrance le suit comme la roue suit le sabot du bœuf.",
          },
          {
            source: 'Traductions « new age »',
            year: 'XXe–XXIe s.',
            text: "Nous devenons ce que nous pensons.",
            note: "Contresens massif : dhammā ne veut pas dire « nous », et le vers porte sur la production karmique des phénomènes mentaux, pas sur la pensée positive.",
          },
        ],
        gloss: [
          {
            term: 'dukkha',
            translit: 'dukkha',
            sense: "Littéralement « mal-essieu » : le moyeu qui ne tourne pas rond. D'où : insatisfaisant, bancal, ce qui ne tient pas. « Souffrance » est trop pathétique et trop étroit — la première vérité noble ne dit pas « tout est souffrance » (ce qui est faux et invérifiable) mais « tout ce qui est conditionné est structurellement insatisfaisant ». La traduction du XIXe siècle a fabriqué la réputation pessimiste du bouddhisme en Europe.",
          },
          {
            term: 'dhammā',
            translit: 'dhammā',
            sense: "Au pluriel : les phénomènes, les états mentaux, les constituants de l'expérience. Au singulier et avec majuscule : l'enseignement. Le même mot, le même verset : les traducteurs choisissent, et selon leur choix le vers parle de psychologie ou de doctrine.",
          },
        ],
        issue: {
          title: "Comment « souffrance » a fait du bouddhisme un pessimisme",
          text: "Eugène Burnouf, puis les indianistes victoriens, ont traduit dukkha par « souffrance », sarvaṃ dukkham par « tout est souffrance », et nirvāṇa par « extinction ». Schopenhauer, puis Nietzsche, ont bâti sur cette base leur image d'un bouddhisme nihiliste — Nietzsche parlant de « religion de la fatigue ». Or la formule canonique ne porte pas sur « tout » mais sur les saṅkhāra, les formations conditionnées ; elle est descriptive (rien de fabriqué ne procure de satisfaction durable) et non évaluative. Deux siècles de malentendu européen sortent d'un choix lexical fait par une poignée de philologues.",
        },
      },
      {
        id: 'dhp-5',
        ref: 'Dhammapada 5',
        label: "La haine ne cesse pas par la haine",
        original: 'na hi verena verāni, sammantīdha kudācanaṃ;\naverena ca sammanti, esa dhammo sanantano.',
        translit: 'na hi verena verāni, sammantīdha kudācanaṃ; averena ca sammanti, esa dhammo sanantano.',
        literal:
          "Non certes par-l'inimitié les-inimitiés ne-s'apaisent ici jamais ; par-la-non-inimitié elles-s'apaisent : cela [est] la loi éternelle.",
        translations: [
          {
            source: 'Jean-Pierre Osier',
            year: '1997',
            text: "Ce n'est pas par la haine que les haines s'apaisent ici-bas ; c'est par l'absence de haine qu'elles s'apaisent : telle est la loi éternelle.",
          },
          {
            source: 'Version popularisée',
            year: 'XXe s.',
            text: "La haine ne cesse jamais par la haine ; la haine cesse par l'amour.",
            note: "« Amour » est un ajout : le pāli dit averena, « par la non-haine », un privatif. La version popularisée transforme une abstention en sentiment positif — et rapproche le texte de l'Évangile.",
          },
        ],
        gloss: [
          {
            term: 'avera',
            translit: 'avera',
            sense: "Privatif de vera, l'inimitié, la vendetta. Donc : absence d'hostilité, refus d'entrer dans le cycle. Ce n'est pas mettā (bienveillance active), encore moins agapē. Le bouddhisme ancien prescrit ici de cesser, pas d'aimer.",
          },
        ],
        issue: {
          title: "Quand la traduction christianise",
          text: "Traduire averena par « par l'amour » place le vers en écho de Matthieu 5,44 (« aimez vos ennemis ») et alimente le comparatisme « Bouddha et Jésus disent la même chose ». La différence est pourtant précise : le texte pāli énonce une mécanique — l'hostilité entretenue reproduit l'hostilité — plutôt qu'un commandement d'amour. Un mécanisme et un impératif ne font pas la même religion. Ce cas montre qu'un biais de traduction ne se loge pas seulement dans l'erreur : il se loge dans la surtraduction, l'ajout d'un mot chaleureux là où l'original se contente d'un privatif.",
        },
      },
      {
        id: 'anatta-sutta',
        ref: 'Anattalakkhaṇa Sutta (SN 22,59)',
        label: 'Ceci n’est pas mon soi',
        original: 'rūpaṃ anattā … netaṃ mama, nesohamasmi, na meso attā.',
        translit: 'rūpaṃ anattā … n’etaṃ mama, n’eso’ham asmi, na m’eso attā.',
        literal:
          "La forme [est] non-soi … Ceci n'est pas à-moi, cela je ne le suis pas, cela n'est pas mon soi.",
        translations: [
          {
            source: 'Møhan Wijayaratna',
            year: '2001',
            text: "La forme est non-soi… Cela n'est pas à moi, cela je ne le suis pas, cela n'est pas mon soi.",
          },
          {
            source: 'Traductions du XIXe s.',
            year: '1880–1920',
            text: "Il n'y a pas d'âme.",
            note: "Traduction doctrinale, non littérale : le texte nie que tel agrégat soit le soi ; il ne pose pas de thèse ontologique générale.",
          },
        ],
        gloss: [
          {
            term: 'anattā',
            translit: 'an-attā',
            sense: "Privatif de attā (sanskrit ātman). Rendu par « non-âme » ou « absence d'âme », le mot fait du bouddhisme un matérialisme. Rendu par « non-soi », il redevient ce qu'il est : une consigne d'observation appliquée à chaque composant de l'expérience — ceci n'est pas ce que je suis — dont le Bouddha refuse explicitement de tirer la conclusion « donc je n'existe pas » (SN 44,10, où il garde le silence sur la question).",
          },
        ],
        issue: {
          title: "Une consigne d'observation prise pour une métaphysique",
          text: "Le sutta est structuré comme un examen : est-ce que la forme est permanente ? non. Ce qui est impermanent, est-ce satisfaisant ? non. Ce qui est insatisfaisant et changeant, peut-on y voir « mon soi » ? non. La conclusion est pratique — cesser de s'identifier — et non spéculative. En traduisant par « il n'y a pas d'âme », les premiers orientalistes ont produit un bouddhisme athée et nihiliste qui a séduit certains Européens et fait horreur à d'autres, dans les deux cas pour de mauvaises raisons. Le Bouddha, interrogé frontalement sur l'existence du soi, se tait : le canon conserve son silence, les traductions l'ont recouvert d'une thèse.",
        },
      },
    ],
  },

  {
    id: 'chinois',
    title: 'Textes chinois — Daodejing, Entretiens, Sūtra du Cœur',
    textId: 'daodejing',
    traditions: ['taoisme', 'confucianisme', 'bouddhisme'],
    language: 'Chinois classique',
    script: 'han',
    rtl: false,
    composed: 'VIe — IIIe s. av. J.-C. ; Sūtra du Cœur : VIIe s. apr. J.-C.',
    intro:
      "Le chinois classique n'a ni conjugaison, ni nombre, ni genre, ni article, et ne marque pas toujours la fonction des mots. Un caractère peut être nom, verbe ou adjectif selon sa position. Cinq caractères peuvent former une phrase que dix traducteurs rendront de dix façons également défendables. Ce n'est pas de l'ambiguïté accidentelle : les auteurs jouent de cette latitude.",
    translationNote:
      "Traduire le chinois classique en français, c'est ajouter tout ce que la langue source ne dit pas : le temps des verbes, le nombre des noms, les sujets omis, la ponctuation (absente des manuscrits anciens). Chaque ajout est une décision. Sur un texte comme le Daodejing, dont on possède des versions divergentes (Mawangdui 168 av. J.-C., Guodian 300 av. J.-C.), le traducteur choisit d'abord son texte, puis sa ponctuation, puis son sens.",
    units: [
      {
        id: 'ddj-1',
        ref: 'Daodejing 1',
        label: 'Le Dao qu’on peut dire',
        original: '道可道非常道\n名可名非常名',
        translit: 'dào kě dào fēi cháng dào / míng kě míng fēi cháng míng',
        literal:
          "voie / pouvoir / voie(-dire) / non / constant / voie — nom / pouvoir / nommer / non / constant / nom",
        translations: [
          {
            source: 'Stanislas Julien',
            year: '1842',
            text: "La voie qui peut être exprimée par la parole n'est pas la Voie éternelle ; le nom qui peut être nommé n'est pas le Nom éternel.",
          },
          {
            source: 'Liou Kia-hway',
            year: '1967',
            text: "Le Tao qu'on saurait exprimer n'est pas le Tao de toujours ; le nom qu'on saurait nommer n'est pas le nom de toujours.",
            note: "« De toujours » plutôt qu'« éternel » : cháng dit la constance, la permanence dans le temps, pas l'éternité métaphysique.",
          },
          {
            source: 'Version Mawangdui',
            year: '168 av. J.-C.',
            text: "道可道也非恆道也 — le manuscrit sur soie porte héng (恆) et non cháng (常).",
            note: "Le caractère fut changé sous les Han pour éviter le nom personnel de l'empereur Liu Heng. Un tabou de cour a modifié le premier mot du livre pendant deux mille ans.",
          },
        ],
        gloss: [
          {
            term: '道',
            translit: 'dào',
            sense: "Chemin, méthode, et — comme verbe — dire, énoncer. Le vers joue sur les deux : « la voie qu'on peut voie-r ». Le français perd le jeu de mots, qui est pourtant l'argument : ce qui peut être formulé n'est pas ce dont on parle.",
          },
          {
            term: '常',
            translit: 'cháng',
            sense: "Constant, régulier, ordinaire. « Éternel » (Julien) importe une notion théologique européenne ; « de toujours » ou « constant » reste dans la temporalité chinoise. Julien traduisait pour un public qui cherchait dans le Dao un équivalent de Dieu.",
          },
        ],
        issue: {
          title: "Cinq caractères, dix traductions, un tabou impérial",
          text: "Ce vers illustre trois strates de biais. (1) Le texte lui-même a été modifié : héng est devenu cháng par tabou du nom impérial sous les Han — la découverte des manuscrits de Mawangdui en 1973 l'a révélé. (2) L'absence de ponctuation autorise plusieurs découpages ; certains lisent « le Dao peut être suivi comme voie, mais ce n'est pas la voie constante ». (3) Le lexique de la traduction du XIXe siècle — « Voie éternelle », « Nom éternel », avec majuscules — christianise le texte, au point que certaines traductions missionnaires ont voulu y lire le Logos de Jean 1,1. Le Daodejing français que lisent la plupart des gens est un texte reconstruit trois fois.",
        },
      },
      {
        id: 'ddj-11',
        ref: 'Daodejing 11',
        label: "L'utilité du vide",
        original: '三十輻共一轂，當其無，有車之用。',
        translit: 'sānshí fú gòng yī gǔ, dāng qí wú, yǒu chē zhī yòng.',
        literal:
          "trente rayons partagent un moyeu ; là-où [est] son néant, il-y-a du-char l'usage.",
        translations: [
          {
            source: 'Stanislas Julien',
            year: '1842',
            text: "Trente rayons se réunissent autour d'un moyeu. C'est de son vide que dépend l'usage du char.",
          },
          {
            source: 'Marcel Conche',
            year: '2003',
            text: "Trente rayons convergent vers un moyeu unique : c'est dans son non-être que réside l'utilité du char.",
            note: "« Non-être » pour wú (無) charge le texte d'ontologie ; « vide » ou « creux » le maintient dans le concret du charron.",
          },
        ],
        gloss: [
          {
            term: '無',
            translit: 'wú',
            sense: "Absence, il-n'y-a-pas, néant. Le chinois emploie ici un mot ordinaire pour désigner le trou du moyeu. Le rendre par « non-être » fait entrer Parménide dans un atelier de charron. Toute une réception philosophique française du taoïsme — Heidegger inclus — repose sur cette élévation lexicale.",
          },
        ],
        issue: {
          title: 'Le creux ou le néant',
          text: "Le chapitre aligne trois exemples artisanaux : le moyeu, le pot, la pièce avec portes et fenêtres. Ce sont des objets, et l'argument est technique : ce qui sert, c'est ce qui manque. Les traductions philosophiques ont transformé cette observation de menuisier en thèse sur le Néant, et les traductions poétiques en méditation sur le vide intérieur. Les deux sont fécondes ; aucune n'est ce que dit la phrase. Lire l'original mot à mot rend au texte sa sécheresse — et rend visible ce que chaque époque a eu besoin d'y ajouter.",
        },
      },
      {
        id: 'lunyu-15-24',
        ref: 'Entretiens de Confucius 15,24',
        label: 'La règle en un mot',
        original: '子貢問曰：有一言而可以終身行之者乎？子曰：其恕乎！己所不欲，勿施於人。',
        translit:
          'Zǐgòng wèn yuē: yǒu yī yán ér kěyǐ zhōngshēn xíng zhī zhě hū? Zǐ yuē: qí shù hū! jǐ suǒ bù yù, wù shī yú rén.',
        literal:
          "Zigong demanda : y-a-t-il un mot qu'on-puisse toute-la-vie pratiquer ? Le Maître dit : ce serait shù ! Soi ce-que ne-pas désirer, ne-pas infliger à autrui.",
        translations: [
          {
            source: 'Séraphin Couvreur',
            year: '1895',
            text: "Ne faites pas à autrui ce que vous ne voudriez pas qu'on vous fît.",
          },
          {
            source: 'Anne Cheng',
            year: '1981',
            text: "N'est-ce pas la réciprocité ? Ce que tu ne désires pas pour toi, ne l'inflige pas à autrui.",
            note: "Cheng conserve shù comme concept (« réciprocité ») avant de donner la formule : l'ordre du texte est d'abord un mot, ensuite sa glose.",
          },
        ],
        gloss: [
          {
            term: '恕',
            translit: 'shù',
            sense: "Composé de 如 (comme, semblable) et 心 (cœur) : « cœur-comme », se mettre au même cœur que l'autre. Traduit par « réciprocité », « indulgence », « altruisme », « sympathie » — aucun ne rend l'idée d'une mesure prise sur soi pour évaluer autrui.",
          },
        ],
        issue: {
          title: 'La forme négative n’est pas un affaiblissement',
          text: "On oppose souvent la « règle d'argent » confucéenne, négative, à la « règle d'or » évangélique, positive (Mt 7,12), au bénéfice de la seconde — présentée comme plus généreuse. L'argument est fragile. La forme négative est plus opérante : elle prescrit une abstention vérifiable, là où la forme positive suppose que mon désir est un bon étalon de celui d'autrui — ce qui autorise, à la limite, d'imposer aux autres ce qu'on croit bon pour eux. Hillel (Talmud, Shabbat 31a) et Confucius formulent tous deux au négatif ; la hiérarchie apologétique entre les deux formes est une construction du comparatisme chrétien du XIXe siècle, que la traduction a servie plus qu'elle ne l'a produite.",
        },
      },
      {
        id: 'xinjing',
        ref: 'Sūtra du Cœur',
        label: 'La forme est vide',
        original: '色不異空，空不異色；色即是空，空即是色。',
        translit: 'sè bù yì kōng, kōng bù yì sè; sè jí shì kōng, kōng jí shì sè.',
        literal:
          "forme non diffère-de vide, vide non diffère-de forme ; forme précisément est vide, vide précisément est forme.",
        translations: [
          {
            source: 'Traduction courante',
            year: 'XXe s.',
            text: "La forme n'est pas différente du vide, le vide n'est pas différent de la forme ; la forme est vide, le vide est forme.",
          },
          {
            source: 'Philippe Cornu',
            year: '2001',
            text: "Les phénomènes ne sont pas autres que la vacuité, la vacuité n'est pas autre que les phénomènes.",
            note: "« Vacuité » plutôt que « vide » : le français « vide » suggère le néant, alors que śūnyatā désigne l'absence de nature propre, pas l'absence d'existence.",
          },
        ],
        gloss: [
          {
            term: '空',
            translit: 'kōng / śūnyatā',
            sense: "Traduit le sanskrit śūnyatā, dérivé de śūnya, « creux, gonflé, zéro » — le même mot qui a donné le zéro mathématique indien. Il ne dit pas que rien n'existe, mais que rien n'existe par soi-même, indépendamment de ses conditions. « Vide » invite au nihilisme, « vacuité » est un néologisme technique, « absence de nature propre » est exact mais illisible en poésie.",
          },
          {
            term: '色',
            translit: 'sè / rūpa',
            sense: "En chinois courant : couleur, apparence, et par extension désir sensuel. Ici il traduit rūpa, le premier des cinq agrégats : la matérialité. Un lecteur chinois non averti lit « la couleur est vide » ; le contresens est inscrit dans le choix du caractère par les traducteurs du VIIe siècle.",
          },
        ],
        issue: {
          title: 'Une traduction de traduction de traduction',
          text: "Le texte français courant vient du chinois de Xuanzang (649), qui traduit un sanskrit dont on discute s'il est l'original ou une rétroversion depuis le chinois — Jan Nattier a défendu en 1992 la thèse d'un sūtra composé en Chine puis retraduit en sanskrit. Chaque étape a sédimenté des choix : rūpa devenu 色 (avec sa connotation sensuelle), śūnyatā devenu 空 (avec sa connotation de ciel vide, le caractère signifiant aussi « ciel »), puis « vide » en français (avec sa connotation de néant). Le texte le plus récité du bouddhisme mahāyāna est un palimpseste où trois langues ont laissé leurs biais.",
        },
      },
    ],
  },

  {
    id: 'gurmukhi',
    title: 'Guru Granth Sahib — Mūl Mantar',
    textId: 'guru-granth-sahib',
    traditions: ['sikhisme'],
    language: 'Pañjābī et sant bhāṣā',
    script: 'gurmukhi',
    rtl: false,
    composed: '1499–1604',
    intro:
      "L'ouverture du livre sikh, récitée à chaque office. Douze mots qui sont moins une phrase qu'une série d'attributs juxtaposés — et la juxtaposition, sans verbe, laisse au traducteur le soin de construire la syntaxe.",
    translationNote:
      "Le Guru Granth Sahib est composé en plusieurs langues (pañjābī, braj, sanskrit, persan, sindhi) notées dans une seule écriture, le gurmukhī, et organisé non par auteur ou par thème mais par mode musical (rāga). Toute traduction française perd trois choses simultanément : la polyphonie linguistique, la structure musicale, et le fait que le texte est un objet de culte traité comme un guru vivant — on ne le lit pas, on l'écoute.",
    units: [
      {
        id: 'mul-mantar',
        ref: 'Japji Sahib, Mūl Mantar',
        label: 'L’énoncé fondamental',
        original: 'ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥',
        translit:
          'ik oaṅkār sat nām kartā purakh nirbhau nirvair akāl mūrat ajūnī saibhaṅ gur prasād',
        literal:
          "Un — son-primordial — vrai — nom — faisant — personne — sans-peur — sans-inimitié — hors-du-temps — forme — non-né — de-soi-même — du-guru — grâce.",
        translations: [
          {
            source: 'Traduction académique',
            year: 'XXe s.',
            text: "Il n'y a qu'un seul Être, dont le nom est Vérité, créateur, sans peur, sans haine, forme intemporelle, non né, existant par soi-même, [connu] par la grâce du guru.",
          },
          {
            source: 'Traduction dévotionnelle',
            year: 'usage courant',
            text: "Un seul Dieu, dont le Nom est Vérité, Créateur suprême, sans crainte, sans haine, éternel, non né, existant par lui-même, réalisé par la grâce du Guru.",
            note: "« Dieu » n'est pas dans le texte : ik oaṅkār est un chiffre, un symbole et un son, pas un substantif théologique.",
          },
        ],
        gloss: [
          {
            term: 'ੴ',
            translit: 'ik oaṅkār',
            sense: "Un caractère unique, composé du chiffre 1 (੧) et de la lettre ੳ prolongée. Il se lit « un oṅkār » — l'Un qui est le son ॐ. Il ne se traduit pas : c'est à la fois un nombre, une syllabe sacrée et un glyphe. Toute version française qui écrit « Dieu » substitue un concept à un signe.",
          },
          {
            term: 'ਸਤਿ ਨਾਮੁ',
            translit: 'sat nām',
            sense: "Deux lectures : « le Nom est vrai » (proposition) ou « [dont le] nom est Vérité » (attribut). La première fait du texte une affirmation sur l'efficacité de la récitation ; la seconde une affirmation sur la nature de Dieu. Le gurmukhī, sans verbe ni ponctuation, permet les deux.",
          },
          {
            term: 'ਪੁਰਖੁ',
            translit: 'purakh',
            sense: "Du sanskrit puruṣa : la Personne cosmique des Veda, mais aussi simplement « homme, mâle ». Traduire par « Être suprême » neutralise ; traduire par « Personne » importe la théologie trinitaire ; laisser purakh oblige à expliquer. Le sikhisme insiste par ailleurs sur le fait que le divin est sans genre, ce que le mot lui-même contredit lexicalement.",
          },
        ],
        issue: {
          title: 'Traduire un son',
          text: "Le Mūl Mantar pose un problème que peu de textes posent : son premier élément n'est pas un mot mais un signe graphique et sonore. Le sikhisme le considère comme la condensation de tout le livre ; on le calligraphie, on le chante, on le porte. Le traduire par « Il n'y a qu'un seul Dieu » — formule qui figure dans presque toutes les versions anglaises et françaises — accomplit trois opérations d'un coup : il transforme un nombre en proposition théologique, un son en concept, et un énoncé sur l'unité de l'être en monothéisme au sens abrahamique. Le rapprochement avec la shahāda islamique, souvent fait, tient largement à cet artefact de traduction.",
        },
      },
    ],
  },
];
