"use client";

import { memo, useContext, useMemo } from "react";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-scroll";
import { LongContext } from "./ContextProvider";

const ACCENT = "#E4312B";

const Footer = () => {
  const { language } = useContext(LongContext);
  const isArabic = language === "ar";

  const translations = {
    en: {
      rights: "All rights reserved.",
      email: "Email",
      madeWith: "Made with",
      quickLinks: "Quick Links",
      connect: "Connect",
      description:
        "A web developer specializing in creating engaging and interactive digital experiences using modern technologies.",
      links: {
        Home: "Home",
        About: "About",
        Skills: "Skills",
        Projects: "Projects",
        Contact: "Contact",
      },
    },
    ar: {
      rights: "جميع الحقوق محفوظة.",
      email: "البريد الإلكتروني",
      madeWith: "صنع بـ",
      quickLinks: "روابط سريعة",
      connect: "تواصل معي",
      description:
        "مطور ويب متخصص في إنشاء تجارب رقمية جذابة وتفاعلية باستخدام تقنيات حديثة.",
      links: {
        Home: "الرئيسية",
        About: "نبذة عني",
        Skills: "المهارات",
        Projects: "المشاريع",
        Contact: "تواصل",
      },
    },
  };

  const t = translations[language] || translations.en;

  const currentYear = new Date().getFullYear();

  const socialLinks = useMemo(
    () => [
      {
        icon: Github,
        href: "https://github.com/Mohahamed99-by",
        label: "GitHub",
      },
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/mohamed-tolba-div/",
        label: "LinkedIn",
      },
      {
        icon: Facebook,
        href: "https://www.facebook.com/profile.php?id=61567673134521",
        label: "Facebook",
      },
      {
        icon: Mail,
        href: "mailto:mohamedtolba.dev@gmail.com",
        label: t.email,
      },
    ],
    [t.email]
  );

  const navigationLinks = useMemo(
    () => [
      {
        id: "home",
        label: t.links.Home,
      },
      {
        id: "about",
        label: t.links.About,
      },
      {
        id: "skills",
        label: t.links.Skills,
      },
      {
        id: "projects",
        label: t.links.Projects,
      },
      {
        id: "contact",
        label: t.links.Contact,
      },
    ],
    [t.links]
  );

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="
        border-t
        border-neutral-800
        bg-neutral-950
        px-4
        py-10
        sm:px-6
        sm:py-12
        lg:px-12
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* =========================================
            MAIN FOOTER
        ========================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            border-b
            border-neutral-800
            pb-8
            md:grid-cols-[1.3fr_1fr]
            md:gap-16
            lg:gap-24
          "
        >
          {/* =====================================
              BRAND
          ====================================== */}
          <div className="max-w-xl">
            <Link
              to="home"
              smooth
              duration={500}
              offset={-100}
              className="
                group
                inline-flex
                cursor-pointer
                items-center
                gap-3
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
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-neutral-800
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
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3
                className={`
                  text-lg
                  font-black
                  tracking-tight
                  text-white
                  ${isArabic ? "font-arabic" : ""}
                `}
              >
                Mohamed Tolba
              </h3>
            </Link>

            <p
              className={`
                mt-4
                max-w-md
                text-sm
                leading-7
                text-neutral-400
                ${isArabic ? "font-arabic" : ""}
              `}
            >
              {t.description}
            </p>

            {/* Small status */}
            <div
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-neutral-800
                bg-neutral-900
                px-3
                py-1.5
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#E4312B]
                "
              />

              <span className="text-xs font-medium text-neutral-400">
                {isArabic
                  ? "متاح للعمل على مشاريع جديدة"
                  : "Available for new projects"}
              </span>
            </div>
          </div>

          {/* =====================================
              NAVIGATION + SOCIAL
          ====================================== */}
          <div
            className="
              grid
              grid-cols-2
              gap-8
              sm:grid-cols-[1fr_auto]
            "
          >
            {/* Quick Links */}
            <div>
              <h4
                className={`
                  mb-4
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-neutral-500
                  ${isArabic ? "font-arabic tracking-normal" : ""}
                `}
              >
                {t.quickLinks}
              </h4>

              <nav aria-label="Footer navigation">
                <ul className="space-y-1">
                  {navigationLinks.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.id}
                        smooth
                        duration={500}
                        offset={-100}
                        className="
                          group
                          inline-flex
                          cursor-pointer
                          items-center
                          gap-2
                          rounded-lg
                          py-1.5
                          text-sm
                          text-neutral-400
                          transition-colors
                          duration-200
                          hover:text-white
                        "
                      >
                        <span
                          className="
                            h-1
                            w-1
                            rounded-full
                            bg-neutral-700
                            transition-colors
                            duration-200
                            group-hover:bg-[#E4312B]
                          "
                        />

                        <span
                          className={
                            isArabic ? "font-arabic" : ""
                          }
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social */}
            <div
              className={
                isArabic ? "text-right" : ""
              }
            >
              <h4
                className={`
                  mb-4
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-neutral-500
                  ${isArabic ? "font-arabic tracking-normal" : ""}
                `}
              >
                {t.connect}
              </h4>

              <div
                className={`
                  flex
                  flex-wrap
                  gap-2
                  ${isArabic ? "justify-end" : ""}
                `}
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("mailto:")
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        social.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      aria-label={social.label}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-neutral-800
                        bg-neutral-900
                        text-neutral-500
                        transition-colors
                        duration-200
                        hover:border-[#E4312B]
                        hover:bg-neutral-800
                        hover:text-white
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#E4312B]
                      "
                    >
                      <Icon
                        className="h-4 w-4"
                        strokeWidth={1.8}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================== */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-4
            pt-6
            sm:flex-row
            sm:justify-between
          "
        >
          {/* Copyright */}
          <p
            className={`
              text-center
              text-xs
              text-neutral-500
              sm:text-left
              ${isArabic ? "font-arabic" : ""}
            `}
          >
            © {currentYear} Mohamed Tolba. {t.rights}
          </p>

          {/* Made with */}
          <div
            className={`
              flex
              items-center
              gap-1.5
              text-xs
              text-neutral-500
              ${isArabic ? "font-arabic" : ""}
            `}
          >
            <span>{t.madeWith}</span>

            <span
              className="
                font-medium
                text-[#E4312B]
              "
              aria-label="love"
            >
              ♥
            </span>

            <span>& React</span>
          </div>
        </div>

        {/* =========================================
            TOP BORDER DETAIL
        ========================================== */}
        <div
          className="
            mx-auto
            mt-8
            h-0.5
            w-10
            rounded-full
            bg-[#E4312B]
            opacity-80
          "
          aria-hidden="true"
        />
      </div>
    </footer>
  );
};

export default memo(Footer);
