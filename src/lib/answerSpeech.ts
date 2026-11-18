export function plainTextForSpeech(answer: { examWrite?: string; answerEnglish?: string }): string {
  const text = answer.examWrite ?? answer.answerEnglish ?? ''
  return text.replace(/\s+/g, ' ').trim()
}