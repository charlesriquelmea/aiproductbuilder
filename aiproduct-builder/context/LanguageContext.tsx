"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { language, Language } from '@/lib/language';

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, variables?: Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (path: string, variables?: Record<string, string>): string => {
    const keys = path.split('.');
    let result: any = language[lang];
    
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        console.warn(`Translation key not found: ${path} for language: ${lang}`);
        return path;
      }
    }
    
    if (typeof result === 'string' && variables) {
      Object.entries(variables).forEach(([key, value]) => {
        result = result.replace(new RegExp(`{{${key}}}`, 'g'), value);
      });
    }

    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
