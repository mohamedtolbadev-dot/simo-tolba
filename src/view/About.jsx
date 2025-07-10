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
      name: "Frontend Development",
      icon: <Code2 />,
      level: 90,
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "UI/UX Design",
      icon: <Palette />,
      level: 85,
      color: "from-purple-500 to-pink-400",
    },
    {
      name: "Backend Development",
      icon: <Database />,
      level: 80,
      color: "from-green-500 to-emerald-400",
    },
    {
      name: "Web Technologies",
      icon: <Globe />,
      level: 88,
      color: "from-orange-500 to-yellow-400",
    },
  ];

  

  const personalValues = [
    {
      icon: <Lightbulb />,
      title: "Innovation",
      description: "Always exploring new technologies",
    },
    {
      icon: <Target />,
      title: "Precision",
      description: "Attention to detail in every project",
    },
    {
      icon: <Zap />,
      title: "Performance",
      description: "Optimized and fast solutions",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center px-4 lg:px-8 py-12 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5" />
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#ffffff03_50%,transparent_51%)] bg-[length:60px_60px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,#ffffff03_50%,transparent_51%)] bg-[length:60px_60px]" />
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-secondary/20 rotate-45"
        />

        {/* Dynamic accent glows */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
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
            scale: [1, 1.2, 1],
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

      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
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
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
              >
                <User className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs text-slate-300 font-mono">
                  About Me
                </span>
              </motion.div>

              {/* Header Section */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`h-px w-16 bg-gradient-to-r from-secondary to-transparent ${isArabic ? "order-2" : "order-1"}`}
                  ></div>
                  <span
                    className={`text-secondary font-mono text-lg tracking-wider ${isArabic ? "order-1 font-arabic" : "order-2"}`}
                  >
                    {t.about || "About"} {t.me || "Me"}
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
                      My
                    </motion.span>
                    <br />
                    <motion.span
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary bg-size-200 animate-gradient"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      Story
                    </motion.span>
                  </h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2 text-secondary font-mono text-base">
                      <MapPin className="w-4 h-4" />
                      <span>Fes, Morocco</span>
                    </div>
                    <p
                      className={`text-slate-300 text-base lg:text-lg max-w-2xl leading-relaxed ${isArabic ? "font-arabic mr-0 ml-auto" : ""}`}
                    >
                      {t.introduction ||
                        "Hi! I'm Mohamed Tolba, a dedicated full-stack developer from Fes. I'm passionate about building things for the web, whether it's crafting dynamic websites, interactive applications, or innovative digital solutions."}
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Journey Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="space-y-4"
              >
                <p
                  className={`text-slate-300 text-base leading-relaxed ${isArabic ? "font-arabic" : ""}`}
                >
                  {t.journey ||
                    "I am a graduate of the Office of Vocational Training and Employment (OFPPT), where I obtained a specialized technician diploma in the field of digital development. I have worked on academic and personal projects using a variety of technologies."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {personalValues.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 + index * 0.1 }}
                      className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg group hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="space-y-1.5">
                        <div className="text-secondary group-hover:scale-110 transition-transform">
                          {React.cloneElement(value.icon, { size: 16 })}
                        </div>
                        <h3 className="text-white font-semibold text-sm">
                          {value.title}
                        </h3>
                        <p className="text-slate-400 text-xs">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className={`flex flex-col sm:flex-row gap-4 ${isArabic ? "items-end" : "items-start"}`}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-lg font-semibold text-base shadow-xl shadow-secondary/25 hover:shadow-secondary/40 transition-all duration-300 overflow-hidden cursor-pointer ${isArabic ? "flex-row-reverse font-arabic" : ""}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Get in Touch</span>
                  {isArabic ? (
                    <ArrowRight className="w-6 h-6 group-hover:-translate-x-2 transition-transform relative z-10 rotate-180" />
                  ) : (
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                  )}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content */}
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
                      rotateY: {
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                      },
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
                      <User className="w-16 h-16 text-white drop-shadow-lg" />
                    </motion.div>
                  </motion.div>

                  {/* Orbiting skills */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 25,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    {skills.map((skill, index) => {
                      const angle = (index * Math.PI * 2) / skills.length;
                      const x = Math.cos(angle) * 120; // Réduit le rayon de 150 à 120
                      const y = Math.sin(angle) * 120;

                      return (
                        <motion.div
                          key={index}
                          className="absolute w-16 h-16 bg-slate-800/90 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20 shadow-xl cursor-pointer"
                          style={{
                            left: `calc(50% + ${x}px - 32px)`,
                            top: `calc(50% + ${y}px - 32px)`,
                          }}
                          whileHover={{ scale: 1.2, y: -5 }}
                          onHoverStart={() => setHoveredSkill(skill)}
                          onHoverEnd={() => setHoveredSkill(null)}
                        >
                          <div className="text-secondary w-6 h-6">
                            {React.cloneElement(skill.icon, { size: 20 })}
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* Skill tooltip */}
                  {hoveredSkill && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-4 left-1/2 -translate-x-1/2 p-3 bg-slate-900/95 backdrop-blur-xl rounded-lg border border-white/20 shadow-xl"
                    >
                      <div className="space-y-1.5 text-center">
                        <h3 className="text-white font-semibold text-sm">
                          {hoveredSkill.name}
                        </h3>
                        <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${hoveredSkill.level}%` }}
                            className={`h-full bg-gradient-to-r ${hoveredSkill.color} rounded-full`}
                          />
                        </div>
                        <span className="text-secondary text-xs font-medium">
                          {hoveredSkill.level}%
                        </span>
                      </div>
                    </motion.div>
                  )}

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
              </div>
            </motion.div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default About;
