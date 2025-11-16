"use client";

import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { LongContext } from "../components/ContextProvider";
import {
  Database,
  FileCode2,
  LayoutGrid,
  Server,
  Sparkles,
  Code2,
  Palette,
  Globe,
  Zap,
  Star,
  TrendingUp,
  CheckCircle,
  Award,
} from "lucide-react";
import {
  DiReact,
  DiGit,
  DiMysql,
  DiLaravel,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiNodejs,
} from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiGithub,
  SiTailwindcss,
  SiVite,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const { language, tSkills } = useContext(LongContext);
  const isArabic = language === "ar";
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skills = [
    {
      id: 1,
      title: "HTML5",
      icon: <DiHtml5 size={40} />,
      style: "text-orange-500",
      level: 95,
      category: "frontend",
      description: "Semantic markup & modern standards",
    },
    {
      id: 2,
      title: "CSS3",
      icon: <DiCss3 size={40} />,
      style: "text-blue-500",
      level: 90,
      category: "frontend",
      description: "Advanced styling & animations",
    },
    {
      id: 3,
      title: "JavaScript",
      icon: <DiJavascript size={40} />,
      style: "text-yellow-500",
      level: 88,
      category: "frontend",
      description: "ES6+ & modern JS features",
    },
    {
      id: 4,
      title: "React",
      icon: <DiReact size={40} />,
      style: "text-cyan-500",
      level: 90,
      category: "frontend",
      description: "Hooks, Context & modern patterns",
    },
    {
      id: 5,
      title: "Tailwind CSS",
      icon: <SiTailwindcss size={40} />,
      style: "text-teal-500",
      level: 92,
      category: "frontend",
      description: "Utility-first CSS framework",
    },
    {
      id: 6,
      title: "Node.js",
      icon: <DiNodejs size={40} />,
      style: "text-green-500",
      level: 85,
      category: "backend",
      description: "Server-side JavaScript runtime",
    },
    {
      id: 7,
      title: "Express.js",
      icon: <SiExpress size={40} />,
      style: "text-gray-300",
      level: 85,
      category: "backend",
      description: "Fast & minimalist web framework",
    },
    {
      id: 8,
      title: "Laravel",
      icon: <DiLaravel size={40} />,
      style: "text-red-600",
      level: 80,
      category: "backend",
      description: "Elegant PHP web framework",
    },
    {
      id: 9,
      title: "MongoDB",
      icon: <SiMongodb size={40} />,
      style: "text-green-600",
      level: 85,
      category: "database",
      description: "NoSQL document database",
    },
    {
      id: 10,
      title: "MySQL",
      icon: <DiMysql size={40} />,
      style: "text-blue-400",
      level: 80,
      category: "database",
      description: "Relational database management",
    },
    {
      id: 11,
      title: "Git",
      icon: <DiGit size={40} />,
      style: "text-red-600",
      level: 90,
      category: "tools",
      description: "Version control system",
    },
    {
      id: 12,
      title: "GitHub",
      icon: <SiGithub size={40} />,
      style: "text-gray-300",
      level: 90,
      category: "tools",
      description: "Code collaboration platform",
    },
    {
      id: 13,
      title: "Redux",
      icon: <SiRedux size={40} />,
      style: "text-purple-500",
      level: 85,
      category: "frontend",
      description: "Predictable state container",
    },
    {
      id: 14,
      title: "Vite",
      icon: <SiVite size={40} />,
      style: "text-purple-400",
      level: 88,
      category: "tools",
      description: "Fast build tool & dev server",
    },
    {
      id: 15,
      title: "Figma",
      icon: <SiFigma size={40} />,
      style: "text-pink-500",
      level: 75,
      category: "design",
      description: "UI/UX design & prototyping",
    },
  ];

  const categories = [
    {
      id: "all",
      title: tSkills?.allSkills || "All Skills",
      icon: <Star className="w-6 h-6" />,
      count: skills.length,
      color: "from-white to-slate-300",
    },
    {
      id: "frontend",
      title: tSkills?.frontend || "Frontend",
      icon: <LayoutGrid className="w-6 h-6" />,
      count: skills.filter((s) => s.category === "frontend").length,
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: "backend",
      title: tSkills?.backend || "Backend",
      icon: <Server className="w-6 h-6" />,
      count: skills.filter((s) => s.category === "backend").length,
      color: "from-green-400 to-emerald-400",
    },
    {
      id: "database",
      title: tSkills?.database || "Database",
      icon: <Database className="w-6 h-6" />,
      count: skills.filter((s) => s.category === "database").length,
      color: "from-orange-400 to-yellow-400",
    },
    {
      id: "tools",
      title: tSkills?.tools || "Tools",
      icon: <Code2 className="w-6 h-6" />,
      count: skills.filter((s) => s.category === "tools").length,
      color: "from-purple-400 to-pink-400",
    },
    {
      id: "design",
      title: tSkills?.design || "Design",
      icon: <Palette className="w-6 h-6" />,
      count: skills.filter((s) => s.category === "design").length,
      color: "from-pink-400 to-rose-400",
    },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const averageLevel = Math.round(
    filteredSkills.reduce((acc, skill) => acc + skill.level, 0) /
      filteredSkills.length,
  );

  return (
    <section
      id="skills"
      name="skills"
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
                {tSkills?.technicalSkills || "Technical Skills"}
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
                  {tSkills?.skillsTitle || "Skills &"}
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
                  {tSkills?.technologiesTitle || "Technologies"}
                </motion.span>
              </h1>
            </motion.div>

            {/* Stats & Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-6 flex-wrap text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <TrendingUp className="w-4 h-4" />
                  <span>{averageLevel}% {tSkills?.avg || "Avg"}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="w-4 h-4" />
                  <span>{filteredSkills.length} {tSkills?.skillsCount || "Skills"}</span>
                </div>
              </div>

              <p className={`text-slate-400 text-lg max-w-2xl leading-relaxed ${isArabic ? "font-arabic" : ""}`}>
                {tSkills?.description ||
                  "A comprehensive showcase of my technical expertise across frontend, backend, databases, and development tools."}
              </p>
            </motion.div>
          </div>

          {/* Clean Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border-t border-slate-800 pt-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300"
                  }`}
                >
                  {React.cloneElement(category.icon, { size: 16 })}
                  <span className="text-sm font-medium">{category.title}</span>
                  <span className="text-xs opacity-60">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Clean Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.02, duration: 0.4 }}
                whileHover={{ y: -4 }}
                onHoverStart={() => setHoveredSkill(skill)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="group space-y-3 p-4 border border-slate-800 hover:border-slate-700 transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div className={`${skill.style} transition-all duration-300 group-hover:scale-110`}>
                  {React.cloneElement(skill.icon, { size: 32 })}
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-sm">
                  {skill.title}
                </h3>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Level</span>
                    <span className="text-slate-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.02, ease: "easeOut" }}
                      className="h-full bg-red-600"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Simple Tooltip */}
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/95 backdrop-blur-xl border border-slate-700 z-50"
            >
              <p className="text-white text-sm font-medium">
                {hoveredSkill.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
