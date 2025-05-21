import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import './About.scss';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div 
          className="about__content"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
              },
            },
            hidden: {
              opacity: 0,
            },
          }}
        >
          <div className="about__text full-width">
            <motion.h1 
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="about__name"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={language}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="about__first-name">{t.about.firstName}</span> <span className="about__highlight">{t.about.lastName}</span>
                </motion.span>
              </AnimatePresence>
            </motion.h1>
            
            <motion.h2 
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="about__role"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={language}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {t.about.subtitle}
                </motion.span>
              </AnimatePresence>
            </motion.h2>
            
            <motion.p 
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="about__description"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={language}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {t.about.description}
                </motion.span>
              </AnimatePresence>
            </motion.p>
            
            <motion.div 
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="about__contact"
            >
              <a href="mailto:sailaukhanbeknur@gmail.com" className="about__contact-item">
                <FaEnvelope /> sailaukhanbeknur@gmail.com
              </a>
              <a href="tel:+77765311600" className="about__contact-item">
                <FaPhone /> +7 (776) 531-1600
              </a>
            </motion.div>
            
            <motion.div 
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="about__social"
            >
              <a href="https://github.com/ne0teny" target="_blank" rel="noopener noreferrer" className="about__social-link">
                <FaGithub />
              </a>
              <a href="#linkedin" className="about__social-link">
                <FaLinkedin />
              </a>
            </motion.div>
            
            <motion.div 
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="about__cta"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={language}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="about__cta-inner"
                >
                  <a href="#contact" className="btn">{t.about.contact}</a>
                  <a href="#experience" className="btn btn--outline">{t.about.myExperience}</a>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="about__scroll-indicator">
        <div className="about__scroll-text">
          <AnimatePresence mode="wait">
            <motion.span
              key={language}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {t.about.scrollDown}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="about__scroll-line"></div>
      </div>
    </section>
  );
};

export default About; 