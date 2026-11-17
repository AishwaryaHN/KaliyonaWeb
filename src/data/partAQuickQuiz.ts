export interface QuickQuizItem {
  id: string
  prompt: string
  options: { id: string; text: string }[]
  correctId: string
}

export const partAQuickQuiz: QuickQuizItem[] = [
  {
    id: 'a1',
    prompt: 'Which concept has two or more features together?',
    options: [
      { id: 'a', text: 'Conjunctive concept' },
      { id: 'b', text: 'Practical intelligence' },
      { id: 'c', text: 'Transcript' },
    ],
    correctId: 'a',
  },
  {
    id: 'a2',
    prompt: 'Which one is an influence of the physical environment?',
    options: [
      { id: 'a', text: 'Memory retrieval' },
      { id: 'b', text: 'Ventilation' },
      { id: 'c', text: 'Creative thinking' },
    ],
    correctId: 'b',
  },
  {
    id: 'a3',
    prompt: 'What makes a conditioned response become established?',
    options: [
      { id: 'a', text: 'Repeated association' },
      { id: 'b', text: 'Sleeping' },
      { id: 'c', text: 'Writing notes' },
    ],
    correctId: 'a',
  },
  {
    id: 'a4',
    prompt: 'Which list matches stages of memory in your Part A bank?',
    options: [
      { id: 'a', text: 'Read, write, speak' },
      { id: 'b', text: 'Encoding, storage, recall, recognition' },
      { id: 'c', text: 'Observe, compare, classify' },
    ],
    correctId: 'b',
  },
  {
    id: 'a5',
    prompt: 'January 2025 Q7 on the verified paper asks which theory?',
    options: [
      { id: 'a', text: 'Triarchic theory (Sternberg)' },
      { id: 'b', text: 'Thurstone only — no Triarchic on paper' },
      { id: 'c', text: 'Guilford SOI model' },
    ],
    correctId: 'a',
  },
]