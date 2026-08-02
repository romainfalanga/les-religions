import { Link, useParams } from 'react-router-dom';
import { getText, textsById } from '../data/texts';
import { traditionColor, traditionName } from '../data/traditions';
import { figures } from '../data/figures';
import { Callout, Prose, QuoteBlock, Section, SectionList } from '../components/ui';
import { tint } from '../lib/utils';
import NotFound from './NotFound';

export default function TextDetail() {
  const { id } = useParams();
  const t = id ? getText(id) : undefined;
  if (!t) return <NotFound />;

  const color = t.traditions[0] ? traditionColor(t.traditions[0]) : '#8d7f68';
  const relatedFigures = figures.filter((f) => f.texts.includes(t.id));

  return (
    <article>
      <header className="border-b border-ink-200" style={{ backgroundColor: tint(color, 0.06) }}>
        <div className="container-page py-10 sm:py-14">
          <Link to="/textes" className="text-xs text-ink-500 hover:text-ink-800">
            ← Tous les textes
          </Link>
          <h1 className="mt-5 font-serif text-3xl font-semibold text-ink-950 sm:text-[2.6rem]">{t.title}</h1>
          {t.originalTitle && <p className="mt-1 font-serif text-lg text-ink-500">{t.originalTitle}</p>}

          <div className="mt-5 flex flex-wrap gap-2">
            {t.traditions.map((tr) => (
              <Link
                key={tr}
                to={`/traditions/${tr}`}
                className="chip transition hover:opacity-80"
                style={{
                  borderColor: tint(traditionColor(tr), 0.4),
                  backgroundColor: tint(traditionColor(tr), 0.1),
                  color: traditionColor(tr),
                }}
              >
                {traditionName(tr)}
              </Link>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-ink-200/70 pt-6 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-ink-400">Composition</dt>
              <dd className="mt-1 text-ink-800">{t.composed}</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-ink-400">Langue</dt>
              <dd className="mt-1 text-ink-800">{t.language}</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-ink-400">Genre</dt>
              <dd className="mt-1 text-ink-800">{t.genre}</dd>
            </div>
            {t.length && (
              <div>
                <dt className="text-[0.7rem] uppercase tracking-wide text-ink-400">Ampleur</dt>
                <dd className="mt-1 text-ink-800">{t.length}</dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      <div className="container-page">
        <Section>
          <Prose>
            <p className="text-[1.08rem]">{t.summary}</p>
          </Prose>
        </Section>

        <Section title="Structure" id="structure">
          <div className="space-y-3">
            {t.structure.map((s) => (
              <div key={s.part} className="card flex flex-col gap-1.5 p-5 sm:flex-row sm:gap-6">
                <h3 className="font-serif text-base font-semibold text-ink-950 sm:w-60 sm:shrink-0">{s.part}</h3>
                <p className="text-[0.93rem] leading-relaxed text-ink-700">{s.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Enseignements majeurs" id="enseignements">
          <SectionList items={t.keyTeachings} />
        </Section>

        {t.passages.length > 0 && (
          <Section title="Passages" id="passages">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {t.passages.map((p) => (
                <QuoteBlock key={p.text} {...p} />
              ))}
            </div>
          </Section>
        )}

        <Section title="Transmission" id="transmission" subtitle="L’histoire matérielle du texte : manuscrits, canonisation, diffusion.">
          <Prose>
            <p>{t.transmission}</p>
          </Prose>
        </Section>

        <Section title="Ce qu’en dit la recherche" id="recherche">
          <Callout tone="info" label="Regard critique">
            {t.scholarship}
          </Callout>
        </Section>

        <Section title="Comment le lire" id="lecture">
          <Callout tone="warning" label="Conseils de lecture">
            {t.howToRead}
          </Callout>
        </Section>

        {t.relatedTexts.filter((r) => textsById.has(r)).length > 0 && (
          <Section title="Textes liés" id="textes-lies">
            <div className="flex flex-wrap gap-2">
              {t.relatedTexts
                .filter((r) => textsById.has(r))
                .map((r) => (
                  <Link
                    key={r}
                    to={`/textes/${r}`}
                    className="rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 text-xs text-ink-700 transition hover:border-ink-400 hover:text-ink-950"
                  >
                    {textsById.get(r)!.title}
                  </Link>
                ))}
            </div>
          </Section>
        )}

        {relatedFigures.length > 0 && (
          <Section title="Personnages associés" id="personnages">
            <div className="flex flex-wrap gap-2">
              {relatedFigures.map((f) => (
                <Link
                  key={f.id}
                  to={`/personnages/${f.id}`}
                  className="rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 text-xs text-ink-700 transition hover:border-ink-400 hover:text-ink-950"
                >
                  {f.name}
                </Link>
              ))}
            </div>
          </Section>
        )}
      </div>
    </article>
  );
}
