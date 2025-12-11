import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Acceptable Use Policy - Varity",
  description: "Varity Acceptable Use Policy - Guidelines for appropriate use of our decentralized infrastructure platform and AI Dashboard services.",
};

export default function AcceptableUsePage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-display-lg font-display font-bold mb-4">
              Acceptable Use Policy
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
                  This Acceptable Use Policy (&quot;AUP&quot;) governs your use of Varity Inc.&apos;s (&quot;Varity,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) services, including our AI Dashboard platform, decentralized infrastructure, APIs, SDKs, and related services (collectively, the &quot;Services&quot;). This AUP is incorporated into and forms part of our <Link href="/terms" className="text-brand-500 hover:text-brand-400 underline">Terms of Service</Link>.
                </p>
                <p className="text-body-md text-foreground-secondary mb-4">
                  By using our Services, you agree to comply with this AUP. We may modify this AUP at any time by posting the revised version on our website. Continued use of the Services after such modifications constitutes acceptance of the updated AUP.
                </p>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>Important:</strong> While Varity&apos;s decentralized architecture means we cannot access the encrypted content of your data, we can observe metadata, access patterns, and resource usage. Violations of this AUP may result in account suspension or termination.
                </p>
              </section>

              {/* General Principles */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  2. General Principles
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Your use of the Services must comply with the following principles:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Lawful Use:</strong> Use the Services only for lawful purposes and in compliance with all applicable laws and regulations</li>
                  <li><strong>Respect for Others:</strong> Do not interfere with or disrupt other users&apos; access to or use of the Services</li>
                  <li><strong>Security:</strong> Maintain the security of your account and take reasonable steps to prevent unauthorized access</li>
                  <li><strong>Integrity:</strong> Do not attempt to circumvent, disable, or interfere with security features of the Services</li>
                  <li><strong>Responsibility:</strong> You are responsible for all activities that occur under your account</li>
                </ul>
              </section>

              {/* Prohibited Uses - Illegal Activities */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  3. Prohibited Uses - Illegal Activities
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  You may not use the Services to engage in, facilitate, or promote any illegal activities, including but not limited to:
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  3.1 Criminal Activities
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Fraud, theft, or financial crimes</li>
                  <li>Money laundering or terrorist financing</li>
                  <li>Tax evasion or other violations of tax law</li>
                  <li>Trafficking in illegal goods or services</li>
                  <li>Human trafficking or exploitation</li>
                  <li>Child sexual abuse material (CSAM)</li>
                  <li>Illegal gambling operations</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  3.2 Regulatory Violations
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Violating sanctions, export controls, or trade restrictions</li>
                  <li>Unregistered securities offerings or securities fraud</li>
                  <li>Operating without required licenses or permits</li>
                  <li>Violating privacy laws (GDPR, CCPA, HIPAA, etc.)</li>
                  <li>Anti-money laundering (AML) or know-your-customer (KYC) violations</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  3.3 Intellectual Property Violations
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Copyright infringement or piracy</li>
                  <li>Trademark infringement or counterfeiting</li>
                  <li>Patent infringement</li>
                  <li>Trade secret theft</li>
                  <li>Distribution of circumvention tools (DMCA violations)</li>
                </ul>
              </section>

              {/* Prohibited Uses - Harmful Content */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  4. Prohibited Uses - Harmful Content
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  You may not use the Services to store, process, transmit, or distribute:
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  4.1 Harmful or Abusive Content
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Content that promotes violence, terrorism, or extremism</li>
                  <li>Hate speech targeting individuals or groups based on protected characteristics</li>
                  <li>Content that harasses, threatens, defames, or intimidates individuals</li>
                  <li>Non-consensual intimate imagery</li>
                  <li>Content promoting self-harm or suicide</li>
                  <li>Disinformation campaigns designed to mislead or manipulate</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  4.2 Malicious Content
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Viruses, worms, Trojan horses, or other malware</li>
                  <li>Ransomware or cryptolocker software</li>
                  <li>Phishing kits or credential harvesting tools</li>
                  <li>Botnets, command-and-control infrastructure, or zombie networks</li>
                  <li>Exploit kits or vulnerability scanners used for malicious purposes</li>
                  <li>Spam distribution software or tools</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  4.3 Deceptive Content
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Fraudulent websites or applications</li>
                  <li>Impersonation of individuals, companies, or government agencies</li>
                  <li>Fake reviews, testimonials, or endorsements</li>
                  <li>Artificially inflated metrics or engagement</li>
                </ul>
              </section>

              {/* Security Violations */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  5. Security Violations
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  You may not engage in activities that compromise the security or integrity of our Services or third-party systems:
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  5.1 Unauthorized Access
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Accessing systems, data, or accounts without authorization</li>
                  <li>Attempting to probe, scan, or test vulnerabilities of any system</li>
                  <li>Circumventing authentication or security controls</li>
                  <li>Using stolen credentials or impersonating other users</li>
                  <li>Intercepting, monitoring, or tampering with communications without consent</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  5.2 Service Disruption
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Distributed denial-of-service (DDoS) attacks</li>
                  <li>Intentionally overloading or disrupting our infrastructure</li>
                  <li>Interfering with the proper functioning of the Services</li>
                  <li>Introducing malicious code into our systems</li>
                  <li>Attempting to degrade performance for other users</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  5.3 Blockchain-Specific Violations
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Exploiting smart contract vulnerabilities for personal gain</li>
                  <li>Front-running or sandwich attacks on other users&apos; transactions</li>
                  <li>Attempting to manipulate consensus or validation mechanisms</li>
                  <li>Creating or distributing tools for blockchain exploitation</li>
                </ul>
              </section>

              {/* Resource Abuse */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  6. Resource Abuse
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  You must use our resources responsibly and within the limits of your subscription tier:
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  6.1 Compute Resources
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Do not exceed your allocated compute resources (CPU, memory, GPU)</li>
                  <li>Do not run cryptocurrency mining without explicit authorization</li>
                  <li>Do not run computationally intensive workloads designed to abuse shared resources</li>
                  <li>Do not use automated scripts that excessively consume API rate limits</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  6.2 Storage Resources
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Do not exceed your allocated storage quota</li>
                  <li>Do not use the Services primarily as a file hosting or backup service</li>
                  <li>Do not store large amounts of data unrelated to legitimate business use</li>
                  <li>Do not upload excessive duplicate content</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  6.3 Network Resources
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Do not exceed your allocated bandwidth</li>
                  <li>Do not use the Services to operate high-traffic CDN or proxy services</li>
                  <li>Do not use the Services to relay large volumes of traffic through third-party systems</li>
                </ul>
              </section>

              {/* AI and LLM Usage */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  7. AI and LLM Usage
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Special guidelines apply to the use of our AI Dashboard and LLM features:
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  7.1 Prohibited AI Uses
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Generating content that violates Section 4 (Harmful Content)</li>
                  <li>Attempting to jailbreak, bypass, or circumvent AI safety measures</li>
                  <li>Using AI to create deepfakes or synthetic media for deceptive purposes</li>
                  <li>Automated generation of spam or misleading content at scale</li>
                  <li>Using AI to evade detection of prohibited activities</li>
                  <li>Training competing AI models using our API outputs</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  7.2 Responsible AI Use
                </h3>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Clearly disclose AI-generated content when required by law or platform policies</li>
                  <li>Do not represent AI outputs as human-generated work when disclosure is required</li>
                  <li>Review AI outputs before making critical business decisions</li>
                  <li>Do not rely on AI for medical, legal, or financial advice without professional review</li>
                </ul>
              </section>

              {/* Email and Communications */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  8. Email and Communications
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  If you use our Services to send emails or other communications:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Comply with all applicable anti-spam laws (CAN-SPAM, CASL, GDPR, etc.)</li>
                  <li>Only send emails to recipients who have opted in to receive them</li>
                  <li>Include accurate sender information and valid unsubscribe mechanisms</li>
                  <li>Do not send unsolicited bulk email (spam)</li>
                  <li>Do not forge headers or manipulate identifiers to disguise the origin of messages</li>
                  <li>Do not harvest email addresses from websites or services without consent</li>
                  <li>Maintain bounce and complaint rates within acceptable thresholds</li>
                </ul>
              </section>

              {/* Third-Party Integrations */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  9. Third-Party Integrations
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  When using our Services to integrate with third-party platforms:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Comply with the terms of service and acceptable use policies of integrated platforms</li>
                  <li>Do not use integrations to scrape, harvest, or extract data without authorization</li>
                  <li>Do not exceed API rate limits of integrated services</li>
                  <li>Obtain proper authorization before accessing third-party data</li>
                  <li>Respect the privacy and data protection requirements of integrated platforms</li>
                </ul>
              </section>

              {/* Enforcement */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  10. Enforcement
                </h2>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  10.1 Monitoring and Detection
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  While we respect your privacy and cannot access encrypted content, we may monitor:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Resource usage patterns and consumption metrics</li>
                  <li>API access patterns and rate limit compliance</li>
                  <li>Network traffic patterns and volumes</li>
                  <li>Blockchain transaction patterns</li>
                  <li>User reports and complaints</li>
                  <li>Publicly visible information</li>
                </ul>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  10.2 Consequences of Violations
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Violations of this AUP may result in:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Warning:</strong> Written notice of the violation with required corrective action</li>
                  <li><strong>Throttling:</strong> Temporary reduction of resource limits</li>
                  <li><strong>Suspension:</strong> Temporary suspension of account access</li>
                  <li><strong>Termination:</strong> Permanent termination of your account without refund</li>
                  <li><strong>Legal Action:</strong> Referral to law enforcement or initiation of civil proceedings</li>
                </ul>
                <p className="text-body-md text-foreground-secondary mb-4">
                  The severity of our response will depend on the nature, severity, and frequency of violations. We reserve the right to take immediate action without prior warning for severe violations.
                </p>

                <h3 className="text-heading-md font-semibold text-foreground mt-8 mb-3">
                  10.3 Appeals
                </h3>
                <p className="text-body-md text-foreground-secondary mb-4">
                  If you believe your account was suspended or terminated in error, you may appeal by contacting hello@varity.so within 30 days. Include your account details and an explanation of why you believe the action was taken in error.
                </p>
              </section>

              {/* Reporting Violations */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  11. Reporting Violations
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  If you become aware of any violation of this AUP, please report it to us:
                </p>
                <ul className="list-none text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>Email:</strong> hello@varity.so</li>
                  <li><strong>Security Issues:</strong> hello@varity.so</li>
                  <li><strong>DMCA/Copyright:</strong> hello@varity.so</li>
                </ul>
                <p className="text-body-md text-foreground-secondary mb-4">
                  When reporting, please include:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>Description of the violation</li>
                  <li>Relevant URLs, account identifiers, or transaction hashes</li>
                  <li>Evidence supporting your report (screenshots, logs, etc.)</li>
                  <li>Your contact information for follow-up</li>
                </ul>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We take all reports seriously and will investigate promptly. However, we cannot guarantee specific outcomes or share details of our enforcement actions due to privacy considerations.
                </p>
              </section>

              {/* Cooperation with Authorities */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  12. Cooperation with Authorities
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We may cooperate with law enforcement and regulatory authorities:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li>When required by valid legal process (subpoenas, court orders, etc.)</li>
                  <li>To investigate potential criminal activity</li>
                  <li>To protect the safety of individuals</li>
                  <li>To protect our rights, property, and the integrity of the Services</li>
                </ul>
                <p className="text-body-md text-foreground-secondary mb-4">
                  <strong>Important:</strong> Due to our encryption architecture, we cannot provide decrypted user data to authorities - we do not possess decryption keys. We can only provide metadata, access logs, and account information.
                </p>
              </section>

              {/* Modifications */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  13. Modifications to This Policy
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  We may update this Acceptable Use Policy from time to time. Changes will be effective when posted on our website with an updated effective date. For material changes, we will provide notice via email or in-app notification.
                </p>
                <p className="text-body-md text-foreground-secondary mb-4">
                  Your continued use of the Services after changes become effective constitutes acceptance of the updated AUP.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  14. Contact Information
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  For questions about this Acceptable Use Policy, please contact us:
                </p>
                <ul className="list-none text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><strong>General Inquiries:</strong> hello@varity.so</li>
                  <li><strong>Abuse Reports:</strong> hello@varity.so</li>
                  <li><strong>Security Issues:</strong> hello@varity.so</li>
                  <li><strong>DMCA/Copyright:</strong> hello@varity.so</li>
                </ul>
              </section>

              {/* Related Policies */}
              <section>
                <h2 className="text-heading-lg font-semibold text-foreground mt-12 mb-4">
                  15. Related Policies
                </h2>
                <p className="text-body-md text-foreground-secondary mb-4">
                  This Acceptable Use Policy should be read in conjunction with:
                </p>
                <ul className="list-disc list-inside text-body-md text-foreground-secondary space-y-2 mb-4">
                  <li><Link href="/terms" className="text-brand-500 hover:text-brand-400 underline">Terms of Service</Link> - Governs your overall use of our Services</li>
                  <li><Link href="/privacy" className="text-brand-500 hover:text-brand-400 underline">Privacy Policy</Link> - Explains how we handle your personal information</li>
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
