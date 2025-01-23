import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import me from '../assets/img/Mohamed.jpg';
const About = () => {
 const socialLinks = [
   {
     id: 1,
     icon: <FaGithub size={20} className="sm:w-6 sm:h-6" />,
     href: "https://github.com/yourusername",
   },
   {
     id: 2,
     icon: <FaLinkedin size={20} className="sm:w-6 sm:h-6" />,
     href: "https://linkedin.com/in/yourusername",
   },
   {
     id: 3,
     icon: <FaTwitter size={20} className="sm:w-6 sm:h-6" />,
     href: "https://twitter.com/yourusername",
   },
 ];
  return (
   <div name="about" className="w-full min-h-screen bg-primary text-textPrimary">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
         {/* Image Section */}
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="order-2 lg:order-1"
         >
           <div className="relative group">
             <div className="w-full max-w-[250px] sm:max-w-[300px] mx-auto">
               <img
                 src={me}
                 alt="Profile"
                 className="rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute -inset-0.5 bg-secondary opacity-20 blur rounded-2xl group-hover:opacity-30 transition duration-500"></div>
             </div>
           </div>
         </motion.div>
          {/* Content Section */}
         <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="order-1 lg:order-2 space-y-6 sm:space-y-8"
         >
           <h2 className="text-3xl sm:text-4xl font-bold">
             About <span className="text-secondary">Me</span>
           </h2>
           
           <div className="space-y-4 sm:space-y-6">
             <p className="text-gray-400 text-sm sm:text-base">
               Hi! I'm [Your Name], a passionate full-stack developer based in [Your Location]. 
               I enjoy creating things that live on the internet, whether that be websites, 
               applications, or anything in between.
             </p>
              <p className="text-gray-400 text-sm sm:text-base">
               My journey in web development started back in [Year] when I decided to try 
               editing custom Tumblr themes — turns out hacking together a custom reblog 
               button taught me a lot about HTML & CSS!
             </p>
           </div>
            <div className="space-y-3 sm:space-y-4">
             <h3 className="text-lg sm:text-xl font-semibold">Tech I work with:</h3>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
               <span className="flex items-center gap-2">
                 <span className="text-secondary">▹</span> JavaScript (ES6+)
               </span>
               <span className="flex items-center gap-2">
                 <span className="text-secondary">▹</span> React
               </span>
               <span className="flex items-center gap-2">
                 <span className="text-secondary">▹</span> Node.js
               </span>
               <span className="flex items-center gap-2">
                 <span className="text-secondary">▹</span> Tailwind CSS
               </span>
               <span className="flex items-center gap-2">
                 <span className="text-secondary">▹</span> MongoDB
               </span>
               <span className="flex items-center gap-2">
                 <span className="text-secondary">▹</span> TypeScript
               </span>
             </div>
           </div>
            {/* Social Links */}
           <div className="flex gap-4">
             {socialLinks.map(({ id, icon, href }) => (
               <motion.a
                 key={id}
                 href={href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-secondary transition-colors duration-300"
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
               >
                 {icon}
               </motion.a>
             ))}
           </div>
         </motion.div>
       </div>
     </div>
   </div>
 );
};
export default About;