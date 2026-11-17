/**
 * Question papers — LTA from QP LTA.pdf catalog.
 * Full answers: January 2025 only (until you share more).
 */

import { buildAllLtaPapers } from './buildLtaPapers'

export interface QuestionItem {
  number: number
  text: string
  marks: number | string
}

export interface PaperPart {
  id: 'A' | 'B' | 'C'
  label: string
  labelKn: string
  marksEach: number
  attemptAny: number
  totalMarks: number
  instruction: string
  questions: QuestionItem[]
}

export interface QuestionPaper {
  id: string
  subjectId: string
  code: string
  subject: string
  year: number
  yearLabel: string
  examination: string
  scheme: string
  time: string
  maxMarks: number
  instructions: string
  /** True when model answers are on the site */
  answersReady: boolean
  sourceNote?: string
  parts: PaperPart[]
}

export const questionPapers: QuestionPaper[] = buildAllLtaPapers()

export function getPaper(id: string) {
  return questionPapers.find((p) => p.id === id)
}

export function getPapersBySubject(subjectId: string) {
  return questionPapers.filter((p) => p.subjectId === subjectId)
}

/** Default paper when only calendar year is used in URL (e.g. /2025). */
export function getPaperBySubjectYear(subjectId: string, year: number) {
  const list = getPapersBySubject(subjectId).filter((p) => p.year === year)
  if (list.length === 0) return null
  const preferred =
    list.find((p) => p.id === `lta-${year}`) ??
    list.find((p) => p.answersReady) ??
    list[0]
  return preferred
}

export function findQuestion(paperId: string, questionNumber: number) {
  const paper = getPaper(paperId)
  if (!paper) return null
  for (const part of paper.parts) {
    const q = part.questions.find((item) => item.number === questionNumber)
    if (q) return { paper, part, question: q }
  }
  return null
}