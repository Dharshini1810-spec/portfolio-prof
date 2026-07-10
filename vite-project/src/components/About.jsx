import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 8.74, suffix: '', label: 'CGPA', decimals: 2 },
  { value: 4, suffix: '+', label: 'Internships', decimals: 0 },
  { value: 5, suffix: '+', label: 'Projects', decimals: 0 },
  { value: 1, suffix: '', label: 'Patent', decimals: 0 },
]

function CountUp({ value, suffix, decimals = 0, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = value * eased
      setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, duration, decimals])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title text-5xl md:text-6xl">About Me</h2>
          <div className="section-underline mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-2xl md:text-2xl text-slate-300 leading-relaxed font-medium">
              I'm a results-driven{' '}
              <span className="text-cyan-400 font-medium">CSE Engineer</span> at{' '}
              <span className="text-cyan-400 font-medium">SNS College of Engineering</span>
              , passionate about building impactful products. From architecting{' '}
              <span className="text-cyan-400 font-medium">FastAPI</span> backends to
              crafting polished{' '}
              <span className="text-cyan-400 font-medium">React</span> interfaces —
              I bridge the gap between design and engineering. With{' '}
              <span className="text-cyan-400 font-medium">4+ internships</span> and a
              product patent, I bring both academic rigor and real-world experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card rounded-2xl p-8 text-center hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(0,245,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div
                  className="text-6xl md:text-7xl font-bold mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #00f5ff, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: 'none',
                    filter: 'drop-shadow(0 0 20px rgba(0,245,255,0.3))',
                  }}
                >
                  <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="text-slate-300 text-base uppercase tracking-widest font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
