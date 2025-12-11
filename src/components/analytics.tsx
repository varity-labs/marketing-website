"use client";

/**
 * Privacy-Focused Analytics for Varity Marketing Website
 *
 * This component integrates with Umami Analytics - an open-source,
 * privacy-focused analytics solution that:
 * - Does NOT use cookies
 * - Does NOT track personal data
 * - Is GDPR/CCPA compliant by default
 * - Can be self-hosted on Akash (decentralized compute)
 *
 * To enable analytics:
 * 1. Deploy Umami on Akash or use Umami Cloud
 * 2. Set NEXT_PUBLIC_UMAMI_WEBSITE_ID in environment variables
 * 3. Optionally set NEXT_PUBLIC_UMAMI_URL for self-hosted instances
 *
 * Learn more: https://umami.is/docs/getting-started
 */

import Script from "next/script";

// Environment variables for Umami configuration
const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const UMAMI_URL = process.env.NEXT_PUBLIC_UMAMI_URL || "https://analytics.umami.is/script.js";

export function Analytics() {
  // Only render analytics script if website ID is configured
  if (!UMAMI_WEBSITE_ID) {
    return null;
  }

  return (
    <Script
      defer
      src={UMAMI_URL}
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}

/**
 * Track custom events (optional)
 * Use this function to track specific user interactions
 *
 * Example usage:
 * trackEvent('button_click', { button: 'get_started' });
 * trackEvent('form_submit', { form: 'contact' });
 */
export function trackEvent(eventName: string, eventData?: Record<string, string | number>) {
  if (typeof window !== "undefined" && (window as unknown as { umami?: { track: (name: string, data?: Record<string, string | number>) => void } }).umami) {
    (window as unknown as { umami: { track: (name: string, data?: Record<string, string | number>) => void } }).umami.track(eventName, eventData);
  }
}
