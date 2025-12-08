"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    category: "AI & Intelligence",
    items: [
      {
        name: "Company-specific AI",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Industry RAG knowledge",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Custom AI model training",
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "Natural language queries",
        starter: true,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Storage & Infrastructure",
    items: [
      {
        name: "Encrypted storage",
        starter: "5GB",
        professional: "50GB",
        enterprise: "Unlimited",
      },
      {
        name: "AI queries/month",
        starter: "1,000",
        professional: "10,000",
        enterprise: "Unlimited",
      },
      {
        name: "Decentralized compute",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "On-premise deployment",
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Security & Compliance",
    items: [
      {
        name: "5-layer privacy",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Lit Protocol encryption",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Blockchain audit trail",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Custom SLA",
        starter: false,
        professional: false,
        enterprise: "99.99%",
      },
    ],
  },
  {
    category: "Support & Team",
    items: [
      {
        name: "Team members",
        starter: "1",
        professional: "10",
        enterprise: "Unlimited",
      },
      {
        name: "Email support",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Priority support",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Dedicated account manager",
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-brand-500" />
    ) : (
      <X className="h-5 w-5 text-foreground-muted" />
    );
  }
  return <span className="text-body-sm font-medium text-foreground">{value}</span>;
}

export function PricingComparison() {
  return (
    <section className="section-padding bg-background-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-display-md md:text-display-lg font-display font-bold">
            Compare <span className="text-gradient">plans</span>
          </h2>
          <p className="mt-4 text-body-lg text-foreground-secondary">
            Choose the plan that fits your needs. All plans include our core
            decentralized infrastructure.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[640px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-body-sm font-medium text-foreground-muted">
                  Features
                </th>
                <th className="text-center py-4 px-4 text-body-sm font-medium text-foreground w-32">
                  Starter
                </th>
                <th className="text-center py-4 px-4 text-body-sm font-medium text-brand-400 w-32">
                  Professional
                </th>
                <th className="text-center py-4 px-4 text-body-sm font-medium text-foreground w-32">
                  Enterprise
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {features.map((category) => (
                <React.Fragment key={category.category}>
                  {/* Category Header */}
                  <tr className="border-b border-border bg-background-secondary/50">
                    <td
                      colSpan={4}
                      className="py-3 px-4 text-body-sm font-semibold text-foreground"
                    >
                      {category.category}
                    </td>
                  </tr>

                  {/* Category Items */}
                  {category.items.map((item, index) => (
                    <tr
                      key={item.name}
                      className={cn(
                        "border-b border-border/50",
                        index % 2 === 0 && "bg-background/50"
                      )}
                    >
                      <td className="py-3 px-4 text-body-sm text-foreground-secondary">
                        {item.name}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex justify-center">
                          <FeatureValue value={item.starter} />
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex justify-center">
                          <FeatureValue value={item.professional} />
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex justify-center">
                          <FeatureValue value={item.enterprise} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
