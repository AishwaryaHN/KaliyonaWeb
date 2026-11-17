import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  loadProgress,
  markStepComplete,
  savePracticeChecks,
  saveQuizResult,
  setLang as persistLang,
  setTheme as persistTheme,
  setStudyView as persistStudyView,
  type ProgressState,
  type StudyView,
} from '../lib/progress'

interface AppContextValue {
  progress: ProgressState
  theme: 'light' | 'dark'
  lang: 'en' | 'kn'
  studyView: StudyView
  setStudyView: (view: StudyView) => void
  toggleTheme: () => void
  toggleLang: () => void
  completeStep: (lessonId: string, stepId: string) => void
  recordQuiz: (lessonId: string, score: number, total: number) => void
  recordPractice: (lessonId: string, checked: string[]) => void
  refresh: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress())

  useEffect(() => {
    const root = document.documentElement
    if (progress.theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [progress.theme])

  const refresh = useCallback(() => setProgress(loadProgress()), [])

  const toggleTheme = useCallback(() => {
    const next = progress.theme === 'dark' ? 'light' : 'dark'
    setProgress(persistTheme(next))
  }, [progress.theme])

  const toggleLang = useCallback(() => {
    const next = progress.lang === 'en' ? 'kn' : 'en'
    setProgress(persistLang(next))
  }, [progress.lang])

  const setStudyView = useCallback((view: StudyView) => {
    setProgress(persistStudyView(view))
  }, [])

  const completeStep = useCallback((lessonId: string, stepId: string) => {
    setProgress(markStepComplete(lessonId, stepId))
  }, [])

  const recordQuiz = useCallback((lessonId: string, score: number, total: number) => {
    setProgress(saveQuizResult(lessonId, score, total))
  }, [])

  const recordPractice = useCallback((lessonId: string, checked: string[]) => {
    setProgress(savePracticeChecks(lessonId, checked))
  }, [])

  const value = useMemo(
    () => ({
      progress,
      theme: progress.theme,
      lang: progress.lang,
      studyView: progress.studyView ?? 'full',
      setStudyView,
      toggleTheme,
      toggleLang,
      completeStep,
      recordQuiz,
      recordPractice,
      refresh,
    }),
    [progress, setStudyView, toggleTheme, toggleLang, completeStep, recordQuiz, recordPractice, refresh],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
