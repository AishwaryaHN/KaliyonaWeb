import { Link } from 'react-router-dom'
import type { QuestionItem, QuestionPaper } from '../data/questionPapers'
import { ChevronRight, FileQuestion, CheckCircle2, List } from 'lucide-react'
import { useApp } from '../context/AppContext'

interface Props {
  subjectId: string
  paper: QuestionPaper
  question: QuestionItem
}

export function QuestionCard({ subjectId, paper, question }: Props) {
  const { studyView } = useApp()
  const href = `/subjects/${subjectId}/p/${paper.id}/q/${question.number}`
  const quick = studyView === 'quick' && paper.answersReady

  return (
    <Link
      to={href}
      className="block rounded-xl border border-navy/10 bg-white px-3 py-2.5 transition hover:border-teal hover:shadow-sm dark:border-white/10 dark:bg-navy-soft sm:px-3.5 sm:py-3"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="min-w-0 flex-1 text-sm leading-snug text-navy dark:text-cream/95 whitespace-pre-line">
          <span className="mr-1.5 font-bold tabular-nums text-teal">Q{question.number}.</span>
          {question.text}
        </p>
        <span className="shrink-0 rounded-md bg-cream px-1.5 py-0.5 text-[10px] font-bold text-navy dark:bg-navy dark:text-cream">
          {question.marks}m
        </span>
      </div>
      <p className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-teal/90">
        {paper.answersReady ? (
          quick ? (
            <>
              <List className="h-3.5 w-3.5" /> Backbencher mode
            </>
          ) : (
            <>
              <CheckCircle2 className="h-3.5 w-3.5" /> View answer
            </>
          )
        ) : (
          <>
            <FileQuestion className="h-3.5 w-3.5" /> View question · answer coming soon
          </>
        )}
        <ChevronRight className="h-3.5 w-3.5" />
      </p>
    </Link>
  )
}