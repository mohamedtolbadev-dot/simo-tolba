import { useContext, useState } from "react";
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
  const { language, projects, tProjects } = useContext(LongContext);
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
        "Portfolio Video Editor",
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
      id="projects"
      name="projects"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Minimal Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-slate-700/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
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
                {tProjects?.portfolio || "Portfolio"}
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
                {!isArabic && (
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
                    My
                  </motion.span>
                )}
                <motion.span 
                  initial={{ opacity: 0, x: -30, rotateX: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className={`block ${isArabic ? "text-white" : "text-slate-500"}`}
                  style={{
                    textShadow: isArabic ? `
                      2px 2px 0px rgba(220, 38, 38, 0.3),
                      4px 4px 0px rgba(220, 38, 38, 0.2),
                      6px 6px 0px rgba(220, 38, 38, 0.1),
                      8px 8px 20px rgba(0, 0, 0, 0.5)
                    ` : `
                      2px 2px 0px rgba(100, 116, 139, 0.4),
                      4px 4px 0px rgba(100, 116, 139, 0.3),
                      6px 6px 0px rgba(100, 116, 139, 0.2),
                      8px 8px 20px rgba(0, 0, 0, 0.5)
                    `,
                    transform: "translateZ(30px)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  {isArabic ? "المشاريع" : "Projects"}
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
                  <Eye className="w-4 h-4" />
                  <span>{stats.total} {tProjects?.projectsCount || "Projects"}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Star className="w-4 h-4" />
                  <span>{stats.completed} {tProjects?.completed || "Completed"}</span>
                </div>
              </div>

              <p className={`text-slate-400 text-lg max-w-2xl leading-relaxed ${isArabic ? "font-arabic" : ""}`}>
                {tProjects?.description || "A curated collection of projects that demonstrate my skills and creativity in building modern web applications with cutting-edge technologies."}
              </p>
            </motion.div>
          </div>

          {/* Clean Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border-t border-slate-800 pt-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                <input
                  type="text"
                  placeholder={tProjects?.searchPlaceholder || "Search projects..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2.5 bg-transparent border border-slate-700 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-600 transition-colors ${
                    isArabic ? "text-right font-arabic" : ""
                  }`}
                />
              </div>
              <div className="text-slate-500 text-sm">
                {filteredProjects.length} {tProjects?.projectsCount || "projects"}
              </div>
            </div>
          </motion.div>

          {/* Clean Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={searchTerm}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Action Buttons */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                        <div className="flex items-center gap-3">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
                          >
                            <ExternalLink size={14} />
                            {tProjects?.live || "Live"}
                          </a>
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 border border-red-600/30 text-white text-sm font-semibold hover:border-red-600/50 transition-colors"
                            >
                              <Github size={14} />
                              {tProjects?.code || "Code"}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-900/50">
                      <h3 className="text-white font-semibold text-sm">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Search className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                <p className="text-slate-500 text-sm">
                  {tProjects?.noResults || "No projects found matching your search."}
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
