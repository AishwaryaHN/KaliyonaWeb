/** One unique illustration id per card — no repeats within the same question. */

const KEYWORD_MAP: [RegExp, string][] = [
  [/interest|curios/i, 'lightbulb-student'],
  [/teaching aid|chart|model|smart board|picture/i, 'chalkboard'],
  [/voice|modulation|tone/i, 'megaphone'],
  [/question|ask/i, 'question-bubble'],
  [/discipline|peaceful|organiz/i, 'classroom-rows'],
  [/appreciat|praise|reward/i, 'trophy-star'],
  [/method|monoton/i, 'toolbox'],
  [/break|rest|tired/i, 'coffee-break'],
  [/light|lighting/i, 'lamp'],
  [/ventilat|air|fresh/i, 'window-breeze'],
  [/seating|comfort/i, 'chair-desk'],
  [/clean|hygien/i, 'broom-sparkle'],
  [/noise|quiet/i, 'shush'],
  [/material|chart/i, 'books-stack'],
  [/motivat|encourag/i, 'rocket'],
  [/teacher.student|relationship|friendly/i, 'handshake'],
  [/security|safe|respect/i, 'shield-heart'],
  [/cooperation|group|team|participat|debate/i, 'team-circle'],
  [/expression|ideas|fear/i, 'speech-bubble'],
  [/reinforcement|positive/i, 'medal'],
  [/real.life|daily|example/i, 'home-school'],
  [/attention|concentrat|focus/i, 'target-eye'],
  [/learn|encoding|memory|retention/i, 'brain-book'],
  [/creat|original/i, 'paint-palette'],
  [/experiment|pavlov|cat|dog|thorndike/i, 'lab-flask'],
  [/maslow|need|hierarchy/i, 'pyramid'],
  [/assess|measure|evaluat/i, 'clipboard'],
  [/stage|step|law of/i, 'stairs'],
  [/maxim|known to unknown/i, 'arrow-path'],
  [/leadership|community|school/i, 'flag-school'],
]

/** Pool order — index picks unique slot when keyword collides */
export const ILLUSTRATION_POOL = [
  'lightbulb-student',
  'chalkboard',
  'megaphone',
  'question-bubble',
  'classroom-rows',
  'trophy-star',
  'toolbox',
  'coffee-break',
  'lamp',
  'window-breeze',
  'chair-desk',
  'broom-sparkle',
  'shush',
  'books-stack',
  'rocket',
  'handshake',
  'shield-heart',
  'team-circle',
  'speech-bubble',
  'medal',
  'home-school',
  'target-eye',
  'brain-book',
  'paint-palette',
  'lab-flask',
  'pyramid',
  'clipboard',
  'stairs',
  'arrow-path',
  'flag-school',
  'puzzle',
  'microscope',
  'globe',
  'pencil-rocket',
  'music-note',
  'camera-flash',
] as const

export type IllustrationId = (typeof ILLUSTRATION_POOL)[number]

function keywordMatch(title: string): IllustrationId | null {
  const t = title.toLowerCase()
  for (const [re, id] of KEYWORD_MAP) {
    if (re.test(t) && ILLUSTRATION_POOL.includes(id as IllustrationId)) {
      return id as IllustrationId
    }
  }
  return null
}

export function assignIllustrationIds(titles: string[]): IllustrationId[] {
  const used = new Set<string>()
  const result: IllustrationId[] = []
  let poolCursor = 0

  for (let i = 0; i < titles.length; i++) {
    const preferred = keywordMatch(titles[i] ?? '')
    if (preferred && !used.has(preferred)) {
      used.add(preferred)
      result.push(preferred)
      continue
    }
    while (poolCursor < ILLUSTRATION_POOL.length) {
      const id = ILLUSTRATION_POOL[poolCursor]!
      poolCursor++
      if (!used.has(id)) {
        used.add(id)
        result.push(id)
        break
      }
    }
    if (result.length <= i) {
      const id = ILLUSTRATION_POOL[i % ILLUSTRATION_POOL.length]!
      result.push(id)
    }
  }
  return result
}

/** Optional Nano Banana / custom exports: public/backbencher/{paperId}-q{q}-{index}.webp */
export function backbencherImageUrl(
  paperId: string,
  questionNumber: number,
  pointIndex: number,
): string {
  return `/backbencher/${paperId}-q${questionNumber}-p${pointIndex}.webp`
}