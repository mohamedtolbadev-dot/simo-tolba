import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Download, Code2, Terminal } from 'lucide-react';
import { useContext } from 'react';
import { LongContext } from './ContextProvider';
import { Link } from 'react-router-dom';
import { BsBrowserChrome } from 'react-icons/bs';

const Hero = () => {
  const { language, translationsHero } = useContext(LongContext);
  const isArabic = language === 'ar';

  const { greeting, description, viewProjects, downloadCV, name } = translationsHero[language];

  return (
    <section
      className="relative min-h-screen flex items-center px-6 lg:px-12 py-20"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#4f4f4f1a_49%,#4f4f4f1a_51%,transparent_52%)] bg-[length:20px_20px]" />
      </motion.div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`space-y-8 lg:space-y-12 ${isArabic ? 'text-right' : 'text-left'}`}
          >
            {/* Header Section */}
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className={`inline-block text-secondary font-mono text-lg px-4 py-2 rounded-full bg-secondary/10 ${
                  isArabic ? 'font-arabic' : ''
                }`}
              >
                {greeting}
              </motion.span>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <h1
                  className={`text-5xl lg:text-7xl font-bold bg-gradient-to-r from-textPrimary to-textPrimary/80 bg-clip-text text-transparent ${
                    isArabic ? 'font-arabic' : ''
                  }`}
                >
                  {name}
                </h1>

                <p
                  className={`text-gray-400 text-lg lg:text-xl max-w-2xl leading-relaxed ${
                    isArabic ? 'font-arabic mr-0 ml-auto' : ''
                  }`}
                >
                  {description}
                </p>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className={`flex flex-col sm:flex-row gap-4 ${isArabic ? 'items-end' : 'items-start'}`}
            >
              <Link
                to="/projects"
                className={`group inline-flex items-center gap-3 px-8 py-4 bg-secondary text-primary rounded-lg font-medium shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 ${
                  isArabic ? 'flex-row-reverse font-arabic' : ''
                }`}
              >
                {viewProjects}
                {isArabic ? (
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </Link>

              <a
                href={'/assets/MohamedTolbaCV.pdf'}
                download
                className={`group inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-textPrimary rounded-lg font-medium backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${
                  isArabic ? 'flex-row-reverse font-arabic' : ''
                }`}
              >
                {downloadCV}
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Developer Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-96 h-96">
              {/* Central Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/30"
              />

              {/* Center Icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center"
              >
                <Code2 className="w-12 h-12 text-secondary" />
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                {/* Terminal Icon */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Terminal className="w-8 h-8 text-secondary" />
                </motion.div>

                {/* Browser Icon */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <BsBrowserChrome className="w-8 h-8 text-secondary" />
                </motion.div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                  className="absolute w-2 h-2 rounded-full bg-secondary"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12 lg:bottom-16"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-secondary/80 text-sm font-mono">Scroll</span>
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1 h-10 rounded-full bg-gradient-to-b from-secondary to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;