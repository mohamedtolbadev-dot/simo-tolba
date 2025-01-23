import React, { useContext } from 'react';
import { LongContext } from '../components/ContextProvider';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { language, projects } = useContext(LongContext);
  const isArabic = language === 'ar';

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className={`text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 tracking-tight ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? "مشاريعي المميزة" : "Featured Projects"}
          </h2>
          <p className={`text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic 
              ? "مجموعة من المشاريع التي تعكس مهاراتي وإبداعي في تطوير تطبيقات الويب المتقدمة."
              : "A curated collection of projects that demonstrate my skills and creativity in building advanced web applications."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-blue-500/10 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className={`absolute bottom-4 ${isArabic ? 'left-4' : 'right-4'} flex ${isArabic ? 'flex-row-reverse' : ''} space-x-3 ${isArabic ? 'space-x-reverse' : ''} transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500`}>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                      aria-label={isArabic ? "عرض المشروع مباشرة" : "View Live Project"}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-gray-500/25"
                      aria-label={isArabic ? "عرض مستودع GitHub" : "View GitHub Repository"}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className={`text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 ${isArabic ? 'font-arabic' : ''}`}>
                  {project.title}
                </h3>
                <p className={`text-gray-300 text-sm sm:text-base mb-6 line-clamp-3 leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? project.descriptionAr : project.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${isArabic ? 'justify-end' : ''}`}>
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-lg text-xs sm:text-sm font-medium border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300 ${isArabic ? 'font-arabic' : ''}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;