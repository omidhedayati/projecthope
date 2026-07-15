import type { Locale } from "@/lib/i18n/types";
import { en } from "@/lib/i18n/messages/en";
import { fa } from "@/lib/i18n/messages/fa";

export const locales: Locale[] = ["en", "fa"];

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  fa: "rtl",
};

export const messages: Record<Locale, typeof en> = {
  en,
  fa,
};

export function getMessages(locale: Locale) {
  return messages[locale];
}
