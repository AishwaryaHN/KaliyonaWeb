export interface VocabularyEntry {
  id: string
  word: string
  kannada: string
  simple: string
  example: string
  pronunciation?: string
}

export const vocabulary: Record<string, VocabularyEntry> = {
  classical_conditioning: {
    id: 'classical_conditioning',
    word: 'Classical conditioning',
    kannada: 'ಸಾಂಪ್ರದಾಯಿಕ ಅನುಬಂಧನ',
    simple: 'ಎರಡು ವಿಷಯಗಳನ್ನು ಜೋಡಿಸಿ ಕಲಿಯುವುದು — ಒಂದು ಸಂಕೇತ ಕೇಳಿದರೆ ಮತ್ತೊಂದು ಪ್ರತಿಕ್ರಿಯೆ ಬರುತ್ತದೆ.',
    example: 'ಬೆಲ್ ಶಬ್ದ ಕೇಳಿದಾಗ ನಾಯಿ ಲಾಲಾ ಸುರಿಸುತ್ತದೆ.',
    pronunciation: 'klas-i-kul kun-dish-uh-ning',
  },
  operant_conditioning: {
    id: 'operant_conditioning',
    word: 'Operant conditioning',
    kannada: 'ಕ್ರಿಯಜನ್ಯ ಅನುಬಂಧನ',
    simple: 'ನಮ್ಮ ಕ್ರಿಯೆಯ ನಂತರ ಬರುವ ಪರಿಣಾಮದಿಂದ ಕಲಿಯುವುದು — ಪ್ರೋತ್ಸಾಹ ಬಂದರೆ ಕ್ರಿಯೆ ಹೆಚ್ಚಾಗುತ್ತದೆ.',
    example: 'ಇಲಿ ಲಿವರ್ ಒತ್ತಿದರೆ ಆಹಾರ ಸಿಗುತ್ತದೆ; ಮತ್ತೆ ಒತ್ತುತ್ತದೆ.',
    pronunciation: 'op-uh-runt kun-dish-uh-ning',
  },
  stimulus: {
    id: 'stimulus',
    word: 'Stimulus',
    kannada: 'ಪ್ರಚೋದನೆ',
    simple: 'ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಉಂಟುಮಾಡುವ ಯಾವುದೇ ಸಂಕೇತ ಅಥವಾ ಘಟನೆ.',
    example: 'ಬೆಲ್ ಶಬ್ದವು ಒಂದು stimulus.',
    pronunciation: 'stim-yuh-lus',
  },
  response: {
    id: 'response',
    word: 'Response',
    kannada: 'ಪ್ರತಿಕ್ರಿಯೆ',
    simple: 'ಪ್ರಚೋದನೆಗೆ ನೀಡುವ ಪ್ರತ್ಯುತ್ತರ ಅಥವಾ ವರ್ತನೆ.',
    example: 'ಲಾಲಾ ಸುರಿಸುವುದು ಒಂದು response.',
    pronunciation: 'ri-spons',
  },
  reinforcement: {
    id: 'reinforcement',
    word: 'Reinforcement',
    kannada: 'ಬಲವರ್ಧನೆ / ಪ್ರೋತ್ಸಾಹ',
    simple: 'ಒಂದು ವರ್ತನೆಯನ್ನು ಮತ್ತೆ ಮಾಡುವಂತೆ ಮಾಡುವ ಪ್ರೋತ್ಸಾಹ ಅಥವಾ ಪರಿಣಾಮ.',
    example: 'ಒಳ್ಳೆಯ ಉತ್ತರಕ್ಕೆ ಶಿಕ್ಷಕರು ಹೊಗಳಿದರೆ ಅದು reinforcement.',
    pronunciation: 'ree-in-fors-ment',
  },
  association: {
    id: 'association',
    word: 'Association',
    kannada: 'ಸಂಬಂಧ / ಜೋಡಣೆ',
    simple: 'ಎರಡು ವಿಷಯಗಳನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಜೋಡಿಸುವುದು.',
    example: 'ಬೆಲ್ + ಆಹಾರ = association.',
    pronunciation: 'uh-so-see-ay-shun',
  },
  involuntary: {
    id: 'involuntary',
    word: 'Involuntary',
    kannada: 'ಅನೈಚ್ಛಿಕ',
    simple: 'ನಾವು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮಾಡದ, ಸ್ವಯಂಚಾಲಿತ ಪ್ರತಿಕ್ರಿಯೆ.',
    example: 'ಲಾಲಾ ಸುರಿಸುವುದು involuntary response.',
    pronunciation: 'in-vol-un-tuh-ree',
  },
  voluntary: {
    id: 'voluntary',
    word: 'Voluntary',
    kannada: 'ಐಚ್ಛಿಕ / ಸ್ವಯಂ ಆಯ್ಕೆಯ',
    simple: 'ನಾವು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಮಾಡುವ ಕ್ರಿಯೆ.',
    example: 'ಲಿವರ್ ಒತ್ತುವುದು voluntary behaviour.',
    pronunciation: 'vol-un-tuh-ree',
  },
  pavlov: {
    id: 'pavlov',
    word: 'Pavlov',
    kannada: 'ಪಾವ್ಲೋವ್',
    simple: 'ಸಾಂಪ್ರದಾಯಿಕ ಅನುಬಂಧನವನ್ನು ಪ್ರಯೋಗದಿಂದ ತೋರಿಸಿದ ವಿಜ್ಞಾನಿ.',
    example: 'Pavlov ನ ನಾಯಿ ಪ್ರಯೋಗ ಪ್ರಸಿದ್ಧ.',
  },
  skinner: {
    id: 'skinner',
    word: 'Skinner',
    kannada: 'ಸ್ಕಿನ್ನರ್',
    simple: 'ಕ್ರಿಯಜನ್ಯ ಅನುಬಂಧನವನ್ನು ವಿವರಿಸಿದ ವರ್ತನಾ ವಿಜ್ಞಾನಿ.',
    example: 'Skinner box ನಲ್ಲಿ ಇಲಿ ಪ್ರಯೋಗ.',
  },
  differentiate: {
    id: 'differentiate',
    word: 'Differentiate',
    kannada: 'ವ್ಯತ್ಯಾಸಿಸಿ / ವ್ಯತ್ಯಾಸ ತೋರಿಸಿ',
    simple: 'ಎರಡು ವಿಷಯಗಳ ನಡುವಿನ ವ್ಯತ್ಯಾಸಗಳನ್ನು ಬರೆಯಿರಿ.',
    example: 'Examನಲ್ಲಿ “differentiate” ಎಂದರೆ comparison table ಬರೆಯಿರಿ.',
  },
  consequence: {
    id: 'consequence',
    word: 'Consequence',
    kannada: 'ಪರಿಣಾಮ',
    simple: 'ಒಂದು ಕ್ರಿಯೆಯ ನಂತರ ಏನಾಗುತ್ತದೆ ಎಂಬುದು.',
    example: 'ಲಿವರ್ ಒತ್ತಿದ ನಂತರ ಆಹಾರ ಸಿಗುವುದು consequence.',
  },
  behaviour: {
    id: 'behaviour',
    word: 'Behaviour',
    kannada: 'ವರ್ತನೆ',
    simple: 'ನಾವು ಮಾಡುವ ಕ್ರಿಯೆ ಅಥವಾ ಕಾರ್ಯ.',
    example: 'ಪಾಠ ಕೇಳುವುದು ಒಂದು behaviour.',
  },
}

export const demoLessonVocabIds = [
  'differentiate',
  'classical_conditioning',
  'operant_conditioning',
  'stimulus',
  'response',
  'association',
  'involuntary',
  'voluntary',
  'reinforcement',
  'consequence',
  'behaviour',
  'pavlov',
  'skinner',
] as const
