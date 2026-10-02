
"use client";

import { memo, useCallback, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { LongContext } from "./ContextProvider";
import PalestinianFlag from "./PalestinianFlag";

const ACCENT = "#E4312B";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const { language, tNavbar, setLanguage } = useContext(LongContext);
  const isArabic = language === "ar";

  // --------------------------------------------------
  // Navigation links
  // --------------------------------------------------
  const links = [
    {
      id: 1,
      link: "home",
      label: tNavbar?.home || "Home",
    },
    {
      id: 2,
      link: "about",
      label: tNavbar?.about || "About",
    },
    {
      id: 3,
      link: "skills",
      label: tNavbar?.skills || "Skills",
    },
    {
      id: 4,
      link: "projects",
      label: tNavbar?.projects || "Projects",
    },
    {
      id: 5,
      link: "contact",
      label: tNavbar?.contact || "Contact",
    },
  ];

  const languages = [
    {
      code: "en",
      label: "English",
      isArabic: false,
    },
    {
      code: "ar",
      label: "العربية",
      isArabic: true,
    },
  ];

  // --------------------------------------------------
  // Mobile menu
  // --------------------------------------------------
  const toggleMenu = useCallback(() => {
    setNav((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setNav(false);
    setLanguageOpen(false);
  }, []);

  // --------------------------------------------------
  // Language
  // --------------------------------------------------
  const toggleLanguage = useCallback(() => {
    setLanguageOpen((prev) => !prev);
  }, []);

  const changeLanguage = useCallback(
    (code) => {
      setLanguage(code);
      setLanguageOpen(false);
    },
    [setLanguage]
  );

  // --------------------------------------------------
  // Scroll state
  // Lightweight passive listener
  // --------------------------------------------------
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --------------------------------------------------
  // Lock body scroll when mobile menu is open
  // --------------------------------------------------
  useEffect(() => {
    if (!nav) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  // --------------------------------------------------
  // Close language dropdown on Escape
  // --------------------------------------------------
  useEffect(() => {
    if (!languageOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [languageOpen]);

  return (
    <nav
      dir={isArabic ? "rtl" : "ltr"}
      className={`
        fixed inset-x-0 top-0 z-[100]
        transition-[padding,background-color,border-color]
        duration-300
        ${
          scrolled
            ? "border-b border-neutral-800 bg-neutral-950 py-3"
            : "border-b border-transparent bg-transparent py-4"
        }
      `}
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between">
          {/* =========================================
              LOGO
          ========================================== */}
          <Link
            to="home"
            smooth
            duration={500}
            spy
            offset={-100}
            className="
              group flex cursor-pointer items-center
              gap-2.5
              rounded-xl
              outline-none
              focus-visible:ring-2
              focus-visible:ring-[#E4312B]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-neutral-950
            "
            aria-label="Go to home"
          >
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-neutral-800
                bg-neutral-900
                transition-colors
                duration-200
                group-hover:border-[#E4312B]/60
              "
            >
              <img
                src="/logo.svg"
                alt="Mohamed Tolba Logo"
                width={40}
                height={40}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden xl:block">
              <span className="text-sm font-black tracking-tight text-white">
                MOHAMED TOLBA
              </span>
            </div>

            <div className="hidden sm:block">
              <PalestinianFlag size="sm" />
            </div>
          </Link>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================== */}
          <div className="hidden items-center gap-3 md:flex">
            <div
              className="
                flex items-center
                rounded-2xl
                border border-neutral-800
                bg-neutral-900/80
                p-1
              "
            >
              <ul
                className={`
                  flex items-center gap-1
                  ${isArabic ? "flex-row-reverse" : ""}
                `}
              >
                {links.map(({ id, link, label }) => (
                  <li key={id}>
                    <Link
                      to={link}
                      smooth
                      duration={500}
                      spy
                      offset={-100}
                      activeClass="navbar-active"
                      className="
                        group relative
                        flex cursor-pointer
                        items-center
                        rounded-xl
                        px-3 py-2
                        text-sm font-semibold
                        text-neutral-400
                        transition-colors
                        duration-200
                        hover:bg-neutral-800
                        hover:text-white
                      "
                    >
                      <span
                        className={`
                          ${isArabic ? "font-arabic" : ""}
                        `}
                      >
                        {label}
                      </span>

                      <span
                        className="
                          absolute
                          bottom-1
                          left-1/2
                          h-0.5
                          w-0
                          -translate-x-1/2
                          rounded-full
                          bg-[#E4312B]
                          transition-all
                          duration-200
                          group-hover:w-4
                        "
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================
                LANGUAGE SELECTOR
            ====================================== */}
            <div className="relative">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-expanded={languageOpen}
                aria-haspopup="menu"
                className={`
                  flex h-10 items-center gap-2
                  rounded-xl
                  border
                  px-3
                  text-xs font-bold
                  transition-colors
                  duration-200
                  ${
                    languageOpen
                      ? "border-[#E4312B] bg-[#E4312B]/10 text-white"
                      : "border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }
                `}
              >
                <Globe className="h-4 w-4" strokeWidth={1.8} />

                <span
                  className={isArabic ? "font-arabic" : ""}
                >
                  {language === "en" ? "EN" : "عر"}
                </span>

                <ChevronDown
                  className={`
                    h-3.5 w-3.5
                    transition-transform
                    duration-200
                    ${languageOpen ? "rotate-180" : ""}
                  `}
                  strokeWidth={2}
                />
              </button>

              <AnimatePresence>
                {languageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="
                      absolute right-0 top-full mt-2
                      w-36
                      overflow-hidden
                      rounded-xl
                      border border-neutral-800
                      bg-neutral-900
                      p-1
                      shadow-lg
                    "
                    role="menu"
                  >
                    {languages.map((lang) => {
                      const active = language === lang.code;

                      return (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => changeLanguage(lang.code)}
                          role="menuitem"
                          className={`
                            flex w-full
                            items-center justify-between
                            rounded-lg
                            px-3 py-2.5
                            text-sm
                            transition-colors
                            duration-150
                            ${
                              active
                                ? "bg-[#E4312B] text-white"
                                : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                            }
                            ${lang.isArabic ? "font-arabic" : ""}
                          `}
                        >
                          <span>{lang.label}</span>

                          {active && (
                            <span
                              className="
                                h-1.5 w-1.5
                                rounded-full
                                bg-white
                              "
                            />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* =====================================
                DESKTOP CTA
            ====================================== */}
            <Link
              to="contact"
              smooth
              duration={500}
              spy
              offset={-100}
              className="
                flex h-10
                cursor-pointer
                items-center
                rounded-xl
                bg-[#E4312B]
                px-4
                text-sm font-bold
                text-white
                transition-colors
                duration-200
                hover:bg-[#c92823]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#E4312B]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-neutral-950
              "
            >
              {isArabic ? "تواصل معي" : "Contact Me"}
            </Link>
          </div>

          {/* =========================================
              MOBILE MENU BUTTON
          ========================================== */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={nav ? "Close menu" : "Open menu"}
            aria-expanded={nav}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-neutral-800
              bg-neutral-900
              text-neutral-300
              transition-colors
              duration-200
              hover:border-[#E4312B]
              hover:text-white
              md:hidden
            "
          >
            {nav ? (
              <X size={20} strokeWidth={1.8} />
            ) : (
              <Menu size={20} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* =============================================
          MOBILE MENU
      ============================================== */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="
              fixed inset-0 top-[64px]
              z-40
              overflow-y-auto
              bg-neutral-950
              md:hidden
            "
          >
            <div className="mx-auto flex min-h-full max-w-lg flex-col px-5 py-8">
              {/* Mobile navigation card */}
              <div
                className="
                  rounded-2xl
                  border border-neutral-800
                  bg-neutral-900
                  p-2
                "
              >
                <ul className="space-y-1">
                  {links.map(({ id, link, label }) => (
                    <li key={id}>
                      <Link
                        onClick={closeMenu}
                        to={link}
                        smooth
                        duration={500}
                        offset={-70}
                        className={`
                          group flex
                          cursor-pointer
                          items-center
                          justify-between
                          rounded-xl
                          border border-transparent
                          px-4 py-4
                          text-lg font-semibold
                          text-neutral-300
                          transition-colors
                          duration-200
                          hover:border-neutral-800
                          hover:bg-neutral-950
                          hover:text-white
                          ${
                            isArabic
                              ? "flex-row-reverse"
                              : ""
                          }
                        `}
                      >
                        <span
                          className={
                            isArabic ? "font-arabic" : ""
                          }
                        >
                          {label}
                        </span>

                        <span
                          className="
                            h-2 w-2
                            rounded-full
                            bg-neutral-700
                            transition-colors
                            duration-200
                            group-hover:bg-[#E4312B]
                          "
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile actions */}
              <div className="mt-4 space-y-3">
                {/* Languages */}
                <div
                  className="
                    rounded-2xl
                    border border-neutral-800
                    bg-neutral-900
                    p-2
                  "
                >
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => {
                      const active = language === lang.code;

                      return (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() =>
                            changeLanguage(lang.code)
                          }
                          className={`
                            rounded-xl
                            border
                            px-4 py-3
                            text-sm font-semibold
                            transition-colors
                            duration-200
                            ${
                              active
                                ? "border-[#E4312B] bg-[#E4312B] text-white"
                                : "border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white"
                            }
                            ${
                              lang.isArabic
                                ? "font-arabic"
                                : ""
                            }
                          `}
                        >
                          {lang.code === "en"
                            ? "English"
                            : "العربية"}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={closeMenu}
                  className="
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#E4312B]
                    px-6 py-3.5
                    text-sm font-bold
                    text-white
                    transition-colors
                    duration-200
                    hover:bg-[#c92823]
                  "
                >
                  {isArabic
                    ? "تواصل معي"
                    : "Contact Me"}
                </Link>
              </div>

              {/* Mobile footer */}
              <div className="mt-auto pt-10 text-center">
                <div
                  className="
                    mx-auto mb-3
                    h-px w-12
                    bg-[#E4312B]
                  "
                />

                <p className="text-xs font-medium text-neutral-600">
                  Web Development · Morocco
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =============================================
          ACTIVE NAV STYLE
      ============================================== */}
      <style jsx global>{`
        .navbar-active {
          color: white !important;
          background-color: rgb(38 38 38 / 0.8);
        }

        .navbar-active::after {
          width: 1rem;
        }
      `}</style>
    </nav>
  );
};

export default memo(Navbar);
