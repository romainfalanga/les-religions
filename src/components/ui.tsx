import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cx, tint } from '../lib/utils';

export function Chip({
  children,
  color,
  className,
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  if (!color) {
    return <span className={cx('chip border-ink-200 bg-ink-50 text-ink-700', className)}>{children}</span>;
  }
  return (
    <span
      className={cx('chip', className)}
      style={{ borderColor: tint(color, 0.35), backgroundColor: tint(color, 0.1), color }}
    >
      {children}
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-ink-200 bg-gradient-to-b from-white/80 to-transparent py-10 sm:py-14">
      <div className="container-page">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="font-serif text-3xl font-semibold leading-tight text-ink-950 sm:text-[2.6rem]">
          {title}
        </h1>
        {lead && <p className="prose-serif mt-4 max-w-3xl text-ink-700">{lead}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </header>
  );
}

export function Section({
  title,
  subtitle,
  children,
  id,
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-8 sm:py-10">
      {title && (
        <div className="mb-5">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="mt-1.5 max-w-3xl text-sm text-ink-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-serif max-w-3xl">{children}</div>;
}

export function SectionList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="space-y-5">
      {items.map((s) => (
        <article key={s.title} className="border-l-2 border-ink-200 pl-5">
          <h3 className="font-serif text-lg font-semibold text-ink-950">{s.title}</h3>
          <p className="prose-serif mt-1.5">{s.text}</p>
        </article>
      ))}
    </div>
  );
}

export function QuoteBlock({
  text,
  source,
  comment,
}: {
  text: string;
  source: string;
  comment?: string;
}) {
  return (
    <figure className="rounded-lg border border-ink-200 bg-white/60 p-5">
      <blockquote className="font-serif text-[1.05rem] italic leading-relaxed text-ink-900">
        « {text} »
      </blockquote>
      <figcaption className="mt-2.5 text-xs text-ink-500">
        {source}
        {comment && <span className="mt-1 block not-italic text-ink-600">{comment}</span>}
      </figcaption>
    </figure>
  );
}

export function Callout({
  label,
  tone = 'neutral',
  children,
}: {
  label?: string;
  tone?: 'neutral' | 'warning' | 'info';
  children: ReactNode;
}) {
  const tones = {
    neutral: 'border-ink-300 bg-ink-50',
    warning: 'border-amber-300/70 bg-amber-50/70',
    info: 'border-sky-300/60 bg-sky-50/60',
  } as const;
  return (
    <div className={cx('rounded-lg border-l-4 p-4 sm:p-5', tones[tone])}>
      {label && <p className="eyebrow mb-1.5">{label}</p>}
      <div className="text-[0.95rem] leading-relaxed text-ink-800">{children}</div>
    </div>
  );
}

export function CardLink({
  to,
  children,
  className,
  style,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Link to={to} className={cx('card card-hover block p-5', className)} style={style}>
      {children}
    </Link>
  );
}

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-lg border border-dashed border-ink-300 bg-white/40 px-6 py-12 text-center text-sm text-ink-500">
      {message}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-2xl font-semibold text-ink-950">{value}</div>
      <div className="mt-0.5 text-xs uppercase tracking-wide text-ink-500">{label}</div>
    </div>
  );
}
