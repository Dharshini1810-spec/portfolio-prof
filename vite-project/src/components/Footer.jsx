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
      className="relative py-12 px-6 border-t border-white/5"
      style={{ background: 'rgba(2,2,15,0.95)' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-500">
          Designed &amp; Launched by{' '}
          <span
            className="font-bold"
            style={{
              background: 'linear-gradient(135deg, #00f5ff, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Dharshini S
          </span>
        </p>
        <p className="text-slate-600 text-sm mt-2">
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
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300"
            style={{
              background: 'rgba(0,245,255,0.15)',
              border: '1px solid rgba(0,245,255,0.3)',
              boxShadow: '0 0 15px rgba(0,245,255,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0,245,255,0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0,245,255,0.3)'
            }}
          >
            🚀
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
