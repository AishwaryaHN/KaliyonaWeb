import type { QuestionPaper } from './questionPapers'

/** Exact wording — December/January 2025/26 (PDF pages 40–42). Answers on site. */
export const lta2026VerifiedPaper: QuestionPaper = {
  id: 'lta-2025-26',
  subjectId: 'lta',
  code: '30201',
  subject: 'LEARNING, TEACHING AND ASSESSMENT',
  year: 2026,
  yearLabel: 'December/January 2025/26',
  examination:
    'Second Semester B.Ed.(Theory) Degree Examination, December/January 2025/26',
  scheme: 'CBCS Scheme',
  time: '3 hours',
  maxMarks: 80,
  instructions: 'Answers should be written completely either in English or Kannada.',
  answersReady: true,
  sourceNote: 'Verified from QP LTA.pdf (pages 40–42)',
  parts: [
    {
      id: 'A',
      label: 'PART - A',
      labelKn: 'ವಿಭಾಗ - ಎ',
      marksEach: 2,
      attemptAny: 5,
      totalMarks: 10,
      instruction:
        'Answer any FIVE of the following questions. Each answer not exceeding half a page (5 x 2 = 10)',
      questions: [
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
      ],
    },
    {
      id: 'B',
      label: 'PART - B',
      labelKn: 'ವಿಭಾಗ - ಬಿ',
      marksEach: 5,
      attemptAny: 8,
      totalMarks: 40,
      instruction:
        'Answer any EIGHT of the following questions. Each answer not exceeding one and half a page (8 x 5 = 40)',
      questions: [
        {
          number: 8,
          text: 'What is Intelligence? Explain two-factor theory of intelligence.',
          marks: 5,
        },
        {
          number: 9,
          text: 'Define creativity. How do you develop creativity among students?',
          marks: 5,
        },
        {
          number: 10,
          text: 'What is Attention? Explain briefly the factors affecting attention.',
          marks: 5,
        },
        {
          number: 11,
          text: 'What is thinking? Explain any two types of thinking.',
          marks: '1+4',
        },
        { number: 12, text: 'Explain insightful learning with an example.', marks: 5 },
        { number: 13, text: 'Explain the stages of teaching.', marks: 5 },
        { number: 14, text: 'Explain the stages of learning.', marks: 5 },
        {
          number: 15,
          text: 'How do physical and psychological environments influence learning?',
          marks: 5,
        },
        {
          number: 16,
          text: 'Differentiate Assessment for Learning and Assessment of Learning.',
          marks: 5,
        },
        {
          number: 17,
          text: 'What are the differences between Measurement and Evaluation?',
          marks: 5,
        },
      ],
    },
    {
      id: 'C',
      label: 'PART - C',
      labelKn: 'ವಿಭಾಗ - ಸಿ',
      marksEach: 10,
      attemptAny: 3,
      totalMarks: 30,
      instruction:
        'Answer any THREE of the following questions. Each answer not exceeding three pages (3 x 10 = 30)',
      questions: [
        {
          number: 18,
          text: 'Explain Trial and Error Learning with a suitable experiment. What are the educational implications of this learning?',
          marks: 10,
        },
        {
          number: 19,
          text: "What is motivation? Mention the types of motivation with an example. Explain Maslow's theory of motivation.",
          marks: 10,
        },
        {
          number: 20,
          text: 'What are Maxims of Teaching? Explain the maxims of teaching with suitable examples.',
          marks: 10,
        },
        {
          number: 21,
          text: 'What is Leadership? Explain the leadership role of teacher in classroom, school and community.',
          marks: 10,
        },
        {
          number: 22,
          text: 'What is Evaluation? Explain the importance of Formative Evaluation, Summative Evaluation and Curriculum Based Measurement in the evaluation process.',
          marks: 10,
        },
      ],
    },
  ],
}