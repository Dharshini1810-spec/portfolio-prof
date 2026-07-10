import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Magizh Technologies',
    role: 'Full Stack Development Intern',
    date: 'Recent',
    bullets: [
      'Built Student Management System — FastAPI, React, PostgreSQL',
      'Implemented JWT auth, attendance tracking, task approval workflow',
      'Used Aiven cloud, Alembic migrations, real-time notification system',
    ],
  },
  {
    company: 'Mindful AI',
    role: 'Power BI Intern',
    date: 'July – August 2025',
    bullets: [
      'Designed interactive Power BI dashboards for business intelligence',
      'DAX query optimization, Power Query transformations',
      'Transformed complex datasets into actionable insights',
    ],
  },
  {
    company: 'Internpe',
    role: 'Data Analyst Intern',
    date: 'July – August 2025',
    bullets: [
      'Analyzed large structured datasets, discovered operational trends',
      'Automated visual data summaries and executive reports',
    ],
  },
  {
    company: 'Brainwave Matrix Solutions',
    role: 'Software Development Intern',
    date: 'Recent',
    bullets: [
      'Feature development across the software lifecycle',
      'Bug fixing, debugging, collaborative development',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title text-5xl md:text-6xl">Experience</h2>
          <div className="section-underline mx-auto" />
        </motion.div>

        <div className="space-y-8 md:space-y-6">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full"
              >
                <div
                  className="rounded-2xl p-8 transition-all duration-300"
                  style={{
                    background: 'rgba(5,5,25,0.9)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,245,255,0.3)'
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(0,245,255,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="inline-block text-base font-medium px-4 py-2 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                      {exp.role}
                    </span>
                    <span className="text-base text-slate-400">{exp.date}</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-4" style={{ textShadow: '0 2px 20px rgba(0,245,255,0.2)' }}>
                    {exp.company}
                  </h3>
                  <ul className="space-y-4">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="text-slate-300 text-lg flex items-start gap-4">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0 mt-2.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
