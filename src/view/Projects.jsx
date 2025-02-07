import React, { useContext } from 'react';
import { LongContext } from '../components/ContextProvider';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { language, projects } = useContext(LongContext);
  const isArabic = language === 'ar';

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-950 py-24 px-4 sm:px-6 lg:px-8" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {isArabic ? "مشاريعي المميزة" : "Featured Projects"}
            </span>
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic 
              ? "مجموعة من المشاريع التي تعكس مهاراتي وإبداعي في تطوير تطبيقات الويب المتقدمة."
              : "A curated collection of projects that demonstrate my skills and creativity in building advanced web applications."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70">
                  <div className={`absolute bottom-4 ${isArabic ? 'left-4' : 'right-4'} flex ${isArabic ? 'flex-row-reverse' : ''} space-x-3 ${isArabic ? 'space-x-reverse' : ''}`}>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                      aria-label={isArabic ? "عرض المشروع مباشرة" : "View Live Project"}
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white p-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                      aria-label={isArabic ? "عرض مستودع GitHub" : "View GitHub Repository"}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold text-white mb-3 ${isArabic ? 'font-arabic' : ''}`}>
                  {project.title}
                </h3>
                <p className={`text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? project.descriptionAr : project.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${isArabic ? 'justify-end' : ''}`}>
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 bg-blue-500/10 text-blue-300 rounded-md text-xs font-medium ${isArabic ? 'font-arabic' : ''}`}
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