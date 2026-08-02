# Atlas des Religions

Une plateforme pour comprendre l'histoire des religions, leurs enseignements, leurs
figures majeures et — surtout — ce qui circule de l'une à l'autre.

Le parti pris est explicite : distinguer systématiquement trois registres qu'on
confond d'ordinaire — ce qu'une tradition affirme d'elle-même, ce que l'histoire
et l'archéologie permettent d'établir, et ce que les autres traditions en disent.

## Structure

Le site se lit dans cet ordre, et il est construit pour cela :

1. **`/commencer`** — sept idées reçues et ce qui les remplace. Dix minutes.
   C'est l'organisateur préalable au sens d'Ausubel : sans lui, les fiches
   n'ont rien à quoi s'accrocher.
2. **`/cours`** — douze chapitres courts. Chacun suit le cycle de Merrill :
   un problème, l'activation d'une idée reçue, la démonstration en trois ou
   quatre blocs, des questions de rappel à réponse masquée, puis des liens
   vers l'encyclopédie. Progression retenue en local, sans compte.
3. **`/explorer`** — l'encyclopédie, regroupée par usage (situer, identifier,
   comparer, aller à la source) plutôt que par type d'objet.

La navigation principale ne montre que trois entrées ; le reste est replié
dans un menu et redéployé en clair sur `/explorer`. C'est de la divulgation
progressive : onze rubriques de même poids obligeaient à choisir avant de
savoir quoi choisir.

## Ce que contient l'atlas

| | |
|---|---|
| **27 traditions** | Essence, question centrale, croyances, pratiques, éthique, histoire, branches, idées reçues, apport au patrimoine humain, débats vivants |
| **227 personnages** | Vie, enseignement, paroles, postérité, relations — avec un degré d'attestation historique explicite et, quand elle existe, une lecture croisée par plusieurs traditions |
| **101 textes** | Structure, enseignements majeurs, passages, histoire matérielle de la transmission, état de la recherche critique, conseils de lecture |
| **156 événements** | De −100 000 (premières sépultures) à aujourd'hui |
| **15 dossiers comparatifs** | Une question posée à toutes les traditions à la fois, avec convergences, divergences et analyse |
| **38 notions** | Glossaire raisonné, avec équivalents croisés et faux amis |
| **47 liens d'influence** | Filiations, schismes, emprunts, réactions, syncrétismes — documentés un par un |
| **9 parcours guidés** | De la première approche à l'exégèse critique |
| **175 lieux et 22 routes** | Berceaux, sanctuaires, conciles, centres de savoir, sites archéologiques, diasporas — et les routes par lesquelles tout cela a circulé |
| **11 corpus en langue originale** | 56 passages en hébreu, grec, arabe, sanskrit, pāli, chinois classique et gurmukhī, avec translittération, mot à mot, traductions comparées et analyse du biais |
| **14 mécanismes d'émergence** | Comment une religion naît, fixe son canon, se divise, se diffuse et se transforme |
| **12 chapitres de cours** | Une traversée ordonnée, de « qu'est-ce qu'une religion ? » à « comment sait-on ce qu'on sait ? » |
| **3 voix, 8 registres, 87 passages** | Interroger la voix divine telle que chacun des trois corpus monothéistes la met en scène, couche textuelle par couche textuelle |

## Les pages

- **Traditions** — fiches construites sur une trame identique, pour rendre la comparaison possible
- **Personnages** — filtrables par tradition et par degré d'historicité
- **Textes** — chaque corpus avec sa généalogie et sa réception savante
- **Chronologie** — frise filtrable par époque, tradition, type d'événement et densité
- **Carte** — projection Natural Earth sans frontières modernes, curseur temporel non linéaire
  de −100 000 à 2030, animation, filtres par tradition et par type de lieu, routes de diffusion
- **Atelier** — les textes dans leur écriture d'origine, page par page : original, translittération,
  rendu mot à mot, traductions françaises datées confrontées, glose des termes décisifs, et
  analyse de ce que chaque choix de traduction engage
- **Émergence** — les mécanismes récurrents de naissance, fixation, division, diffusion et
  transformation des religions, avec pour chacun ce qu'il n'explique pas
- **Dialogues** — la voix divine de la Bible hébraïque, de l'Évangile et du Coran,
  restituée sous contrainte textuelle et vérifiable passage par passage
- **Comparaisons** — Dieu, l'au-delà, le mal, la règle d'or, les déluges, le messianisme,
  les femmes, la violence, le rite, la mystique, la pureté, le salut, l'écologie,
  l'autorité, la conversion
- **Influences** — carte interactive et inventaire détaillé des emprunts entre traditions
- **Notions** — glossaire avec parallèles interreligieux
- **Parcours** — itinéraires de lecture ordonnés, avec une consigne à chaque étape
- **Méthode** — partis pris, échelle d'historicité, limites assumées

Recherche globale sur toutes les entrées : `⌘K` / `Ctrl+K` (ou `/`).

