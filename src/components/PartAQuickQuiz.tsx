import { useState } from 'react'
import { partAQuickQuiz } from '../data/partAQuickQuiz'

export function PartAQuickQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)

  const score = partAQuickQuiz.filter((q) => answers[q.id] === q.correctId).length

  return (
    <div className="mt-8 rounded-3xl border border-navy/10 bg-white p-5 dark:border-white/10 dark:bg-navy-soft">
      <h3 className="font-display text-lg font-bold text-navy dark:text-cream">Quick revision — Part A</h3>
      <p className="font-kannada mt-1 text-xs text-muted dark:text-cream/60">5 quick questions</p>
      <ul className="mt-4 space-y-4">
        {partAQuickQuiz.map((q, i) => (
          <li key={q.id} className="rounded-2xl bg-cream/80 p-4 dark:bg-navy">
            <p className="text-sm font-semibold text-navy dark:text-cream">
              {i + 1}. {q.prompt}
            </p>
            <div className="mt-2 space-y-1.5">
              {q.options.map((opt) => {
                const picked = answers[q.id] === opt.id
                const correct = checked && opt.id === q.correctId
                const wrong = checked && picked && opt.id !== q.correctId
                return (
                  <label
                    key={opt.id}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                      correct
                        ? 'bg-teal/20 text-navy dark:text-cream'
                        : wrong
                          ? 'bg-accent/15'
                          : picked
                            ? 'bg-white dark:bg-navy-soft'
                            : 'hover:bg-white/80 dark:hover:bg-navy-soft'
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      checked={picked}
                      disabled={checked}
                      onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.id }))}
                    />
                    {opt.text}
                  </label>
                )
              })}
            </div>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setChecked(true)}
        className="mt-4 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-cream dark:bg-teal"
      >
        Check my answers
      </button>
      {checked && (
        <p className="mt-3 text-sm font-semibold text-teal">
          Score: {score} / {partAQuickQuiz.length}
        </p>
      )}
      <p className="mt-4 text-xs leading-relaxed text-muted dark:text-cream/55">
        Revision tip: focus on Q2, Q4, Q5 and Q7 — they recur in other years. Part A: any five, half
        page each.
      </p>
      <p className="font-kannada mt-2 text-xs leading-relaxed text-muted dark:text-cream/55">
        2 ಅಂಕ — ಸಂಕ್ಷಿಪ್ತ ಇಂಗ್ಲಿಷ್ ಉತ್ತರ ಬರೆಯಿರಿ.
      </p>
    </div>
  )
}