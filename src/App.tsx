import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { Header } from './components/Header'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { SubjectPage } from './pages/SubjectPage'
import { YearPage } from './pages/YearPage'
import { QuestionPaperPage } from './pages/QuestionPaperPage'
import { AnswerPage } from './pages/AnswerPage'
import { getPaperBySubjectYear } from './data/questionPapers'

function YearPaperRedirect() {
  const { subjectId = '', year = '' } = useParams()
  const paper = getPaperBySubjectYear(subjectId, Number(year))
  if (!paper) return <Navigate to={`/subjects/${subjectId}`} replace />
  return <Navigate to={`/subjects/${subjectId}/p/${paper.id}/paper`} replace />
}

function YearAnswerRedirect() {
  const { subjectId = '', year = '', questionNum = '' } = useParams()
  const paper = getPaperBySubjectYear(subjectId, Number(year))
  if (!paper) return <Navigate to={`/subjects/${subjectId}`} replace />
  return <Navigate to={`/subjects/${subjectId}/p/${paper.id}/q/${questionNum}`} replace />
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/subjects" element={<SubjectPage />} />
              <Route path="/subjects/:subjectId" element={<SubjectPage />} />
              <Route path="/subjects/:subjectId/:year" element={<YearPage />} />
              <Route path="/subjects/:subjectId/:year/paper" element={<YearPaperRedirect />} />
              <Route path="/subjects/:subjectId/:year/q/:questionNum" element={<YearAnswerRedirect />} />
              <Route path="/subjects/:subjectId/p/:paperId/paper" element={<QuestionPaperPage />} />
              <Route path="/subjects/:subjectId/p/:paperId/q/:questionNum" element={<AnswerPage />} />
              <Route path="/lesson/:lessonId" element={<Navigate to="/subjects/lta/p/lta-2025/q/8" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <footer className="border-t border-navy/10 px-4 py-6 text-center text-xs text-muted dark:border-white/10 dark:text-cream/50">
            Kaliyona · LTA 30201 · Question papers from QP LTA.pdf
          </footer>
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}