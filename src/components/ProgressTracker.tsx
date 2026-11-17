import { useApp } from '../context/AppContext'

export function ProgressTracker({
  lessonId,
  steps,
}: {
  lessonId: string
  steps: { id: string; label: string }[]
}) {
  const { progress } = useApp()
  const done = progress.lessons[lessonId]?.completedSteps ?? []
  const pct = Math.round((done.length / steps.length) * 100)

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-4 dark:border-white/10 dark:bg-navy-soft">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-navy dark:text-cream">Lesson progress</span>
        <span className="text-teal font-bold">{pct}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-cream dark:bg-navy">
        <div className="h-full rounded-full bg-teal transition-all" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-2 text-xs text-muted dark:text-cream/60">
        {done.length} / {steps.length} steps touched
      </p>
    </div>
  )
}
