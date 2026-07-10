import { useEffect, useRef } from 'react'

export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let stars = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initStars = () => {
      stars = []
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.3,
          speed: Math.random() * 0.01 + 0.002,
          offset: Math.random() * Math.PI * 2,
        })
      }
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((s) => {
        const alpha = 0.2 + 0.5 * (0.5 + 0.5 * Math.sin(time * s.speed + s.offset))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    initStars()
    animId = requestAnimationFrame(draw)

    window.addEventListener('resize', () => {
      resize()
      initStars()
    })

    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
