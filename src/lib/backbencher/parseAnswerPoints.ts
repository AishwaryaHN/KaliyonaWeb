import type { QuestionAnswer } from '../../data/answerTypes'
import { outlineFromExamWrite } from '../outlineFromExamWrite'
import type { ExamWriteStep, RecallPoint } from './types'

const NUMBERED = /^(\d+)\.\s+(.+)$/

export function splitPointLine(line: string): { title: string; body: string } {
  const cleaned = line.replace(/^\d+\.\s+/, '').trim()
  const colon = cleaned.indexOf(':')
  const dash = cleaned.search(/\s[–-]\s/)
  if (colon > 0 && colon < 80) {
    return {
      title: cleaned.slice(0, colon).trim(),
      body: cleaned.slice(colon + 1).trim(),
    }
  }
  if (dash > 0 && dash < 60) {
    return {
      title: cleaned.slice(0, dash).trim(),
      body: cleaned.slice(dash).replace(/^[\s–-]+/, '').trim(),
    }
  }
  const words = cleaned.split(/\s+/)
  const title = words.slice(0, Math.min(4, words.length)).join(' ')
  const body = words.length > 4 ? words.slice(4).join(' ') : ''
  return { title, body: body || cleaned }
}

function letterFromTitle(title: string, index: number): string {
  const stop = new Set(['the', 'a', 'an', 'of', 'and', 'to', 'in', 'on', 'for', 'is', 'it'])
  const words = title
    .replace(/[()]/g, '')
    .split(/\s+/)
    .filter((w) => w.length > 0 && !stop.has(w.toLowerCase()))
  if (words.length === 0) return String.fromCharCode(65 + (index % 26))
  if (words.length === 1) return words[0]!.charAt(0).toUpperCase()
  return words[0]!.charAt(0).toUpperCase()
}

export function extractRecallPoints(examWrite: string): { section: string; points: string[] }[] {
  return outlineFromExamWrite(examWrite).sections.map((s) => ({
    section: s.label.replace(/^\([a-z]\)\s*/i, ''),
    points: s.points,
  }))
}

function scoreSection(name: string, pointCount: number): number {
  const n = name.toLowerCase()
  let s = pointCount
  if (n.includes('type')) s += 12
  if (n.includes('stage')) s += 11
  if (n.includes('influence')) s += 10
  if (n.includes('importance')) s += 9
  if (n.includes('implication')) s += 9
  if (n.includes('characteristic')) s += 8
  if (n.includes('factor')) s += 7
  if (n.includes('level')) s += 7
  if (n.includes('law')) s += 6
  if (/^(introduction|conclusion|answer)$/i.test(n)) s -= 30
  return s
}

export function pickPrimarySection(
  sections: { section: string; points: string[] }[],
): { section: string; points: string[] } | null {
  const ranked = sections
    .filter((s) => s.points.length > 0)
    .sort((a, b) => scoreSection(b.section, b.points.length) - scoreSection(a.section, a.points.length))
  return ranked[0] ?? null
}

export function pointsFromAnswer(answer: QuestionAnswer, maxPoints = 12): RecallPoint[] {
  const examWrite = answer.examWrite ?? answer.answerEnglish
  const sections = extractRecallPoints(examWrite)
  const primary = pickPrimarySection(sections)
  let raw = [...(primary?.points ?? [])]

  if (raw.length < 3) {
    const extra = sections
      .filter((s) => s !== primary)
      .flatMap((s) => s.points)
    raw = [...raw, ...extra]
  }

  if (raw.length === 0) {
    const lines = examWrite.split('\n').filter((l) => NUMBERED.test(l.trim()))
    for (const line of lines) {
      const m = NUMBERED.exec(line.trim())
      if (m) raw.push(m[2]!)
    }
  }

  const seen = new Set<string>()
  raw = raw.filter((line) => {
    const k = line.slice(0, 50)
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
  raw = raw.slice(0, maxPoints)

  return raw.map((line, i) => {
    const { title, body } = splitPointLine(line)
    return {
      letter: letterFromTitle(title, i),
      title,
      body,
      simple: body.length > 120 ? `${body.slice(0, 117)}…` : body,
      icon: iconForTitle(title),
    }
  })
}

export function examStepsFromAnswer(answer: QuestionAnswer): ExamWriteStep[] {
  const examWrite = answer.examWrite ?? answer.answerEnglish
  return extractRecallPoints(examWrite).map((s) => ({
    section: s.section,
    items: s.points,
  }))
}

function iconForTitle(title: string): RecallPoint['icon'] {
  const t = title.toLowerCase()
  if (t.includes('learn') || t.includes('understand') || t.includes('encoding')) return 'book'
  if (t.includes('think') || t.includes('memory') || t.includes('retention')) return 'brain'
  if (t.includes('motivat') || t.includes('interest') || t.includes('attention')) return 'lightbulb'
  if (t.includes('goal') || t.includes('achiev') || t.includes('evaluat')) return 'target'
  if (t.includes('classif') || t.includes('type') || t.includes('stage')) return 'layers'
  if (t.includes('differ') || t.includes('assess') || t.includes('measure')) return 'scale'
  if (t.includes('social') || t.includes('teacher') || t.includes('cooperation')) return 'users'
  if (t.includes('safe') || t.includes('security') || t.includes('discipline')) return 'shield'
  if (t.includes('creat') || t.includes('original')) return 'sparkles'
  return 'list'
}

export function introConclusion(examWrite: string): { intro?: string; conclusion?: string } {
  const sections = extractRecallPoints(examWrite)
  const intro = sections.find((s) => /^introduction$/i.test(s.section))?.points.join(' ')
  const conclusion = sections.find((s) => /^conclusion$/i.test(s.section))?.points.join(' ')
  return { intro, conclusion }
}