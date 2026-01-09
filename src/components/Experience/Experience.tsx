import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import './Experience.scss';

interface ExperienceItem {
  id: number;
  company: string;
  website?: string;
}

const Experience: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Данные о компаниях, не зависящие от языка
  const companies: ExperienceItem[] = [
    {
      id: 1,
      company: 'ФИНАНСОВЫЙ ХОЛДИНГ «РЕСПУБЛИКА»'
    },
    {
      id: 2,
      company: '1st Media Group',
      website: 'fmg.kz'
    },
    {
      id: 3,
      company: 'ЧАСТНАЯ КОМПАНИЯ AI SYSTEMS LTD.'
    },
    {
      id: 4,
      company: 'Unity Consulting',
      website: 'unity-cpa.team'
    },
    {
      id: 5,
      company: 'Black Tree Gaming Ltd',
      website: 'www.nexusmods.com'
    },
    {
      id: 6,
      company: 'OLYMP'
    }
  ];

  // Массивы навыков для каждой компании
  const companySkills = [
    ['Flutter', 'Flutter Flavor', 'React Native', 'Vue.js', 'C# (ASP)', 'Python (Django)'],
    ['Flutter', 'Vue3', 'TypeScript', 'React Native', 'C# (ASP)'],
    ['React', 'React Native', 'Flutter', 'Python (FastAPI)', 'Vue3'],
    ['Vue', 'Flutter', 'PHP (Laravel)', 'React Native'],
    ['React', 'React Native', 'Flutter', 'Electron', 'Elixir'],
    ['React', 'Threejs', 'jQuery']
  ];

  // Периоды работы
  const periods = [
    'Май 2025 — Январь 2026',
    'Сентябрь 2024 — Апрель 2025',
    'Март 2024 — Август 2024',
    'Апрель 2023 — Март 2024',
    'Апрель 2022 — Март 2023',
    'Декабрь 2021 — Март 2022'
  ];

  return (
    <section id="experience" className="section experience">
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
              {t.experience.title}
            </motion.span>
          </AnimatePresence>
        </h2>
        
        <motion.div 
          className="experience__timeline"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {companies.map((item, i) => {
            const companyKey = Object.keys(t.experience.companies)[i];
            const companyInfo = t.experience.companies[companyKey];
            
            return (
              <motion.div 
                key={item.id} 
                className="experience__item"
                variants={itemVariants}
              >
                <div className="experience__icon">
                  <FaBriefcase />
                </div>
                <div className="experience__content">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={language}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="experience__title">{companyInfo.title}</h3>
                      <div className="experience__company">
                        <strong>{item.company}</strong> 
                        {item.website && (
                          <a href={`https://${item.website}`} target="_blank" rel="noopener noreferrer" className="experience__website">
                            {item.website}
                          </a>
                        )}
                      </div>
                      <div className="experience__location">{companyInfo.location}</div>
                      <div className="experience__period">
                        <FaCalendarAlt /> {periods[i]}
                      </div>
                      <p className="experience__description">
                        {companyInfo.description}
                      </p>
                      <div className="experience__skills">
                        {companySkills[i].map((skill, index) => (
                          <span key={index} className="experience__skill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 