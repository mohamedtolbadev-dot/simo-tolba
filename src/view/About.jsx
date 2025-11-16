"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Globe,
  Palette,
  User,
  MapPin,
  Zap,
  Target,
  Lightbulb,
} from "lucide-react";
import React, { useContext, useState } from "react";
import { LongContext } from "./../components/ContextProvider";
import { Link } from "react-scroll";

const About = () => {
  const { language, t } = useContext(LongContext);
  const isArabic = language === "ar";
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: isArabic ? (t.frontendDevelopment || "تطوير الواجهة الأمامية") : "Frontend Development",
      icon: <Code2 />,
      level: 90,
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: isArabic ? (t.uiuxDesignSkill || "تصميم واجهة المستخدم") : "UI/UX Design",
      icon: <Palette />,
      level: 85,
      color: "from-purple-500 to-pink-400",
    },
    {
      name: isArabic ? (t.backendDevelopment || "تطوير الواجهة الخلفية") : "Backend Development",
      icon: <Database />,
      level: 80,
      color: "from-green-500 to-emerald-400",
    },
    {
      name: isArabic ? (t.webTechnologies || "تقنيات الويب") : "Web Technologies",
      icon: <Globe />,
      level: 88,
      color: "from-orange-500 to-yellow-400",
    },
  ];

  const personalValues = [
    {
      icon: <Lightbulb />,
      title: isArabic ? t.innovationTitle || "الابتكار" : "Innovation",
      description: isArabic ? t.innovationDesc || "استكشاف مستمر لأحدث التقنيات" : "Always exploring new technologies",
    },
    {
      icon: <Target />,
      title: isArabic ? t.precisionTitle || "الدقة" : "Precision",
      description: isArabic ? t.precisionDesc || "اهتمام بالتفاصيل في كل مشروع" : "Attention to detail in every project",
    },
    {
      icon: <Zap />,
      title: isArabic ? t.performanceTitle || "الأداء" : "Performance",
      description: isArabic ? t.performanceDesc || "حلول محسّنة وسريعة" : "Optimized and fast solutions",
    },
  ];

  return (
    <section
      id="about"
      name="about"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Minimal Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-slate-700/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`lg:col-span-7 space-y-10 ${isArabic ? "text-right" : "text-left"}`}
          >
            {/* Minimal Status */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-slate-400 text-sm font-medium tracking-wider uppercase">
                {t.aboutMe || "About Me"}
              </span>
            </motion.div>

            {/* Strong Typography Header */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1
                  className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight ${isArabic ? "font-arabic" : ""}`}
                  style={{ perspective: "1000px" }}
                >
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
                    {t.about || "About"}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: -30, rotateX: 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="block text-slate-500"
                    style={{
                      textShadow: `
                        2px 2px 0px rgba(100, 116, 139, 0.4),
                        4px 4px 0px rgba(100, 116, 139, 0.3),
                        6px 6px 0px rgba(100, 116, 139, 0.2),
                        8px 8px 20px rgba(0, 0, 0, 0.5)
                      `,
                      transform: "translateZ(30px)",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {t.me || "Me"}
                  </motion.span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>{t.location || "Fes, Morocco"}</span>
                </div>
                
                <p
                  className={`text-slate-400 text-lg sm:text-xl max-w-xl leading-relaxed ${isArabic ? "font-arabic" : ""}`}
                >
                  {t.introduction ||
                    "Hi! I'm Mohamed Tolba, a dedicated full-stack developer from Fes. I'm passionate about building things for the web, whether it's crafting dynamic websites, interactive applications, or innovative digital solutions."}
                </p>
              </motion.div>
            </div>

            {/* Journey Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className={`text-slate-500 text-base leading-relaxed max-w-xl ${isArabic ? "font-arabic" : ""}`}>
                {t.journey ||
                  "I am a graduate of the Office of Vocational Training and Employment (OFPPT), where I obtained a specialized technician diploma in the field of digital development. I have worked on academic and personal projects using a variety of technologies."}
              </p>
            </motion.div>

            {/* Personal Values - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {personalValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, borderColor: "rgba(220, 38, 38, 0.3)" }}
                  className="p-4 border border-slate-800 hover:border-red-600/30 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center text-red-600 group-hover:border-red-600/30 transition-colors">
                      {React.cloneElement(value.icon, { size: 20 })}
                    </div>
                    <div className="space-y-1 flex-1">
                      <h3 className="text-white font-semibold text-sm">
                        {value.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Clean Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors cursor-pointer"
                >
                  <span>{t.getInTouch || "Get in Touch"}</span>
                  {isArabic ? (
                    <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Side Skills Panel - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="space-y-8 border-l border-slate-800 pl-8">
              {/* Skills */}
              <div className="space-y-6">
                <div className="text-xs text-slate-600 tracking-wider uppercase">{t.expertise || "Expertise"}</div>
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 4 }}
                    className="space-y-2 cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-slate-600">
                          {React.cloneElement(skill.icon, { size: 18 })}
                        </div>
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-slate-500 text-xs font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-red-600"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
