"use client";

import * as React from "react";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";

const integrations = [
  // Row 1 - Business Tools
  [
    "Salesforce",
    "HubSpot",
    "Slack",
    "Notion",
    "Airtable",
    "Zapier",
    "Monday.com",
    "Jira",
    "Asana",
    "Zendesk",
  ],
  // Row 2 - Data & Analytics
  [
    "Google Analytics",
    "Mixpanel",
    "Amplitude",
    "Segment",
    "Snowflake",
    "BigQuery",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Supabase",
  ],
  // Row 3 - Finance & Payments
  [
    "Stripe",
    "QuickBooks",
    "Xero",
    "Square",
    "PayPal",
    "Plaid",
    "Chargebee",
    "Recurly",
    "Bill.com",
    "Brex",
  ],
];

export function DashboardIntegrations() {
  return (
    <section className="py-20 relative overflow-hidden bg-background-secondary/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />
      </div>

      <div className="section-container relative mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-display-md md:text-display-lg font-display font-bold">
            Connect to
            <br />
            <span className="text-gradient">your entire stack</span>
          </h2>
          <p className="mt-4 text-body-lg text-foreground-secondary">
            Integrates with 50+ popular business tools. Connect your data
            sources in seconds.
          </p>
        </motion.div>
      </div>

      {/* Integration Marquees with consistent spacing */}
      <div className="space-y-8">
        {integrations.map((row, rowIndex) => (
          <Marquee
            key={rowIndex}
            gradient
            gradientColor="#030712"
            gradientWidth={100}
            speed={30 + rowIndex * 10}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            pauseOnHover
            className="py-2"
          >
            {row.map((integration, index) => (
              <div
                key={`${integration}-${index}`}
                className="mx-6 px-8 py-4 rounded-lg border border-border bg-background hover:border-brand-500/30 transition-colors cursor-default min-w-[140px] text-center"
              >
                <span className="text-body-md font-medium text-foreground-secondary hover:text-foreground transition-colors whitespace-nowrap">
                  {integration}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {row.map((integration, index) => (
              <div
                key={`${integration}-duplicate-${index}`}
                className="mx-6 px-8 py-4 rounded-lg border border-border bg-background hover:border-brand-500/30 transition-colors cursor-default min-w-[140px] text-center"
              >
                <span className="text-body-md font-medium text-foreground-secondary hover:text-foreground transition-colors whitespace-nowrap">
                  {integration}
                </span>
              </div>
            ))}
          </Marquee>
        ))}
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="section-container mt-12 text-center"
      >
        <p className="text-body-md text-foreground-muted">
          Don&apos;t see your tool?{" "}
          <span className="text-brand-400">Request an integration</span> or use
          our API to build custom connections.
        </p>
      </motion.div>
    </section>
  );
}
