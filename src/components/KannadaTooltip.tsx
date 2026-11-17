import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { VocabularyEntry } from '../data/vocabulary'

interface Props {
  entry: VocabularyEntry
  children: React.ReactNode
}

export function KannadaTooltip({ entry, children }: Props) {
  const [open, setOpen] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (!open || !triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    const width = Math.min(320, window.innerWidth - 24)
    let left = rect.left + rect.width / 2 - width / 2
    left = Math.max(12, Math.min(left, window.innerWidth - width - 12))
    const top = rect.bottom + 8
    setCoords({ top, left })
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node
      if (triggerRef.current?.contains(target)) return
      const panel = document.getElementById(panelId)
      if (panel?.contains(target)) return
      setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onPointer)
    window.addEventListener('touchstart', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onPointer)
      window.removeEventListener('touchstart', onPointer)
    }
  }, [open, panelId])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="vocab-hot inline px-0.5 text-left"
        aria-expanded={open}
        aria-controls={panelId}
        onMouseEnter={() => {
          if (window.matchMedia('(hover: hover)').matches) setOpen(true)
        }}
        onMouseLeave={() => {
          if (window.matchMedia('(hover: hover)').matches) setOpen(false)
        }}
        onClick={() => setOpen((v) => !v)}
      >
        {children}
      </button>
      {open &&
        createPortal(
          <div
            id={panelId}
            role="tooltip"
            className="fixed z-50 w-[min(20rem,calc(100vw-1.5rem))] rounded-2xl border border-navy/10 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-navy-soft"
            style={{ top: coords.top, left: coords.left }}
          >
            <p className="text-sm font-bold text-navy dark:text-cream">{entry.word}</p>
            <p className="font-kannada mt-1 text-base font-semibold text-teal">{entry.kannada}</p>
            <p className="font-kannada mt-2 text-sm leading-relaxed text-muted dark:text-cream/75">
              {entry.simple}
            </p>
            <p className="mt-2 rounded-xl bg-cream px-3 py-2 text-xs text-navy dark:bg-navy dark:text-cream/90">
              <span className="font-semibold">Example:</span> {entry.example}
            </p>
            {entry.pronunciation && (
              <p className="mt-2 text-xs text-muted dark:text-cream/60">🔊 {entry.pronunciation}</p>
            )}
          </div>,
          document.body,
        )}
    </>
  )
}
