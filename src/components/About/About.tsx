import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import './About.scss';

const About: React.FC = () => {
  const { t } = useLanguage();

  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section about">
      <div className="container about__container">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="about__title">{t.about.title}</h1>
          <h2 className="about__subtitle">{t.about.subtitle}</h2>
          <p className="about__description">{t.about.description}</p>

          <div className="about__buttons">
            <button className="btn" onClick={scrollToExperience}>
              {t.about.myExperience}
            </button>
            <button className="btn btn--outline">
              <a href="mailto:sailaukhanbeknur@gmail.com">{t.about.contact}</a>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="about__scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p>{t.about.scrollDown}</p>
          <div className="about__scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
