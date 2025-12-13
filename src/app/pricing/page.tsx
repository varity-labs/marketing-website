import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PricingHero } from "@/components/pricing/hero";
import { PricingTiers } from "@/components/pricing/tiers";
import { PricingComparison } from "@/components/pricing/comparison";
import { PricingFAQ } from "@/components/pricing/faq";
import { CTA } from "@/components/sections";
import {
  SoftwareApplicationSchema,
  FAQSchema,
  BreadcrumbSchema,
  AggregateOfferSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pricing Plans & Packages | Varity AI Dashboard",
  description:
    "Simple, transparent pricing for Varity AI dashboards. Business ($99/mo), Business Pro ($199/mo), and Enterprise plans. Save 89% vs traditional cloud + AI. 14-day free trial.",
  keywords: [
    "Varity pricing",
    "AI dashboard pricing",
    "decentralized cloud pricing",
    "Web3 infrastructure cost",
    "AWS alternative pricing",
    "DePin pricing",
    "business intelligence pricing",
  ],
  alternates: {
    canonical: "https://varity.so/pricing/",
  },
  openGraph: {
    title: "Pricing Plans | Varity AI Dashboard",
    description:
      "Simple, transparent pricing. Business ($99/mo), Business Pro ($199/mo), Enterprise. Save 89% vs traditional cloud.",
    url: "https://varity.so/pricing/",
    type: "website",
  },
};

// FAQ data for schema (matches the component)
const pricingFaqs = [
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the difference will be credited to your account.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), as well as cryptocurrency payments via USDC on Arbitrum. Enterprise customers can also pay via invoice.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! All plans come with a 14-day free trial. No credit card required to start. You'll have full access to all features during the trial period.",
  },
  {
    question: "What happens if I exceed my usage limits?",
    answer:
      "We'll notify you when you're approaching your limits. If you exceed them, you can either upgrade to a higher plan or purchase additional capacity. We'll never cut off your service without warning.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes! Annual billing saves you 20% compared to monthly billing. That's like getting 2+ months free every year.",
  },
  {
    question: "What's included in the Industry RAG knowledge base?",
    answer:
      "Professional and Enterprise plans include access to our curated knowledge base of 10,000+ industry-specific documents. This includes regulations, compliance guides, best practices, and market insights for your industry (ISO merchant services, finance, healthcare, or retail).",
  },
  {
    question: "How does Varity compare to AWS or Google Cloud pricing?",
    answer:
      "Varity offers 89% total savings compared to traditional cloud providers when including AI capabilities. Our Business plan at $99/month includes AI dashboard features that would cost $500-800/month on AWS or Google Cloud.",
  },
  {
    question: "What is the difference between Business and Business Pro?",
    answer:
      "Business Pro includes 4x more storage (200GB vs 50GB), 2x more AI queries (2,000 vs 1,000), access to Industry RAG knowledge base with 10,000+ documents, custom integrations, priority support, and up to 10 team members instead of single user.",
  },
];

// Pricing offers for schema
const pricingOffers = [
  {
    name: "Business",
    price: "$99",
    description:
      "Perfect for small businesses. Company-specific AI dashboard, 50GB storage, 1,000 AI queries/month.",
  },
  {
    name: "Business Pro",
    price: "$199",
    description:
      "For growing businesses. 200GB storage, 2,000 AI queries, Industry RAG knowledge, up to 10 team members.",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Unlimited resources, custom AI model training, dedicated support, 99.99% SLA.",
  },
];

// Breadcrumb for navigation schema
const breadcrumbs = [
  { name: "Home", url: "https://varity.so/" },
  { name: "Pricing", url: "https://varity.so/pricing/" },
];

export default function PricingPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <SoftwareApplicationSchema offers={pricingOffers} />
      <FAQSchema faqs={pricingFaqs} />
      <BreadcrumbSchema items={breadcrumbs} />
      <AggregateOfferSchema />

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
