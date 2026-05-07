import { setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Method } from "@/components/Method";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Services />
        <Method />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
