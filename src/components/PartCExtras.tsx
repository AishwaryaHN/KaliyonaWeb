import { partCRevisionRows } from '../data/partCRevision'

export function PartCRevisionSheet() {
  return (
    <div className="mt-8 rounded-3xl border border-navy/10 bg-white p-5 dark:border-white/10 dark:bg-navy-soft">
      <h3 className="font-display text-lg font-bold text-navy dark:text-cream">Part C — quick revision</h3>
      <p className="mt-1 text-xs text-muted dark:text-cream/60">
        Answer any 3 questions · up to 3 pages each · 10 marks
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-navy/10 text-xs uppercase tracking-wide text-muted">
              <th className="py-2 pr-4">Question</th>
              <th className="py-2">Main points</th>
            </tr>
          </thead>
          <tbody>
            {partCRevisionRows.map((row) => (
              <tr key={row.q} className="border-b border-navy/5 dark:border-white/5">
                <td className="py-2 pr-4 font-bold text-teal">{row.q}</td>
                <td className="py-2 text-navy dark:text-cream/85">{row.tip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted dark:text-cream/55">
        Tip: Give extra time to <strong>Q20</strong> and <strong>Q21</strong> — clear points and examples for 10-mark
        answers.
      </p>
    </div>
  )
}