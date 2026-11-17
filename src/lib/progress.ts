const KEY = 'kaliyona-progress-v1'

export interface LessonProgress {
  lessonId: string
  completedSteps: string[]
  quizScore?: number
  quizTotal?: number
  practiceChecked?: string[]
  lastVisited: string
}

export type StudyView = 'full' | 'quick'

export interface ProgressState {
  theme: 'light' | 'dark'
  lang: 'en' | 'kn'
  studyView: StudyView
  continueLessonId?: string
  lessons: Record<string, LessonProgress>
}

const defaultState: ProgressState = {
  theme: 'light',
  lang: 'en',
  studyView: 'full',
  lessons: {},
}

export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultState
    return { ...defaultState, ...JSON.parse(raw) }
  } catch {
    return defaultState
  }
}

export function saveProgress(state: ProgressState) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

export function markStepComplete(lessonId: string, stepId: string) {
  const state = loadProgress()
  const current = state.lessons[lessonId] ?? {
    lessonId,
    completedSteps: [],
    lastVisited: new Date().toISOString(),
  }
  if (!current.completedSteps.includes(stepId)) {
    current.completedSteps = [...current.completedSteps, stepId]
  }
  current.lastVisited = new Date().toISOString()
  state.lessons[lessonId] = current
  state.continueLessonId = lessonId
  saveProgress(state)
  return state
}

export function saveQuizResult(lessonId: string, score: number, total: number) {
  const state = loadProgress()
  const current = state.lessons[lessonId] ?? {
    lessonId,
    completedSteps: [],
    lastVisited: new Date().toISOString(),
  }
  current.quizScore = score
  current.quizTotal = total
  current.lastVisited = new Date().toISOString()
  if (!current.completedSteps.includes('quiz')) {
    current.completedSteps = [...current.completedSteps, 'quiz']
  }
  state.lessons[lessonId] = current
  state.continueLessonId = lessonId
  saveProgress(state)
  return state
}

export function savePracticeChecks(lessonId: string, checked: string[]) {
  const state = loadProgress()
  const current = state.lessons[lessonId] ?? {
    lessonId,
    completedSteps: [],
    lastVisited: new Date().toISOString(),
  }
  current.practiceChecked = checked
  current.lastVisited = new Date().toISOString()
  if (checked.length > 0 && !current.completedSteps.includes('practice')) {
    current.completedSteps = [...current.completedSteps, 'practice']
  }
  state.lessons[lessonId] = current
  state.continueLessonId = lessonId
  saveProgress(state)
  return state
}

export function setTheme(theme: 'light' | 'dark') {
  const state = loadProgress()
  state.theme = theme
  saveProgress(state)
  return state
}

export function setLang(lang: 'en' | 'kn') {
  const state = loadProgress()
  state.lang = lang
  saveProgress(state)
  return state
}

export function setStudyView(studyView: StudyView) {
  const state = loadProgress()
  state.studyView = studyView
  saveProgress(state)
  return state
}
