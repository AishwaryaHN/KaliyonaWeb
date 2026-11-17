import type { QuestionAnswer } from '../../data/answerTypes'
import type { QuestionItem } from '../../data/questionPapers'
import type { BackbencherRevision, BackbencherStrategy } from './types'
import {
  examStepsFromAnswer,
  introConclusion,
  pointsFromAnswer,
} from './parseAnswerPoints'
import { getBackbencherOverride } from './overrides'

const REPEAT_TOPICS = [
  'classical conditioning',
  'insightful learning',
  'maslow',
  'maxims of teaching',
  'assessment for learning',
  'trial and error',
  'creativity',
  'leadership',
]

function detectStrategy(
  answer: QuestionAnswer,
  pointCount: number,
): BackbencherStrategy {
  if (answer.comparisonTable && answer.comparisonTable.rows.length > 0) return 'comparison'
  if (pointCount >= 4 && /stage|step|law|level/i.test(answer.examWrite ?? '')) return 'sequence'
  if (pointCount <= 2 && (answer.examWrite?.length ?? 0) < 400) return 'definition'
  if (pointCount >= 3 && pointCount <= 8) return 'acronym'
  return 'visual'
}

function buildAcronymDisplay(letters: string[]): { display: string; explanation: string } {
  const unique = letters.join('')
  if (unique.length < 2) {
    return {
      display: 'KEY WORDS',
      explanation: 'Focus on the bold headings in each card — they are the words examiners expect.',
    }
  }
  const spaced = letters.join(' · ')
  const isSequence = letters.length >= 4
  return {
    display: isSequence ? letters.join(' → ') : spaced,
    explanation: isSequence
      ? `Follow the journey left to right. Each step is one exam point in order.`
      : `Say each letter aloud, then open the matching card for the full exam term: ${letters.map((l, i) => `${l} = point ${i + 1}`).join(', ')}.`,
  }
}

export function buildBackbencherRevision(
  paperId: string,
  question: QuestionItem,
  answer: QuestionAnswer,
  questionText: string,
): BackbencherRevision {
  const override = getBackbencherOverride(paperId, question.number)
  const examSteps = examStepsFromAnswer(answer)
  const { intro, conclusion } = introConclusion(answer.examWrite ?? answer.answerEnglish)

  if (override) {
    return {
      ...override,
      examSteps: override.examSteps.length > 0 ? override.examSteps : examSteps,
      intro: override.intro ?? intro,
      conclusion: override.conclusion ?? conclusion,
    }
  }

  const points = pointsFromAnswer(answer)
  const letters = points.map((p) => p.letter)

  const strategy = detectStrategy(answer, points.length)
  const q = questionText.toLowerCase()
  const priority = REPEAT_TOPICS.some((t) => q.includes(t)) ? 'high' : 'normal'

  let memoryTitle = 'Memory trick'
  let memoryDisplay = ''
  let memoryExplanation = ''
  let visualMetaphor: string | undefined

  switch (strategy) {
    case 'comparison':
      memoryTitle = 'Side-by-side recall'
      memoryDisplay = answer.comparisonTable
        ? `${answer.comparisonTable.headers[0]} ↔ ${answer.comparisonTable.headers[1]}`
        : 'Compare both columns'
      memoryExplanation =
        'In the exam, write one side first, then the other. Each row is one difference — do not mix them up.'
      visualMetaphor = 'Two coloured lanes — left column, then right column.'
      break
    case 'sequence':
      memoryTitle = 'Step journey'
      {
        const { display, explanation } = buildAcronymDisplay(letters)
        memoryDisplay = display
        memoryExplanation = explanation
        visualMetaphor = 'Like climbing steps — do not skip a stage.'
      }
      break
    case 'definition':
      memoryTitle = 'Keyword anchor'
      memoryDisplay = points[0]?.title.slice(0, 48) || 'Definition'
      memoryExplanation =
        'Underline the keyword in your mind, add one line of meaning, then one example if the question asks for it.'
      break
    case 'acronym':
      memoryTitle = 'Letter-to-term map'
      {
        const { display, explanation } = buildAcronymDisplay(letters)
        memoryDisplay = display
        memoryExplanation = explanation
        visualMetaphor =
          letters.length >= 3
            ? `Picture the letters ${letters.join(' ')} written large — each letter unlocks one card below.`
            : undefined
      }
      break
    default:
      memoryTitle = 'Visual cards'
      memoryDisplay = `${points.length} must-know points`
      memoryExplanation = 'Scan the cards top to bottom once, then close and recall each heading.'
  }

  const oneLineIdea =
    conclusion?.slice(0, 140) ||
    intro?.slice(0, 140) ||
    points
      .slice(0, 3)
      .map((p) => p.title)
      .join(' · ')

  return {
    strategy,
    memoryTitle,
    memoryDisplay,
    memoryExplanation,
    visualMetaphor,
    points,
    examSteps,
    intro,
    conclusion,
    priority: priority === 'high' ? 'high' : 'normal',
    oneLineIdea,
  }
}