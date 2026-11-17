import { useMemo } from 'react'
import { FileText, ListOrdered, Sparkles, Star, Zap } from 'lucide-react'
import type { QuestionAnswer } from '../../data/answerTypes'
import type { QuestionItem, QuestionPaper } from '../../data/questionPapers'
import {
  assignIllustrationIds,
  backbencherImageUrl,
  type IllustrationId,
} from '../../lib/backbencher/assignIllustrations'
import {
  examWriteHints,
  extractAllExamPoints,
  type ExamInfographicPoint,
} from '../../lib/backbencher/extractAllExamPoints'
import { useApp } from '../../context/AppContext'
import { PointIllustration } from './PointIllustration'

const CARD_THEMES = [
  { border: 'border-sky-300/70', bg: 'bg-sky-50/95 dark:bg-sky-950/35', badge: 'bg-sky-500' },
  { border: 'border-violet-300/70', bg: 'bg-violet-50/95 dark:bg-violet-950/35', badge: 'bg-violet-500' },
  { border: 'border-emerald-300/70', bg: 'bg-emerald-50/95 dark:bg-emerald-950/35', badge: 'bg-emerald-500' },
  { border: 'border-amber-300/70', bg: 'bg-amber-50/95 dark:bg-amber-950/35', badge: 'bg-amber-500' },
  { border: 'border-rose-300/70', bg: 'bg-rose-50/95 dark:bg-rose-950/35', badge: 'bg-rose-500' },
  { border: 'border-cyan-300/70', bg: 'bg-cyan-50/95 dark:bg-cyan-950/35', badge: 'bg-cyan-500' },
  { border: 'border-fuchsia-300/70', bg: 'bg-fuchsia-50/95 dark:bg-fuchsia-950/35', badge: 'bg-fuchsia-500' },
  { border: 'border-lime-300/70', bg: 'bg-lime-50/95 dark:bg-lime-950/35', badge: 'bg-lime-600' },
]

type Props = {
  paper: QuestionPaper
  question: QuestionItem
  answer: QuestionAnswer
  partLabel: string
}

