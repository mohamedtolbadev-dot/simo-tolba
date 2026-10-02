
"use client";

import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
  Clock,
  Coffee,
  Github,
  Linkedin,
  Facebook,
  Download,
  Calendar,
} from "lucide-react";

import { motion } from "framer-motion";
import { memo, useCallback, useContext, useMemo, useState } from "react";

import { LongContext } from "../components/ContextProvider";

/* =========================================================
   CONTACT
========================================================= */

const Contact = () => {
  const { language } = useContext(LongContext);

  const isArabic = language === "ar";

  /* =======================================================
     FORM STATE
  ======================================================= */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  /* =======================================================
     TRANSLATIONS
  ======================================================= */

  const translations = useMemo(
    () => ({
      en: {
        availability: "Available for freelance work",

        letsWorkTogether:
          "Let's Build Something Amazing Together",

        feelFree:
          "Ready to turn your ideas into reality? Let's discuss your next project and create something extraordinary.",

        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",

        sendMessage: "Send Message",
        sending: "Sending...",

        yourLocation: "Fes, Morocco",

        connectWithMe: "Connect With Me",

        responseTime:
          "Usually responds within 24 hours",

        availabilityText:
          "Available for freelance work",

        successMessage:
          "Thank you! Your message has been sent successfully.",

        errorMessage:
          "Something went wrong. Please try again.",

        namePlaceholder:
          "Enter your full name",

        emailPlaceholder:
          "Enter your email address",

        subjectPlaceholder:
          "What's this about?",

        messagePlaceholder:
          "Tell me about your project or inquiry...",

        downloadCV: "Download CV",

        scheduleCall: "Schedule a Call",

        sendMessageTitle:
          "Send a Message",

        respondWithin24:
          "I'll respond within 24 hours",

        emailLabel: "Email",
        locationLabel: "Location",
        responseTimeLabel: "Response Time",
        availabilityLabel: "Availability",

        sendEmailAnytime:
          "Send me an email anytime",

        remoteWorkAvailable:
          "Available for remote work worldwide",

        openToWork: "Open to work",

        hours24: "24 hours",
      },

      ar: {
        availability:
          "متاح للعمل الحر",

        letsWorkTogether:
          "لنبني شيئًا مذهلاً معًا",

        feelFree:
          "مستعد لتحويل أفكارك إلى واقع؟ دعنا نناقش مشروعك القادم ونصنع شيئًا استثنائيًا معًا.",

        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",

        sendMessage:
          "إرسال الرسالة",

        sending:
          "جارٍ الإرسال...",

        yourLocation:
          "فاس، المغرب",

        connectWithMe:
          "تواصل معي",

        responseTime:
          "عادةً أرد خلال 24 ساعة",

        availabilityText:
          "متاح للعمل الحر والمشاريع",

        successMessage:
          "شكرًا لك! تم إرسال رسالتك بنجاح.",

        errorMessage:
          "حدث خطأ ما. يرجى المحاولة مرة أخرى.",

        namePlaceholder:
          "أدخل اسمك الكامل",

        emailPlaceholder:
          "أدخل بريدك الإلكتروني",

        subjectPlaceholder:
          "ما هو موضوع رسالتك؟",

        messagePlaceholder:
          "أخبرني عن مشروعك أو استفسارك...",

        downloadCV:
          "تحميل السيرة الذاتية",

        scheduleCall:
          "جدولة مكالمة",

        sendMessageTitle:
          "أرسل رسالة",

        respondWithin24:
          "سأرد خلال 24 ساعة",

        emailLabel:
          "البريد الإلكتروني",

        locationLabel:
          "الموقع",

        responseTimeLabel:
          "وقت الرد",

        availabilityLabel:
          "التوفر",

        sendEmailAnytime:
          "راسلني عبر البريد في أي وقت",

        remoteWorkAvailable:
          "متاح للعمل عن بُعد في جميع أنحاء العالم",

        openToWork:
          "متاح للعمل",

        hours24:
          "24 ساعة",
      },
    }),
    []
  );

  const t = translations[language] || translations.en;

  /* =======================================================
     CONTACT INFO
  ======================================================= */

  const contactInfo = useMemo(
    () => [
      {
        Icon: Mail,
        label: isArabic ? t.emailLabel : "Email",
        value: "mohamedtolba.dev@gmail.com",
        href: "mailto:mohamedtolba.dev@gmail.com",
        description: isArabic
          ? t.sendEmailAnytime
          : "Send me an email anytime",
      },

      {
        Icon: MapPin,
        label: isArabic ? t.locationLabel : "Location",
        value: t.yourLocation,
        description: isArabic
          ? t.remoteWorkAvailable
          : "Available for remote work worldwide",
      },

      {
        Icon: Clock,
        label: isArabic
          ? t.responseTimeLabel
          : "Response Time",
        value: isArabic
          ? t.hours24
          : "24 hours",
        description: t.responseTime,
      },

      {
        Icon: Coffee,
        label: isArabic
          ? t.availabilityLabel
          : "Availability",
        value: isArabic
          ? t.openToWork
          : "Open to work",
        description: t.availabilityText,
      },
    ],
    [isArabic, t]
  );

  /* =======================================================
     SOCIAL LINKS
  ======================================================= */

  const socialLinks = useMemo(
    () => [
      {
        Icon: Github,
        href: "https://github.com/Mohahamed99-by",
        label: "GitHub",
      },

      {
        Icon: Linkedin,
        href: "https://www.linkedin.com/in/mohamed-tolba-div/",
        label: "LinkedIn",
      },

      {
        Icon: Facebook,
        href: "https://www.facebook.com/profile.php?id=61567673134521",
        label: "Facebook",
      },
    ],
    []
  );

  /* =======================================================
     HANDLERS
  ======================================================= */

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (isSubmitting) return;

      setIsSubmitting(true);
      setSubmitStatus(null);

      /*
        Demo submission.

        Replace this section later with:
        - API request
        - Formspree
        - EmailJS
        - Resend
        - Your own backend
      */

      window.setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus("success");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 900);
    },
    [isSubmitting]
  );

  /* =======================================================
     ANIMATION
     Lightweight single animation configuration.
  ======================================================= */

  const sectionReveal = {
    initial: {
      opacity: 0,
      y: 20,
    },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.08,
    },

    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="contact"
      name="contact"
      dir={isArabic ? "rtl" : "ltr"}
      className="
        relative
        overflow-hidden
        bg-neutral-950
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* Subtle grid - no gradient */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.8) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.8) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Accent lines */}

        <span
          className="
            absolute
            left-0
            top-[25%]
            h-px
            w-24
            bg-[#E4312B]/40
          "
        />

        <span
          className="
            absolute
            bottom-[20%]
            right-0
            h-px
            w-20
            bg-[#E4312B]/30
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div {...sectionReveal}>
          {/* Label */}

          <div
            className={`
              flex
              items-center
              gap-3
              ${
                isArabic
                  ? "justify-end"
                  : "justify-start"
              }
            `}
          >
            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-[#E4312B]
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-neutral-500
              "
            >
              {t.availability}
            </span>

            <span
              className="
                h-px
                w-10
                bg-neutral-800
              "
            />
          </div>

          {/* Title */}

          <h1
            className={`
              mt-7
              max-w-4xl
              text-[clamp(3.2rem,9vw,7rem)]
              font-black
              leading-[0.92]
              tracking-[-0.06em]
              text-white
              ${
                isArabic
                  ? "font-arabic text-right leading-[1.15] tracking-normal"
                  : ""
              }
            `}
          >
            {!isArabic && (
              <span className="block">
                Get In
              </span>
            )}

            <span
              className="
                block
                text-transparent
              "
              style={{
                WebkitTextStroke:
                  "1.5px #E4312B",
              }}
            >
              {isArabic
                ? "تواصل معي"
                : "Touch"}
            </span>
          </h1>

          {/* Description */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <p
              className={`
                max-w-2xl
                text-sm
                leading-7
                text-neutral-400
                sm:text-base
                ${
                  isArabic
                    ? "font-arabic text-right"
                    : ""
                }
              `}
            >
              {t.feelFree}
            </p>

            {/* Quick Actions */}

            <div
              className={`
                flex
                shrink-0
                flex-wrap
                gap-3
                ${
                  isArabic
                    ? "justify-end"
                    : "justify-start"
                }
              `}
            >
              <a
                href="/assets/CV_MOHAMED_TOLBA.pdf"
                download="CV_MOHAMED_TOLBA.pdf"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#E4312B]
                  bg-[#E4312B]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#c92b26]
                  hover:-translate-y-0.5
                "
              >
                <Download
                  size={16}
                  aria-hidden="true"
                />

                <span>
                  {t.downloadCV}
                </span>
              </a>

              <a
                href="mailto:mohamedtolba.dev@gmail.com?subject=Schedule a Call"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-neutral-800
                  bg-neutral-900
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-neutral-300
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#E4312B]/60
                  hover:text-white
                "
              >
                <Calendar
                  size={16}
                  aria-hidden="true"
                />

                <span>
                  {t.scheduleCall}
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <motion.div
          {...sectionReveal}
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-5
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div
            className="
              space-y-5
              lg:col-span-2
            "
          >
            {/* Contact Info */}

            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-neutral-800
                bg-neutral-950
              "
            >
              {contactInfo.map(
                (
                  {
                    Icon,
                    label,
                    value,
                    href,
                    description,
                  },
                  index
                ) => {
                  const content = (
                    <div
                      className={`
                        group
                        flex
                        gap-4
                        px-5
                        py-5
                        transition-colors
                        duration-200
                        hover:bg-neutral-900
                        ${
                          index !==
                          contactInfo.length - 1
                            ? "border-b border-neutral-800"
                            : ""
                        }
                        ${
                          isArabic
                            ? "text-right"
                            : ""
                        }
                      `}
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-neutral-800
                          text-neutral-500
                          transition-colors
                          group-hover:border-[#E4312B]/50
                          group-hover:text-[#E4312B]
                        "
                      >
                        <Icon
                          size={17}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-neutral-600
                          "
                        >
                          {label}
                        </p>

                        <p
                          className="
                            mt-1
                            truncate
                            text-sm
                            font-semibold
                            text-white
                          "
                        >
                          {value}
                        </p>

                        <p
                          className="
                            mt-1
                            text-xs
                            leading-5
                            text-neutral-600
                          "
                        >
                          {description}
                        </p>
                      </div>
                    </div>
                  );

                  if (!href) {
                    return (
                      <div key={label}>
                        {content}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={label}
                      href={href}
                    >
                      {content}
                    </a>
                  );
                }
              )}
            </div>

            {/* Social */}

            <div
              className="
                rounded-2xl
                border
                border-neutral-800
                bg-neutral-950
                p-5
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-neutral-600
                    "
                  >
                    {t.connectWithMe}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-neutral-500
                    "
                  >
                    {isArabic
                      ? "تابعني على المنصات"
                      : "Find me online"}
                  </p>
                </div>

                <div className="flex gap-2">
                  {socialLinks.map(
                    ({
                      Icon,
                      href,
                      label,
                    }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-neutral-800
                          text-neutral-500
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:border-[#E4312B]
                          hover:bg-[#E4312B]/5
                          hover:text-[#E4312B]
                        "
                      >
                        <Icon
                          size={17}
                          aria-hidden="true"
                        />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-neutral-800
              bg-neutral-950
              p-5
              sm:p-6
              lg:col-span-3
            "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Form Header */}

              <div
                className={
                  isArabic
                    ? "text-right"
                    : ""
                }
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#E4312B]
                    "
                  />

                  <h2
                    className={`
                      text-lg
                      font-bold
                      text-white
                      ${
                        isArabic
                          ? "font-arabic"
                          : ""
                      }
                    `}
                  >
                    {isArabic
                      ? t.sendMessageTitle
                      : "Send a Message"}
                  </h2>
                </div>

                <p
                  className={`
                    mt-2
                    text-sm
                    text-neutral-600
                    ${
                      isArabic
                        ? "font-arabic"
                        : ""
                    }
                  `}
                >
                  {isArabic
                    ? t.respondWithin24
                    : "I'll respond within 24 hours"}
                </p>
              </div>

              {/* Name + Email */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-4
                  md:grid-cols-2
                "
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-neutral-600
                    "
                  >
                    {t.name}
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    autoComplete="name"
                    required
                    className={`
                      w-full
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900
                      px-4
                      py-3
                      text-sm
                      text-white
                      outline-none
                      transition-colors
                      placeholder:text-neutral-700
                      focus:border-[#E4312B]
                      ${
                        isArabic
                          ? "font-arabic text-right"
                          : ""
                      }
                    `}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-neutral-600
                    "
                  >
                    {t.email}
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    autoComplete="email"
                    required
                    className={`
                      w-full
                      rounded-xl
                      border
                      border-neutral-800
                      bg-neutral-900
                      px-4
                      py-3
                      text-sm
                      text-white
                      outline-none
                      transition-colors
                      placeholder:text-neutral-700
                      focus:border-[#E4312B]
                      ${
                        isArabic
                          ? "font-arabic text-right"
                          : ""
                      }
                    `}
                  />
                </div>
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="contact-subject"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-neutral-600
                  "
                >
                  {t.subject}
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.subjectPlaceholder}
                  required
                  className={`
                    w-full
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-900
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    transition-colors
                    placeholder:text-neutral-700
                    focus:border-[#E4312B]
                    ${
                      isArabic
                        ? "font-arabic text-right"
                        : ""
                    }
                  `}
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-neutral-600
                  "
                >
                  {t.message}
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  required
                  className={`
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-neutral-800
                    bg-neutral-900
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    transition-colors
                    placeholder:text-neutral-700
                    focus:border-[#E4312B]
                    ${
                      isArabic
                        ? "font-arabic text-right"
                        : ""
                    }
                  `}
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#E4312B]
                  bg-[#E4312B]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#c92b26]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  ${
                    isArabic
                      ? "flex-row-reverse font-arabic"
                      : ""
                  }
                `}
              >
                <span>
                  {isSubmitting
                    ? t.sending
                    : t.sendMessage}
                </span>

                <Send
                  size={16}
                  aria-hidden="true"
                />
              </button>

              {/* Status */}

              {submitStatus && (
                <div
                  className={`
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-sm
                    ${
                      submitStatus ===
                      "success"
                        ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
                        : "border-[#E4312B]/30 bg-[#E4312B]/5 text-[#E4312B]"
                    }
                    ${
                      isArabic
                        ? "font-arabic"
                        : ""
                    }
                  `}
                >
                  {submitStatus ===
                  "success" ? (
                    <CheckCircle
                      size={16}
                      aria-hidden="true"
                    />
                  ) : (
                    <AlertCircle
                      size={16}
                      aria-hidden="true"
                    />
                  )}

                  <span>
                    {submitStatus ===
                    "success"
                      ? t.successMessage
                      : t.errorMessage}
                  </span>
                </div>
              )}
            </form>
          </div>
        </motion.div>

        {/* ===================================================
            FOOTER STATUS
        =================================================== */}

        <motion.div
          {...sectionReveal}
          className="
            mt-5
            flex
            flex-col
            gap-3
            rounded-2xl
            border
            border-neutral-800
            px-5
            py-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-500
              "
            />

            <span
              className={`
                text-xs
                text-neutral-500
                ${
                  isArabic
                    ? "font-arabic"
                    : ""
                }
              `}
            >
              {t.availabilityText}
            </span>
          </div>

          <span
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-neutral-700
            "
          >
            Web Development
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Contact);
