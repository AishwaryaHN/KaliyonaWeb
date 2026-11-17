import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ProgressTracker } from './ProgressTracker'

export function LessonLayout({
  title,
  subtitle,
  paperPath,
  lessonId,
  steps,
  activeStep,
  onStepChange,
  children,
}: {
  title: string
  subtitle: string
  paperPath: string
  lessonId: string
  steps: { id: string; label: string; labelKn: string }[]
  activeStep: string
  onStepChange: (id: string) => void
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Link
        to={paperPath}
        className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-blue-soft hover:text-teal"
      >
        <ArrowLeft className="h-4 w-4" /> Back to question paper
      </Link>

      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">Demo lesson · Part B · 5 marks</p>
        <h1 className="font-display mt-2 text-2xl font-bold text-navy dark:text-cream md:text-3xl">{title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted dark:text-cream/70">{subtitle}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <ProgressTracker lessonId={lessonId} steps={steps} />
          <nav className="mt-4 hidden space-y-1 lg:block">
            {steps.map((step, i) => (
              <button
                key={step.id}
                type="button"
                onClick={() => onStepChange(step.id)}
                className={`flex w-full items-start gap-2 rounded-2xl px-3 py-2 text-left text-sm transition ${
                  activeStep === step.id
                    ? 'bg-navy text-cream dark:bg-teal'
                    : 'hover:bg-white dark:hover:bg-navy-soft text-navy/80 dark:text-cream/75'
                }`}
              >
                <span className="mt-0.5 text-[11px] font-bold opacity-70">{i + 1}</span>
                <span>
                  <span className="block font-medium">{step.label}</span>
                  <span className="font-kannada block text-[11px] opacity-80">{step.labelKn}</span>
                </span>
              </button>
            ))}
          </nav>
        </aside>

        <div>
          <div className="mb-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {steps.map((step, i) => (
              <button
                key={step.id}
                type="button"
                onClick={() => onStepChange(step.id)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
                  activeStep === step.id
                    ? 'bg-navy text-cream dark:bg-teal'
                    : 'bg-white text-navy dark:bg-navy-soft dark:text-cream'
                }`}
              >
                {i + 1}. {step.label}
              </button>
            ))}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
