import type { Metadata, Viewport } from "next";
import { cabinetGrotesk, satoshi, jetbrainsMono, fontClasses } from "@/lib/fonts";
import { ThemeProvider } from "next-themes";
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
    creator: "@varietyxyz",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
      </body>
    </html>
  );
}
