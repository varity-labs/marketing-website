import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Varity",
  description: "Get in touch with the Varity team. We're here to help you build on decentralized infrastructure.",
};

const contactOptions = [
  {
    icon: MessageSquare,
    title: "Sales",
    description: "Talk to our sales team about enterprise solutions",
    action: "sales@varity.xyz",
    cta: "Contact Sales",
  },
  {
    icon: Mail,
    title: "Support",
    description: "Get help with your existing Varity account",
    action: "support@varity.xyz",
    cta: "Get Support",
  },
  {
    icon: Building,
    title: "Partnerships",
    description: "Explore partnership opportunities",
    action: "partners@varity.xyz",
    cta: "Partner With Us",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-electric-400/5 via-background to-background" />
          <div className="section-container relative">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-display-lg md:text-display-xl font-display font-bold">
                Get in <span className="text-gradient-hero">touch</span>
              </h1>
              <p className="mt-6 text-body-lg text-foreground-secondary">
                Have questions about Varity? We&apos;re here to help you build on
                decentralized infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="pb-20">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactOptions.map((option) => (
                <div key={option.title} className="card card-hover text-center">
                  <div className="p-4 rounded-xl bg-brand-500/10 text-brand-500 inline-flex mb-6">
                    <option.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-heading-lg font-semibold text-foreground mb-2">
                    {option.title}
                  </h3>
                  <p className="text-body-md text-foreground-secondary mb-6">
                    {option.description}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`mailto:${option.action}`}>{option.cta}</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-background-secondary/30">
          <div className="section-container">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-display-md font-display font-bold">
                  Send us a <span className="text-gradient">message</span>
                </h2>
                <p className="mt-4 text-body-lg text-foreground-secondary">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-body-sm font-medium text-foreground mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-brand-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-body-sm font-medium text-foreground mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-brand-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-body-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-brand-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-body-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-brand-500 transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-body-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-brand-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" size="lg" variant="gradient" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
