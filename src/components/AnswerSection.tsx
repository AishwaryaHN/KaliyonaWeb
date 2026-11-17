import { useEffect, useState } from 'react'
import type { ChecklistPoint } from '../data/demoLesson'
import { VocabText } from './VocabText'
import { useApp } from '../context/AppContext'

export function AnswerSection({
  lessonId,
  introduction,
  points,
  example,
  conclusion,
}: {
  lessonId: string
  introduction: string
  points: { heading: string; body: string; kannadaHint: string }[]
  example: string
  conclusion: string
}) {
  void lessonId
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-4 text-sm">
        <p className="font-semibold text-accent">Examination answer (write this style in the exam)</p>
        <p className="font-kannada mt-1 text-muted dark:text-cream/65">
          ಇದು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ವಿವರಣೆಯಲ್ಲ — ಪರೀಕ್ಷೆಯಲ್ಲಿ ಬರೆಯುವ ಮಾದರಿ ಉತ್ತರ.
        </p>
      </div>

      <article className="rounded-3xl border border-navy/10 bg-white p-5 leading-relaxed dark:border-white/10 dark:bg-navy-soft">
        <p className="text-sm text-navy dark:text-cream/90">
          <VocabText text={introduction} />
        </p>
        <ol className="mt-4 space-y-4">
          {points.map((p, i) => (
            <li key={p.heading} className="rounded-2xl bg-cream/70 p-4 dark:bg-navy">
              <p className="text-sm font-bold text-navy dark:text-cream">
                {i + 1}. {p.heading}
              </p>
              <p className="mt-2 text-sm text-navy/90 dark:text-cream/85">
                <VocabText text={p.body} />
              </p>
              <p className="font-kannada mt-2 text-xs text-teal">{p.kannadaHint}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-navy dark:text-cream/90">
          <span className="font-semibold">Example: </span>
          <VocabText text={example} />
        </p>
        <p className="mt-4 text-sm text-navy dark:text-cream/90">
          <VocabText text={conclusion} />
        </p>
      </article>
    </div>
  )
}

export function PracticeWriter({
  lessonId,
  checklist,
  modelPreview,
  onComplete,
}: {
  lessonId: string
  checklist: ChecklistPoint[]
  modelPreview: string
  onComplete: () => void
}) {
  const { progress, recordPractice, lang } = useApp()
  const saved = progress.lessons[lessonId]?.practiceChecked
  const [text, setText] = useState('')
  const [checked, setChecked] = useState<string[]>(() => saved ?? [])
  const [submitted, setSubmitted] = useState(() => (saved?.length ?? 0) > 0)

  useEffect(() => {
    if (saved) setChecked(saved)
  }, [saved])

  function toggle(id: string) {
    setChecked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  function submit() {
    setSubmitted(true)
    recordPractice(lessonId, checked)
    onComplete()
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-semibold text-navy dark:text-cream">
          {lang === 'kn' ? 'ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ' : 'Write your answer here'}
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          placeholder="Write a 5-mark differentiate answer in easy academic English..."
          className="w-full rounded-3xl border border-navy/15 bg-white p-4 text-sm leading-relaxed text-navy outline-none ring-teal focus:ring-2 dark:border-white/15 dark:bg-navy dark:text-cream"
        />
      </div>

      <div className="rounded-3xl border border-navy/10 bg-white p-4 dark:border-white/10 dark:bg-navy-soft">
        <p className="text-sm font-bold text-navy dark:text-cream">Self-check checklist</p>
        <p className="font-kannada mt-1 text-xs text-muted dark:text-cream/60">
          AI grading ಇಲ್ಲ — ನೀವೇ checklist ಹೊಂದಿಸಿ ಹೋಲಿಸಿ.
        </p>
        <ul className="mt-3 space-y-2">
          {checklist.map((item) => (
            <li key={item.id}>
              <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-cream/70 px-3 py-2 dark:bg-navy">
                <input
                  type="checkbox"
                  checked={checked.includes(item.id)}
                  onChange={() => toggle(item.id)}
                  className="mt-1"
                />
                <span>
                  <span className="block text-sm text-navy dark:text-cream">{item.text}</span>
                  <span className="font-kannada text-xs text-muted dark:text-cream/60">{item.textKn}</span>
                </span>
              </label>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={submit}
          className="mt-4 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white"
        >
          Save checklist comparison
        </button>
        {submitted && (
          <p className="mt-3 text-sm text-teal">
            Checked {checked.length}/{checklist.length} expected points.
          </p>
        )}
      </div>

      <details className="rounded-3xl border border-navy/10 bg-white p-4 dark:border-white/10 dark:bg-navy-soft">
        <summary className="cursor-pointer text-sm font-semibold text-navy dark:text-cream">
          Peek model answer structure
        </summary>
        <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-muted dark:text-cream/75">
          {modelPreview}
        </p>
      </details>
    </div>
  )
}
