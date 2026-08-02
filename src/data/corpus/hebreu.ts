import type { CorpusBook } from './types';

export const corpusHebreu: CorpusBook[] = [
  {
    id: 'genese-he',
    title: 'Genèse',
    textId: 'torah',
    traditions: ['judaisme', 'christianisme', 'islam'],
    language: 'Hébreu biblique',
    script: 'Alphabet hébreu carré, vocalisé (texte massorétique)',
    rtl: true,
    composed: 'IXe-Ve s. av. J.-C.',
    intro:
      "Les onze premiers chapitres racontent des origines universelles ; le reste, une histoire de famille. C'est le texte le plus traduit du monde, et celui dont les contresens ont eu les conséquences les plus lourdes.",
    translationNote:
      "L'hébreu biblique n'a pas de temps verbaux au sens français : il oppose l'accompli à l'inaccompli. Il ignore la majuscule, la ponctuation et les voyelles — celles-ci ont été ajoutées au VIIe-Xe siècle. Une même suite de consonnes peut donc porter plusieurs lectures, et le choix de l'une est déjà une interprétation.",
    units: [
      {
        id: 'gn-1-1',
        ref: '1,1',
        original: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ',
        translit: 'Bereshit bara Elohim et ha-shamayim ve-et ha-arets',
        literal: 'En-commencement-de créa Dieu(x) [marque d’objet] les-cieux et [marque d’objet] la-terre',
        translations: [
          { source: 'Segond', year: '1910', text: 'Au commencement, Dieu créa les cieux et la terre.' },
          { source: 'Bible de Jérusalem', year: '1998', text: 'Au commencement, Dieu créa le ciel et la terre.' },
          { source: 'Chouraqui', year: '1974', text: 'Entête Elohîms créait les ciels et la terre', note: 'Chouraqui calque volontairement l’hébreu, quitte à malmener le français.' },
          { source: 'Rachi (lecture médiévale)', year: '≈1090', text: '« Au commencement de la création par Dieu des cieux et de la terre… »', note: 'Rachi lit bereshit comme un état construit : la phrase devient subordonnée, et le verset 1 cesse d’être une affirmation autonome.' },
        ],
        gloss: [
          { term: 'בְּרֵאשִׁית', translit: 'bereshit', sense: 'Sans article. Grammaticalement, plutôt « en commencement de » que « au commencement ». D’où la lecture subordonnée de Rachi et de plusieurs traductions savantes modernes.' },
          { term: 'בָּרָא', translit: 'bara', sense: 'Verbe dont le sujet est toujours Dieu dans la Bible. Il ne dit pas « à partir de rien » : la création ex nihilo est une doctrine élaborée plus tard, surtout au IIe siècle.' },
          { term: 'אֱלֹהִים', translit: 'Elohim', sense: 'Forme plurielle, accordée ici à un verbe singulier. Ni « les dieux », ni tout à fait un singulier : un pluriel dit de majesté ou d’abstraction.' },
        ],
        issue: {
          title: 'Le verset le plus lu du monde est grammaticalement ambigu',
          text: "Si l'on traduit « Au commencement, Dieu créa », le texte affirme un début absolu. Si l'on traduit « Lorsque Dieu commença de créer… la terre était informe et vide », il décrit Dieu mettant en ordre un chaos préexistant — ce que suggère le verset 2. La seconde lecture, grammaticalement plus solide et retenue par plusieurs traductions savantes, retire au texte la doctrine de la création à partir de rien qu'on croit y lire. Deux mille ans de métaphysique reposent sur ce choix.",
        },
      },
      {
        id: 'gn-1-2',
        ref: '1,2',
        original: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם',
        translit: 'Ve-ha-arets hayeta tohu va-vohu ve-hoshekh al-pnei tehom ve-ruah Elohim merahefet al-pnei ha-mayim',
        literal:
          'Et-la-terre était tohu et-bohu et-ténèbre sur-faces-de abîme et-souffle-de Dieu planant sur-faces-de les-eaux',
        translations: [
          { source: 'Segond', year: '1910', text: 'La terre était informe et vide ; il y avait des ténèbres à la surface de l’abîme, et l’esprit de Dieu se mouvait au-dessus des eaux.' },
          { source: 'TOB', year: '1988', text: 'La terre était déserte et vide, et la ténèbre à la surface de l’abîme ; le souffle de Dieu planait à la surface des eaux.' },
          { source: 'Chouraqui', year: '1974', text: 'La terre était tohu-et-bohu, une ténèbre sur les faces de l’abîme, mais le souffle d’Elohîms planait sur les faces des eaux.' },
        ],
        gloss: [
          { term: 'תֹהוּ וָבֹהוּ', translit: 'tohu va-vohu', sense: 'Assonance intraduisible désignant l’inhabitable et le vide. Le français « tohu-bohu » vient de là, mais a dérivé vers le vacarme.' },
          { term: 'תְהוֹם', translit: 'tehom', sense: 'L’abîme aqueux primordial. Le mot est apparenté à Tiamat, la déesse-océan tuée par Marduk dans l’Enuma Elish — mais ici, elle est démythifiée : ce n’est plus une divinité, seulement de l’eau.' },
          { term: 'רוּחַ', translit: 'ruah', sense: 'Souffle, vent, esprit. Le français doit choisir ; l’hébreu n’a pas à le faire. Traduire « Esprit » avec une majuscule projette la Trinité sur un texte qui l’ignore.' },
        ],
        issue: {
          title: 'Ruah : trois mots français pour un seul mot hébreu',
          text: "Le même terme désigne le vent qui souffle, le souffle qui anime et l'esprit. Toute traduction tranche. Rendre ruah Elohim par « l'Esprit de Dieu » majuscule fait apparaître ici la troisième personne de la Trinité ; rendre par « un vent de Dieu » ou « un vent violent » — lecture retenue par des exégètes juifs et par certaines traductions modernes — décrit un phénomène météorologique. Le texte hébreu ne permet pas de trancher, et c'est précisément l'information que la traduction supprime.",
        },
      },
      {
        id: 'gn-1-27',
        ref: '1,27',
        original: 'וַיִּבְרָא אֱלֹהִים אֶת־הָאָדָם בְּצַלְמוֹ בְּצֶלֶם אֱלֹהִים בָּרָא אֹתוֹ זָכָר וּנְקֵבָה בָּרָא אֹתָם',
        translit: 'Va-yivra Elohim et ha-adam be-tsalmo be-tselem Elohim bara oto zakhar u-neqeva bara otam',
        literal:
          'Et-créa Dieu [obj] l’humain en-son-image en-image-de Dieu créa lui mâle et-femelle créa eux',
        translations: [
          { source: 'Segond', year: '1910', text: 'Dieu créa l’homme à son image… il créa l’homme et la femme.' },
          { source: 'TOB', year: '1988', text: 'Dieu créa l’homme à son image, à l’image de Dieu il le créa ; mâle et femelle il les créa.' },
          { source: 'Bible Bayard', year: '2001', text: 'Dieu crée l’humain à son ombre, à l’ombre de Dieu il le crée, mâle et femelle il les crée.' },
        ],
        gloss: [
          { term: 'הָאָדָם', translit: 'ha-adam', sense: 'Avec l’article : « l’humain », l’espèce, non un nom propre. Le mot est tiré de adamah, le sol. « Terreux » rendrait le jeu de mots.' },
          { term: 'צֶלֶם', translit: 'tselem', sense: 'Image, statue, effigie — le mot employé ailleurs pour les idoles. Dans le Proche-Orient, seul le roi était « image du dieu » : l’étendre à tout humain est une démocratisation radicale.' },
          { term: 'זָכָר וּנְקֵבָה', translit: 'zakhar u-neqeva', sense: 'Mâle et femelle, termes biologiques et non sociaux — le même vocabulaire que pour les animaux entrant dans l’arche.' },
        ],
        issue: {
          title: 'Le singulier qui devient pluriel',
          text: "Le verset bascule en son milieu : « il le créa » puis « il les créa ». Traduire ha-adam par « l'homme » fait entendre un mâle et rend le passage incohérent ; traduire par « l'humain » ou « l'être humain » le rend limpide. Une tradition rabbinique tire de cette bascule l'idée d'un premier être androgyne ensuite séparé. Le choix lexical du traducteur décide donc de ce que le texte dit sur les sexes.",
        },
      },
      {
        id: 'gn-2-7',
        ref: '2,7',
        original:
          'וַיִּיצֶר יְהוָה אֱלֹהִים אֶת־הָאָדָם עָפָר מִן־הָאֲדָמָה וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה',
        translit: 'Va-yitser YHWH Elohim et ha-adam afar min ha-adamah va-yipah be-apav nishmat hayyim va-yehi ha-adam le-nefesh hayyah',
        literal:
          'Et-façonna YHWH Dieu [obj] l’humain poussière depuis-le-sol et-souffla dans-ses-narines haleine-de vies et-fut l’humain vers-gorge vivante',
        translations: [
          { source: 'Segond', year: '1910', text: '…et l’homme devint un être vivant.' },
          { source: 'Vulgate → traductions anciennes', year: 'IVe s.', text: '…et l’homme devint une âme vivante.', note: 'La Vulgate rend nefesh par anima ; le français en tire « âme », avec toute la métaphysique grecque qui s’y attache.' },
          { source: 'Chouraqui', year: '1974', text: '…et c’est le glébeux, un être vivant.' },
        ],
        gloss: [
          { term: 'נֶפֶשׁ', translit: 'nefesh', sense: 'À l’origine : la gorge, puis le souffle, puis l’être vivant tout entier. Ce n’est pas une partie immortelle logée dans un corps : c’est la personne vivante. Les animaux aussi sont des nefesh hayyah.' },
          { term: 'וַיִּיצֶר', translit: 'va-yitser', sense: 'Verbe du potier qui modèle. Dieu y est artisan, non émetteur de parole comme au chapitre 1 — indice de deux récits d’origine différente.' },
        ],
        issue: {
          title: 'L’âme n’est pas dans le texte',
          text: "L'humain ne reçoit pas une âme : il devient une nefesh. La distinction corps/âme, avec une âme immortelle emprisonnée dans une matière périssable, est grecque — Platon — et entre dans le christianisme par la philosophie, non par la Bible. C'est pourquoi le Nouveau Testament parle de résurrection des corps et non d'immortalité de l'âme : deux anthropologies incompatibles que la traduction latine a superposées. Le mot « âme » dans une Bible française porte donc, presque toujours, une métaphysique que l'hébreu ignore.",
        },
      },
      {
        id: 'gn-2-18',
        ref: '2,18',
        original: 'לֹא־טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ אֶעֱשֶׂה־לּוֹ עֵזֶר כְּנֶגְדּוֹ',
        translit: 'Lo tov heyot ha-adam levaddo, e‘eseh lo ezer kenegdo',
        literal: 'Pas bon être l’humain à-sa-solitude ; je-ferai pour-lui secours comme-en-face-de-lui',
        translations: [
          { source: 'Segond', year: '1910', text: '…je lui ferai une aide semblable à lui.' },
          { source: 'Vulgate', year: 'IVe s.', text: 'adiutorium simile sibi — « une aide semblable à lui »' },
          { source: 'TOB', year: '1988', text: '…je veux lui faire une aide qui lui corresponde.' },
          { source: 'Traductions féministes contemporaines', year: 'XXe-XXIe s.', text: '…un secours qui lui fasse face', note: 'Rend kenegdo par la confrontation qu’il implique, et non par la subordination.' },
        ],
        gloss: [
          { term: 'עֵזֶר', translit: 'ezer', sense: 'Secours. Le mot désigne ailleurs, dans une large majorité de ses emplois bibliques, le secours que Dieu apporte à Israël. Il n’a rien de subalterne.' },
          { term: 'כְּנֶגְדּוֹ', translit: 'kenegdo', sense: 'Littéralement « comme en face de lui » : un vis-à-vis, un correspondant, voire un contrepoids. La notion d’égalité et de confrontation y est plus forte que celle d’assistance.' },
        ],
        issue: {
          title: 'Comment « un vis-à-vis » est devenu « une aide »',
          text: "Traduire ezer kenegdo par « une aide » place la femme en position d'auxiliaire ; l'hébreu dit un secours qui se tient en face. Le mot ezer qualifie ailleurs Dieu lui-même : personne n'en conclut que Dieu est subordonné à Israël. Ce glissement, installé par la Vulgate et repris par presque toutes les traductions modernes, est l'un des cas les mieux documentés de biais transmis par la traduction — et il a servi d'appui scripturaire pendant des siècles.",
        },
      },
      {
        id: 'gn-3-5',
        ref: '3,5',
        original: 'וִהְיִיתֶם כֵּאלֹהִים יֹדְעֵי טוֹב וָרָע',
        translit: 'Vi-hyitem k-Elohim yod‘ei tov va-ra',
        literal: 'Et-vous-serez comme-Dieu(x) connaissant(s) bon et-mauvais',
        translations: [
          { source: 'Segond', year: '1910', text: '…vous serez comme des dieux, connaissant le bien et le mal.' },
          { source: 'TOB', year: '1988', text: '…vous serez comme des dieux qui connaissent le bien et le mal.' },
          { source: 'Bible de Jérusalem', year: '1998', text: '…vous serez comme des dieux, qui connaissent le bien et le mal.' },
        ],
        gloss: [
          { term: 'כֵּאלֹהִים', translit: 'k-Elohim', sense: '« Comme Dieu » ou « comme des dieux » : l’hébreu ne tranche pas. Le participe pluriel qui suit incline vers le pluriel, mais l’argument n’est pas décisif.' },
          { term: 'יָדַע', translit: 'yada', sense: 'Connaître au sens d’éprouver, y compris sexuellement. Il ne s’agit pas d’une information mais d’une expérience.' },
          { term: 'טוֹב וָרָע', translit: 'tov va-ra', sense: 'Bon et mauvais avant d’être bien et mal : le couple peut désigner l’utile et le nuisible, ou la totalité (« tout, du meilleur au pire »).' },
        ],
        issue: {
          title: 'Ni pomme, ni péché, ni chute',
          text: "Aucun de ces trois mots n'est dans le texte. Le fruit n'est pas nommé — la pomme vient d'un jeu de mots latin entre malum, le mal, et malum, la pomme. Le mot « péché » n'apparaît qu'au chapitre 4, à propos de Caïn. Et le mot « chute » n'y est jamais. Le judaïsme lit ce récit comme l'entrée dans la condition humaine ; le christianisme augustinien y a lu une corruption transmise à toute la descendance ; l'islam y voit une faute individuelle aussitôt pardonnée. Trois anthropologies, un seul texte, et des mots ajoutés par la traduction.",
        },
      },
      {
        id: 'gn-4-9',
        ref: '4,9',
        original: 'הֲשֹׁמֵר אָחִי אָנֹכִי',
        translit: 'Ha-shomer ahi anokhi',
        literal: 'Est-ce-que gardien-de mon-frère moi ?',
        translations: [
          { source: 'Segond', year: '1910', text: 'Suis-je le gardien de mon frère ?' },
          { source: 'Chouraqui', year: '1974', text: 'Suis-je le gardien de mon frère, moi ?' },
        ],
        gloss: [
          { term: 'שֹׁמֵר', translit: 'shomer', sense: 'Celui qui garde un troupeau, une porte, une loi. Caïn emploie ironiquement le vocabulaire du métier de son frère, berger.' },
          { term: 'אָנֹכִי', translit: 'anokhi', sense: 'Pronom emphatique redondant, placé en fin de phrase : « moi ? ». Le français perd ce relief.' },
        ],
        issue: {
          title: 'La question que le texte laisse sans réponse',
          text: "Dieu ne répond pas. Toute l'éthique biblique ultérieure — le prophétisme, la protection de l'étranger, la responsabilité chez Levinas — peut se lire comme une tentative de répondre. Il faut noter que le texte ne moralise pas : il pose une question et passe à autre chose. Une traduction qui l'affadit en affirmation manquerait l'essentiel.",
        },
      },
      {
        id: 'gn-12-1',
        ref: '12,1',
        original: 'לֶךְ־לְךָ מֵאַרְצְךָ וּמִמּוֹלַדְתְּךָ וּמִבֵּית אָבִיךָ אֶל־הָאָרֶץ אֲשֶׁר אַרְאֶךָּ',
        translit: 'Lekh lekha me-artsekha u-mi-moladtekha u-mi-beit avikha el ha-arets asher ar’eka',
        literal: 'Va vers-toi depuis-ton-pays et-depuis-ta-parenté et-depuis-maison-de ton-père vers-le-pays que je-te-ferai-voir',
        translations: [
          { source: 'Segond', year: '1910', text: 'Va-t’en de ton pays, de ta patrie et de la maison de ton père, dans le pays que je te montrerai.' },
          { source: 'Rachi', year: '≈1090', text: '« Va pour toi » — pour ton bien et pour ton avantage.', note: 'Rachi prend au sérieux le lekha redondant, que les traductions courantes suppriment.' },
          { source: 'Chouraqui', year: '1974', text: 'Va vers toi, de ta terre, de ton enfantement, de la maison de ton père, vers la terre que je te ferai voir.' },
        ],
        gloss: [
          { term: 'לֶךְ־לְךָ', translit: 'lekh lekha', sense: 'Littéralement « va vers toi ». Le second mot est grammaticalement superflu ; toute la tradition juive s’est demandé pourquoi il est là.' },
        ],
        issue: {
          title: 'Ce que les traductions élégantes suppriment',
          text: "« Va-t'en » est du bon français et fait disparaître un mot. Or ce mot redondant est précisément ce sur quoi la tradition a bâti son interprétation : le départ est un voyage vers soi. Les traductions les plus fluides sont souvent celles qui effacent le plus — parce qu'elles corrigent ce qui, dans l'original, résiste.",
        },
      },
      {
        id: 'gn-22-2',
        ref: '22,2',
        original: 'קַח־נָא אֶת־בִּנְךָ אֶת־יְחִידְךָ אֲשֶׁר־אָהַבְתָּ אֶת־יִצְחָק',
        translit: 'Qah na et binkha et yehidekha asher ahavta et Yitshaq',
        literal: 'Prends donc [obj] ton-fils [obj] ton-unique que tu-as-aimé [obj] Isaac',
        translations: [
          { source: 'Segond', year: '1910', text: 'Prends ton fils, ton unique, celui que tu aimes, Isaac.' },
          { source: 'TOB', year: '1988', text: 'Prends donc ton fils, ton unique, que tu aimes, Isaac.' },
        ],
        gloss: [
          { term: 'נָא', translit: 'na', sense: 'Particule de prière, non d’ordre : « s’il te plaît », « je t’en prie ». Dieu supplie plus qu’il ne commande — nuance que la plupart des traductions suppriment.' },
          { term: 'יְחִידְךָ', translit: 'yehidekha', sense: 'Ton unique. Mais Abraham a déjà Ismaël : le texte adopte le point de vue de la promesse, pas celui des faits.' },
        ],
        issue: {
          title: 'Une supplication traduite en ordre',
          text: "La particule na change la couleur de tout l'épisode : Dieu demande, il n'exige pas. Un midrach en tire que l'Aqedah est une épreuve dont Abraham pouvait discuter — comme il avait discuté pour Sodome quatre chapitres plus tôt, et comme il ne le fait pas ici. Le silence d'Abraham devient alors le vrai sujet. Aucune traduction française courante ne rend cette particule, et l'interprétation entière s'en trouve modifiée.",
        },
      },
    ],
  },

  {
    id: 'exode-he',
    title: 'Exode et Loi',
    textId: 'torah',
    traditions: ['judaisme', 'christianisme', 'islam'],
    language: 'Hébreu biblique',
    script: 'Alphabet hébreu carré',
    rtl: true,
    composed: 'VIIIe-Ve s. av. J.-C.',
    intro:
      "La sortie d'Égypte, le nom de Dieu, le Décalogue, la loi du talion. Quatre lieux où la traduction a des effets juridiques et politiques directs.",
    translationNote:
      "Les textes législatifs supposent un contexte judiciaire que le français ne restitue pas. Traduire une loi ancienne sans son cadre procédural, c'est la rendre à la fois plus brutale et plus applicable qu'elle ne l'était.",
    units: [
      {
        id: 'ex-3-14',
        ref: '3,14',
        original: 'אֶהְיֶה אֲשֶׁר אֶהְיֶה',
        translit: 'Ehyeh asher ehyeh',
        literal: 'Je-serai qui je-serai  /  Je-suis qui je-suis',
        translations: [
          { source: 'Septante (grec)', year: 'IIIe s. av. J.-C.', text: 'Ἐγώ εἰμι ὁ ὤν — « Je suis Celui qui est »', note: 'La Septante introduit l’ontologie grecque : Dieu devient l’Être. Toute la métaphysique chrétienne en découle.' },
          { source: 'Vulgate', year: 'IVe s.', text: 'Ego sum qui sum — « Je suis qui je suis »' },
          { source: 'Segond', year: '1910', text: 'Je suis celui qui suis.' },
          { source: 'Chouraqui', year: '1974', text: 'Èhiè ashèr èhiè — « Je serai qui je serai »' },
          { source: 'Buber et Rosenzweig', year: '1925', text: '« Je serai-là comme je serai-là »', note: 'Ils refusent l’ontologie et rendent une promesse de présence, non une définition de l’être.' },
        ],
        gloss: [
          { term: 'אֶהְיֶה', translit: 'ehyeh', sense: 'Inaccompli du verbe être : ni présent ni futur au sens français, mais une action non achevée. « Je serai » est plus fidèle que « je suis ».' },
        ],
        issue: {
          title: 'Le jour où Dieu est devenu l’Être',
          text: "L'hébreu esquive : Dieu refuse de livrer un nom manipulable et répond par une formule qui échappe. La Septante, en grec, la fige en « Celui qui est » — et fait entrer Dieu dans la catégorie philosophique de l'être. De là viennent la théologie de l'Ipsum Esse chez Thomas d'Aquin, l'argument ontologique, et une bonne part de la métaphysique occidentale. Une seule décision de traduction, prise à Alexandrie au IIIe siècle avant notre ère, a orienté deux mille ans de pensée.",
        },
      },
      {
        id: 'ex-20-13',
        ref: '20,13',
        original: 'לֹא תִּרְצָח',
        translit: 'Lo tirtsah',
        literal: 'Pas tu-assassineras',
        translations: [
          { source: 'Segond', year: '1910', text: 'Tu ne tueras point.' },
          { source: 'TOB', year: '1988', text: 'Tu ne commettras pas de meurtre.' },
          { source: 'Bible de Jérusalem', year: '1998', text: 'Tu ne tueras pas.' },
          { source: 'Chouraqui', year: '1974', text: 'Tu n’assassineras pas.' },
        ],
        gloss: [
          { term: 'רָצַח', translit: 'ratsah', sense: 'Meurtre illégitime. L’hébreu dispose d’autres verbes pour tuer à la guerre (harag) ou exécuter judiciairement (hemit). Le Décalogue emploie le plus restreint des trois.' },
        ],
        issue: {
          title: 'Un commandement rétréci par la traduction — dans les deux sens',
          text: "« Tu ne tueras point » interdit toute mise à mort, y compris la guerre et la peine capitale — lecture que les pacifismes chrétiens ont défendue. Mais le même texte prévoit quelques versets plus loin des peines de mort et des guerres : la Torah ne se contredit pas, elle emploie un verbe précis que le français a élargi. Inversement, traduire « tu ne commettras pas de meurtre » referme le commandement sur le droit pénal et désarme la lecture pacifiste. Le mot hébreu autorise la seconde traduction ; l'histoire de la première montre qu'un contresens peut être moralement fécond.",
        },
      },
      {
        id: 'ex-21-24',
        ref: '21,24',
        original: 'עַיִן תַּחַת עַיִן שֵׁן תַּחַת שֵׁן',
        translit: 'Ayin tahat ayin, shen tahat shen',
        literal: 'Œil à-la-place-de œil, dent à-la-place-de dent',
        translations: [
          { source: 'Segond', year: '1910', text: 'œil pour œil, dent pour dent' },
          { source: 'Lecture rabbinique (Talmud, Baba Qamma 84a)', year: '≈500', text: '« La valeur d’un œil pour un œil » — indemnisation financière en cinq chefs de préjudice.', note: 'Le Talmud exclut explicitement l’application littérale et démontre son impossibilité pratique.' },
        ],
        gloss: [
          { term: 'תַּחַת', translit: 'tahat', sense: 'Sous, à la place de, en compensation de. Le sens de substitution y est aussi fort que celui de représailles.' },
        ],
        issue: {
          title: 'Une limitation devenue synonyme de barbarie',
          text: "Dans son contexte, le talion n'autorise pas la vengeance : il la plafonne. Face à une pratique de représailles illimitées — « je tuerai sept des vôtres pour un des miens » —, imposer une stricte équivalence est une réforme restrictive. Comparé au Code de Hammurabi, le texte biblique fait mieux encore : il ne module pas la peine selon la classe sociale de la victime. Et la tradition juive n'a jamais appliqué la lettre. « Œil pour œil » est aujourd'hui l'emblème d'une justice archaïque : c'est l'exact contraire de sa fonction d'origine.",
        },
      },
      {
        id: 'dt-6-4',
        ref: 'Deutéronome 6,4',
        label: 'Le Chema',
        original: 'שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד',
        translit: 'Shema Yisrael, YHWH Eloheinu, YHWH ehad',
        literal: 'Écoute Israël, YHWH notre-Dieu, YHWH un',
        translations: [
          { source: 'Segond', year: '1910', text: 'Écoute, Israël ! l’Éternel, notre Dieu, est le seul Éternel.' },
          { source: 'TOB', year: '1988', text: 'Écoute, Israël : le Seigneur notre Dieu est le Seigneur UN.' },
          { source: 'Rabbinat français', year: '1899', text: 'Écoute, Israël : l’Éternel est notre Dieu, l’Éternel est un !' },
          { source: 'Lecture alternative', year: '—', text: '« YHWH notre Dieu, YHWH seul »', note: 'ehad peut signifier « un » (unicité) ou « seul » (exclusivité du culte). Deux théologies différentes.' },
        ],
        gloss: [
          { term: 'יְהוָה', translit: 'YHWH', sense: 'Le nom propre, jamais prononcé. Les voyelles écrites sous ces consonnes sont celles d’Adonaï, « Seigneur », pour rappeler au lecteur de substituer. « Jéhovah » est né d’une lecture naïve de ce dispositif au XVIe siècle.' },
          { term: 'אֶחָד', translit: 'ehad', sense: 'Un, unique, seul. Le même mot dit « une seule chair » en Genèse 2,24 : il peut donc dire une unité composée, argument dont la théologie trinitaire s’est saisie.' },
        ],
        issue: {
          title: 'Le nom qu’on ne traduit pas mais qu’on remplace',
          text: "Les traductions françaises rendent YHWH par « l'Éternel » (Segond, protestant), « le Seigneur » (catholique et TOB), ou le laissent tel quel. Aucune n'est neutre. « L'Éternel » est une interprétation philosophique du XVIe siècle ; « le Seigneur » calque la substitution liturgique juive et efface qu'il s'agit d'un nom propre. Le lecteur français ne voit jamais que le texte, quatre mille fois, désigne Dieu par un nom — ce qui change la nature même de la relation décrite.",
        },
      },
      {
        id: 'lv-19-18',
        ref: 'Lévitique 19,18',
        original: 'וְאָהַבְתָּ לְרֵעֲךָ כָּמוֹךָ',
        translit: 'Ve-ahavta le-re‘akha kamokha',
        literal: 'Et-tu-aimeras à-ton-prochain comme-toi',
        translations: [
          { source: 'Segond', year: '1910', text: 'Tu aimeras ton prochain comme toi-même.' },
          { source: 'Lecture littérale', year: '—', text: '« Tu aimeras à ton prochain comme toi »', note: 'Le verbe régit une préposition (le-) inhabituelle : on aime « à » quelqu’un, comme on fait du bien à quelqu’un.' },
          { source: 'Buber et Rosenzweig', year: '1925', text: '« Aime ton compagnon, il est comme toi »', note: 'Ils rattachent kamokha au prochain et non à l’amour : ce n’est pas « autant que toi », c’est « car il t’est semblable ».' },
        ],
        gloss: [
          { term: 'רֵעַ', translit: 'rea', sense: 'Le compagnon, le voisin, le membre du groupe. Le verset 34 étend explicitement l’obligation au ger, l’étranger résident — précision que les citations abrégées suppriment.' },
        ],
        issue: {
          title: 'Aimer comment, et qui ?',
          text: "Deux questions que le français referme. D'abord la construction : la préposition suggère un amour agissant — faire du bien à — plutôt qu'un sentiment. Ensuite le périmètre : rea désigne d'abord le compagnon israélite, et c'est le verset 34 qui l'élargit à l'étranger, avec la même formule. Citer le verset 18 seul, comme on le fait presque toujours, laisse croire à un universalisme immédiat ; le lire avec le 34 montre un élargissement délibéré, argumenté par la mémoire de l'oppression subie.",
        },
      },
    ],
  },

  {
    id: 'prophetes-he',
    title: 'Prophètes et Psaumes',
    textId: 'nevi-im',
    traditions: ['judaisme', 'christianisme'],
    language: 'Hébreu biblique',
    script: 'Alphabet hébreu carré',
    rtl: true,
    composed: 'VIIIe-IIe s. av. J.-C.',
    intro:
      "La poésie hébraïque procède par parallélisme : chaque idée est dite deux fois, autrement. Le français, qui déteste la redondance, l'aplatit presque toujours.",
    translationNote:
      "Ici, la traduction est un enjeu confessionnel direct : plusieurs de ces versets ont servi à fonder la lecture chrétienne de l'Ancien Testament, et le choix d'un mot décide de la légitimité de cette lecture.",
    units: [
      {
        id: 'is-7-14',
        ref: 'Isaïe 7,14',
        original: 'הִנֵּה הָעַלְמָה הָרָה וְיֹלֶדֶת בֵּן וְקָרָאת שְׁמוֹ עִמָּנוּ אֵל',
        translit: 'Hinneh ha-almah harah ve-yoledet ben ve-qarat shemo Immanu El',
        literal: 'Voici la-jeune-femme enceinte et-enfantant fils et-elle-appellera son-nom Avec-nous Dieu',
        translations: [
          { source: 'Septante (grec)', year: 'IIIe s. av. J.-C.', text: 'ἡ παρθένος — « la vierge »', note: 'Le grec parthenos signifie normalement vierge. C’est cette version que citera Matthieu 1,23.' },
          { source: 'Segond', year: '1910', text: 'Voici, la jeune fille deviendra enceinte, elle enfantera un fils.' },
          { source: 'Bible de Jérusalem', year: '1998', text: 'Voici que la jeune femme est enceinte et va enfanter un fils.' },
          { source: 'Traductions confessionnelles anciennes', year: 'XVIe-XIXe s.', text: '« Voici, la vierge concevra… »', note: 'Alignées sur la Septante et sur Matthieu.' },
        ],
        gloss: [
          { term: 'עַלְמָה', translit: 'almah', sense: 'Jeune femme en âge de procréer. L’hébreu possède un mot pour vierge — betulah — et Isaïe ne l’emploie pas.' },
          { term: 'הָרָה', translit: 'harah', sense: 'Enceinte, au présent : elle l’est déjà. La traduction au futur (« deviendra enceinte ») déplace l’événement dans l’avenir.' },
        ],
        issue: {
          title: 'Le cas d’école de la traduction qui fonde une doctrine',
          text: "Isaïe s'adresse au roi Achaz vers 734 av. J.-C. et lui donne un signe pour son époque : une jeune femme, déjà enceinte, accouchera bientôt. La Septante rend almah par parthenos ; Matthieu cite la Septante ; et de là naît la lecture d'une prophétie de la naissance virginale, huit siècles à l'avance. Il ne s'agit pas d'une falsification : parthenos pouvait recouvrir « jeune fille », et l'exégèse ancienne ne lisait pas comme nous. Mais l'écart entre l'hébreu et le grec est réel, il est ancien, et il a produit un dogme. C'est le meilleur exemple pour comprendre qu'une doctrine peut naître d'un mot.",
        },
      },
      {
        id: 'is-45-7',
        ref: 'Isaïe 45,7',
        original: 'יוֹצֵר אוֹר וּבוֹרֵא חֹשֶׁךְ עֹשֶׂה שָׁלוֹם וּבוֹרֵא רָע',
        translit: 'Yotser or u-vore hoshekh, oseh shalom u-vore ra',
        literal: 'Façonnant lumière et-créant ténèbre, faisant paix et-créant mal',
        translations: [
          { source: 'Segond', year: '1910', text: 'Je forme la lumière, et je crée les ténèbres, je donne la prospérité, et je crée l’adversité.' },
          { source: 'TOB', year: '1988', text: '…qui fais la paix et crée le malheur.' },
          { source: 'Traduction littérale', year: '—', text: '…faisant la paix et créant le mal.' },
        ],
        gloss: [
          { term: 'רָע', translit: 'ra', sense: 'Mauvais, nuisible, malheureux. Le mot couvre à la fois le mal moral et le malheur. Le français doit choisir ; l’hébreu ne distinguait pas les deux comme nous le faisons.' },
        ],
        issue: {
          title: 'Un verset que les traductions adoucissent systématiquement',
          text: "« Je crée le mal » est théologiquement insoutenable pour un lecteur moderne, et presque toutes les traductions écrivent « le malheur » ou « l'adversité ». Ce n'est pas un contresens : ra couvre bien les deux. Mais le verset est adressé à Cyrus, dans un contexte polémique contre le dualisme iranien : il affirme précisément que Dieu est seul à l'origine de tout, y compris de ce qui nous nuit. Adoucir la traduction, c'est effacer l'argument. Le zoroastrisme séparait un principe bon et un principe mauvais ; Isaïe refuse cette solution, et le prix qu'il paie est ce verset.",
        },
      },
      {
        id: 'am-5-24',
        ref: 'Amos 5,24',
        original: 'וְיִגַּל כַּמַּיִם מִשְׁפָּט וּצְדָקָה כְּנַחַל אֵיתָן',
        translit: 'Ve-yiggal ka-mayim mishpat u-tsedaqah ke-nahal eitan',
        literal: 'Et-qu’il-roule comme-les-eaux jugement et-justice comme-torrent permanent',
        translations: [
          { source: 'Segond', year: '1910', text: 'Que la droiture soit comme un courant d’eau, et la justice comme un torrent qui jamais ne tarit !' },
          { source: 'TOB', year: '1988', text: 'Que le droit jaillisse comme les eaux, et la justice comme un torrent intarissable.' },
        ],
        gloss: [
          { term: 'מִשְׁפָּט', translit: 'mishpat', sense: 'Le jugement rendu, la procédure judiciaire, le droit concret — pas une vertu abstraite.' },
          { term: 'צְדָקָה', translit: 'tsedaqah', sense: 'Justice, mais aussi générosité envers le pauvre : en hébreu post-biblique, le mot finit par signifier « aumône ». Justice et charité y sont un seul geste.' },
          { term: 'נַחַל אֵיתָן', translit: 'nahal eitan', sense: 'Oued permanent. Dans un pays où les torrents s’assèchent l’été, l’image dit la constance, non la violence du flot.' },
        ],
        issue: {
          title: 'Deux mots que le français sépare',
          text: "Le couple mishpat / tsedaqah revient partout dans les prophètes. Le français les rend par « droit » et « justice », deux notions distinctes — l'une procédurale, l'autre morale. En hébreu, elles forment une paire indissociable, et tsedaqah glisse vers la charité concrète. Là où nous opposons justice légale et solidarité, la Bible n'y voit qu'un seul mouvement. C'est ce que Martin Luther King reprend en citant ce verset : il ne demande pas la charité, il demande le droit.",
        },
      },
      {
        id: 'ps-23-1',
        ref: 'Psaume 23,1',
        original: 'יְהוָה רֹעִי לֹא אֶחְסָר',
        translit: 'YHWH ro‘i, lo ehsar',
        literal: 'YHWH mon-berger, pas je-manquerai',
        translations: [
          { source: 'Segond', year: '1910', text: 'L’Éternel est mon berger : je ne manquerai de rien.' },
          { source: 'Bible de Jérusalem', year: '1998', text: 'Yahvé est mon berger, je ne manque de rien.' },
          { source: 'Chouraqui', year: '1974', text: 'IHVH-Adonaï, mon berger, je ne manque de rien.' },
        ],
        gloss: [
          { term: 'רֹעֶה', translit: 'ro‘eh', sense: 'Berger — titre royal courant dans tout le Proche-Orient ancien. Appeler Dieu « mon berger » est une revendication politique autant qu’une image pastorale.' },
        ],
        issue: {
          title: 'Deux mots, sept syllabes, aucun verbe',
          text: "L'hébreu tient en quatre mots et ne comporte pas de verbe « être » : « YHWH mon berger ». Le français en met huit et ajoute une copule. Toute la densité du psaume vient de cette économie — et de l'ambiguïté qu'elle laisse : est-ce une affirmation, une invocation, un souhait ? La traduction, en complétant la phrase, tranche à la place du lecteur.",
        },
      },
      {
        id: 'ps-22-2',
        ref: 'Psaume 22,2',
        original: 'אֵלִי אֵלִי לָמָה עֲזַבְתָּנִי',
        translit: 'Eli Eli lamah azavtani',
        literal: 'Mon-Dieu mon-Dieu pourquoi m’as-tu-abandonné',
        translations: [
          { source: 'Segond', year: '1910', text: 'Mon Dieu ! mon Dieu ! pourquoi m’as-tu abandonné ?' },
          { source: 'Marc 15,34 (araméen transcrit en grec)', year: '≈70', text: 'Ελωι ελωι λεμα σαβαχθανι — « Eloï, Eloï, lema sabachthani »', note: 'Jésus cite le psaume, mais en araméen, sa langue quotidienne — Marc conserve la transcription.' },
        ],
        gloss: [
          { term: 'עֲזַבְתָּנִי', translit: 'azavtani', sense: 'Tu m’as abandonné, laissé, lâché. Aucun adoucissement possible.' },
        ],
        issue: {
          title: 'Une citation, pas un cri isolé',
          text: "Le lecteur français entend un cri de désespoir. Un auditeur juif du Ier siècle entendait le premier verset d'un psaume qu'il connaissait par cœur — et qui s'achève par une louange et une promesse de délivrance. Citer l'incipit, c'était convoquer le tout. La traduction ne peut pas restituer cet effet, faute de public qui connaisse le texte. Le sens dépend ici moins des mots que de la mémoire de celui qui écoute.",
        },
      },
      {
        id: 'mi-6-8',
        ref: 'Michée 6,8',
        original: 'עֲשׂוֹת מִשְׁפָּט וְאַהֲבַת חֶסֶד וְהַצְנֵעַ לֶכֶת עִם־אֱלֹהֶיךָ',
        translit: 'Asot mishpat ve-ahavat hesed ve-hatsnea lekhet im Elohekha',
        literal: 'Faire jugement et-aimer hesed et-marcher-discrètement avec ton-Dieu',
        translations: [
          { source: 'Segond', year: '1910', text: '…pratiquer la justice, aimer la miséricorde, et marcher humblement avec ton Dieu.' },
          { source: 'TOB', year: '1988', text: '…accomplir la justice, aimer la fidélité et t’appliquer à marcher avec ton Dieu.' },
        ],
        gloss: [
          { term: 'חֶסֶד', translit: 'hesed', sense: 'Le mot le plus intraduisible de la Bible hébraïque : loyauté, bonté, fidélité dans une relation, générosité qui excède l’obligation. « Miséricorde », « grâce », « amour », « bonté » n’en rendent chacun qu’une part.' },
          { term: 'הַצְנֵעַ', translit: 'hatsnea', sense: 'Marcher avec réserve, discrètement, sans ostentation — plus proche de la pudeur que de l’humilité intérieure.' },
        ],
        issue: {
          title: 'Hesed : un mot, quatre traductions, aucune suffisante',
          text: "La Septante le rend par eleos, « pitié » ; la Vulgate par misericordia ; le français hésite entre miséricorde, bonté, fidélité et amour. Chacun perd quelque chose. Hesed est une loyauté qui va au-delà du dû à l'intérieur d'un lien : ni un sentiment, ni un devoir. Le judaïsme en fait un attribut divin central, répété dans la liturgie des Treize Attributs. Un lecteur français qui lit « miséricorde » entend un pardon accordé d'en haut ; l'hébreu dit une fidélité tenue entre partenaires.",
        },
      },
    ],
  },
];
