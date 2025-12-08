import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PricingHero } from "@/components/pricing/hero";
import { PricingTiers } from "@/components/pricing/tiers";
import { PricingComparison } from "@/components/pricing/comparison";
import { PricingFAQ } from "@/components/pricing/faq";
import { CTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "Pricing - Varity",
  description:
    "Simple, transparent pricing. Save 64-80% vs traditional cloud providers. Start free, scale as you grow.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <PricingTiers />
        <PricingComparison />
        <PricingFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
