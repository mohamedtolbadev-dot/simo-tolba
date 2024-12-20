import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Contact = () => {
   const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
   });
    const handleSubmit = (e) => {
       e.preventDefault();
       console.log(formData);
   };
    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
   };
    return (
       <section id="contact" className="relative min-h-screen bg-primary py-16 px-4 sm:px-6">
           {/* Background Elements */}
           <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-radial from-primary via-primary to-transparent opacity-40" />
           <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:6rem_4rem]" />
            <div className="max-w-6xl mx-auto">
               {/* Section Header */}
               <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5 }}
                   viewport={{ once: true }}
                   className="text-center mb-12 sm:mb-16"
               >
                   <h4 className="text-secondary font-mono text-base sm:text-lg mb-3">Get In Touch</h4>
                   <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary mb-4">
                       Let's Work Together
                   </h2>
                   <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                       Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                   </p>
               </motion.div>
                {/* Contact Content */}
               <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
                   {/* Contact Info */}
                   <motion.div
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5 }}
                       viewport={{ once: true }}
                       className="lg:col-span-2 space-y-6"
                   >
                       <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                           {/* Contact Details */}
                           <div className="space-y-6">
                               <a href="mailto:your.email@example.com" 
                                  className="flex items-center space-x-4 text-gray-400 hover:text-secondary transition-colors group"
                               >
                                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                                       <FaEnvelope className="h-5 w-5 text-secondary" />
                                   </div>
                                   <span className="text-sm sm:text-base">your.email@example.com</span>
                               </a>
                                <div className="flex items-center space-x-4 text-gray-400">
                                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                       <FaMapMarkerAlt className="h-5 w-5 text-secondary" />
                                   </div>
                                   <span className="text-sm sm:text-base">Your Location</span>
                               </div>
                                {/* Social Links */}
                               <div className="pt-6 border-t border-white/10">
                                   <h4 className="text-textPrimary font-semibold mb-4 text-sm sm:text-base">Connect With Me</h4>
                                   <div className="flex space-x-4">
                                       {[
                                           { icon: <FaGithub />, href: "https://github.com/yourusername" },
                                           { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername" },
                                           { icon: <FaTwitter />, href: "https://twitter.com/yourusername" }
                                       ].map((social, index) => (
                                           <a
                                               key={index}
                                               href={social.href}
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-secondary/10 transition-colors"
                                           >
                                               {social.icon}
                                           </a>
                                       ))}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </motion.div>
                    {/* Contact Form */}
                   <motion.div
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5 }}
                       viewport={{ once: true }}
                       className="lg:col-span-3"
                   >
                       <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                               <div>
                                   <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                       Name
                                   </label>
                                   <input
                                       type="text"
                                       id="name"
                                       name="name"
                                       value={formData.name}
                                       onChange={handleChange}
                                       className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-secondary text-gray-300 text-sm sm:text-base"
                                       required
                                   />
                               </div>
                               <div>
                                   <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                       Email
                                   </label>
                                   <input
                                       type="email"
                                       id="email"
                                       name="email"
                                       value={formData.email}
                                       onChange={handleChange}
                                       className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-secondary text-gray-300 text-sm sm:text-base"
                                       required
                                   />
                               </div>
                           </div>
                           <div>
                               <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                   Message
                               </label>
                               <textarea
                                   id="message"
                                   name="message"
                                   rows="6"
                                   value={formData.message}
                                   onChange={handleChange}
                                   className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-secondary text-gray-300 text-sm sm:text-base resize-none"
                                   required
                               />
                           </div>
                           <motion.button
                               whileHover={{ scale: 1.02 }}
                               whileTap={{ scale: 0.98 }}
                               type="submit"
                               className="w-full px-6 py-3 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-colors duration-300 font-medium text-sm sm:text-base"
                           >
                               Send Message
                           </motion.button>
                       </form>
                   </motion.div>
               </div>
           </div>
       </section>
   );
};
export default Contact;