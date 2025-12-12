"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { ChainSelector } from "@/components/ui/chain-selector";
import { ComingSoonLink } from "@/components/ui/coming-soon-link";
import { SignupProgressBar } from "@/components/ui/signup-progress-bar";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/components/analytics";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  comingSoon?: boolean;
}

const navigation: NavItem[] = [
  { label: "Platform", href: "/platform", active: true },
  { label: "Dashboard", href: "/dashboard", active: true },
  { label: "Pricing", href: "/pricing", active: true },
  { label: "Developers", href: "/developers", comingSoon: true },
  { label: "About", href: "/about", active: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass py-3" : "py-4"
        )}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="color" size="md" />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) =>
                item.comingSoon ? (
                  <ComingSoonLink key={item.href} className="px-4 py-2">
                    <span className="text-sm font-medium">{item.label}</span>
                  </ComingSoonLink>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Right Side - CTAs */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <ChainSelector />
              </div>

              <div className="hidden md:flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="/contact"
                    onClick={() => trackEvent("nav_cta_click", { location: "header_desktop", button: "contact" })}
                  >
                    Contact
                  </Link>
                </Button>
                <Button size="sm" className="gap-1" asChild>
                  <Link
                    href="/dashboard"
                    onClick={() => trackEvent("nav_cta_click", { location: "header_desktop", button: "get_started" })}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground-secondary hover:text-foreground transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Sticky Conversion Bar - Appears below header when scrolled */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[52px] left-0 right-0 z-40 hidden lg:block"
          >
            <div className="bg-gradient-to-r from-brand-500/10 via-electric-400/10 to-brand-500/10 border-b border-brand-500/20 backdrop-blur-sm">
              <div className="section-container py-2.5">
                <div className="flex items-center justify-center">
                  <SignupProgressBar variant="minimal" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 bg-background lg:hidden"
          >
            <div className="section-container py-8">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) =>
                  item.comingSoon ? (
                    <ComingSoonLink key={item.href} className="py-3 text-lg">
                      <span className="font-medium">{item.label}</span>
                    </ComingSoonLink>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-3 text-lg font-medium text-foreground-secondary hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                )}

                <div className="pt-4 border-t border-border">
                  <ChainSelector className="w-full justify-center" />
                </div>

                {/* Early Adopter Progress Bar in Mobile Menu */}
                <div className="pt-4">
                  <SignupProgressBar variant="compact" className="w-full" />
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <Button variant="outline" size="lg" asChild>
                    <Link
                      href="/contact"
                      onClick={() => {
                        trackEvent("nav_cta_click", { location: "header_mobile", button: "contact_sales" });
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Contact Sales
                    </Link>
                  </Button>
                  <Button size="lg" className="gap-2" asChild>
                    <Link
                      href="/dashboard"
                      onClick={() => {
                        trackEvent("nav_cta_click", { location: "header_mobile", button: "get_started" });
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Get Started
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
