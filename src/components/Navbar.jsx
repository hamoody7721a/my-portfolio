import { useState, useEffect } from 'react'
import { useLanguage } from '../LanguageContext'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t, lang, toggleLang } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav_about },
    { href: '#skills', label: t.nav_skills },
    { href: '#projects', label: t.nav_projects },
    { href: '#contact', label: t.nav_contact },
  ]

  // رابط تحميل الـ CV الذكي
  const cvLink = `/${lang === 'ar' ? 'CV-AR.pdf' : 'CV-EN.pdf'}`
  const cvDownloadName = `Mohammad_Ghusen_CV_${lang.toUpperCase()}.pdf`

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      background: scrolled ? 'rgba(11, 17, 32, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '18px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <a href="#hero" style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)' }}>
          MG.
        </a>

        {/* قائمة الديسكتوب */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <li key={l.href}>
             <a href={l.href} className="nav-link" style={{ fontWeight: 700 }}>{l.label}</a>
            </li>
          ))}
          
          {/* زر السيرة الذاتية (ديسكتوب) */}
          <li>
            <a href={cvLink} download={cvDownloadName} style={{
              background: 'var(--primary)', color: 'white',
              padding: '8px 20px', borderRadius: '20px', fontWeight: 700,
              display: 'flex', alignItems: 'center', gap: '8px',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
              {lang === 'ar' ? 'السيرة الذاتية' : 'Resume'}
            </a>
          </li>

          {/* زر اللغة (ديسكتوب) */}
          <li>
            <button onClick={toggleLang} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              color: 'var(--text)', padding: '8px 16px', borderRadius: '20px',
              fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8
            }}>
              {lang === 'ar' ? 'EN 🇬🇧' : 'AR 🇸🇾'}
            </button>
          </li>
        </ul>

        {/* أزرار الموبايل */}
        <div style={{ display: 'none', gap: 15, alignItems: 'center' }} className="nav-mobile-btn">
          <a href={cvLink} download={cvDownloadName} style={{ color: 'var(--secondary)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
          </a>
          <button onClick={toggleLang} style={{ background: 'none', border: 'none', color: 'var(--text)', fontWeight: 700 }}>
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.5rem' }}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      {open && (
        <div style={{ background: 'var(--bg-card)', padding: 20 }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="nav-link" style={{ fontWeight: 600 }}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
export default Navbar