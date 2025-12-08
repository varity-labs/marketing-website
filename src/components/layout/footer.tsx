"use client";

import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { ComingSoonLink } from "@/components/ui/coming-soon-link";
import { Github, Twitter, Linkedin, MessageCircle } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  active?: boolean;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "/platform", active: true },
      { label: "Dashboard", href: "/dashboard", active: true },
      { label: "Pricing", href: "/pricing", active: true },
      { label: "SDK", href: "/sdk" },
      { label: "CLI", href: "/cli" },
      { label: "Marketplace", href: "/marketplace" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Quickstart", href: "/docs/quickstart" },
      { label: "Examples", href: "/docs/examples" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about", active: true },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact", active: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy", active: true },
      { label: "Terms of Service", href: "/terms", active: true },
      { label: "Acceptable Use", href: "/acceptable-use", active: true },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Security", href: "/security" },
    ],
  },
];

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/varietyxyz", icon: Twitter },
  { label: "GitHub", href: "https://github.com/varity", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/company/varity", icon: Linkedin },
  { label: "Discord", href: "https://discord.gg/varity", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="section-container section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Logo variant="color" size="lg" />
            <p className="mt-4 text-foreground-secondary text-sm max-w-xs">
              The Operating System for Web3. Build on 100% decentralized
              infrastructure with 89% total savings including AI.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-brand-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    {link.active ? (
                      <Link
                        href={link.href}
                        className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <ComingSoonLink className="text-sm">
                        {link.label}
                      </ComingSoonLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} Varity. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-foreground-muted">
              Powered by{" "}
              <a
                href="https://akash.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-400 transition-colors"
              >
                Akash
              </a>
              {" + "}
              <a
                href="https://filecoin.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-400 transition-colors"
              >
                Filecoin
              </a>
              {" + "}
              <a
                href="https://arbitrum.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-400 transition-colors"
              >
                Arbitrum
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
