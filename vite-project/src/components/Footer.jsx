import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="relative py-12 px-6 border-t border-border bg-background"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          Designed &amp; Launched by{' '}
          <span className="font-bold text-foreground">
            Dharshini S
          </span>
        </p>
        <p className="text-muted-foreground/70 text-sm mt-2">
          © 2026 · Built with React + FastAPI
        </p>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 bg-muted border border-border hover:border-foreground/40"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
