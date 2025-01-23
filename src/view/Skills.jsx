import { motion } from 'framer-motion';
import { DiReact, DiNodejs, DiGit, DiMysql, DiLaravel, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiExpress, SiMongodb, SiRedux, SiPostman, SiGithub } from 'react-icons/si';
import { LongContext } from '../components/ContextProvider';
import { useContext } from 'react';

const Skills = () => {
  const {language, setLanguage, tSkills} = useContext(LongContext);
  const isArabic = language === 'ar';

  const skills = [
    {
      id: 1,
      title: "HTML5",
      icon: <DiHtml5 size={40} />,
      style: "shadow-orange-500",
      level: "95%"
    },
    {
      id: 2,
      title: "CSS3",
      icon: <DiCss3 size={40} />,
      style: "shadow-blue-500",
      level: "90%"
    },
    {
      id: 3,
      title: "React",
      icon: <DiReact size={40} />,
      style: "shadow-cyan-500",
      level: "90%"
    },
    {
      id: 5,
      title: "Express.js",
      icon: <SiExpress size={40} />,
      style: "shadow-gray-500",
      level: "85%"
    },
    {
      id: 6,
      title: "Laravel",
      icon: <DiLaravel size={40} />,
      style: "shadow-red-500",
      level: "80%"
    },
    {
      id: 7,
      title: "MongoDB",
      icon: <SiMongodb size={40} />,
      style: "shadow-green-600",
      level: "85%"
    },
    {
      id: 8,
      title: "MySQL",
      icon: <DiMysql size={40} />,
      style: "shadow-blue-400",
      level: "80%"
    },
    {
      id: 9,
      title: "Git",
      icon: <DiGit size={40} />,
      style: "shadow-red-500",
      level: "90%"
    },
    {
      id: 10,
      title: "GitHub",
      icon: <SiGithub size={40} />,
      style: "shadow-gray-500",
      level: "90%"
    },
    {
      id: 11,
      title: "Redux",
      icon: <SiRedux size={40} />,
      style: "shadow-purple-500",
      level: "85%"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div name="skills" className="w-full min-h-screen bg-primary" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`pb-8 ${isArabic ? 'text-right' : 'text-left'}`}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-4xl font-bold inline border-b-4 border-secondary text-textPrimary ${isArabic ? 'font-arabic' : ''}`}
          >
            {tSkills.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`py-6 text-gray-400 ${isArabic ? 'font-arabic' : ''}`}
          >
            {tSkills.description}
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center"
        >
          {skills.map(({ id, title, icon, style, level }) => (
            <motion.div
              key={id}
              variants={item}
              className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style} bg-white/5 backdrop-blur-sm group`}
            >
              <div className="w-20 mx-auto text-secondary group-hover:text-white transition-colors duration-300">
                {icon}
              </div>
              <p className={`mt-4 text-textPrimary ${isArabic ? 'font-arabic' : ''}`}>{title}</p>
              {/* Skill Level Bar */}
              <div className="mt-3 px-4">
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: level }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`bg-secondary h-1.5 rounded-full ${isArabic ? 'float-right' : 'float-left'}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Categories */}
        <div className={`mt-20 ${isArabic ? 'text-right' : 'text-left'}`}>
          <h3 className={`text-2xl font-bold text-textPrimary mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            {tSkills.developmentCategories}
          </h3>
          <div className="space-y-6">
            <div>
              <div className={`flex ${isArabic ? 'flex-row-reverse' : ''} justify-between mb-1`}>
                <span className={`text-gray-400 ${isArabic ? 'font-arabic' : ''}`}>{tSkills.frontend}</span>
                <span className="text-secondary">90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className={`bg-secondary h-2 rounded-full ${isArabic ? 'float-right' : 'float-left'}`}
                />
              </div>
            </div>
            <div>
              <div className={`flex ${isArabic ? 'flex-row-reverse' : ''} justify-between mb-1`}>
                <span className={`text-gray-400 ${isArabic ? 'font-arabic' : ''}`}>{tSkills.backend}</span>
                <span className="text-secondary">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className={`bg-secondary h-2 rounded-full ${isArabic ? 'float-right' : 'float-left'}`}
                />
              </div>
            </div>
            <div>
              <div className={`flex ${isArabic ? 'flex-row-reverse' : ''} justify-between mb-1`}>
                <span className={`text-gray-400 ${isArabic ? 'font-arabic' : ''}`}>{tSkills.database}</span>
                <span className="text-secondary">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className={`bg-secondary h-2 rounded-full ${isArabic ? 'float-right' : 'float-left'}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
