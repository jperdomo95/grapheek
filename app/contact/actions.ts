"use server";

import { z } from "zod";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";
import { BRAND } from "@/lib/brand";

export type ContactState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body, cache: "no-store" },
    );
    if (!res.ok) return false;
    const data = (await res.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch {
    return false;
  }
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const t = await getTranslations("ContactForm.errors");

  const ContactSchema = z.object({
    name: z.string().trim().min(1, t("name")).max(120),
    email: z.string().trim().email(t("email")).max(254),
    message: z.string().trim().min(10, t("messageShort")).max(4000),
    website: z.string().max(0).optional().or(z.literal("")),
    turnstileToken: z.string().min(1, t("verificationMissing")),
  });

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    website: formData.get("website") ?? "",
    turnstileToken: formData.get("cf-turnstile-response") ?? "",
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message") {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      ok: false,
      error: t("fixFields"),
      fieldErrors,
    };
  }

  const { name, email, message, website, turnstileToken } = parsed.data;

  if (website) {
    return { ok: true };
  }

  const verified = await verifyTurnstile(turnstileToken);
  if (!verified) {
    return { ok: false, error: t("verificationFailed") };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM ?? "Beeanie English <onboarding@resend.dev>";
  if (!apiKey) {
    return { ok: false, error: t("emailNotConfigured") };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: BRAND.email,
    replyTo: email,
    subject: `New contact form — ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return { ok: false, error: t("sendFailed") };
  }

  return { ok: true };
}
