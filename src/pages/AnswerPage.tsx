import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Repeat2 } from 'lucide-react'
import { findQuestion } from '../data/questionPapers'
import { getAnswer, type QuestionAnswer } from '../data/answers'
import { useApp } from '../context/AppContext'
import { FormattedExamAnswer } from '../components/FormattedExamAnswer'
import { PaperContextNav, partIdForQuestion } from '../components/PaperContextNav'
import { CreativeQuickRevision } from '../components/backbencher/CreativeQuickRevision'
import { AnswerReadAloud } from '../components/AnswerReadAloud'
import { plainTextForSpeech } from '../lib/answerSpeech'
import { getRepeatGroupForQuestion } from '../data/repeatedQuestions'

function ComparisonTable({ table }: { table: NonNullable<QuestionAnswer['comparisonTable']> }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-2xl border border-navy/10 dark:border-white/10">
      <table className="w-full min-w-[280px] text-left text-sm">
        <thead>
          <tr className="bg-navy text-cream dark:bg-teal">
            <th className="p-3 font-semibold">{table.headers[0]}</th>
            <th className="p-3 font-semibold">{table.headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr
              key={i}
              className="border-t border-navy/10 bg-white dark:border-white/10 dark:bg-navy-soft odd:bg-cream/50"
            >
              <td className="p-3 align-top text-navy dark:text-cream/90">{row[0]}</td>
              <td className="p-3 align-top text-navy dark:text-cream/90">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function AnswerBody({ answer }: { answer: QuestionAnswer }) {
  const main = answer.examWrite ?? answer.answerEnglish
  return (
    <div className="mt-4 space-y-4">
      <FormattedExamAnswer text={main} />
      {answer.comparisonTable && <ComparisonTable table={answer.comparisonTable} />}
      {answer.example && (
        <p className="whitespace-pre-line text-sm leading-relaxed text-navy/90 dark:text-cream/85">
          {answer.example.startsWith('Example') ? answer.example : `Example: ${answer.example}`}
        </p>
      )}
      {answer.footnote && (
        <p className="text-xs leading-relaxed text-muted dark:text-cream/55">{answer.footnote}</p>
      )}
    </div>
  )
}

export function AnswerPage() {
  const { subjectId = 'lta', paperId = '', questionNum = '' } = useParams()
  const num = Number(questionNum)
  const found = findQuestion(paperId, num)
  const answer = getAnswer(paperId, num)
  const { lang, studyView } = useApp()
  const hasWriteUp = Boolean(answer?.examWrite?.trim() || answer?.answerEnglish?.trim())
  const showBackbencher = studyView === 'quick' && hasWriteUp && answer != null
  const speechText = answer ? plainTextForSpeech(answer) : ''
  const repeatGroup = getRepeatGroupForQuestion(paperId, num)
  const repeatsPath = `/subjects/${subjectId}/p/${paperId}/repeats`

  const paperPath = `/subjects/${subjectId}/p/${paperId}/paper`
  const allNums = found
    ? [...found.paper.parts.flatMap((p) => p.questions.map((q) => q.number))].sort((a, b) => a - b)
    : []
  const idx = allNums.indexOf(num)
  const prev = idx > 0 ? allNums[idx - 1] : null
  const next = idx >= 0 && idx < allNums.length - 1 ? allNums[idx + 1] : null
  const qHref = (n: number) => `/subjects/${subjectId}/p/${paperId}/q/${n}`

  if (!found) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-lg font-semibold text-navy dark:text-cream">Question not found</p>
        <Link to={paperPath} className="mt-4 inline-block text-teal">
          Back to paper
        </Link>
      </div>
    )
  }

  if (!answer) {
    const { question, part } = found
  return (
    <div className="pb-8">
      <PaperContextNav
        subjectId={subjectId}
        paperId={paperId}
        variant="answer"
        activePart={part.id}
        currentQuestion={num}
      />
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <header className="rounded-xl border border-navy/10 bg-navy/95 px-3.5 py-3 text-cream dark:border-white/10">
          <div className="flex flex-wrap items-center gap-x-2 text-[10px] font-bold uppercase tracking-wide text-accent-soft/90">
            <span>{part.label}</span>
            <span>· Q{question.number} · {question.marks} marks</span>
          </div>
          <p className="mt-1.5 text-sm font-medium leading-snug whitespace-pre-line">{question.text}</p>
        </header>
        <section className="mt-3 rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 p-4 text-center dark:border-amber-400/30">
          <p className="text-sm font-semibold text-navy dark:text-cream">
            {lang === 'kn' ? 'ಉತ್ತರ ಶೀಘ್ರದಲ್ಲೇ ಸೇರಿಸಲಾಗುತ್ತದೆ' : 'Model answer coming soon'}
          </p>
          <p className="mt-2 text-xs text-muted dark:text-cream/60">
            Question text is from QP LTA.pdf (OCR for this paper — verify wording on the PDF). Share your answer
            notes when ready and we will add them here.
          </p>
        </section>
        <nav className="mt-8 flex items-center justify-between gap-3">
          {prev != null ? (
            <Link
              to={qHref(prev)}
              className="inline-flex items-center gap-1 rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy dark:border-white/15 dark:text-cream"
            >
              <ChevronLeft className="h-4 w-4" /> Q{prev}
            </Link>
          ) : (
            <span />
          )}
          {next != null ? (
            <Link
              to={qHref(next)}
              className="inline-flex items-center gap-1 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white"
            >
              Q{next} <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </div>
    )
  }

  const { question, part } = found
  const activePart = partIdForQuestion(found.paper, num)

  return (
    <div className="pb-8">
      <PaperContextNav
        subjectId={subjectId}
        paperId={paperId}
        variant="answer"
        activePart={activePart}
        currentQuestion={num}
      />
      <div
        className={`mx-auto px-4 pt-3 sm:pt-4 ${showBackbencher ? 'max-w-4xl' : 'max-w-3xl'}`}
      >
      {!showBackbencher ? (
        <header className="rounded-xl border border-navy/10 bg-navy/95 px-3.5 py-3 text-cream dark:border-white/10 sm:px-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-soft/90">
              <span>{part.label}</span>
              <span aria-hidden className="opacity-40">
                ·
              </span>
              <span>Q{question.number}</span>
              <span aria-hidden className="opacity-40">
                ·
              </span>
              <span>{question.marks} marks</span>
            </div>
            <AnswerReadAloud text={speechText} className="border-white/20 bg-white/10 text-cream hover:border-accent-soft hover:text-white" />
          </div>
          <p className="mt-1.5 text-sm font-medium leading-snug whitespace-pre-line sm:text-[15px]">
            {question.text}
          </p>
          {repeatGroup ? (
            <Link
              to={repeatsPath}
              className="mt-2 inline-flex items-center gap-1 rounded-md bg-amber-500/25 px-2 py-0.5 text-[10px] font-bold text-amber-100 hover:bg-amber-500/35"
            >
              <Repeat2 className="h-3 w-3" />
              Repeated topic · {repeatGroup.occurrences.length} papers
            </Link>
          ) : null}
        </header>
      ) : null}

      <section
        className={
          showBackbencher
            ? 'mt-1'
            : 'mt-3 rounded-xl border border-teal/25 bg-white px-3.5 py-3 dark:border-teal/35 dark:bg-navy-soft sm:mt-4 sm:px-4 sm:py-4'
        }
      >
        {showBackbencher ? (
          <CreativeQuickRevision
            paper={found.paper}
            question={question}
            answer={answer}
            partLabel={part.label}
          />
        ) : (
          <>
            <p className="text-xs font-bold uppercase tracking-wider text-teal">
              {lang === 'kn' ? 'ಉತ್ತರ' : 'Answer'}
            </p>
            <AnswerBody answer={answer} />
          </>
        )}
      </section>

      <nav className="mt-8 flex items-center justify-between gap-3">
        {prev != null ? (
          <Link
            to={qHref(prev)}
            className="inline-flex items-center gap-1 rounded-full border border-navy/15 px-4 py-2 text-sm font-semibold text-navy dark:border-white/15 dark:text-cream"
          >
            <ChevronLeft className="h-4 w-4" /> Q{prev}
          </Link>
        ) : (
          <span />
        )}
        {next != null ? (
          <Link
            to={qHref(next)}
            className="inline-flex items-center gap-1 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white"
          >
            Q{next} <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
      </div>
    </div>
  )
}