import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../LanguageContext'

const skills = [
  { name: 'HTML5 & CSS3', level: 100 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'React.js & Vite', level: 85 },
  { name: 'PHP & MySQL', level: 75 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'UI/UX Implementation', level: 95 },
]

function Skills() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true)
    }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
  }, [])

  return (
    <section id="skills" ref={ref}>
      <h2 className="reveal active">{t.skills_title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {skills.map((skill, i) => (
          <div key={i} className="glass-card" style={{ padding: '25px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontWeight: 700 }}>
              <span>{skill.name}</span>
              <span style={{ color: 'var(--secondary)' }}>{skill.level}%</span>
            </div>
            <div style={{ width: '100%', height: '10px', background: 'var(--bg)', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{
                width: inView ? `${skill.level}%` : '0%',
                height: '100%',
                background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                borderRadius: '10px',
                transition: `width 1.5s cubic-bezier(0.5, 0, 0, 1) ${i * 0.1}s`
              }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Skills