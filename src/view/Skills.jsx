"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { LongContext } from "../components/ContextProvider"
import { Database, FileCode2, LayoutGrid, Server, Sparkles } from "lucide-react"
import { DiReact, DiGit, DiMysql, DiLaravel, DiHtml5, DiCss3 } from "react-icons/di"
import { SiExpress, SiMongodb, SiRedux, SiGithub } from "react-icons/si"

const Skills = () => {
  const { language, tSkills } = useContext(LongContext)
  const isArabic = language === "ar"

  const skills = [
    {
      id: 1,
      title: "HTML5",
      icon: <DiHtml5 size={40} />,
      style: "text-orange-500",
      level: "95%",
    },
    {
      id: 2,
      title: "CSS3",
      icon: <DiCss3 size={40} />,
      style: "text-blue-500",
      level: "90%",
    },
    {
      id: 3,
      title: "React",
      icon: <DiReact size={40} />,
      style: "text-cyan-500",
      level: "90%",
    },
    {
      id: 5,
      title: "Express.js",
      icon: <SiExpress size={40} />,
      style: "text-gray-300",
      level: "85%",
    },
    {
      id: 6,
      title: "Laravel",
      icon: <DiLaravel size={40} />,
      style: "text-red-500",
      level: "80%",
    },
    {
      id: 7,
      title: "MongoDB",
      icon: <SiMongodb size={40} />,
      style: "text-green-600",
      level: "85%",
    },
    {
      id: 8,
      title: "MySQL",
      icon: <DiMysql size={40} />,
      style: "text-blue-400",
      level: "80%",
    },
    {
      id: 9,
      title: "Git",
      icon: <DiGit size={40} />,
      style: "text-red-500",
      level: "90%",
    },
    {
      id: 10,
      title: "GitHub",
      icon: <SiGithub size={40} />,
      style: "text-gray-300",
      level: "90%",
    },
    {
      id: 11,
      title: "Redux",
      icon: <SiRedux size={40} />,
      style: "text-purple-500",
      level: "85%",
    },
  ]

  const categories = [
    {
      id: 1,
      title: tSkills?.frontend || "Frontend Development",
      icon: <LayoutGrid className="w-6 h-6" />,
      level: "90%",
    },
    {
      id: 2,
      title: tSkills?.backend || "Backend Development",
      icon: <Server className="w-6 h-6" />,
      level: "85%",
    },
    {
      id: 3,
      title: tSkills?.database || "Database Management",
      icon: <Database className="w-6 h-6" />,
      level: "85%",
    },
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
                {tSkills?.subtitle || "My Expertise"}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h1 className={`text-5xl lg:text-7xl font-bold text-white ${isArabic ? "font-arabic" : ""}`}>
                <span className="inline-block">{tSkills?.title || "Skills & Technologies"}</span>
                <span className="inline-block ml-3 h-[6px] w-12 bg-secondary"></span>
              </h1>

              <p
                className={`text-slate-300 text-lg lg:text-xl max-w-2xl leading-relaxed ${
                  isArabic ? "font-arabic mr-0 ml-auto" : ""
                }`}
              >
                {tSkills?.description ||
                  "A showcase of my technical skills and proficiency in various programming languages, frameworks, and tools."}
              </p>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content - Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {skills.map(({ id, title, icon, style, level }) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + id * 0.05 }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className={`${style} group-hover:text-white transition-colors duration-300`}>{icon}</div>
                      <h3 className="text-white font-medium">{title}</h3>
                      <div className="w-full bg-slate-800 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: level }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-secondary h-1.5 rounded-full"
                        />
                      </div>
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary/0 via-secondary/0 to-secondary/0 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Categories and Visual */}
            <div className="space-y-12">
              {/* Development Categories */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8"
              >
                <h2 className={`text-2xl font-bold text-white ${isArabic ? "text-right font-arabic" : ""}`}>
                  {tSkills?.developmentCategories || "Development Categories"}
                </h2>

                <div className="space-y-6">
                  {categories.map(({ id, title, icon, level }) => (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + id * 0.1 }}
                      className="space-y-2"
                    >
                      <div className={`flex items-center justify-between ${isArabic ? "flex-row-reverse" : ""}`}>
                        <div className="flex items-center gap-2">
                          <div className="text-secondary">{icon}</div>
                          <span className={`text-slate-300 ${isArabic ? "font-arabic" : ""}`}>{title}</span>
                        </div>
                        <span className="text-secondary font-medium">{level}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: level }}
                          transition={{ duration: 1, delay: 0.7 + id * 0.1 }}
                          className="h-full bg-gradient-to-r from-secondary to-blue-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative hidden lg:block h-[300px]"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Central element */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="relative w-48 h-48"
                  >
                    <div className="absolute inset-0 rounded-full border border-dashed border-secondary/30" />

                    {/* Center Icon */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10"
                    >
                      <Sparkles className="w-10 h-10 text-secondary" />
                    </motion.div>

                    {/* Orbiting Elements */}
                    {[...Array(3)].map((_, index) => {
                      const angle = (index * Math.PI * 2) / 3
                      const x = Math.cos(angle) * 100
                      const y = Math.sin(angle) * 100

                      return (
                        <motion.div
                          key={index}
                          className="absolute w-12 h-12 bg-slate-800/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10"
                          style={{
                            left: `calc(50% + ${x}px - 24px)`,
                            top: `calc(50% + ${y}px - 24px)`,
                          }}
                        >
                          {index === 0 ? (
                            <FileCode2 className="w-6 h-6 text-secondary" />
                          ) : index === 1 ? (
                            <Server className="w-6 h-6 text-secondary" />
                          ) : (
                            <Database className="w-6 h-6 text-secondary" />
                          )}
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </div>

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
