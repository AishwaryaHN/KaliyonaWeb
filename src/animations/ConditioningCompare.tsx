import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'

const classicalSteps = [
  {
    title: 'Food appears',
    titleKn: 'ಆಹಾರ ಬರುತ್ತದೆ',
    detail: 'Unconditioned stimulus → natural salivation',
    detailKn: 'ನೈಸರ್ಗಿಕ ಪ್ರಚೋದನೆ → ಲಾಲಾ',
  },
  {
    title: 'Bell + Food paired',
    titleKn: 'ಬೆಲ್ + ಆಹಾರ ಜೋಡಿ',
    detail: 'Neutral stimulus is associated with food',
    detailKn: 'ಸಂಕೇತವನ್ನು ಆಹಾರದೊಂದಿಗೆ ಜೋಡಿಸುವುದು',
  },
  {
    title: 'Bell alone',
    titleKn: 'ಬೆಲ್ ಮಾತ್ರ',
    detail: 'Conditioned stimulus → salivation (learned)',
    detailKn: 'ಕಲಿತ ಸಂಕೇತ → ಲಾಲಾ',
  },
]

const operantSteps = [
  {
    title: 'Rat explores',
    titleKn: 'ಇಲಿ ಅನ್ವೇಷಿಸುತ್ತದೆ',
    detail: 'Voluntary behaviour begins',
    detailKn: 'ಐಚ್ಛಿಕ ವರ್ತನೆ ಪ್ರಾರಂಭ',
  },
  {
    title: 'Presses lever',
    titleKn: 'ಲಿವರ್ ಒತ್ತುತ್ತದೆ',
    detail: 'Operates on the environment',
    detailKn: 'ಪರಿಸರದ ಮೇಲೆ ಕ್ರಿಯೆ',
  },
  {
    title: 'Gets food (reinforcement)',
    titleKn: 'ಆಹಾರ ಸಿಗುತ್ತದೆ',
    detail: 'Consequence strengthens the behaviour',
    detailKn: 'ಪರಿಣಾಮ ವರ್ತನೆಯನ್ನು ಬಲಪಡಿಸುತ್ತದೆ',
  },
]

