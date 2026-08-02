import type { Tradition } from '../types';

export const traditionsAbrahamiques: Tradition[] = [
  // =========================================================================
  {
    id: 'judaisme',
    name: 'Judaïsme',
    altNames: ['Yahadout', 'religion d’Israël'],
    family: 'abrahamique',
    founded: 'Émergence progressive, XIIIe–VIe s. av. J.-C.',
    foundedYear: -1200,
    origin: 'Levant sud (Canaan, royaumes d’Israël et de Juda)',
    adherents: '≈ 15 millions',
    symbol: '✡',
    color: '#3b6fb6',
    tagline: 'Un peuple lié par une alliance à un Dieu unique qui agit dans l’histoire.',
    summary:
      "Le judaïsme est la plus ancienne des traditions monothéistes vivantes. Il ne se définit pas d'abord par un credo mais par une alliance (berit) entre Dieu et un peuple, scellée par une Loi (Torah) à observer dans les gestes concrets de l'existence. Sa continuité tient moins à une institution centrale qu'à un texte et à une pratique interprétative ininterrompue depuis plus de deux millénaires.",
    essence:
      "Un Dieu unique, sans image, qui parle dans l'histoire et demande la justice. L'humain répond non par la seule croyance mais par l'obéissance à des commandements qui sanctifient le temps ordinaire — le repas, la semaine, le lit conjugal, le champ, le tribunal. La sainteté n'est pas une évasion hors du monde : c'est une manière de l'habiter.",
    centralQuestion:
      "Comment un peuple peut-il vivre fidèlement une alliance avec un Dieu invisible, au milieu de l'histoire et de ses catastrophes ?",
    coreBeliefs: [
      {
        title: 'Monothéisme strict et sans image',
        text: "« Écoute Israël, YHWH notre Dieu, YHWH est un » (Deutéronome 6,4). L'unicité divine exclut toute représentation figurée et toute médiation obligatoire. Historiquement, Israël passe d'une monolâtrie (adorer YHWH seul parmi d'autres dieux existants) à un monothéisme théorique explicite, formulé avec netteté chez le Second Isaïe pendant l'Exil (VIe s. av. J.-C.) : « Il n'y a pas d'autre dieu que moi. »",
      },
      {
        title: 'L’alliance (berit)',
        text: "Dieu choisit non un individu mais un peuple, à travers une série d'alliances : Noé (universelle), Abraham (la promesse d'une descendance et d'une terre), Moïse au Sinaï (la Loi), David (la royauté). L'élection n'est pas un privilège mais une responsabilité accrue : « Vous seuls, je vous ai connus parmi toutes les familles de la terre, c'est pourquoi je vous demanderai compte de toutes vos fautes » (Amos 3,2).",
      },
      {
        title: 'La Torah, écrite et orale',
        text: "La Torah écrite (les cinq livres de Moïse) est indissociable, dans le judaïsme rabbinique, d'une Torah orale reçue au Sinaï et transmise de génération en génération, fixée par écrit dans la Mishna (~200) puis le Talmud (~500). C'est cette dualité qui rend le judaïsme capable de se réinventer : le texte est fixe, son interprétation est un chantier permanent.",
      },
      {
        title: 'Une théologie de l’histoire',
        text: "Contrairement aux religions cycliques, le judaïsme lit le temps comme une ligne orientée : création, exode, exil, retour, ère messianique. Dieu se manifeste dans les événements collectifs plus que dans l'expérience mystique individuelle. C'est cette conception linéaire du temps que l'Occident héritera, jusque dans ses philosophies séculières du progrès.",
      },
      {
        title: 'Messianisme et monde à venir',
        text: "L'attente d'un messie (mashiah, « oint ») — figure humaine, royale, descendante de David — qui rétablira la justice, rassemblera les exilés et inaugurera une ère de paix. L'accent porte sur la réparation du monde ici-bas (tikkoun olam) plutôt que sur le salut individuel dans l'au-delà, même si la résurrection des morts entre dans la doctrine à partir de l'époque hellénistique.",
      },
      {
        title: 'Pas de péché originel',
        text: "L'humain naît avec deux penchants (yetzer ha-tov et yetzer ha-ra), le bon et le mauvais, et dispose du libre arbitre pour arbitrer entre eux. La faute est un acte, non un état hérité. La techouva (le « retour », la repentance) est toujours possible : c'est une différence structurante avec le christianisme paulinien.",
      },
    ],
    practices: [
      {
        title: 'Le Chabbat',
        text: "Du vendredi au coucher du soleil au samedi soir : cessation de trente-neuf catégories de travail créateur. Le Chabbat n'est pas d'abord un repos utilitaire mais une imitation du repos divin et une déclaration de liberté — un esclave ne choisit pas de s'arrêter. Ahad Ha'am : « Plus que les juifs ont gardé le Chabbat, le Chabbat a gardé les juifs. »",
      },
      {
        title: 'Les 613 mitsvot',
        text: "La tradition dénombre 613 commandements (248 positifs, 365 négatifs) dans la Torah. Ils couvrent le culte, l'alimentation (cacherout), la sexualité, l'agriculture, la justice sociale, la pureté rituelle. Le geste, ici, précède et forme l'intention : on devient juste en agissant justement.",
      },
      {
        title: 'Le cycle des fêtes',
        text: "Pessah (sortie d'Égypte), Chavouot (don de la Torah), Souccot (traversée du désert) rythment l'année agricole et rejouent l'histoire fondatrice. Roch Hachana et Yom Kippour ouvrent dix jours de bilan moral. Pourim et Hanoucca, plus tardives, commémorent des survies collectives. Tisha be-Av pleure les deux destructions du Temple.",
      },
      {
        title: 'L’étude comme culte',
        text: "Après 70 apr. J.-C., le sacrifice au Temple est remplacé par la prière, la charité et l'étude. Le beit midrash (maison d'étude) devient le centre de gravité. Étudier n'est pas préparer l'action religieuse : c'est déjà l'accomplir. La havrouta — l'étude par paires contradictoires — institutionnalise le désaccord comme méthode.",
      },
      {
        title: 'Rites du cycle de vie',
        text: "Circoncision au huitième jour (brit mila), bar/bat mitsva à 13/12 ans, mariage sous la houppa avec contrat (ketouba), rites de deuil très codifiés (chiva de sept jours, kaddich pendant onze mois). La communauté encadre les seuils de l'existence.",
      },
    ],
    ethics: [
      {
        title: 'La justice avant le culte',
        text: "Les prophètes du VIIIe siècle (Amos, Osée, Isaïe, Michée) opèrent une révolution morale : Dieu rejette les sacrifices d'un peuple injuste. « Que le droit coule comme de l'eau, et la justice comme un torrent intarissable » (Amos 5,24). C'est l'une des racines les plus profondes de la critique sociale occidentale.",
      },
      {
        title: 'L’étranger, l’orphelin, la veuve',
        text: "La Torah revient trente-six fois sur la protection du ger (l'étranger résident) — plus que sur tout autre commandement. Le motif donné est mémoriel : « car vous avez été étrangers en Égypte ». L'expérience de l'oppression fonde l'obligation morale.",
      },
      {
        title: 'La règle d’or, version Hillel',
        text: "« Ce qui t'est odieux, ne le fais pas à ton prochain : c'est là toute la Torah, le reste est commentaire — va et étudie » (Talmud, Chabbat 31a). La formulation négative, plus modeste que l'impératif positif, laisse à l'autre le soin de définir son bien.",
      },
      {
        title: 'Sauver une vie',
        text: "Le pikouah nefech suspend presque tous les commandements : on viole le Chabbat pour sauver un être humain. « Qui sauve une seule vie sauve un monde entier » (Mishna Sanhédrin 4,5) — formule reprise presque mot pour mot dans le Coran (5,32).",
      },
    ],
    history: [
      {
        title: 'Les origines (XIIIe–Xe s. av. J.-C.)',
        text: "L'archéologie contemporaine ne retrouve ni un exode massif ni une conquête éclair de Canaan. Le tableau majoritaire : Israël émerge de l'intérieur du monde cananéen, sur les hautes terres, aux XIIe–XIe siècles. YHWH, divinité probablement venue du sud (Madian/Édom), s'impose progressivement au sein d'un panthéon où figurent El (dont Israël porte le nom) et Ashéra. Un noyau historique — un petit groupe sorti d'Égypte — reste plausible mais indémontrable.",
      },
      {
        title: 'Royaumes et prophètes (Xe–VIe s.)',
        text: "Deux royaumes : Israël au nord (détruit par l'Assyrie en 722) et Juda au sud. La réforme du roi Josias (622) centralise le culte à Jérusalem et détruit les hauts lieux — moment décisif où le culte de YHWH devient exclusif. Les prophètes réinterprètent les défaites nationales non comme la victoire de dieux étrangers mais comme le jugement de YHWH sur son propre peuple : renversement théologique majeur.",
      },
      {
        title: 'L’Exil (586–538) et la refondation',
        text: "La destruction du Temple par Nabuchodonosor et la déportation à Babylone auraient dû dissoudre la religion d'Israël. Elles la transforment : sans terre ni temple, on invente une religion du livre, du Chabbat et de la circoncision — des marqueurs portatifs. La rédaction et l'édition des grands textes s'accélèrent. Le monothéisme explicite s'affirme. Cyrus le Perse autorise le retour en 538 ; le Second Temple est achevé en 515.",
      },
      {
        title: 'Époque du Second Temple (515 av. – 70 apr.)',
        text: "Hellénisation, révolte des Maccabées (167–160), domination romaine. Le judaïsme se diversifie : pharisiens (Torah orale, résurrection), sadducéens (sacerdotaux, Torah écrite seule), esséniens (communauté séparée de Qumrân), zélotes, et un mouvement autour d'un prédicateur galiléen nommé Yeshoua. En 70, Titus détruit le Temple ; en 135, la révolte de Bar Kokhba se solde par un désastre.",
      },
      {
        title: 'La révolution rabbinique (Ier–VIe s.)',
        text: "Sans Temple ni sacrifices, les héritiers des pharisiens réinventent tout. Yohanan ben Zakkaï obtient de fonder une école à Yavné. La Mishna (Juda le Prince, ~200) codifie la loi orale ; les Talmuds de Jérusalem (~400) et de Babylone (~500) l'enveloppent d'un océan de discussion. Ce n'est pas un code mais un procès-verbal de débats : la forme même du texte enseigne que la vérité se cherche à plusieurs.",
      },
      {
        title: 'Moyen Âge : l’âge d’or et les persécutions',
        text: "En terre d'islam, une brillante symbiose : Saadia Gaon, Juda Halevi, Maïmonide, philosophie et poésie hébraïque. En Europe chrétienne, une trajectoire inverse : accusations de meurtre rituel (à partir de 1144), massacres des croisades, expulsions (Angleterre 1290, France 1394, Espagne 1492), ghettos. La Kabbale se déploie en Provence et en Castille ; le Zohar paraît vers 1280.",
      },
      {
        title: 'Modernité, Choah, refondations',
        text: "La Haskala (Lumières juives, Mendelssohn) et l'émancipation civique font éclater le judaïsme en courants : orthodoxe, réformé, conservateur (massorti), reconstructionniste. Le hassidisme (Baal Chem Tov, XVIIIe s.) démocratise la mystique. Le sionisme politique naît à la fin du XIXe siècle. La Choah (1939-1945) anéantit un tiers du peuple juif et le centre de gravité du judaïsme européen ; l'État d'Israël est fondé en 1948. La théologie d'après-Auschwitz (Fackenheim, Levinas, Jonas) interroge à nouveaux frais la présence de Dieu dans l'histoire.",
      },
    ],
    branches: [
      {
        name: 'Judaïsme orthodoxe',
        when: 'Formalisé au XIXe s. en réaction à la Réforme',
        description:
          "Considère la Torah écrite et orale comme d'origine divine et la halakha comme contraignante. Sous-courants : orthodoxie moderne (engagement dans la société séculière), haredim/ultra-orthodoxes (séparation), hassidim (mystique, autour d'un rebbe), mitnagdim/lituaniens (primat de l'étude talmudique).",
      },
      {
        name: 'Judaïsme réformé (libéral)',
        when: 'Allemagne, années 1810-1840',
        description:
          "Distingue l'essence éthique et prophétique du judaïsme de ses formes rituelles historiquement situées. Autonomie de la personne face à la halakha, égalité hommes-femmes, rabbins femmes depuis 1972, ordination de rabbins LGBT.",
      },
      {
        name: 'Judaïsme conservateur (massorti)',
        when: 'Fin XIXe s., Europe centrale puis États-Unis',
        description:
          "Voie médiane : la halakha oblige, mais elle a toujours évolué et peut donc évoluer encore par les voies juridiques traditionnelles. Historicisation du texte assumée.",
      },
      {
        name: 'Karaïsme',
        when: 'VIIIe s., Bagdad',
        description:
          "Rejette la Torah orale et le Talmud, ne reconnaissant que l'Écriture. Quelques dizaines de milliers de fidèles aujourd'hui, surtout en Israël. Preuve que la dualité écrit/oral n'allait pas de soi.",
      },
      {
        name: 'Judaïsme humaniste et reconstructionniste',
        when: 'XXe s., États-Unis',
        description:
          "Le judaïsme y est pensé comme une civilisation en évolution (Mordecai Kaplan) ou comme une culture éthique sans théisme surnaturel (Sherwin Wine).",
      },
    ],
    keyTexts: ['torah', 'nevi-im', 'ketouvim', 'mishna', 'talmud', 'zohar', 'michne-torah', 'manuscrits-mer-morte'],
    keyFigures: [
      'abraham',
      'moise',
      'david',
      'salomon',
      'isaie',
      'jeremie',
      'ezechiel',
      'esdras',
      'hillel',
      'akiva',
      'yohanan-ben-zakkai',
      'juda-le-prince',
      'rachi',
      'maimonide',
      'nahmanide',
      'isaac-luria',
      'baal-chem-tov',
      'mendelssohn',
      'levinas',
    ],
    influencedBy: ['religion-mesopotamienne', 'religion-egyptienne', 'zoroastrisme', 'religion-cananeenne'],
    influenced: ['christianisme', 'islam', 'samaritanisme', 'druzisme', 'rastafari', 'bahaisme'],
    misconceptions: [
      {
        claim: "« L'Ancien Testament, c'est le Dieu de la colère ; le Nouveau, celui de l'amour. »",
        reality:
          "Opposition forgée au IIe siècle par Marcion et condamnée comme hérésie par l'Église elle-même. « Aime ton prochain comme toi-même » est un verset de la Torah (Lévitique 19,18) ; la miséricorde divine (hessed) y est un attribut central, répété dans la liturgie des Treize Attributs (Exode 34,6-7).",
      },
      {
        claim: '« Les juifs attendent encore le Messie, donc leur religion est inachevée. »',
        reality:
          "Lecture chrétienne projetée. Le judaïsme rabbinique se conçoit comme une pratique complète et suffisante ; le messianisme y occupe une place réelle mais non centrale, et de nombreux courants l'entendent comme une ère plutôt que comme un individu.",
      },
      {
        claim: '« Le peuple élu, donc supérieur. »',
        reality:
          "L'élection est comprise comme une charge (davantage de commandements, davantage de comptes à rendre), non comme un salut réservé. La tradition affirme explicitement que « les justes de toutes les nations ont part au monde à venir » (Tosefta Sanhédrin 13,2).",
      },
      {
        claim: '« Judaïsme = religion ethnique fermée. »',
        reality:
          "La conversion existe et fut parfois massive (les Khazars, l'Adiabène, l'expansion sous les Hasmonéens). Le judaïsme ne fait simplement pas de prosélytisme, considérant que le salut ne passe pas par lui pour les non-juifs.",
      },
    ],
    contribution:
      "Le judaïsme a introduit dans l'histoire des idées : un Dieu unique et personnel, une conception linéaire et orientée du temps, la critique prophétique du pouvoir au nom de la justice, la sacralisation du repos hebdomadaire, la centralité du texte et de son interprétation, et l'idée que l'histoire humaine a un sens moral. Ces éléments, transmis par le christianisme et l'islam, structurent une large part de la civilisation mondiale.",
    livingDebates: [
      "Qui est juif ? (matrilinéarité, conversions non orthodoxes, patrilinéarité admise par le réformé depuis 1983)",
      "Statut des femmes dans le rituel (minyan, ordination, divorce et le problème des agounot)",
      'Rapport entre judaïsme, sionisme et État : théologies pro- et anti-sionistes coexistent',
      "Autorité de la halakha face à l'historicisation critique des textes",
      "Théologie après la Choah : peut-on encore parler de providence dans l'histoire ?",
    ],
  },

  // =========================================================================
  {
    id: 'christianisme',
    name: 'Christianisme',
    family: 'abrahamique',
    founded: 'Ier siècle apr. J.-C.',
    foundedYear: 30,
    origin: 'Judée romaine (Galilée, Jérusalem)',
    adherents: '≈ 2,4 milliards',
    symbol: '✝',
    color: '#8b5cf6',
    tagline: 'Dieu s’est fait homme ; la mort est vaincue ; l’amour est le dernier mot.',
    summary:
      "Né comme un courant juif messianique autour de Jésus de Nazareth, le christianisme devient en trois siècles une religion universaliste distincte, puis la religion de l'Empire romain. Son affirmation centrale n'est pas une doctrine morale mais un événement : un homme crucifié est ressuscité, et en lui Dieu s'est uni à l'humanité.",
    essence:
      "Le Dieu infini s'est rendu vulnérable. L'Incarnation et la Croix retournent la logique religieuse ordinaire : ce n'est pas l'homme qui monte vers Dieu par ses mérites, c'est Dieu qui descend au plus bas — jusqu'à la torture d'un condamné — et qui, de là, relève tout. La grâce précède l'effort ; l'amour du dernier vaut celui du premier.",
    centralQuestion:
      "Si Dieu lui-même a subi l'injustice et la mort, que devient le sens de la souffrance, du pouvoir et de la valeur d'une personne ?",
    coreBeliefs: [
      {
        title: 'Incarnation',
        text: "Jésus est confessé comme vrai Dieu et vrai homme, sans confusion ni séparation (Chalcédoine, 451). Ce n'est pas un dieu déguisé en homme ni un homme divinisé : la formule cherche à tenir les deux bouts d'un paradoxe. C'est la revendication la plus singulière du christianisme, celle qui le sépare irréductiblement du judaïsme et de l'islam.",
      },
      {
        title: 'Trinité',
        text: "Un seul Dieu en trois personnes : Père, Fils, Esprit Saint. La formule n'est pas dans le Nouveau Testament ; elle se construit du IIe au IVe siècle pour dire à la fois l'unicité divine et la divinité du Christ. Nicée (325) affirme le Fils « consubstantiel » (homoousios) au Père contre Arius ; Constantinople (381) inclut l'Esprit.",
      },
      {
        title: 'Croix et Résurrection',
        text: "La mort de Jésus est comprise comme un acte salvifique, et sa résurrection comme la victoire sur la mort ouverte à tous. Paul : « Si le Christ n'est pas ressuscité, notre prédication est vide » (1 Corinthiens 15,14). Les théories de la rédemption divergent (sacrifice expiatoire, victoire sur les puissances, satisfaction chez Anselme, exemple d'amour chez Abélard) sans qu'aucune n'ait été dogmatisée.",
      },
      {
        title: 'Grâce et foi',
        text: "Le salut est un don, non un salaire. Chez Paul, la Loi révèle le péché sans en délivrer ; seule la foi dans le Christ justifie. Augustin radicalise (péché originel transmis, grâce prévenante), Luther en fait le cœur de la Réforme (sola gratia, sola fide), le catholicisme et l'orthodoxie maintiennent une coopération de la liberté humaine.",
      },
      {
        title: 'Église et sacrements',
        text: "La communauté des croyants est pensée comme « corps du Christ ». Les sacrements — baptême et eucharistie partout, jusqu'à sept dans le catholicisme et l'orthodoxie — sont des signes visibles d'une grâce invisible. Leur nature (présence réelle ? symbole ?) est l'un des points de rupture entre confessions.",
      },
      {
        title: 'Eschatologie',
        text: "Retour du Christ, jugement, résurrection des corps, « ciel nouveau et terre nouvelle ». L'Église primitive attend ce retour de manière imminente ; le report indéfini de la parousie est l'un des grands moteurs de son organisation institutionnelle.",
      },
    ],
    practices: [
      {
        title: 'Eucharistie / Cène',
        text: "Rite central : partage du pain et du vin en mémoire du dernier repas. Catholiques et orthodoxes y voient une présence réelle (transsubstantiation, métabolè) ; les luthériens une présence sacramentelle ; les réformés et évangéliques une mémoire et une communion.",
      },
      {
        title: 'Baptême',
        text: "Rite d'entrée. Baptême des nourrissons (catholiques, orthodoxes, luthériens, anglicans, réformés) ou baptême de croyants adultes par immersion (baptistes, évangéliques, pentecôtistes). Le désaccord porte sur la place respective de la grâce et de la décision personnelle.",
      },
      {
        title: 'Prière et liturgie',
        text: "Du Notre Père commun à tous jusqu'aux liturgies byzantines de saint Jean Chrysostome, à la messe romaine, aux offices monastiques (sept fois par jour), à la prière libre évangélique. À l'Est, la « prière du cœur » (hésychasme) répète le nom de Jésus au rythme du souffle.",
      },
      {
        title: 'Année liturgique',
        text: "Avent, Noël, Carême, Semaine sainte, Pâques, Pentecôte : le fidèle rejoue chaque année la vie du Christ. Pâques, calculée sur le calendrier lunaire juif, reste la fête majeure — Noël est plus tardive (IVe s.) et christianise un solstice.",
      },
      {
        title: 'Monachisme',
        text: "Né dans le désert égyptien (Antoine, Pacôme, IIIe-IVe s.), codifié par Basile à l'Est et Benoît à l'Ouest (« ora et labora »). Les monastères ont été, en Occident, les conservatoires de l'écrit antique et les laboratoires de l'économie agricole médiévale.",
      },
    ],
    ethics: [
      {
        title: 'Amour de l’ennemi',
        text: "« Aimez vos ennemis, priez pour ceux qui vous persécutent » (Matthieu 5,44). Radicalisation du commandement lévitique. Ce précepte, très minoritairement appliqué dans l'histoire de la chrétienté, a nourri des mouvements de non-violence considérables (quakers, Tolstoï, Martin Luther King, via Gandhi).",
      },
      {
        title: 'Le renversement des grandeurs',
        text: "Béatitudes, parabole du bon Samaritain, du fils prodigue, du jugement dernier (« ce que vous avez fait au plus petit, c'est à moi que vous l'avez fait »). La valeur d'une personne est déconnectée de son statut social — germe lointain de l'idée moderne de dignité humaine inconditionnelle.",
      },
      {
        title: 'Pardon',
        text: "Non pas sept fois mais « soixante-dix fois sept fois ». Le pardon est présenté comme condition et non conséquence de celui que l'on reçoit (« comme nous pardonnons aussi »). Cette gratuité assumée a été aussi bien un ferment de réconciliation qu'un instrument d'exigence culpabilisante.",
      },
    ],
    history: [
      {
        title: 'Le mouvement de Jésus (30-70)',
        text: "Un prédicateur galiléen annonce le Royaume de Dieu imminent, guérit, prend des libertés avec les codes de pureté, est crucifié par Rome vers 30-33. Ses disciples proclament sa résurrection. Le mouvement reste d'abord une secte juive à Jérusalem (Jacques, « le frère du Seigneur »), avant que Paul de Tarse n'ouvre l'accès aux non-juifs sans circoncision — décision (concile de Jérusalem, ~48-50) qui décide de tout ce qui suit.",
      },
      {
        title: 'Séparation d’avec le judaïsme (70-135)',
        text: "La destruction du Temple, puis la révolte de Bar Kokhba, précipitent la rupture. Les évangiles sont rédigés (Marc ~70, Matthieu et Luc ~80-90, Jean ~90-110). Les termes de la polémique intra-juive des textes deviendront, une fois lus par des chrétiens non juifs, des armes antisémites : lecture décisive à comprendre.",
      },
      {
        title: 'Persécutions, apologistes, gnose (IIe-IIIe s.)',
        text: "Persécutions locales puis impériales (Dèce 250, Dioclétien 303). Face aux gnosticismes qui font du Dieu créateur un démiurge mauvais, l'Église « proto-orthodoxe » se dote de trois outils : un canon, un credo, une succession épiscopale. Irénée, Tertullien, Origène.",
      },
      {
        title: 'L’empire chrétien (312-451)',
        text: "Constantin se convertit (312) ; édit de Milan (313) ; Théodose fait du christianisme la religion d'État (380). Le christianisme passe en un siècle de la persécution au pouvoir — retournement dont il ne s'est jamais tout à fait remis. Les conciles (Nicée 325, Constantinople 381, Éphèse 431, Chalcédoine 451) fixent la doctrine et provoquent les premiers schismes durables (Églises de l'Est syriaque, coptes, éthiopiens, arméniens).",
      },
      {
        title: 'Deux chrétientés (VIe-XIe s.)',
        text: "Divergence croissante entre un Orient grec (théologie de la déification, primauté des conciles) et un Occident latin (théologie augustinienne du péché et de la grâce, primauté romaine). Querelle du Filioque, différends sur le pain azyme et le célibat. Excommunications réciproques en 1054 ; la rupture est consommée par le sac de Constantinople par les croisés en 1204.",
      },
      {
        title: 'Moyen Âge latin',
        text: "Réforme grégorienne, croisades (1095-1291), essor des universités, redécouverte d'Aristote via les traducteurs arabes, synthèse de Thomas d'Aquin, ordres mendiants (François, Dominique), Inquisition, mystique rhénane (Eckhart) et anglaise (Julienne de Norwich).",
      },
      {
        title: 'Réformes (XVIe s.)',
        text: "Luther (1517) conteste les indulgences puis l'autorité pontificale : sola scriptura, sola fide, sacerdoce universel. Zwingli, Calvin (prédestination, Genève), l'anabaptisme radical, le schisme anglais. Le concile de Trente (1545-1563) réorganise le catholicisme. Un siècle et demi de guerres de religion aboutit, par épuisement, à l'idée de tolérance civile (Westphalie 1648).",
      },
      {
        title: 'Modernité et mondialisation',
        text: "Missions coloniales, critique des Lumières, exégèse historico-critique (XIXe s.), Vatican I (infaillibilité, 1870) puis Vatican II (1962-65 : liturgie en langue vernaculaire, liberté religieuse, réévaluation du judaïsme dans Nostra Aetate). Explosion du pentecôtisme (né en 1906 à Azusa Street) — plus de 600 millions de fidèles aujourd'hui. Le centre de gravité démographique du christianisme est désormais en Afrique subsaharienne, en Amérique latine et en Asie, non en Europe.",
      },
    ],
    branches: [
      {
        name: 'Catholicisme romain',
        when: 'Continuité revendiquée depuis les apôtres ; identité distincte après 1054',
        description:
          "≈ 1,4 milliard. Primauté du pape, sept sacrements, tradition et Écriture, magistère, mariologie développée, célibat sacerdotal en rite latin.",
      },
      {
        name: 'Orthodoxie',
        when: 'Rupture progressive, consommée entre 1054 et 1204',
        description:
          "≈ 220 millions. Communion d'Églises autocéphales, primauté d'honneur (et non de juridiction) du patriarche de Constantinople. Théologie de la théosis (déification), icônes, hésychasme, autorité des sept conciles œcuméniques.",
      },
      {
        name: 'Protestantismes',
        when: 'À partir de 1517',
        description:
          "≈ 900 millions toutes familles confondues. Luthériens, réformés/presbytériens, anglicans (voie médiane), baptistes, méthodistes, pentecôtistes et évangéliques. Point commun : autorité de l'Écriture au-dessus de la tradition ; désaccords profonds sur le reste.",
      },
      {
        name: 'Églises orientales anciennes',
        when: 'Après Éphèse (431) et Chalcédoine (451)',
        description:
          "Coptes, Éthiopiens, Syriaques, Arméniens, Malankars (miaphysites) et Église de l'Orient (dite « nestorienne »), qui évangélisa jusqu'en Chine au VIIe siècle. Leurs christologies, longtemps qualifiées d'hérétiques, sont aujourd'hui reconnues comme des formulations différentes d'une même foi.",
      },
      {
        name: 'Mouvements de restauration',
        when: 'XIXe s., États-Unis',
        description:
          "Adventistes du septième jour, Témoins de Jéhovah (non trinitaires), mormons (Église de Jésus-Christ des saints des derniers jours, avec un canon élargi). Leur point commun : la conviction que le christianisme historique s'est corrompu et doit être restauré.",
      },
    ],
    keyTexts: ['evangiles', 'epitres-paul', 'apocalypse', 'actes', 'cite-de-dieu', 'somme-theologique', 'philocalie'],
    keyFigures: [
      'jesus',
      'jean-baptiste',
      'marie',
      'pierre',
      'paul',
      'jean-evangeliste',
      'marie-madeleine',
      'jacques-frere',
      'constantin',
      'athanase',
      'arius',
      'augustin',
      'origene',
      'jean-chrysostome',
      'benoit',
      'thomas-aquin',
      'francois-assise',
      'hildegarde',
      'eckhart',
      'luther',
      'calvin',
      'therese-avila',
      'martin-luther-king',
    ],
    influencedBy: ['judaisme', 'platonisme', 'religion-grecque', 'zoroastrisme'],
    influenced: ['islam', 'manicheisme', 'bahaisme', 'rastafari', 'humanisme-seculier'],
    misconceptions: [
      {
        claim: '« Jésus a fondé le christianisme. »',
        reality:
          "Jésus était juif, prêchait à des juifs, observait la Torah et n'a laissé aucune institution ni aucun écrit. La religion distincte se construit après lui, surtout à partir de Paul et de la rupture des années 70-135. Il est plus exact de dire qu'il en est l'objet que le fondateur.",
      },
      {
        claim: '« La Bible chrétienne est un livre unique écrit d’un jet. »',
        reality:
          "C'est une bibliothèque de 66 à 81 livres (selon les confessions), composée sur plus d'un millénaire, dans trois langues, par des dizaines d'auteurs. Le canon du Nouveau Testament n'est pas fixé avant le IVe siècle et n'est pas identique partout (le canon éthiopien compte 81 livres).",
      },
      {
        claim: '« La Trinité et la divinité de Jésus ont été inventées à Nicée en 325. »',
        reality:
          "Nicée tranche un débat déjà vieux d'un siècle et déjà majoritaire ; on trouve des formules très hautes sur le Christ dès les années 50 (hymne de Philippiens 2). En revanche il est exact que la formulation technique (homoousios) est un produit du IVe siècle, dans un contexte impérial.",
      },
      {
        claim: '« Constantin a choisi les évangiles et écarté les autres. »',
        reality:
          "Aucun document ne l'atteste. Les quatre évangiles font autorité dès Irénée (~180). Les listes canoniques se stabilisent par usage liturgique sur trois siècles ; la première liste identique à la nôtre est celle d'Athanase en 367, quarante ans après Nicée et sans lien avec elle.",
      },
    ],
    contribution:
      "Idée d'une dignité inconditionnelle de la personne indépendante du statut social ; universalisme religieux (« ni juif ni grec, ni esclave ni homme libre ») ; institutionnalisation de la charité (hôpitaux, hospices) ; distinction du spirituel et du temporel qui prépare, par un long détour conflictuel, la sécularisation ; conservation et transmission de la culture antique ; matrice de l'université européenne et, paradoxalement, du désenchantement scientifique du monde.",
    livingDebates: [
      "Autorité et sexualité : ordination des femmes, célibat, bénédictions des couples de même sexe",
      "Rapport à la modernité : littéralisme biblique contre exégèse historico-critique",
      "Christianisme et politique : théologies de la libération, nationalismes chrétiens, évangélisme politique",
      "Pluralisme religieux : le Christ est-il le seul chemin ? (exclusivisme, inclusivisme, pluralisme)",
      "Écologie théologique et réinterprétation du « dominez la terre »",
    ],
  },

  // =========================================================================
  {
    id: 'islam',
    name: 'Islam',
    family: 'abrahamique',
    founded: '610-632 apr. J.-C.',
    foundedYear: 610,
    origin: 'Arabie occidentale (La Mecque, Médine)',
    adherents: '≈ 2 milliards',
    symbol: '☪',
    color: '#0f9d6b',
    tagline: 'Un Dieu absolument unique, une parole ultime, une soumission qui libère.',
    summary:
      "L'islam se présente non comme une religion nouvelle mais comme la restauration de la religion primordiale d'Abraham, altérée par les communautés antérieures. Sa colonne vertébrale est le tawhid — l'unicité absolue de Dieu — et le Coran, tenu pour parole divine incréée transmise à Muhammad entre 610 et 632.",
    essence:
      "Il n'y a de dieu que Dieu : rien ni personne ne mérite d'être absolutisé — ni un roi, ni une image, ni un prêtre, ni soi-même. Le mot islam signifie « remise de soi » ; il est de la même racine que salam, la paix. La soumission au seul Absolu est présentée comme l'affranchissement de toutes les autres servitudes.",
    centralQuestion:
      "Comment vivre l'unicité de Dieu jusque dans le détail du droit, de l'économie et du corps, sans intermédiaire entre le croyant et son Créateur ?",
    coreBeliefs: [
      {
        title: 'Tawhid — l’unicité',
        text: "Dieu est un, sans associé, sans engendrement, sans image. La sourate 112 (al-Ikhlas) le condense en quatre versets. Le shirk — associer quoi que ce soit à Dieu — est la seule faute décrite comme impardonnable. Cette rigueur explique l'aniconisme et le développement d'un art de la calligraphie et de la géométrie plutôt que de la figure.",
      },
      {
        title: 'Prophétie et sceau',
        text: "Une chaîne de 124 000 prophètes selon la tradition, dont 25 nommés dans le Coran : Adam, Noé (Nuh), Abraham (Ibrahim), Moïse (Musa), David (Dawud), Jésus (Isa), et Muhammad, « sceau des prophètes » (33,40). Tous ont annoncé le même message ; les communautés antérieures en ont altéré la lettre (tahrif). Jésus y est le Messie, né d'une vierge, faiseur de miracles — mais serviteur, non fils de Dieu, et non crucifié (4,157).",
      },
      {
        title: 'Le Coran, parole incréée',
        text: "Récité par l'ange Gabriel à Muhammad sur vingt-deux ans, en arabe, dans un style tenu pour inimitable (i'jaz). La doctrine majoritaire (sunnite ash'arite et hanbalite) le tient pour incréé — coéternel à Dieu ; les mutazilites, au IXe siècle, soutinrent qu'il était créé, et perdirent. Le débat n'est pas anodin : c'est l'équivalent structurel de la question christologique.",
      },
      {
        title: 'Anges, jugement, au-delà',
        text: "Anges (dont Gabriel/Jibril), djinns (créatures de feu dotées de libre arbitre), résurrection corporelle, pesée des actes, Paradis (janna) et Enfer (jahannam). L'eschatologie coranique est vive, concrète, et occupe une part considérable des sourates mecquoises.",
      },
      {
        title: 'Pas de clergé, pas de sacrements',
        text: "Aucun intermédiaire n'est requis entre le croyant et Dieu. L'imam qui dirige la prière est un guide, non un prêtre. L'autorité est savante (les ulémas) et non sacramentelle — ce qui explique à la fois la souplesse historique du droit musulman et la difficulté contemporaine à définir qui parle au nom de l'islam.",
      },
      {
        title: 'Une loi plus qu’une théologie',
        text: "L'islam a moins développé de dogmatique que de jurisprudence. La charia (« la voie vers le point d'eau ») désigne l'idéal normatif divin ; le fiqh est l'effort humain, faillible et pluriel, pour l'atteindre. Quatre écoles sunnites (hanafite, malikite, chaféite, hanbalite) et l'école jafarite chiite coexistent en reconnaissance mutuelle.",
      },
    ],
    practices: [
      {
        title: 'Les cinq piliers',
        text: "Shahada (attestation de foi), salat (cinq prières quotidiennes orientées vers La Mecque), zakat (aumône légale, ~2,5 % du capital dormant annuel), sawm (jeûne du Ramadan de l'aube au coucher), hajj (pèlerinage à La Mecque une fois dans la vie si l'on en a les moyens). Le chiisme duodécimain en compte dix, articulés différemment.",
      },
      {
        title: 'Le Ramadan',
        text: "Neuvième mois lunaire : abstention de nourriture, boisson, tabac et relations sexuelles du lever au coucher du soleil. Le calendrier étant lunaire, il tourne à travers les saisons. Sa dimension sociale — repas de rupture partagés, aumône accrue — est aussi importante que l'ascèse.",
      },
      {
        title: 'Le hajj',
        text: "Rassemblement annuel de plus de deux millions de personnes. Circumambulation de la Kaaba, station à Arafat, lapidation des stèles, sacrifice. Tous vêtus du même tissu blanc non cousu : effacement rituel des hiérarchies sociales, l'une des expériences égalitaires les plus puissantes qu'une religion ait organisées.",
      },
      {
        title: 'Soufisme',
        text: "Voie intérieure : dhikr (répétition des noms divins), samâ' (audition spirituelle, parfois danse), maître-disciple, confréries (Qadiriyya, Naqshbandiyya, Chadhiliyya, Mevlevi). Le soufisme fut le principal vecteur d'islamisation en Afrique, en Anatolie, en Asie du Sud et en Insulinde. Il est aujourd'hui contesté par les courants réformistes littéralistes.",
      },
      {
        title: 'Droit du quotidien',
        text: "Alimentation halal, interdiction du porc, de l'alcool et du prêt à intérêt (riba), règles de pureté, droit de la famille et de l'héritage. Le fiqh a produit une jurisprudence commerciale sophistiquée qui a irrigué le commerce médiéval de la Méditerranée à l'océan Indien.",
      },
    ],
    ethics: [
      {
        title: 'Justice et mesure',
        text: "« Soyez stricts dans la justice, témoins devant Dieu, même contre vous-mêmes » (4,135). Le Coran insiste sur l'équité contractuelle, l'exactitude des poids et mesures, la protection de l'orphelin — dans un contexte tribal où le faible n'avait d'autre protection que son clan.",
      },
      {
        title: 'Pas de contrainte en religion',
        text: "« Nulle contrainte en religion » (2,256). Verset abondamment discuté : les juristes classiques l'ont concilié avec le statut protégé mais subordonné des dhimmis (juifs, chrétiens, zoroastriens) ; les réformateurs modernes en font le fondement de la liberté de conscience.",
      },
      {
        title: 'Aumône et redistribution',
        text: "La zakat n'est pas une charité mais un droit du pauvre sur le bien du riche, un impôt religieux dont les huit catégories de bénéficiaires sont fixées (9,60). S'y ajoute la sadaqa volontaire et l'institution du waqf, fondation pieuse perpétuelle qui a financé mosquées, hôpitaux et universités.",
      },
      {
        title: 'Le sens de jihad',
        text: "Le mot signifie « effort ». La tradition distingue le « grand jihad » (contre son propre ego) et le « petit jihad » (le combat armé, strictement encadré par le droit classique : pas de meurtre de non-combattants, de destruction des récoltes, de mutilation). Son usage moderne par des groupes armés est une rupture avec cette jurisprudence, non son prolongement.",
      },
    ],
    history: [
      {
        title: 'La prédication (610-632)',
        text: "Muhammad, marchand de La Mecque, reçoit vers 610 des révélations. Sa prédication monothéiste menace les intérêts liés au sanctuaire polythéiste ; en 622, la communauté émigre à Yathrib/Médine (Hégire, an 1 du calendrier). Muhammad y devient chef politique, militaire et judiciaire autant que religieux — différence structurelle avec Jésus, aux conséquences historiques immenses. Il meurt en 632, l'Arabie unifiée.",
      },
      {
        title: 'Conquêtes et premier schisme (632-680)',
        text: "En un siècle, un empire s'étend de l'Espagne à l'Indus. La succession divise : pour les futurs sunnites, la communauté choisit son chef (Abu Bakr, Umar, Uthman, Ali) ; pour les futurs chiites, Ali, cousin et gendre du Prophète, était désigné. Assassinat d'Uthman (656), première guerre civile, massacre de Husayn à Kerbala (680) : matrice du chiisme et de sa spiritualité du martyre.",
      },
      {
        title: 'L’âge classique (VIIIe-XIIIe s.)',
        text: "Sous les Abbassides, Bagdad devient un centre intellectuel mondial : traduction du grec, du persan et du sanskrit ; algèbre (al-Khwarizmi), optique (Ibn al-Haytham), médecine (Ibn Sina/Avicenne), philosophie (al-Farabi, Ibn Rushd/Averroès), historiographie et sociologie (Ibn Khaldoun, XIVe s.). Constitution du hadith (Bukhari, Muslim), des écoles juridiques, de la théologie (kalam) et du soufisme. Al-Ghazali réconcilie droit, théologie et mystique.",
      },
      {
        title: 'Empires (XIVe-XVIIIe s.)',
        text: "Trois grands empires musulmans : Ottoman (sunnite, califat après 1517), Safavide (qui impose le chiisme duodécimain à l'Iran à partir de 1501), Moghol (Inde, avec l'expérience syncrétique d'Akbar). Islamisation de l'Asie du Sud-Est et de l'Afrique de l'Ouest, principalement par le commerce et les confréries soufies, non par la conquête.",
      },
      {
        title: 'Colonisation et réformismes (XIXe-XXe s.)',
        text: "Le choc colonial provoque des réponses divergentes : réformisme moderniste (al-Afghani, Muhammad Abduh : rouvrir l'ijtihad, l'effort d'interprétation), néo-traditionalisme, salafisme littéraliste, wahhabisme allié aux Saoud, islamisme politique (Frères musulmans 1928, Qutb, Mawdudi), révolution iranienne (1979) et théorie du velayat-e faqih de Khomeyni — innovation majeure dans l'histoire du chiisme.",
      },
      {
        title: 'Aujourd’hui',
        text: "Un quart de l'humanité, majoritairement non arabe (Indonésie, Pakistan, Inde, Bangladesh en tête). Tensions vives entre courants littéralistes, traditionnels, soufis, réformistes et sécularisés ; violences de groupes jihadistes rejetés par l'immense majorité des musulmans et par les autorités religieuses ; émergence de théologies féministes musulmanes (Amina Wadud, Asma Lamrabet) et d'herméneutiques historicisantes (Fazlur Rahman, Nasr Abu Zayd, Mohammed Arkoun).",
      },
    ],
    branches: [
      {
        name: 'Sunnisme',
        when: 'Se cristallise aux VIIIe-Xe s.',
        description:
          "≈ 85-88 %. Autorité de la sunna du Prophète et du consensus de la communauté ; quatre écoles juridiques ; théologies ash'arite, maturidite ou athari. Pas de clergé hiérarchisé.",
      },
      {
        name: 'Chiisme duodécimain',
        when: 'Formé après 680, structuré aux IXe-Xe s.',
        description:
          "≈ 10 %. Douze imams descendant d'Ali, le douzième « occulté » depuis 874 et attendu comme Mahdi. Clergé hiérarchisé (ayatollahs), autorisation de l'ijtihad permanent, rituels de deuil de Kerbala (Achoura). Majoritaire en Iran, Irak, Azerbaïdjan, Bahreïn ; important au Liban.",
      },
      {
        name: 'Ismaélisme et zaïdisme',
        when: 'VIIIe-IXe s.',
        description:
          "Chiismes minoritaires. Les ismaéliens (septimains) ont fondé le califat fatimide et l'université al-Azhar ; les nizarites suivent aujourd'hui l'Aga Khan. Les zaïdites sont majoritaires au Yémen du Nord.",
      },
      {
        name: 'Ibadisme',
        when: 'VIIe s., issu du kharijisme modéré',
        description:
          "Majoritaire à Oman, présent en Algérie (M'zab), en Tunisie (Djerba) et à Zanzibar. Ni sunnite ni chiite : l'imam doit être élu pour ses qualités, quelle que soit son origine.",
      },
      {
        name: 'Soufisme',
        when: 'VIIIe s.',
        description:
          "Non une branche mais une dimension intérieure, présente dans le sunnisme comme dans le chiisme, organisée en confréries. Rumi, Ibn Arabi, Rabia, al-Ghazali, Abd al-Qadir al-Jilani.",
      },
      {
        name: 'Ahmadiyya',
        when: '1889, Inde',
        description:
          "Mouvement fondé par Mirza Ghulam Ahmad, qui se présenta comme messie et mahdi. Compté hors de l'islam par la plupart des autorités sunnites et persécuté au Pakistan ; se revendique pleinement musulman et pacifiste.",
      },
    ],
    keyTexts: ['coran', 'hadith', 'sira', 'mathnawi', 'ihya-ulum-din', 'nahj-al-balagha'],
    keyFigures: [
      'muhammad',
      'khadija',
      'aisha',
      'abu-bakr',
      'umar',
      'uthman',
      'ali',
      'fatima',
      'husayn',
      'jafar-sadiq',
      'abu-hanifa',
      'bukhari',
      'rabia',
      'al-hallaj',
      'al-ghazali',
      'ibn-arabi',
      'rumi',
      'ibn-taymiyya',
      'ibn-khaldoun',
      'muhammad-abduh',
    ],
    influencedBy: ['judaisme', 'christianisme', 'zoroastrisme', 'religion-arabe-preislamique', 'gnosticisme'],
    influenced: ['sikhisme', 'bahaisme', 'druzisme', 'yezidisme', 'nation-of-islam'],
    misconceptions: [
      {
        claim: '« Allah est un dieu spécifique aux musulmans. »',
        reality:
          "Allah est simplement le mot arabe pour « Dieu » (al-ilah, « le dieu »). Les chrétiens arabophones l'emploient depuis avant l'islam et le disent dans leur liturgie. L'islam affirme adorer le même Dieu qu'Abraham, Moïse et Jésus.",
      },
      {
        claim: '« L’islam s’est répandu par l’épée. »',
        reality:
          "Les conquêtes politiques ont été rapides et militaires ; la conversion des populations fut lente (l'Égypte et la Perse ne deviennent majoritairement musulmanes que trois à quatre siècles après la conquête), en partie parce que les non-musulmans payaient un impôt dont l'État ne voulait pas se priver. L'Indonésie, premier pays musulman du monde, n'a jamais été conquise : elle s'est islamisée par le commerce.",
      },
      {
        claim: '« La charia est un code pénal. »',
        reality:
          "Les peines corporelles (hudud) représentent une fraction infime du corpus et sont assorties de conditions probatoires si strictes qu'elles les rendaient presque inapplicables en droit classique. L'essentiel du fiqh porte sur le culte, la famille, les contrats et l'héritage.",
      },
      {
        claim: '« Le voile est prescrit littéralement dans le Coran. »',
        reality:
          "Le Coran demande la pudeur et évoque le khimar (24,31) et le jilbab (33,59) sans définition précise, dans un contexte de distinction sociale. Les formes concrètes (hijab, niqab, tchador) sont des constructions juridiques et culturelles postérieures, et restent débattues entre juristes.",
      },
    ],
    contribution:
      "Un monothéisme radical sans clergé ni sacrement ; la conservation, la traduction et le développement de l'héritage scientifique grec, indien et persan à un moment où l'Europe l'avait perdu (algèbre, algorithme, chiffres, optique, médecine, chimie) ; une jurisprudence contractuelle qui a structuré le commerce international médiéval ; une esthétique de la calligraphie et de la géométrie ; une pensée mystique (Ibn Arabi, Rumi) parmi les plus élaborées de l'histoire ; et le rituel égalitaire du hajj.",
    livingDebates: [
      "Réouverture de l'ijtihad : peut-on réinterpréter le Coran à la lumière de son contexte historique ?",
      'Islam et État : califat, État islamique, sécularisme, ou « démocratie musulmane » ?',
      "Statut des femmes : témoignage, héritage, direction de la prière, exégèse féministe",
      'Autorité religieuse : qui peut émettre une fatwa à l’ère d’internet ?',
      "Rapport aux minorités et à la liberté de conscience (apostasie)",
    ],
  },

  // =========================================================================
  {
    id: 'bahaisme',
    name: 'Foi bahá’íe',
    family: 'abrahamique',
    founded: '1863 (proclamation de Bahá’u’lláh)',
    foundedYear: 1863,
    origin: 'Perse (Iran), puis Bagdad, Andrinople, Acre',
    adherents: '≈ 5-8 millions',
    symbol: '✹',
    color: '#e0912f',
    tagline: 'Une seule humanité, une seule religion progressivement révélée.',
    summary:
      "Née du babisme persan au milieu du XIXe siècle, la foi bahá'íe enseigne que toutes les grandes religions sont des étapes successives d'une même éducation divine de l'humanité, adaptées à chaque époque. Elle fait de l'unité du genre humain non un idéal moral mais le principe organisateur d'une religion.",
    essence:
      "La révélation est progressive : Abraham, Krishna, Moïse, Zoroastre, Bouddha, Jésus, Muhammad, le Báb, Bahá'u'lláh sont des « Manifestations de Dieu » successives, non concurrentes. La différence entre les religions tient à l'époque, pas à la vérité. Il en découle un programme : unité, égalité, éducation universelle, harmonie entre science et foi.",
    centralQuestion:
      "Si les religions viennent du même Dieu, comment organiser une civilisation planétaire qui en tire les conséquences ?",
    coreBeliefs: [
      {
        title: 'Unicité de Dieu',
        text: "Dieu est inconnaissable en son essence ; il ne se manifeste que par des intermédiaires (les Manifestations). Ni incarnation ni panthéisme : les Manifestations sont des miroirs parfaits, non Dieu lui-même.",
      },
      {
        title: 'Révélation progressive',
        text: "Chaque Manifestation apporte des vérités éternelles (unité de Dieu, éthique) et des lois sociales adaptées à son temps, appelées à être remplacées. Aucune révélation n'est finale : Bahá'u'lláh annonce lui-même qu'une autre viendra, pas avant mille ans.",
      },
      {
        title: 'Unité du genre humain',
        text: "« La terre n'est qu'un seul pays et les hommes en sont les citoyens. » Rejet du racisme, du nationalisme absolu et des castes ; égalité pleine des femmes et des hommes ; nécessité d'une langue auxiliaire universelle et d'une fédération mondiale.",
      },
      {
        title: 'Harmonie de la science et de la religion',
        text: "Une religion contredisant la science établie devient superstition ; une science sans éthique devient destructrice. L'investigation personnelle de la vérité est un devoir : l'imitation aveugle des ancêtres est explicitement rejetée.",
      },
    ],
    practices: [
      {
        title: 'Prière et lecture quotidiennes',
        text: "Une prière obligatoire par jour (trois formes au choix), lecture matin et soir des écrits, répétition 95 fois de l'invocation Alláh-u-Abhá.",
      },
      {
        title: 'Jeûne et calendrier badí‘',
        text: "19 mois de 19 jours. Jeûne du lever au coucher du soleil pendant le dernier mois (2-20 mars), suivi de Naw-Rúz, le nouvel an. « Fête des dix-neuf jours » : réunion communautaire mensuelle de dévotion, de consultation administrative et de convivialité.",
      },
      {
        title: 'Ni clergé ni sacrements',
        text: "Aucun prêtre. La communauté est administrée par des Assemblées spirituelles élues sans candidature ni campagne, et au sommet par la Maison universelle de justice (Haïfa). La consultation collective y remplace le débat partisan.",
      },
      {
        title: 'Service et abstention politique',
        text: "Interdiction de l'alcool et des drogues ; obligation d'un travail exercé dans un esprit de service, tenu pour un acte d'adoration ; non-participation aux partis politiques, pour ne pas fracturer l'unité.",
      },
    ],
    ethics: [
      {
        title: 'Élimination des préjugés',
        text: "Raciaux, nationaux, religieux, de classe, de genre : le premier principe pratique. Le mariage inter-ethnique fut encouragé dès les années 1910, à contre-courant radical de la société américaine d'alors.",
      },
      {
        title: 'Justice économique',
        text: "Suppression des extrêmes de richesse et de pauvreté, participation des travailleurs aux profits, impôt progressif — position formulée dès la fin du XIXe siècle.",
      },
      {
        title: 'Éducation universelle obligatoire',
        text: "Et, en cas de ressources limitées, priorité à l'éducation des filles, « car elles seront les premières éducatrices de la génération suivante ».",
      },
    ],
    history: [
      {
        title: 'Le Báb (1844-1850)',
        text: "Sayyid Ali Muhammad se déclare le Báb (« la Porte »), annonçant la venue imminente de « Celui que Dieu manifestera ». Le mouvement babi, avec ses milliers de convertis et sa figure féminine Táhirih qui ôte publiquement son voile, est réprimé ; le Báb est fusillé à Tabriz en 1850, plus de 20 000 babis sont tués.",
      },
      {
        title: 'Bahá’u’lláh (1817-1892)',
        text: "Mírzá Husayn-'Alí Núrí, noble persan emprisonné dans la fosse de Téhéran en 1852, y reçoit sa vocation. Exilé successivement à Bagdad, Constantinople, Andrinople puis à la prison d'Acre en Palestine, il proclame en 1863 être l'annoncé du Báb et écrit une centaine d'ouvrages, dont le Kitáb-i-Aqdas.",
      },
      {
        title: 'Institutionnalisation (1892-1963)',
        text: "Son fils 'Abdu'l-Bahá interprète l'œuvre et porte le message en Occident (1911-1913) ; son arrière-petit-fils Shoghi Effendi bâtit l'ordre administratif. En 1963 est élue la première Maison universelle de justice.",
      },
      {
        title: 'Persécution et diffusion',
        text: "Interdite en Iran depuis 1979 — exécutions, exclusion universitaire, confiscation de biens —, la foi bahá'íe est présente dans plus de 200 pays et territoires : l'une des religions les plus géographiquement dispersées au monde par rapport à son effectif.",
      },
    ],
    branches: [
      {
        name: 'Communauté bahá’íe internationale',
        when: 'Depuis 1963',
        description:
          "Quasi-totalité des fidèles, sous l'autorité de la Maison universelle de justice. Les dispositions successorales explicites de Bahá'u'lláh ont largement prévenu les schismes.",
      },
      {
        name: 'Groupes dissidents',
        when: 'XXe s.',
        description: "Bahá'ís orthodoxes, unitariens : effectifs marginaux, quelques milliers de personnes au plus.",
      },
    ],
    keyTexts: ['kitab-i-aqdas', 'kitab-i-iqan', 'paroles-cachees'],
    keyFigures: ['bab', 'bahaullah', 'abdul-baha', 'tahirih'],
    influencedBy: ['islam', 'chiisme-duodecimain', 'judaisme', 'christianisme', 'zoroastrisme'],
    influenced: ['humanisme-seculier'],
    misconceptions: [
      {
        claim: '« C’est une secte de l’islam. »',
        reality:
          "Historiquement issue du milieu chiite, elle s'en distingue par une révélation post-coranique — ce qui, du point de vue islamique, la place hors de l'islam, et explique la sévérité de la persécution. Sociologiquement, c'est une religion mondiale indépendante avec son propre canon, son calendrier et ses institutions.",
      },
      {
        claim: '« C’est du syncrétisme. »',
        reality:
          "Le syncrétisme mélange des éléments ; le bahaïsme propose une théologie de l'histoire dans laquelle les religions se succèdent selon un plan. La différence est structurelle : il ne s'agit pas d'additionner mais d'ordonner.",
      },
    ],
    contribution:
      "La formulation religieuse la plus systématique du pluralisme : non « toutes les religions se valent », mais « toutes sont des chapitres d'un même livre ». Anticipation, dès le XIXe siècle, de l'égalité des sexes, de l'éducation universelle, d'une gouvernance mondiale et de la compatibilité science-foi.",
    livingDebates: [
      "Autorité de la Maison universelle de justice et place de la dissidence intellectuelle",
      "Abstention politique face aux injustices contemporaines",
      "Statut des femmes dans l'unique institution qui leur reste fermée (la Maison universelle de justice)",
    ],
  },

  // =========================================================================
  {
    id: 'samaritanisme',
    name: 'Samaritanisme',
    family: 'abrahamique',
    founded: 'Séparation progressive, VIIIe-IVe s. av. J.-C.',
    foundedYear: -400,
    origin: 'Samarie, mont Garizim',
    adherents: '≈ 850 personnes',
    symbol: '⛰',
    color: '#6b7fa8',
    tagline: 'La branche parallèle du yahwisme, restée sur sa montagne.',
    summary:
      "Les Samaritains se considèrent comme les descendants des tribus israélites du Nord restées fidèles au culte originel sur le mont Garizim, tandis que les Judéens auraient dévié en centralisant le culte à Jérusalem. Avec environ 850 membres, c'est l'une des plus petites communautés religieuses continues au monde.",
    essence:
      "Une variante du yahwisme antique qui n'a jamais adopté le tournant rabbinique : pas de Talmud, pas de prophètes postérieurs à Moïse, pas de Jérusalem. Un témoin vivant de ce qu'aurait pu être une autre trajectoire de la religion d'Israël.",
    centralQuestion: 'Où Dieu a-t-il choisi de faire résider son nom : à Garizim ou à Sion ?',
    coreBeliefs: [
      {
        title: 'Cinq articles de foi',
        text: "Un seul Dieu ; un seul prophète, Moïse ; un seul livre, la Torah ; un seul lieu saint, le mont Garizim ; et un jour de rétribution avec la venue du Taheb, le « Restaurateur ».",
      },
      {
        title: 'Canon minimal',
        text: "Seul le Pentateuque samaritain fait autorité — texte qui présente environ 6 000 variantes par rapport au texte massorétique juif, dont une part significative rejoint la Septante et les manuscrits de Qumrân, ce qui en fait un témoin textuel précieux.",
      },
    ],
    practices: [
      {
        title: 'Le sacrifice pascal',
        text: "Unique survivance au monde du sacrifice pascal biblique : chaque année, des agneaux sont immolés sur le mont Garizim selon Exode 12, rite ininterrompu depuis l'Antiquité.",
      },
      {
        title: 'Chabbat et pureté',
        text: "Observance du Chabbat plus stricte encore que la halakha rabbinique (aucune lumière ni feu, y compris allumé à l'avance) et lois de pureté rituelle maintenues.",
      },
    ],
    ethics: [
      {
        title: 'Survie d’une minorité',
        text: "Réduite à 146 personnes en 1919, la communauté s'est reconstituée. Elle vit aujourd'hui à Kiryat Luza (Cisjordanie) et à Holon (Israël), détient les deux citoyennetés et entretient des relations avec toutes les parties — un cas rare de neutralité durable.",
      },
    ],
    history: [
      {
        title: 'La séparation',
        text: "La version biblique juive (2 Rois 17) présente les Samaritains comme des colons étrangers déportés par l'Assyrie ; l'archéologie et la génétique suggèrent plutôt une population israélite locale. Le temple de Garizim est bâti au Ve-IVe s. av. J.-C. et détruit par le Hasmonéen Jean Hyrcan en 128 av. J.-C. — origine d'une hostilité durable, dont la parabole du « bon Samaritain » (Luc 10) tire toute sa force provocatrice.",
      },
    ],
    branches: [],
    keyTexts: ['pentateuque-samaritain'],
    keyFigures: ['moise', 'abraham'],
    influencedBy: ['judaisme'],
    influenced: ['christianisme'],
    misconceptions: [
      {
        claim: '« Les Samaritains sont une secte juive. »',
        reality:
          "Ils se définissent comme les Israélites authentiques et considèrent le judaïsme comme la déviation. Historiquement, il s'agit de deux branches d'un même tronc yahwiste, séparées avant la constitution du judaïsme rabbinique.",
      },
    ],
    contribution:
      "Un témoin textuel majeur (le Pentateuque samaritain) pour l'histoire de la Bible, et la démonstration qu'une trajectoire alternative de la religion d'Israël a réellement existé et survécu.",
    livingDebates: ['Survie démographique et endogamie', 'Statut politique entre Israël et Autorité palestinienne'],
  },

  // =========================================================================
  {
    id: 'druzisme',
    name: 'Druzisme',
    altNames: ['Muwahhidun', 'Unitariens'],
    family: 'abrahamique',
    founded: '1017-1043',
    foundedYear: 1017,
    origin: 'Égypte fatimide, puis Levant',
    adherents: '≈ 1 million',
    symbol: '★',
    color: '#c05c8a',
    tagline: 'Un ésotérisme fermé, né de l’ismaélisme, mêlé de philosophie grecque.',
    summary:
      "Issue d'une dissidence de l'ismaélisme fatimide, la foi druze est une religion ésotérique fermée : la conversion y est impossible depuis 1043 et la doctrine réservée aux initiés (uqqal), la majorité des fidèles (juhhal) vivant selon l'éthique sans accéder aux textes.",
    essence:
      "Un unitarisme (tawhid) poussé jusqu'à l'abstraction, combiné à la métempsycose, à une cosmologie néoplatonicienne et à une éthique de la véracité et de la solidarité communautaire.",
    centralQuestion: "Comment préserver une vérité jugée trop haute pour être exposée, sans la trahir ni la perdre ?",
    coreBeliefs: [
      {
        title: 'Unité abstraite de Dieu',
        text: "Dieu est au-delà de tout attribut et de toute description ; il s'est manifesté dans l'histoire, notamment — pour les Druzes — dans le calife fatimide al-Hakim (996-1021), occulté et non mort.",
      },
      {
        title: 'Réincarnation',
        text: "Les âmes druzes se réincarnent immédiatement dans un autre corps druze, en nombre fixe depuis la création. Cette croyance explique la clôture démographique de la communauté.",
      },
      {
        title: 'Sept devoirs',
        text: "Véracité de la parole, protection mutuelle, renoncement aux anciens cultes, séparation d'avec le mal, reconnaissance de l'unité divine, acceptation des actes divins, soumission à sa volonté. Ils remplacent les cinq piliers de l'islam.",
      },
    ],
    practices: [
      {
        title: 'Initiation graduée',
        text: "Les uqqal (« sages »), hommes et femmes, accèdent aux Épîtres de la Sagesse et se réunissent le jeudi soir en khalwa. Les juhhal suivent l'éthique sans accès doctrinal. Les femmes peuvent être uqqal, et le sont souvent proportionnellement plus que les hommes.",
      },
      {
        title: 'Taqiyya',
        text: "Dissimulation licite de la foi en milieu hostile : héritée du chiisme, elle a permis la survie de la communauté sous des pouvoirs successifs.",
      },
    ],
    ethics: [
      {
        title: 'Monogamie et égalité',
        text: "Monogamie stricte, divorce difficile, égalité juridique des sexes en matière d'héritage — dispositions inhabituelles dans le contexte régional médiéval.",
      },
    ],
    history: [
      {
        title: 'Formation et clôture',
        text: "Prédication de Hamza ibn Ali au Caire à partir de 1017 ; en 1043, la communauté se ferme définitivement à toute nouvelle conversion. Repli dans les montagnes du Liban, de Syrie (Djebel Druze) et de Galilée, où l'autonomie est défendue les armes à la main pendant des siècles.",
      },
      {
        title: 'Époque contemporaine',
        text: "Rôle politique majeur au Liban (les Joumblatt) et en Syrie ; les Druzes d'Israël sont soumis au service militaire, contrairement aux autres citoyens arabes — situation qui alimente des débats internes profonds.",
      },
    ],
    branches: [],
    keyTexts: ['epitres-sagesse'],
    keyFigures: ['hamza-ibn-ali', 'al-hakim'],
    influencedBy: ['islam', 'gnosticisme', 'platonisme', 'hindouisme'],
    influenced: [],
    misconceptions: [
      {
        claim: '« Les Druzes sont des musulmans hétérodoxes. »',
        reality:
          "La plupart des Druzes se considèrent aujourd'hui comme une religion distincte, même si leur origine est ismaélienne et si certains États les classent administrativement parmi les musulmans.",
      },
    ],
    contribution:
      "Un exemple abouti de survie religieuse par l'ésotérisme, la dissimulation et la clôture démographique — modèle sociologique étudié bien au-delà du Levant.",
    livingDebates: ['Ouverture ou maintien du secret', 'Positionnement politique au Liban, en Syrie et en Israël'],
  },
];
