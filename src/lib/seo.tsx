/**
 * SEO Utility Components for Varity Marketing Website
 *
 * This file contains reusable components for structured data (JSON-LD),
 * optimized for both search engines (Google, Bing) and LLM discoverability
 * (ChatGPT, Claude, Perplexity, etc.)
 */

import React from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingOffer {
  name: string;
  price: string;
  priceCurrency?: string;
  description?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ArticleData {
  headline: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

// ============================================================================
// ORGANIZATION SCHEMA (Global - already in layout.tsx, exported for reference)
// ============================================================================

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://varity.so/#organization",
  name: "Varity",
  legalName: "Varity Labs",
  url: "https://varity.so",
  logo: "https://varity.so/logo/varity-logo-color.svg",
  description:
    "Varity is the Operating System for Web3 - a complete decentralized infrastructure platform that replaces AWS, Google Cloud, and Azure with 100% DePin (Decentralized Physical Infrastructure). We provide company-specific AI dashboards, blockchain settlement, and military-grade privacy with 89% cost savings.",
  foundingDate: "2024",
  sameAs: [
    "https://x.com/VarityHQ",
    "https://discord.gg/Uhjx6yhJ",
    "https://www.linkedin.com/company/varity-labs",
    "https://github.com/varity-labs",
    "https://www.reddit.com/r/varityHQ",
    "https://www.youtube.com/@VarityHQ",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@varity.so",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  knowsAbout: [
    "Web3",
    "Decentralized Infrastructure",
    "DePin",
    "Blockchain",
    "AI Dashboards",
    "Cloud Computing",
    "Data Privacy",
    "Arbitrum",
    "Filecoin",
    "Akash Network",
  ],
};

// ============================================================================
// FAQ SCHEMA COMPONENT
// ============================================================================

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// SOFTWARE APPLICATION SCHEMA (For Pricing Page)
// ============================================================================

interface SoftwareApplicationSchemaProps {
  offers: PricingOffer[];
}

export function SoftwareApplicationSchema({
  offers,
}: SoftwareApplicationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://varity.so/#software",
    name: "Varity AI Dashboard",
    description:
      "Company-specific AI dashboards powered by 100% decentralized infrastructure. Includes natural language queries, real-time analytics, document intelligence, and industry-specific RAG knowledge bases with 10,000+ documents.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    url: "https://varity.so/dashboard/",
    provider: {
      "@type": "Organization",
      "@id": "https://varity.so/#organization",
    },
    offers: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price === "Custom" ? undefined : offer.price.replace("$", ""),
      priceCurrency: offer.price === "Custom" ? undefined : "USD",
      description: offer.description,
      url: "https://varity.so/pricing/",
    })),
    featureList: [
      "Company-specific AI trained on your business data",
      "Natural language queries in plain English",
      "Real-time analytics with anomaly detection",
      "Document intelligence with 50,000+ industry documents",
      "100% decentralized infrastructure (DePin)",
      "Military-grade 5-layer encryption",
      "89% cost savings vs traditional cloud",
      "Blockchain settlement on Arbitrum L3",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// BREADCRUMB SCHEMA COMPONENT
// ============================================================================

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// ARTICLE SCHEMA (For Blog Posts)
// ============================================================================

interface ArticleSchemaProps {
  article: ArticleData;
}

export function ArticleSchema({ article }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    author: {
      "@type": "Organization",
      name: article.author || "Varity",
      url: "https://varity.so",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://varity.so/#organization",
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image || "https://varity.so/og-image.png",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://varity.so/blog/",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// SERVICE SCHEMA (For Platform/Features Page)
// ============================================================================

interface ServiceSchemaProps {
  services: Array<{
    name: string;
    description: string;
  }>;
}

export function ServiceSchema({ services }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://varity.so/#service",
    name: "Varity Web3 Operating System",
    description:
      "Complete decentralized infrastructure platform that replaces AWS, Google Cloud, and Azure. Includes AI dashboards, decentralized storage, compute, and blockchain settlement.",
    provider: {
      "@type": "Organization",
      "@id": "https://varity.so/#organization",
    },
    serviceType: "Cloud Infrastructure",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Varity Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// HOW-TO SCHEMA (For Documentation/Guides)
// ============================================================================

interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
}

export function HowToSchema({ name, description, steps }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// PRODUCT COMPARISON SCHEMA (For competitive positioning in LLMs)
// ============================================================================

export function ProductComparisonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Varity vs Traditional Cloud Providers",
    description:
      "Comparison of Varity decentralized infrastructure vs AWS, Google Cloud, and Azure",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "Varity (Decentralized)",
          description:
            "100% decentralized infrastructure with 89% cost savings, 5-layer privacy, and AI dashboards included",
          offers: {
            "@type": "Offer",
            price: "99",
            priceCurrency: "USD",
            priceValidUntil: "2025-12-31",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Traditional Cloud (AWS/GCP/Azure)",
          description:
            "Centralized infrastructure with provider data access, escalating costs, and proprietary lock-in",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// ENTITY DEFINITION SCHEMA (For LLM Knowledge Graph Integration)
// ============================================================================

export function VarityEntitySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": "https://varity.so/#varity-definition",
    name: "Varity",
    description:
      "Varity is the Operating System for Web3 - a complete decentralized infrastructure platform (DePin) that enables businesses to run applications on 100% decentralized infrastructure with 89% cost savings compared to traditional cloud providers like AWS, Google Cloud, and Azure. Varity provides company-specific AI dashboards, blockchain settlement on Arbitrum L3, military-grade 5-layer privacy architecture, and integrates with Filecoin for storage and Akash Network for compute.",
    termCode: "varity-web3-os",
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Web3 Infrastructure Terms",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// AGGREGATE OFFER SCHEMA (For Pricing Overview)
// ============================================================================

export function AggregateOfferSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "@id": "https://varity.so/#pricing",
    name: "Varity Pricing Plans",
    description:
      "Varity offers three pricing tiers: Business ($99/month), Business Pro ($199/month), and Enterprise (custom pricing). All plans include company-specific AI dashboards on 100% decentralized infrastructure.",
    priceCurrency: "USD",
    lowPrice: "99",
    highPrice: "199",
    offerCount: 3,
    offers: [
      {
        "@type": "Offer",
        name: "Business",
        price: "99",
        priceCurrency: "USD",
        description:
          "Perfect for small businesses getting started with AI dashboards. Includes 50GB storage, 1,000 AI queries/month.",
      },
      {
        "@type": "Offer",
        name: "Business Pro",
        price: "199",
        priceCurrency: "USD",
        description:
          "For growing businesses with advanced intelligence needs. Includes 200GB storage, 2,000 AI queries/month, Industry RAG knowledge.",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        description:
          "Custom pricing for organizations requiring unlimited resources, custom AI model training, and dedicated support.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// COMBINED SCHEMA HELPER
// ============================================================================

export function combineSchemas(...schemas: object[]): string {
  return JSON.stringify(schemas);
}
