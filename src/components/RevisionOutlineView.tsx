import type { RevisionOutline } from '../data/lta2025RevisionOutlines'

const OUTLINE_THEMES: Record<string, string> = {
  introduction: 'bg-sky-50/90 border-sky-200/70 dark:bg-sky-950/40 dark:border-sky-500/30',
  conclusion: 'bg-emerald-50/90 border-emerald-200/70 dark:bg-emerald-950/35 dark:border-emerald-500/30',
  answer: 'bg-white/80 border-navy/8 dark:bg-navy-soft/50 dark:border-white/10',
}

function themeForLabel(label: string): string {
  const t = label.toLowerCase()
  if (t.includes('introduction')) return OUTLINE_THEMES.introduction
  if (t.includes('conclusion')) return OUTLINE_THEMES.conclusion
  if (t.includes('implication')) return 'bg-amber-50/90 border-amber-200/70 dark:bg-amber-950/35 dark:border-amber-500/30'
  if (t.includes('factor') || t.includes('environment')) {
    return 'bg-teal-50/90 border-teal-200/60 dark:bg-teal-950/35 dark:border-teal-500/25'
  }
  if (t.includes('meaning') || t.includes('definition')) {
    return 'bg-violet-50/90 border-violet-200/70 dark:bg-violet-950/35 dark:border-violet-500/30'
  }
  if (t.includes('experiment') || t.includes('stage')) {
    return 'bg-lime-50/80 border-lime-200/55 dark:bg-lime-950/25 dark:border-lime-500/20'
  }
  return OUTLINE_THEMES.answer
}

export function RevisionOutlineView({ outline }: { outline: RevisionOutline }) {
  return (
    <div className="mt-2 space-y-2.5">
      <p className="text-xs text-muted dark:text-cream/55">
        Same bullet points as the full answer — quick pass revision.
      </p>
      {outline.sections.map((section) => (
        <OutlineSection key={section.label} label={section.label} points={section.points} />
      ))}
      {outline.hint ? (
        <p className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-3 py-2 text-xs text-amber-900 dark:text-amber-100">
          {outline.hint}
        </p>
      ) : null}
    </div>
  )
}

function OutlineSection({ label, points }: { label: string; points: string[] }) {
  const partMatch = label.match(/^\(([a-z])\)/i)
  const cardClass = themeForLabel(label)
  return (
    <div className={`rounded-xl border px-3 py-2.5 ${cardClass}`}>
      <div className="flex flex-wrap items-center gap-2">
        {partMatch ? (
          <span className="rounded-md bg-navy px-2 py-0.5 text-xs font-bold uppercase text-cream dark:bg-teal">
            {partMatch[1].toUpperCase()}
          </span>
        ) : null}
        <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-navy dark:text-cream">
          {label.replace(/^\([a-z]\)\s*/i, '')}
        </h3>
      </div>
      <ul className="mt-2 space-y-1.5">
        {points.map((point) => (
          <li
            key={point}
            className="flex gap-2 text-sm text-navy/90 before:shrink-0 before:font-bold before:text-teal before:content-['•'] dark:text-cream/85"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}