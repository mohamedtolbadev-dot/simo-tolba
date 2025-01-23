import { motion } from 'framer-motion';
const Footer = () => {
 return (
   <motion.footer 
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.5 }}
     className="bg-primary/90 py-8 px-4"
   >
     <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
       <div className="text-center md:text-left mb-4 md:mb-0">
         <p className="text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
       </div>
       <div className="flex gap-6">
         <a 
           href="https://github.com/yourusername" 
           target="_blank" 
           rel="noopener noreferrer"
           className="text-gray-400 hover:text-blue-500 transition-colors"
         >
           GitHub
         </a>
         <a 
           href="https://linkedin.com/in/yourusername" 
           target="_blank" 
           rel="noopener noreferrer"
           className="text-gray-400 hover:text-blue-500 transition-colors"
         >
           LinkedIn
         </a>
         <a 
           href="mailto:your.email@example.com"
           className="text-gray-400 hover:text-blue-500 transition-colors"
         >
           Email
         </a>
       </div>
     </div>
   </motion.footer>
 );
};
export default Footer;