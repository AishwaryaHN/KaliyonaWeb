import { useState } from 'react'
import { partBQuickQuiz, partBRevisionRows } from '../data/partBQuickQuiz'

export function PartBRevisionSheet() {
  return (
    <div className="mt-8 rounded-3xl border border-navy/10 bg-white p-5 dark:border-white/10 dark:bg-navy-soft">
      <h3 className="font-display text-lg font-bold text-navy dark:text-cream">Part B — quick revision</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-navy/10 text-xs uppercase tracking-wide text-muted dark:border-white/10">
              <th className="py-2 pr-4">Question</th>
              <th className="py-2">Main concept</th>
            </tr>
          </thead>
          <tbody>
            {partBRevisionRows.map((row) => (
              <tr key={row.q} className="border-b border-navy/5 dark:border-white/5">
                <td className="py-2 pr-4 font-bold text-teal">{row.q}</td>
                <td className="py-2 text-navy dark:text-cream/85">{row.tip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function PartBQuickQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState(false)
  const score = partBQuickQuiz.filter((q) => answers[q.id] === q.correctId).length

  return (
    <div className="mt-8 rounded-3xl border border-navy/10 bg-white p-5 dark:border-white/10 dark:bg-navy-soft">
      <h3 className="font-display text-lg font-bold text-navy dark:text-cream">Part B mini test</h3>
      <ul className="mt-4 space-y-4">
        {partBQuickQuiz.map((q, i) => (
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
                        ? 'bg-teal/20'
                        : wrong
                          ? 'bg-accent/15'
                          : picked
                            ? 'bg-white dark:bg-navy-soft'
                            : ''
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
        Submit answers
      </button>
      {checked && (
        <p className="mt-3 text-sm font-semibold text-teal">
          Score: {score} / {partBQuickQuiz.length}
        </p>
      )}
      <p className="mt-4 text-xs text-muted dark:text-cream/55">
        Focus extra revision on Q8, Q9, Q11, Q15 and Q16 — learn headings and examples. Each Part B answer
        should stay within about ¾–1½ handwritten pages.
      </p>
    </div>
  )
}