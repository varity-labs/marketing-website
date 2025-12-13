import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { DashboardHero } from "@/components/dashboard/hero";
import { DashboardFeatures } from "@/components/dashboard/features";
import { DashboardIntegrations } from "@/components/dashboard/integrations";
import { DashboardFAQ } from "@/components/dashboard/faq";
import { CTA } from "@/components/sections";
import {
  FAQSchema,
  BreadcrumbSchema,
  SoftwareApplicationSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Company-Specific AI Dashboard | Varity Business Intelligence",
  description:
    "Get an AI dashboard trained on YOUR business data. Natural language queries, real-time analytics, document intelligence with 50,000+ industry documents. Powered by 100% decentralized infrastructure.",
  keywords: [
    "AI dashboard",
    "company-specific AI",
    "business intelligence",
    "AI analytics",
    "decentralized AI",
    "natural language analytics",
    "document intelligence",
    "RAG knowledge base",
    "enterprise AI",
  ],
  alternates: {
    canonical: "https://varity.so/dashboard/",
  },
  openGraph: {
    title: "Company-Specific AI Dashboard | Varity",
    description:
      "AI trained on YOUR business data. Natural language queries, real-time analytics, 89% savings vs traditional cloud + AI.",
    url: "https://varity.so/dashboard/",
    type: "website",
  },
};

// FAQ data for schema (matches the DashboardFAQ component)
const dashboardFaqs = [
  {
    question: "How is Varity different from ChatGPT or other AI tools?",
    answer:
      "Unlike generic AI tools, Varity is trained specifically on YOUR business data. It understands your industry, your terminology, and your workflows. Plus, your data never leaves your control - it's stored on decentralized infrastructure with 5-layer encryption.",
  },
  {
    question: "Do I need technical expertise to use Varity?",
    answer:
      "Not at all. Varity is designed for business users, not engineers. Our AI-powered setup wizard guides you through onboarding in minutes. You can ask questions in plain English and get instant answers - no SQL or coding required.",
  },
  {
    question: "How secure is my data?",
    answer:
      "Varity uses military-grade 5-layer privacy: (1) Lit Protocol encryption at rest, (2) Filecoin distributed storage, (3) Celestia data availability with ZK proofs, (4) Akash decentralized compute, and (5) Arbitrum blockchain audit trail. Only you can access your data with your wallet signature.",
  },
  {
    question: "What does '100% decentralized' mean?",
    answer:
      "Unlike AWS or Google Cloud, Varity runs on decentralized physical infrastructure (DePin). Your compute happens on Akash Network, storage on Filecoin, and settlement on Arbitrum. No single company controls your infrastructure - it's run by thousands of independent providers.",
  },
  {
    question: "How much does it cost compared to alternatives?",
    answer:
      "Varity is 64-80% cheaper than traditional cloud alternatives. Our Business plan is $99/month, Business Pro is $199/month. Compare this to building the same capabilities on Google Cloud with Vertex AI, which would cost $2,800+/month.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "Yes! We offer a 14-day free trial with no credit card required. You get full access to all features so you can experience the difference before subscribing.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data belongs to you. When you cancel, you can export all your data in standard formats. Because of our decentralized architecture, there's no vendor lock-in - you can migrate your data anywhere.",
  },
  {
    question: "Which industries do you support?",
    answer:
      "Varity has pre-built templates for ISO merchant services, finance, healthcare, and retail. Each template includes 10,000+ industry-specific documents in the RAG knowledge base. We can also customize for other industries on Enterprise plans.",
  },
];

// Breadcrumb for navigation schema
const breadcrumbs = [
  { name: "Home", url: "https://varity.so/" },
  { name: "AI Dashboard", url: "https://varity.so/dashboard/" },
];

// Product offers for schema
const dashboardOffers = [
  {
    name: "Business",
    price: "$99",
    description: "Company-specific AI dashboard for small businesses.",
  },
  {
    name: "Business Pro",
    price: "$199",
    description: "Advanced AI with Industry RAG knowledge base.",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom AI model training and unlimited resources.",
  },
];

export default function DashboardPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <FAQSchema faqs={dashboardFaqs} />
      <BreadcrumbSchema items={breadcrumbs} />
      <SoftwareApplicationSchema offers={dashboardOffers} />

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
