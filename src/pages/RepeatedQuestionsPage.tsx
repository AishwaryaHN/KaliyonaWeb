import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Repeat2 } from 'lucide-react'
import { getPaper } from '../data/questionPapers'
import { getRepeatGroups } from '../data/repeatedQuestions'
import { PaperContextNav } from '../components/PaperContextNav'
import { useApp } from '../context/AppContext'

export function RepeatedQuestionsPage() {
  const { subjectId = 'lta', paperId = '' } = useParams()
  const { lang } = useApp()
  const paper = getPaper(paperId)
  const groups = getRepeatGroups(subjectId)

  if (!paper || paper.subjectId !== subjectId) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-lg font-semibold text-navy dark:text-cream">Paper not found</p>
      </div>
    )
  }

  const paperPath = `/subjects/${subjectId}/p/${paperId}/paper`
  const qHref = (pid: string, n: number) => `/subjects/${subjectId}/p/${pid}/q/${n}`

  const groupsForPaper = groups.filter((g) => g.occurrences.some((o) => o.paperId === paperId))

  return (
    <div className="pb-10">
      <PaperContextNav subjectId={subjectId} paperId={paperId} variant="paper" activePart={undefined} />

      <div className="mx-auto max-w-3xl px-4 pt-6">
        <Link to={paperPath} className="inline-flex items-center gap-2 text-sm text-blue-soft">
          <ArrowLeft className="h-4 w-4" /> {lang === 'kn' ? 'ಪ್ರಶ್ನೆಪತ್ರಿಕೆ' : 'Question paper'}
        </Link>

        <header className="mt-4 rounded-2xl border border-amber-200/80 bg-amber-50/80 px-4 py-4 dark:border-amber-500/25 dark:bg-amber-950/25">
          <h1 className="flex items-center gap-2 font-display text-xl font-bold text-navy dark:text-cream">
            <Repeat2 className="h-5 w-5 text-amber-700 dark:text-amber-300" />
            {lang === 'kn' ? 'ಪುನರಾವರ್ತಿತ ಪ್ರಶ್ನೆಗಳು' : 'Repeated questions'}
          </h1>
          <p className="mt-2 text-sm text-navy/80 dark:text-cream/75">
            {lang === 'kn'
              ? `${paper.yearLabel} — ಇತರ ವರ್ಷಗಳಲ್ಲಿಯೂ ಬಂದ ಒಂದೇ ವಿಷಯ. ಒಂದು ಉತ್ತರ ಕಲಿತರೆ ಬೇರೆ ವರ್ಷಕ್ಕೂ ಬಳಸಬಹುದು.`
              : `${paper.yearLabel} — topics that appeared in other years too. Master one answer and reuse it across papers.`}
          </p>
        </header>

        <div className="mt-6 space-y-4">
          {groupsForPaper.length === 0 ? (
            <p className="text-sm text-muted dark:text-cream/55">
              {lang === 'kn' ? 'ಈ ಪತ್ರಿಕೆಗೆ ಪಟ್ಟಿ ಇನ್ನೂ ಸೇರಿಸಲಾಗಿಲ್ಲ.' : 'No repeat groups listed for this paper yet.'}
            </p>
          ) : (
            groupsForPaper.map((group) => {
              const here = group.occurrences.find((o) => o.paperId === paperId)
              return (
                <article
                  key={group.id}
                  className="rounded-xl border border-navy/10 bg-white px-4 py-3 dark:border-white/10 dark:bg-navy-soft"
                >
                  <h2 className="text-sm font-bold text-navy dark:text-cream">{group.label}</h2>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.occurrences.map((o) => {
                      const isHere = o.paperId === paperId
                      const p = getPaper(o.paperId)
                      return (
                        <li key={`${o.paperId}-${o.questionNumber}`}>
                          <Link
                            to={qHref(o.paperId, o.questionNumber)}
                            className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold ${
                              isHere
                                ? 'bg-teal text-white ring-2 ring-teal/30'
                                : 'bg-cream text-navy ring-1 ring-navy/10 hover:ring-teal/40 dark:bg-navy dark:text-cream'
                            }`}
                          >
                            {p?.yearLabel.replace('December/January ', 'Dec/Jan ') ?? o.paperId}
                            <span className="tabular-nums">Q{o.questionNumber}</span>
                            {here && o.questionNumber === here.questionNumber ? (
                              <span className="text-[10px] font-semibold opacity-90">· here</span>
                            ) : null}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </article>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}