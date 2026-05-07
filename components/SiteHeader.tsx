import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BRAND } from "@/lib/brand";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader() {
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-40 border-b border-lilac/35 bg-purple/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/#top" className="flex items-center gap-3" aria-label={BRAND.name}>
          <Image
            src="/beeanienglish.png"
            alt={BRAND.name}
            width={140}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <nav
          aria-label={t("navAriaLabel")}
          className="hidden items-center gap-7 text-sm font-medium md:flex"
        >
          <a href="#services" className="text-white/85 transition hover:text-white">
            {t("nav.services")}
          </a>
          <a href="#method" className="text-white/85 transition hover:text-white">
            {t("nav.method")}
          </a>
          <a href="#testimonials" className="text-white/85 transition hover:text-white">
            {t("nav.stories")}
          </a>
          <a href="#contact" className="text-white/85 transition hover:text-white">
            {t("nav.contact")}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-purple-ink shadow-card-on-dark transition hover:bg-orange-hover hover:-translate-y-px"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
