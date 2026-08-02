import { Link } from 'react-router-dom';
import { Callout, PageHeader, Prose, Section } from '../components/ui';
import { historicityLabels } from '../data/figures';
import { tint } from '../lib/utils';

export default function Method() {
  return (
    <div>
      <PageHeader
        eyebrow="Comment lire ce site"
        title="Méthode, partis pris et limites"
        lead="Un atlas des religions n’est jamais neutre : il choisit ce qu’il montre, dans quel ordre, et avec quel vocabulaire. Autant l’expliciter."
      />

      <div className="container-page">
        <Section title="Le principe de base">
          <Prose>
            <p>
              Ce site distingue systématiquement trois registres qu’on confond souvent : ce qu’une tradition
              affirme d’elle-même, ce que l’histoire et l’archéologie permettent d’établir, et ce que d’autres
              traditions en disent. Ces trois registres n’ont pas le même statut, et les mélanger produit soit
              une apologétique déguisée, soit une réduction qui manque son objet.
            </p>
            <p className="mt-4">
              Concrètement : la fiche d’Abraham indique qu’aucune source extra-biblique ne le mentionne{' '}
              <em>et</em> explique pourquoi il reste une figure décisive. Celle de Jésus rappelle le consensus
              historique sur son baptême et sa crucifixion <em>et</em> présente la confession de foi chrétienne{' '}
              <em>et</em> la lecture coranique. Aucun de ces trois plans n’annule les autres.
            </p>
          </Prose>
        </Section>

        <Section title="L’échelle d’historicité">
          <p className="mb-5 max-w-3xl text-sm text-ink-600">
            Chaque personnage porte une étiquette. Elle ne dit rien de son importance religieuse : un
            personnage mythique peut structurer une civilisation entière, et un personnage attesté peut n’avoir
            eu aucun effet.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(historicityLabels).map(([key, v]) => (
              <div
                key={key}
                className="rounded-lg border p-4"
                style={{ borderColor: tint(v.color, 0.4), backgroundColor: tint(v.color, 0.05) }}
              >
                <p className="font-serif text-lg font-semibold" style={{ color: v.color }}>
                  {v.label}
                </p>
                <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-700">{v.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Les partis pris assumés">
          <div className="space-y-4">
            {[
              {
                t: 'Aucune tradition n’est présentée comme vraie ou fausse',
                d: "L’objectif est la compréhension, pas l’arbitrage. Une religion est décrite de l’intérieur (ce qu’elle veut dire, ce qu’elle rend possible) puis de l’extérieur (ce que l’histoire montre, ce que d’autres en pensent). Le lecteur tranche, ou ne tranche pas.",
              },
              {
                t: 'Les zones sombres ne sont pas escamotées',
                d: "Les textes d’extermination du livre de Josué, l’antijudaïsme de Jean Chrysostome et de Luther, les passages de Manu sur les femmes et les shudra, le soutien du zen au militarisme japonais, l’esclavage encadré plutôt qu’aboli : tout cela figure ici, dans les fiches des traditions concernées. Une présentation qui les omettrait serait une brochure, pas un outil de compréhension.",
              },
              {
                t: 'Les idées reçues sont traitées explicitement',
                d: "Chaque fiche de tradition comporte une section « idées reçues ». Beaucoup de ce qu’on croit savoir — Constantin choisissant les évangiles, la Wicca comme survivance immémoriale, l’islam répandu par l’épée, les 330 millions de dieux hindous — est faux, et la correction est plus utile que l’information supplémentaire.",
              },
              {
                t: 'Les sorties de religion font partie du tableau',
                d: "Les humanismes séculiers et les athéismes ont ici une fiche, parce que la sécularisation est l’une des trajectoires majeures de l’humanité contemporaine et que ses questions — le sens, le rite, la mort, la communauté — sont exactement celles des religions.",
              },
              {
                t: 'La comparaison prime sur l’accumulation',
                d: "Les fiches sont construites sur une trame identique précisément pour rendre la comparaison possible. Les pages « Comparaisons », « Influences » et « Notions » sont le cœur du site : c’est là que la compréhension se joue.",
              },
            ].map((x) => (
              <div key={x.t} className="card p-5">
                <h3 className="font-serif text-lg font-semibold text-ink-950">{x.t}</h3>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-ink-700">{x.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="L’atelier de traduction : ce qu’il fait et ne fait pas">
          <Prose>
            <p>
              La section <Link to="/atelier" className="link-underline">Atelier</Link> présente des
              passages dans leur écriture d’origine, avec translittération, rendu mot à mot et
              plusieurs traductions françaises datées. Trois précisions s’imposent.
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <strong>Le « mot à mot » n’est pas la vraie traduction.</strong> C’est un décalque,
                volontairement illisible, destiné à montrer l’ordre et la matière de la langue source.
                Le prendre pour le sens authentique que les traducteurs auraient dissimulé serait le
                contresens exact que cette section cherche à combattre : une langue ne se lit pas mot
                par mot.
              </li>
              <li>
                <strong>Les traductions retenues sont des jalons, pas un palmarès.</strong> Elles sont
                choisies parce qu’elles divergent de façon instructive — Vulgate contre Érasme,
                Segond contre Chouraqui, Blachère contre Berque — et non parce que l’une serait la
                bonne. Aucune n’est présentée comme définitive.
              </li>
              <li>
                <strong>Le corpus est un échantillon.</strong> Cinquante-six passages ne sont pas des
                bibles entières. Ils ont été retenus pour une raison : chacun porte une décision de
                traduction dont on peut suivre les conséquences historiques.
              </li>
            </ul>
            <p className="mt-4">
              Les textes originaux sont donnés d’après les éditions de référence courantes — texte
              massorétique pour l’hébreu, Nestle-Aland pour le grec du Nouveau Testament, édition du
              Caire pour le Coran, éditions critiques usuelles pour les corpus indiens et chinois. Les
              variantes manuscrites significatives sont signalées dans l’analyse, non dans le texte.
            </p>
          </Prose>
        </Section>

        <Section title="Les limites, honnêtement">
          <div className="space-y-4">
            <Callout tone="warning" label="Un site n’est pas une bibliothèque">
              Chaque fiche condense ce qui remplit des rayonnages entiers. Sur toute question qui vous
              intéresse vraiment, il faut aller lire les spécialistes. Les sections « recherche » de chaque
              texte indiquent les débats et les noms par lesquels commencer.
            </Callout>
            <Callout tone="warning" label="Un déséquilibre de couverture">
              Les traditions abrahamiques et indiennes sont ici mieux traitées que les traditions autochtones,
              africaines et océaniennes. Ce déséquilibre reflète l’état des sources écrites disponibles et la
              structure de la recherche académique — mais il reste un déséquilibre, et il déforme la
              représentation du fait religieux mondial.
            </Callout>
            <Callout tone="warning" label="Des chiffres approximatifs">
              Les effectifs de fidèles sont des estimations, souvent contestées, et parfois politiquement
              chargées (qui compte comme musulman, comme hindou, comme « sans religion » ?). Les dates
              anciennes sont des fourchettes, pas des faits.
            </Callout>
            <Callout tone="warning" label="Des mécanismes ne sont pas des causes">
              La page <Link to="/emergence" className="link-underline">Émergence</Link> décrit des
              régularités : crise fondatrice, routinisation du charisme, clôture du canon. Ces
              régularités éclairent des cas ; elles ne les expliquent pas entièrement et ne
              permettent aucune prédiction. Chaque mécanisme y est accompagné d’un encadré disant ce
              qu’il n’explique pas — cet encadré fait partie du contenu, pas de la politesse.
            </Callout>
            <Callout tone="warning" label="Un point de vue situé">
              Ce site est rédigé en français, avec un vocabulaire conceptuel largement issu de la tradition
              savante occidentale. Des notions comme « religion », « croyance », « foi » ou « sacré » ne sont
              pas neutres : elles ont une histoire chrétienne puis séculière, et elles déforment ce qu’elles
              décrivent quand on les applique au shintō, au confucianisme ou aux traditions autochtones. La
              page <Link to="/notions" className="link-underline">Notions</Link> signale ces déformations
              chaque fois qu’elle le peut.
            </Callout>
          </div>
        </Section>

        <Section title="Comment vérifier et approfondir">
          <Prose>
            <p>
              Quelques réflexes qui valent pour tout ce que vous lirez ici comme ailleurs :
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <strong>Datez la source, pas seulement l’événement.</strong> Un récit rédigé deux siècles après
                les faits n’a pas le même poids qu’un document contemporain. Les évangiles, la sira, les
                Janamsakhis et les Eddas sont tous dans ce cas.
              </li>
              <li>
                <strong>Demandez qui écrit et contre qui.</strong> Presque toute source ancienne est
                polémique. On ne connaît Arius que par ses adversaires, les gnostiques ne se lisent
                directement que depuis 1945, et les Celtes ne parlent que par la bouche de César.
              </li>
              <li>
                <strong>Distinguez emprunt, héritage et convergence.</strong> Trois explications possibles pour
                un parallèle, et trois manières de le prouver. La page{' '}
                <Link to="/comparaisons/deluges" className="link-underline">Le déluge et les mythes partagés</Link>{' '}
                détaille la méthode.
              </li>
              <li>
                <strong>Méfiez-vous des traductions.</strong> Les versions les plus vendues de Rumi en anglais
                effacent son islam ; « foi », « salut » et « âme » recouvrent des réalités très différentes
                selon les langues d’origine.
              </li>
              <li>
                <strong>Cherchez ce qu’une tradition dit de ses propres textes gênants.</strong> C’est le
                meilleur critère pour l’évaluer aujourd’hui — bien plus que son passé, que toutes partagent.
              </li>
            </ul>
          </Prose>
        </Section>

        <Section title="Signaler une erreur">
          <Prose>
            <p>
              Ce contenu est révisable. Si une affirmation vous paraît fausse, datée ou tendancieuse,
              c’est probablement le cas quelque part : un travail de cette ampleur contient nécessairement des
              approximations. Le contenu est stocké dans des fichiers de données séparés de l’interface
              (<code className="rounded bg-ink-100 px-1.5 py-0.5 text-[0.85em]">src/data/</code>), précisément
              pour pouvoir être corrigé sans toucher au reste.
            </p>
          </Prose>
        </Section>
      </div>
    </div>
  );
}
