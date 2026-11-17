import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { getSubject, subjects } from '../data/subjects'
import { getPapersBySubject } from '../data/questionPapers'
import { SubjectCard } from '../components/SubjectCard'
import { useApp } from '../context/AppContext'

export function SubjectPage() {
  const { subjectId } = useParams()
  const { lang } = useApp()

  if (!subjectId) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-display text-3xl font-bold text-navy dark:text-cream">
          {lang === 'kn' ? 'ವಿಷಯಗಳು' : 'Subjects'}
        </h1>
        <p className="mt-2 text-sm text-muted dark:text-cream/65">
          Select a subject to browse examination papers from QP PDFs.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <SubjectCard key={s.id} subject={s} />
          ))}
        </div>
      </div>
    )
  }

  const subject = getSubject(subjectId)
  const papers = getPapersBySubject(subjectId)

  if (!subject) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-lg font-semibold text-navy dark:text-cream">Subject not found</p>
        <Link to="/subjects" className="mt-4 inline-block text-teal">
          Back to subjects
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link to="/subjects" className="inline-flex items-center gap-2 text-sm text-blue-soft">
        <ArrowLeft className="h-4 w-4" /> All subjects
      </Link>
      <h1 className="font-display mt-4 text-3xl font-bold text-navy dark:text-cream">
        {lang === 'kn' ? subject.nameKn : subject.name}
      </h1>
      {subject.code && (
        <p className="mt-2 text-sm font-semibold text-teal">Question Paper Code: {subject.code}</p>
      )}
      <p className="mt-3 text-sm text-muted dark:text-cream/70">
        {lang === 'kn' ? subject.blurbKn : subject.blurb}
      </p>

      <h2 className="font-display mt-10 text-xl font-bold text-navy dark:text-cream">
        {lang === 'kn' ? 'ಪ್ರಶ್ನೆಪತ್ರಿಕೆಗಳು' : 'Question papers'} ({papers.length})
      </h2>
      <p className="mt-1 text-sm text-muted dark:text-cream/60">
        January 2025 has full study answers. Other papers list questions from QP LTA.pdf until you share answers.
      </p>
      <div className="mt-4 grid gap-3">
        {papers.length === 0 && (
          <p className="rounded-2xl border border-dashed border-navy/20 p-5 text-sm text-muted dark:border-white/20">
            No papers yet for this subject.
          </p>
        )}
        {papers.map((paper) => {
          const qCount = paper.parts.reduce((n, p) => n + p.questions.length, 0)
          return (
            <Link
              key={paper.id}
              to={`/subjects/${subject.id}/p/${paper.id}/paper`}
              className="rounded-3xl border border-navy/10 bg-white p-5 transition hover:border-teal hover:shadow-md dark:border-white/10 dark:bg-navy-soft"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-display text-xl font-bold text-navy dark:text-cream">{paper.yearLabel}</p>
                  <p className="mt-1 text-sm text-muted dark:text-cream/65">
                    {qCount} questions · Max {paper.maxMarks} marks
                  </p>
                </div>
                {paper.answersReady ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal/15 px-3 py-1 text-xs font-semibold text-teal">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Answers ready
                  </span>
                ) : (
                  <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-navy dark:bg-navy dark:text-cream/80">
                    Questions only
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm font-semibold text-teal">Open paper →</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}