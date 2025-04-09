"use client"
import { Facebook, Github, Linkedin, Mail } from "lucide-react"
import { useContext } from "react"
import { LongContext } from "./ContextProvider"

const Footer = () => {
  const { language } = useContext(LongContext)
  const isArabic = language === "ar"

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
  }

  const t = translations[language]

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
      href: "mailto:mohamedtolba161@gmail.com",
      label: t.email,
    },
  ]

  return (
    <footer className="relative py-12 px-6 overflow-hidden bg-slate-950" dir={isArabic ? "rtl" : "ltr"}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#ffffff05_50%,transparent_51%)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-white/10">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">M</span>
              </div>
              <h3 className={`text-white text-xl font-bold ${isArabic ? "font-arabic" : ""}`}>Mohamed Tolba</h3>
            </div>
            <p className={`text-slate-400 max-w-md ${isArabic ? "font-arabic" : ""}`}>
              {isArabic
                ? "مطور ويب متخصص في إنشاء تجارب رقمية جذابة وتفاعلية باستخدام أحدث التقنيات."
                : "A web developer specializing in creating engaging and interactive digital experiences using the latest technologies."}
            </p>
          </div>

          {/* Quick Links */}
          <div className={`grid grid-cols-2 gap-8 ${isArabic ? "text-right" : ""}`}>
            <div>
              <h4 className={`text-white font-semibold mb-4 ${isArabic ? "font-arabic" : ""}`}>
                {isArabic ? "روابط سريعة" : "Quick Links"}
              </h4>
              <ul className="space-y-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-slate-400 hover:text-secondary transition-colors ${
                        isArabic ? "font-arabic" : ""
                      }`}
                    >
                      {isArabic
                        ? {
                            Home: "الرئيسية",
                            About: "عني",
                            Skills: "المهارات",
                            Projects: "المشاريع",
                            Contact: "اتصل بي",
                          }[item]
                        : item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`text-white font-semibold mb-4 ${isArabic ? "font-arabic" : ""}`}>
                {isArabic ? "تواصل معي" : "Connect With Me"}
              </h4>
              <div className={`flex gap-3 ${isArabic ? "justify-end" : ""}`}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary/30 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className={`text-slate-400 text-sm mb-4 md:mb-0 ${isArabic ? "font-arabic" : ""}`}>
            © {new Date().getFullYear()} Mohamed Tolba. {t.rights}
          </p>
          <div className={`flex items-center gap-2 text-sm text-slate-400 ${isArabic ? "font-arabic" : ""}`}>
            <span>{t.madeWith}</span>
            <span className="text-red-500">❤</span>
            <span>
              {isArabic ? "و" : "&"} <span className="text-secondary">React</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
