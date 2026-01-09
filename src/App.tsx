import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </LanguageProvider>
  );
}

export default App;
