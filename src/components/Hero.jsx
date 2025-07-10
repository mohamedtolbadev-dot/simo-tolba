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
} from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { LongContext } from "./ContextProvider";
import { Link } from "react-router-dom";
import { BsBrowserChrome } from "react-icons/bs";
import { SiReact, SiTailwindcss, SiLaravel, SiMysql } from "react-icons/si";

const Hero = () => {
  const { language, translationsHero } = useContext(LongContext);
  const isArabic = language === "ar";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { greeting, description, viewProjects, downloadCV, name } =
    translationsHero[language];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Tech stack icons with colors
  const techStack = [
  { Icon: SiReact, color: "#61DAFB", name: "React" },         // ✅ صحيح
  { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwindcss" }, // ❌ كانت "#F7DF1E" (ديال JavaScript) => ✅ صلحناها
  { Icon: SiLaravel, color: "#FF2D20", name: "Laravel" },     // ❌ كانت "#339933" (ديال Node.js) => ✅ صلحناها
  { Icon: SiMysql, color: "#00758F", name: "MySQL" },         // ❌ كانت "#47A248" (ديال MongoDB) => ✅ صلحناها
];


  return (
    <section
      className="relative min-h-screen flex items-start px-4 lg:px-8 pt-32 pb-16 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5" />
        </div>

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute w-[800px] h-[800px] bg-gradient-conic from-secondary/20 via-transparent to-primary/20 rounded-full blur-3xl animate-spin"
            style={{
              left: mousePosition.x / 10,
              top: mousePosition.y / 10,
              animationDuration: "30s",
            }}
          />
        </div>

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#ffffff03_50%,transparent_51%)] bg-[length:60px_60px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,#ffffff03_50%,transparent_51%)] bg-[length:60px_60px]" />
        </div>

        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full blur-sm"
        />

        {/* Dynamic accent glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
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
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Enhanced Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`space-y-8 ${isArabic ? "text-right" : "text-left"}`}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-300 font-mono">
                Available for work
              </span>
            </motion.div>

            {/* Header Section */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2"
              >
                <div
                  className={`h-px w-12 bg-gradient-to-r from-secondary to-transparent ${isArabic ? "order-2" : "order-1"}`}
                ></div>
                <span
                  className={`text-secondary font-mono text-base tracking-wider ${isArabic ? "order-1 font-arabic" : "order-2"}`}
                >
                  {greeting}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <h1
                  className={`text-4xl lg:text-6xl font-bold text-white leading-tight ${isArabic ? "font-arabic" : ""}`}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {name.split(" ")[0]}
                  </motion.span>
                  <br />
                  <motion.span
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary bg-size-200 animate-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {name.split(" ")[1]}
                  </motion.span>
                </h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-secondary font-mono text-lg">
                    <Zap className="w-5 h-5" />
                    <span>Full-Stack Developer</span>
                  </div>
                  <p
                    className={`text-slate-300 text-xl lg:text-2xl max-w-2xl leading-relaxed ${isArabic ? "font-arabic mr-0 ml-auto" : ""}`}
                  >
                    {description}
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
                <Code2 className="w-4 h-4" />
                <span>Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.map(({ Icon, color, name }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-2 px-2 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg group hover:border-white/20 transition-all duration-300"
                  >
                    <Icon
                      className="w-4 h-4 group-hover:scale-110 transition-transform"
                      style={{ color }}
                    />
                    <span className="text-xs text-slate-300 font-medium">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className={`flex flex-col sm:flex-row gap-4 ${isArabic ? "items-end" : "items-start"}`}
            >
              <Link
                to="/projects"
                className={`group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-lg font-semibold text-base shadow-xl shadow-secondary/25 hover:shadow-secondary/40 transition-all duration-300 overflow-hidden ${isArabic ? "flex-row-reverse font-arabic" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">{viewProjects}</span>
                {isArabic ? (
                  <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform relative z-10" />
                ) : (
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                )}
              </Link>

              <a
                href="/assets/MohamedTolbaCV.pdf"
                download="MohamedTolbaCV.pdf"
                className={`group relative inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg font-semibold text-base backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden ${isArabic ? "flex-row-reverse font-arabic" : ""}`}
                aria-label={
                  translationsHero[language]?.downloadCV ||
                  translationsHero.en.downloadCV
                }
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">
                  {translationsHero[language]?.downloadCV ||
                    translationsHero.en.downloadCV}
                </span>
                <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform relative z-10" />
              </a>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Outer rotating rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-white/10"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-8 rounded-full border border-secondary/30"
                />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-16 rounded-full border border-white/20"
                />

                {/* Center interactive element */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                    rotateY: { duration: 8, repeat: Number.POSITIVE_INFINITY },
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-secondary/30 via-primary/20 to-secondary/30 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/20 shadow-2xl"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Code2 className="w-16 h-16 text-white drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                {/* Orbiting tech icons */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  {/* Terminal */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-800/90 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20 shadow-xl"
                    whileHover={{ scale: 1.2, y: -5 }}
                  >
                    <Terminal className="w-10 h-10 text-secondary" />
                  </motion.div>

                  {/* Database */}
                  <motion.div
                    className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-800/90 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20 shadow-xl"
                    whileHover={{ scale: 1.2, x: 5 }}
                  >
                    <Database className="w-10 h-10 text-secondary" />
                  </motion.div>

                  {/* Browser */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 bg-slate-800/90 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20 shadow-xl"
                    whileHover={{ scale: 1.2, y: 5 }}
                  >
                    <BsBrowserChrome className="w-10 h-10 text-secondary" />
                  </motion.div>

                  {/* Globe */}
                  <motion.div
                    className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-800/90 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20 shadow-xl"
                    whileHover={{ scale: 1.2, x: -5 }}
                  >
                    <Globe className="w-10 h-10 text-secondary" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Enhanced floating code snippets */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute top-1/4 -left-16 p-4 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl max-w-[250px]"
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-xs text-slate-300 font-mono">
                  <code>{`const developer = {
  name: "Mohamed",
  skills: ["React", "Node"],
  status: "available"
}`}</code>
                </pre>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute bottom-1/4 -right-16 p-4 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl max-w-[250px]"
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-xs text-slate-300 font-mono">
                  <code>{`function buildApps() {
  return {
    web: "React",
    api: "Node.js",
    db: "MySQL"
  }
}`}</code>
                </pre>
              </motion.div>

              {/* Enhanced floating particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    delay: i * 0.1,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-primary"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-slate-400 text-sm font-mono group-hover:text-secondary transition-colors">
              Scroll to explore
            </span>
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-6 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
            >
              <motion.div
                animate={{
                  y: [0, 16, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 rounded-full bg-gradient-to-b from-secondary to-primary"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
