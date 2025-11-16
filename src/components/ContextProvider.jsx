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
import project11 from '../assets/projects/project11.png';





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
    aboutMe: "نبذة عني",
    introduction: "مرحبًا! أنا محمد طلبة، مطور Full-Stack متخصص من فاس. أنا شغوف ببناء تطبيقات الويب، سواء كانت مواقع ديناميكية أو تطبيقات تفاعلية أو حلول رقمية مبتكرة.",
    journey: "أنا خريج المكتب الوطني للتكوين المهني وإنعاش الشغل (OFPPT)، حيث حصلت على دبلوم تقني متخصص في مجال التطوير الرقمي. عملت على مشاريع أكاديمية وشخصية باستخدام مجموعة متنوعة من التقنيات، مثل React وVite وTailwind CSS للواجهة الأمامية. أما الواجهة الخلفية، فأعمل باستخدام Express.js أو Laravel 10، وفي قواعد البيانات أتعامل مع MySQL أو MongoDB.",
    innovationTitle: "الابتكار",
    innovationDesc: "استكشاف مستمر لأحدث التقنيات",
    precisionTitle: "الدقة",
    precisionDesc: "اهتمام بالتفاصيل في كل مشروع",
    performanceTitle: "الأداء",
    performanceDesc: "حلول محسّنة وسريعة",
    viewWork: "استكشف أعمالي",
    location: "فاس، المغرب",
    getInTouch: "تواصل معي",
    expertise: "الخبرات",
    frontendDevelopment: "تطوير الواجهة الأمامية",
    uiuxDesignSkill: "تصميم واجهة المستخدم",
    backendDevelopment: "تطوير الواجهة الخلفية",
    webTechnologies: "تقنيات الويب",

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
  },
  {
    imageUrl: project11,
  liveLink: "https://abd-el-moughit-portfolio.vercel.app/"
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
    name: "محمد طلبة",
    greeting: "مرحبًا، اسمي",
    description: "مطور Full-Stack ذو خبرة، شغوف بتحويل الأفكار المبتكرة إلى حلول رقمية قوية ومبتكرة.",
    viewProjects: "عرض المشاريع",
    downloadCV: "تحميل السيرة الذاتية",
    availableForWork: "متاح للعمل",
    techStackTitle: "مجموعة التقنيات",
    developmentFlowTitle: "مراحل التطوير",
    uiuxDesign: "تصميم واجهة المستخدم",
    uiuxDesc: "Figma، الإطارات الهيكلية",
    frontendBuild: "بناء الواجهة الأمامية",
    frontendDesc: "React، Tailwind",
    backendApi: "واجهة برمجية خلفية",
    backendDesc: "Laravel، Node.js",
    database: "قاعدة البيانات",
    databaseDesc: "MySQL، MongoDB",
    deployTest: "النشر والاختبار",
    productionReady: "جاهز للإنتاج",
    scroll: "مرر للأسفل"
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
    home: 'الرئيسية',
    about: 'نبذة عني',
    skills: 'المهارات',
    projects: 'المشاريع',
    contact: 'تواصل',
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
    description: "مجموعة شاملة من التقنيات والمهارات التي أتقنها في تطوير الويب",
    developmentCategories: "تصنيفات التطوير",
    frontend: "الواجهة الأمامية",
    backend: "الواجهة الخلفية",
    database: "قواعد البيانات",
    avg: "متوسط",
    skillsCount: "مهارة",
    technicalSkills: "المهارات التقنية",
    allSkills: "كل المهارات",
    tools: "الأدوات",
    design: "التصميم",
    skillsTitle: "المهارات",
    technologiesTitle: "والتقنيات"
  }
};

const translationsProjects = {
  en: {
    portfolio: "Portfolio",
    projectsCount: "Projects",
    completed: "Completed",
    searchPlaceholder: "Search projects...",
    noResults: "No projects found matching your search.",
    description: "A curated collection of projects that demonstrate my skills and creativity in building modern web applications with cutting-edge technologies."
  },
  ar: {
    portfolio: "معرض الأعمال",
    projectsCount: "مشروع",
    completed: "مكتمل",
    searchPlaceholder: "ابحث عن مشروع...",
    noResults: "لم يتم العثور على مشاريع مطابقة لبحثك.",
    description: "مجموعة منتقاة من المشاريع التي توضح مهاراتي وإبداعي في بناء تطبيقات ويب حديثة باستخدام أحدث التقنيات.",
    myTitle: "",
    projectsTitle: "المشاريع",
    live: "معاينة",
    code: "الكود"
  }
};

function ContextProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const t = translations[language];
  const tNavbar = translationsNavbar[language];
  const tSkills = translationsSkills[language];
  const tProjects = translationsProjects[language];
  return (
    <LongContext.Provider value={{ language, setLanguage, t, projects, translationsHero, tNavbar, tSkills, tProjects }}>
      {children}
    </LongContext.Provider>
  );
}

export { ContextProvider, LongContext };
