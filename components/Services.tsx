import { useTranslations } from "next-intl";

const PROGRAM_KEYS = ["general", "conversation", "exam"] as const;

export function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="py-[72px]">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-amber">
          {t("eyebrow")}
        </p>
        <h2 className="mt-1 max-w-2xl text-[clamp(1.55rem,3vw,2.2rem)] font-extrabold text-white">
          {t("title")}
        </h2>
        <div className="mt-10 grid gap-3.5 md:grid-cols-3">
          {PROGRAM_KEYS.map((key) => (
            <article
              key={key}
              className="rounded-[14px] border border-lilac/40 bg-white p-4 shadow-card-on-dark"
            >
              <h3 className="text-lg font-bold text-purple-ink">
                {t(`programs.${key}.title`)}
              </h3>
              <p className="mt-2 text-muted-on-light">{t(`programs.${key}.body`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
