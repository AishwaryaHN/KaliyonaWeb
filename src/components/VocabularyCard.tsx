import type { VocabularyEntry } from '../data/vocabulary'

export function VocabularyCard({ entry }: { entry: VocabularyEntry }) {
  return (
    <article className="rounded-2xl border border-navy/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-navy-soft">
      <h4 className="text-base font-bold text-navy dark:text-cream">{entry.word}</h4>
      <p className="font-kannada mt-1 text-lg font-semibold text-teal">{entry.kannada}</p>
      <p className="font-kannada mt-2 text-sm leading-relaxed text-muted dark:text-cream/75">
        {entry.simple}
      </p>
      <p className="mt-3 rounded-xl bg-cream/80 px-3 py-2 text-xs text-navy dark:bg-navy dark:text-cream/85">
        <span className="font-semibold">Example:</span> {entry.example}
      </p>
      {entry.pronunciation && (
        <p className="mt-2 text-xs text-muted dark:text-cream/55">Pronounce: {entry.pronunciation}</p>
      )}
    </article>
  )
}
