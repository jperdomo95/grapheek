import { useTranslations } from "next-intl";

const QUOTE_KEYS = ["adult", "parent", "club"] as const;

export function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section id="testimonials" className="py-[72px]">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-amber">
          {t("eyebrow")}
        </p>
        <h2 className="mt-1 max-w-2xl text-[clamp(1.55rem,3vw,2.2rem)] font-extrabold text-white">
          {t("title")}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {QUOTE_KEYS.map((key) => (
            <blockquote
              key={key}
              className="m-0 rounded-[14px] border border-lilac/40 bg-white p-4 shadow-card-on-dark"
            >
              <p className="text-[0.98rem] leading-relaxed text-purple-ink">
                &ldquo;{t(`quotes.${key}.body`)}&rdquo;
              </p>
              <cite className="mt-3 block text-[0.92rem] not-italic text-muted-on-light">
                — {t(`quotes.${key}.cite`)}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
