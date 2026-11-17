import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getDemoLesson } from '../data/demoLesson'
import { vocabulary } from '../data/vocabulary'
import { LessonLayout } from '../components/LessonLayout'
import { ConditioningCompare } from '../animations/ConditioningCompare'
import { VocabularyCard } from '../components/VocabularyCard'
import { VocabText } from '../components/VocabText'
import { AnswerSection, PracticeWriter } from '../components/AnswerSection'
import { Quiz } from '../components/Quiz'
import { useApp } from '../context/AppContext'

export function LessonPage() {
  const { lessonId = '' } = useParams()
  const lesson = getDemoLesson(lessonId)
  const { completeStep, lang } = useApp()
  const [activeStep, setActiveStep] = useState(lesson?.steps[0]?.id ?? 'understand')

  useEffect(() => {
    if (!lesson) return
    completeStep(lesson.id, activeStep)
  }, [activeStep, lesson, completeStep])

  const vocabEntries = useMemo(() => {
    if (!lesson) return []
    return lesson.vocabIds.map((id) => vocabulary[id]).filter(Boolean)
  }, [lesson])

  if (!lesson) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-lg font-semibold text-navy dark:text-cream">Lesson not available yet</p>
        <p className="mt-2 text-sm text-muted">Only the first Part B demo lesson is fully built.</p>
        <Link to="/subjects/lta/2025/paper" className="mt-4 inline-block text-teal">
          Back to paper
        </Link>
      </div>
    )
  }

  function go(stepId: string) {
    setActiveStep(stepId)
    document.getElementById('lesson-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const modelPreview = [
    lesson.examAnswer.introduction,
    ...lesson.examAnswer.points.map((p, i) => `${i + 1}. ${p.heading}: ${p.body}`),
    `Example: ${lesson.examAnswer.example}`,
    lesson.examAnswer.conclusion,
  ].join('\n\n')

  return (
    <LessonLayout
      title={`Q${lesson.questionNumber}. ${lesson.exactQuestion}`}
      subtitle="Exact wording from January 2025 LTA paper (Q.P. Code 30201). Learn visually, then write the exam answer."
      paperPath="/subjects/lta/2025/paper"
      lessonId={lesson.id}
      steps={lesson.steps}
      activeStep={activeStep}
      onStepChange={go}
    >
      <div id="lesson-panel" className="space-y-4">
        {activeStep === 'understand' && (
          <StepShell title="Step 1 — Understand the question" titleKn="ಹಂತ 1 — ಪ್ರಶ್ನೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ">
            <div className="rounded-3xl bg-navy p-5 text-cream">
              <p className="text-xs font-bold uppercase tracking-wider text-accent-soft">Exact original English</p>
              <p className="mt-2 text-lg font-semibold leading-relaxed">{lesson.exactQuestion}</p>
              <p className="mt-3 text-sm text-cream/70">{lesson.marks} marks · Part B</p>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <InfoCard label="Simple Kannada" kn>
                {lesson.kannadaTranslation}
              </InfoCard>
              <InfoCard label="Simple English">
                <VocabText text={lesson.simpleEnglish} />
              </InfoCard>
              <InfoCard label="What is the examiner asking?">
                <VocabText text={lesson.examinerAsks} />
                <p className="font-kannada mt-2 text-xs text-teal">{lesson.examinerAsksKn}</p>
              </InfoCard>
              <InfoCard label="What should you write for marks?">
                <ul className="list-disc space-y-1 pl-4">
                  {lesson.writeForMarks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </InfoCard>
            </div>
            <NextButton onClick={() => go('beginner')} label="Next: beginner explanation" />
          </StepShell>
        )}

        {activeStep === 'beginner' && (
          <StepShell title="Step 2 — Explain it like a beginner" titleKn="ಹಂತ 2 — ಸರಳವಾಗಿ ಅರ್ಥಮಾಡಿ">
            <h3 className="font-display text-xl font-bold text-navy dark:text-cream">
              {lang === 'kn' ? lesson.beginnerStory.titleKn : lesson.beginnerStory.title}
            </h3>
            <div className="mt-4 space-y-4">
              {lesson.beginnerStory.paragraphs.map((p) => (
                <motion.article
                  key={p.en}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-3xl border border-navy/10 bg-white p-4 dark:border-white/10 dark:bg-navy-soft"
                >
                  <p className="text-sm leading-relaxed text-navy dark:text-cream/90">
                    <VocabText text={p.en} />
                  </p>
                  <p className="font-kannada mt-3 border-t border-navy/5 pt-3 text-sm leading-relaxed text-muted dark:border-white/10 dark:text-cream/70">
                    {p.kn}
                  </p>
                </motion.article>
              ))}
            </div>
            <NextButton onClick={() => go('visual')} label="Next: visualise" />
          </StepShell>
        )}

        {activeStep === 'visual' && (
          <StepShell title="Step 3 — Visualise the concept" titleKn="ಹಂತ 3 — ನೋಡಿ ಅರ್ಥಮಾಡಿ">
            <p className="mb-4 text-sm text-muted dark:text-cream/70">
              Watch Classical (Pavlov) and Operant (Skinner) side by side. Use Play / Compare to see the difference.
            </p>
            <ConditioningCompare />
            <NextButton onClick={() => go('vocab')} label="Next: vocabulary helper" />
          </StepShell>
        )}

        {activeStep === 'vocab' && (
          <StepShell title="Step 4 — Kannada–English vocabulary" titleKn="ಹಂತ 4 — ಪದಕೋಶ">
            <p className="mb-4 text-sm text-muted dark:text-cream/70">
              Hover (desktop) or tap (mobile) highlighted words anywhere in the lesson. Below are the curated academic terms for this question.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {vocabEntries.map((entry) => (
                <VocabularyCard key={entry.id} entry={entry} />
              ))}
            </div>
            <NextButton onClick={() => go('memory')} label="Next: memory aids" />
          </StepShell>
        )}

        {activeStep === 'memory' && (
          <StepShell title="Step 5 — Remember the concept" titleKn="ಹಂತ 5 — ನೆನಪಿಡಿ">
            <div className="rounded-3xl bg-teal p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-white/70">One-line</p>
              <p className="mt-2 text-lg font-semibold">{lesson.memory.oneLiner}</p>
              <p className="font-kannada mt-2 text-sm text-white/85">{lesson.memory.oneLinerKn}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {lesson.memory.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy shadow-sm dark:bg-navy-soft dark:text-cream"
                >
                  {k}
                </span>
              ))}
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {lesson.memory.tricks.map((t) => (
                <div
                  key={t.title}
                  className="rounded-3xl border border-navy/10 bg-white p-4 dark:border-white/10 dark:bg-navy-soft"
                >
                  <p className="font-bold text-navy dark:text-cream">{t.title}</p>
                  <p className="mt-2 text-sm text-muted dark:text-cream/75">{t.detail}</p>
                  <p className="font-kannada mt-2 text-xs text-teal">{t.detailKn}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-3xl border border-accent/30 bg-accent/10 p-4">
              <p className="text-sm font-semibold text-navy dark:text-cream">Everyday life link</p>
              <p className="mt-2 text-sm text-navy/80 dark:text-cream/80">{lesson.memory.everydayExample}</p>
              <p className="font-kannada mt-2 text-xs text-muted dark:text-cream/65">
                {lesson.memory.everydayExampleKn}
              </p>
            </div>
            <NextButton onClick={() => go('answer')} label="Next: exam answer" />
          </StepShell>
        )}

        {activeStep === 'answer' && (
          <StepShell title="Step 6 — Examination answer" titleKn="ಹಂತ 6 — ಪರೀಕ್ಷಾ ಉತ್ತರ">
            <AnswerSection
              lessonId={lesson.id}
              introduction={lesson.examAnswer.introduction}
              points={lesson.examAnswer.points}
              example={lesson.examAnswer.example}
              conclusion={lesson.examAnswer.conclusion}
            />
            <NextButton onClick={() => go('quiz')} label="Next: quiz" />
          </StepShell>
        )}

        {activeStep === 'quiz' && (
          <StepShell title="Step 7 — Test your understanding" titleKn="ಹಂತ 7 — ಪರೀಕ್ಷಿಸಿ">
            <Quiz
              lessonId={lesson.id}
              questions={lesson.quiz}
              onComplete={() => completeStep(lesson.id, 'quiz')}
            />
            <NextButton onClick={() => go('practice')} label="Next: write your answer" />
          </StepShell>
        )}

        {activeStep === 'practice' && (
          <StepShell title="Step 8 — Write the answer yourself" titleKn="ಹಂತ 8 — ನೀವೇ ಬರೆಯಿರಿ">
            <PracticeWriter
              lessonId={lesson.id}
              checklist={lesson.checklist}
              modelPreview={modelPreview}
              onComplete={() => completeStep(lesson.id, 'practice')}
            />
          </StepShell>
        )}
      </div>
    </LessonLayout>
  )
}

function StepShell({
  title,
  titleKn,
  children,
}: {
  title: string
  titleKn: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[2rem] border border-navy/10 bg-cream/40 p-4 dark:border-white/10 dark:bg-navy/30 md:p-6">
      <h2 className="font-display text-xl font-bold text-navy dark:text-cream md:text-2xl">{title}</h2>
      <p className="font-kannada mt-1 text-sm text-teal">{titleKn}</p>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function InfoCard({
  label,
  children,
  kn,
}: {
  label: string
  children: React.ReactNode
  kn?: boolean
}) {
  return (
    <div className="rounded-3xl border border-navy/10 bg-white p-4 dark:border-white/10 dark:bg-navy-soft">
      <p className="text-xs font-bold uppercase tracking-wide text-blue-soft">{label}</p>
      <div className={`mt-2 text-sm leading-relaxed text-navy dark:text-cream/90 ${kn ? 'font-kannada' : ''}`}>
        {children}
      </div>
    </div>
  )
}

function NextButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-cream transition hover:bg-teal dark:bg-teal"
    >
      {label} →
    </button>
  )
}
