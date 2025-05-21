import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations, Translations } from '../utils/Translations';

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

const defaultLanguageContext: LanguageContextType = {
  language: 'ru',
  t: translations.ru,
  setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLang] = useState<Language>('ru');
  
  const setLanguage = (lang: Language) => {
    setLang(lang);
    // Можно добавить сохранение выбранного языка в localStorage
    // localStorage.setItem('language', lang);
  };
  
  const value = {
    language,
    t: translations[language],
    setLanguage,
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 