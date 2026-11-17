import type { QuestionAnswer } from './answerTypes'
import { lta2025PartB } from './lta2025PartB'
import { lta2026PartA } from './lta2026PartA'
import { lta2026PartB } from './lta2026PartB'
import { lta2026PartC } from './lta2026PartC'

function adopt(src: QuestionAnswer, questionNumber: number): QuestionAnswer {
  return { ...src, questionNumber }
}

export const lta2026Answers: Record<number, QuestionAnswer> = {
  ...lta2026PartA,
  ...lta2026PartB,
  ...lta2026PartC,
  12: adopt(lta2025PartB[11] as QuestionAnswer, 12),
}