export function ConditioningCompare() {
  const [mode, setMode] = useState<'classical' | 'operant' | 'compare'>('classical')
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing || mode === 'compare') return
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % 3)
    }, 2200)
    return () => window.clearInterval(id)
  }, [playing, mode])

  useEffect(() => {
    setStep(0)
  }, [mode])

  return (
    <div className="overflow-hidden rounded-3xl border border-navy/10 bg-gradient-to-br from-white to-cream dark:border-white/10 dark:from-navy-soft dark:to-navy">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy/10 px-4 py-3 dark:border-white/10">
        <div>
          <p className="text-sm font-bold text-navy dark:text-cream">Interactive visual lab</p>
          <p className="font-kannada text-xs text-muted dark:text-cream/60">ಚಲನಚಿತ್ರದ ಮೂಲಕ ವ್ಯತ್ಯಾಸ ನೋಡಿ</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(
            [
              ['classical', 'Classical'],
              ['operant', 'Operant'],
              ['compare', 'Compare'],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                mode === id
                  ? 'bg-navy text-cream dark:bg-teal'
                  : 'bg-cream text-navy hover:bg-teal/15 dark:bg-navy dark:text-cream'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 p-4 md:grid-cols-2">
        {(mode === 'classical' || mode === 'compare') && (
          <SceneCard
            tone="classical"
            title="Classical conditioning"
            titleKn="ಸಾಂಪ್ರದಾಯಿಕ ಅನುಬಂಧನ"
            subtitle="Pavlov · Stimulus → Response"
          >
            <ClassicalScene step={mode === 'compare' ? 2 : step} />
            <StepCaption steps={classicalSteps} step={mode === 'compare' ? 2 : step} />
          </SceneCard>
        )}
        {(mode === 'operant' || mode === 'compare') && (
          <SceneCard
            tone="operant"
            title="Operant conditioning"
            titleKn="ಕ್ರಿಯಜನ್ಯ ಅನುಬಂಧನ"
            subtitle="Skinner · Behaviour → Consequence"
          >
            <OperantScene step={mode === 'compare' ? 2 : step} />
            <StepCaption steps={operantSteps} step={mode === 'compare' ? 2 : step} />
          </SceneCard>
        )}
      </div>

      {mode !== 'compare' && (
        <div className="flex items-center justify-between gap-3 border-t border-navy/10 px-4 py-3 dark:border-white/10">
          <div className="flex gap-2">
            {classicalSteps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStep(i)}
                className={`h-2.5 w-8 rounded-full transition ${
                  step === i ? 'bg-teal' : 'bg-navy/15 dark:bg-white/20'
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex items-center gap-1 rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-cream dark:bg-teal"
            >
              {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              {playing ? 'Pause' : 'Play'}
            </button>
            <button
              type="button"
              onClick={() => {
                setStep(0)
                setPlaying(true)
              }}
              className="inline-flex items-center gap-1 rounded-full border border-navy/15 px-3 py-1.5 text-xs font-semibold text-navy dark:border-white/20 dark:text-cream"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>
        </div>
      )}

      {mode === 'compare' && (
        <div className="border-t border-navy/10 px-4 py-4 dark:border-white/10">
          <div className="grid gap-2 sm:grid-cols-3">
            {[
              ['Order', 'Stimulus first', 'Behaviour first'],
              ['Response', 'Mostly involuntary', 'Voluntary'],
              ['Key idea', 'Association', 'Reinforcement'],
            ].map(([label, a, b]) => (
              <div key={label} className="rounded-2xl bg-cream/80 p-3 text-center dark:bg-navy">
                <p className="text-[11px] font-bold uppercase tracking-wide text-muted dark:text-cream/55">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-teal">{a}</p>
                <p className="text-sm font-semibold text-accent">{b}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function SceneCard({
  tone,
  title,
  titleKn,
  subtitle,
  children,
}: {
  tone: 'classical' | 'operant'
  title: string
  titleKn: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`rounded-2xl border p-3 ${
        tone === 'classical'
          ? 'border-teal/25 bg-teal/5'
          : 'border-accent/25 bg-accent/5'
      }`}
    >
      <p className="text-sm font-bold text-navy dark:text-cream">{title}</p>
      <p className="font-kannada text-xs text-muted dark:text-cream/65">{titleKn}</p>
      <p className="mt-1 text-[11px] font-medium text-blue-soft">{subtitle}</p>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function StepCaption({
  steps,
  step,
}: {
  steps: { title: string; titleKn: string; detail: string; detailKn: string }[]
  step: number
}) {
  const current = steps[step]
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={current.title}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        className="mt-3 rounded-xl bg-white/90 px-3 py-2 dark:bg-navy/80"
      >
        <p className="text-sm font-semibold text-navy dark:text-cream">
          Step {step + 1}: {current.title}
        </p>
        <p className="font-kannada text-xs text-teal">{current.titleKn}</p>
        <p className="mt-1 text-xs text-muted dark:text-cream/70">{current.detail}</p>
        <p className="font-kannada text-xs text-muted dark:text-cream/60">{current.detailKn}</p>
      </motion.div>
    </AnimatePresence>
  )
}

function ClassicalScene({ step }: { step: number }) {
  const showFood = step === 0 || step === 1
  const showBell = step >= 1
  const salivate = step === 0 || step === 2 || (step === 1 && true)

  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" role="img" aria-label="Classical conditioning scene">
      <rect x="8" y="8" width="304" height="164" rx="18" fill="#f7f3ea" />
      <text x="20" y="28" fontSize="11" fill="#5b6b7c">
        Pavlov’s dog
      </text>

      {/* Dog */}
      <ellipse cx="110" cy="120" rx="42" ry="28" fill="#c4a574" />
      <circle cx="148" cy="100" r="22" fill="#d2b48c" />
      <circle cx="156" cy="96" r="3" fill="#0b1f3a" />
      <ellipse cx="168" cy="104" rx="8" ry="5" fill="#a67c52" />
      <path d="M130 88 q-18 -22 -2 -34" stroke="#a67c52" strokeWidth="8" fill="none" strokeLinecap="round" />

      {/* Bowl */}
      <motion.g animate={{ opacity: showFood ? 1 : 0.15 }} transition={{ duration: 0.4 }}>
        <ellipse cx="210" cy="138" rx="28" ry="10" fill="#e07a3d" />
        <ellipse cx="210" cy="132" rx="22" ry="8" fill="#f3b089" />
        <text x="196" y="136" fontSize="10" fill="#0b1f3a">
          food
        </text>
      </motion.g>

      {/* Bell */}
      <motion.g
        animate={{
          opacity: showBell ? 1 : 0.2,
          rotate: showBell && step !== 0 ? [0, -8, 8, 0] : 0,
        }}
        transition={{ duration: 0.8, repeat: showBell ? Infinity : 0, repeatDelay: 1 }}
        style={{ originX: '240px', originY: '48px' }}
      >
        <path d="M240 40 l18 28 h-36 z" fill="#0d9488" />
        <circle cx="240" cy="70" r="4" fill="#0b1f3a" />
        <text x="252" y="58" fontSize="10" fill="#0b1f3a">
          bell
        </text>
      </motion.g>

      {/* Sound waves */}
      {showBell && (
        <>
          <circle cx="240" cy="55" r="16" fill="none" stroke="#0d9488" strokeWidth="2" className="animate-pulse-ring" />
          <circle cx="240" cy="55" r="16" fill="none" stroke="#0d9488" strokeWidth="2" className="animate-pulse-ring" style={{ animationDelay: '0.4s' }} />
        </>
      )}

      {/* Saliva drops */}
      <AnimatePresence>
        {salivate && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <circle cx="172" cy="118" r="3" fill="#3b82a0" className="origin-center" style={{ animation: 'drip 1s ease-in infinite' }} />
            <circle cx="178" cy="122" r="2.5" fill="#3b82a0" style={{ animation: 'drip 1.2s ease-in infinite 0.2s' }} />
            <text x="20" y="168" fontSize="11" fill="#0d9488" fontWeight="700">
              Response: salivation
            </text>
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  )
}

function OperantScene({ step }: { step: number }) {
  const press = step >= 1
  const food = step >= 2

  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" role="img" aria-label="Operant conditioning scene">
      <rect x="8" y="8" width="304" height="164" rx="18" fill="#fff8f2" />
      <text x="20" y="28" fontSize="11" fill="#5b6b7c">
        Skinner box
      </text>
      <rect x="40" y="48" width="240" height="110" rx="12" fill="#e8eef6" stroke="#3b82a0" strokeWidth="2" />

      {/* Lever */}
      <motion.g animate={{ y: press ? 6 : 0 }} transition={{ type: 'spring', stiffness: 200 }}>
        <rect x="200" y="78" width="14" height="40" rx="4" fill="#e07a3d" />
        <rect x="188" y="72" width="38" height="10" rx="4" fill="#c45f28" />
        <text x="232" y="82" fontSize="10" fill="#0b1f3a">
          lever
        </text>
      </motion.g>

      {/* Rat */}
      <motion.g
        animate={{ x: step === 0 ? 0 : 18 }}
        transition={{ duration: 0.6 }}
      >
        <ellipse cx="110" cy="120" rx="28" ry="16" fill="#7a6a5a" />
        <circle cx="136" cy="112" r="12" fill="#8a7a68" />
        <circle cx="140" cy="110" r="2" fill="#0b1f3a" />
        <path d="M84 120 q-20 8 -28 2" stroke="#7a6a5a" strokeWidth="4" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* Food pellet */}
      <AnimatePresence>
        {food && (
          <motion.g
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <circle cx="246" cy="128" r="8" fill="#e07a3d" />
            <text x="40" y="168" fontSize="11" fill="#e07a3d" fontWeight="700">
              Reinforcement: food pellet
            </text>
          </motion.g>
        )}
      </AnimatePresence>

      {press && !food && (
        <text x="40" y="168" fontSize="11" fill="#3b82a0" fontWeight="700">
          Behaviour: press lever
        </text>
      )}
      {step === 0 && (
        <text x="40" y="168" fontSize="11" fill="#5b6b7c" fontWeight="700">
          Exploring the box…
        </text>
      )}
    </svg>
  )
}
