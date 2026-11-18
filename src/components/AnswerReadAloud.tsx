import { useCallback, useEffect, useRef, useState } from 'react'
import { Volume2, Square } from 'lucide-react'

export function AnswerReadAloud({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const [speaking, setSpeaking] = useState(false)
  const [supported, setSupported] = useState(true)
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window)
  }, [])

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
    }
    setSpeaking(false)
    utterRef.current = null
  }, [])

  useEffect(() => () => stop(), [stop])

  const toggle = useCallback(() => {
    if (!supported || !text.trim()) return
    if (speaking) {
      stop()
      return
    }
    const utter = new SpeechSynthesisUtterance(text)
    utter.rate = 0.95
    utter.onend = () => setSpeaking(false)
    utter.onerror = () => setSpeaking(false)
    utterRef.current = utter
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utter)
    setSpeaking(true)
  }, [supported, text, speaking, stop])

  if (!supported || !text.trim()) return null

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-navy/15 bg-white px-2.5 py-1 text-[11px] font-bold text-navy transition hover:border-teal/50 hover:text-teal dark:border-white/15 dark:bg-navy-soft dark:text-cream ${className}`}
      aria-pressed={speaking}
      title={speaking ? 'Stop reading' : 'Read answer aloud'}
    >
      {speaking ? (
        <>
          <Square className="h-3.5 w-3.5 fill-current" /> Stop
        </>
      ) : (
        <>
          <Volume2 className="h-3.5 w-3.5" /> Read
        </>
      )}
    </button>
  )
}