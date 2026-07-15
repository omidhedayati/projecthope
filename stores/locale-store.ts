"use client";

import { create } from "zustand";
import type { Locale } from "@/lib/i18n/types";

type LocaleState = {
  locale: Locale;
  hydrated: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  hydrate: () => void;
};

const STORAGE_KEY = "project-hope-locale";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "fa") return stored;

  if (window.navigator.language.toLowerCase().startsWith("fa")) {
    return "fa";
  }

  return "en";
}

export const useLocaleStore = create<LocaleState>((set, get) => ({
  locale: "en",
  hydrated: false,
  setLocale: (locale) => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    set({ locale });
  },
  toggleLocale: () => {
    const next = get().locale === "en" ? "fa" : "en";
    get().setLocale(next);
  },
  hydrate: () => {
    set({ locale: readStoredLocale(), hydrated: true });
  },
}));
