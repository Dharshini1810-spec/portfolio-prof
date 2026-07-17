import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Replace src/assets/profile.jpg with your professional photo

const roles = [
  'Full Stack Developer',
  'Software Testing Engineer',
  'QA Automation Specialist',
  'Backend & Frontend Engineer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayText === current) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayText === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            deleting
              ? current.slice(0, displayText.length - 1)
              : current.slice(0, displayText.length + 1)
          )
        },
        deleting ? 50 : 100
      )
    }
    return () => clearTimeout(timeout)
  }, [displayText, deleting, roleIndex])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const socials = [
    { label: 'GitHub', href: 'https://github.com/Dharshini1810-spec', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/dharshini-s-8330', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/Dharshinit0810/', icon: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.17.038l-.039-.038-4.276-4.193a3.044 3.044 0 0 1-.652-.953 3.066 3.066 0 0 1-.188-.77 3.08 3.08 0 0 1 0-.992c.058-.57.302-1.112.84-1.712L13.024 2.96a1.375 1.375 0 0 0-.001-1.961A1.374 1.374 0 0 0 13.483 0zm4.438 17.594a1.376 1.376 0 0 0-.961.438l-5.77 6.175c-.54.54-.54 1.414.003 1.955.54.54 1.414.54 1.955-.003l5.768-6.174c.54-.54.54-1.414-.003-1.955a1.376 1.376 0 0 0-.992-.436z' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center justify-items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-border" />
            <div className="absolute inset-3 rounded-full overflow-hidden bg-muted">
              <img
                src="/avatar.jpg"
                alt="Dharshini S"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  const parent = e.target.parentElement
                  const fallback = parent.querySelector('.fallback-avatar')
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div
                className="fallback-avatar hidden absolute inset-0 items-center justify-center bg-muted"
              >
                <span className="text-6xl font-display font-bold text-foreground">
                  D
                </span>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-3 h-3 rounded-full bg-muted-foreground/40" />
            <div className="absolute -bottom-4 -left-4 w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          </div>

          <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
            <div className="absolute top-[-20px] left-[30px] w-4 h-4 rounded-full bg-white/10 animate-orbit" />
            <div className="absolute top-[20px] right-[-40px] w-6 h-6 rounded-full bg-secondary/10 animate-orbit-reverse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-muted border border-border text-muted-foreground text-base px-4 py-2 rounded-full mb-8">
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-extrabold text-foreground mb-6 tracking-tight">
            DHARSHINI S
          </h1>

          <div className="text-2xl md:text-3xl text-muted-foreground mb-4 h-12 font-medium">
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mt-6 mb-10 max-w-2xl mx-auto">
            Full Stack Developer with a strong focus on Software Testing — building reliable frontend and backend systems backed by automated testing, thorough test coverage, and disciplined QA processes.
          </p>

          <div className="flex flex-wrap items-center gap-4 justify-center">
            <button
              onClick={() => scrollTo('#projects')}
              className="px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg transition-all duration-300 hover:opacity-90"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 rounded-full border-2 border-border text-foreground font-semibold text-lg transition-all duration-300 hover:bg-muted"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12 justify-center">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                title={s.label}
              >
                <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center hover:border-foreground/50 transition-all duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-muted-foreground group-hover:fill-foreground transition-all duration-300"
                  >
                    <path d={s.icon} />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
