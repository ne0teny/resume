import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../contexts/LanguageContext';
import './Skills.scss';

interface SkillCategory {
  id: number;
  skills: string[];
}

const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillsData: SkillCategory[] = [
    {
      id: 1,
      skills: [
        'HTML', 'CSS', 'JavaScript', 'TypeScript', 
        'React', 'Angular', 'Vue.js', 'React Native',
        'Flutter', 'Bootstrap', 'Tailwind CSS', 'SCSS'
      ]
    },
    {
      id: 2,
      skills: [
        'Git', 'Webpack', 'Vite', 'Firebase', 
        'Redux', 'Vuex', 'Node.js'
      ]
    },
    {
      id: 3,
      skills: [
        'Казахский (родной)', 'Русский (в совершенстве)', 'Английский (B1)'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section__title">
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {t.skills.title}
            </motion.span>
          </AnimatePresence>
        </h2>
        
        <motion.div 
          className="skills__container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillsData.map((category, i) => {
            // Получаем ключ категории (frontend, tools, languages)
            const categoryKey = Object.keys(t.skills.categories)[i];
            const categoryName = t.skills.categories[categoryKey as keyof typeof t.skills.categories];
            
            return (
              <motion.div 
                key={category.id} 
                className="skills__category"
                variants={categoryVariants}
              >
                <AnimatePresence mode="wait">
                  <motion.h3 
                    className="skills__category-title"
                    key={language}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {categoryName}
                  </motion.h3>
                </AnimatePresence>
                <div className="skills__list">
                  {category.skills.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="skills__item"
                      variants={skillVariants}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="skills__additional"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={language}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {t.skills.additional}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 