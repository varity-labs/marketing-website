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
];

export function PricingFAQ() {
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
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-display-md font-display font-bold">
            Pricing <span className="text-gradient">FAQ</span>
          </h2>
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
