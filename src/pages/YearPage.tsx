import { Link, Navigate, useParams } from 'react-router-dom'
import { getSubject } from '../data/subjects'
import { getPaperBySubjectYear } from '../data/questionPapers'

/** Year landing redirects into the paper dashboard when a verified paper exists. */
export function YearPage() {
  const { subjectId = '', year = '' } = useParams()
  const subject = getSubject(subjectId)
  const yearNum = Number(year)
  const paper = getPaperBySubjectYear(subjectId, yearNum)

  if (!subject) {
    return <Navigate to="/subjects" replace />
  }

  if (paper) {
    return <Navigate to={`/subjects/${subjectId}/p/${paper.id}/paper`} replace />
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="font-display text-2xl font-bold text-navy dark:text-cream">
        {year} paper not available yet
      </h1>
      <p className="mt-3 text-sm text-muted dark:text-cream/65">
        We only open verified question papers. No placeholder content is shown.
      </p>
      <Link to={`/subjects/${subjectId}`} className="mt-6 inline-block text-teal">
        Back to {subject.name}
      </Link>
    </div>
  )
}
