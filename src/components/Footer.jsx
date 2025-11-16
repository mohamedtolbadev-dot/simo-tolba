"use client";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { useContext } from "react";
import { LongContext } from "./ContextProvider";

const Footer = () => {
  const { language } = useContext(LongContext);
  const isArabic = language === "ar";

  const translations = {
    en: {
      rights: "All rights reserved.",
      email: "Email",
      madeWith: "Made with",
    },
    ar: {
      rights: "جميع الحقوق محفوظة.",
      email: "البريد الإلكتروني",
      madeWith: "صنع بـ",
    },
  };

  const t = translations[language];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Mohahamed99-by",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/mohamed-tolba-div/",
      label: "LinkedIn",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/profile.php?id=61567673134521",
      label: "Facebook",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:mohamedtolba.dev@gmail.com",
      label: t.email,
    },
  ];

  return (
    <footer
      className="relative py-12 px-4 sm:px-6 lg:px-12 bg-slate-950 border-t border-slate-800"
      dir={isArabic ? "rtl" : "ltr"}
    >

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-8 border-b border-slate-800">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">MT</span>
              </div>
              <h3 
                className={`text-white text-lg font-black ${isArabic ? "font-arabic" : ""}`}
                style={{
                  textShadow: `
                    1px 1px 0px rgba(220, 38, 38, 0.3),
                    2px 2px 0px rgba(220, 38, 38, 0.2),
                    3px 3px 0px rgba(220, 38, 38, 0.1),
                    4px 4px 10px rgba(0, 0, 0, 0.5)
                  `
                }}
              >
                Mohamed Tolba
              </h3>
            </div>
            <p className={`text-slate-400 text-sm max-w-md leading-relaxed ${isArabic ? "font-arabic" : ""}`}>
              {isArabic
                ? "مطور ويب متخصص في إنشاء تجارب رقمية جذابة وتفاعلية باستخدام أحدث التقنيات."
                : "A web developer specializing in creating engaging and interactive digital experiences using the latest technologies."}
            </p>
          </div>

          {/* Quick Links */}
          <div className={`grid grid-cols-2 gap-8 ${isArabic ? "text-right" : ""}`}>
            <div>
              <h4 className={`text-slate-500 text-xs uppercase tracking-wider mb-4 ${isArabic ? "font-arabic" : ""}`}>
                {isArabic ? "روابط سريعة" : "Quick Links"}
              </h4>
              <ul className="space-y-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-slate-400 hover:text-white transition-colors text-sm ${isArabic ? "font-arabic" : ""}`}
                    >
                      {isArabic
                        ? {
                            Home: "الرئيسية",
                            About: "نبذة عني",
                            Skills: "المهارات",
                            Projects: "المشاريع",
                            Contact: "تواصل",
                          }[item]
                        : item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`text-slate-500 text-xs uppercase tracking-wider mb-4 ${isArabic ? "font-arabic" : ""}`}>
                {isArabic ? "تواصل معي" : "Connect"}
              </h4>
              <div className={`flex gap-3 ${isArabic ? "justify-end" : ""}`}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9 h-9 border border-slate-800 flex items-center justify-center text-slate-600 hover:text-white hover:border-red-600 transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className={`text-slate-500 text-sm ${isArabic ? "font-arabic" : ""}`}>
            © {new Date().getFullYear()} Mohamed Tolba. {t.rights}
          </p>
          <div className={`flex items-center gap-2 text-sm text-slate-500 ${isArabic ? "font-arabic" : ""}`}>
            <span>{t.madeWith}</span>
            <span className="text-red-600">❤</span>
            <span>& React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
