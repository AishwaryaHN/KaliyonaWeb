import type { QuestionPaper } from './questionPapers'

/** Exact wording — January 2024 (QP LTA.pdf, pages 33–36). */
export const lta2024VerifiedPaper: QuestionPaper = {
  id: 'lta-2024',
  subjectId: 'lta',
  code: '30201',
  subject: 'LEARNING, TEACHING AND ASSESSMENT',
  year: 2024,
  yearLabel: 'January 2024',
  examination: 'Second Semester B.Ed.(Theory) Degree Examination, January 2024',
  scheme: 'CBCS Scheme',
  time: '3 hours',
  maxMarks: 80,
  instructions: 'Answers should be written completely either in English or Kannada.',
  answersReady: true,
  sourceNote: 'Verified questions (QP LTA.pdf p.33–36). Full answer bank; repeated topics match January 2025.',
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
        { number: 1, text: 'What is conditioning?', marks: 2 },
        { number: 2, text: 'Define Intelligence.', marks: 2 },
        { number: 3, text: 'What is transcript?', marks: 2 },
        { number: 4, text: 'List any four perceptions.', marks: 2 },
        { number: 5, text: 'Write the meaning of credit with examples.', marks: 2 },
        {
          number: 6,
          text: 'Differentiate between Assessment for Learning and Assessment of Learning.',
          marks: 2,
        },
        { number: 7, text: 'What are the stages of trial and error learning?', marks: 2 },
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
        { number: 8, text: 'Explain insight learning with an example.', marks: 5 },
        { number: 9, text: 'What is concept? Explain the types of concepts.', marks: 5 },
        {
          number: 10,
          text: 'How would you secure the attention of your students in the classroom?',
          marks: 5,
        },
        {
          number: 11,
          text: 'How does physical and psychological environment influence learning of students?',
          marks: 5,
        },
        { number: 12, text: 'What is learning? Explain the nature of learning.', marks: 5 },
        { number: 13, text: 'Explain the types of thinking.', marks: 5 },
        { number: 14, text: 'Differentiate between Assessment and Evaluation.', marks: 5 },
        { number: 15, text: 'What is CBM? How is it important?', marks: 5 },
        { number: 16, text: 'Explain the stages of learning.', marks: 5 },
        { number: 17, text: "Explain Spearman's two-factor theory of intelligence.", marks: 5 },
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
          text: 'Explain classical conditioning learning with an experiment. Mention its educational implications.',
          marks: 10,
        },
        { number: 19, text: "Explain Guilford's intellect model of intelligence.", marks: 10 },
        {
          number: 20,
          text: 'Explain the maxims of teaching. How are they important in teaching?',
          marks: 10,
        },
        {
          number: 21,
          text: 'What is motivation? Write the types of motivation with examples. How would you motivate your students?',
          marks: 10,
        },
        {
          number: 22,
          text: 'Define creativity. What are the characteristics of creative children? How would you develop it among your students?',
          marks: 10,
        },
      ],
    },
  ],
}