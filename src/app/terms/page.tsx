import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Terms of Service - Varity",
  description: "Varity Terms of Service - Terms and conditions for using our decentralized infrastructure platform and AI Dashboard services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-display-lg font-display font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-body-lg text-foreground-secondary mb-8">
              Effective Date: December 5, 2025
            </p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  1. Introduction and Agreement
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Welcome to Varity. These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;you,&quot; &quot;your,&quot; or &quot;User&quot;) and Varity Inc. (&quot;Varity,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of the Varity platform, including our website (varity.io), AI Dashboard services, decentralized infrastructure, APIs, SDKs, and any related services (collectively, the &quot;Services&quot;).
                </p>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>PLEASE READ THESE TERMS CAREFULLY.</strong> By accessing or using our Services, connecting a cryptocurrency wallet, or creating an account, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use our Services.
                </p>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>ARBITRATION NOTICE:</strong> These Terms contain an arbitration clause and class action waiver. Except for certain types of disputes described in Section 14, you agree that disputes between you and Varity will be resolved by binding, individual arbitration, and you waive your right to participate in a class action lawsuit or class-wide arbitration.
                </p>
              </section>

              {/* Eligibility */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  2. Eligibility
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  To use our Services, you must:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Be at least 18 years of age or the age of legal majority in your jurisdiction</li>
                  <li>Have the legal capacity to enter into a binding agreement</li>
                  <li>Not be prohibited from accessing the Services under applicable laws</li>
                  <li>Not have been previously suspended or removed from the Services</li>
                  <li>If using the Services on behalf of an organization, have authority to bind that organization to these Terms</li>
                </ul>
                <p className="text-body-md text-foreground-secondary mb-4">
                  By using our Services, you represent and warrant that you meet all eligibility requirements. If you do not meet these requirements, you must not access or use our Services.
                </p>
              </section>

              {/* Description of Services */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  3. Description of Services
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Varity provides a decentralized infrastructure platform offering:
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  3.1 AI Dashboard Services
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Company-specific AI-powered dashboards with natural language interfaces</li>
                  <li>Business intelligence and analytics</li>
                  <li>Integration with third-party business tools</li>
                  <li>Industry-specific templates and configurations</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  3.2 Decentralized Infrastructure
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Compute:</strong> Distributed processing via Akash Network</li>
                  <li><strong>Storage:</strong> Encrypted file storage via Filecoin/IPFS</li>
                  <li><strong>Blockchain:</strong> Transaction recording on Arbitrum L3</li>
                  <li><strong>Encryption:</strong> Client-side encryption via Lit Protocol</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  3.3 Developer Tools
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Varity SDK and API access</li>
                  <li>Smart contract deployment tools</li>
                  <li>Migration utilities for cloud-to-DePin transitions</li>
                  <li>Documentation and developer resources</li>
                </ul>
              </section>

              {/* Account Registration */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  4. Account Registration and Security
                </h2>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  4.1 Account Creation
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  To access certain features of our Services, you must register for an account. You may register using:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Email address and password</li>
                  <li>Social login (Google, Twitter, Discord)</li>
                  <li>Cryptocurrency wallet connection (MetaMask, Coinbase Wallet, WalletConnect, etc.)</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  4.2 Account Responsibilities
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Providing accurate and complete registration information</li>
                  <li>Maintaining the confidentiality of your account credentials and wallet private keys</li>
                  <li>All activities that occur under your account</li>
                  <li>Immediately notifying us of any unauthorized access or security breach</li>
                  <li>Keeping your wallet secure (we cannot recover lost wallet access)</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  4.3 Wallet Security
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>IMPORTANT:</strong> Your cryptocurrency wallet private keys and seed phrases are your sole responsibility. Varity does not store, have access to, or can recover your private keys. If you lose access to your wallet, you may permanently lose access to your encrypted data and any associated digital assets.
                </p>
              </section>

              {/* Pricing and Payment */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  5. Pricing and Payment
                </h2>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  5.1 Subscription Plans
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Varity offers the following subscription tiers:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Business:</strong> $99/month - Core AI dashboard features</li>
                  <li><strong>Business Pro:</strong> $199/month - Advanced features, priority support</li>
                  <li><strong>Enterprise:</strong> Custom pricing - Dedicated infrastructure, SLA, custom development</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  5.2 Payment Methods
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We accept the following payment methods:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Credit and debit cards (processed via Stripe)</li>
                  <li>Cryptocurrency (USDC on Arbitrum)</li>
                  <li>Bank transfers (Enterprise customers only)</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  5.3 Billing Terms
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Subscriptions are billed monthly or annually in advance</li>
                  <li>Annual subscriptions receive a discount (2 months free)</li>
                  <li>All fees are non-refundable except as expressly stated herein</li>
                  <li>We may change pricing with 30 days&apos; advance notice</li>
                  <li>Failed payments may result in service suspension</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  5.4 Taxes
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  All fees are exclusive of applicable taxes. You are responsible for any taxes, duties, or other governmental assessments associated with your use of the Services, except for taxes based on Varity&apos;s net income.
                </p>
              </section>

              {/* Data Ownership */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  6. Data Ownership and Rights
                </h2>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  6.1 Your Data
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>You retain full ownership of your data.</strong> Varity does not claim any ownership rights to your content, data, or materials uploaded to or processed through our Services (&quot;Your Data&quot;).
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  6.2 License Grant
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  You grant Varity a limited, non-exclusive license to process Your Data solely to provide the Services. Due to our encryption architecture, this license is technically limited - we can only process encrypted data containers, not the underlying content.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  6.3 Data Encryption
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Your Data is encrypted client-side using Lit Protocol before transmission to our infrastructure. You, and only you, hold the decryption keys via your wallet signature. Varity cannot access, read, or modify the unencrypted content of Your Data.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  6.4 Data Portability
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  You may export Your Data at any time through our platform. We provide data export tools in standard formats to ensure you are never locked into our platform.
                </p>
              </section>

              {/* Acceptable Use */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  7. Acceptable Use Policy
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  You agree not to use the Services to:
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  7.1 Prohibited Activities
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Violate any applicable law, regulation, or third-party rights</li>
                  <li>Distribute malware, viruses, or other harmful code</li>
                  <li>Engage in unauthorized access to systems or data</li>
                  <li>Conduct distributed denial-of-service (DDoS) attacks</li>
                  <li>Mine cryptocurrency without authorization</li>
                  <li>Store, process, or transmit illegal content</li>
                  <li>Engage in fraud, money laundering, or terrorist financing</li>
                  <li>Infringe intellectual property rights</li>
                  <li>Harass, abuse, or threaten others</li>
                  <li>Circumvent security measures or access controls</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  7.2 Resource Limits
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Each subscription tier includes specific resource allocations. You agree not to exceed your allocated resources without upgrading your plan. Excessive usage may result in throttling or additional charges.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  7.3 Enforcement
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Violation of this Acceptable Use Policy may result in immediate suspension or termination of your account, without refund, and we may report violations to appropriate authorities.
                </p>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  8. Intellectual Property
                </h2>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  8.1 Varity&apos;s Intellectual Property
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  The Services, including all software, algorithms, user interfaces, designs, documentation, and underlying technology, are owned by Varity or its licensors and are protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Services without our written permission.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  8.2 Trademarks
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  &quot;Varity,&quot; our logo, and other marks are trademarks of Varity Inc. You may not use our trademarks without prior written consent, except for reasonable descriptive references.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  8.3 Open Source
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Certain components of our Services may be provided under open-source licenses. Such components are subject to the terms of their respective licenses, which take precedence over these Terms for those specific components.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  8.4 Feedback
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  If you provide feedback, suggestions, or ideas about our Services, you grant Varity a perpetual, irrevocable, royalty-free license to use that feedback for any purpose without compensation to you.
                </p>
              </section>

              {/* Third-Party Services */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  9. Third-Party Services and Integrations
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Our Services integrate with various third-party services:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Akash Network:</strong> Decentralized compute</li>
                  <li><strong>Filecoin/IPFS:</strong> Decentralized storage</li>
                  <li><strong>Arbitrum:</strong> Blockchain layer</li>
                  <li><strong>Lit Protocol:</strong> Encryption services</li>
                  <li><strong>Stripe:</strong> Payment processing</li>
                  <li><strong>Business integrations:</strong> QuickBooks, Salesforce, and others as configured</li>
                </ul>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Your use of these third-party services is subject to their respective terms and privacy policies. Varity is not responsible for the actions, content, or availability of third-party services.
                </p>
              </section>

              {/* Service Availability */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  10. Service Availability and Modifications
                </h2>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  10.1 Uptime
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We strive to maintain high availability for our Services. Enterprise customers may be eligible for Service Level Agreements (SLAs) with specific uptime guarantees. Standard plans are provided on an &quot;as-is&quot; basis without uptime guarantees.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  10.2 Modifications
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We may modify, suspend, or discontinue any part of the Services at any time. We will provide reasonable notice for material changes that negatively affect your use of the Services.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  10.3 Decentralized Infrastructure
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Our Services rely on decentralized networks (Akash, Filecoin, Arbitrum) that operate independently from Varity. While decentralization provides resilience, we cannot guarantee the performance or availability of these underlying networks.
                </p>
              </section>

              {/* Disclaimers */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  11. Disclaimers
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</strong>
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                  <li>Warranties regarding security, reliability, timeliness, or performance</li>
                  <li>Warranties that the Services will be uninterrupted, error-free, or secure</li>
                  <li>Warranties regarding the accuracy or completeness of any AI-generated content</li>
                  <li>Warranties that defects will be corrected</li>
                </ul>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>BLOCKCHAIN DISCLAIMER:</strong> Blockchain transactions are irreversible. Varity is not responsible for losses resulting from blockchain network issues, smart contract bugs, or user errors in wallet management.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  12. Limitation of Liability
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Varity shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Varity shall not be liable for any loss of profits, data, use, goodwill, or other intangible losses</li>
                  <li>Varity&apos;s total liability for any claims arising from these Terms or the Services shall not exceed the greater of: (a) the amount you paid to Varity in the 12 months preceding the claim, or (b) $100</li>
                </ul>
                <p className="text-body-md text-foreground-secondary mb-4">
                  These limitations apply regardless of the legal theory (contract, tort, or otherwise) and even if Varity has been advised of the possibility of such damages.
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  13. Indemnification
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  You agree to indemnify, defend, and hold harmless Varity, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or in any way connected with:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Your access to or use of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Your Data or content</li>
                  <li>Your use of blockchain technology or cryptocurrency</li>
                </ul>
              </section>

              {/* Dispute Resolution */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  14. Dispute Resolution
                </h2>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  14.1 Informal Resolution
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Before filing a formal dispute, you agree to attempt to resolve the dispute informally by contacting hello@varity.so. We will attempt to resolve the dispute within 60 days.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  14.2 Binding Arbitration
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  If informal resolution fails, any dispute, controversy, or claim arising out of or relating to these Terms shall be resolved by binding arbitration administered by JAMS under its Streamlined Arbitration Rules. The arbitration shall be conducted in San Francisco, California, or remotely at your election.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  14.3 Class Action Waiver
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>YOU AND VARITY AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</strong>
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  14.4 Exceptions
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Notwithstanding the above, either party may seek injunctive relief in any court of competent jurisdiction for infringement of intellectual property rights.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  15. Governing Law
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  These Terms and any dispute arising hereunder shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. The United Nations Convention on Contracts for the International Sale of Goods does not apply.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  16. Termination
                </h2>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  16.1 Termination by You
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  You may terminate your account at any time by contacting hello@varity.so or through your account settings. Monthly subscriptions will terminate at the end of the current billing period. Annual subscriptions are non-refundable but will terminate at the end of the annual period.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  16.2 Termination by Varity
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We may suspend or terminate your access to the Services immediately, without prior notice, if:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>You breach these Terms or the Acceptable Use Policy</li>
                  <li>Your payment is overdue by more than 30 days</li>
                  <li>Required by law or government order</li>
                  <li>We reasonably believe your actions may harm Varity, other users, or third parties</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  16.3 Effect of Termination
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Upon termination:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Your right to access the Services immediately ceases</li>
                  <li>You may export Your Data within 30 days (if not terminated for cause)</li>
                  <li>After 30 days, we will delete Your Data (note: data on Filecoin may persist in encrypted form)</li>
                  <li>Sections 6-8, 11-15, and 18 survive termination</li>
                </ul>
              </section>

              {/* General Provisions */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  17. General Provisions
                </h2>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  17.1 Entire Agreement
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  These Terms, together with our Privacy Policy and Acceptable Use Policy, constitute the entire agreement between you and Varity regarding the Services.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  17.2 Severability
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  17.3 Waiver
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Our failure to enforce any right or provision of these Terms shall not be considered a waiver of those rights.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  17.4 Assignment
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  You may not assign or transfer these Terms without our prior written consent. Varity may assign these Terms without restriction.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  17.5 Force Majeure
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Varity shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, riots, government actions, or failures of third-party networks.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  18. Changes to Terms
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We may update these Terms from time to time. We will notify you of material changes by:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Posting the new Terms on our website with a new &quot;Effective Date&quot;</li>
                  <li>Sending an email notification for significant changes</li>
                  <li>Displaying an in-app notification</li>
                </ul>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Your continued use of the Services after the effective date constitutes acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the Services before the effective date.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  19. Contact Information
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  If you have questions about these Terms, please contact us:
                </p>
                <ul className="list-none text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Legal Inquiries:</strong> hello@varity.so</li>
                  <li><strong>General Support:</strong> hello@varity.so</li>
                  <li><strong>Address:</strong> Varity Inc., [Address to be added]</li>
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