## Développement

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
npm run check:data  # vérifie toutes les références croisées entre fichiers de données
```

`check:data` échoue si un personnage cité n'existe pas, si un texte lié est
introuvable, si un identifiant est en double, si un lieu a des coordonnées
aberrantes ou si un passage de l'atelier a moins de deux traductions. Il tourne
en intégration continue avant chaque déploiement.

Le site est entièrement statique et utilise un routeur à `#` : `dist/` peut être
déposé tel quel sur n'importe quel hébergeur (GitHub Pages, Netlify, S3…) sans
configuration de réécriture d'URL.

Les pages sont chargées à la demande : la page d'accueil ne télécharge pas les
227 fiches de personnages ni les corpus multilingues.

## Les dialogues

`src/data/dialogue/` décrit, pour chacune des trois voix : ses registres
(couches textuelles), ses auto-désignations attestées, ses règles de forme,
son lexique avec les sens exacts du corpus, ses contraintes doctrinales, ses
refus, ses erreurs d'imitation à éviter, et une trentaine de passages de
référence indexés par mots-clés.

À chaque tour, `selectAnchors()` sélectionne les passages pertinents par
recouvrement lexical pondéré — volontairement simple et inspectable, sans
appel réseau ni embedding — puis `buildSystemPrompt()` assemble l'instruction.
Le prompt complet est affiché dans l'interface : une page qui restitue une
voix divine doit pouvoir être auditée.

La réponse doit se terminer par une ligne `SOURCES: …` listant les passages
employés, qui sont affichés sous la réponse avec leur texte et l'écriture
d'origine. Une réponse sans source déclarée est signalée comme telle.

`npm run check:data` vérifie que chaque registre dispose d'assez de passages,
que chaque passage porte au moins trois mots-clés, et que le prompt assemblé
reste sous la limite acceptée par le relais.

### Variables d'environnement

Les dialogues passent par une fonction serverless, `netlify/functions/dialogue.mts`,
qui relaie OpenRouter. La clé n'atteint jamais le navigateur — surtout, ne la
préfixez pas par `VITE_`, ce préfixe la publierait dans le bundle.

| Variable | Requise | Défaut |
|---|---|---|
| `OPENROUTER_API_KEY` | oui | — |
| `OPENROUTER_MODEL` | non | `anthropic/claude-sonnet-4.6` |
| `SITE_URL` | non | l'URL Netlify du site |

À définir dans **Netlify › Site configuration › Environment variables**.
Voir `.env.example`. Tant que la clé est absente, la page reste consultable
et affiche proprement qu'elle attend sa configuration.

En local, lancez `npx netlify dev` et non `npm run dev` : Vite seul ne sert
pas les fonctions.

### Déploiement

Hébergé sur Netlify. `netlify.toml` fixe la commande de build, le dossier publié,
la redirection SPA et les en-têtes de cache. Deux façons de relier le dépôt sont
documentées dans `.github/workflows/deploy.yml`.

## Structure

```
src/
  data/            tout le contenu, séparé de l'interface
    types.ts       modèle de données
    traditions/    abrahamiques, orientales, anciennes
    figures/       fondateurs, Bible hébraïque, judaïsme, christianisme,
                   islam, Orient, autres, compléments
    texts/         abrahamiques, orientaux, compléments
    timeline.ts    chronologie et périodisation
    themes.ts      dossiers comparatifs
    concepts.ts    glossaire
    influences.ts  arbre des influences et parcours guidés
    geo.ts         lieux et routes de diffusion
    corpus/        textes en langue originale et traductions comparées
    emergence.ts   mécanismes d'émergence des religions
    counts.ts      volumétrie affichée en page d'accueil (vérifiée par check:data)
  components/      composants d'interface partagés
  pages/           une page par route
  lib/             recherche et utilitaires
```

Le contenu est délibérément isolé dans `src/data/` : une correction factuelle se
fait dans un fichier de données, sans toucher à l'interface.

## Les écritures originales

L'atelier n'embarque aucune police : il s'appuie sur les polices système, avec
des piles déclarées par écriture dans `src/index.css` (`.script-hebrew`,
`.script-arabic`, `.script-devanagari`, `.script-han`, `.script-gurmukhi`,
`.script-greek`). Sur un système dépourvu d'une écriture, le repli est la pile
serif générique ; l'affichage se dégrade, il ne casse pas.

## Avertissement

Chaque fiche condense ce qui remplit des rayonnages entiers. Les effectifs de
fidèles sont des estimations contestées, les dates anciennes des fourchettes.
La couverture est déséquilibrée : les traditions abrahamiques et indiennes y sont
mieux traitées que les traditions autochtones, africaines et océaniennes — ce qui
reflète l'état des sources écrites autant que celui de la recherche.

La page **Méthode** du site détaille ces limites.

## Licence

Contenu et code fournis tels quels, à usage éducatif.
