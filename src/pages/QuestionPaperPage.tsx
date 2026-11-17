import { Link, useParams, useLocation } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react'
import { getPaper } from '../data/questionPapers'
import { QuestionCard } from '../components/QuestionCard'
import { useApp } from '../context/AppContext'
import { PaperContextNav } from '../components/PaperContextNav'

export function QuestionPaperPage() {
  const { subjectId = '', paperId = '' } = useParams()
  const { lang } = useApp()
  const location = useLocation()
  const paper = getPaper(paperId)
  const hashPart = location.hash.match(/^#part-([ABC])$/)?.[1] as 'A' | 'B' | 'C' | undefined

  if (!paper || paper.subjectId !== subjectId) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-lg font-semibold text-navy dark:text-cream">Paper not found</p>
        <Link to={`/subjects/${subjectId}`} className="mt-4 inline-block text-teal">
          Back to subject
        </Link>
      </div>
    )
  }

  const totalQuestions = paper.parts.reduce((n, p) => n + p.questions.length, 0)

  return (
    <div className="pb-8">
      <PaperContextNav
        subjectId={subjectId}
        paperId={paperId}
        variant="paper"
        activePart={hashPart}
      />

      <div className="mx-auto max-w-5xl px-4 pt-6">
      <Link
        to={`/subjects/${subjectId}`}
        className="inline-flex items-center gap-2 text-sm text-blue-soft"
      >
        <ArrowLeft className="h-4 w-4" /> All papers
      </Link>

      <header className="mt-4 rounded-[2rem] border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-navy-soft">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Q.P. Code {paper.code}</p>
        <h1 className="font-display mt-2 text-2xl font-bold text-navy dark:text-cream md:text-3xl">
          {paper.subject}
        </h1>
        <p className="mt-2 text-sm text-muted dark:text-cream/70">{paper.examination}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-cream px-3 py-1 dark:bg-navy">{paper.scheme}</span>
          <span className="rounded-full bg-cream px-3 py-1 dark:bg-navy">Time: {paper.time}</span>
          <span className="rounded-full bg-cream px-3 py-1 dark:bg-navy">Max: {paper.maxMarks}</span>
          <span className="rounded-full bg-cream px-3 py-1 dark:bg-navy">{totalQuestions} questions listed</span>
          {paper.answersReady ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-teal/15 px-3 py-1 text-teal">
              <CheckCircle2 className="h-3.5 w-3.5" /> Answers on site
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-3 py-1 text-amber-800 dark:text-amber-200">
              <AlertCircle className="h-3.5 w-3.5" /> Questions only · answers coming soon
            </span>
          )}
        </div>
        <p className="mt-4 text-sm text-navy/80 dark:text-cream/75">{paper.instructions}</p>
        {paper.sourceNote && (
          <p className="mt-2 text-xs text-muted dark:text-cream/55">{paper.sourceNote}</p>
        )}
        {paper.id === 'lta-2025' && (
          <p className="font-kannada mt-2 text-xs text-muted dark:text-cream/55">
            ಮೂಲ ಪ್ರಶ್ನೆಪತ್ರಿಕೆಯಿಂದ ಪರಿಶೀಲಿಸಿದ ಪದಗಳು — ಬದಲಾಯಿಸಿಲ್ಲ.
          </p>
        )}
      </header>

      <div className="mt-8 space-y-10">
        {paper.parts.map((part) => (
          <section key={part.id} id={`part-${part.id}`} className="scroll-mt-32">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="font-display text-xl font-bold text-navy dark:text-cream">
                  {part.label} · {part.labelKn}
                </h2>
                <p className="mt-1 text-sm text-muted dark:text-cream/65">
                  {part.marksEach} marks · Attempt any {part.attemptAny} · Total {part.totalMarks}
                </p>
              </div>
              <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-cream dark:bg-teal">
                {lang === 'kn' ? 'ಪ್ರಶ್ನೆಗಳು' : 'Questions'} · {part.questions.length}
              </span>
            </div>
            <p className="mb-4 text-xs leading-relaxed text-muted dark:text-cream/55">{part.instruction}</p>
            <div className="grid gap-3">
              {part.questions.map((q) => (
                <QuestionCard
                  key={q.number}
                  subjectId={subjectId}
                  paper={paper}
                  question={q}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
      </div>
    </div>
  )
}