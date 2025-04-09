import React, { useState, createContext } from 'react';
import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.png';
import project3 from '../assets/projects/project3.png';
import project4 from '../assets/projects/project4.png';
import project5 from '../assets/projects/project5.png';
import project6 from '../assets/projects/project6.png';
import project7 from '../assets/projects/project7.png';
import project8 from '../assets/projects/project8.png';
import project9 from '../assets/projects/project9.png';
import project10 from '../assets/projects/project10.png';




// Create the context
const LongContext = createContext();

const translations = {
  en: {
    about: "About",
    me: "Me",
    introduction: "Hi! I'm Mohamed Tolba, a dedicated full-stack developer from Fes. I'm passionate about building things for the web, whether it's crafting dynamic websites, interactive applications, or innovative digital solutions.",
    journey: "I am a graduate of the Office of Vocational Training and Employment (OFPPT), where I obtained a specialized technician diploma in the field of digital development. I have worked on academic and personal projects using a variety of technologies, including React, Vite, and Tailwind CSS for front-end development. For the back-end, I work with Express.js or Laravel 10, and for databases, I handle MySQL or MongoDB.",

  },
  ar: {
    about: "نبذة",
    me: "عني",
    introduction: "مرحبًا! أنا محمد طلبة، مطور متخصص في تطوير البرمجيات الكاملة من فاس. أنا شغوف ببناء الأشياء للويب، سواء كان ذلك إنشاء مواقع ويب ديناميكية أو تطبيقات تفاعلية أو حلول رقمية مبتكرة.",
    journey: "أنا خريج من مؤسسة التكوين المهني OFPPT حيث حصلت على دبلوم تقني متخصص في شعبة تطوير الرقمية. عملت على مشاريع أكاديمية وخاصة باستخدام مجموعة من التقنيات في الواجهة الأمامية مثل React وVite وTailwind CSS. أما في الواجهة الخلفية، فأنا أعمل باستخدام Express.js أو Laravel 10، وفي قواعد البيانات أتعامل مع MySQL أو MongoDB. ",

  }
};

const projects = [
  {
    imageUrl: project1,
    liveLink: "https://cars-simo.onrender.com/",
    githubLink: "https://github.com/Mohahamed99-by/web-cars"
  },
  {
    imageUrl: project2,
    liveLink: "https://qr-code-as.onrender.com/",
    githubLink: "https://github.com/Mohahamed99-by/qr-code/"
  },
  {
    imageUrl: project3,
    liveLink: "https://we-car.onrender.com/",
    githubLink: "https://github.com/Mohahamed99-by/web-cars"
  }
  ,
  {

    imageUrl: project5,
    liveLink: "https://service-iptv.onrender.com/",
    githubLink: "https://github.com/Mohahamed99-by/IPTV"
  },
  { 
    imageUrl: project4,
    liveLink: "https://texturnhub-cw6f.vercel.app/",
    githubLink: ""
  },
  {
    imageUrl: project6,
    liveLink: "https://shoe-store-c0pj.onrender.com/",

  },
  {
    imageUrl: project7,
    liveLink: "https://riad-oasis.vercel.app/"
  },
  {
    imageUrl: project8,
    liveLink: "https://ecomwes.vercel.app/",
  },
  {
    imageUrl: project9,
    liveLink: "https://olive-oil-store.vercel.app/",
  },
  {
    imageUrl: project10,
    liveLink: "https://v0-social-link-manager.vercel.app/",
  }
];

const translationsHero = {
  en: {
    name: "Mohammed Tolba",
    greeting: "Hi, my name is",
    description: "I'm an experienced Full-Stack Web Developer passionate about transforming innovative ideas into powerful digital solutions.",
    viewProjects: "View Projects",
    downloadCV: "Download CV"
  },
  ar: {
    name: "محمد طولبة",
    greeting: "مرحبًا، اسمي",
    description: "أنا مطور ويب Full-Stack ذو خبرة، شغوف بتحويل الأفكار المبتكرة إلى حلول رقمية قوية.",
    viewProjects: "عرض المشاريع",
    downloadCV: "تحميل السيرة الذاتية"
  }
};
const translationsNavbar = {
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    resume: 'Resume',
  },
  ar: {
    home: 'الصفحة الرئيسية',
    about: 'حول',
    skills: 'المهارات',
    projects: 'المشاريع',
    contact: 'اتصل',
    resume: 'السيرة الذاتية',
  },
};

const translationsSkills = {
  en: {
    title: "Skills",
    description: "These are the technologies I work with",
    developmentCategories: "Development Categories",
    frontend: "Frontend Development",
    backend: "Backend Development",
    database: "Database Management"
  },
  ar: {
    title: "المهارات",
    description: "هذه هي التقنيات التي أعمل بها",
    developmentCategories: "فئات التطوير",
    frontend: "تطوير الواجهة الأمامية",
    backend: "تطوير الواجهة الخلفية",
    database: "إدارة قواعد البيانات"
  }
};

function ContextProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const t = translations[language];
  const tNavbar = translationsNavbar[language];
  const tSkills = translationsSkills[language];
  return (
    <LongContext.Provider value={{ language, setLanguage, t, projects, translationsHero, tNavbar, tSkills }}>
      {children}
    </LongContext.Provider>
  );
}

export { ContextProvider, LongContext };
