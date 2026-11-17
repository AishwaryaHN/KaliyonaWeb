import catalog from './lta_all_papers_questions.json'
import type { PaperPart, QuestionItem, QuestionPaper } from './questionPapers'
import { lta2024VerifiedPaper } from './lta2024Verified'
import { lta2025VerifiedPaper } from './lta2025Verified'
import { lta2026VerifiedPaper } from './lta2026Verified'

const PART_A_INST =
  'Answer any FIVE of the following questions. Each answer not exceeding half a page (5 x 2 = 10)'
const PART_B_INST =
  'Answer any EIGHT of the following questions. Each answer not exceeding one and half a page (8 x 5 = 40)'
const PART_C_INST =
  'Answer any THREE of the following questions. Each answer not exceeding three pages (3 x 10 = 30)'

/** Part A from PDF page 40–41 (Dec/Jan 2025/26), verified visually. */
const LTA_2025_26_PART_A: QuestionItem[] = [
  { number: 1, text: 'What is classical conditioning learning?', marks: 2 },
  { number: 2, text: 'List four important characteristics of creativity.', marks: 2 },
  { number: 3, text: 'List any four perceptions.', marks: 2 },
  { number: 4, text: 'Mention the stages of memory.', marks: 2 },
  {
    number: 5,
    text: 'List the educational implications of operant conditioning learning theory.',
    marks: 2,
  },
  { number: 6, text: 'What is learning?', marks: 2 },
  { number: 7, text: 'What are transcripts?', marks: 2 },
]

function marksForNumber(n: number): number | string {
  if (n <= 7) return 2
  if (n <= 17) return 5
  return 10
}

function buildParts(questions: QuestionItem[]): PaperPart[] {
  const sorted = [...questions].sort((a, b) => a.number - b.number)
  const a = sorted.filter((q) => q.number >= 1 && q.number <= 7)
  const b = sorted.filter((q) => q.number >= 8 && q.number <= 17)
  const c = sorted.filter((q) => q.number >= 18 && q.number <= 22)
  return [
    {
      id: 'A',
      label: 'PART - A',
      labelKn: 'ವಿಭಾಗ - ಎ',
      marksEach: 2,
      attemptAny: 5,
      totalMarks: 10,
      instruction: PART_A_INST,
      questions: a,
    },
    {
      id: 'B',
      label: 'PART - B',
      labelKn: 'ವಿಭಾಗ - ಬಿ',
      marksEach: 5,
      attemptAny: 8,
      totalMarks: 40,
      instruction: PART_B_INST,
      questions: b,
    },
    {
      id: 'C',
      label: 'PART - C',
      labelKn: 'ವಿಭಾಗ - ಸಿ',
      marksEach: 10,
      attemptAny: 3,
      totalMarks: 30,
      instruction: PART_C_INST,
      questions: c,
    },
  ]
}

function catalogToPaper(entry: (typeof catalog)[number]): QuestionPaper {
  let questions: QuestionItem[] = entry.questions.map((q) => ({
    number: q.number,
    text: q.text.replace(/\s*\([0-9+\s=\.]+\)\s*$/, '').trim(),
    marks: marksForNumber(q.number),
  }))

  if (entry.id === 'lta-2025-26') {
    const rest = questions.filter((q) => q.number > 7)
    questions = [...LTA_2025_26_PART_A, ...rest]
    // fix truncated Q15/Q16 from OCR
    questions = questions.map((q) => {
      if (q.number === 15)
        return {
          ...q,
          text: 'How does physical and psychological environment influence on learning?',
        }
      if (q.number === 16)
        return {
          ...q,
          text: 'Differentiate ‘Assessment for learning’ and ‘Assessment of learning’.',
        }
      return q
    })
  }

  return {
    id: entry.id,
    subjectId: 'lta',
    code: '30201',
    subject: 'LEARNING, TEACHING AND ASSESSMENT',
    year: entry.year,
    yearLabel: entry.yearLabel,
    examination: `Second Semester B.Ed.(Theory) Degree Examination, ${entry.yearLabel}`,
    scheme: 'CBCS Scheme',
    time: '3 hours',
    maxMarks: 80,
    instructions: 'Answers should be written completely either in English or Kannada.',
    answersReady: false,
    sourceNote:
      entry.id === 'lta-2025'
        ? 'Verified wording'
        : 'Question list from QP LTA.pdf (OCR). Cross-check exact wording on PDF before exam.',
    parts: buildParts(questions),
  }
}

export function buildAllLtaPapers(): QuestionPaper[] {
  const fromCatalog = catalog
    .filter((e) => e.id !== 'lta-2025' && e.id !== 'lta-2024' && e.id !== 'lta-2025-26')
    .map(catalogToPaper)
  return [...fromCatalog, lta2024VerifiedPaper, lta2025VerifiedPaper, lta2026VerifiedPaper].sort(
    (a, b) => {
    if (a.year !== b.year) return a.year - b.year
      return a.id.localeCompare(b.id)
    },
  )
}