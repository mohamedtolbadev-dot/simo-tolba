import { motion } from 'framer-motion';
import pr1 from '../assets/img/pr1.png';
import pr2 from '../assets/img/pr1.png';
import pr3 from '../assets/img/pr1.png';
const projects = [
 {
   title: "E-commerce Website",
   description: "A full-stack e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.",
   tags: ["React", "Node.js", "MongoDB", "Stripe"],
   imageUrl: pr1, // Add your image path
   liveLink: "https://your-ecommerce-site.com",
   githubLink: "https://github.com/yourusername/ecommerce"
 },
 {
   title: "Weather Dashboard",
   description: "Real-time weather application that provides detailed forecasts, interactive maps, and weather alerts using OpenWeather API.",
   tags: ["React", "API Integration", "Tailwind CSS"],
   imageUrl: pr2, // Add your image path
   liveLink: "https://your-weather-app.com",
   githubLink: "https://github.com/yourusername/weather-dashboard"
 },
 {
   title: "Task Management App",
   description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
   tags: ["React", "Firebase", "Material-UI"],
   imageUrl: pr3, // Add your image path
   liveLink: "https://your-task-app.com",
   githubLink: "https://github.com/yourusername/task-manager"
 }
];
const Projects = () => {
 return (
   <section id="projects" className="py-20 px-4 md:px-10">
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       className="max-w-6xl mx-auto"
     >
       <div className="text-center mb-12">
         <h2 className="text-4xl font-bold mb-4">My Projects</h2>
         <p className="text-gray-400 max-w-2xl mx-auto">
           Here are some of my recent projects that showcase my skills and passion for web development.
         </p>
       </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {projects.map((project, index) => (
           <motion.div
             key={index}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: index * 0.2 }}
             className="bg-primary/90 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
           >
             <div className="relative aspect-[16/9]">
               <img 
                 src={project.imageUrl} 
                 alt={project.title}
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 <a 
                   href={project.liveLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                 >
                   Live Demo
                 </a>
                 <a 
                   href={project.githubLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                 >
                   GitHub
                 </a>
               </div>
             </div>
             
             <div className="p-6">
               <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
               <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
               <div className="flex flex-wrap gap-2">
                 {project.tags.map((tag, tagIndex) => (
                   <span 
                     key={tagIndex}
                     className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium"
                   >
                     {tag}
                   </span>
                 ))}
               </div>
             </div>
           </motion.div>
         ))}
       </div>
     </motion.div>
   </section>
 );
};
export default Projects;