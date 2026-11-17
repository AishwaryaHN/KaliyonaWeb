export interface QuickQuizItem {
  id: string
  prompt: string
  options: { id: string; text: string }[]
  correctId: string
}

export const partBQuickQuiz: QuickQuizItem[] = [
  {
    id: 'b1',
    prompt: 'Who developed classical conditioning?',
    options: [
      { id: 'a', text: 'Skinner' },
      { id: 'b', text: 'Pavlov' },
      { id: 'c', text: 'Thorndike' },
    ],
    correctId: 'b',
  },
  {
    id: 'b2',
    prompt: "What is the highest level in Maslow's hierarchy?",
    options: [
      { id: 'a', text: 'Safety' },
      { id: 'b', text: 'Esteem' },
      { id: 'c', text: 'Self-actualisation' },
    ],
    correctId: 'c',
  },
  {
    id: 'b3',
    prompt: 'Who conducted the insightful learning experiment with Sultan?',
    options: [
      { id: 'a', text: 'Kohler' },
      { id: 'b', text: 'Guilford' },
      { id: 'c', text: 'Maslow' },
    ],
    correctId: 'a',
  },
  {
    id: 'b4',
    prompt: 'Assessment for Learning is mainly:',
    options: [
      { id: 'a', text: 'Formative assessment' },
      { id: 'b', text: 'Summative assessment' },
      { id: 'c', text: 'Annual examination only' },
    ],
    correctId: 'a',
  },
  {
    id: 'b5',
    prompt: 'Who developed trial and error learning theory?',
    options: [
      { id: 'a', text: 'Pavlov' },
      { id: 'b', text: 'Thorndike' },
      { id: 'c', text: 'Sternberg' },
    ],
    correctId: 'b',
  },
  {
    id: 'b6',
    prompt: "What are Guilford's three dimensions?",
    options: [
      { id: 'a', text: 'Memory, learning, teaching' },
      { id: 'b', text: 'Operations, contents, products' },
      { id: 'c', text: 'Food, safety, love' },
    ],
    correctId: 'b',
  },
  {
    id: 'b7',
    prompt: 'Which stage includes preparing lesson plans before class?',
    options: [
      { id: 'a', text: 'Pre-active stage' },
      { id: 'b', text: 'Interactive stage' },
      { id: 'c', text: 'Post-active stage' },
    ],
    correctId: 'a',
  },
]

export const partBRevisionRows = [
  { q: 'Q8', tip: 'Classical (Pavlov) vs Operant (Skinner)' },
  { q: 'Q9', tip: "Maslow's five needs + educational implications" },
  { q: 'Q10', tip: '6 steps: identify → verify' },
  { q: 'Q11', tip: 'Kohler Sultan: stick + boxes; 4 insight stages' },
  { q: 'Q12', tip: 'AfL formative vs AoL summative' },
  { q: 'Q13', tip: 'Observe → Compare → Abstract → Apply' },
  { q: 'Q14', tip: 'Convergent, Divergent, Critical, Creative' },
  { q: 'Q15', tip: "Thorndike's cat + Readiness, Exercise, Effect" },
  { q: 'Q16', tip: 'Operations, Contents, Products (SOI)' },
  { q: 'Q17', tip: 'Pre-active, Interactive, Post-active' },
]