"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { useTranslations } from "next-intl";
import Script from "next/script";
import { submitContact, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { ok: false };

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: { sitekey: string; theme?: "light" | "dark" | "auto" },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

function SubmitButton() {
  const t = useTranslations("ContactForm");
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-semibold text-purple-ink shadow-card transition hover:bg-orange-hover hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? t("sending") : t("submit")}
    </button>
  );
}

export function ContactForm() {
  const t = useTranslations("ContactForm");
  const [state, formAction] = useActionState(submitContact, initialState);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey || !turnstileRef.current || !window.turnstile) return;
    if (widgetIdRef.current) return;
    widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
      sitekey: siteKey,
      theme: "light",
    });
  }, [siteKey, state]);

  useEffect(() => {
    if (state.ok && widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, [state.ok]);

  if (state.ok) {
    return (
      <div className="rounded-card bg-surface-soft p-5 text-purple-ink ring-1 ring-lilac/30">
        <h3 className="text-lg font-semibold">{t("successTitle")}</h3>
        <p className="mt-2 text-sm text-muted-on-light">{t("successBody")}</p>
      </div>
    );
  }

  const fieldClass =
    "mt-1 w-full rounded-lg border border-lilac/40 bg-white px-3 py-2 text-purple-ink placeholder-muted-on-light/60 outline-none focus:border-orange focus:ring-2 focus:ring-orange/30";
  const labelClass = "block text-sm font-medium text-purple-ink";

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <form action={formAction} className="space-y-4" noValidate>
        <div>
          <label htmlFor="name" className={labelClass}>
            {t("name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
          {state.fieldErrors?.name && (
            <p className="mt-1 text-sm text-orange">{state.fieldErrors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
          {state.fieldErrors?.email && (
            <p className="mt-1 text-sm text-orange">{state.fieldErrors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={fieldClass}
          />
          {state.fieldErrors?.message && (
            <p className="mt-1 text-sm text-orange">{state.fieldErrors.message}</p>
          )}
        </div>

        <div
          aria-hidden="true"
          className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
        >
          <label htmlFor="website">{t("websiteLabel")}</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {siteKey ? (
          <div ref={turnstileRef} className="cf-turnstile" />
        ) : (
          <p className="text-xs text-muted-on-light">{t("verificationDisabled")}</p>
        )}

        {state.error && (
          <p className="text-sm text-orange" role="alert">
            {state.error}
          </p>
        )}

        <SubmitButton />
      </form>
    </>
  );
}
