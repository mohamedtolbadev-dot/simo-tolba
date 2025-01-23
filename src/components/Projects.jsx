import React, { useContext, useState } from 'react';
import { LongContext } from './ContextProvider';

const Projects = () => {
  const {language, setLanguage, projects} = useContext(LongContext)

  const isArabic = language === 'ar';

  return (
    <section className="py-20 px-4 md:px-10">
            
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{isArabic ? "مشاريعي" : "My Projects"}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {isArabic
              ? "إليك بعض مشاريعي الحديثة التي تُظهر مهاراتي وشغفي بتطوير الويب."
              : "Here are some of my recent projects that showcase my skills and passion for web development."}
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative aspect-video">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                  >
                    {isArabic ? "عرض مباشر" : "Live Demo"}
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                  >
                    {isArabic ? "المصدر على GitHub" : "GitHub"}
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {isArabic ? project.descriptionAr : project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500 bg-opacity-10 text-blue-400 rounded-full text-xs font-medium"
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
