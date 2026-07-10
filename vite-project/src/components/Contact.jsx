import { useState } from 'react'
import { motion } from 'framer-motion'

/*
  EMAILJS SETUP (Free — 200 emails/month):
  1. Sign up at emailjs.com
  2. Add Email Service (Gmail)
  3. Create Template with variables: from_name, from_email, message, to_name
  4. Replace below constants with your actual IDs:
*/
const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const emailjs = await import('emailjs-com')
      await emailjs.default.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'Dharshini',
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('dharshinis1806@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socials = [
    { label: 'GitHub', href: 'https://github.com/Dharshini1810-spec', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/dharshini-s-8330', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/Dharshinit0810/', icon: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.17.038l-.039-.038-4.276-4.193a3.044 3.044 0 0 1-.652-.953 3.066 3.066 0 0 1-.188-.77 3.08 3.08 0 0 1 0-.992c.058-.57.302-1.112.84-1.712L13.024 2.96a1.375 1.375 0 0 0-.001-1.961A1.374 1.374 0 0 0 13.483 0zm4.438 17.594a1.376 1.376 0 0 0-.961.438l-5.77 6.175c-.54.54-.54 1.414.003 1.955.54.54 1.414.54 1.955-.003l5.768-6.174c.54-.54.54-1.414-.003-1.955a1.376 1.376 0 0 0-.992-.436z' },
  ]

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-underline" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-slate-400 mb-16 text-lg"
        >
          Have a project in mind? Let's build something amazing together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto rounded-3xl p-10"
          style={{
            background: 'rgba(5,5,25,0.9)',
            border: '1px solid rgba(139,92,246,0.2)',
            boxShadow: '0 0 80px rgba(139,92,246,0.1)',
          }}
        >
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold" style={{
              background: 'linear-gradient(135deg, #00f5ff, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Send Me a Message
            </h3>
            <p className="text-slate-500 text-sm mt-2">I'll respond within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300 tracking-wide">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(0,245,255,0.15)] outline-none transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300 tracking-wide">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(0,245,255,0.15)] outline-none transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300 tracking-wide">Your Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hello..."
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(0,245,255,0.15)] outline-none transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 disabled:opacity-70"
              style={{
                background: 'linear-gradient(135deg, #00f5ff, #8b5cf6)',
                boxShadow: '0 0 20px rgba(0,245,255,0.2)',
              }}
              onMouseEnter={(e) => {
                if (status !== 'loading') {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0,245,255,0.3)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,255,0.2)'
              }}
            >
              {status === 'idle' && 'Launch Message 🚀'}
              {status === 'loading' && (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Launching...
                </span>
              )}
              {status === 'success' && 'Message sent! Talk soon ✨'}
              {status === 'error' && 'Failed to send. Email me directly.'}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">Or connect with me directly:</p>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              {copied ? 'Copied! ✓' : 'dharshinis1806@gmail.com'}
            </button>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-all duration-300"
                title={s.label}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d={s.icon} /></svg>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
