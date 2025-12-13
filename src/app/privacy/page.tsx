import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Privacy Policy - Varity",
  description: "Varity Privacy Policy - How we protect your data using decentralized infrastructure and Lit Protocol encryption.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-display-lg font-display font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-body-lg text-foreground-secondary mb-8">
              Effective Date: December 5, 2025
            </p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  1. Introduction
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Varity (&quot;Varity,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the varity.io website and the Varity decentralized infrastructure platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>Our Core Promise:</strong> Varity is fundamentally different from traditional cloud providers. We have built our infrastructure so that we <em>mathematically cannot access your data</em>. Your data is encrypted client-side using Lit Protocol before it ever leaves your browser, and only you hold the decryption keys.
                </p>
              </section>

              {/* Our Decentralized Architecture */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  2. Our Decentralized Privacy Architecture
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Unlike AWS, Google Cloud, or Microsoft Azure, Varity is built on 100% decentralized infrastructure. This means:
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  2.1 Five-Layer Privacy Architecture
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Your data is protected by our comprehensive five-layer privacy system:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Layer 1 - Encryption at Rest:</strong> All data is encrypted using Lit Protocol with wallet-based keys (AES-256-GCM underlying encryption) before leaving your browser. Only you can decrypt your data with your wallet signature.</li>
                  <li><strong>Layer 2 - Distributed Storage:</strong> Encrypted data is stored on Filecoin/IPFS through Pinata, distributed across independent storage providers worldwide with 3x redundancy. No single point of failure exists.</li>
                  <li><strong>Layer 3 - Data Availability:</strong> AnyTrust DA (Arbitrum&apos;s native data availability solution) ensures your data remains available and verifiable without compromising privacy.</li>
                  <li><strong>Layer 4 - Decentralized Compute:</strong> All processing occurs on Akash Network&apos;s decentralized compute infrastructure. No corporate entity can access your data during processing.</li>
                  <li><strong>Layer 5 - Blockchain Settlement:</strong> All access events are logged immutably on our Arbitrum L3 blockchain, providing a transparent and tamper-proof audit trail.</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  2.2 What This Means for You
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Varity cannot read, access, or modify your stored data</li>
                  <li>No government or third party can compel us to provide your data (we don&apos;t have the keys)</li>
                  <li>Your data cannot be sold, shared, or used for advertising</li>
                  <li>There is no &quot;master key&quot; or backdoor access</li>
                </ul>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  3. Information We Collect
                </h2>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  3.1 Information You Provide
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Account Information:</strong> Email address (if you choose email authentication), wallet address (for blockchain authentication)</li>
                  <li><strong>Profile Information:</strong> Name, company name, and other optional profile details</li>
                  <li><strong>Payment Information:</strong> Billing details processed through our payment processors (Stripe) - we do not store full payment card numbers</li>
                  <li><strong>Communications:</strong> Support requests, feedback, and correspondence with our team</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  3.2 Information Collected Automatically
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Usage Data:</strong> Anonymized and aggregated usage metrics (feature usage, performance data)</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, device identifiers for security purposes</li>
                  <li><strong>Log Data:</strong> IP addresses, access times, pages viewed (retained for 30 days for security)</li>
                  <li><strong>Blockchain Data:</strong> Transaction hashes and wallet addresses (publicly available on-chain)</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  3.3 Information We Do NOT Collect
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Your encrypted data content (we cannot decrypt it)</li>
                  <li>Your encryption keys or wallet private keys</li>
                  <li>Data from your integrated business tools (QuickBooks, Salesforce, etc.)</li>
                  <li>AI chat contents or queries (processed in encrypted form)</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  4. How We Use Your Information
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We use the limited information we collect to:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Send important service updates and security alerts</li>
                  <li>Respond to support requests and communications</li>
                  <li>Detect and prevent fraud, abuse, and security incidents</li>
                  <li>Comply with legal obligations</li>
                  <li>Improve our platform based on anonymized usage patterns</li>
                </ul>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>We do NOT:</strong>
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Sell your personal information</li>
                  <li>Use your data for advertising or profiling</li>
                  <li>Share your data with third parties for their marketing purposes</li>
                  <li>Train AI models on your data</li>
                </ul>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  5. Data Sharing and Disclosure
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We may share limited information with:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Service Providers:</strong> Payment processors (Stripe), email services, and analytics providers who are contractually bound to protect your information</li>
                  <li><strong>Legal Requirements:</strong> When required by law, subpoena, or legal process (note: we cannot provide encrypted data as we don&apos;t have decryption keys)</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with continued privacy protections</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
                </ul>
              </section>

              {/* International Data Transfers */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  6. International Data Transfers
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Your data is stored on Filecoin&apos;s decentralized network, which operates globally. Account information may be processed in the United States and other countries. We ensure appropriate safeguards are in place for any international transfers of personal data.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  7. Data Retention
                </h2>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Account Data:</strong> Retained while your account is active and for 30 days after deletion</li>
                  <li><strong>Encrypted Data:</strong> Stored until you delete it (you control this entirely)</li>
                  <li><strong>Usage Logs:</strong> 30 days for security purposes</li>
                  <li><strong>Payment Records:</strong> 7 years as required by tax and financial regulations</li>
                  <li><strong>Blockchain Records:</strong> Permanent (immutable by design, but contain no personal data)</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  8. Your Rights and Choices
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                  <li><strong>Portability:</strong> Export your data in standard formats at any time</li>
                  <li><strong>Objection:</strong> Object to certain processing of your data</li>
                  <li><strong>Withdrawal of Consent:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="text-body-md text-foreground-secondary mb-4">
                  To exercise these rights, contact us at hello@varity.so. We will respond within 30 days.
                </p>
              </section>

              {/* GDPR */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  9. European Users (GDPR)
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  If you are in the European Economic Area (EEA), United Kingdom, or Switzerland:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>We process your data based on: (a) contract performance, (b) legitimate interests, (c) legal obligations, or (d) your consent</li>
                  <li>You have additional rights under GDPR including the right to lodge a complaint with a supervisory authority</li>
                  <li>For data transfers outside the EEA, we use Standard Contractual Clauses</li>
                </ul>
              </section>

              {/* CCPA */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  10. California Users (CCPA/CPRA)
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  California residents have additional rights under the California Consumer Privacy Act:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Right to Know:</strong> Request disclosure of personal information collected</li>
                  <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
                  <li><strong>Right to Opt-Out:</strong> We do not sell personal information</li>
                  <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your rights</li>
                </ul>
              </section>

              {/* Children */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  11. Children&apos;s Privacy
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately at hello@varity.so.
                </p>
              </section>

              {/* Security */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  12. Security
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We implement robust security measures including:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Client-side encryption using Lit Protocol (AES-256-GCM)</li>
                  <li>Wallet-based key management (no centralized key storage)</li>
                  <li>TLS/SSL encryption for all data in transit</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication options</li>
                  <li>Immutable blockchain audit trails</li>
                </ul>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  13. Changes to This Policy
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the &quot;Effective Date.&quot; For significant changes, we will provide additional notice via email or in-app notification.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  14. Contact Us
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <ul className="list-none text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Email:</strong> hello@varity.so</li>
                  <li><strong>Address:</strong> Varity Inc., 1601 N Main St #3159, Jacksonville, FL 32206</li>
                  <li><strong>Data Protection Officer:</strong> hello@varity.so</li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
