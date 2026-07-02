"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import personalData from "@/data/personal.json";
import en from "@/data/locales/en.json";
import id from "@/data/locales/id.json";
import { translate } from "@/lib/i18n";
import type { PersonalData } from "@/types/personal";
import type { Locale } from "@/types/locale";

const STORAGE_KEY = "portfolio-locale";

const messages: Record<Locale, Record<string, unknown>> = { en, id };

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  personal: PersonalData;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "id" ? "id" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setLocaleState(getInitialLocale());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, isHydrated]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) =>
      translate(messages[locale], key, params),
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      personal: personalData as PersonalData,
    }),
    [locale, setLocale, t]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
