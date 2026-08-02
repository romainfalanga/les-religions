import { Link } from 'react-router-dom';
import { voices } from '../data/dialogue';
import { Callout, PageHeader } from '../components/ui';
import { tint } from '../lib/utils';

export default function Dialogues() {
  return (
    <div>
      <PageHeader
        eyebrow="Exercice de lecture"
        title="Parler aux textes"
        lead="Trois corpus mettent en scène une voix divine. Chacun a ses tics de langue, ses figures, ses refus — et chacun se contredit d’une couche à l’autre. Cette page vous permet d’interroger ces voix, de changer de couche textuelle, et de vérifier chaque réponse dans les passages qui l’ont produite."
      />

      <div className="container-page py-10">
        <Callout label="Ce que ceci est, et ce que ce n’est pas" tone="warning">
          <p>
            Vous n’allez pas parler à Dieu. Vous allez interroger une{' '}
            <strong>reconstitution littéraire</strong> : un modèle de langage contraint par un
            cahier des charges tiré des textes — vocabulaire, syntaxe, figures, interdits — et
            alimenté, à chaque question, par des passages précis qui vous sont montrés.
          </p>
          <p className="mt-2">
            Aucune autorité religieuse ne se trouve ici. Aucune révélation, aucun avis juridique,
            aucune prédiction. Si une réponse vous semble sonner faux, c’est le meilleur usage
            possible de cette page : ouvrez les passages fournis et vérifiez.
          </p>
        </Callout>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {voices.map((v) => (
            <Link
              key={v.id}
              to={`/dialogues/${v.id}`}
              className="card card-hover flex flex-col p-6"
              style={{ borderTopColor: v.color, borderTopWidth: 3 }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className={`${v.scriptClass} text-2xl`}
                  style={{ color: v.color }}
                  aria-hidden
                >
                  {v.script}
                </span>
                <h2 className="font-serif text-xl font-semibold text-ink-950">{v.name}</h2>
              </div>
              <p className="mt-1 text-sm text-ink-500">{v.subtitle}</p>
              <p className="prose-serif mt-3 flex-1 text-[0.95rem]">{v.intro}</p>

              <div className="mt-4 border-t border-ink-100 pt-3">
                <p className="eyebrow mb-2">Registres disponibles</p>
                <div className="flex flex-wrap gap-1.5">
                  {v.registers.map((r) => (
                    <span
                      key={r.id}
                      className="chip"
                      style={{
                        borderColor: tint(v.color, 0.35),
                        backgroundColor: tint(v.color, 0.08),
                        color: v.color,
                      }}
                    >
                      {r.label}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-ink-500">
                  {v.anchors.length} passages de référence · {v.corpus}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="font-serif text-xl font-semibold text-ink-950">
              Pourquoi des « registres » ?
            </h2>
            <p className="prose-serif mt-3 text-[0.97rem]">
              Parce qu’aucun de ces corpus n’a une voix unique. Le Dieu qui légifère dans le
              Deutéronome et celui qui répond à Job par des questions sans réponse ne parlent pas
              de la même manière et ne promettent pas les mêmes choses. Le Jésus des paraboles de
              Marc et le « je suis » solennel de Jean non plus. Les sourates mecquoises, brèves et
              scandées, ne ressemblent pas aux longues sourates juridiques de Médine.
            </p>
            <p className="prose-serif mt-3 text-[0.97rem]">
              Poser la même question à deux registres du même corpus est l’exercice le plus
              instructif de cette page : il rend palpable ce que trois mille pages d’histoire des
              religions expliquent — un texte sacré n’est pas un bloc, c’est une bibliothèque en
              débat avec elle-même.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="font-serif text-xl font-semibold text-ink-950">Comment c’est fabriqué</h2>
            <ol className="mt-3 space-y-2.5 text-[0.92rem] leading-relaxed text-ink-700">
              <li>
                <strong>1.</strong> Votre question est analysée et comparée aux mots-clés d’une
                trentaine de passages du corpus.
              </li>
              <li>
                <strong>2.</strong> Les passages les plus proches sont sélectionnés — en privilégiant
                le registre choisi, sans exclure les autres.
              </li>
              <li>
                <strong>3.</strong> Un cahier des charges est assemblé : auto-désignations attestées,
                règles de forme, lexique avec ses sens exacts, contraintes doctrinales, refus, et
                erreurs d’imitation à éviter.
              </li>
              <li>
                <strong>4.</strong> Le modèle répond sous cette contrainte, et doit déclarer les
                passages employés. Ils vous sont affichés sous la réponse.
              </li>
            </ol>
            <p className="mt-4 text-xs text-ink-500">
              L’intégralité du cahier des charges est consultable depuis chaque conversation :
              rien n’est caché.
            </p>
          </div>
        </section>

        <div className="mt-8">
          <Callout label="À lire d’abord si vous découvrez le sujet" tone="info">
            Ces voix supposent qu’on sache d’où elles viennent. Le{' '}
            <Link to="/cours" className="link-underline">cours en douze chapitres</Link> retrace
            comment chacun de ces trois Dieu a été formulé, et par qui. L’
            <Link to="/atelier" className="link-underline">atelier de traduction</Link> montre à quel
            point le français que vous lirez ici est déjà une interprétation.
          </Callout>
        </div>
      </div>
    </div>
  );
}
