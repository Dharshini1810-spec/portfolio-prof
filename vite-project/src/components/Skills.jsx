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
              className="rounded-2xl p-8 text-center transition-all duration-300 bg-card border border-border hover:border-foreground/30"
            >
              <div className="text-4xl mb-6">{cat.icon}</div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 uppercase tracking-widest font-display">
                {cat.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-lg px-5 py-3 rounded-full bg-muted border border-border text-foreground transition-all duration-300 font-medium hover:border-foreground/40"
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
