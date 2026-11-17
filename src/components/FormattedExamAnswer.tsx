import type { ReactNode } from 'react'

const PART_LINE = /^\(([a-z])\)\s*(.*)$/i
const NUMBERED = /^(\d+)\.\s+(.+)$/
const LETTERED = /^([A-Z])\.\s+(.+)$/
const STANDALONE_HEADER = /^([A-Za-z0-9][^:]{1,72}):\s*$/
const LABEL_LINE =
  /^(Introduction|Conclusion|Importance of[^:]*|Procedure of the Experiment|Steps of the Experiment|Five levels of|Educational Implications|Characteristics of|How to Foster|Important Maxims|Main laws|Three Dimensions|Three stages|Stages of|Meaning of|Types of|Procedure|Before Conditioning|During Conditioning|After Conditioning|Definition|Influence of|Differences between|Ways to Develop|Characteristics of Creative|Laws of Learning According to|Thorndike's Experiment|Kohler's Experiment|Maslow's Hierarchy|Five Levels of|Important activities|Procedure of the Experiment|Use the comparison table)[^:]*:\s*(.*)$/i
const MAJOR_SECTION =
  /^(\d+)\.\s+((?:Leadership Role|Importance|Stages|Five levels|Three Dimensions|Operations|Contents|Products).+)$/i

type SectionTheme =
  | 'intro'
  | 'conclusion'
  | 'implications'
  | 'meaning'
  | 'factors'
  | 'external'
  | 'internal'
  | 'importance'
  | 'types'
  | 'stages'
  | 'experiment'
  | 'definition'
  | 'comparison'
  | 'default'

const THEME_STYLES: Record<SectionTheme, { card: string; title: string }> = {
  intro: {
    card: 'bg-sky-50/90 border-sky-200/70 dark:bg-sky-950/40 dark:border-sky-500/30',
    title: 'text-sky-800 dark:text-sky-200',
  },
  conclusion: {
    card: 'bg-emerald-50/90 border-emerald-200/70 dark:bg-emerald-950/35 dark:border-emerald-500/30',
    title: 'text-emerald-800 dark:text-emerald-200',
  },
  implications: {
    card: 'bg-amber-50/90 border-amber-200/70 dark:bg-amber-950/35 dark:border-amber-500/30',
    title: 'text-amber-900 dark:text-amber-200',
  },
  meaning: {
    card: 'bg-violet-50/90 border-violet-200/70 dark:bg-violet-950/35 dark:border-violet-500/30',
    title: 'text-violet-800 dark:text-violet-200',
  },
  factors: {
    card: 'bg-teal-50/90 border-teal-200/60 dark:bg-teal-950/35 dark:border-teal-500/25',
    title: 'text-teal-900 dark:text-teal-200',
  },
  external: {
    card: 'bg-cyan-50/80 border-cyan-200/60 dark:bg-cyan-950/30 dark:border-cyan-500/25',
    title: 'text-cyan-900 dark:text-cyan-200',
  },
  internal: {
    card: 'bg-indigo-50/80 border-indigo-200/60 dark:bg-indigo-950/30 dark:border-indigo-500/25',
    title: 'text-indigo-900 dark:text-indigo-200',
  },
  importance: {
    card: 'bg-rose-50/80 border-rose-200/60 dark:bg-rose-950/30 dark:border-rose-500/25',
    title: 'text-rose-900 dark:text-rose-200',
  },
  types: {
    card: 'bg-fuchsia-50/80 border-fuchsia-200/55 dark:bg-fuchsia-950/30 dark:border-fuchsia-500/25',
    title: 'text-fuchsia-900 dark:text-fuchsia-200',
  },
  stages: {
    card: 'bg-lime-50/80 border-lime-200/55 dark:bg-lime-950/25 dark:border-lime-500/20',
    title: 'text-lime-900 dark:text-lime-200',
  },
  experiment: {
    card: 'bg-orange-50/85 border-orange-200/65 dark:bg-orange-950/30 dark:border-orange-500/25',
    title: 'text-orange-900 dark:text-orange-200',
  },
  definition: {
    card: 'bg-violet-50/90 border-violet-200/70 dark:bg-violet-950/35 dark:border-violet-500/30',
    title: 'text-violet-800 dark:text-violet-200',
  },
  comparison: {
    card: 'bg-slate-100/90 border-slate-200/70 dark:bg-slate-900/50 dark:border-slate-500/25',
    title: 'text-slate-800 dark:text-slate-200',
  },
  default: {
    card: 'bg-white/80 border-navy/8 dark:bg-navy-soft/50 dark:border-white/10',
    title: 'text-navy dark:text-cream',
  },
}

function sectionThemeForTitle(title: string): SectionTheme {
  const t = title.toLowerCase().replace(/:\s*$/, '').trim()
  if (t === 'introduction') return 'intro'
  if (t === 'conclusion') return 'conclusion'
  if (t.includes('educational implication')) return 'implications'
  if (t.startsWith('meaning of') || t === 'definition') return 'meaning'
  if (t.includes('external factor')) return 'external'
  if (t.includes('internal factor')) return 'internal'
  if (t.includes('factor') && t.includes('affecting')) return 'factors'
  if (t.includes('physical environment') || t.includes('psychological environment')) return 'factors'
  if (t.startsWith('importance of')) return 'importance'
  if (t.includes('types of') || t === 'types of thinking' || t === 'types of motivation') return 'types'
  if (t.includes('stages of') || t.includes('stages of learning') || t.includes('stages of teaching')) return 'stages'
  if (t.includes('experiment') || t.includes('procedure of')) return 'experiment'
  if (t.includes('difference')) return 'comparison'
  if (t.includes('influence of')) return 'factors'
  if (t.includes('laws of learning')) return 'importance'
  if (t.includes('five levels') || t.includes('maslow')) return 'stages'
  if (t.includes('characteristics')) return 'types'
  if (t.includes('ways to develop')) return 'implications'
  if (t.includes('maxims')) return 'stages'
  if (t.includes('leadership role')) return 'stages'
  return 'default'
}

function isNumberedSectionHeader(rest: string): boolean {
  if (!rest.trim().endsWith(':')) return false
  const title = rest.trim().slice(0, -1)
  if (/\b(is|are|was|were)\b/i.test(title)) return false
  if (title.split(/\s+/).length > 8) return false
  return true
}

function ListItem({ text }: { text: string }) {
  const m = text.match(/^([^:]+):\s*(.+)$/)
  if (m && m[2].length > 8) {
    return (
      <li className="leading-relaxed">
        <span className="font-semibold text-navy dark:text-cream">{m[1]}:</span> {m[2]}
      </li>
    )
  }
  return <li className="leading-relaxed">{text}</li>
}

function PartHeader({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-2 border-b border-navy/12 pb-3 dark:border-white/12">
      <span className="shrink-0 rounded-lg bg-navy px-2.5 py-1 font-display text-sm font-bold uppercase tracking-wide text-cream dark:bg-teal">
        {letter}
      </span>
      {title ? (
        <h3 className="text-base font-semibold leading-snug text-navy dark:text-cream">{title}</h3>
      ) : null}
    </div>
  )
}

function SectionCard({
  title,
  theme,
  children,
}: {
  title: string
  theme: SectionTheme
  children: ReactNode
}) {
  const styles = THEME_STYLES[theme]
  return (
    <section
      className={`rounded-xl border px-3 py-2.5 sm:px-3.5 sm:py-3 ${styles.card}`}
    >
      <h4
        className={`text-[11px] font-bold uppercase tracking-[0.14em] ${styles.title}`}
      >
        {title.replace(/:\s*$/, '')}
      </h4>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  )
}

function flushParagraph(buf: string[], target: ReactNode[], key: () => string) {
  const t = buf.join(' ').trim()
  buf.length = 0
  if (!t) return
  if (/^use the comparison table/i.test(t)) return
  target.push(
    <p key={key()} className="text-sm leading-relaxed text-navy/95 dark:text-cream/92">
      {t}
    </p>,
  )
}

function flushList(items: string[], target: ReactNode[], key: () => string, ordered = true) {
  if (items.length === 0) return
  if (ordered) {
    target.push(
      <ol
        key={key()}
        className="list-decimal space-y-1.5 pl-5 text-sm text-navy/95 marker:font-semibold marker:text-teal dark:text-cream/92"
      >
        {items.map((item, i) => (
          <ListItem key={i} text={item} />
        ))}
      </ol>,
    )
  } else {
    target.push(
      <ul
        key={key()}
        className="list-disc space-y-1 pl-5 text-sm text-navy/95 dark:text-cream/92"
      >
        {items.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>,
    )
  }
  items.length = 0
}

export function FormattedExamAnswer({ text }: { text: string }) {
  const lines = text.split('\n')
  const out: ReactNode[] = []

  let sectionNodes: ReactNode[] = []
  let sectionTitle: string | null = null
  let sectionTheme: SectionTheme = 'default'

  let paraBuf: string[] = []
  let listBuf: string[] = []
  let bulletBuf: string[] = []

  let partNodes: ReactNode[] = []
  let partLetter: string | null = null

  let keyN = 0
  const key = () => `ans-${keyN++}`

  const target = () => (partLetter !== null ? partNodes : sectionNodes)

  const flushSection = () => {
    if (sectionNodes.length === 0 && !sectionTitle) return
    const title = sectionTitle ?? 'Answer'
    out.push(
      <SectionCard key={key()} title={title} theme={sectionTheme}>
        {sectionNodes}
      </SectionCard>,
    )
    sectionNodes = []
    sectionTitle = null
    sectionTheme = 'default'
  }

  const beginSection = (title: string) => {
    flushSection()
    sectionTitle = title.replace(/:\s*$/, '').trim()
    sectionTheme = sectionThemeForTitle(sectionTitle)
  }

  const flushPart = () => {
    flushList(listBuf, partNodes, key)
    flushList(bulletBuf, partNodes, key, false)
    flushParagraph(paraBuf, partNodes, key)
    if (partLetter !== null && partNodes.length > 0) {
      out.push(
        <section key={key()} className="space-y-3">
          {partNodes}
        </section>,
      )
    } else if (partNodes.length > 0) {
      partNodes.forEach((n) => out.push(n))
    }
    partNodes = []
    partLetter = null
  }

  const tryStandaloneHeader = (trimmed: string): boolean => {
    if (/^\d+\.\s/.test(trimmed)) return false
    if (/^[A-Z]\.\s/.test(trimmed)) return false
    const m = trimmed.match(STANDALONE_HEADER)
    if (!m) return false
    const title = m[1].trim()
    beginSection(title)
    return true
  }

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i]?.trim() ?? ''
    if (!trimmed) {
      flushList(listBuf, target(), key)
      flushList(bulletBuf, target(), key, false)
      flushParagraph(paraBuf, target(), key)
      continue
    }

    if (trimmed.startsWith('- ')) {
      flushParagraph(paraBuf, target(), key)
      bulletBuf.push(trimmed.slice(2).trim())
      continue
    }

    const partMatch = trimmed.match(PART_LINE)
    if (partMatch) {
      flushSection()
      flushPart()
      partLetter = partMatch[1].toUpperCase()
      partNodes.push(
        <div key={key()} className="mb-2">
          <PartHeader letter={partLetter} title={partMatch[2].trim()} />
        </div>,
      )
      continue
    }

    if (tryStandaloneHeader(trimmed)) continue

    const labelMatch = trimmed.match(LABEL_LINE)
    if (labelMatch) {
      flushList(listBuf, target(), key)
      flushList(bulletBuf, target(), key, false)
      flushParagraph(paraBuf, target(), key)
      beginSection(`${labelMatch[1]}:`)
      const rest = labelMatch[2]?.trim()
      if (rest) {
        target().push(
          <p key={key()} className="text-sm leading-relaxed text-navy/95 dark:text-cream/92">
            {rest}
          </p>,
        )
      }
      continue
    }

    const major = trimmed.match(MAJOR_SECTION)
    if (major && !trimmed.includes(': A ')) {
      flushList(listBuf, target(), key)
      flushList(bulletBuf, target(), key, false)
      flushParagraph(paraBuf, target(), key)
      beginSection(major[2].trim())
      continue
    }

    const numMatch = trimmed.match(NUMBERED)
    if (numMatch) {
      const rest = numMatch[2]
      if (isNumberedSectionHeader(rest)) {
        flushList(listBuf, target(), key)
        flushList(bulletBuf, target(), key, false)
        flushParagraph(paraBuf, target(), key)
        beginSection(rest.replace(/:\s*$/, ''))
        continue
      }
      flushParagraph(paraBuf, target(), key)
      listBuf.push(rest)
      continue
    }

    const letterMatch = trimmed.match(LETTERED)
    if (letterMatch) {
      flushParagraph(paraBuf, target(), key)
      listBuf.push(`${letterMatch[1]}. ${letterMatch[2]}`)
      continue
    }

    paraBuf.push(trimmed)
  }

  flushList(listBuf, target(), key)
  flushList(bulletBuf, target(), key, false)
  flushParagraph(paraBuf, target(), key)
  flushSection()
  flushPart()

  if (out.length === 0) {
    return (
      <p className="whitespace-pre-line text-sm leading-relaxed text-navy dark:text-cream/95">{text}</p>
    )
  }

  return <div className="space-y-2.5">{out}</div>
}