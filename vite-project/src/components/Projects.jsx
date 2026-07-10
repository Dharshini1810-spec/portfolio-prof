import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Student Management System',
    icon: '🏆',
    featured: true,
    desc: 'Full-stack platform with 4 roles — attendance, task approvals, notifications, reports and analytics dashboard.',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'JWT', 'Tailwind', 'Alembic'],
    github: 'https://github.com/Dharshini1810-spec/student-management-system',
  },
  {
    title: 'OpportunitY',
    icon: '🚀',
    desc: 'Hackathon + internship + scholarship aggregator with AI-powered recommendations via Groq API.',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'Groq AI'],
    github: '#',
  },
  {
    title: 'FastAPI Story Generator',
    icon: '✍️',
    desc: 'AI story generation from prompts with customizable tone and length parameters.',
    tech: ['FastAPI', 'Python', 'Groq API'],
    github: 'https://github.com/Dharshini1810-spec/story-generator',
  },
  {
    title: 'React Todos',
    icon: '✅',
    desc: 'Feature-rich todo application with filtering, priorities, and state management.',
    tech: ['React 18', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Dharshini1810-spec/React-Todo1',
  },
  {
    title: 'Inflection AI',
    icon: '🤖',
    desc: 'AI chatbot framework with dynamic conversational node mapping and flow control.',
    tech: ['Python', 'AI/ML'],
    github: '#',
  },
  {
    title: 'DonorHub',
    icon: '🩸',
    desc: 'Blood bank management system with real-time inventory and request matching.',
    tech: ['Python', 'Database'],
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-underline" />
        </motion.div>

        {projects.filter((p) => p.featured).map((project, fi) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 rounded-3xl p-8 md:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(0,245,255,0.08), rgba(139,92,246,0.08))',
              border: '1px solid rgba(0,245,255,0.25)',
              boxShadow: '0 0 60px rgba(0,245,255,0.08)',
            }}
          >
            <div className="flex items-start gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                ⭐ Featured Project
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                ● Live
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{project.icon}</span>
                  <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full border border-cyan-500/30 text-cyan-400 text-sm hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  View on GitHub
                </a>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xs aspect-video rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-slate-600 text-sm">Project Preview</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {projects.filter((p) => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,245,255,0.3)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,245,255,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{project.icon}</span>
                <h3 className="text-xl font-display font-bold text-white">{project.title}</h3>
              </div>
              <p className="text-slate-400 text-sm flex-1 mt-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400">
                    {t}
                  </span>
                ))}
              </div>
              {project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
