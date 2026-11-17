import { useState } from 'react'
import { Check, X } from 'lucide-react'
import type { QuizQuestion } from '../data/demoLesson'
import { useApp } from '../context/AppContext'

export function Quiz({
  lessonId,
  questions,
  onComplete,
}: {
  lessonId: string
  questions: QuizQuestion[]
  onComplete: () => void
}) {
  const { recordQuiz, lang } = useApp()
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [finished, setFinished] = useState(false)
  const [finalScore, setFinalScore] = useState(0)

  const current = questions[index]

  function submitChoice(optionId: string) {
    if (selected) return
    setSelected(optionId)
    setAnswers((prev) => ({ ...prev, [current.id]: optionId }))
  }

  function next() {
    const latest = { ...answers, [current.id]: selected ?? answers[current.id] }
    if (index < questions.length - 1) {
      setAnswers(latest)
      setIndex((i) => i + 1)
      setSelected(null)
      return
    }
    const score = questions.filter((q) => latest[q.id] === q.correctId).length
    setAnswers(latest)
    setFinalScore(score)
    setFinished(true)
    recordQuiz(lessonId, score, questions.length)
    onComplete()
  }

  if (finished) {
    return (
      <div className="rounded-3xl border border-teal/30 bg-teal/10 p-6 text-center dark:bg-teal/15">
        <p className="font-display text-3xl font-bold text-navy dark:text-cream">
          {finalScore} / {questions.length}
        </p>
        <p className="font-kannada mt-2 text-sm text-muted dark:text-cream/70">
          {lang === 'kn' ? 'ನಿಮ್ಮ ಸ್ಕೋರ್' : 'Your quiz score'}
        </p>
        <button
          type="button"
          className="mt-4 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-cream dark:bg-teal"
          onClick={() => {
            setFinished(false)
            setIndex(0)
            setSelected(null)
            setAnswers({})
            setFinalScore(0)
          }}
        >
          Retry quiz
        </button>
      </div>
    )
  }

  const isCorrect = selected === current.correctId

  return (
    <div className="rounded-3xl border border-navy/10 bg-white p-5 dark:border-white/10 dark:bg-navy-soft">
      <div className="mb-3 flex items-center justify-between text-xs font-semibold text-muted dark:text-cream/60">
        <span>
          Question {index + 1} / {questions.length}
        </span>
        <span className="rounded-full bg-cream px-2 py-0.5 dark:bg-navy">MCQ</span>
      </div>
      <h3 className="text-base font-bold text-navy dark:text-cream">{current.prompt}</h3>
      <p className="font-kannada mt-1 text-sm text-teal">{current.promptKn}</p>

      <div className="mt-4 space-y-2">
        {current.options.map((opt) => {
          const chosen = selected === opt.id
          const showCorrect = selected && opt.id === current.correctId
          const showWrong = chosen && opt.id !== current.correctId
          return (
            <button
              key={opt.id}
              type="button"
              disabled={!!selected}
              onClick={() => submitChoice(opt.id)}
              className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
                showCorrect
                  ? 'border-teal bg-teal/10 text-navy dark:text-cream'
                  : showWrong
                    ? 'border-accent bg-accent/10 text-navy dark:text-cream'
                    : 'border-navy/10 hover:border-teal dark:border-white/10 dark:text-cream'
              }`}
            >
              <span>{opt.text}</span>
              {showCorrect && <Check className="h-4 w-4 text-teal" />}
              {showWrong && <X className="h-4 w-4 text-accent" />}
            </button>
          )
        })}
      </div>

      {selected && (
        <div className="mt-4 rounded-2xl bg-cream p-3 text-sm dark:bg-navy">
          {isCorrect ? (
            <p className="font-medium text-teal">{current.explainCorrect}</p>
          ) : (
            <>
              <p className="font-medium text-accent">Not quite.</p>
              <p className="mt-1 text-navy dark:text-cream/85">{current.explainCorrect}</p>
              <p className="font-kannada mt-2 text-muted dark:text-cream/65">{current.explainWrongKn}</p>
            </>
          )}
          <button
            type="button"
            onClick={next}
            className="mt-3 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-cream dark:bg-teal"
          >
            {index < questions.length - 1 ? 'Next question' : 'See score'}
          </button>
        </div>
      )}
    </div>
  )
}
