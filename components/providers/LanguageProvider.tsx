"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  defaultLanguage,
  languageCodes,
  siteContent,
  type LanguageCode,
} from "@/lib/site-content";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  content: (typeof siteContent)[LanguageCode];
};

const STORAGE_KEY = "coffee-time-yerevan-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguageCode(value: string): value is LanguageCode {
  return (languageCodes as readonly string[]).includes(value);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window === "undefined") {
      return defaultLanguage;
    }

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (storedLanguage && isLanguageCode(storedLanguage)) {
      return storedLanguage;
    }

    return defaultLanguage;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content: siteContent[language],
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
