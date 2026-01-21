"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChainSelector } from "@/components/ui/chain-selector";
import { trackEvent } from "@/components/analytics";
import dynamic from "next/dynamic";

// Dynamically import network grid 3D animation for performance
const NetworkGrid3D = dynamic(
  () => import("@/components/3d/network-grid"),
  { 
    ssr: false, 
    loading: () => (
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />
      </div>
    )
  }
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />
        
        {/* 3D Network Grid Animation - confined to hero */}
        <NetworkGrid3D />
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
        {/* Content */}
        <div className="section-container relative z-10 py-12 md:py-20 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge variant="gradient" className="mb-6 py-1.5 px-4 bg-background/80 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Arbitrum L3 Testnet Live
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-display-xl md:text-display-2xl font-display font-bold tracking-tight text-white drop-shadow-2xl"
            >
              The Cloud That Can&apos;t
              <br />
              <span className="text-gradient-hero">See Your Data</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-body-lg md:text-body-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg"
            >
              Run your entire business on infrastructure that respects your privacy.{" "}
              <span className="text-brand-400 font-medium">Deploy in 60 seconds</span>.{" "}
              <span className="text-electric-400 font-medium">Save 64%</span>.{" "}
              <span className="text-brand-400 font-medium">Keep 100% control</span>.
            </motion.p>

            {/* Chain Selector */}
            <motion.div variants={itemVariants} className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-700 backdrop-blur-sm">
                <span className="hidden sm:inline text-sm text-gray-300">Choose your blockchain:</span>
                <ChainSelector />
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="xl" className="gap-2 min-w-[200px] bg-brand-500 hover:bg-brand-600" asChild>
                <a
                  href="https://store.varity.so"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("cta_click", { location: "hero", button: "explore_apps" })}
                >
                  Explore Apps
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="gap-2 min-w-[200px] border-gray-600 text-white hover:bg-gray-800" asChild>
                <Link
                  href="/platform"
                  onClick={() => trackEvent("cta_click", { location: "hero", button: "see_how_it_works" })}
                >
                  <Play className="h-5 w-5" />
                  See How It Works
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-8 border-t border-gray-700/50"
            >
              <p className="text-sm text-gray-400 mb-4">
                Trusted by developers. Powered by decentralized infrastructure.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  { name: "Arbitrum", description: "Secure Layer" },
                  { name: "Filecoin", description: "Storage" },
                  { name: "Akash", description: "Compute" },
                  { name: "Lit Protocol", description: "Encryption" },
                ].map((partner) => (
                  <div key={partner.name} className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-gray-200">
                      {partner.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {partner.description}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile to avoid overlap with trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-600/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-brand-500"
            />
          </div>
        </motion.div>
    </section>
  );
}