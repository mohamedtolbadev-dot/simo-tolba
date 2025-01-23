import { motion } from 'framer-motion';
import { useContext } from 'react';
import { LongContext } from './ContextProvider';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Footer = () => {
  const { language } = useContext(LongContext);
  const isArabic = language === 'ar';

  const translations = {
    en: {
      rights: 'All rights reserved.',
      email: 'Email'
    },
    ar: {
      rights: 'جميع الحقوق محفوظة.',
      email: 'البريد الإلكتروني'
    }
  };

  const t = translations[language];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary/90 py-8 px-4"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className={`text-center md:text-${isArabic ? 'right' : 'left'} mb-4 md:mb-0`}>
          <p className={`text-gray-400 ${isArabic ? 'font-arabic' : ''}`}>
            {new Date().getFullYear()} Mohamed Tolba. {t.rights}
          </p>
        </div>
        <div className={`flex gap-6 ${isArabic ? 'flex-row-reverse' : ''}`}>
          <a 
            href="https://github.com/Mohahamed99-by" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/mohamed-tolba-div/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61567673134521" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"
            aria-label="Facebook"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
          <a 
            href="mailto:mohamedtolba161@gmail.com"
            className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2"
            aria-label={t.email}
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;