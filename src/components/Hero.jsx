import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import cv from '../assets/CV-Mohamed-Tolba.pdf';
import { useContext } from 'react';
import { LongContext } from './ContextProvider';

const Hero = () => {
  const { language, translationsHero } = useContext(LongContext); // Access the context

  const { greeting, description, viewProjects, downloadCV, name } = translationsHero[language]; // Get translations based on the current language

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 sm:px-10 py-16 sm:py-30 max-w-7xl mx-auto">
      {/* Animated Background Elements */}
      <motion.div 
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 -z-10 h-full w-full"
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-radial from-primary via-primary to-transparent opacity-40" />
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 sm:space-y-8"
      >
        {/* Intro Section */}
        <div className="space-y-3 sm:space-y-4">
          <motion.h4 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-secondary font-mono text-base sm:text-lg"
          >
            {greeting}
          </motion.h4>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2 sm:space-y-3"
          >
            <h1  className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold text-textPrimary">
             {name}
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 font-mono text-base sm:text-lg max-w-[600px]"
          >
            {description}
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col xs:flex-row gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-secondary text-primary font-medium rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-secondary/80 active:scale-105 transition text-sm sm:text-base"
          >
            {viewProjects}
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </a>
          <a
            href={cv}
            download
            className="group flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-white/10 text-textPrimary font-medium rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-white/10 text-sm sm:text-base"
          >
            {downloadCV}
            <HiDownload className="group-hover:translate-y-1 transition" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[25px] sm:w-[30px] h-[40px] sm:h-[50px] rounded-full border-2 border-secondary p-2">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-secondary"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
