import  { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LongContext } from "../components/ContextProvider";
import {
  ExternalLink,
  Github,
  Code2,
  Globe,
  Star,
  Search,
  Eye,
  
  Calendar,
  
  Rocket,
} from "lucide-react";

const Projects = () => {
  const { language, projects } = useContext(LongContext);
  const isArabic = language === "ar";

  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Enhanced project data with categories and technologies
  const enhancedProjects = projects.map((project, index) => ({
    ...project,
    id: index + 1,
    title:
      [
        "Car Rental Platform",
        "QR Code Generator",
        "Car Website",
        "IPTV Service",
        "TexturnHub",
        "Shoe Store",
        "Riad Oasis",
        "E-commerce Platform",
        "Olive Oil Store",
        "Social Link Manager",
        "Portfolio Video Editor"
      ][index] || `Project ${index + 1}`,
    // Suppression des descriptions et technologies détaillées

    status: "completed",

    year: "2024",
  }));

  const filteredProjects = enhancedProjects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const stats = {
    total: enhancedProjects.length,
    completed: enhancedProjects.filter((p) => p.status === "completed").length,
  };

  return (
    <section
      className="relative min-h-screen flex items-center px-4 lg:px-8 py-12  overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5" />
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#ffffff02_50%,transparent_51%)] bg-[length:100px_100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,#ffffff02_50%,transparent_51%)] bg-[length:100px_100px]" />
        </div>

        {/* Floating project icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/6 text-secondary/20 text-4xl"
        >
          <Code2 size={40} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/3 right-1/6 text-secondary/20 text-4xl"
        >
          <Globe size={35} />
        </motion.div>

        {/* Dynamic accent glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 12,
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
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="space-y-10">
          {/* Enhanced Header */}
          <div className="space-y-6">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
            >
              <Rocket className="w-3.5 h-3.5 text-secondary" />
              <span className="text-xs text-slate-300 font-mono">
                Portfolio Showcase
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
                {isArabic ? "مشاريعي المميزة" : "Featured Projects"}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
                  Projects
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <div className="flex items-center gap-2 text-secondary font-mono text-sm">
                  <Eye className="w-4 h-4" />
                  <span>{stats.total} Projects</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                  <Star className="w-3.5 h-3.5" />
                  <span>{stats.completed} Completed</span>
                </div>
              </motion.div>

              <p
                className={`text-slate-300 text-base lg:text-lg max-w-3xl leading-relaxed ${
                  isArabic ? "font-arabic mr-0 ml-auto" : ""
                }`}
              >
                {isArabic
                  ? "مجموعة من المشاريع التي تعكس مهاراتي وإبداعي في تطوير تطبيقات الويب المتقدمة."
                  : "A curated collection of projects that demonstrate my skills and creativity in building modern web applications with cutting-edge technologies."}
              </p>
            </motion.div>
          </div>

          {/* Enhanced Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={
                    isArabic ? "البحث في المشاريع..." : "Search projects..."
                  }
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-8 pr-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg focus:outline-none focus:border-secondary text-slate-300 placeholder-slate-500 text-sm ${
                    isArabic ? "text-right font-arabic" : ""
                  }`}
                />
              </div>

              {/* Project Stats */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono">2024</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2
                className={`text-2xl font-bold text-white ${isArabic ? "font-arabic" : ""}`}
              >
                All Projects
              </h2>
              <div className="text-slate-400 font-mono text-xs">
                {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "project" : "projects"}
              </div>
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            

            <AnimatePresence mode="wait">
              <motion.div
                key={searchTerm}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-secondary/50 hover:bg-white/10 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-secondary/10"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700"
                        whileHover={{ scale: 1.03 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Action Buttons */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                      >
                        <div className="flex items-center gap-2">
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary hover:bg-secondary/90 text-primary rounded-md text-sm font-medium transition-all duration-300 shadow-lg"
                          >
                            <ExternalLink size={14} />
                            Live
                          </motion.a>
                          {project.githubLink && (
                            <motion.a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700/90 hover:bg-slate-600/90 text-white rounded-md text-sm font-medium transition-all duration-300 shadow-lg"
                            >
                              <Github size={14} />
                              Code
                            </motion.a>
                          )}
                        </div>
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-slate-900/80 backdrop-blur-sm text-[10px] text-secondary font-medium rounded capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-white group-hover:text-secondary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <Search className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-400 mb-1">
                  No projects found
                </h3>
                <p className="text-sm text-slate-500">
                  Try adjusting your search criteria
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
