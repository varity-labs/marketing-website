import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { DashboardHero } from "@/components/dashboard/hero";
import { DashboardFeatures } from "@/components/dashboard/features";
import { DashboardIntegrations } from "@/components/dashboard/integrations";
import { DashboardFAQ } from "@/components/dashboard/faq";
import { CTA } from "@/components/sections";

export const metadata: Metadata = {
  title: "AI Dashboard - Varity",
  description:
    "Get a company-specific AI dashboard that knows your business. Powered by 100% decentralized infrastructure with 89% total savings including AI.",
};

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main>
        <DashboardHero />
        <DashboardFeatures />
        <DashboardIntegrations />
        <DashboardFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
