export interface QuestionAnswer {
  questionNumber: number
  answerEnglish: string
  hintKannada?: string
  whatAsking?: string
  kannadaMeaning?: string
  understandFirst?: string
  visualExample?: string
  examWrite?: string
  example?: string
  remember?: string
  footnote?: string
  comparisonTable?: {
    headers: [string, string]
    rows: [string, string][]
  }
}