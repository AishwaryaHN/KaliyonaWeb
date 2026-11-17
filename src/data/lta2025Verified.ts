import type { QuestionPaper } from './questionPapers'

/** Exact wording — January 2025 (PDF pages 37–39). Answers on site. */
export const lta2025VerifiedPaper: QuestionPaper = {
  id: 'lta-2025',
  subjectId: 'lta',
  code: '30201',
  subject: 'LEARNING, TEACHING AND ASSESSMENT',
  year: 2025,
  yearLabel: 'January 2025',
  examination: 'Second Semester B.Ed.(Theory) Degree Examination, January 2025',
  scheme: 'CBCS Scheme',
  time: '3 hours',
  maxMarks: 80,
  instructions: 'Answers should be written completely either in English or Kannada.',
  answersReady: true,
  sourceNote: 'Verified from QP LTA.pdf',
  parts: [
    {
      id: 'A',
      label: 'PART - A',
      labelKn: 'ವಿಭಾಗ - ಎ',
      marksEach: 2,
      attemptAny: 5,
      totalMarks: 10,
      instruction:
        'Answer any FIVE of the following questions. Each answer not exceeding half a page : (5 x 2 = 10)',
      questions: [
        { number: 1, text: 'What are conjunctive concepts?', marks: 2 },
        {
          number: 2,
          text: 'Mention any four influences of physical environment on learning.',
          marks: 2,
        },
        {
          number: 3,
          text: 'What is ‘fixation’ in relation to conditioned learning?',
          marks: 2,
        },
        { number: 4, text: 'Mention the stages of memory.', marks: 2 },
        {
          number: 5,
          text: 'Why the knowledge of maxims of teaching is necessary for classroom teacher?',
          marks: 2,
        },
        { number: 6, text: 'What are transcripts?', marks: 2 },
        {
          number: 7,
          text: 'Mention the factors of Triarchic theory of intelligence.',
          marks: 2,
        },
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
        'Answer any EIGHT of the following questions. Each answer not exceeding one and half a page : (8 x 5 = 40)',
      questions: [
        {
          number: 8,
          text: 'Differentiate classical conditioning and operant conditioning.',
          marks: 5,
        },
        { number: 9, text: 'Explain Maslow’s theory of motivation.', marks: 5 },
        { number: 10, text: 'Explain the steps of problem solving.', marks: 5 },
        { number: 11, text: 'Explain the theory of insightful learning.', marks: 5 },
        {
          number: 12,
          text: 'Differentiate ‘Assessment for learning’ and ‘Assessment of learning’.',
          marks: 5,
        },
        { number: 13, text: 'Explain the steps of concept formation.', marks: 5 },
        {
          number: 14,
          text: 'What is thinking? Explain any four types of thinking.',
          marks: '1+4',
        },
        {
          number: 15,
          text: 'Explain trial & error learning theory with suitable experiment.',
          marks: 5,
        },
        { number: 16, text: 'Explain Guilford’s intellect model.', marks: 5 },
        {
          number: 17,
          text: 'What is teaching? Explain the stages of teaching.',
          marks: '1+4',
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
        'Answer any THREE of the following questions. Each answer not exceeding three pages : (3 x 10 = 30)',
      questions: [
        {
          number: 18,
          text: '(a) Mention the importance of curriculum based measurement.\n(b) Differentiate measurement and evaluation.',
          marks: '5+5',
        },
        {
          number: 19,
          text: 'What are the characteristics of creative person? How do you foster creativity among your students?',
          marks: '5+5',
        },
        {
          number: 20,
          text: 'Explain the maxims of teaching with suitable examples.',
          marks: 10,
        },
        {
          number: 21,
          text: '(a) What is classical conditioning?\n(b) Explain classical conditioning learning theory with suitable experiment.\n(c) Mention its educational implications.',
          marks: '2+6+2',
        },
        {
          number: 22,
          text: '(a) What is leadership?\n(b) Explain the leadership role of teacher in classroom, school and community.',
          marks: '1+9',
        },
      ],
    },
  ],
}