import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Bell, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Coming Soon - Varity",
  description: "Stay tuned for insights on Web3, decentralized infrastructure, and AI dashboards.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center">
        <section className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex p-4 rounded-2xl bg-brand-500/10 text-brand-500 mb-8">
              <Bell className="h-10 w-10" />
            </div>

            <h1 className="text-display-lg md:text-display-xl font-display font-bold">
              Blog <span className="text-gradient">Coming Soon</span>
            </h1>

            <p className="mt-6 text-body-lg text-foreground-secondary">
              We&apos;re working on sharing insights about Web3, decentralized
              infrastructure, AI dashboards, and the future of privacy-first
              technology.
            </p>

            <p className="mt-4 text-body-md text-foreground-muted">
              Sign up to be notified when we launch.
            </p>

            {/* Email Signup */}
            <form className="mt-8 flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full px-4 py-3 rounded-lg bg-background-secondary border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-brand-500 transition-colors"
              />
              <Button type="submit" variant="gradient" size="lg" className="w-full sm:w-auto gap-2">
                Notify Me
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            {/* Back Link */}
            <div className="mt-12">
              <Link
                href="/"
                className="text-body-md text-foreground-muted hover:text-foreground transition-colors"
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
