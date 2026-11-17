import { lta2024Answers } from './lta2024Answers'
import { lta2026Answers } from './lta2026Answers'
import { lta2025PartB } from './lta2025PartB'
import { lta2025PartC } from './lta2025PartC'
import type { QuestionAnswer } from './answerTypes'

export type { QuestionAnswer } from './answerTypes'

/** Model examination answers — LTA January 2025, Q.P. 30201 (marks-sized). */

export const lta2025Answers: Record<number, QuestionAnswer> = {
  1: {
    questionNumber: 1,
    whatAsking: 'What are concepts where two or more traits must appear together?',
    kannadaMeaning: 'ಎರಡು ಅಥವಾ ಹೆಚ್ಚಿನ ಗುಣಲಕ್ಷಣಗಳು ಒಟ್ಟಿಗೆ ಇರುವ ಪರಿಕಲ್ಪನೆ.',
    examWrite:
      'Conjunctive concepts are concepts in which two or more common characteristics are combined to identify an object or idea.',
    example:
      'A square has four equal sides and four right angles. Both characteristics are necessary to identify it as a square.',
    remember: 'Square = four equal sides + four right angles (both needed).',
    answerEnglish:
      'Conjunctive concepts combine two or more common characteristics. Example: a square.',
    hintKannada: 'ಜೋಡಿ ಗುಣಲಕ್ಷಣಗಳ ಪರಿಕಲ್ಪನೆ.',
  },
  2: {
    questionNumber: 2,
    whatAsking: 'Mention four ways the physical environment affects learning.',
    kannadaMeaning: 'ಭೌತಿಕ ಪರಿಸರದ ನಾಲ್ಕು ಪ್ರಭಾವಗಳು.',
    examWrite: `The physical environment influences learning in the following ways:

1. Lighting: Proper lighting helps students read and write comfortably.
2. Ventilation: Fresh air keeps students active and comfortable.
3. Seating arrangement: Comfortable seating helps students concentrate.
4. Classroom cleanliness: A clean classroom creates a healthy learning atmosphere.`,
    remember: 'Light, Air, Seating, Clean classroom.',
    answerEnglish: 'Lighting, ventilation, seating, classroom cleanliness.',
    hintKannada: 'ಬೆಳಕು, ಗಾಳಿ, ಆಸನ, ಶುಚಿತ್ವ.',
  },
  3: {
    questionNumber: 3,
    whatAsking: "What is 'fixation' in conditioned learning?",
    kannadaMeaning: 'ಶರ್ತಿತ ಕಲಿಕೆಯಲ್ಲಿ ಸ್ಥಿರೀಕರಣ (fixation) ಏನು?',
    examWrite:
      'Fixation in conditioned learning refers to establishing a conditioned response through repeated association of a conditioned stimulus with an unconditioned stimulus.',
    example:
      'A dog learns to salivate when it hears a bell after the bell is repeatedly associated with food.',
    remember: 'Repeated CS + UCS → conditioned response becomes fixed.',
    answerEnglish: 'Fixation = firm conditioned response through repeated pairing.',
    hintKannada: 'ಪುನರಾವರ್ತಿತ ಜೋಡಣೆ.',
  },
  4: {
    questionNumber: 4,
    whatAsking: 'What are the stages of memory?',
    kannadaMeaning: 'ಸ್ಮೃತಿಯ ಹಂತಗಳು.',
    examWrite: `The important stages of memory are:

1. Learning or Encoding: Receiving and understanding information.
2. Retention or Storage: Keeping information in the mind.
3. Recall: Remembering previously learned information.
4. Recognition: Identifying previously learned information when presented again.`,
    remember: 'Encode → Store → Recall → Recognize.',
    answerEnglish: 'Encoding, storage, recall, recognition.',
    hintKannada: 'ನಾಲ್ಕು ಹಂತಗಳ ಸ್ಮೃತಿ.',
  },
  5: {
    questionNumber: 5,
    whatAsking: 'Why must a classroom teacher know the maxims of teaching?',
    kannadaMeaning: 'ಬೋಧನಾ ಸೂತ್ರಗಳ ಜ್ಞಾನ ಏಕೆ ಬೇಕು?',
    examWrite: `Knowledge of maxims of teaching is necessary because:

1. It makes teaching easy and effective.
2. It helps teachers move from known to unknown.
3. It develops students' interest in learning.
4. It helps in better understanding of concepts.`,
    remember: 'Easy teaching, known→unknown, interest, understanding.',
    answerEnglish: 'Maxims make teaching effective and meaningful.',
    hintKannada: 'ಸರಳ ಬೋಧನೆ + ಆಸಕ್ತಿ.',
  },
  6: {
    questionNumber: 6,
    whatAsking: 'What are transcripts?',
    kannadaMeaning: 'ಟ್ರಾನ್ಸ್ಕ್ರಿಪ್ಟ್ (ವಿದ್ಯಾರ್ಥಿ ದಾಖಲೆ) ಏನು?',
    examWrite: `A transcript is an official document that contains the academic record of a student, including subjects studied, marks obtained, grades and academic performance.

It is used for higher education, employment and other academic purposes.`,
    remember: 'Official record: subjects + marks/grades.',
    answerEnglish: 'Official student academic record document.',
    hintKannada: 'ಅಧಿಕೃತ ಅಂಕ ದಾಖಲೆ.',
  },
  7: {
    questionNumber: 7,
    whatAsking:
      'The paper asks Triarchic theory (Sternberg). Your answer bank also lists Thurstone — both below.',
    kannadaMeaning:
      'ಜನವರಿ 2025 ಪತ್ರಿಕೆ: ಟ್ರೈಆರ್ಕಿಕ್ (ಸ್ಟರ್ನ್‌ಬರ್ಗ್). ಥರ್ಸ್ಟೋನ್ ಇತರ ವರ್ಷಗಳಲ್ಲಿ.',
    examWrite: `For January 2025 (question on paper — Triarchic theory, Robert Sternberg):

1. Analytical intelligence — analyse information and solve problems.
2. Creative intelligence — produce new ideas.
3. Practical intelligence — apply knowledge in real-life situations.

Answer bank — if the question asks Thurstone's theory (L. L. Thurstone), seven primary mental abilities:

1. Verbal comprehension.
2. Word fluency.
3. Number ability.
4. Spatial ability.
5. Associative memory.
6. Perceptual speed.
7. Reasoning ability.`,
    remember: '2025 exam Q7: Triarchic = Analytical, Creative, Practical.',
    footnote:
      'Verified January 2025 Q.P. wording: "Mention the factors of Triarchic theory of intelligence." Write Sternberg\'s three factors in that examination. Keep Thurstone\'s seven for other papers.',
    answerEnglish: 'Triarchic (2025): analytical, creative, practical. Thurstone: seven PMAs.',
    hintKannada: 'ಟ್ರೈಆರ್ಕಿಕ್ — ಮೂರು ಅಂಶಗಳು.',
  },
  ...(lta2025PartB as unknown as Record<number, QuestionAnswer>),
  ...(lta2025PartC as unknown as Record<number, QuestionAnswer>),
}

export function getAnswer(paperId: string, questionNumber: number): QuestionAnswer | null {
  if (paperId === 'lta-2025') return lta2025Answers[questionNumber] ?? null
  if (paperId === 'lta-2024') return lta2024Answers[questionNumber] ?? null
  if (paperId === 'lta-2025-26') return lta2026Answers[questionNumber] ?? null
  return null
}