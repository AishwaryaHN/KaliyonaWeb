import { demoLessonVocabIds } from './vocabulary'

export interface QuizOption {
  id: string
  text: string
  textKn?: string
}

export interface QuizQuestion {
  id: string
  prompt: string
  promptKn: string
  options: QuizOption[]
  correctId: string
  explainCorrect: string
  explainWrongKn: string
}

export interface ChecklistPoint {
  id: string
  text: string
  textKn: string
}

export interface DemoLesson {
  id: string
  paperId: string
  partId: 'B'
  questionNumber: number
  marks: number
  exactQuestion: string
  kannadaTranslation: string
  simpleEnglish: string
  examinerAsks: string
  examinerAsksKn: string
  writeForMarks: string[]
  beginnerStory: {
    title: string
    titleKn: string
    paragraphs: { en: string; kn: string }[]
  }
  memory: {
    oneLiner: string
    oneLinerKn: string
    keywords: string[]
    tricks: { title: string; detail: string; detailKn: string }[]
    everydayExample: string
    everydayExampleKn: string
  }
  examAnswer: {
    introduction: string
    points: { heading: string; body: string; kannadaHint: string }[]
    example: string
    conclusion: string
  }
  quiz: QuizQuestion[]
  checklist: ChecklistPoint[]
  vocabIds: readonly string[]
  steps: { id: string; label: string; labelKn: string }[]
}

