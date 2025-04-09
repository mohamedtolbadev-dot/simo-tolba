"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  ChevronRight,
  Code2,
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  Palette,
  Twitter,
} from "lucide-react"
import { useContext } from "react"
import { LongContext } from "./../components/ContextProvider"
import Link from "react-scroll/modules/components/Link"

const About = () => {
  const { language, t } = useContext(LongContext)
  const isArabic = language === "ar"

  const skills = [
    { name: "Frontend Development", icon: <Code2 />, level: 90 },
    { name: "UI/UX Design", icon: <Palette />, level: 85 },
    { name: "Backend Development", icon: <Database />, level: 80 },
    { name: "Internationalization", icon: <Globe />, level: 75 },
  ]

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`space-y-10 ${isArabic ? "text-right" : "text-left"}`}
          >
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
                  {t.aboutMe || "About Me"}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <h1 className={`text-5xl lg:text-7xl font-bold text-white ${isArabic ? "font-arabic" : ""}`}>
                  <span className="inline-block">{t.myStory || "My Story"}</span>
                  <span className="inline-block ml-3 h-[6px] w-12 bg-secondary"></span>
                </h1>

                <p
                  className={`text-slate-300 text-lg lg:text-xl max-w-2xl leading-relaxed ${
                    isArabic ? "font-arabic mr-0 ml-auto" : ""
                  }`}
                >
                  {t.introduction ||
                    "I'm a passionate developer with expertise in creating modern web applications. My journey in technology has been driven by curiosity and a desire to build solutions that make a difference."}
                </p>
              </motion.div>
            </div>

            {/* Additional Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-slate-300 text-lg leading-relaxed">
                {t.journey ||
                  "With several years of experience in both frontend and backend development, I've worked on projects ranging from small business websites to complex enterprise applications."}
              </p>

              <ul className="space-y-3">
                {[
                  t.highlight1 || "Specialized in React and Next.js development",
                  t.highlight2 || "Experienced with modern UI frameworks and design systems",
                  t.highlight3 || "Passionate about creating accessible and performant web applications",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className={`flex flex-col sm:flex-row gap-5 ${isArabic ? "items-end" : "items-start"}`}
            >
              <Link
                to="/contact"
                className={`group inline-flex items-center gap-3 px-8 py-4 bg-secondary text-primary rounded-lg font-medium shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 ${
                  isArabic ? "flex-row-reverse font-arabic" : ""
                }`}
              >
                {t.contactMe || "Get in Touch"}
                {isArabic ? (
                  <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Skills Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Main circular element */}
              <div className="relative w-80 h-80">
                {/* Outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-white/10"
                />

                {/* Middle ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-dashed border-secondary/30"
                />

                {/* Inner ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-10 rounded-full border border-white/10"
                />

                {/* Center Icon */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10"
                >
                  <Code2 className="w-12 h-12 text-white" />
                </motion.div>

                {/* Skills as Orbiting Elements */}
                {skills.map((skill, index) => {
                  const angle = (index * Math.PI * 2) / skills.length
                  const x = Math.cos(angle) * 150
                  const y = Math.sin(angle) * 150

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      className="absolute w-16 h-16 bg-slate-800/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10"
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.icon}
                    </motion.div>
                  )
                })}
              </div>

              {/* Floating skill info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute top-1/4 -left-10 p-4 bg-slate-900/80 backdrop-blur-md rounded-lg border border-white/10 shadow-xl"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-secondary" />
                    <span className="text-white font-medium">Frontend</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 1, delay: 1 }}
                      className="h-full bg-gradient-to-r from-secondary to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-1/4 -right-10 p-4 bg-slate-900/80 backdrop-blur-md rounded-lg border border-white/10 shadow-xl"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-secondary" />
                    <span className="text-white font-medium">Backend</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1, delay: 1.2 }}
                      className="h-full bg-gradient-to-r from-secondary to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => (
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
        </div>
      </div>
    </section>
  )
}

export default About
