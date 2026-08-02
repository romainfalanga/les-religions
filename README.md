# Atlas des Religions

Une plateforme pour comprendre l'histoire des religions, leurs enseignements, leurs
figures majeures et — surtout — ce qui circule de l'une à l'autre.

Le parti pris est explicite : distinguer systématiquement trois registres qu'on
confond d'ordinaire — ce qu'une tradition affirme d'elle-même, ce que l'histoire
et l'archéologie permettent d'établir, et ce que les autres traditions en disent.

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

## Les pages

- **Traditions** — fiches construites sur une trame identique, pour rendre la comparaison possible
- **Personnages** — filtrables par tradition et par degré d'historicité
- **Textes** — chaque corpus avec sa généalogie et sa réception savante
- **Chronologie** — frise filtrable par époque, tradition, type d'événement et densité
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
```

Le site est entièrement statique et utilise un routeur à `#` : `dist/` peut être
déposé tel quel sur n'importe quel hébergeur (GitHub Pages, Netlify, S3…) sans
configuration de réécriture d'URL.

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
  components/      composants d'interface partagés
  pages/           une page par route
  lib/             recherche et utilitaires
```

Le contenu est délibérément isolé dans `src/data/` : une correction factuelle se
fait dans un fichier de données, sans toucher à l'interface.

## Avertissement

Chaque fiche condense ce qui remplit des rayonnages entiers. Les effectifs de
fidèles sont des estimations contestées, les dates anciennes des fourchettes.
La couverture est déséquilibrée : les traditions abrahamiques et indiennes y sont
mieux traitées que les traditions autochtones, africaines et océaniennes — ce qui
reflète l'état des sources écrites autant que celui de la recherche.

La page **Méthode** du site détaille ces limites.

## Licence

Contenu et code fournis tels quels, à usage éducatif.
