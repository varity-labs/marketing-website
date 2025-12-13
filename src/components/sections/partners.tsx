"use client";

import * as React from "react";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";

interface Partner {
  name: string;
  logo?: string;
}

const partners: Partner[] = [
  { name: "Arbitrum" },
  { name: "Filecoin" },
  { name: "Akash Network" },
  { name: "Lit Protocol" },
  { name: "Celestia" },
  { name: "Conduit" },
  { name: "Privy" },
  { name: "thirdweb" },
  { name: "IPFS" },
  { name: "Pinata" },
];

export function Partners() {
  return (
    <section className="py-20 relative overflow-hidden border-y border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background-secondary/30 to-background" />

      <div className="relative overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-foreground-muted uppercase tracking-wider font-medium">
            Powered by Leading Web3 Infrastructure
          </p>
        </motion.div>

        {/* Single Row Partner Marquee with larger text */}
        <Marquee
          gradient={true}
          gradientColor="#030712"
          gradientWidth={150}
          speed={40}
          pauseOnHover={true}
          className="py-4 [&>*]:overflow-hidden"
          style={{ overflow: 'hidden' }}
        >
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="mx-8 lg:mx-12 flex items-center justify-center"
            >
              <div className="group relative cursor-default">
                {/* Partner Name - Much Larger Text */}
                <span className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground-muted/70 hover:text-foreground transition-all duration-300 group-hover:scale-110 inline-block">
                  {partner.name}
                </span>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-brand-500/20 to-electric-400/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-duplicate-${index}`}
              className="mx-8 lg:mx-12 flex items-center justify-center"
            >
              <div className="group relative cursor-default">
                <span className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground-muted/70 hover:text-foreground transition-all duration-300 group-hover:scale-110 inline-block">
                  {partner.name}
                </span>
                <div className="absolute -inset-6 bg-gradient-to-r from-brand-500/20 to-electric-400/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}