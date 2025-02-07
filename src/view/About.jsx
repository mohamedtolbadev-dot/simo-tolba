import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useContext } from 'react';
import { LongContext } from '../components/ContextProvider';

const About = () => {
  const { language, t } = useContext(LongContext);
  const isArabic = language === 'ar';

  const socialLinks = [
    {
      id: 1,
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      id: 2,
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      id: 3,
      icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] bg-gradient-to-b from-primary to-primary/95 text-textPrimary py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:60px_60px]" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto">
              {/* Logo Container with Glow Effect */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-blue-600 rounded-full blur-xl sm:blur-2xl opacity-30 group-hover:opacity-50 transition duration-700" />
                <div className="relative bg-primary rounded-full p-6 sm:p-8">
                  <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" className="text-secondary" strokeWidth="2" />
                    <g fill="none" stroke="currentColor" className="text-secondary" strokeWidth="4" strokeLinecap="round">
                      <path d="M70 60 L50 100 L70 140" />
                      <path d="M130 60 L150 100 L130 140" />
                      <path d="M85 80 L115 80" />
                      <path d="M80 100 L120 100" />
                      <path d="M85 120 L115 120" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Social Links */}
              
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`space-y-6 sm:space-y-8 order-1 lg:order-2 ${isArabic ? 'text-right' : 'text-left'}`}
          >
            {/* Section Title */}
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px", sm: "100px" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-secondary rounded-full"
              />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {t.about} <span className="text-secondary">{t.me}</span>
              </h2>
            </div>
            
            {/* Content */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                {t.introduction}
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                {t.journey}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;