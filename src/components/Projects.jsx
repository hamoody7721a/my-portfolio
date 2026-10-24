import { useRef } from 'react'
import { useLanguage } from '../LanguageContext'

function ProjectCard({ project }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return;
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`
    }
  }

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card"
      style={{
        padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px',
        transition: 'transform 0.1s ease-out', transformStyle: 'preserve-3d',
        cursor: 'pointer', position: 'relative', overflow: 'hidden'
      }}
    >
      <div style={{ transform: 'translateZ(30px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--text)', marginBottom: '10px' }}>{project.title}</h3>
        <p style={{ color: 'var(--gray)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>{project.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {project.tech.split(', ').map(tech => (
            <span key={tech} style={{ 
              background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', 
              padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 
            }}>{tech}</span>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: 'auto', flexWrap: 'wrap' }}>
          <a href={project.link} target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px', 
            color: 'var(--secondary)', fontWeight: 700,
            borderBottom: '2px solid var(--secondary)', paddingBottom: '2px',
            transition: 'color 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--secondary)'}>
            عرض المشروع ↗
          </a>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects">
      <h2 className="reveal active">{t.projects_title}</h2>
      
      {/* التعديل السحري هون */}
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="projects-grid">
        {t.projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  )
}
export default Projects