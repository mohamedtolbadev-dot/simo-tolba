"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { LongContext } from "./ContextProvider";
import PalestinianFlag from "./PalestinianFlag";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { language, tNavbar, setLanguage } = useContext(LongContext);
  const isArabic = language === "ar";

  const handleClick = () => {
    setNav(!nav);
    document.body.style.overflow = !nav ? "hidden" : "unset";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, []);

  const links = [
    { id: 1, link: "home", label: tNavbar?.home || "Home" },
    { id: 2, link: "about", label: tNavbar?.about || "About" },
    { id: 3, link: "skills", label: tNavbar?.skills || "Skills" },
    { id: 4, link: "projects", label: tNavbar?.projects || "Projects" },
    { id: 5, link: "contact", label: tNavbar?.contact || "Contact" },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية", isArabic: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/90 backdrop-blur-md border-b border-slate-800"
          : "py-4 bg-transparent"
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            spy={true}
            offset={-100}
            className="cursor-pointer group flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">MT</span>
            </div>
            <div className="hidden xl:block">
              <h1 
                className="text-lg font-black text-white tracking-tight"
                style={{
                  textShadow: `
                    1px 1px 0px rgba(220, 38, 38, 0.3),
                    2px 2px 0px rgba(220, 38, 38, 0.2),
                    3px 3px 0px rgba(220, 38, 38, 0.1),
                    4px 4px 10px rgba(0, 0, 0, 0.5)
                  `
                }}
              >
                MOHAMED TOLBA
              </h1>
            </div>
            <div className="hidden sm:block">
              <PalestinianFlag size="sm" />
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
                    spy={true}
                    offset={-100}
                    activeClass="active"
                    className="relative flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 group cursor-pointer"
                  >
                    <motion.span 
                      className="w-1 h-1 rounded-full bg-red-600 transition-all duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span 
                      className={`text-sm font-bold tracking-wide ${isArabic ? "font-arabic" : ""}`}
                      style={{
                        textShadow: `
                          0.5px 0.5px 0px rgba(220, 38, 38, 0.2),
                          1px 1px 0px rgba(220, 38, 38, 0.15),
                          1.5px 1.5px 0px rgba(220, 38, 38, 0.1),
                          2px 2px 5px rgba(0, 0, 0, 0.3)
                        `
                      }}
                    >
                      {label}
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-red-600 to-transparent opacity-50 group-hover:opacity-100 transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className={`flex items-center gap-2 px-3 py-2 bg-slate-900/50 border border-slate-800 text-slate-400 hover:border-red-600 hover:text-white transition-all group ${
                  languageOpen ? "border-red-600 text-white" : ""
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className={`text-xs font-bold uppercase tracking-wider ${isArabic ? "font-arabic" : ""}`}>
                  {language === "en" ? "EN" : "عر"}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${languageOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {languageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-36 bg-slate-900 border border-slate-800 overflow-hidden z-50 shadow-xl"
                  >
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLanguageOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-all flex items-center justify-between group ${
                          language === lang.code 
                            ? "bg-red-600 text-white" 
                            : "text-slate-400 hover:bg-slate-800 hover:text-white hover:pl-5"
                        } ${lang.isArabic ? "font-arabic" : ""}`}
                      >
                        <span className="font-medium">{lang.label}</span>
                        {language === lang.code && (
                          <motion.span 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-1.5 h-1.5 rounded-full bg-white"
                          />
                        )}
                      </motion.button>
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
              spy={true}
              offset={-100}
              className="px-5 py-2 bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors cursor-pointer"
            >
              {isArabic ? "تواصل معي" : "Contact Me"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleClick}
            className="md:hidden relative w-10 h-10 flex items-center justify-center border border-slate-700 text-slate-400 hover:border-red-600 hover:text-white transition-colors z-20"
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
                    className={`text-2xl font-semibold text-white capitalize inline-flex items-center gap-3 relative group cursor-pointer ${
                      isArabic ? "font-arabic flex-row-reverse" : ""
                    }`}
                  >
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-red-600 transition-all"
                      whileHover={{ scale: 1.3 }}
                    />
                    <span
                      style={{
                        textShadow: `
                          1px 1px 0px rgba(220, 38, 38, 0.3),
                          2px 2px 0px rgba(220, 38, 38, 0.2),
                          3px 3px 0px rgba(220, 38, 38, 0.1),
                          4px 4px 10px rgba(0, 0, 0, 0.5)
                        `
                      }}
                    >
                      {label}
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-red-600 via-red-600 to-transparent opacity-50 group-hover:opacity-100 transition-all duration-300"></span>
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
                    className={`px-5 py-2 border ${
                      language === lang.code
                        ? "border-red-600 bg-red-600 text-white"
                        : "border-slate-700 text-slate-400 hover:border-slate-600 hover:text-white"
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
                className="px-8 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors cursor-pointer"
              >
                {isArabic ? "تواصل معي" : "Contact Me"}
              </Link>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-slate-800/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-slate-700/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
