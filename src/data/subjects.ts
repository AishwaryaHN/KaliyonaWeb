export type SubjectStatus = 'available' | 'coming-soon'

export interface Subject {
  id: string
  name: string
  nameKn: string
  code?: string
  icon: 'brain' | 'book' | 'globe' | 'tools' | 'monitor' | 'heart'
  years: number[]
  paperCount: number
  status: SubjectStatus
  blurb: string
  blurbKn: string
}

export const subjects: Subject[] = [
  {
    id: 'lta',
    name: 'Learning, Teaching and Assessment',
    nameKn: 'ಕಲಿಕೆ, ಬೋಧನೆ ಮತ್ತು ಮೌಲ್ಯಾಂಕನ',
    code: '30201',
    icon: 'brain',
    years: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
    paperCount: 12,
    status: 'available',
    blurb: '12 LTA papers (30201) from QP LTA.pdf. Click any question — answers where added.',
    blurbKn: 'QP LTA.pdf ನಿಂದ 12 ಪ್ರಶ್ನೆಪತ್ರಿಕೆಗಳು. ಪ್ರಶ್ನೆ ಕ್ಲಿಕ್ ಮಾಡಿ — ಉತ್ತರಗಳು ಸೇರಿಸಿದ ಕಡೆಗಳಲ್ಲಿ.',
  },
  {
    id: 'kc',
    name: 'Knowledge and Curriculum',
    nameKn: 'ಜ್ಞಾನ ಮತ್ತು ಪಠ್ಯಕ್ರಮ',
    icon: 'book',
    years: [],
    paperCount: 0,
    status: 'coming-soon',
    blurb: 'Question papers for this subject will be added after verification.',
    blurbKn: 'ಈ ವಿಷಯದ ಪ್ರಶ್ನೆಪತ್ರಿಕೆಗಳನ್ನು ಪರಿಶೀಲನೆಯ ನಂತರ ಸೇರಿಸಲಾಗುತ್ತದೆ.',
  },
  {
    id: 'cei',
    name: 'Contemporary Education in India',
    nameKn: 'ಭಾರತದಲ್ಲಿ ಸಮಕಾಲೀನ ಶಿಕ್ಷಣ',
    icon: 'globe',
    years: [],
    paperCount: 0,
    status: 'coming-soon',
    blurb: 'Question papers for this subject will be added after verification.',
    blurbKn: 'ಈ ವಿಷಯದ ಪ್ರಶ್ನೆಪತ್ರಿಕೆಗಳನ್ನು ಪರಿಶೀಲನೆಯ ನಂತರ ಸೇರಿಸಲಾಗುತ್ತದೆ.',
  },
  {
    id: 'pedagogy',
    name: 'Techniques, Methods and Approaches of Pedagogy',
    nameKn: 'ಶಿಕ್ಷಣಶಾಸ್ತ್ರದ ತಂತ್ರ, ವಿಧಾನ ಮತ್ತು ವಿಧಾನಗಳು',
    icon: 'tools',
    years: [],
    paperCount: 0,
    status: 'coming-soon',
    blurb: 'Question papers for this subject will be added after verification.',
    blurbKn: 'ಈ ವಿಷಯದ ಪ್ರಶ್ನೆಪತ್ರಿಕೆಗಳನ್ನು ಪರಿಶೀಲನೆಯ ನಂತರ ಸೇರಿಸಲಾಗುತ್ತದೆ.',
  },
  {
    id: 'ict',
    name: 'ICT Applications',
    nameKn: 'ಐಸಿಟಿ ಅನ್ವಯಗಳು',
    icon: 'monitor',
    years: [],
    paperCount: 0,
    status: 'coming-soon',
    blurb: 'Question papers for this subject will be added after verification.',
    blurbKn: 'ಈ ವಿಷಯದ ಪ್ರಶ್ನೆಪತ್ರಿಕೆಗಳನ್ನು ಪರಿಶೀಲನೆಯ ನಂತರ ಸೇರಿಸಲಾಗುತ್ತದೆ.',
  },
  {
    id: 'self',
    name: 'Understanding the Self',
    nameKn: 'ಸ್ವಯಂ ಅರಿವು',
    icon: 'heart',
    years: [],
    paperCount: 0,
    status: 'coming-soon',
    blurb: 'Question papers for this subject will be added after verification.',
    blurbKn: 'ಈ ವಿಷಯದ ಪ್ರಶ್ನೆಪತ್ರಿಕೆಗಳನ್ನು ಪರಿಶೀಲನೆಯ ನಂತರ ಸೇರಿಸಲಾಗುತ್ತದೆ.',
  },
]

export function getSubject(id: string) {
  return subjects.find((s) => s.id === id)
}
