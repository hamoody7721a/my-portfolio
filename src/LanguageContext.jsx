import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  ar: {
    contact_whatsapp: 'راسلني واتساب',
    nav_about: 'عني',
    nav_skills: 'مهاراتي',
    nav_projects: 'مشاريعي',
    nav_contact: 'تواصل',
    hero_greeting: 'أهلاً بك في عالمي',
    hero_im: 'أنا',
    hero_name: 'محمد غصن',
    hero_role: 'مطور واجهات أمامية',
    hero_desc: 'أصمم وأبني تجارب رقمية استثنائية. أحول الأفكار المعقدة إلى واجهات بسيطة، سريعة، وجذابة.',
    hero_btn: 'استكشف أعمالي',
    about_title: 'عني',
    about_text: 'مطور واجهات أمامية شغوف، حاصل على دبلوم تقني في علوم الحاسوب من الجامعة الافتراضية السورية. أمتلك خبرة واسعة في بناء تطبيقات ويب ديناميكية ومتجاوبة باستخدام React.js و JavaScript. أعمل كمطور مستقل (Freelance) ولدي سجل حافل في بناء المتاجر الإلكترونية وتطبيقات المطاعم مثل Crunchy Bites.',
    skills_title: 'مهاراتي التقنية',
    projects_title: 'أبرز مشاريعي',
    contact_title: 'تواصل معي',
    contact_desc: 'هل لديك فكرة مشروع؟ دعنا نبني شيئاً رائعاً معاً.',
    contact_btn: 'أرسل رسالة',
    projects: [
      { title: 'تطبيق Crunchy Bites', desc: 'تطبيق ويب متكامل لطلبات المطاعم مبني بـ React و Vite، يتميز بسلة تسوق تفاعلية، إرسال الطلبات عبر واتساب، ولوحة تحكم مخصصة.', link: 'https://crunchy-bites.pages.dev', tech: 'React, Vite, WhatsApp API' },
      { title: 'متجر Syria TIC', desc: 'واجهة متجر إلكتروني للمعدات التقنية مبني بلغة PHP مع لوحة تحكم متكاملة لإدارة الأجهزة.', link: '#', tech: 'PHP, MySQL, HTML/CSS' },
      { title: 'متجر إلكتروني متجاوب', desc: 'بناء واجهة متجر إلكتروني عصري ومتجاوب مع جميع أحجام الشاشات باستخدام HTML5 و CSS3.', link: '#', tech: 'HTML5, CSS3' }
    ]
  },
  en: {
    contact_whatsapp: 'WhatsApp Me',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_greeting: 'Welcome to my world',
    hero_im: "I'm",
    hero_name: 'Mohammad Ghusen',
    hero_role: 'Front-End Developer',
    hero_desc: 'I design and build exceptional digital experiences. I turn complex ideas into simple, fast, and engaging interfaces.',
    hero_btn: 'Explore My Work',
    about_title: 'About Me',
    about_text: 'Passionate Front-End Developer with a Technical Diploma in Computer Science from the Syrian Virtual University (SVU). Proficient in modern web technologies including React.js and JavaScript. As a Freelance Developer, I have a proven track record of building dynamic, responsive web applications and e-commerce stores like Crunchy Bites.',
    skills_title: 'Technical Skills',
    projects_title: 'Featured Projects',
    contact_title: 'Contact Me',
    contact_desc: 'Have a project idea? Let\'s build something amazing together.',
    contact_btn: 'Send Message',
    projects: [
      { title: 'Crunchy Bites App', desc: 'Full web app using React and Vite, featuring a real-time interactive cart, direct WhatsApp order placement, and an Admin Dashboard.', link: 'https://crunchy-bites.pages.dev', tech: 'React, Vite, WhatsApp API' },
      { title: 'Syria TIC Store', desc: 'Tech electronics e-commerce interface built on PHP with an integrated admin backend panel for inventory management.', link: '#', tech: 'PHP, MySQL, HTML/CSS' },
      { title: 'Responsive E-Commerce', desc: 'Modern, multi-device compatible storefront layout using semantic HTML5 and custom CSS3 styling.', link: '#', tech: 'HTML5, CSS3' }
    ]
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar')
  
  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar')
    // تغيير اتجاه الصفحة
    document.documentElement.dir = lang === 'ar' ? 'ltr' : 'rtl'
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)