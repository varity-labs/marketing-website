"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.firstName} ${formData.lastName} - ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open mailto link
    window.location.href = `mailto:hello@varity.so?subject=${subject}&body=${body}`;

    // Show success state after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex p-4 rounded-full bg-green-500/10 text-green-500 mb-6">
          <CheckCircle className="h-12 w-12" />
        </div>
        <h3 className="text-heading-lg font-semibold text-foreground mb-2">
          Email client opened!
        </h3>
        <p className="text-body-md text-foreground-secondary mb-6">
          Please send the email from your email client to complete your message.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ firstName: "", lastName: "", email: "", company: "", message: "" });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-body-sm font-medium text-foreground mb-2">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
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
            value={formData.lastName}
            onChange={handleChange}
            required
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
          value={formData.email}
          onChange={handleChange}
          required
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
          value={formData.company}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-brand-500 transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <Button type="submit" size="lg" variant="gradient" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Opening email...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
