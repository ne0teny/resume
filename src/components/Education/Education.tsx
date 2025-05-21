import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import './Education.scss';

interface EducationItem {
  id: number;
  year: string;
  icon: 'graduation' | 'award';
}

const Education: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const educationData: EducationItem[] = [
    {
      id: 1,
      year: '2025',
      icon: 'graduation'
    },
    {
      id: 2,
      year: '2019',
      icon: 'award'
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="section education">
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
              {t.education.title}
            </motion.span>
          </AnimatePresence>
        </h2>
        
        <motion.div 
          className="education__grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {educationData.map((item, i) => {
            const educationKey = Object.keys(t.education.degrees)[i];
            const educationInfo = t.education.degrees[educationKey];
            
            return (
              <motion.div 
                key={item.id} 
                className="education__card"
                variants={itemVariants}
              >
                <div className="education__icon">
                  {item.icon === 'graduation' ? <FaGraduationCap /> : <FaAward />}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={language}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="education__degree">{educationInfo.degree}</h3>
                    <div className="education__institution">{educationInfo.institution}</div>
                    {educationInfo.field && <div className="education__field">{educationInfo.field}</div>}
                  </motion.div>
                </AnimatePresence>
                <div className="education__year">
                  <FaCalendarAlt /> {item.year}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 