export function CreativeQuickRevision({ paper, question, answer, partLabel }: Props) {
  const { setStudyView, lang } = useApp()
  const points = useMemo(() => extractAllExamPoints(answer), [answer])
  const hints = useMemo(() => examWriteHints(answer), [answer])
  const illustrationIds = useMemo(
    () => assignIllustrationIds(points.map((p) => p.title)),
    [points],
  )

  const marks = typeof question.marks === 'number' ? question.marks : String(question.marks)
  const keyIdea = useMemo(() => conclusionSnippet(answer.examWrite ?? ''), [answer.examWrite])

  return (
    <article className="overflow-hidden rounded-[1.5rem] border-2 border-violet-300/80 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-sky-100 p-2 shadow-lg dark:border-violet-500/40 dark:from-violet-950/60 dark:via-fuchsia-950/40 dark:to-sky-950/40 sm:rounded-[1.75rem] sm:p-2.5">
      {/* Single infographic board */}
      <div className="rounded-2xl bg-white/95 px-3 py-4 shadow-inner dark:bg-navy-soft/95 sm:px-5 sm:py-5">
        <header className="border-b border-violet-100 pb-3 dark:border-white/10">
          <p className="text-[10px] font-semibold text-muted dark:text-cream/50">
            Home · Backbencher · {paper.yearLabel}
          </p>
          <div className="mt-2 flex flex-wrap items-start justify-between gap-2">
            <h2 className="font-display max-w-3xl text-lg font-bold leading-snug text-navy dark:text-cream sm:text-xl">
              {question.text.trim()}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-200/90 px-2 py-0.5 text-[10px] font-bold text-amber-950">
                <Zap className="h-3 w-3" />
                {lang === 'kn' ? 'ವಿಜುಯಲ್ ರಿವಿಷನ್' : 'Visual revision'}
              </span>
              <span className="rounded-full bg-sky-200/90 px-2 py-0.5 text-[10px] font-bold text-sky-950">
                {marks} marks
              </span>
              <span className="rounded-full bg-violet-200/90 px-2 py-0.5 text-[10px] font-bold text-violet-950">
                {partLabel}
              </span>
            </div>
          </div>
          <p className="mt-2 text-xs text-muted dark:text-cream/60">
            {lang === 'kn'
              ? `${points.length} ಪ್ರಶ್ನೆ ಪತ್ರಿಕೆಯ ಅಂಶಗಳು — ಚಿತ್ರದಂತೆ ಒಂದೇ ಪಟ್ಟಿಯಲ್ಲಿ`
              : `One infographic · ${points.length} exact exam point${points.length === 1 ? '' : 's'} from your Full answer`}
          </p>
          <p className="mt-1 text-[11px] italic text-violet-700/80 dark:text-violet-200/70">
            {lang === 'kn' ? 'ನಿಮ್ಮ ಮೆಮೊರಿ ಟ್ರಿಕ್ ಶೀಘ್ರದಲ್ಲೇ' : 'Memory trick slot — add your own mnemonic later'}
          </p>
        </header>

        <PointsGrid
          points={points}
          illustrationIds={illustrationIds}
          paperId={paper.id}
          questionNumber={question.number}
        />

        <footer className="mt-5 grid gap-3 border-t border-violet-100 pt-4 dark:border-white/10 sm:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-sky-50 to-violet-50 px-3 py-2.5 dark:from-sky-950/30 dark:to-violet-950/30">
            <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-sky-800 dark:text-sky-200">
              <ListOrdered className="h-3.5 w-3.5" /> One-look recall
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-navy dark:text-cream/90">
              {points.map((p) => `${p.index}. ${p.title}`).join(' → ')}
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 px-3 py-2.5 dark:from-amber-950/30 dark:to-orange-950/30">
            <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-amber-900 dark:text-amber-200">
              <FileText className="h-3.5 w-3.5" /> How to write in exam
            </p>
            <ol className="mt-1.5 list-decimal space-y-0.5 pl-4 text-[11px] text-navy dark:text-cream/90">
              {hints.hasIntro ? <li>Short introduction (see Full answer).</li> : null}
              <li>
                Write all {points.length} points in order with the same headings as above.
              </li>
              {hints.hasTable ? <li>Add the comparison table from Full answer.</li> : null}
              {hints.hasConclusion ? <li>One-line conclusion.</li> : null}
            </ol>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-yellow-50 to-lime-50 px-3 py-2.5 dark:from-yellow-950/25 dark:to-lime-950/25">
            <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-lime-900 dark:text-lime-200">
              <Star className="h-3.5 w-3.5" /> Key idea
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-navy dark:text-cream/90">
              {keyIdea || points.slice(0, 2).map((p) => p.title).join(' · ')}
            </p>
          </div>
        </footer>
      </div>

      <p className="mt-3 text-center text-[11px] text-violet-900/70 dark:text-violet-200/60">
        <Sparkles className="mr-1 inline h-3 w-3" />
        {lang === 'kn' ? 'ಪೂರ್ಣ ಉತ್ತರ' : 'Full answer for writing'}{' '}
        <button
          type="button"
          onClick={() => setStudyView('full')}
          className="font-bold text-teal underline-offset-2 hover:underline"
        >
          {lang === 'kn' ? 'ಇಲ್ಲಿ ತೆರೆಯಿರಿ' : 'open here'}
        </button>
      </p>
    </article>
  )
}

function PointsGrid({
  points,
  illustrationIds,
  paperId,
  questionNumber,
}: {
  points: ExamInfographicPoint[]
  illustrationIds: ReturnType<typeof assignIllustrationIds>
  paperId: string
  questionNumber: number
}) {
  if (points.length === 0) {
    return (
      <p className="mt-4 text-sm text-muted dark:text-cream/60">
        No numbered points detected. Use Full answer — we will extend the parser for this layout.
      </p>
    )
  }

  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {points.map((point, i) => (
          <InfographicCard
            key={`${point.index}-${point.title}`}
            point={point}
            illustrationId={illustrationIds[i]!}
            imageUrl={backbencherImageUrl(paperId, questionNumber, point.index)}
          />
        ))}
      </div>
    </section>
  )
}

function InfographicCard({
  point,
  illustrationId,
  imageUrl,
}: {
  point: ExamInfographicPoint
  illustrationId: IllustrationId
  imageUrl: string
}) {
  const theme = CARD_THEMES[(point.index - 1) % CARD_THEMES.length]!
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border-2 ${theme.border} ${theme.bg} shadow-sm transition hover:shadow-md`}
    >
      <header className="flex items-center gap-2 px-2.5 pt-2.5">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white shadow ${theme.badge}`}
        >
          {point.index}
        </span>
        <h3 className="text-[13px] font-bold leading-tight text-navy dark:text-cream">{point.title}</h3>
      </header>
      <PointIllustration
        illustrationId={illustrationId}
        title={point.title}
        imageUrl={imageUrl}
        className="mx-2 mt-2"
      />
      <p className="flex-1 px-2.5 pb-3 pt-2 text-[11px] leading-snug text-navy/90 dark:text-cream/85">
        {point.explanation}
      </p>
    </article>
  )
}

function conclusionSnippet(examWrite: string): string {
  const m = examWrite.match(/conclusion:\s*\n+([\s\S]*?)(?:\n\n|$)/i)
  return m?.[1]?.trim().split('\n')[0]?.trim() ?? ''
}