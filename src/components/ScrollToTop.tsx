import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Reset scroll when changing questions or pages; keep hash jumps only on paper list. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash && pathname.endsWith('/paper')) {
      const id = hash.replace(/^#/, '')
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ block: 'start', behavior: 'auto' })
          return
        }
        window.scrollTo(0, 0)
      })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}