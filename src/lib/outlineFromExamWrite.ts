import type { RevisionOutline, RevisionSection } from '../data/lta2025RevisionOutlines'

const NUMBERED = /^(\d+)\.\s+(.+)$/
const PART_LINE = /^\(([a-z])\)\s*(.*)$/i
const SKIP = /^use the comparison table/i

function isMajorSection(rest: string): boolean {
  const t = rest.trim()
  if (!t.endsWith(':')) return false
  const title = t.slice(0, -1).trim()
  if (title.length > 72) return false
  if (/\b(is|are|was|were)\b/i.test(title)) return false
  if (title.split(/\s+/).length > 6) return false
  return true
}

function isLabelOnly(rest: string): boolean {
  const t = rest.trim()
  return /^[^:]+:\s*$/.test(t) && t.length < 120
}

function pushSection(sections: RevisionSection[], label: string, points: string[]) {
  const cleaned = points.map((p) => p.trim()).filter((p) => p && !SKIP.test(p))
  if (cleaned.length === 0) return
  sections.push({ label, points: cleaned })
}

/** Quick revision bullets — same numbered lines as the full exam answer. */
export function outlineFromExamWrite(examWrite: string): RevisionOutline {
  const sections: RevisionSection[] = []
  let sectionLabel = 'Answer'
  let points: string[] = []
  let partPrefix = ''
  let pendingPoint: string | null = null

  const flush = () => {
    if (pendingPoint) {
      points.push(pendingPoint)
      pendingPoint = null
    }
    pushSection(sections, partPrefix + sectionLabel, points)
    points = []
  }

  for (const raw of examWrite.split('\n')) {
    const trimmed = raw.trim()
    if (!trimmed) continue

    const part = PART_LINE.exec(trimmed)
    if (part) {
      flush()
      partPrefix = `(${part[1]}) `
      const rest = part[2].trim()
      if (rest) {
        sectionLabel = rest.replace(/:\s*$/, '')
        if (rest.endsWith(':')) continue
      } else {
        sectionLabel = 'Answer'
      }
      continue
    }

    if (/^(Introduction|Conclusion):\s*$/i.test(trimmed)) {
      flush()
      sectionLabel = trimmed.replace(/:\s*$/, '')
      continue
    }

    const num = NUMBERED.exec(trimmed)
    if (num) {
      const rest = num[2]
      if (isMajorSection(rest)) {
        if (pendingPoint) {
          points.push(pendingPoint)
          pendingPoint = null
        }
        flush()
        sectionLabel = rest.replace(/:\s*$/, '').trim()
        continue
      }
      if (isLabelOnly(rest)) {
        if (pendingPoint) points.push(pendingPoint)
        pendingPoint = rest.replace(/:\s*$/, '').trim() + ':'
        continue
      }
      if (pendingPoint) {
        points.push(pendingPoint)
        pendingPoint = null
      }
      points.push(rest)
      continue
    }

    if (/^[^:]+:\s*$/.test(trimmed) && trimmed.length < 64) {
      continue
    }

    if (trimmed.startsWith('- ')) {
      if (pendingPoint) {
        points.push(pendingPoint)
        pendingPoint = null
      }
      points.push(trimmed.slice(2).trim())
      continue
    }

    if (pendingPoint) {
      points.push(`${pendingPoint} ${trimmed}`)
      pendingPoint = null
      continue
    }

    points.push(trimmed)
  }

  flush()

  if (sections.length === 0) {
    return { sections: [{ label: 'Answer', points: [examWrite.trim()] }] }
  }

  return { sections }
}