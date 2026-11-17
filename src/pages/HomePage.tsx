import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import { subjects } from '../data/subjects'
import { questionPapers } from '../data/questionPapers'
import { useApp } from '../context/AppContext'

export function HomePage() {
  const { lang } = useApp()
  const lta = subjects.find((s) => s.id === 'lta')

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <div className="rounded-[2rem] border border-navy/10 bg-white p-8 dark:border-white/10 dark:bg-navy-soft">
        <h1 className="font-display text-4xl font-bold text-navy dark:text-cream">Kaliyona</h1>
        <p className="mt-2 text-lg text-teal">
          {lang === 'kn' ? 'ಪ್ರಶ್ನೆ ಕ್ಲಿಕ್ ಮಾಡಿ — ಉತ್ತರ ನೋಡಿ' : 'Click a question — read the answer'}
        </p>
        <p className="font-kannada mt-1 text-sm text-muted dark:text-cream/65">
          ಸರಳ. ಅನೇಕ ಹಂತಗಳಿಲ್ಲ.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/subjects/lta/p/lta-2025/paper"
            className="inline-flex flex-1 items-center justify-between gap-3 rounded-2xl bg-navy p-5 text-cream transition hover:bg-teal dark:bg-teal dark:hover:bg-teal-dark"
          >
            <span>
              <span className="block text-xs font-bold uppercase tracking-wide text-white/70">
                Q.P. 30201 · January 2025
              </span>
              <span className="mt-1 block font-semibold">
                {lta?.name ?? 'Learning, Teaching and Assessment'}
              </span>
              <span className="text-sm text-white/80">
                {lang === 'kn' ? '22 ಪ್ರಶ್ನೆಗಳು + ಉತ್ತರಗಳು' : '22 questions with full study answers'}
              </span>
            </span>
            <ArrowRight className="h-6 w-6 shrink-0" />
          </Link>
          <Link
            to="/subjects/lta"
            className="inline-flex flex-1 items-center justify-between gap-3 rounded-2xl border border-navy/15 bg-white p-5 text-navy transition hover:border-teal dark:border-white/15 dark:bg-navy-soft dark:text-cream"
          >
            <span>
              <span className="block text-xs font-bold uppercase tracking-wide text-teal">All LTA papers</span>
              <span className="mt-1 block font-semibold">2017 – 2025/26</span>
              <span className="text-sm text-muted dark:text-cream/70">
                {lang === 'kn' ? 'ಉಳಿದ ಪತ್ರಿಕೆಗಳು — ಪ್ರಶ್ನೆಗಳು ಮಾತ್ರ' : '11 more papers · questions listed'}
              </span>
            </span>
            <ArrowRight className="h-6 w-6 shrink-0 text-teal" />
          </Link>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="font-display text-xl font-bold text-navy dark:text-cream">
          {lang === 'kn' ? 'ಇತರ ವಿಷಯಗಳು' : 'Other subjects'}
        </h2>
        <p className="mt-1 text-sm text-muted dark:text-cream/60">
          Only verified papers are listed. Others appear when ready.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {subjects.map((s) =>
            s.status === 'available' ? (
              <Link
                key={s.id}
                to={`/subjects/${s.id}`}
                className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white p-4 dark:border-white/10 dark:bg-navy-soft"
              >
                <BookOpen className="h-5 w-5 text-teal" />
                <span className="text-sm font-semibold text-navy dark:text-cream">{s.name}</span>
              </Link>
            ) : (
              <div
                key={s.id}
                className="rounded-2xl border border-dashed border-navy/15 p-4 text-sm text-muted dark:border-white/15"
              >
                {s.name} — coming soon
              </div>
            ),
          )}
        </div>
      </section>

      {questionPapers.length > 0 && (
        <p className="mt-8 text-center text-xs text-muted dark:text-cream/50">
          Question wording from verified January 2025 paper · Answers are study models, not official keys.
        </p>
      )}
    </div>
  )
}