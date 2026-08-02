import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { concepts } from '../data/concepts';
import { traditionColor, traditionName } from '../data/traditions';
import { Callout, PageHeader } from '../components/ui';
import { normalize, tint } from '../lib/utils';

export default function Concepts() {
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    const nq = normalize(q.trim());
    const sorted = [...concepts].sort((a, b) => a.term.localeCompare(b.term, 'fr'));
    if (nq.length < 2) return sorted;
    return sorted.filter((c) =>
      normalize([c.term, c.original ?? '', c.definition, c.elaboration].join(' ')).includes(nq),
    );
  }, [q]);

  return (
    <div>
      <PageHeader
        eyebrow={`${concepts.length} notions`}
        title="Glossaire raisonné"
        lead="Les mots qui font trébucher. Chaque notion est définie, développée, mise en regard de ses équivalents dans d’autres traditions — et, quand c’est nécessaire, accompagnée du faux ami qui la déforme dans l’usage courant."
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Chercher une notion…"
          className="w-full max-w-sm rounded-full border border-ink-200 bg-white/60 px-4 py-2 text-sm outline-none focus:border-ink-400"
        />
      </PageHeader>

      <div className="container-page py-10">
        <nav className="mb-10 flex flex-wrap gap-1.5">
          {list.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-ink-200 bg-white/60 px-3 py-1 text-xs text-ink-600 transition hover:border-ink-400 hover:text-ink-950"
            >
              {c.term}
            </a>
          ))}
        </nav>

        <div className="space-y-6">
          {list.map((c) => (
            <article key={c.id} id={c.id} className="card scroll-mt-24 p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="font-serif text-2xl font-semibold text-ink-950">{c.term}</h2>
                {c.original && <span className="font-serif text-sm text-ink-500">{c.original}</span>}
              </div>

              {c.traditions.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.traditions.map((t) => (
                    <Link
                      key={t}
                      to={`/traditions/${t}`}
                      className="chip transition hover:opacity-80"
                      style={{
                        borderColor: tint(traditionColor(t), 0.35),
                        backgroundColor: tint(traditionColor(t), 0.08),
                        color: traditionColor(t),
                      }}
                    >
                      {traditionName(t)}
                    </Link>
                  ))}
                </div>
              )}

              <p className="mt-4 font-serif text-[1.05rem] font-medium text-ink-900">{c.definition}</p>
              <p className="prose-serif mt-3">{c.elaboration}</p>

              {c.parallels.length > 0 && (
                <div className="mt-5">
                  <h3 className="eyebrow mb-2.5">Équivalents et parallèles</h3>
                  <div className="space-y-2">
                    {c.parallels.map((p) => (
                      <div
                        key={p.term}
                        className="flex flex-col gap-1 rounded-md border border-ink-200 bg-white/50 px-4 py-2.5 sm:flex-row sm:gap-4"
                      >
                        <div className="sm:w-56 sm:shrink-0">
                          <span
                            className="text-[0.7rem] uppercase tracking-wide"
                            style={{ color: traditionColor(p.tradition) }}
                          >
                            {traditionName(p.tradition)}
                          </span>
                          <p className="font-serif text-sm font-semibold text-ink-900">{p.term}</p>
                        </div>
                        <p className="text-[0.88rem] leading-relaxed text-ink-700">{p.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {c.falseFriend && (
                <div className="mt-5">
                  <Callout tone="warning" label="Faux ami">
                    {c.falseFriend}
                  </Callout>
                </div>
              )}

              {c.related.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-ink-100 pt-4">
                  <span className="text-[0.7rem] uppercase tracking-wide text-ink-400">Voir aussi</span>
                  {c.related.map((r) => (
                    <a
                      key={r}
                      href={`#${r}`}
                      className="rounded-full border border-ink-200 px-2.5 py-0.5 text-xs text-ink-600 transition hover:border-ink-400"
                    >
                      {concepts.find((x) => x.id === r)?.term ?? r}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {list.length === 0 && <p className="py-16 text-center text-sm text-ink-500">Aucune notion ne correspond.</p>}
      </div>
    </div>
  );
}
