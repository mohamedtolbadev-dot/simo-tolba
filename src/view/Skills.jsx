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
      style: "text-red-500",
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
      style: "text-red-500",
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
      title: "All Skills",
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
      title: "Tools",
      icon: <Code2 className="w-6 h-6" />,
      count: skills.filter((s) => s.category === "tools").length,
      color: "from-purple-400 to-pink-400",
    },
    {
      id: "design",
      title: "Design",
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
      className="relative min-h-screen flex items-center px-4 lg:px-8 py-12 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5" />
        </div>

        {/* Animated tech grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#ffffff02_50%,transparent_51%)] bg-[length:80px_80px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,#ffffff02_50%,transparent_51%)] bg-[length:80px_80px]" />
        </div>

        {/* Floating code symbols */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/6 text-secondary/20 text-6xl font-mono"
        >
          {"</>"}
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/6 text-secondary/20 text-4xl font-mono"
        >
          {"{}"}
        </motion.div>

        {/* Dynamic accent glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
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
        <div className="space-y-10">
          {/* Enhanced Header Section */}
          <div className="space-y-6">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span className="text-xs text-slate-300 font-mono">
                Technical Skills
              </span>
            </motion.div>

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
                {tSkills?.subtitle || "My Expertise"}
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
                  Skills &
                </motion.span>
                <br />
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary bg-size-200 animate-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Technologies
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <div className="flex items-center gap-2 text-secondary font-mono text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>Proficiency: {averageLevel}%</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{filteredSkills.length} Technologies</span>
                </div>
              </motion.div>

              <p
                className={`text-slate-300 text-base lg:text-lg max-w-3xl leading-relaxed ${
                  isArabic ? "font-arabic mr-0 ml-auto" : ""
                }`}
              >
                {tSkills?.description ||
                  "A comprehensive showcase of my technical expertise across frontend, backend, databases, and development tools."}
              </p>
            </motion.div>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            <h2
              className={`text-xl font-bold text-white ${isArabic ? "text-right font-arabic" : ""}`}
            >
              Filter by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative p-3 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "border-secondary bg-secondary/10 shadow-lg shadow-secondary/25"
                      : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div
                      className={`mx-auto w-fit ${
                        selectedCategory === category.id
                          ? "text-secondary"
                          : "text-slate-400"
                      }`}
                    >
                      {React.cloneElement(category.icon, { size: 18 })}
                    </div>
                    <div className="space-y-0.5">
                      <h3
                        className={`font-semibold text-xs ${
                          selectedCategory === category.id
                            ? "text-white"
                            : "text-slate-300"
                        }`}
                      >
                        {category.title}
                      </h3>
                      <div
                        className={`text-[10px] font-medium ${
                          selectedCategory === category.id
                            ? "text-secondary"
                            : "text-slate-400"
                        }`}
                      >
                        {category.count} skills
                      </div>
                    </div>
                  </div>
                  {selectedCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-lg"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -3 }}
                onHoverStart={() => setHoveredSkill(skill)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-3">
                  {/* Icon */}
                  <div
                    className={`${skill.style} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {React.cloneElement(skill.icon, { size: 32 })}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-base group-hover:text-secondary transition-colors duration-300">
                    {skill.title}
                  </h3>

                  {/* Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-slate-400 font-medium">
                        Proficiency
                      </span>
                      <span className="text-[10px] text-secondary font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                        className="bg-gradient-to-r from-secondary to-secondary/80 h-1.5 rounded-full shadow-lg shadow-secondary/50"
                      />
                    </div>
                  </div>

                  {/* Level indicator */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2.5 h-2.5 ${
                          i < Math.floor(skill.level / 20)
                            ? "text-secondary fill-current"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-slate-800/80 text-[10px] text-slate-400 rounded capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill.category}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill details tooltip */}
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 p-3 bg-slate-900/95 backdrop-blur-xl rounded-lg border border-white/20 shadow-xl z-50 max-w-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={hoveredSkill.style}>
                    {React.cloneElement(hoveredSkill.icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">
                      {hoveredSkill.title}
                    </h3>
                    <p className="text-slate-400 text-xs">
                      {hoveredSkill.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(hoveredSkill.level / 20)
                            ? "text-secondary fill-current"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-secondary font-bold text-sm">
                    {hoveredSkill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-center">
              <Award className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-0.5">
                {averageLevel}%
              </div>
              <div className="text-slate-400 text-xs">Average Proficiency</div>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-center">
              <Code2 className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-0.5">
                {filteredSkills.length}
              </div>
              <div className="text-slate-400 text-xs">
                Technologies Mastered
              </div>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-center">
              <TrendingUp className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-0.5">3+</div>
              <div className="text-slate-400 text-xs">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
