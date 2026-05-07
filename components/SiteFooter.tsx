import { useTranslations } from "next-intl";
import { BRAND } from "@/lib/brand";

export function SiteFooter() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-white/10 bg-purple-footer py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-white/80 md:flex-row">
        <p>{t("rights", { year: new Date().getFullYear(), brand: BRAND.name })}</p>
        <a
          href={BRAND.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/90 hover:text-orange"
        >
          {t("follow")}
        </a>
      </div>
    </footer>
  );
}
