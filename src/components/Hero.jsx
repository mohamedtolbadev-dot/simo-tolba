"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Download,
  Code2,
  Terminal,
  Github,
  Linkedin,
  Cpu,
  Database,
  Globe,
  Zap,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { useContext } from "react";
import { LongContext } from "./ContextProvider";
import { Link } from "react-router-dom";
import { BsBrowserChrome } from "react-icons/bs";
import { SiReact, SiTailwindcss, SiLaravel, SiMysql } from "react-icons/si";
import PalestinianFlag from "./PalestinianFlag";

const Hero = () => {
  const { language, translationsHero } = useContext(LongContext);
  const isArabic = language === "ar";

  const { greeting, description, viewProjects, downloadCV, name } =
    translationsHero[language];

  // Tech stack icons with modern colors
  const techStack = [
    { Icon: SiReact, color: "#61DAFB", name: "React" },
    { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwindcss" },
    { Icon: SiLaravel, color: "#FF2D20", name: "Laravel" },
    { Icon: SiMysql, color: "#00758F", name: "MySQL" },
  ];

  return (
    <section
      id="home"
      name="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Minimal Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-800/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-700/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto w-full py-20">
        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`lg:col-span-7 space-y-10 ${isArabic ? "text-right" : "text-left"}`}
          >
            {/* Minimalist Status */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 bg-red-600 rounded-full"
              />
              <span className="text-slate-400 text-sm font-medium tracking-wider uppercase">
                {translationsHero[language]?.availableForWork || "Available for work"}
              </span>
            </motion.div>

            {/* Strong Typography Header */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1
                  className={`text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.1] tracking-tight ${isArabic ? "font-arabic" : ""}`}
                  style={{ perspective: "1000px" }}
                >
                  <motion.span 
                    initial={{ opacity: 0, x: -20, rotateX: -15 }}
                    animate={{ opacity: 1, x: 0, rotateX: 0 }}
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
                    {name.split(" ")[0]}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: -20, rotateX: 15 }}
                    animate={{ opacity: 1, x: 0, rotateX: 0 }}
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
                    {name.split(" ")[1]}
                  </motion.span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="space-y-6"
              >
                <p 
                  className="text-slate-400 text-sm font-bold tracking-[0.2em] uppercase"
                  style={{
                    textShadow: `
                      0.5px 0.5px 0px rgba(220, 38, 38, 0.2),
                      1px 1px 0px rgba(220, 38, 38, 0.15),
                      1.5px 1.5px 0px rgba(220, 38, 38, 0.1),
                      2px 2px 5px rgba(0, 0, 0, 0.3)
                    `
                  }}
                >
                  Full-Stack Developer
                </p>
                
                <p
                  className={`text-slate-400 text-lg sm:text-xl max-w-xl leading-relaxed ${isArabic ? "font-arabic" : ""}`}
                >
                  {description}
                </p>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 border border-green-500/30 rounded-md"
                >
                  <span className="text-xs text-green-400 font-medium tracking-wide">
                    🇵🇸 FREE PALESTINE
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Minimal Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              {techStack.map(({ Icon, color, name }, index) => (
                <motion.div 
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors" style={{ color }} />
                  <span className="text-sm text-slate-600 group-hover:text-slate-400 transition-colors">{name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Clean CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className={`flex flex-wrap items-center gap-4 pt-4 ${isArabic ? "flex-row-reverse" : ""}`}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                >
                  <span>{viewProjects}</span>
                  {isArabic ? 
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> : 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  }
                </Link>
              </motion.div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="/assets/MohamedTolbaCV.pdf"
                download="MohamedTolbaCV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-red-600/30 text-slate-400 font-semibold hover:border-red-600/50 hover:text-slate-300 transition-all duration-300"
              >
                <span>{translationsHero[language]?.downloadCV || translationsHero.en.downloadCV}</span>
                <Download className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Side Info Panel - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="space-y-8 border-l border-slate-800 pl-8">
              {/* Animated Tech Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-4"
              >
                <div 
                  className="text-xs text-slate-400 tracking-wider uppercase font-bold"
                  style={{
                    textShadow: `
                      0.5px 0.5px 0px rgba(220, 38, 38, 0.2),
                      1px 1px 0px rgba(220, 38, 38, 0.15),
                      1.5px 1.5px 5px rgba(0, 0, 0, 0.3)
                    `
                  }}
                >
                  {translationsHero[language]?.techStackTitle || "Tech Stack"}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* React */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-3 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer group"
                  >
                    <SiReact className="w-8 h-8 text-[#61DAFB]" />
                    <span className="text-xs text-slate-600 group-hover:text-slate-400">React</span>
                  </motion.div>

                  {/* Tailwind */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-3 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer group"
                  >
                    <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />
                    <span className="text-xs text-slate-600 group-hover:text-slate-400">Tailwind</span>
                  </motion.div>

                  {/* Laravel */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-3 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer group"
                  >
                    <SiLaravel className="w-8 h-8 text-[#FF2D20]" />
                    <span className="text-xs text-slate-600 group-hover:text-slate-400">Laravel</span>
                  </motion.div>

                  {/* MySQL */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-3 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer group"
                  >
                    <SiMysql className="w-8 h-8 text-[#00758F]" />
                    <span className="text-xs text-slate-600 group-hover:text-slate-400">MySQL</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Development Flow */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="space-y-4 pt-6 border-t border-slate-800"
              >
                <div 
                  className="text-xs text-slate-400 tracking-wider uppercase font-bold"
                  style={{
                    textShadow: `
                      0.5px 0.5px 0px rgba(220, 38, 38, 0.2),
                      1px 1px 0px rgba(220, 38, 38, 0.15),
                      1.5px 1.5px 5px rgba(0, 0, 0, 0.3)
                    `
                  }}
                >
                  {translationsHero[language]?.developmentFlowTitle || "Development Flow"}
                </div>
                <div className="relative space-y-3">
                  {/* Flow Line */}
                  <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-red-600 via-red-600 to-transparent" />
                  
                  {/* Step 1: Frontend */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-1 w-4 h-4 border-2 border-red-600 bg-slate-950 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{translationsHero[language]?.uiuxDesign || "UI/UX Design"}</div>
                      <div className="text-slate-600 text-xs">{translationsHero[language]?.uiuxDesc || "Figma, Wireframes"}</div>
                    </div>
                  </motion.div>

                  {/* Step 2: Frontend Dev */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-1 w-4 h-4 border-2 border-red-600 bg-slate-950 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{translationsHero[language]?.frontendBuild || "Frontend Build"}</div>
                      <div className="text-slate-600 text-xs">{translationsHero[language]?.frontendDesc || "React, Tailwind"}</div>
                    </div>
                  </motion.div>

                  {/* Step 3: Backend */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-1 w-4 h-4 border-2 border-red-600 bg-slate-950 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{translationsHero[language]?.backendApi || "Backend API"}</div>
                      <div className="text-slate-600 text-xs">{translationsHero[language]?.backendDesc || "Laravel, Node.js"}</div>
                    </div>
                  </motion.div>

                  {/* Step 4: Database */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.9, duration: 0.5 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-1 w-4 h-4 border-2 border-red-600 bg-slate-950 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{translationsHero[language]?.database || "Database"}</div>
                      <div className="text-slate-600 text-xs">{translationsHero[language]?.databaseDesc || "MySQL, MongoDB"}</div>
                    </div>
                  </motion.div>

                  {/* Step 5: Deploy */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.1, duration: 0.5 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-1 w-4 h-4 border-2 border-red-600 bg-red-600 rounded-full" />
                    <div>
                      <div className="text-white text-sm font-semibold">{translationsHero[language]?.deployTest || "Deploy & Test"}</div>
                      <div className="text-slate-600 text-xs">{translationsHero[language]?.productionReady || "Production Ready"}</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity cursor-pointer"
          >
            <ChevronDown className="w-5 h-5 text-slate-400" />
            <span 
              className="text-xs text-slate-600 tracking-widest uppercase font-bold"
              style={{
                textShadow: `
                  0.5px 0.5px 0px rgba(220, 38, 38, 0.2),
                  1px 1px 0px rgba(220, 38, 38, 0.15),
                  1.5px 1.5px 3px rgba(0, 0, 0, 0.3)
                `
              }}
            >
              {translationsHero[language]?.scroll || "Scroll"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
