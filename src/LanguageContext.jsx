import { createContext, useContext, useEffect, useState } from 'react'

const translations = {
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'نبذة عني',
    nav_skills: 'المهارات',
    nav_projects: 'المشاريع',
    nav_contact: 'تواصل معي',
    hero_greeting: 'مرحباً بك في عالمي الرقمي',
    hero_im: 'أنا',
    hero_name: 'محمد عبد السلام غصن',
    hero_role: 'مطور واجهات أمامية ومستقل (React.js)',
    hero_desc:
      'حاصل على دبلوم تقاني في علوم الحاسوب (TIC) من الجامعة الافتراضية السورية (SVU). أبني مواقع وتطبيقات ويب متجاوبة وعصرية باستخدام HTML5 و CSS3 و JavaScript (ES6+) و React.js مع Vite، ومؤسس وكالة جوبيتير (Jupiter Agency).',
    hero_btn: 'استكشف أعمالي',
    download_cv: 'تحميل السيرة الذاتية',
    about_title: 'نبذة عني',
    about_text:
      'مطور واجهات أمامية حاصل على دبلوم تقاني في علوم الحاسوب (TIC) من الجامعة الافتراضية السورية (SVU - خريج 2024). أعمل على بناء تطبيقات وواجهات ويب حديثة ومتجاوبة باستخدام HTML5 و CSS3 و JavaScript (ES6+) و React.js مع Vite، مع خلفية داعمة بـ PHP وقواعد البيانات (MySQL, SQL Server) وربط الـ APIs ومسارات الطلب عبر WhatsApp، ومؤسس وكالة جوبيتير (Jupiter Agency).',
    skills_title: 'المهارات التقنية والبرمجية',
    projects_title: 'أبرز المشاريع والتطبيقات',
    view_project: 'عرض المشروع ↗',
    contact_title: 'تواصل معي',
    contact_desc: 'جاهز للعمل على مشاريع الويب، المتاجر، وصفحات الحجز والطلبات.',
    contact_whatsapp: 'تواصل عبر واتساب',
    projects: [
      {
        title: 'موقع وكالة جوبيتير (Jupiter Agency)',
        desc: 'موقع تعريفي لوكالة رقمية يعرض خدمات تصميم الويب وحلول الحجز والطلبات التجارية.',
        tech: 'React, Vite, Responsive UI',
        link: 'https://jupiter-agency.pages.dev',
      },
      {
        title: 'البورتفوليو الشخصي (Personal Portfolio)',
        desc: 'معرض أعمال شخصي لعرض المشاريع المنفذة والروابط الحية والمهارات البرمجية.',
        tech: 'React, Vite, UI/UX',
        link: 'https://my-portfolio-rn7.pages.dev',
      },
      {
        title: 'تطبيق طلبات المطاعم — Crunchy Bites',
        desc: 'تطبيق ويب مبني بـ React و Vite يضم سلة تفاعلية، وإرسال الطلبات مباشرة عبر WhatsApp، وإدارة القوائم.',
        tech: 'React, Vite, WhatsApp API',
        link: 'https://crunchy-bites.pages.dev',
      },
      {
        title: 'متجر أزياء — Rasha Chic',
        desc: 'واجهة متجر أزياء وموضة متجاوبة تركز على وضوح العرض البصري وسهولة التصفح عبر الجوال.',
        tech: 'HTML5, CSS3, Responsive',
        link: 'https://rasha-chic.pages.dev',
      },
      {
        title: 'متجر الأحذية — Shoes Storefront',
        desc: 'واجهة متجر أحذية عصرية مصممة للتصفح السلس على مختلف الأجهزة وعرض المنتجات بوضوح.',
        tech: 'HTML5, CSS3, JavaScript',
        link: 'https://shoes-store-9p7.pages.dev',
      },
      {
        title: 'عيادة ميرميد لطب الأسنان — Mermaid Dental',
        desc: 'موقع تعريفي لعيادة أسنان يبرز الخدمات الطبية وتجربة تصفح مريحة للمراجعين.',
        tech: 'React, UI/UX, Web Design',
        link: 'https://mermaid-dental-chf.pages.dev',
      },
      {
        title: 'منصة حجز ملاعب كرة القدم',
        desc: 'منصة ويب لملاعب كرة القدم توضح المواعيد والخدمات وتدعم الوصول السريع من الهاتف.',
        tech: 'React, Booking UI, Mobile',
        link: 'https://football-playgroundkuwait.pages.dev',
      },
      {
        title: 'متجر سوريا للتكنولوجيا — Syria TIC Store',
        desc: 'متجر إلكتروني للأجهزة والمعدات التقنية مبني بـ PHP مع لوحة إدارة للمنتجات والمخزون.',
        tech: 'PHP, MySQL, Admin Panel',
        link: 'https://syria-tic.rf.gd',
      },
    ],
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_greeting: 'WELCOME TO MY DIGITAL WORLD',
    hero_im: "I'M",
    hero_name: 'Mohammad Abdulsalam Ghusen',
    hero_role: 'Front-End Web Developer | React.js & Freelance',
    hero_desc:
      'Front-End Web Developer holding a Technical Diploma in Computer Science (TIC) from SVU. Building responsive modern web apps with HTML5, CSS3, JavaScript (ES6+), React.js, and Vite, and Founder of Jupiter Agency.',
    hero_btn: 'Explore My Work',
    download_cv: 'Download CV',
    about_title: 'About Me',
    about_text:
      'Detail-oriented Front-End Web Developer holding a Technical Diploma in Computer Science (TIC) from the Syrian Virtual University (SVU, graduated 2024). Experienced in building responsive web applications with HTML5, CSS3, JavaScript (ES6+), React.js, and Vite, with supporting knowledge of PHP, MySQL, SQL Server, APIs, and WhatsApp order flows, and Founder of Jupiter Agency.',
    skills_title: 'Technical Skills',
    projects_title: 'Selected Projects & Web Apps',
    view_project: 'Live Preview ↗',
    contact_title: 'Get In Touch',
    contact_desc: 'Available for freelance front-end builds, storefronts, and booking or ordering web apps.',
    contact_whatsapp: 'Chat on WhatsApp',
    projects: [
      {
        title: 'Jupiter Agency Website',
        desc: 'Digital agency showcase presenting web design, booking solutions, and commercial web services.',
        tech: 'React, Vite, Responsive UI',
        link: 'https://jupiter-agency.pages.dev',
      },
      {
        title: 'Personal Developer Portfolio',
        desc: 'Personal developer portfolio highlighting front-end builds, UI work, and live web deployments.',
        tech: 'React, Vite, UI/UX',
        link: 'https://my-portfolio-rn7.pages.dev',
      },
      {
        title: 'Restaurant Ordering Web App — Crunchy Bites',
        desc: 'Built with React and Vite featuring an interactive cart, direct WhatsApp order flow, and menu administration.',
        tech: 'React, Vite, WhatsApp API',
        link: 'https://crunchy-bites.pages.dev',
      },
      {
        title: 'Rasha Chic — Fashion Storefront',
        desc: 'Responsive fashion and apparel web storefront focused on clean visual presentation and mobile usability.',
        tech: 'HTML5, CSS3, Responsive',
        link: 'https://rasha-chic.pages.dev',
      },
      {
        title: 'Shoes Storefront',
        desc: 'Modern footwear storefront designed for multi-device browsing and clear product presentation.',
        tech: 'HTML5, CSS3, JavaScript',
        link: 'https://shoes-store-9p7.pages.dev',
      },
      {
        title: 'Mermaid Dental Clinic',
        desc: 'Dental clinic web experience tailored to service presentation and patient-friendly navigation.',
        tech: 'React, UI/UX, Web Design',
        link: 'https://mermaid-dental-chf.pages.dev',
      },
      {
        title: 'Football Playground Booking Site',
        desc: 'Sports pitch web presence built for clear schedule visibility and mobile access.',
        tech: 'React, Booking UI, Mobile',
        link: 'https://football-playgroundkuwait.pages.dev',
      },
      {
        title: 'Syria TIC Electronics Store',
        desc: 'Electronics store interface built with PHP and an administrative panel for product and inventory management.',
        tech: 'PHP, MySQL, Admin Panel',
        link: 'https://syria-tic.rf.gd',
      },
    ],
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar')

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)