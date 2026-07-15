"use client";

import { ReactNode, useEffect } from "react";
import { localeDirection } from "@/lib/i18n";
import { useLocaleStore } from "@/stores/locale-store";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useLocaleStore((state) => state.locale);
  const hydrate = useLocaleStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    const direction = localeDirection[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  return <>{children}</>;
}
