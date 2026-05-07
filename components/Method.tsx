import { useTranslations } from "next-intl";

const STEP_KEYS = ["placement", "practice", "feedback"] as const;
const REASON_KEYS = ["friendly", "personalized", "speaking", "motivation"] as const;

export function Method() {
  const t = useTranslations("Method");

  return (
    <section id="method" className="py-[72px] bg-black/14">
      <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-[1fr_0.8fr] md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-amber">
            {t("eyebrow")}
          </p>
          <h2 className="mt-1 text-[clamp(1.55rem,3vw,2.2rem)] font-extrabold text-white">
            {t("title")}
          </h2>
          <ol className="mt-3 space-y-4 pl-5 list-decimal">
            {STEP_KEYS.map((key) => (
              <li key={key}>
                <h3 className="text-lg font-semibold text-white">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="mt-1.5 text-white/78">{t(`steps.${key}.body`)}</p>
              </li>
            ))}
          </ol>
        </div>
        <aside className="rounded-card bg-orange/95 p-5 text-purple-ink shadow-card-on-dark">
          <h3 className="text-xl font-bold">{t("reasonsTitle")}</h3>
          <ul className="mt-3 space-y-2.5 pl-4 list-disc">
            {REASON_KEYS.map((key) => (
              <li key={key}>{t(`reasons.${key}`)}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
