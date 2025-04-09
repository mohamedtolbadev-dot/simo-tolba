import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LongContext } from "../components/ContextProvider";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const { language, projects } = useContext(LongContext);
  const isArabic = language === "ar";

  return (
    <section
      className="relative min-h-screen flex items-center px-6 lg:px-12 py-24 overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#ffffff05_50%,transparent_51%)] bg-[length:40px_40px]" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className={`text-4xl sm:text-5xl font-bold text-white mb-6 ${
              isArabic ? "font-arabic" : ""
            }`}
          >
            <span className="inline-block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {isArabic ? "مشاريعي المميزة" : "Featured Projects"}
            </span>
            <span className="inline-block ml-3 h-[6px] w-12 bg-secondary"></span>
          </h2>
          <p
            className={`text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed ${
              isArabic ? "font-arabic" : ""
            }`}
          >
            {isArabic
              ? "مجموعة من المشاريع التي تعكس مهاراتي وإبداعي في تطوير تطبيقات الويب المتقدمة."
              : "A curated collection of projects that demonstrate my skills and creativity in building advanced web applications."}
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-slate-800/30 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-secondary/50 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div
                    className={`flex items-center gap-4 ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                      aria-label={isArabic ? "عرض المشروع مباشرة" : "View Live Project"}
                    >
                      <ExternalLink size={18} />
                      {isArabic ? "المشروع" : "Live"}
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                      aria-label={isArabic ? "عرض مستودع GitHub" : "View GitHub Repository"}
                    >
                      <Github size={18} />
                      {isArabic ? "الكود" : "Code"}
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-slate-400 text-sm font-mono">
            {isArabic ? "تمرير" : "Scroll"}
          </span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-10 rounded-full bg-gradient-to-b from-secondary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;