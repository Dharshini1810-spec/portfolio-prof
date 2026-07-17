import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import generatePDF from 'react-to-pdf'
// import StarBackground from './components/StarBackground' // Replaced with shadcn-style neutral background (kept for revert)
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const targetRef = useRef()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="relative min-h-screen bg-background text-foreground" ref={targetRef}>
      {/* <StarBackground /> */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>

      <button
        onClick={() => generatePDF(targetRef, {filename: 'Dharshini_Portfolio.pdf'})}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #00f5ff, #8b5cf6)',
          color: 'white',
        }}
        title="Save Portfolio as PDF"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </button>
    </div>
  )
}

export default App
