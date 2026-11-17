import { Link, NavLink } from 'react-router-dom'
import { BookOpen, Languages, Moon, Sun } from 'lucide-react'
import { useApp } from '../context/AppContext'

export function Header() {
  const { theme, lang, toggleTheme, toggleLang } = useApp()

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/90 backdrop-blur-md dark:border-white/10 dark:bg-navy/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy text-cream shadow-sm transition group-hover:bg-teal dark:bg-teal">
            <BookOpen className="h-5 w-5" />
          </span>
          <span>
            <span className="font-display block text-xl font-bold tracking-tight text-navy dark:text-cream">
              Kaliyona
            </span>
            <span className="font-kannada hidden text-xs text-muted sm:block dark:text-cream/70">
              ಕಲಿಯೋಣ
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { to: '/', label: 'Home' },
            { to: '/subjects', label: 'Subjects' },
            { to: '/subjects/lta', label: 'LTA Papers' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-navy text-cream dark:bg-teal'
                    : 'text-navy/80 hover:bg-navy/5 dark:text-cream/80 dark:hover:bg-white/10'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1 rounded-full border border-navy/15 bg-white/70 px-3 py-1.5 text-xs font-semibold text-navy transition hover:border-teal dark:border-white/15 dark:bg-navy-soft dark:text-cream"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 bg-white/70 text-navy transition hover:border-teal dark:border-white/15 dark:bg-navy-soft dark:text-cream"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  )
}
