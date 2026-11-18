import { Link, useLocation } from 'react-router-dom'
import { getPaper, getPapersBySubject, type QuestionPaper } from '../data/questionPapers'
import { repeatedQuestionNumbersInPaper } from '../data/repeatedQuestions'
import { useApp } from '../context/AppContext'

type PartId = 'A' | 'B' | 'C'

function firstQuestionInPart(paper: QuestionPaper, partId: PartId) {
  const part = paper.parts.find((p) => p.id === partId)
  if (!part || part.questions.length === 0) return null
  return Math.min(...part.questions.map((q) => q.number))
}

function allQuestionNumbers(paper: QuestionPaper): number[] {
  return paper.parts
    .flatMap((p) => p.questions.map((q) => q.number))
    .sort((a, b) => a - b)
}

export function PaperContextNav({
  subjectId,
  paperId,
  activePart,
  variant,
  currentQuestion,
}: {
  subjectId: string
  paperId: string
  activePart?: PartId
  variant: 'paper' | 'answer'
  currentQuestion?: number
}) {
  const { lang, studyView, setStudyView } = useApp()
  const location = useLocation()
  const paper = getPaper(paperId)
  const papers = getPapersBySubject(subjectId)

  if (!paper) return null

  const paperPath = `/subjects/${subjectId}/p/${paperId}/paper`
  const repeatsPath = `/subjects/${subjectId}/p/${paperId}/repeats`
  const qNumbers = allQuestionNumbers(paper)
  const repeatedNums = new Set(repeatedQuestionNumbersInPaper(paperId))
  const onRepeats = location.pathname.endsWith('/repeats')
  const qHref = (n: number) => `/subjects/${subjectId}/p/${paperId}/q/${n}`

  const partPill = (partId: PartId, label: string) => {
    const isActive = activePart === partId
    const firstQ = firstQuestionInPart(paper, partId)
    const partHref = `#part-${partId}`
    const answerHref = firstQ != null ? qHref(firstQ) : paperPath

    const base =
      'shrink-0 rounded-md px-2.5 py-1 text-[11px] font-bold transition sm:px-3 sm:text-xs'
    const active = 'bg-navy text-cream dark:bg-teal'
    const idle =
      'border border-navy/12 bg-white text-navy hover:border-teal/60 dark:border-white/12 dark:bg-navy-soft dark:text-cream'

    if (variant === 'paper') {
      return (
        <a key={partId} href={partHref} className={`${base} ${isActive ? active : idle}`}>
          {label}
        </a>
      )
    }
    return (
      <Link key={partId} to={answerHref} className={`${base} ${isActive ? active : idle}`}>
        {label}
      </Link>
    )
  }

  return (
    <div className="sticky top-[57px] z-30 -mx-4 border-b border-navy/10 bg-cream/96 px-3 py-2 backdrop-blur-md dark:border-white/10 dark:bg-navy/96 sm:px-4">
      <div className="mx-auto max-w-5xl space-y-1.5">
        {/* Row 1: years + study mode */}
        <div className="flex items-center gap-2">
          <div className="flex min-w-0 flex-1 gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {papers.map((p) => {
              const isCurrent = p.id === paperId
              return (
                <Link
                  key={p.id}
                  to={`/subjects/${subjectId}/p/${p.id}/paper`}
                  state={{ from: location.pathname }}
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold leading-none sm:px-3 sm:text-[11px] ${
                    isCurrent
                      ? 'bg-navy text-cream dark:bg-teal'
                      : 'border border-navy/12 bg-white text-navy dark:border-white/12 dark:bg-navy-soft dark:text-cream'
                  }`}
                  title={p.examination}
                >
                  {p.yearLabel.replace('December/January ', 'Dec/Jan ')}
                  {p.answersReady ? ' ✓' : ''}
                </Link>
              )
            })}
          </div>
          {paper.answersReady ? (
            <div className="inline-flex shrink-0 rounded-lg border border-navy/12 bg-white p-0.5 dark:border-white/12 dark:bg-navy-soft">
              <button
                type="button"
                onClick={() => setStudyView('full')}
                className={`rounded-md px-2 py-0.5 text-[10px] font-bold sm:px-2.5 sm:text-[11px] ${
                  studyView === 'full' ? 'bg-navy text-cream dark:bg-teal' : 'text-navy dark:text-cream'
                }`}
              >
                {lang === 'kn' ? 'ಪೂರ್ಣ' : 'Full'}
              </button>
              <button
                type="button"
                onClick={() => setStudyView('quick')}
                className={`rounded-md px-2 py-0.5 text-[10px] font-bold sm:px-2.5 sm:text-[11px] ${
                  studyView === 'quick' ? 'bg-navy text-cream dark:bg-teal' : 'text-navy dark:text-cream'
                }`}
              >
                {lang === 'kn' ? 'ಬ್ಯಾಕ್' : 'Backbencher'}
              </button>
            </div>
          ) : null}
        </div>

        {/* Row 2: parts + all questions */}
        <div className="flex flex-wrap items-center gap-1.5">
          <Link
            to={paperPath}
            className={`shrink-0 rounded-md px-2.5 py-1 text-[11px] font-bold sm:text-xs ${
              variant === 'paper'
                ? 'bg-teal/25 text-teal-dark dark:text-teal'
                : 'border border-navy/12 text-navy dark:border-white/12 dark:text-cream'
            }`}
          >
            {lang === 'kn' ? 'ಪಟ್ಟಿ' : 'List'}
          </Link>
          {partPill('A', 'A')}
          {partPill('B', 'B')}
          {partPill('C', 'C')}
          {paper.answersReady && repeatedNums.size > 0 ? (
            <Link
              to={repeatsPath}
              className={`shrink-0 rounded-md px-2.5 py-1 text-[11px] font-bold sm:text-xs ${
                onRepeats
                  ? 'bg-amber-500/90 text-white'
                  : 'border border-amber-400/50 bg-amber-50 text-amber-950 hover:border-amber-500 dark:bg-amber-950/40 dark:text-amber-100'
              }`}
            >
              {lang === 'kn' ? 'ಪುನರ್' : 'Repeats'}
            </Link>
          ) : null}
        </div>

        {/* Row 3: jump to question */}
        {paper.answersReady && qNumbers.length > 0 ? (
          <div className="flex items-center gap-2 border-t border-navy/6 pt-1.5 dark:border-white/6">
            <span className="hidden shrink-0 text-[10px] font-bold uppercase tracking-wide text-muted sm:inline dark:text-cream/45">
              {lang === 'kn' ? 'ಪ್ರಶ್ನೆ' : 'Go to'}
            </span>
            <div className="flex min-w-0 flex-1 gap-0.5 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {qNumbers
                .filter((n) => (onRepeats ? repeatedNums.has(n) : true))
                .map((n) => {
                const isQ = currentQuestion === n
                const inPart = paper.parts.find((p) => p.questions.some((q) => q.number === n))?.id
                const isRepeat = repeatedNums.has(n)
                const repeatTitle = isRepeat
                  ? `${inPart ? `Part ${inPart} · ` : ''}Q${n} · repeated in other years`
                  : inPart
                    ? `Part ${inPart} · Q${n}`
                    : `Q${n}`
                if (variant === 'paper') {
                  return (
                    <Link
                      key={n}
                      to={qHref(n)}
                      className={`flex h-7 min-w-[1.75rem] shrink-0 items-center justify-center rounded-md text-[11px] font-bold tabular-nums ${
                        isQ
                          ? 'bg-teal text-white'
                          : isRepeat
                            ? 'bg-amber-50 text-amber-950 ring-1 ring-amber-400/60 hover:ring-amber-500 dark:bg-amber-950/50 dark:text-amber-100'
                            : 'bg-white text-navy ring-1 ring-navy/10 hover:ring-teal/50 dark:bg-navy-soft dark:text-cream dark:ring-white/10'
                      }`}
                      title={repeatTitle}
                    >
                      {n}
                    </Link>
                  )
                }
                return (
                  <Link
                    key={n}
                    to={qHref(n)}
                    className={`flex h-7 min-w-[1.75rem] shrink-0 items-center justify-center rounded-md text-[11px] font-bold tabular-nums ${
                      isQ
                        ? 'bg-teal text-white ring-2 ring-teal/40'
                        : isRepeat
                          ? 'bg-amber-50 text-amber-950 ring-1 ring-amber-400/60 hover:ring-amber-500 dark:bg-amber-950/50 dark:text-amber-100'
                          : 'bg-white text-navy ring-1 ring-navy/10 hover:bg-teal/10 hover:ring-teal/40 dark:bg-navy-soft dark:text-cream dark:ring-white/10'
                    }`}
                    title={repeatTitle}
                  >
                    {n}
                  </Link>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export function partIdForQuestion(paper: QuestionPaper, questionNumber: number): PartId | undefined {
  for (const part of paper.parts) {
    if (part.questions.some((q) => q.number === questionNumber)) return part.id
  }
  return undefined
}