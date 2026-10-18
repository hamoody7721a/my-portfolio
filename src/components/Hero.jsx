import { useEffect, useState } from 'react'
import profileImg from '../assets/IMG_123.jpeg'
import { useLanguage } from '../LanguageContext'

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [typedText, setTypedText] = useState('')
  const { t, lang } = useLanguage()

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    setTypedText('')
    let i = 0
    const timer = setInterval(() => {
      setTypedText(t.hero_role.slice(0, i))
      i++
      if (i > t.hero_role.length) clearInterval(timer)
    }, 100)
    return () => clearInterval(timer)
  }, [lang, t.hero_role])

  const cvLink = `/${lang === 'ar' ? 'CV-AR.pdf' : 'CV-EN.pdf'}`
  const cvDownloadName = `Mohammad_Ghusen_CV_${lang.toUpperCase()}.pdf`

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px',
      paddingTop: '100px', position: 'relative'
    }}>
      
      <div style={{ flex: '1 1 400px', zIndex: 2 }}>
        
        {/* هنا ضفنا كلاسات الحركة (hero-fade-up delay-1 إلخ) */}
        <p className="hero-fade-up delay-1" style={{ color: 'var(--secondary)', fontWeight: 700, marginBottom: '20px', letterSpacing: '2px' }}>
          {t.hero_greeting}
        </p>
        
        <h1 className="hero-fade-up delay-2" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>
          {t.hero_im} <span style={{ color: 'var(--text)' }}>{t.hero_name}</span>
          <br />
          <span style={{ color: 'var(--primary)', fontSize: '0.6em' }}>
            {typedText}<span style={{ animation: 'blink 1s infinite' }}>|</span>
          </span>
        </h1>
        
        <p className="hero-fade-up delay-3" style={{ fontSize: '1.2rem', color: 'var(--gray)', maxWidth: '500px', marginBottom: '40px' }}>
          {t.hero_desc}
        </p>

        <div className="hero-fade-up delay-4" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            padding: '16px 40px', background: 'var(--primary)', color: 'white',
            borderRadius: '30px', fontWeight: 700, fontSize: '1.1rem',
            boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {t.hero_btn}
          </a>

          <a href={cvLink} download={cvDownloadName} style={{
            padding: '16px 40px', background: 'transparent', color: 'var(--text)',
            borderRadius: '30px', fontWeight: 700, fontSize: '1.1rem',
            border: '2px solid var(--border)', display: 'flex', alignItems: 'center', gap: '10px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--secondary)'; e.currentTarget.style.transform = 'translateY(-5px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            {t.download_cv}
          </a>
        </div>
      </div>

      <div className="hero-fade-up delay-2" style={{
        flex: '1 1 400px', display: 'flex', justifyContent: 'center', zIndex: 2,
        perspective: '1000px'
        ,overflow: 'hidden'
      }}>
        <div style={{
          width: '100%', maxWidth: '400px', aspectRatio: '1',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
          padding: '8px',
          transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
          transition: 'transform 0.1s ease-out',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
        }}>
          <img 
            src={profileImg} 
            alt="Mohammad Ghusen" 
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
            }} 
          />
        </div>
      </div>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </section>
  )
}
export default Hero