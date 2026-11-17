import type { BackbencherRevision } from './types'

/** Curated memory tricks — only when letters map exactly to syllabus terms. */
const OVERRIDES: Record<string, BackbencherRevision> = {
  'lta-2024:9': {
    strategy: 'acronym',
    memoryTitle: 'CD + Record',
    memoryDisplay: 'CD · Record',
    memoryExplanation:
      'Imagine a CD and a record player. C = Conjunctive concepts (traits together). D = Disjunctive concepts (any one trait). R = Relational concepts (relationship words).',
    visualMetaphor: 'CD + vinyl record — old + new formats, three types of concepts.',
    points: [
      {
        letter: 'C',
        title: 'Conjunctive Concepts',
        body: 'Two or more common characteristics combined — e.g. square.',
        simple: 'All traits must appear together.',
        icon: 'layers',
      },
      {
        letter: 'D',
        title: 'Disjunctive Concepts',
        body: 'At least one alternative characteristic — e.g. vehicle with two or four wheels.',
        simple: 'Any one trait is enough.',
        icon: 'list',
      },
      {
        letter: 'R',
        title: 'Relational Concepts',
        body: 'Based on relationship — bigger than, above, below.',
        simple: 'Relation between objects.',
        icon: 'scale',
      },
    ],
    examSteps: [],
    priority: 'normal',
    oneLineIdea: 'Concepts group knowledge — three types for the exam.',
  },
}

export function getBackbencherOverride(
  paperId: string,
  questionNumber: number,
): BackbencherRevision | null {
  return OVERRIDES[`${paperId}:${questionNumber}`] ?? null
}