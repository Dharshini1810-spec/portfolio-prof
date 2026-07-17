import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const achievements = [
  { icon: '🏅', title: 'Product Patent', desc: 'ML System for Predictive Earthquake Impact Analysis' },
  { icon: '📄', title: 'Journal Publication', desc: 'Synergetic Drug Coated Titanium Dental Implants' },
  { icon: '🏆', title: 'Smart India Hackathon (SIH)', desc: 'Participant' },
  { icon: '⚡', title: 'Codesprint Hackathon', desc: 'Participant' },
  { icon: '🎯', title: 'VQAR Hackathon', desc: 'Participant' },
  { icon: '🌐', title: 'Unstop Online Hackathons', desc: 'Multiple participations' },
]

const certifications = [
  { title: 'Microsoft End-to-End Analytics', issuer: 'Microsoft', file: 'cert1.jpg' },
  { title: 'Microsoft AI Azure Data Fundamentals', issuer: 'Microsoft', file: 'cert2.jpg' },
  { title: 'Coursera Python/Java/C/AI Fundamentals', issuer: 'Coursera', file: 'cert3.jpg' },
  { title: 'IBM Practitioner & Co-Creator', issuer: 'IBM', file: 'cert4.jpg' },
]

export default function Achievements() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)

  const open = (cert) => {
    setSelectedCert(cert)
    setModalOpen(true)
  }

  return (
    <section id="achievements" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="section-underline" />
        </motion.div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="rounded-2xl p-6 text-center transition-all duration-300 bg-card border border-border hover:border-foreground/30"
            >
              <div className="text-4xl mb-4">{a.icon}</div>
              <h3 className="text-foreground font-semibold mb-1">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="section-title !text-2xl md:!text-3xl mb-12">Certifications</h3>
          <div className="section-underline !w-16 !h-[2px]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {certifications.map((cert, i) => (
            <motion.button
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              onClick={() => open(cert)}
              className="rounded-2xl p-6 text-left transition-all duration-300 cursor-pointer hover:scale-[1.02] bg-card border border-border hover:border-foreground/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-muted border border-border flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-foreground"><path d="M12 2L2 7v3c0 6.63 3.5 12.32 10 14 6.5-1.68 10-7.37 10-14V7l-10-5zm0 2.18l8 4v2.82c0 5.05-2.83 9.37-8 10.92-5.17-1.55-8-5.87-8-10.92V8.18l8-4z"/><path d="M11 14l-3-3-1.41 1.41L11 16.83l7-7-1.41-1.41L11 14z"/></svg>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                  <p className="text-muted-foreground/70 text-xs mt-2">Click to view</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-md"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg rounded-3xl p-8 bg-card border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground text-xl rounded-full bg-muted hover:bg-border transition-all"
              >
                ✕
              </button>

              <div className="w-full rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-muted border-2 border-dashed border-border min-h-[12rem]">
                <p className="text-muted-foreground text-sm text-center p-4">
                  Drop your certificate at<br />
                  <span className="text-foreground/60">src/assets/certificates/{selectedCert.file}</span>
                </p>
              </div>

              <h3 className="text-xl font-bold text-foreground">{selectedCert.title}</h3>
              <p className="text-muted-foreground mt-1">{selectedCert.issuer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
