import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useContext, useState } from 'react';
import me from '../assets/img/Mohamed.jpg';
import { LongContext } from './ContextProvider';

const About = () => {

  const {language, setLanguage, t} = useContext(LongContext)
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
        {/* Language Switcher */}
      

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
            className={`order-1 lg:order-2 space-y-6 sm:space-y-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              {t.about} <span className="text-secondary">{t.me}</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-400 text-sm sm:text-base">
                {t.introduction}
              </p>

              <p className="text-gray-400 text-sm sm:text-base">
                {t.journey}
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">{t.techStack}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                {t.technologies.map((tech, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <span className="text-secondary">▹</span> {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={`flex gap-4 ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
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