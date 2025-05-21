import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import './Header.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleNavClick = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header__container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo__text">PORTFOLIO</span>
          <span className="logo__dot"></span>
        </motion.div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <motion.ul 
            className="nav__list"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="nav__animated-container">
              <motion.li variants={itemVariants}>
                <a href="#about" onClick={() => handleNavClick('about')}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={language}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.header.about}
                    </motion.span>
                  </AnimatePresence>
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#experience" onClick={() => handleNavClick('experience')}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={language}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.header.experience}
                    </motion.span>
                  </AnimatePresence>
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#education" onClick={() => handleNavClick('education')}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={language}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.header.education}
                    </motion.span>
                  </AnimatePresence>
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#skills" onClick={() => handleNavClick('skills')}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={language}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.header.skills}
                    </motion.span>
                  </AnimatePresence>
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#contact" onClick={() => handleNavClick('contact')}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={language}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.header.contact}
                    </motion.span>
                  </AnimatePresence>
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button className="btn btn--outline">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={language}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.header.resume}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </motion.li>
            </div>
            <motion.li variants={itemVariants} className="language-switcher">
              <button className="language-btn" onClick={toggleLanguage}>
                <FaGlobe />
                <motion.span
                  key={language}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >{language.toUpperCase()}</motion.span>
              </button>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 