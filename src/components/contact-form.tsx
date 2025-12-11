"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { trackEvent } from "@/components/analytics";

// Get your free access key at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "322fcdfe-779a-4cab-a76a-11285466709c";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          from_name: "Varity Contact Form",
          subject: `New contact from ${formData.firstName} ${formData.lastName}${formData.company ? ` (${formData.company})` : ""}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", company: "", message: "" });
        // Track successful form submission for analytics
        trackEvent("contact_form_submit", { success: 1 });
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please try again or email us directly at hello@varity.so");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex p-4 rounded-full bg-green-500/10 text-green-500 mb-6">
          <CheckCircle className="h-12 w-12" />
        </div>
        <h3 className="text-heading-lg font-semibold text-foreground mb-2">
          Message sent successfully!
        </h3>
        <p className="text-body-md text-foreground-secondary mb-6">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-body-sm">{error}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-body-sm font-medium text-foreground mb-2">
            First name <span className="text-red-400">*</span>
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
            Last name <span className="text-red-400">*</span>
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
          Email <span className="text-red-400">*</span>
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
          Message <span className="text-red-400">*</span>
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
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-center text-body-sm text-foreground-muted">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-brand-400 hover:underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
