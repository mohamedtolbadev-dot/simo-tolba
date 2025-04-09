"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Globe, Menu, X } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-scroll"
import { LongContext } from "./ContextProvider"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const { language, tNavbar, setLanguage } = useContext(LongContext)
  const isArabic = language === "ar"

  const handleClick = () => {
    setNav(!nav)
    document.body.style.overflow = !nav ? "hidden" : "unset"
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = "unset"
    }
  }, [])

  const links = [
    { id: 1, link: "home", label: tNavbar?.home || "Home" },
    { id: 2, link: "about", label: tNavbar?.about || "About" },
    { id: 3, link: "skills", label: tNavbar?.skills || "Skills" },
    { id: 4, link: "projects", label: tNavbar?.projects || "Projects" },
    { id: 5, link: "contact", label: tNavbar?.contact || "Contact" },
  ]

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية", isArabic: true },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-slate-950/90 backdrop-blur-md border-b border-white/5 shadow-lg" : "py-5 bg-transparent"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="home" smooth duration={500} offset={-70} className="cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-secondary to-secondary/60 group-hover:shadow-lg group-hover:shadow-secondary/20 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-primary font-bold text-xl">
                  M
                </div>
              </div>
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-white font-bold text-xl hidden sm:block"
              >
                Mohamed
              </motion.span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className={`flex ${isArabic ? "space-x-reverse" : ""} gap-8`}>
              {links.map(({ id, link, label }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    offset={-70}
                    className="relative text-slate-300 hover:text-white transition-colors group cursor-pointer"
                  >
                    <span className={`${isArabic ? "font-arabic" : ""}`}>{label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-secondary/50 transition-all duration-300 ${
                  languageOpen ? "border-secondary/50" : ""
                }`}
              >
                <Globe className="w-4 h-4 text-secondary" />
                <span className={isArabic ? "font-arabic" : ""}>{language === "en" ? "EN" : "ع"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${languageOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {languageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 rounded-lg bg-slate-900 border border-white/10 shadow-lg overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code)
                          setLanguageOpen(false)
                        }}
                        className={`w-full text-left px-4 py-3 text-slate-300 hover:bg-white/5 transition-colors flex items-center gap-2 ${
                          language === lang.code ? "bg-white/5 text-secondary" : ""
                        } ${lang.isArabic ? "font-arabic" : ""}`}
                      >
                        {lang.label}
                        {language === lang.code && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-1.5 h-1.5 rounded-full bg-secondary ml-auto"
                          ></motion.span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-70}
              className="px-5 py-2 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-full font-medium hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 cursor-pointer"
            >
              {isArabic ? "تواصل معي" : "Contact Me"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleClick}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-secondary/50 transition-colors z-20"
            aria-label={nav ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {nav ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-950/98 backdrop-blur-lg md:hidden flex flex-col justify-center items-center z-10"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
                hidden: {},
              }}
              className="space-y-6 w-full px-6 mb-8"
            >
              {links.map(({ id, link, label }) => (
                <motion.li
                  key={id}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 },
                  }}
                  className={`text-center`}
                >
                  <Link
                    onClick={handleClick}
                    to={link}
                    smooth
                    duration={500}
                    offset={-70}
                    className={`text-2xl font-medium text-white capitalize inline-block relative group cursor-pointer ${
                      isArabic ? "font-arabic" : ""
                    }`}
                  >
                    <span>{label}</span>
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Language Selector */}
              <div className="flex gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-5 py-2 rounded-full border ${
                      language === lang.code
                        ? "bg-secondary/10 border-secondary text-secondary"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    } transition-colors ${lang.isArabic ? "font-arabic" : ""}`}
                  >
                    {lang.code === "en" ? "English" : "العربية"}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-70}
                onClick={handleClick}
                className="px-8 py-3 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-full font-medium hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 cursor-pointer"
              >
                {isArabic ? "تواصل معي" : "Contact Me"}
              </Link>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
