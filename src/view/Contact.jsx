"use client"

import { motion } from "framer-motion"
import { Facebook, Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { useContext, useState } from "react"
import { LongContext } from "../components/ContextProvider"

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  })

  const { language } = useContext(LongContext)
  const isArabic = language === "ar"

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Add your form submission logic here
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const translations = {
    en: {
      getInTouch: "Get In Touch",
      letsWorkTogether: "Let's Work Together",
      feelFree: "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message",
      yourLocation: "Fes",
      connectWithMe: "Connect With Me",
    },
    ar: {
      getInTouch: "ابق على تواصل",
      letsWorkTogether: "دعنا نعمل معًا",
      feelFree: "لا تتردد في التواصل إذا كنت تبحث عن مطور أو لديك سؤال أو ترغب فقط في الاتصال.",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      sendMessage: "إرسال الرسالة",
      yourLocation: "فاس",
      connectWithMe: "تواصل معي",
    },
  }

  const t = translations[language]

  return (
    <section
      className="relative min-h-screen flex items-center px-6 lg:px-12 py-20 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#ffffff05_50%,transparent_51%)] bg-[length:40px_40px]" />

        {/* Accent color glow */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className={`h-px w-12 bg-secondary ${isArabic ? "order-2" : "order-1"}`}></div>
              <span className={`text-secondary font-mono text-lg ${isArabic ? "order-1 font-arabic" : "order-2"}`}>
                {t.getInTouch}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h1 className={`text-5xl lg:text-7xl font-bold text-white ${isArabic ? "font-arabic" : ""}`}>
                <span className="inline-block">{t.letsWorkTogether}</span>
                <span className="inline-block ml-3 h-[6px] w-12 bg-secondary"></span>
              </h1>

              <p
                className={`text-slate-300 text-lg lg:text-xl max-w-2xl leading-relaxed ${
                  isArabic ? "font-arabic mr-0 ml-auto" : ""
                }`}
              >
                {t.feelFree}
              </p>
            </motion.div>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="space-y-8">
                  <a
                    href="mailto:mohamedtolba161@gmail.com"
                    className={`flex items-center ${
                      isArabic ? "space-x-reverse" : ""
                    } gap-4 text-slate-300 hover:text-secondary transition-colors group`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <span className={isArabic ? "font-arabic" : ""}>mohamedtolba161@gmail.com</span>
                  </a>

                  <div className={`flex items-center ${isArabic ? "space-x-reverse" : ""} gap-4 text-slate-300`}>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <span className={isArabic ? "font-arabic" : ""}>{t.yourLocation}</span>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <h4 className={`text-slate-300 font-semibold mb-4 ${isArabic ? "font-arabic" : ""}`}>
                      {t.connectWithMe}
                    </h4>
                    <div className={`flex ${isArabic ? "space-x-reverse" : ""} gap-4`}>
                      {[
                        { Icon: Github, href: "https://github.com/Mohahamed99-by" },
                        {
                          Icon: Linkedin,
                          href: "https://www.linkedin.com/in/mohamed-tolba-div/",
                        },
                        {
                          Icon: Facebook,
                          href: "https://www.facebook.com/profile.php?id=61567673134521",
                        },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-secondary hover:bg-secondary/10 hover:border-secondary/30 transition-colors"
                        >
                          <social.Icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="hidden lg:block relative h-[200px]"
              >
                <div className="absolute inset-0">
                  {/* Animated circles */}
                  <div className="relative w-full h-full">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-dashed border-secondary/30"
                    />
                    <motion.div
                      animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-secondary/20"
                    />
                  </div>

                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: Math.random() * 2 + 2,
                        delay: i * 0.1,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="absolute w-1.5 h-1.5 rounded-full bg-secondary"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium text-slate-300 mb-2 ${
                      isArabic ? "font-arabic text-right" : ""
                    }`}
                  >
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:border-secondary text-slate-300 ${
                      isArabic ? "text-right font-arabic" : ""
                    }`}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium text-slate-300 mb-2 ${
                      isArabic ? "font-arabic text-right" : ""
                    }`}
                  >
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:border-secondary text-slate-300 resize-none ${
                      isArabic ? "text-right font-arabic" : ""
                    }`}
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full px-6 py-4 bg-secondary text-primary rounded-lg hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 font-medium flex items-center justify-center gap-2 ${
                    isArabic ? "font-arabic flex-row-reverse" : ""
                  }`}
                >
                  {t.sendMessage}
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
