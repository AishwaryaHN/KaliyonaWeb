import { Link } from 'react-router-dom'
import { BookOpen, Brain, Globe, Heart, Monitor, Wrench } from 'lucide-react'
import type { Subject } from '../data/subjects'
import { useApp } from '../context/AppContext'

const icons = {
  brain: Brain,
  book: BookOpen,
  globe: Globe,
  tools: Wrench,
  monitor: Monitor,
  heart: Heart,
}

export function SubjectCard({ subject }: { subject: Subject }) {
  const { lang } = useApp()
  const Icon = icons[subject.icon]
  const available = subject.status === 'available'

  const content = (
    <article
      className={`group relative overflow-hidden rounded-3xl border p-5 transition ${
        available
          ? 'border-navy/10 bg-white shadow-sm hover:-translate-y-1 hover:border-teal hover:shadow-lg dark:border-white/10 dark:bg-navy-soft'
          : 'cursor-not-allowed border-dashed border-navy/15 bg-white/60 opacity-80 dark:border-white/10 dark:bg-navy/40'
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/15 text-teal">
          <Icon className="h-6 w-6" />
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            available
              ? 'bg-teal/15 text-teal-dark dark:text-teal'
              : 'bg-navy/5 text-muted dark:bg-white/10 dark:text-cream/60'
          }`}
        >
          {available ? (lang === 'kn' ? 'ಲಭ್ಯ' : 'Available') : lang === 'kn' ? 'ಶೀಘ್ರದಲ್ಲೇ' : 'Coming soon'}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-navy dark:text-cream">
        {lang === 'kn' ? subject.nameKn : subject.name}
      </h3>
      {subject.code && (
        <p className="mt-1 text-xs font-semibold tracking-wide text-blue-soft">Code {subject.code}</p>
      )}
      <p className="font-kannada mt-3 text-sm leading-relaxed text-muted dark:text-cream/70">
        {lang === 'kn' ? subject.blurbKn : subject.blurb}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-navy/70 dark:text-cream/70">
        <span className="rounded-full bg-cream px-2.5 py-1 dark:bg-navy">
          {subject.paperCount} {lang === 'kn' ? 'ಪತ್ರಿಕೆ' : 'paper(s)'}
        </span>
        {subject.years.map((y) => (
          <span key={y} className="rounded-full bg-accent/15 px-2.5 py-1 text-accent">
            {y}
          </span>
        ))}
      </div>
    </article>
  )

  if (!available) return content
  return <Link to={`/subjects/${subject.id}`}>{content}</Link>
}
