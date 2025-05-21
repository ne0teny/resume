import React, { useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import './styles/Global.scss';

const MainApp: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { t, language } = useLanguage();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Загрузка анимации
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className="App">
      {/* Индикатор прогресса прокрутки */}
      <motion.div 
        className="progress-bar" 
        style={{ 
          scaleX, 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '5px', 
          background: 'var(--primary-color)', 
          transformOrigin: '0%', 
          zIndex: 1000 
        }} 
      />

      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.p
              key={language}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </motion.p>
          </AnimatePresence>
        </div>
      </footer>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;