export const demoLesson: DemoLesson = {
  id: 'lta-2025-b-8',
  paperId: 'lta-2025',
  partId: 'B',
  questionNumber: 8,
  marks: 5,
  exactQuestion: 'Differentiate classical conditioning and operant conditioning.',
  kannadaTranslation: 'ಸಾಂಪ್ರದಾಯಿಕ ಅನುಬಂಧನ ಮತ್ತು ಕ್ರಿಯಜನ್ಯ ಅನುಬಂಧನಗಳನ್ನು ವ್ಯತ್ಯಾಸಿಸಿ.',
  simpleEnglish:
    'Show the differences between two ways of learning: classical conditioning (Pavlov) and operant conditioning (Skinner).',
  examinerAsks:
    'The examiner wants a clear comparison — not only definitions. Write how the two theories differ on key points such as stimulus–response order, nature of response, role of reinforcement, and examples.',
  examinerAsksKn:
    'ಪರೀಕ್ಷಕರು ಕೇವಲ ವ್ಯಾಖ್ಯೆ ಅಲ್ಲ — ಎರಡು ಸಿದ್ಧಾಂತಗಳ ವ್ಯತ್ಯಾಸಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಬರೆಯಬೇಕು ಎಂದು ನಿರೀಕ್ಷಿಸುತ್ತಾರೆ.',
  writeForMarks: [
    'Brief meaning of both theories',
    'At least 4–5 clear points of difference',
    'One example for each (Pavlov’s dog / Skinner’s rat or classroom example)',
    'Short conclusion linking both to learning',
  ],
  beginnerStory: {
    title: 'Two different ways we learn',
    titleKn: 'ನಾವು ಕಲಿಯುವ ಎರಡು ವಿಧಾನಗಳು',
    paragraphs: [
      {
        en: 'Imagine Ravi hears the school bell every day just before lunch. After some days, the bell alone makes him feel hungry. He did not “decide” to feel hungry — it just happens. This is like classical conditioning.',
        kn: 'ರವಿ ಪ್ರತಿದಿನ ಊಟಕ್ಕೆ ಮೊದಲು ಶಾಲಾ ಬೆಲ್ ಕೇಳುತ್ತಾನೆ. ಕೆಲವು ದಿನಗಳ ನಂತರ ಬೆಲ್ ಕೇಳಿದರೆ ಮಾತ್ರ ಹಸಿವು ಬರುತ್ತದೆ. ಅವನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಹಸಿವು ಬರಿಸಿಕೊಳ್ಳುವುದಿಲ್ಲ. ಇದು ಸಾಂಪ್ರದಾಯಿಕ ಅನುಬಂಧನದಂತೆ.',
      },
      {
        en: 'Now imagine Meena raises her hand and answers well. The teacher praises her. Next time Meena raises her hand more often. She chose an action because of its result. This is like operant conditioning.',
        kn: 'ಮೀನಾ ಕೈ ಎತ್ತಿ ಉತ್ತರಿಸುತ್ತಾಳೆ. ಶಿಕ್ಷಕರು ಹೊಗಳುತ್ತಾರೆ. ಮರುಸಲು ಅವಳು ಹೆಚ್ಚು ಕೈ ಎತ್ತುತ್ತಾಳೆ. ಪರಿಣಾಮದಿಂದಾಗಿ ಅವಳು ಕ್ರಿಯೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತಾಳೆ. ಇದು ಕ್ರಿಯಜನ್ಯ ಅನುಬಂಧನದಂತೆ.',
      },
      {
        en: 'So remember: classical = learning by pairing signals (stimulus first). Operant = learning by consequences of our own actions (behaviour first).',
        kn: 'ನೆನಪಿಡಿ: ಸಾಂಪ್ರದಾಯಿಕ = ಸಂಕೇತಗಳನ್ನು ಜೋಡಿಸಿ ಕಲಿಯುವುದು (ಮೊದಲು ಪ್ರಚೋದನೆ). ಕ್ರಿಯಜನ್ಯ = ನಮ್ಮ ಕ್ರಿಯೆಯ ಪರಿಣಾಮದಿಂದ ಕಲಿಯುವುದು (ಮೊದಲು ವರ್ತನೆ).',
      },
    ],
  },
  memory: {
    oneLiner: 'Classical pairs signals; operant shapes actions by results.',
    oneLinerKn: 'ಸಾಂಪ್ರದಾಯಿಕ = ಸಂಕೇತ ಜೋಡಣೆ; ಕ್ರಿಯಜನ್ಯ = ಕ್ರಿಯೆಯ ಪರಿಣಾಮ.',
    keywords: [
      'Pavlov',
      'Skinner',
      'Stimulus → Response',
      'Behaviour → Consequence',
      'Involuntary',
      'Voluntary',
      'Reinforcement',
    ],
    tricks: [
      {
        title: 'Bell vs Button',
        detail: 'Classical = Bell (signal). Operant = Button/lever (action you do).',
        detailKn: 'ಸಾಂಪ್ರದಾಯಿಕ = ಬೆಲ್ (ಸಂಕೇತ). ಕ್ರಿಯಜನ್ಯ = ಬಟನ್/ಲಿವರ್ (ನೀವು ಮಾಡುವ ಕ್ರಿಯೆ).',
      },
      {
        title: 'CS vs OC order',
        detail: 'Classical: Stimulus first → Response. Operant: Response/Behaviour first → Reinforcement.',
        detailKn: 'ಸಾಂಪ್ರದಾಯಿಕ: ಪ್ರಚೋದನೆ → ಪ್ರತಿಕ್ರಿಯೆ. ಕ್ರಿಯಜನ್ಯ: ವರ್ತನೆ → ಬಲವರ್ಧನೆ.',
      },
    ],
    everydayExample:
      'Fear of dentist drill sound (classical) vs studying more after getting good marks (operant).',
    everydayExampleKn:
      'ಡೆಂಟಿಸ್ಟ್ ಡ್ರಿಲ್ ಶಬ್ದಕ್ಕೆ ಭಯ (ಸಾಂಪ್ರದಾಯಿಕ) vs ಒಳ್ಳೆಯ ಅಂಕ ಬಂದ ನಂತರ ಹೆಚ್ಚು ಓದುವುದು (ಕ್ರಿಯಜನ್ಯ).',
  },
  examAnswer: {
    introduction:
      'Classical conditioning and operant conditioning are two important behaviourist theories of learning. Both explain how behaviour is learned through experience, but they differ in process, nature of response and the role of reinforcement.',
    points: [
      {
        heading: 'Meaning',
        body: 'Classical conditioning (Pavlov) is learning through association of a neutral stimulus with an unconditioned stimulus so that the neutral stimulus later produces a conditioned response. Operant conditioning (Skinner) is learning in which the strength of a voluntary behaviour is changed by its consequences (reinforcement or punishment).',
        kannadaHint: 'ಸಾಂಪ್ರದಾಯಿಕ = ಸಂಕೇತ ಜೋಡಣೆ; ಕ್ರಿಯಜನ್ಯ = ಪರಿಣಾಮದಿಂದ ವರ್ತನೆ ಬದಲಾವಣೆ.',
      },
      {
        heading: 'Order of events',
        body: 'In classical conditioning, the stimulus comes first and then the response follows. In operant conditioning, the organism first emits a behaviour (operates on the environment) and then receives a consequence.',
        kannadaHint: 'ಸಾಂಪ್ರದಾಯಿಕ: ಮೊದಲು stimulus. ಕ್ರಿಯಜನ್ಯ: ಮೊದಲು behaviour.',
      },
      {
        heading: 'Nature of response',
        body: 'Classical conditioning mainly deals with involuntary / reflexive responses (for example salivation). Operant conditioning deals with voluntary behaviours that can be strengthened or weakened.',
        kannadaHint: 'ಸಾಂಪ್ರದಾಯಿಕ ≈ ಅನೈಚ್ಛಿಕ; ಕ್ರಿಯಜನ್ಯ ≈ ಐಚ್ಛಿಕ.',
      },
      {
        heading: 'Role of reinforcement',
        body: 'In classical conditioning, association between stimuli is central. In operant conditioning, reinforcement (and punishment) is central because consequences shape future behaviour.',
        kannadaHint: 'ಕ್ರಿಯಜನ್ಯದಲ್ಲಿ reinforcement ಮುಖ್ಯ.',
      },
      {
        heading: 'Typical experiment',
        body: 'Pavlov’s dog: bell paired with food → salivation to bell. Skinner’s rat: pressing a lever is followed by food → lever pressing increases.',
        kannadaHint: 'ನಾಯಿ + ಬೆಲ್ vs ಇಲಿ + ಲಿವರ್.',
      },
    ],
    example:
      'Classroom example: a child becomes anxious when hearing the exam bell after repeated pairing with stressful exams (classical). A child who receives praise for completing homework starts completing homework more regularly (operant).',
    conclusion:
      'Thus, classical conditioning explains learning through stimulus association, while operant conditioning explains learning through the consequences of voluntary actions. Both are useful for understanding classroom behaviour.',
  },
  quiz: [
    {
      id: 'q1',
      prompt: 'In classical conditioning, what usually comes first?',
      promptKn: 'ಸಾಂಪ್ರದಾಯಿಕ ಅನುಬಂಧನದಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಮೊದಲು ಏನು ಬರುತ್ತದೆ?',
      options: [
        { id: 'a', text: 'Reinforcement / consequence' },
        { id: 'b', text: 'Stimulus (signal)' },
        { id: 'c', text: 'Voluntary choice only' },
        { id: 'd', text: 'Punishment only' },
      ],
      correctId: 'b',
      explainCorrect: 'Classical conditioning starts with a stimulus that gets associated with another stimulus.',
      explainWrongKn: 'ಸರಿಯಾದುದು stimulus. ಕ್ರಿಯಜನ್ಯದಲ್ಲಿ ಮೊದಲು behaviour/consequence ಮುಖ್ಯ.',
    },
    {
      id: 'q2',
      prompt: 'Who is mainly associated with operant conditioning?',
      promptKn: 'ಕ್ರಿಯಜನ್ಯ ಅನುಬಂಧನಕ್ಕೆ ಮುಖ್ಯವಾಗಿ ಯಾರ ಹೆಸರು ಸಂಬಂಧಿಸಿದೆ?',
      options: [
        { id: 'a', text: 'Pavlov' },
        { id: 'b', text: 'Skinner' },
        { id: 'c', text: 'Piaget' },
        { id: 'd', text: 'Bruner' },
      ],
      correctId: 'b',
      explainCorrect: 'B. F. Skinner developed operant conditioning; Pavlov is linked with classical conditioning.',
      explainWrongKn: 'ಸರಿ: Skinner. Pavlov ಸಾಂಪ್ರದಾಯಿಕ ಅನುಬಂಧನಕ್ಕೆ.',
    },
    {
      id: 'q3',
      prompt: 'Salivation to a bell after pairing with food is mainly an example of…',
      promptKn: 'ಆಹಾರದೊಂದಿಗೆ ಜೋಡಿಸಿದ ನಂತರ ಬೆಲ್‌ಗೆ ಲಾಲಾ ಸುರಿಸುವುದು ಯಾವುದಕ್ಕೆ ಉದಾಹರಣೆ?',
      options: [
        { id: 'a', text: 'Operant conditioning' },
        { id: 'b', text: 'Classical conditioning' },
        { id: 'c', text: 'Insightful learning' },
        { id: 'd', text: 'Trial and error only' },
      ],
      correctId: 'b',
      explainCorrect: 'Pavlov’s experiment is the classic illustration of classical conditioning.',
      explainWrongKn: 'ಇದು Pavlov ನ classical conditioning ಉದಾಹರಣೆ.',
    },
    {
      id: 'q4',
      prompt: 'In operant conditioning, behaviour is mainly shaped by…',
      promptKn: 'ಕ್ರಿಯಜನ್ಯ ಅನುಬಂಧನದಲ್ಲಿ ವರ್ತನೆ ಮುಖ್ಯವಾಗಿ ಯಾವುದರಿಂದ ರೂಪುಗೊಳ್ಳುತ್ತದೆ?',
      options: [
        { id: 'a', text: 'Pairing of two stimuli only' },
        { id: 'b', text: 'Consequences such as reinforcement' },
        { id: 'c', text: 'Only inherited reflexes' },
        { id: 'd', text: 'Ignoring results of actions' },
      ],
      correctId: 'b',
      explainCorrect: 'Operant conditioning depends on consequences that follow a voluntary action.',
      explainWrongKn: 'ಸರಿ: reinforcement/punishment ಮುಂತಾದ consequences.',
    },
    {
      id: 'q5',
      prompt: 'Which statement is correct for a 5-mark “differentiate” answer?',
      promptKn: '5 ಅಂಕದ “differentiate” ಉತ್ತರಕ್ಕೆ ಯಾವುದು ಸರಿ?',
      options: [
        { id: 'a', text: 'Write only one definition' },
        { id: 'b', text: 'Write clear contrast points with examples' },
        { id: 'c', text: 'Write unrelated theories' },
        { id: 'd', text: 'Skip conclusion always' },
      ],
      correctId: 'b',
      explainCorrect: 'Differentiate means show differences clearly, with examples suitable for 5 marks.',
      explainWrongKn: 'ವ್ಯತ್ಯಾಸ ಬಿಂದುಗಳು + ಉದಾಹರಣೆ ಬರೆಯಿರಿ.',
    },
  ],
  checklist: [
    {
      id: 'c1',
      text: 'Defined / briefly introduced both classical and operant conditioning',
      textKn: 'ಎರಡೂ ಸಿದ್ಧಾಂತಗಳ ಸಂಕ್ಷಿಪ್ತ ಪರಿಚಯ',
    },
    {
      id: 'c2',
      text: 'Mentioned Pavlov (classical) and Skinner (operant)',
      textKn: 'ಪಾವ್ಲೋವ್ ಮತ್ತು ಸ್ಕಿನ್ನರ್ ಹೆಸರು',
    },
    {
      id: 'c3',
      text: 'Explained stimulus→response vs behaviour→consequence',
      textKn: 'ಕ್ರಮದ ವ್ಯತ್ಯಾಸ ವಿವರಿಸಿದ್ದೀರಾ',
    },
    {
      id: 'c4',
      text: 'Mentioned involuntary vs voluntary response',
      textKn: 'ಅನೈಚ್ಛಿಕ vs ಐಚ್ಛಿಕ',
    },
    {
      id: 'c5',
      text: 'Explained role of reinforcement in operant conditioning',
      textKn: 'ಬಲವರ್ಧನೆಯ ಪಾತ್ರ',
    },
    {
      id: 'c6',
      text: 'Gave at least one example for each type',
      textKn: 'ಪ್ರತಿಯೊಂದಕ್ಕೂ ಒಂದು ಉದಾಹರಣೆ',
    },
    {
      id: 'c7',
      text: 'Ended with a short conclusion',
      textKn: 'ಸಣ್ಣ ತೀರ್ಮಾನ',
    },
  ],
  vocabIds: demoLessonVocabIds,
  steps: [
    { id: 'understand', label: 'Understand the question', labelKn: 'ಪ್ರಶ್ನೆ ಅರ್ಥಮಾಡಿ' },
    { id: 'beginner', label: 'Explain like a beginner', labelKn: 'ಸರಳವಾಗಿ ಕಲಿಯಿರಿ' },
    { id: 'visual', label: 'Visualise the concept', labelKn: 'ನೋಡಿ ಅರ್ಥಮಾಡಿ' },
    { id: 'vocab', label: 'Vocabulary helper', labelKn: 'ಪದಕೋಶ' },
    { id: 'memory', label: 'Remember the concept', labelKn: 'ನೆನಪಿಡಿ' },
    { id: 'answer', label: 'Examination answer', labelKn: 'ಪರೀಕ್ಷಾ ಉತ್ತರ' },
    { id: 'quiz', label: 'Test understanding', labelKn: 'ಪರೀಕ್ಷಿಸಿ' },
    { id: 'practice', label: 'Write your answer', labelKn: 'ನೀವೇ ಬರೆಯಿರಿ' },
  ],
}

export function getDemoLesson(id: string) {
  if (id === demoLesson.id) return demoLesson
  return null
}
