import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Languages',
    icon: '🖥️',
    skills: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['FastAPI', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'SQLAlchemy', 'Alembic'],
  },
  {
    category: 'Data & AI',
    icon: '📊',
    skills: ['Power BI', 'DAX', 'Data Analysis', 'Groq API'],
  },
  {
    category: 'Tools',
    icon: '🔧',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Flutter', 'Aiven'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title text-5xl md:text-6xl">Skills</h2>
          <div className="section-underline mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="rounded-2xl p-8 text-center transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'
                e.currentTarget.style.background = 'rgba(139,92,246,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              }}
            >
              <div className="text-4xl mb-6">{cat.icon}</div>
              <h3 className="text-2xl font-semibold text-violet-300 mb-8 uppercase tracking-widest font-display">
                {cat.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-lg px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 transition-all duration-300 font-medium"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0,245,255,0.2)'
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(0,245,255,0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0,245,255,0.1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
