"use client";

import { useLocaleStore } from "@/stores/locale-store";
import { getMessages } from "@/lib/i18n";

export function useTranslations() {
  const locale = useLocaleStore((state) => state.locale);
  return getMessages(locale);
}

export function useLocale() {
  return useLocaleStore((state) => state.locale);
}
