import type { QuestionAnswer } from '../../data/answerTypes'

export interface ExamInfographicPoint {
  /** 1-based display index in infographic */
  index: number
  title: string
  explanation: string
}

const NUMBERED = /^(\d+)\.\s+(.+)$/
const LETTERED = /^([A-Z])\.\s+(.+)$/
const SKIP_LINE = /^(use the comparison table|examples?:\s*$)/i
const SECTION_SKIP =
  /^(introduction|conclusion|influence of|types of|ways to|important activities|procedure of|stages of|five levels|educational implications|meaning of|definition|d\.?\s*ifferences)/i

function isLabelOnly(rest: string): boolean {
  const t = rest.trim()
  return /^[^:]+:\s*$/.test(t) && t.length < 90
}

function splitInline(rest: string): { title: string; explanation: string } | null {
  const colon = rest.indexOf(':')
  if (colon > 0 && colon < 70 && rest.length > colon + 3) {
    const after = rest.slice(colon + 1).trim()
    if (after.length > 8) {
      return {
        title: rest.slice(0, colon).trim(),
        explanation: after,
      }
    }
  }
  const dash = rest.search(/\s[–-]\s/)
  if (dash > 0 && dash < 55) {
    return {
      title: rest.slice(0, dash).trim(),
      explanation: rest.slice(dash).replace(/^[\s–-]+/, '').trim(),
    }
  }
  return null
}

function isStructuralHeading(title: string): boolean {
  const t = title.toLowerCase()
  if (SECTION_SKIP.test(t)) return true
  if (t.includes('environment') && !t.includes('lighting') && t.split(/\s+/).length <= 4) return true
  if (t.includes('leadership role')) return true
  return false
}

/** Every exam point in order — source: approved examWrite only. */
export function extractAllExamPoints(answer: QuestionAnswer): ExamInfographicPoint[] {
  const text = answer.examWrite ?? answer.answerEnglish
  const lines = text.split('\n')
  const points: ExamInfographicPoint[] = []
  let pendingTitle: string | null = null
  let pendingBody: string[] = []

  const pushPoint = (title: string, explanation: string) => {
    const t = title.trim()
    const e = explanation.trim()
    if (!t || isStructuralHeading(t)) return
    if (SKIP_LINE.test(t)) return
    points.push({
      index: points.length + 1,
      title: t,
      explanation: e || t,
    })
  }

  const flushPending = () => {
    if (pendingTitle) {
      pushPoint(pendingTitle, pendingBody.join(' '))
      pendingTitle = null
      pendingBody = []
    }
  }

  for (const raw of lines) {
    const trimmed = raw.trim()
    if (!trimmed) {
      if (pendingTitle && pendingBody.length > 0) flushPending()
      continue
    }

    if (SKIP_LINE.test(trimmed)) continue
    if (SECTION_SKIP.test(trimmed.replace(/:\s*$/, '')) && trimmed.endsWith(':')) continue
    if (/^[^:]+:\s*$/.test(trimmed) && !NUMBERED.test(trimmed) && !LETTERED.test(trimmed)) {
      if (!NUMBERED.test(trimmed)) continue
    }

    const num = NUMBERED.exec(trimmed)
    if (num) {
      const rest = num[2]!
      const inline = splitInline(rest)
      if (inline) {
        flushPending()
        pushPoint(inline.title, inline.explanation)
        continue
      }
      if (isLabelOnly(rest)) {
        flushPending()
        const title = rest.replace(/:\s*$/, '').trim()
        if (isStructuralHeading(title)) {
          pendingTitle = null
          pendingBody = []
          continue
        }
        pendingTitle = title
        pendingBody = []
        continue
      }
      flushPending()
      pushPoint(rest, '')
      continue
    }

    const letter = LETTERED.exec(trimmed)
    if (letter) {
      const rest = letter[2]!
      const inline = splitInline(`${rest}`)
      flushPending()
      if (inline) {
        pushPoint(`${letter[1]}. ${inline.title}`, inline.explanation)
      } else {
        pushPoint(`${letter[1]}. ${rest}`, '')
      }
      continue
    }

    if (trimmed.startsWith('- ')) {
      flushPending()
      pushPoint(`•`, trimmed.slice(2).trim())
      continue
    }

    if (pendingTitle) {
      pendingBody.push(trimmed)
    }
  }

  flushPending()

  if (points.length === 0 && answer.comparisonTable) {
    answer.comparisonTable.rows.forEach((row, i) => {
      pushPoint(`${answer.comparisonTable!.headers[0]} (row ${i + 1})`, row[0])
      pushPoint(`${answer.comparisonTable!.headers[1]} (row ${i + 1})`, row[1])
    })
  }

  return points.map((p, i) => ({ ...p, index: i + 1 }))
}

export function examWriteHints(answer: QuestionAnswer): {
  hasIntro: boolean
  hasConclusion: boolean
  hasTable: boolean
} {
  const t = answer.examWrite ?? ''
  return {
    hasIntro: /introduction:/i.test(t),
    hasConclusion: /conclusion:/i.test(t),
    hasTable: Boolean(answer.comparisonTable?.rows.length),
  }
}