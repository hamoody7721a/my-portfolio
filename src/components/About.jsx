import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../LanguageContext'

function About() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about">
      <div
        ref={ref}
        className={`reveal glass-card ${active ? 'active' : ''}`}
        style={{
          padding: '60px 40px',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '30px' }}>{t.about_title}</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--gray)', lineHeight: 2 }}>
          {t.about_text}
        </p>
      </div>
    </section>
  )
}

export default About