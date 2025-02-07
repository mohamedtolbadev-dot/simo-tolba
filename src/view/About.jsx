import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useContext } from 'react';
import { LongContext } from '../components/ContextProvider';
import mohamed from '../assets/img/Mohamed.jpg';

const About = () => {
  const { language, t } = useContext(LongContext);

  const socialLinks = [
    {
      id: 1,
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      id: 2,
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      id: 3,
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-primary text-textPrimary py-20">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-secondary/10 p-2">
                <img
                  src={mohamed}
                  alt="Profile"
                  className="rounded-xl w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-700 ease-out transform hover:scale-[1.02]"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/0 via-secondary/10 to-secondary/0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`space-y-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {/* Section Title */}
            <div className="space-y-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-secondary rounded-full"
              />
              <h2 className="text-4xl lg:text-5xl font-bold">
                {t.about} <span className="text-secondary">{t.me}</span>
              </h2>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                {t.introduction}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
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