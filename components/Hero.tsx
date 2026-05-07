import { useTranslations } from "next-intl";
import { BRAND } from "@/lib/brand";

const HEX_POSITIONS: Array<[number, number]> = [
  [24, 36],
  [43.05, 36],
  [62.1, 36],
  [81.15, 36],
  [100.2, 36],
  [119.25, 36],
  [138.3, 36],
  [33.5, 52.5],
  [52.55, 52.5],
  [71.6, 52.5],
  [90.65, 52.5],
  [109.7, 52.5],
  [128.75, 52.5],
  [147.8, 52.5],
  [24, 69],
  [43.05, 69],
  [62.1, 69],
  [81.15, 69],
  [100.2, 69],
  [119.25, 69],
  [138.3, 69],
  [33.5, 85.5],
  [52.55, 85.5],
  [71.6, 85.5],
  [90.65, 85.5],
  [109.7, 85.5],
  [128.75, 85.5],
  [43.05, 102],
  [62.1, 102],
  [81.15, 102],
  [100.2, 102],
  [119.25, 102],
];

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      className="relative overflow-hidden pt-20 pb-[74px] md:pt-[84px]"
      style={{
        background:
          "linear-gradient(180deg, var(--color-purple-dark) 0%, var(--color-purple) 55%, var(--color-purple-footer) 100%)",
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Hive — top-left */}
        <svg
          className="absolute top-[-6%] left-[-12%] w-[min(92vw,540px)] h-auto max-h-[115%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 320"
          focusable="false"
        >
          <defs>
            <path
              id="heroHexShape"
              d="M0,-11 L9.526,-5.5 L9.526,5.5 L0,11 L-9.526,5.5 L-9.526,-5.5 Z"
            />
            <linearGradient
              id="heroHiveFade"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
              <stop offset="42%" stopColor="#fff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <mask id="heroHiveMask">
              <rect width="100%" height="100%" fill="url(#heroHiveFade)" />
            </mask>
          </defs>
          <g
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.15"
            mask="url(#heroHiveMask)"
          >
            {HEX_POSITIONS.map(([x, y]) => (
              <use
                key={`${x}-${y}`}
                href="#heroHexShape"
                transform={`translate(${x},${y})`}
              />
            ))}
          </g>
        </svg>

        {/* Bee — bottom-right */}
        <svg
          className="absolute bottom-[2%] right-[-4%] w-[min(46vw,280px)] h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 220 200"
          focusable="false"
        >
          <path
            d="M8 148 C48 128 92 118 138 108 C168 100 188 88 198 72"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeDasharray="7 7"
            strokeLinecap="round"
            opacity="0.92"
          />
          <g
            transform="translate(178,58) rotate(38)"
            fill="none"
            stroke="#f68b1f"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <ellipse cx="0" cy="0" rx="15" ry="10.5" />
            <line x1="-6" y1="-3" x2="-6" y2="3" />
            <line x1="0" y1="-4" x2="0" y2="4" />
            <line x1="6" y1="-3" x2="6" y2="3" />
            <circle cx="-11" cy="-5" r="5" />
            <path d="M-14 -10 L-17 -16 M-8 -10 L-5 -16" />
            <ellipse cx="-18" cy="-2" rx="10" ry="6" opacity="0.55" />
            <ellipse cx="-18" cy="4" rx="10" ry="6" opacity="0.55" />
            <path d="M12 -2 L22 -8 L26 0 L22 8 L12 2" />
            <path d="M12 2 L22 8 L26 0 L22 -8 L12 -2" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-7 px-6 md:grid-cols-[1.25fr_0.75fr] md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-amber">
            {t("eyebrow")}
          </p>
          <h1 className="mt-2 max-w-[16ch] text-[clamp(2rem,4.8vw,3.25rem)] font-extrabold leading-tight text-white">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-[56ch] text-base text-white/78 md:text-lg">
            {t("lead")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-semibold text-purple-ink shadow-card-on-dark transition hover:bg-orange-hover hover:-translate-y-px"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/90 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:-translate-y-px"
            >
              {t("ctaSecondary")}
            </a>
          </div>

          {/* Stats — white cards with purple left border accent */}
          <ul
            className="mt-8 grid gap-3"
            aria-label={t("highlightsAriaLabel")}
          >
            {(["live", "small", "community"] as const).map((key) => (
              <li
                key={key}
                className="rounded-xl border border-lilac/45 border-l-[5px] border-l-purple bg-white px-3.5 py-2.5"
              >
                <strong className="block text-[0.97rem] font-semibold text-purple-ink">
                  {t(`highlights.${key}.title`)}
                </strong>
                <span className="block text-sm text-muted-on-light">
                  {t(`highlights.${key}.body`)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Focus areas — white card */}
        <aside
          aria-label={t("asideAriaLabel")}
          className="rounded-card bg-white p-5 shadow-card-on-dark border border-lilac/35"
        >
          <h2 className="text-[1.35rem] font-bold text-purple-ink">
            {t("asideTitle")}
          </h2>
          <ul className="mt-3 mb-4 space-y-1.5 pl-4 list-disc text-muted-on-light">
            {(["speaking", "grammar", "listening", "confidence"] as const).map(
              (key) => (
                <li key={key}>{t(`asideItems.${key}`)}</li>
              ),
            )}
          </ul>
          <p className="text-sm text-muted-on-light">
            {t("followUs")}{" "}
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange underline underline-offset-[3px] hover:text-orange-hover"
            >
              {BRAND.instagramHandle}
            </a>
          </p>
        </aside>
      </div>
    </section>
  );
}
