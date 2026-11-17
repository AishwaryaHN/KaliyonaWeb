import type { QuestionAnswer } from './answerTypes'
import { lta2024PartA } from './lta2024PartA'
import { lta2024PartB } from './lta2024PartB'
import { lta2024PartC } from './lta2024PartC'
import { lta2025PartB } from './lta2025PartB'
import { lta2025PartC } from './lta2025PartC'

function adopt(src: QuestionAnswer, questionNumber: number): QuestionAnswer {
  return { ...src, questionNumber }
}

/** January 2024 Q15 = same topic as 2025 Part C Q18(a) only. */
function cbmFor2024Q15(): QuestionAnswer {
  const src = lta2025PartC[18] as QuestionAnswer
  const examWrite = src.examWrite?.split('\n\n(b)')[0]?.trim() ?? ''
  return {
    questionNumber: 15,
    examWrite,
    answerEnglish: 'CBM meaning and importance (full).',
  }
}

export const lta2024Answers: Record<number, QuestionAnswer> = {
  ...lta2024PartA,
  ...lta2024PartB,
  ...lta2024PartC,
  6: adopt(lta2025PartB[12] as QuestionAnswer, 6),
  8: adopt(lta2025PartB[11] as QuestionAnswer, 8),
  13: adopt(lta2025PartB[14] as QuestionAnswer, 13),
  15: cbmFor2024Q15(),
  18: adopt(lta2025PartC[21] as QuestionAnswer, 18),
  19: adopt(lta2025PartB[16] as QuestionAnswer, 19),
  20: adopt(lta2025PartC[20] as QuestionAnswer, 20),
  22: adopt(lta2025PartC[19] as QuestionAnswer, 22),
}