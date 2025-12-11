import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
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
    action: "hello@varity.so",
    cta: "Contact Sales",
  },
  {
    icon: Mail,
    title: "Support",
    description: "Get help with your existing Varity account",
    action: "support@varity.so",
    cta: "Get Support",
  },
  {
    icon: Building,
    title: "Partnerships",
    description: "Explore partnership opportunities",
    action: "hello@varity.so",
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

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
