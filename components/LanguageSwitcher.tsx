"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      role="group"
      aria-label={t("ariaLabel")}
      className="flex items-center gap-1 text-xs font-semibold text-white/85"
    >
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => switchTo(l)}
            aria-pressed={locale === l}
            aria-current={locale === l ? "true" : undefined}
            className={
              locale === l
                ? "text-orange"
                : "text-white/70 transition hover:text-white"
            }
          >
            {l === "es" ? t("spanish") : t("english")}
          </button>
          {i < routing.locales.length - 1 && (
            <span aria-hidden="true" className="text-white/30">
              |
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
