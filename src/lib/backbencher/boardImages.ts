/** Full infographic boards for Backbencher mode (one image per question). */

export interface BackbencherBoard {
  src: string
  alt: string
  captionEn: string
  captionKn: string
}

const BOARDS: Record<string, BackbencherBoard> = {
  'lta-2025:16': {
    src: '/backbencher/lta-2025-q16-board.png',
    alt: 'Guilford Structure of Intellect model — visual revision',
    captionEn: 'Memory trick: 5-4-6 (Operations · Contents · Products) = 120 abilities',
    captionKn: 'ಮೆಮೊರಿ ಟ್ರಿಕ್: 5-4-6 (ಕಾರ್ಯಾಚರಣೆ · ವಿಷಯ · ಉತ್ಪನ್ನ)',
  },
  'lta-2024:19': {
    src: '/backbencher/lta-2025-q16-board.png',
    alt: 'Guilford Structure of Intellect model — visual revision',
    captionEn: 'Memory trick: 5-4-6 (Operations · Contents · Products) = 120 abilities',
    captionKn: 'ಮೆಮೊರಿ ಟ್ರಿಕ್: 5-4-6 (ಕಾರ್ಯಾಚರಣೆ · ವಿಷಯ · ಉತ್ಪನ್ನ)',
  },
  'lta-2025:8': {
    src: '/backbencher/lta-2025-q8-board.png',
    alt: 'Classical conditioning vs operant conditioning — Pavlov vs Skinner',
    captionEn: 'Memory trick: Classical = association (stimulus) · Operant = consequence (reward/punishment)',
    captionKn: 'ಶಾಸ್ತ್ರೀಯ = ಉದ್ದೀಪನ ಸಂಘ · ಕಾರ್ಯಾಚರಣ = ಫಲಿತಾಂಶ',
  },
  'lta-2025:9': {
    src: '/backbencher/lta-2025-q9-board.png',
    alt: "Maslow's hierarchy of needs — five levels and educational implications",
    captionEn: 'Memory trick: P-S-L-E-S — Physiological · Safety · Love · Esteem · Self-actualization',
    captionKn: 'ಮೆಮೊರಿ ಟ್ರಿಕ್: P-S-L-E-S — ಮಾಸ್ಲೋದ ಐದು ಹಂತಗಳು',
  },
  'lta-2025:10': {
    src: '/backbencher/lta-2025-q10-board.png',
    alt: 'Problem solving — six steps with 2x + 3 = 11 example',
    captionEn: 'Memory trick: I-A-F-S-I-V — Identify · Analyse · Formulate · Select · Implement · Verify',
    captionKn: 'ಮೆಮೊರಿ ಟ್ರಿಕ್: I-A-F-S-I-V — ಸಮಸ್ಯೆ ಪರಿಹಾರ ಆರು ಹಂತಗಳು',
  },
  'lta-2025:11': {
    src: '/backbencher/lta-2025-q11-board.png',
    alt: 'Kohler theory of insightful learning — Sultan chimpanzee experiments',
    captionEn: 'Memory trick: P-I-I-V — Preparation · Incubation · Illumination · Verification',
    captionKn: 'Kohler · ಸ್ಫೂರ್ತಿ ಕಲಿಕೆ — P-I-I-V ಹಂತಗಳು',
  },
  'lta-2024:8': {
    src: '/backbencher/lta-2025-q11-board.png',
    alt: 'Kohler theory of insightful learning — Sultan chimpanzee experiments',
    captionEn: 'Same as 2025 Q11 — insight, chimp examples, educational implications',
    captionKn: '2025 Q11 ರಂತೆಯೇ — ಒಳನೋಟ ಕಲಿಕೆ',
  },
  'lta-2025-26:12': {
    src: '/backbencher/lta-2025-q11-board.png',
    alt: 'Kohler theory of insightful learning — insightful learning with example',
    captionEn: 'Sudden understanding (Aha!) · stick & box experiments',
    captionKn: 'ಅಚಾನಕ ಒಳಗ्रहಣ — ಕೊಹ್ಲರ್ ಪ್ರಯೋಗಗಳು',
  },
  'lta-2025:12': {
    src: '/backbencher/lta-2025-q12-board.png',
    alt: 'Assessment for Learning vs Assessment of Learning — AfL vs AoL',
    captionEn: 'Memory trick: AfL = improve & support (formative) · AoL = measure & grade (summative)',
    captionKn: 'AfL = ಕಲಿಕೆಗಾಗಿ · AoL = ಕಲಿಕೆಯ ಮೌಲ್ಯಮಾಪನ',
  },
  'lta-2024:6': {
    src: '/backbencher/lta-2025-q12-board.png',
    alt: 'Assessment for Learning vs Assessment of Learning — AfL vs AoL',
    captionEn: 'Same as 2025 Q12 — comparison table + examples',
    captionKn: '2025 Q12 ರಂತೆಯೇ — ತಳುಕು vs ಮೌಲ್ಯಮಾಪನ',
  },
  'lta-2025-26:16': {
    src: '/backbencher/lta-2025-q12-board.png',
    alt: 'Assessment for Learning vs Assessment of Learning — AfL vs AoL',
    captionEn: 'During learning vs end of instruction — 6-point difference table',
    captionKn: 'ಕಲಿಕೆಯ ಸಮಯದಲ್ಲಿ vs ಅಂತ್ಯದಲ್ಲಿ',
  },
  'lta-2025:13': {
    src: '/backbencher/lta-2025-q13-board.png',
    alt: 'Concept formation — six steps with flower example',
    captionEn: 'Memory trick: O-C-A-G-F-A — Observation → Comparison → Abstraction → Generalization → Formation → Application',
    captionKn: 'ಮೆಮೊರಿ ಟ್ರಿಕ್: O-C-A-G-F-A — ಆರು ಹಂತಗಳ ಪರಿಕಲ್ಪನೆ ರೂಪಣೆ',
  },
  'lta-2025:14': {
    src: '/backbencher/lta-2025-q14-board.png',
    alt: 'Thinking — meaning and four types (CDCC)',
    captionEn: 'Memory trick: CDCC — Convergent, Divergent, Critical, Creative',
    captionKn: 'ಮೆಮೊರಿ ಟ್ರಿಕ್: CDCC — ನಾಲ್ಕು ವಿಧಗಳ ಆಲೋಚನೆ',
  },
  'lta-2024:13': {
    src: '/backbencher/lta-2025-q14-board.png',
    alt: 'Thinking — meaning and four types (CDCC)',
    captionEn: 'Same as 2025 Q14 — meaning + any four types with examples',
    captionKn: '2025 Q14 ರಂತೆಯೇ — ಆಲೋಚನೆಯ ಅರ್ಥ + ವಿಧಗಳು',
  },
  'lta-2025-26:11': {
    src: '/backbencher/lta-2025-q14-board.png',
    alt: 'Thinking — meaning and types of thinking',
    captionEn: 'Paper asks any two — board shows all four (pick 2 in exam)',
    captionKn: 'ಪತ್ರಿಕೆಯಲ್ಲಿ ಯಾವುದೇ 2 — ಚಿತ್ರದಲ್ಲಿ ನಾಲ್ಕು (ಪರೀಕ್ಷೆಯಲ್ಲಿ 2 ಆಯ್ಕೆ)',
  },
  'lta-2025:15': {
    src: '/backbencher/lta-2025-q15-board.png',
    alt: 'Thorndike trial and error learning — puzzle box experiment infographic',
    captionEn: 'Memory trick: R-E-E — Readiness, Exercise, Effect · Cat → lever → fish',
    captionKn: 'ಮೆಮೊರಿ ಟ್ರಿಕ್: R-E-E — ಸಿದ್ಧತೆ, ಅಭ್ಯಾಸ, ಫಲಿತಾಂಶ',
  },
  /** Dec/Jan 2025–26 Part C — same Thorndike core as 2025 Q15 */
  'lta-2025-26:18': {
    src: '/backbencher/lta-2025-q15-board.png',
    alt: 'Thorndike trial and error learning — puzzle box experiment infographic',
    captionEn: 'Memory trick: R-E-E — Readiness, Exercise, Effect · 7-step cat experiment',
    captionKn: 'ಮೆಮೊರಿ ಟ್ರಿಕ್: R-E-E — ಸಿದ್ಧತೆ, ಅಭ್ಯಾಸ, ಫಲಿತಾಂಶ',
  },
  'lta-2025:17': {
    src: '/backbencher/lta-2025-q17-board.png',
    alt: 'Meaning and three stages of teaching — Plan, Teach, Evaluate infographic',
    captionEn: 'Memory trick: P-I-P — Pre-active (plan) · Interactive (teach) · Post-active (evaluate)',
    captionKn: 'ಮೆಮೊರಿ ಟ್ರಿಕ್: P-I-P — ಯೋಜನೆ · ಬೋಧನೆ · ಮೌಲ್ಯಮಾಪನ',
  },
  /** Stages of teaching — same topic as 2025 Q17 */
  'lta-2025-26:13': {
    src: '/backbencher/lta-2025-q17-board.png',
    alt: 'Meaning and three stages of teaching — Plan, Teach, Evaluate infographic',
    captionEn: 'Memory trick: P-I-P — Teacher · Learner · Learning environment',
    captionKn: 'ಮೆಮೊರಿ ಟ್ರಿಕ್: P-I-P — ಶಿಕ್ಷಕ · ವಿದ್ಯಾರ್ಥಿ · ಪರಿಸರ',
  },
  'lta-2025:18': {
    src: '/backbencher/lta-2025-q18-board.png',
    alt: 'CBM importance and measurement vs evaluation — Part C infographic',
    captionEn: 'Part (a) CHECK progress · Part (b) Measurement = number, Evaluation = judgement',
    captionKn: 'CBM — ಪ್ರಗತಿ ಅಳತೆ · ಮಾಪನ = ಸಂಖ್ಯೆ, ಮೌಲ್ಯಮಾಪನ = ನಿರ್ಣಯ',
  },
  /** 2024 Part B — CBM importance (same as Q18 part a) */
  'lta-2024:15': {
    src: '/backbencher/lta-2025-q18-board.png',
    alt: 'CBM importance and measurement vs evaluation — Part C infographic',
    captionEn: 'Focus on CBM (part a) — CHECK progress regularly',
    captionKn: 'CBM ಮಹತ್ವ — ಪ್ರಗತಿ ನಿಯಮಿತವಾಗಿ ಅಳತೆ',
  },
  'lta-2025:19': {
    src: '/backbencher/lta-2025-q19-board.png',
    alt: 'Creativity — characteristics of a creative person and ways to foster it',
    captionEn: 'Part A: O-I-C-F… traits · Part B: Question, Express, Create, Problem-solve, Appreciate',
    captionKn: 'ಸೃಜನಶೀಲ ವ್ಯಕ್ತಿಯ ಲಕ್ಷಣಗಳು + ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಸೃಜನಶೀಲತೆ ಬೆಳೆಸುವುದು',
  },
  'lta-2024:22': {
    src: '/backbencher/lta-2025-q19-board.png',
    alt: 'Creativity — characteristics of a creative person and ways to foster it',
    captionEn: 'Same as 2025 Q19 — 5+5 characteristics + foster creativity',
    captionKn: '2025 Q19 ರಂತೆಯೇ — ಲಕ್ಷಣಗಳು + ಬೆಳೆಸುವ ಮಾರ್ಗಗಳು',
  },
  'lta-2025-26:9': {
    src: '/backbencher/lta-2025-q19-board.png',
    alt: 'Creativity — characteristics and developing creativity among students',
    captionEn: 'Define creativity → characteristics → ways to develop (Part B focus)',
    captionKn: 'ವ್ಯಾಖ್ಯಾನ → ಲಕ್ಷಣಗಳು → ಅಭಿವೃದ್ಧಿ ಮಾರ್ಗಗಳು',
  },
  'lta-2025:20': {
    src: '/backbencher/lta-2025-q20-board.png',
    alt: 'Maxims of teaching — ten maxims with examples',
    captionEn: 'Memory trick: K-S-C-P-W-A-P-E-N-D — 10 maxims, each with one example',
    captionKn: 'ಮೆಮೊರಿ ಟ್ರಿಕ್: K-S-C-P… — 10 ಮ್ಯಾಕ್ಸಿಮ್ಗಳು + ಉದಾಹರಣೆ',
  },
  'lta-2024:20': {
    src: '/backbencher/lta-2025-q20-board.png',
    alt: 'Maxims of teaching — ten maxims with examples',
    captionEn: 'Same as 2025 Q20 — maxims + importance in teaching',
    captionKn: '2025 Q20 ರಂತೆಯೇ — ಶಿಕ್ಷಣ ಮ್ಯಾಕ್ಸಿಮ್ಗಳು',
  },
  'lta-2025-26:20': {
    src: '/backbencher/lta-2025-q20-board.png',
    alt: 'Maxims of teaching — ten maxims with examples',
    captionEn: 'Known → Unknown … Definite → Indefinite — exam-ready flow',
    captionKn: 'Known to Unknown … 10 ಮ್ಯಾಕ್ಸಿಮ್ಗಳು',
  },
  'lta-2025:21': {
    src: '/backbencher/lta-2025-q21-board.png',
    alt: 'Classical conditioning — Pavlov experiment and educational implications',
    captionEn: '2+6+2: UCS/UCR/CS/CR · Before → During → After conditioning',
    captionKn: 'Pavlov — ಮೊದಲು · ಜೋಡಣೆ · ನಂತರ ಕಲಿತ ಪ್ರತಿಕ್ರಿಯೆ',
  },
  'lta-2024:18': {
    src: '/backbencher/lta-2025-q21-board.png',
    alt: 'Classical conditioning — Pavlov experiment and educational implications',
    captionEn: 'Same as 2025 Q21 — experiment + 5 educational implications',
    captionKn: '2025 Q21 ರಂತೆಯೇ — ಶಾಸ್ತ್ರೀಯ ನಿಯಮನ + ಪರಿಣಾಮಗಳು',
  },
  'lta-2025:22': {
    src: '/backbencher/lta-2025-q22-board.png',
    alt: 'Leadership — teacher role in classroom, school and community',
    captionEn: '1+9 marks: Define leadership · 5 points each — Class · School · Community',
    captionKn: 'ನಾಯಕತ್ವ + ಶಿಕ್ಷಕರ ಪಾತ್ರ: ತರಗತಿ · ಶಾಲೆ · ಸಮುದಾಯ',
  },
  'lta-2025-26:21': {
    src: '/backbencher/lta-2025-q22-board.png',
    alt: 'Leadership — teacher role in classroom, school and community',
    captionEn: 'Same structure as 2025 Q22 — three headings, 4–5 points each',
    captionKn: '2025 Q22 ರಂತೆಯೇ — ಮೂರು ವಿಭಾಗಗಳಲ್ಲಿ ನಾಯಕತ್ವ',
  },
}

export function getBackbencherBoard(paperId: string, questionNumber: number): BackbencherBoard | null {
  return BOARDS[`${paperId}:${questionNumber}`] ?? null
}

/** @deprecated use getBackbencherBoard */
export function getBackbencherBoardImage(paperId: string, questionNumber: number): string | null {
  return getBackbencherBoard(paperId, questionNumber)?.src ?? null
}

export function getBackbencherBoardAlt(questionNumber: number): string {
  return `Visual revision infographic for question ${questionNumber}`
}