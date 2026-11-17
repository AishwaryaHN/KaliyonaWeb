export type BackbencherStrategy =
  | 'acronym'
  | 'sequence'
  | 'comparison'
  | 'definition'
  | 'visual'

export interface RecallPoint {
  letter: string
  title: string
  body: string
  simple: string
  icon: 'lightbulb' | 'brain' | 'book' | 'target' | 'layers' | 'scale' | 'list' | 'sparkles' | 'users' | 'shield'
}

export interface ExamWriteStep {
  section: string
  items: string[]
}

export interface BackbencherRevision {
  strategy: BackbencherStrategy
  memoryTitle: string
  memoryDisplay: string
  memoryExplanation: string
  visualMetaphor?: string
  points: RecallPoint[]
  examSteps: ExamWriteStep[]
  intro?: string
  conclusion?: string
  priority?: 'high' | 'normal'
  oneLineIdea?: string
}