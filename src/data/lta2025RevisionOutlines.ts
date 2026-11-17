/** Headings only — for Quick revision (pass-level) study. January 2025. */

export interface RevisionSection {
  label: string
  /** Side headings / sub-points — write details yourself in exam */
  points: string[]
}

export interface RevisionOutline {
  sections: RevisionSection[]
  hint?: string
}

export const lta2025RevisionOutlines: Record<number, RevisionOutline> = {
  1: {
    sections: [{ label: 'Conjunctive concepts', points: ['Two+ traits together', 'Example: square'] }],
  },
  2: {
    sections: [
      {
        label: 'Physical environment',
        points: [
          'Lighting: Proper lighting helps students read and write comfortably.',
          'Ventilation: Fresh air keeps students active and comfortable.',
          'Seating arrangement: Comfortable seating helps students concentrate.',
          'Classroom cleanliness: A clean classroom creates a healthy learning atmosphere.',
        ],
      },
    ],
  },
  3: {
    sections: [
      {
        label: 'Fixation',
        points: ['Conditioned response fixed', 'Repeated CS + UCS', 'Example: bell + food'],
      },
    ],
  },
  4: {
    sections: [
      {
        label: 'Stages of memory',
        points: ['Encoding / learning', 'Storage / retention', 'Recall', 'Recognition'],
      },
    ],
  },
  5: {
    sections: [
      {
        label: 'Why maxims?',
        points: ['Easy, effective teaching', 'Known → unknown', 'Student interest', 'Better understanding'],
      },
    ],
  },
  6: {
    sections: [{ label: 'Transcript', points: ['Official academic record', 'Subjects, marks, grades', 'Higher edu / jobs'] }],
  },
  7: {
    hint: 'Jan 2025 paper asks Triarchic (Sternberg), not Thurstone.',
    sections: [
      {
        label: 'Triarchic — 3 factors (exam)',
        points: ['Analytical', 'Creative', 'Practical'],
      },
      {
        label: 'Thurstone — 7 PMAs (other papers)',
        points: [
          'Verbal comprehension',
          'Word fluency',
          'Number ability',
          'Spatial ability',
          'Associative memory',
          'Perceptual speed',
          'Reasoning',
        ],
      },
    ],
  },
  8: {
    sections: [
      { label: 'Introduction', points: ['Conditioning = association or consequences', 'Two types'] },
      { label: 'Classical (Pavlov)', points: ['Two stimuli', 'Example: bell + dog'] },
      { label: 'Operant (Skinner)', points: ['Rewards / punishment', 'Example: homework praise'] },
      {
        label: 'Differences (5)',
        points: ['Pavlov vs Skinner', 'Stimulus vs consequence', 'Involuntary vs voluntary', 'Stimulus reinforcement vs after behaviour', 'Passive vs active learner'],
      },
      { label: 'Conclusion', points: ['Both theories', 'Classroom use'] },
    ],
  },
  9: {
    sections: [
      { label: 'Introduction', points: ['Maslow', 'Hierarchy / pyramid', '1943', '5 levels'] },
      {
        label: 'Five needs',
        points: ['Physiological', 'Safety', 'Love / belonging', 'Esteem', 'Self-actualisation'],
      },
      {
        label: 'Educational implications (5)',
        points: ['Basic facilities', 'Safe school', 'Friendship / cooperation', 'Appreciation', 'Talents / creativity'],
      },
      { label: 'Conclusion', points: ['Understand needs', 'Positive environment'] },
    ],
  },
  10: {
    sections: [
      { label: 'Introduction', points: ['Identify, analyse, solve', 'Thinking skills'] },
      {
        label: 'Six steps',
        points: ['Identify problem', 'Analyse', 'Possible solutions', 'Best solution', 'Implement', 'Verify / evaluate'],
      },
      { label: 'Importance', points: ['Logic', 'Decisions', 'Independence', 'Creativity', 'Real life'] },
    ],
  },
  11: {
    sections: [
      { label: 'Introduction', points: ['Sudden insight', 'Kohler / Gestalt'] },
      { label: 'Sultan experiment', points: ['Banana out of reach', 'Stick', 'Boxes stack', 'Sudden solution'] },
      { label: 'Stages', points: ['Preparation', 'Incubation', 'Illumination', 'Verification'] },
      { label: 'Characteristics', points: ['Understanding', 'Sudden', 'Logical', 'New problems', 'Whole situation'] },
      { label: 'For teachers', points: ['Independent thinking', 'Problem tasks', 'Not rote', 'Discover answers'] },
    ],
  },
  12: {
    sections: [
      { label: 'Introduction', points: ['Assessment role', 'AfL vs AoL'] },
      { label: 'Assessment for Learning', points: ['Formative', 'Examples: class test, feedback'] },
      { label: 'Assessment of Learning', points: ['Summative', 'Examples: final exam'] },
      {
        label: 'Differences (6)',
        points: ['Formative / summative', 'During / end', 'Improve / measure', 'Feedback / grades', 'Difficulties / level', 'Modify teaching / promotion'],
      },
    ],
  },
  13: {
    sections: [
      { label: 'Introduction', points: ['Concept definition', 'Mental process'] },
      {
        label: 'Six steps',
        points: ['Observation', 'Comparison', 'Abstraction', 'Generalisation', 'Concept formation', 'Application'],
      },
      { label: 'Importance', points: ['Understanding', 'Observation', 'Classification', 'Meaningful', 'Real life'] },
    ],
  },
  14: {
    sections: [
      { label: 'Thinking — meaning', points: ['Analyse, decide, solve', 'Reasoning, memory, judgement'] },
      {
        label: 'Four types',
        points: ['Convergent — one answer', 'Divergent — many ideas', 'Critical — check facts', 'Creative — new ideas'],
      },
      { label: 'Importance', points: ['Reasoning', 'Problems', 'Decisions', 'Creativity', 'Independent learning'] },
    ],
  },
  15: {
    sections: [
      { label: 'Introduction', points: ['Trials, errors', 'Thorndike'] },
      { label: 'Cat + puzzle box', points: ['Fish outside', 'Try actions', 'Lever', 'Repeat — faster escape'] },
      { label: 'Three laws', points: ['Readiness', 'Exercise', 'Effect'] },
      { label: 'For teachers', points: ['Practice', 'Activities', 'Praise', 'Mistakes OK', 'Readiness'] },
    ],
  },
  16: {
    sections: [
      { label: 'Introduction', points: ['Guilford SOI 1956', 'Not single IQ', '3 dimensions'] },
      {
        label: 'Operations (5)',
        points: ['Cognition', 'Memory', 'Divergent production', 'Convergent production', 'Evaluation'],
      },
      { label: 'Contents (4)', points: ['Figural', 'Symbolic', 'Semantic', 'Behavioural'] },
      { label: 'Products (6)', points: ['Units', 'Classes', 'Relations', 'Systems', 'Transformations', 'Implications'] },
      { label: 'In education', points: ['Many abilities', 'Creativity', 'Talents', 'Activities', 'Problem solving'] },
    ],
  },
  17: {
    sections: [
      { label: 'Teaching — meaning', points: ['Planned, systematic', 'Knowledge, skills, values', 'Teacher–learner–environment'] },
      {
        label: 'Pre-active',
        points: ['Lesson plan', 'Objectives', 'Methods', 'Materials', 'Prior knowledge'],
      },
      {
        label: 'Interactive',
        points: ['Explain', 'Questions', 'Aids', 'Participation', 'Clear doubts'],
      },
      {
        label: 'Post-active',
        points: ['Tests', 'Assignments', 'Feedback', 'Difficulties', 'Remedial'],
      },
    ],
  },
  18: {
    sections: [
      {
        label: '(a) CBM importance (7)',
        points: [
          'Measure progress',
          'Find difficulties',
          'Feedback',
          'Better teaching',
          'Individual help',
          'Motivation',
          'Decisions / remedial',
        ],
      },
      {
        label: '(b) Measurement vs Evaluation',
        points: ['Measurement = numbers', 'Evaluation = judgement', 'Use comparison table in exam'],
      },
    ],
  },
  19: {
    sections: [
      { label: 'Introduction', points: ['Creativity definition'] },
      {
        label: 'Creative person (10 traits)',
        points: [
          'Originality',
          'Imagination',
          'Curiosity',
          'Flexibility',
          'Problem-solving',
          'Independence',
          'Open-minded',
          'Self-confidence',
          'Observation',
          'Risk-taking',
        ],
      },
      {
        label: 'Foster creativity (10)',
        points: [
          'Encourage questions',
          'Freedom',
          'Arts / activities',
          'Problem-solving tasks',
          'Teaching aids',
          'No harsh criticism',
          'Group work',
          'Praise new ideas',
          'Exhibitions / competitions',
          'Friendly classroom',
        ],
      },
    ],
  },
  20: {
    sections: [
      { label: 'Introduction', points: ['Principles for effective teaching'] },
      {
        label: '10 maxims + examples',
        points: [
          'Known → Unknown',
          'Simple → Complex',
          'Concrete → Abstract',
          'Particular → General',
          'Whole → Part',
          'Analysis → Synthesis',
          'Psychological → Logical',
          'Empirical → Rational',
          'Near → Far',
          'Definite → Indefinite',
        ],
      },
      { label: 'Importance (7)', points: ['Easy', 'Interest', 'Hard topics', 'Link old-new', 'Meaningful', 'Participation', 'Methods'] },
    ],
  },
  21: {
    sections: [
      { label: '(a) Classical conditioning', points: ['Two stimuli', 'Pavlov', 'Example: bell'] },
      {
        label: '(b) Pavlov experiment',
        points: ['Before: food, UCS, UCR', 'During: bell + food repeat', 'After: bell alone, CS, CR', 'Terms table'],
      },
      {
        label: '(c) Implications (5)',
        points: ['Positive association', 'Rewards', 'Positive attitudes', 'No fear', 'Repetition'],
      },
    ],
  },
  22: {
    sections: [
      {
        label: '(a) Leadership',
        points: ['Guide, influence, motivate, direct', 'Common goals', 'Teacher as leader'],
      },
      { label: 'Introduction', points: ['Not only knowledge', 'Leader in 3 places'] },
      {
        label: '1. Classroom',
        points: [
          'Guiding students',
          'Maintaining discipline',
          'Motivating students',
          'Developing good values',
          'Encouraging participation',
        ],
      },
      {
        label: '2. School',
        points: [
          'Organizing activities',
          'Cooperation with staff',
          'School development',
          'Guiding students (career etc.)',
          'School discipline',
        ],
      },
      {
        label: '3. Community',
        points: [
          'Social awareness',
          'Adult education',
          'Social values',
          'Community activities',
          'Role model',
        ],
      },
      { label: 'Conclusion', points: ['Leader in society', 'Responsible students', 'Social development'] },
    ],
  },
}

/** 2024 Q → 2025 outline when topics match */
const lta2024OutlineLink: Record<number, number> = {
  6: 12,
  8: 11,
  13: 14,
  15: 18,
  18: 21,
  19: 16,
  20: 20,
  22: 19,
}

export function getRevisionOutline(paperId: string, questionNumber: number): RevisionOutline | null {
  if (paperId === 'lta-2025') return lta2025RevisionOutlines[questionNumber] ?? null
  if (paperId === 'lta-2024') {
    const link = lta2024OutlineLink[questionNumber]
    if (link != null) return lta2025RevisionOutlines[link] ?? null
    return lta2025RevisionOutlines[questionNumber] ?? null
  }
  return null
}