import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const innerRef = useRef(null)
  const outerRef = useRef(null)

  useEffect(() => {
    const inner = innerRef.current
    const outer = outerRef.current
    if (!inner || !outer) return

    let mx = 0, my = 0
    let ox = 0, oy = 0
    let isHovering = false

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const onLinkEnter = () => { isHovering = true }
    const onLinkLeave = () => { isHovering = false }

    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', onLinkEnter)
      el.addEventListener('mouseleave', onLinkLeave)
    })

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', onLinkEnter)
        el.removeEventListener('mouseleave', onLinkLeave)
        el.addEventListener('mouseenter', onLinkEnter)
        el.addEventListener('mouseleave', onLinkLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    const animate = () => {
      ox += (mx - ox) * 0.15
      oy += (my - oy) * 0.15
      const scale = isHovering ? 2.5 : 1
      inner.style.transform = `translate(${mx - 4}px, ${my - 4}px) scale(${scale})`
      outer.style.transform = `translate(${ox - 10}px, ${oy - 10}px) scale(${scale})`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none transition-transform duration-150"
        style={{ zIndex: 9999, boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff' }}
      />
      <div
        ref={outerRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none border border-primary/30"
        style={{ zIndex: 9998, transition: 'width 0.3s, height 0.3s' }}
      />
    </>
  )
}
