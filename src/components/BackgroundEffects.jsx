import { useEffect, useState } from 'react'

function BackgroundEffects() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // 1. شريط التقدم
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      setScrollProgress((currentScroll / totalScroll) * 100)
    }
    window.addEventListener('scroll', handleScroll)

    // 2. توهج الماوس
    const glow = document.getElementById('mouse-glow')
    const handleMouseMove = (e) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`
        glow.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div id="mouse-glow" />
    </>
  )
}

export default BackgroundEffects