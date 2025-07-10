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
  Calendar
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
      getInTouch: "ابق على تواصل",
      letsWorkTogether: "دعنا نبني شيئًا مذهلاً معًا",
      feelFree:
        "مستعد لتحويل أفكارك إلى حقيقة؟ دعنا نناقش مشروعك القادم ونصنع شيئًا استثنائيًا.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "رسالتك",
      sendMessage: "إرسال الرسالة",
      sending: "جارٍ الإرسال...",
      yourLocation: "فاس، المغرب",
      connectWithMe: "تواصل معي",
      responseTime: "عادة ما يجيب خلال 24 ساعة",
      availability: "متاح للعمل الحر",
      successMessage: "شكرًا لك! تم إرسال رسالتك بنجاح.",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      namePlaceholder: "أدخل اسمك الكامل",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subjectPlaceholder: "ما هو الموضوع؟",
      messagePlaceholder: "أخبرني عن مشروعك أو استفسارك...",
      downloadCV: "تحميل السيرة الذاتية",
      scheduleCall: "جدولة مكالمة",
    },
  };

  const t = translations[language];

  const contactInfo = [
    {
      icon: <Mail />,
      label: "Email",
      value: "mohamedtolba161@gmail.com",
      href: "mailto:mohamedtolba161@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: <MapPin />,
      label: "Location",
      value: t.yourLocation,
      description: "Available for remote work worldwide",
    },
    {
      icon: <Clock />,
      label: "Response Time",
      value: "24 hours",
      description: t.responseTime,
    },
    {
      icon: <Coffee />,
      label: "Availability",
      value: "Open to work",
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
      color: "bg-secondary text-primary hover:bg-secondary/90",
    },
    {
      icon: <Calendar />,
      label: t.scheduleCall,
      href: "mailto:mohamedtolba161@gmail.com?subject=Schedule a Call",
      color: "bg-white/10 text-white hover:bg-white/20 border border-white/20",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center px-6 lg:px-12 py-20 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5" />
        </div>

        {/* Animated mesh background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#ffffff02_50%,transparent_51%)] bg-[length:80px_80px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,#ffffff02_50%,transparent_51%)] bg-[length:80px_80px]" />
        </div>

        {/* Floating communication icons */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/6 text-secondary/20"
        >
          <MessageCircle size={35} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 12, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/6 text-secondary/20"
        >
          <Mail size={30} />
        </motion.div>

        {/* Dynamic accent glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-300 font-mono">
                Available for work
              </span>
            </div>

            <div
              className={`flex items-center gap-3 ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <div className="h-px w-12 bg-gradient-to-r from-secondary to-transparent"></div>
              <span
                className={`text-secondary font-mono text-base ${
                  isArabic ? "font-arabic" : ""
                }`}
              >
                {t.getInTouch}
              </span>
            </div>

            <h1
              className={`text-4xl lg:text-6xl font-bold text-white leading-tight ${
                isArabic ? "font-arabic" : ""
              }`}
            >
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                Connect
              </span>
            </h1>

            <p
              className={`text-slate-300 text-lg max-w-2xl leading-relaxed ${
                isArabic ? "font-arabic mr-0 ml-auto" : ""
              }`}
            >
              {t.feelFree}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
              {quickActions.map((action, index) => (
                <motion.a
                  key={index}
                  href={action.href}
                  download={action.download}
                  whileHover={{ scale: 1.02 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${action.color}`}
                >
                  {action.icon}
                  <span>{action.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Main Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {/* Contact Information Cards */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className={`p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 ${
                      info.href ? "cursor-pointer" : ""
                    }`}
                    onClick={
                      info.href
                        ? () => window.open(info.href, "_blank")
                        : undefined
                    }
                  >
                    <div
                      className={`flex items-start gap-3 ${
                        isArabic ? "flex-row-reverse text-right" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <div className="text-secondary">{info.icon}</div>
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-white text-sm font-medium">
                          {info.label}
                        </h3>
                        <p className="text-secondary text-sm">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                <h4
                  className={`text-white text-sm font-medium mb-3 ${
                    isArabic ? "font-arabic text-right" : ""
                  }`}
                >
                  {t.connectWithMe}
                </h4>
                <div
                  className={`flex ${isArabic ? "justify-end" : "justify-start"} gap-3`}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <h2
                    className={`text-2xl font-bold text-white ${
                      isArabic ? "font-arabic text-right" : ""
                    }`}
                  >
                    Send me a message
                  </h2>
                  <p className={`text-sm text-slate-400 ${isArabic ? "font-arabic text-right" : ""}`}>
                    I&apos;ll get back to you as soon as possible
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder={t.namePlaceholder}
                      className={`w-full pl-10 pr-3 py-2.5 bg-white/5 backdrop-blur-sm border rounded-lg focus:outline-none text-sm text-slate-300 placeholder-slate-500 transition-all duration-300 ${
                        focusedField === "name"
                          ? "border-secondary"
                          : "border-white/10 hover:border-white/20"
                      } ${isArabic ? "text-right font-arabic" : ""}`}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder={t.emailPlaceholder}
                      className={`w-full pl-10 pr-3 py-2.5 bg-white/5 backdrop-blur-sm border rounded-lg focus:outline-none text-sm text-slate-300 placeholder-slate-500 transition-all duration-300 ${
                        focusedField === "email"
                          ? "border-secondary"
                          : "border-white/10 hover:border-white/20"
                      } ${isArabic ? "text-right font-arabic" : ""}`}
                      required
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    placeholder={t.subjectPlaceholder}
                    className={`w-full pl-10 pr-3 py-2.5 bg-white/5 backdrop-blur-sm border rounded-lg focus:outline-none text-sm text-slate-300 placeholder-slate-500 transition-all duration-300 ${
                      focusedField === "subject"
                        ? "border-secondary"
                        : "border-white/10 hover:border-white/20"
                    } ${isArabic ? "text-right font-arabic" : ""}`}
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder={t.messagePlaceholder}
                    className={`w-full px-3 py-2.5 bg-white/5 backdrop-blur-sm border rounded-lg focus:outline-none text-sm text-slate-300 placeholder-slate-500 resize-none transition-all duration-300 ${
                      focusedField === "message"
                        ? "border-secondary"
                        : "border-white/10 hover:border-white/20"
                    } ${isArabic ? "text-right font-arabic" : ""}`}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-lg text-sm font-medium transition-all duration-300 ${
                    isSubmitting
                      ? "opacity-80 cursor-not-allowed"
                      : "hover:from-secondary/90 hover:to-secondary/70"
                  } ${isArabic ? "font-arabic flex-row-reverse" : ""} flex items-center justify-center gap-2`}
                >
                  <span>{isSubmitting ? t.sending : t.sendMessage}</span>
                  <Send className="w-4 h-4" />
                </button>

                {/* Success/Error Messages */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-3 rounded-lg border flex items-center gap-2 text-sm ${
                        submitStatus === "success"
                          ? "bg-green-500/10 border-green-500/30 text-green-400"
                          : "bg-red-500/10 border-red-500/30 text-red-400"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <AlertCircle className="w-4 h-4" />
                      )}
                      <span className={isArabic ? "font-arabic" : ""}>
                        {submitStatus === "success"
                          ? t.successMessage
                          : t.errorMessage}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
