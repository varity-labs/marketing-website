"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
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

export function DashboardFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-display-md md:text-display-lg font-display font-bold">
            Frequently asked
            <br />
            <span className="text-gradient">questions</span>
          </h2>
          <p className="mt-4 text-body-lg text-foreground-secondary">
            Everything you need to know about Varity AI Dashboards.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "w-full text-left p-5 rounded-xl",
                  "bg-background-secondary/50 border border-border",
                  "hover:border-brand-500/30 transition-colors",
                  openIndex === index && "border-brand-500/30"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-body-lg font-medium text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-foreground-muted flex-shrink-0 transition-transform",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </div>

                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 pt-4 border-t border-border"
                  >
                    <p className="text-body-md text-foreground-secondary">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
