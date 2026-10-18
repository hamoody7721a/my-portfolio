import { useLanguage } from '../LanguageContext'

function Footer() {
  const { lang } = useLanguage()
  
  return (
    <footer style={{ 
      textAlign: 'center', padding: '40px 20px', 
      borderTop: '1px solid var(--border)', color: 'var(--gray)',
      background: 'rgba(11, 17, 32, 0.5)'
    }}>
      <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
        {lang === 'ar' ? 'صُنع بـ' : 'Built with'} <span style={{ color: '#ef4444' }}>♥</span> {lang === 'ar' ? 'بواسطة' : 'by'} 
        <span style={{ color: 'var(--text)', fontWeight: 700 }}> محمد غصن</span>
      </p>
      <p style={{ fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Mohammad Ghusen. All rights reserved.
      </p>
    </footer>
  )
}
export default Footer