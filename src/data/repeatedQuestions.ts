import { getPapersBySubject, type QuestionPaper } from './questionPapers'

export interface RepeatOccurrence {
  paperId: string
  questionNumber: number
}

export interface RepeatGroup {
  id: string
  /** Short topic label */
  label: string
  occurrences: RepeatOccurrence[]
}

/** Same model answer / topic repeated across exam years (verified + text match). */
const EXPLICIT_GROUPS: Omit<RepeatGroup, 'id'>[] = [
  {
    label: 'Insightful learning (Kohler)',
    occurrences: [
      { paperId: 'lta-2024', questionNumber: 8 },
      { paperId: 'lta-2025', questionNumber: 11 },
      { paperId: 'lta-2025-26', questionNumber: 12 },
    ],
  },
  {
    label: 'Classical vs operant conditioning',
    occurrences: [{ paperId: 'lta-2025', questionNumber: 8 }],
  },
  {
    label: 'Assessment for vs of learning',
    occurrences: [
      { paperId: 'lta-2024', questionNumber: 6 },
      { paperId: 'lta-2025', questionNumber: 12 },
      { paperId: 'lta-2025-26', questionNumber: 16 },
    ],
  },
  {
    label: 'Steps of concept formation',
    occurrences: [{ paperId: 'lta-2025', questionNumber: 13 }],
  },
  {
    label: 'Thinking — meaning & types',
    occurrences: [
      { paperId: 'lta-2024', questionNumber: 13 },
      { paperId: 'lta-2025', questionNumber: 14 },
      { paperId: 'lta-2025-26', questionNumber: 11 },
    ],
  },
  {
    label: 'Meaning & stages of teaching',
    occurrences: [
      { paperId: 'lta-2025', questionNumber: 17 },
      { paperId: 'lta-2025-26', questionNumber: 13 },
    ],
  },
  {
    label: "Guilford's Structure of Intellect (SOI)",
    occurrences: [
      { paperId: 'lta-2024', questionNumber: 19 },
      { paperId: 'lta-2025', questionNumber: 16 },
    ],
  },
  {
    label: 'Curriculum-based measurement (CBM)',
    occurrences: [
      { paperId: 'lta-2024', questionNumber: 15 },
      { paperId: 'lta-2025', questionNumber: 18 },
    ],
  },
  {
    label: 'Classical conditioning (Pavlov)',
    occurrences: [
      { paperId: 'lta-2024', questionNumber: 18 },
      { paperId: 'lta-2025', questionNumber: 21 },
    ],
  },
  {
    label: 'Maxims of teaching',
    occurrences: [
      { paperId: 'lta-2024', questionNumber: 20 },
      { paperId: 'lta-2025', questionNumber: 20 },
      { paperId: 'lta-2025-26', questionNumber: 20 },
    ],
  },
  {
    label: 'Creative person & fostering creativity',
    occurrences: [
      { paperId: 'lta-2024', questionNumber: 22 },
      { paperId: 'lta-2025', questionNumber: 19 },
      { paperId: 'lta-2025-26', questionNumber: 9 },
    ],
  },
  {
    label: 'Leadership role of teacher',
    occurrences: [
      { paperId: 'lta-2025', questionNumber: 22 },
      { paperId: 'lta-2025-26', questionNumber: 21 },
    ],
  },
]

function normalizeQuestionText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function mergeTextMatchGroups(papers: QuestionPaper[], base: RepeatGroup[]): RepeatGroup[] {
  const byKey = new Map<string, RepeatOccurrence[]>()
  for (const paper of papers) {
    if (!paper.answersReady) continue
    for (const part of paper.parts) {
      for (const q of part.questions) {
        const key = normalizeQuestionText(q.text)
        if (key.length < 12) continue
        const list = byKey.get(key) ?? []
        if (!list.some((o) => o.paperId === paper.id && o.questionNumber === q.number)) {
          list.push({ paperId: paper.id, questionNumber: q.number })
        }
        byKey.set(key, list)
      }
    }
  }

  const groups = [...base]
  let autoId = 0
  for (const [key, occurrences] of byKey) {
    if (occurrences.length < 2) continue
    const paperIds = new Set(occurrences.map((o) => o.paperId))
    if (paperIds.size < 2) continue
    const already = groups.some((g) =>
      occurrences.every((o) =>
        g.occurrences.some((x) => x.paperId === o.paperId && x.questionNumber === o.questionNumber),
      ),
    )
    if (already) continue
    const sample = papers
      .flatMap((p) => p.parts.flatMap((pt) => pt.questions))
      .find((q) => normalizeQuestionText(q.text) === key)
    groups.push({
      id: `text-${autoId++}`,
      label: sample?.text.slice(0, 64) ?? key.slice(0, 48),
      occurrences: occurrences.sort((a, b) => a.paperId.localeCompare(b.paperId)),
    })
  }
  return groups
}

let cachedLta: RepeatGroup[] | null = null

export function getRepeatGroups(subjectId: string): RepeatGroup[] {
  if (subjectId !== 'lta') return []
  if (cachedLta) return cachedLta
  const papers = getPapersBySubject('lta')
  const base: RepeatGroup[] = EXPLICIT_GROUPS.map((g, i) => ({
    ...g,
    id: `repeat-${i}`,
  }))
  cachedLta = mergeTextMatchGroups(papers, base)
  return cachedLta
}

export function getRepeatGroupForQuestion(paperId: string, questionNumber: number): RepeatGroup | null {
  return (
    getRepeatGroups('lta').find((g) =>
      g.occurrences.some((o) => o.paperId === paperId && o.questionNumber === questionNumber),
    ) ?? null
  )
}

export function repeatedQuestionNumbersInPaper(paperId: string): number[] {
  const nums = new Set<number>()
  for (const g of getRepeatGroups('lta')) {
    for (const o of g.occurrences) {
      if (o.paperId === paperId) nums.add(o.questionNumber)
    }
  }
  return [...nums].sort((a, b) => a - b)
}