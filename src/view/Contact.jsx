"use client";

import {
  Mail,
  MessageCircle,
  User,
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
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { LongContext } from "../components/ContextProvider";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const { language } = useContext(LongContext);
  const isArabic = language === "ar";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const translations = {
    en: {
      getInTouch: "Get In Touch",
      letsWorkTogether: "Let's Build Something Amazing Together",
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
      responseTime: "Usually responds within 24 hours",
      availability: "Available for freelance work",
      successMessage: "Thank you! Your message has been sent successfully.",
      errorMessage: "Something went wrong. Please try again.",
      namePlaceholder: "Enter your full name",
      emailPlaceholder: "Enter your email address",
      subjectPlaceholder: "What's this about?",
      messagePlaceholder: "Tell me about your project or inquiry...",
      downloadCV: "Download CV",
      scheduleCall: "Schedule a Call",
    },
    ar: {
      getInTouch: "تواصل معي",
      getInTitle: "",
      touchTitle: "تواصل معي",
      letsWorkTogether: "لنبني شيئًا مذهلاً معًا",
      feelFree:
        "مستعد لتحويل أفكارك إلى واقع؟ دعنا نناقش مشروعك القادم ونصنع شيئًا استثنائيًا معًا.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      emailLabel: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "رسالتك",
      sendMessage: "إرسال الرسالة",
      sending: "جارٍ الإرسال...",
      yourLocation: "فاس، المغرب",
      connectWithMe: "تواصل معي",
      responseTime: "عادةً أرد خلال 24 ساعة",
      availability: "متاح للعمل الحر والمشاريع",
      successMessage: "شكرًا لك! تم إرسال رسالتك بنجاح.",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      namePlaceholder: "أدخل اسمك الكامل",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subjectPlaceholder: "ما هو موضوع رسالتك؟",
      messagePlaceholder: "أخبرني عن مشروعك أو استفسارك...",
      downloadCV: "تحميل السيرة الذاتية",
      scheduleCall: "جدولة مكالمة",
      locationLabel: "الموقع",
      responseTimeLabel: "وقت الرد",
      availabilityLabel: "التوفر",
      sendEmailAnytime: "راسلني عبر البريد في أي وقت",
      remoteWorkAvailable: "متاح للعمل عن بُعد في جميع أنحاء العالم",
      openToWork: "متاح للعمل",
      hours24: "24 ساعة",
      sendMessageTitle: "أرسل رسالة",
      respondWithin24: "سأرد خلال 24 ساعة",
    },
  };

  const t = translations[language];

  const contactInfo = [
    {
      icon: <Mail />,
      label: isArabic ? t.emailLabel : "Email",
      value: "mohamedtolba.dev@gmail.com",
      href: "mailto:mohamedtolba.dev@gmail.com",
      description: isArabic ? t.sendEmailAnytime : "Send me an email anytime",
    },
    {
      icon: <MapPin />,
      label: isArabic ? t.locationLabel : "Location",
      value: t.yourLocation,
      description: isArabic ? t.remoteWorkAvailable : "Available for remote work worldwide",
    },
    {
      icon: <Clock />,
      label: isArabic ? t.responseTimeLabel : "Response Time",
      value: isArabic ? t.hours24 : "24 hours",
      description: t.responseTime,
    },
    {
      icon: <Coffee />,
      label: isArabic ? t.availabilityLabel : "Availability",
      value: isArabic ? t.openToWork : "Open to work",
      description: t.availability,
    },
  ];

  const socialLinks = [
    {
      Icon: Github,
      href: "https://github.com/Mohahamed99-by",
      label: "GitHub",
      color: "hover:text-white hover:bg-slate-800",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/mohamed-tolba-div/",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:bg-blue-400/10",
    },
    {
      Icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61567673134521",
      label: "Facebook",
      color: "hover:text-blue-500 hover:bg-blue-500/10",
    },
  ];

  const quickActions = [
    {
      icon: <Download />,
      label: t.downloadCV,
      href: "/assets/MohamedTolbaCV.pdf",
      download: "MohamedTolbaCV.pdf",
      color: "bg-secondary text-light hover:bg-secondary/90",
    },
    {
      icon: <Calendar />,
      label: t.scheduleCall,
      href: "mailto:mohamedtolba.dev@gmail.com?subject=Schedule a Call",
      color: "bg-white/10 text-white hover:bg-white/20 border border-white/20",
    },
  ];

  return (
    <section
      id="contact"
      name="contact"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Minimal Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-slate-700/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-12">
          {/* Minimalist Header */}
          <div className="space-y-10">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-slate-400 text-sm font-medium tracking-wider uppercase">
                {t.availability || "Available for work"}
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight ${
                  isArabic ? "font-arabic" : ""
                }`}
                style={{ perspective: "1000px" }}
              >
                {!isArabic && (
                  <motion.span 
                    initial={{ opacity: 0, x: -30, rotateX: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="block text-white mb-2"
                    style={{
                      textShadow: `
                        2px 2px 0px rgba(220, 38, 38, 0.3),
                        4px 4px 0px rgba(220, 38, 38, 0.2),
                        6px 6px 0px rgba(220, 38, 38, 0.1),
                        8px 8px 20px rgba(0, 0, 0, 0.5)
                      `,
                      transform: "translateZ(50px)",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    Get In
                  </motion.span>
                )}
                <motion.span 
                  initial={{ opacity: 0, x: -30, rotateX: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className={`block ${isArabic ? "text-white" : "text-slate-500"}`}
                  style={{
                    textShadow: isArabic ? `
                      2px 2px 0px rgba(220, 38, 38, 0.3),
                      4px 4px 0px rgba(220, 38, 38, 0.2),
                      6px 6px 0px rgba(220, 38, 38, 0.1),
                      8px 8px 20px rgba(0, 0, 0, 0.5)
                    ` : `
                      2px 2px 0px rgba(100, 116, 139, 0.4),
                      4px 4px 0px rgba(100, 116, 139, 0.3),
                      6px 6px 0px rgba(100, 116, 139, 0.2),
                      8px 8px 20px rgba(0, 0, 0, 0.5)
                    `,
                    transform: "translateZ(30px)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  {isArabic ? "تواصل معي" : "Touch"}
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="space-y-6"
            >
              <p className={`text-slate-400 text-lg max-w-2xl leading-relaxed ${isArabic ? "font-arabic" : ""}`}>
                {t.feelFree}
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/assets/MohamedTolbaCV.pdf"
                  download="MohamedTolbaCV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.downloadCV}</span>
                </a>
                <a
                  href="mailto:mohamedtolba.dev@gmail.com?subject=Schedule a Call"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-red-600/30 text-slate-400 font-semibold hover:border-red-600/50 hover:text-slate-300 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.scheduleCall}</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Main Contact Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          >
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 4 }}
                    className={`p-4 border border-slate-800 hover:border-slate-700 transition-all cursor-default ${
                      info.href ? "cursor-pointer" : ""
                    }`}
                    onClick={
                      info.href
                        ? () => window.open(info.href, "_blank")
                        : undefined
                    }
                  >
                    <div className={`space-y-1 ${isArabic ? "text-right" : ""}`}>
                      <div className="flex items-center gap-2 text-slate-600">
                        {info.icon}
                        <span className="text-xs uppercase tracking-wider">{info.label}</span>
                      </div>
                      <p className="text-white text-sm font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="border-t border-slate-800 pt-6"
              >
                <h4 className={`text-slate-500 text-xs uppercase tracking-wider mb-4 ${isArabic ? "text-right" : ""}`}>
                  {t.connectWithMe}
                </h4>
                <div className={`flex ${isArabic ? "justify-end" : "justify-start"} gap-3`}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-slate-800 flex items-center justify-center text-slate-600 hover:text-white hover:border-red-600 transition-all"
                      aria-label={social.label}
                    >
                      <social.Icon size={18} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h2 className={`text-white font-semibold ${isArabic ? "font-arabic text-right" : ""}`}>
                    {isArabic ? t.sendMessageTitle : "Send a Message"}
                  </h2>
                  <p className={`text-slate-500 text-sm ${isArabic ? "font-arabic text-right" : ""}`}>
                    {isArabic ? t.respondWithin24 : "I'll respond within 24 hours"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    className={`w-full px-4 py-2.5 bg-transparent border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-600 transition-colors ${
                      isArabic ? "text-right font-arabic" : ""
                    }`}
                    required
                  />

                  {/* Email Field */}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    className={`w-full px-4 py-2.5 bg-transparent border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-600 transition-colors ${
                      isArabic ? "text-right font-arabic" : ""
                    }`}
                    required
                  />
                </div>

                {/* Subject Field */}
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.subjectPlaceholder}
                  className={`w-full px-4 py-2.5 bg-transparent border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-600 transition-colors ${
                    isArabic ? "text-right font-arabic" : ""
                  }`}
                  required
                />

                {/* Message Field */}
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  className={`w-full px-4 py-2.5 bg-transparent border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-600 resize-none transition-colors ${
                    isArabic ? "text-right font-arabic" : ""
                  }`}
                  required
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                  } ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <span>{isSubmitting ? t.sending : t.sendMessage}</span>
                  <Send className="w-4 h-4" />
                </button>

                {/* Success/Error Messages */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`p-3 border flex items-center gap-2 text-sm ${
                        submitStatus === "success"
                          ? "bg-green-900/20 border-green-500/30 text-green-400"
                          : "bg-red-900/20 border-red-600/30 text-red-400"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <AlertCircle className="w-4 h-4" />
                      )}
                      <span className={isArabic ? "font-arabic" : ""}>
                        {submitStatus === "success" ? t.successMessage : t.errorMessage}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
