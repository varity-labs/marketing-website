"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ExternalLink } from "lucide-react";
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
  external?: boolean;
}

const navigation: NavItem[] = [
  { label: "Platform", href: "/platform", active: true },
  { label: "App Store", href: "https://store.varity.so", active: true, external: true },
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
                ) : item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {item.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
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
              {/* Signup Progress Bar - Shows when scrolled on larger screens */}
              {isScrolled && (
                <div className="hidden lg:block">
                  <SignupProgressBar variant="minimal" />
                </div>
              )}

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
                {/* Only show Explore Apps button when NOT scrolled (progress bar shows when scrolled) */}
                {!isScrolled && (
                  <Button size="sm" className="gap-1" asChild>
                    <a
                      href="https://store.varity.so"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("nav_cta_click", { location: "header_desktop", button: "explore_apps" })}
                    >
                      Explore Apps
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                )}
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
                  ) : item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-3 text-lg font-medium text-foreground-secondary hover:text-foreground transition-colors inline-flex items-center gap-2"
                    >
                      {item.label}
                      <ExternalLink className="h-4 w-4" />
                    </a>
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
                    <a
                      href="https://store.varity.so"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        trackEvent("nav_cta_click", { location: "header_mobile", button: "explore_apps" });
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Explore Apps
                      <ArrowRight className="h-5 w-5" />
                    </a>
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
