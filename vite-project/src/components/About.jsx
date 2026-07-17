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
            <p className="text-2xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              I'm a{' '}
              <span className="text-foreground font-medium">Full Stack Developer</span> with a strong focus on{' '}
              <span className="text-foreground font-medium">Software Testing</span>. I build end-to-end web applications — from{' '}
              <span className="text-foreground font-medium">React</span> frontends to{' '}
              <span className="text-foreground font-medium">FastAPI</span> backends — and back them with automated testing, meaningful test coverage, and structured QA processes that catch issues before they reach production. With{' '}
              <span className="text-foreground font-medium">4+ internships</span> and a product patent, I bring both engineering depth and a quality-first mindset to every project.
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
                className="glass-card rounded-2xl p-8 text-center hover:border-foreground/30 transition-all duration-300"
              >
                <div
                  className="text-6xl md:text-7xl font-bold mb-3 text-foreground"
                >
                  <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="text-muted-foreground text-base uppercase tracking-widest font-semibold">
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
