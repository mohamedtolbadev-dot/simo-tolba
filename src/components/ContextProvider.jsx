import React, { useState, createContext } from 'react';
import project1  from '../assets/projects/project1.png';
import project2  from '../assets/projects/project2.png';
import project3  from '../assets/projects/project3.png';



// Create the context
const LongContext = createContext();

const translations = {
    en: {
      about: "About",
      me: "Me",
      introduction: "Hi! I'm Mohamed Tolba, a dedicated full-stack developer from Fes. I'm passionate about building things for the web, whether it's crafting dynamic websites, interactive applications, or innovative digital solutions.",
      journey: "My journey in web development started back in [Year] when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
      techStack: "Tech I work with:",
      technologies: [
        "JavaScript (ES6+)",
        "React",
        "Node.js",
        "Tailwind CSS",
        "MongoDB",
        "TypeScript"
      ]
    },
    ar: {
      about: "نبذة",
      me: "عني",
      introduction: "مرحبًا! أنا محمد طلبة، مطور متخصص في تطوير البرمجيات الكاملة من فاس. أنا شغوف ببناء الأشياء للويب، سواء كان ذلك إنشاء مواقع ويب ديناميكية أو تطبيقات تفاعلية أو حلول رقمية مبتكرة.",
      journey: "أنا خريج من مؤسسة التكوين المهني OFPPT حيث حصلت على دبلوم تقني متخصص في شعبة تطوير الرقمية. عملت على مشاريع أكاديمية وخاصة باستخدام مجموعة من التقنيات في الواجهة الأمامية مثل React وVite وTailwind CSS. أما في الواجهة الخلفية، فأنا أعمل باستخدام Express.js أو Laravel 10، وفي قواعد البيانات أتعامل مع MySQL أو MongoDB. ",
      techStack: "التقنيات التي أعمل بها:",
      technologies: [
        "جافاسكريبت (ES6+)",
        "رياكت",
        "نود جي اس",
        "تيلويند سي اس اس",
        "مونجو دي بي",
        "تايبسكريبت"
      ]
    }
  };

  const projects = [
    {
      title: "Car Dealer",
      description: "A full-stack e-commerce platform for car dealerships, built with React and Node.js. Features include user authentication, a product catalog, a shopping cart, and payment integration.",
      descriptionAr: "منصة تجارة إلكترونية متكاملة لوكالات السيارات تم بناؤها باستخدام React وNode.js. تشمل الميزات تسجيل دخول المستخدمين، كتالوج السيارات، سلة التسوق، وتكامل الدفع.",
      tags: ["React", "Tailwind CSS"],
      imageUrl: project1,
      liveLink: "https://cars-simo.onrender.com/",
      githubLink: "https://github.com/Mohahamed99-by/web-cars"
    },
    {
      title: "QR Code Generator",
      description: "A web application to generate QR codes for various types of data, such as URLs, text, and more. Built using React, Express.js, and MySQL for seamless performance.",
      descriptionAr: "تطبيق ويب لإنشاء رموز QR لأنواع مختلفة من البيانات، مثل الروابط والنصوص والمزيد. تم بناؤه باستخدام React وExpress.js وMySQL لتحقيق أداء سلس.",
      tags: ["React Vite", "Tailwind CSS", "Express.js", "MySQL"],
      imageUrl: project2,
      liveLink: "https://qr-code-as.onrender.com/",
      githubLink: "https://github.com/Mohahamed99-by/qr-code/"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application featuring real-time updates, drag-and-drop functionality, and team collaboration tools. Built with React and Tailwind CSS.",
      descriptionAr: "تطبيق إدارة مهام تعاوني يتميز بتحديثات في الوقت الفعلي، وإمكانية السحب والإفلات، وأدوات تعاون الفريق. تم بناؤه باستخدام React وTailwind CSS.",
      tags: ["React", "Tailwind CSS"],
      imageUrl: project3,
      liveLink: "https://we-car.onrender.com/",
      githubLink: "https://github.com/Mohahamed99-by/web-cars"
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
        <LongContext.Provider value={{ language, setLanguage, t , projects , translationsHero , tNavbar , tSkills}}>
            {children}
        </LongContext.Provider>
    );
}

export { ContextProvider, LongContext };
