  import { useTranslations } from "next-intl";
  import { BRAND } from "@/lib/brand";
  import { ContactForm } from "./ContactForm";

  export function Contact() {
    const t = useTranslations("Contact");

    return (
      <section
        id="contact"
        className="py-[72px]"
        style={{
          background:
            "linear-gradient(180deg, var(--color-orange) 0%, var(--color-orange-deep) 100%)",
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-[1fr_0.8fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-purple-ink opacity-90">
              {t("eyebrow")}
            </p>
            <h2 className="mt-1 text-[clamp(1.55rem,3vw,2.2rem)] font-extrabold text-purple-ink">
              {t("title", { brand: BRAND.name })}
            </h2>
            <p className="mt-3 text-purple-ink/90">{t("lead")}</p>
          </div>

          {/* Contact card — white */}
          <div className="rounded-card border border-lilac/35 bg-white p-5 shadow-card-on-dark">
            <h3 className="text-xl font-bold text-purple-ink">{t("cardTitle")}</h3>
            <p className="mt-1 text-sm text-muted-on-light">{t("cardLead")}</p>
            <div className="mt-5">
              <dl className="mt-6 space-y-2 text-purple-ink/90">
              <div className="flex gap-2">
                <dt className="font-semibold">{t("labels.instagram")}</dt>
                <dd>
                  <a
                    href={BRAND.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {BRAND.instagramHandle}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">{t("labels.whatsapp")}</dt>
                <dd>{BRAND.whatsapp}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">{t("labels.email")}</dt>
                <dd>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="hover:underline"
                  >
                    {BRAND.email}
                  </a>
                </dd>
              </div>
            </dl>
              {/* <ContactForm /> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
