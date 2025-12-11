import type { Metadata, Viewport } from "next";
import { cabinetGrotesk, satoshi, jetbrainsMono, fontClasses } from "@/lib/fonts";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@/components/analytics";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030712",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://varity.so"),
  title: {
    default: "Varity - The Operating System for Web3",
    template: "%s | Varity",
  },
  description:
    "Build on 100% decentralized infrastructure with 89% total savings including AI. Company-specific AI dashboards, blockchain settlement, and military-grade privacy.",
  keywords: [
    "Web3",
    "DePin",
    "decentralized infrastructure",
    "AI dashboard",
    "blockchain",
    "Arbitrum",
    "cloud alternative",
    "privacy",
    "decentralized cloud",
    "AWS alternative",
    "Google Cloud alternative",
    "Filecoin",
    "Akash Network",
    "decentralized storage",
    "decentralized compute",
    "enterprise blockchain",
    "Web3 OS",
    "crypto infrastructure",
    "private cloud",
    "data sovereignty",
  ],
  authors: [{ name: "Varity" }],
  creator: "Varity",
  publisher: "Varity",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://varity.so",
    siteName: "Varity",
    title: "Varity - The Operating System for Web3",
    description:
      "Build on 100% decentralized infrastructure with 89% total savings including AI. Company-specific AI dashboards, blockchain settlement, and military-grade privacy.",
    images: [
      {
        url: "/logo/varity-logo-color.svg",
        width: 1200,
        height: 630,
        alt: "Varity - The Operating System for Web3",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varity - The Operating System for Web3",
    description:
      "Build on 100% decentralized infrastructure with 89% total savings including AI.",
    images: ["/logo/varity-logo-color.svg"],
    creator: "@VarityHQ",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Varity",
              url: "https://varity.so",
              logo: "https://varity.so/logo/varity-logo-color.svg",
              description: "The Operating System for Web3. Build on 100% decentralized infrastructure with 89% total savings including AI.",
              sameAs: [
                "https://x.com/VarityHQ",
                "https://discord.gg/Uhjx6yhJ",
                "https://www.linkedin.com/company/varity-labs",
                "https://github.com/varity-labs",
                "https://www.reddit.com/r/varityHQ",
                "https://www.youtube.com/@VarityHQ"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@varity.so",
                contactType: "customer service"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Varity",
              url: "https://varity.so",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://varity.so/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${fontClasses} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
