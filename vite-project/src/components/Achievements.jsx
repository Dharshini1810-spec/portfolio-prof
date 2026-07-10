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
              className="rounded-2xl p-6 text-center transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(234,179,8,0.3)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(234,179,8,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="text-4xl mb-4">{a.icon}</div>
              <h3 className="text-white font-semibold mb-1">{a.title}</h3>
              <p className="text-slate-400 text-sm">{a.desc}</p>
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
              className="rounded-2xl p-6 text-left transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(139,92,246,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-violet-400"><path d="M12 2L2 7v3c0 6.63 3.5 12.32 10 14 6.5-1.68 10-7.37 10-14V7l-10-5zm0 2.18l8 4v2.82c0 5.05-2.83 9.37-8 10.92-5.17-1.55-8-5.87-8-10.92V8.18l8-4z"/><path d="M11 14l-3-3-1.41 1.41L11 16.83l7-7-1.41-1.41L11 14z"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{cert.title}</h4>
                  <p className="text-cyan-400 text-sm mt-1">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs mt-2">Click to view</p>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg rounded-3xl p-8"
              style={{
                background: 'rgba(5,5,25,0.95)',
                border: '1px solid rgba(139,92,246,0.4)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white text-xl rounded-full bg-white/5 hover:bg-white/10 transition-all"
              >
                ✕
              </button>

              <div className="w-full rounded-xl overflow-hidden mb-6 flex items-center justify-center"
                style={{
                  border: '2px dashed rgba(139,92,246,0.3)',
                  minHeight: '12rem',
                  background: 'rgba(139,92,246,0.03)',
                }}
              >
                <p className="text-slate-500 text-sm text-center p-4">
                  Drop your certificate at<br />
                  <span className="text-cyan-400/60">src/assets/certificates/{selectedCert.file}</span>
                </p>
              </div>

              <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
              <p className="text-cyan-400 mt-1">{selectedCert.issuer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
