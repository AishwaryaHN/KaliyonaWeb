import { vocabulary } from '../data/vocabulary'
import { KannadaTooltip } from './KannadaTooltip'

/** Wrap curated academic words with interactive Kannada tooltips. */
export function VocabText({ text }: { text: string }) {
  const entries = Object.values(vocabulary).sort((a, b) => b.word.length - a.word.length)
  const pattern = new RegExp(`\\b(${entries.map((e) => escapeReg(e.word)).join('|')})\\b`, 'gi')
  const parts: React.ReactNode[] = []
  let last = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    const found = entries.find((e) => e.word.toLowerCase() === match![0].toLowerCase())
    if (found) {
      parts.push(
        <KannadaTooltip key={`${found.id}-${key++}`} entry={found}>
          {match[0]}
        </KannadaTooltip>,
      )
    } else {
      parts.push(match[0])
    }
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}

function escapeReg(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
