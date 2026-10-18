import { useEffect, useRef } from 'react'
import { useLanguage } from '../LanguageContext'

function About() {
  const ref = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) entry.target.classList.add('active')
    }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
  }, [])

  return (
    <section id="about">
      <div ref={ref} className="reveal glass-card" style={{ padding: '60px 40px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '30px' }}>{t.about_title}</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--gray)', lineHeight: 2 }}>
          {t.about_text}
        </p>
      </div>
    </section>
  )
}
export default About