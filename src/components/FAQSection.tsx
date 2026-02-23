"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "Where is customer data hosted? What regions are available?",
    answer:
      "All customer data is hosted on Microsoft Azure, with EU-based data centers as the default. Aibidia leverages Azure's global infrastructure to offer additional regional hosting options for customers with specific data residency or sovereignty requirements. The exact Azure regions in use are documented in Aibidia's data processing agreements, and customers are informed of any changes to hosting locations.",
  },
  {
    question: "How is data encrypted at rest and in transit?",
    answer:
      "Data at rest is encrypted using AES-256 encryption, with keys managed through Azure Key Vault and protected by FIPS 140-2 Level 2 validated hardware security modules. All data in transit is protected with TLS 1.2 or higher — this applies to client-to-server communications, internal service-to-service traffic, and data flows between the Aibidia platform and customer ERP systems such as SAP S/4HANA. Key rotation is enforced automatically in accordance with Aibidia's cryptographic key management policy.",
  },
  {
    question: "Do you support SSO and SAML integration?",
    answer:
      "Yes. Aibidia supports Single Sign-On via SAML 2.0, allowing enterprise customers to integrate with their existing identity providers (e.g., Azure AD, Okta, Ping Identity). This enables centralized identity governance, consistent access policies, and a seamless authentication experience for users. Multi-factor authentication (MFA) is enforced for all accounts regardless of whether SSO is configured.",
  },
  {
    question: "What is your incident response process?",
    answer:
      "Aibidia maintains a formal incident response plan that follows a structured lifecycle: detection, triage, containment, eradication, recovery, and post-incident review. Security incidents are classified by severity, with defined escalation paths and response SLAs. In the event of a confirmed data breach affecting customer data, Aibidia notifies impacted customers without undue delay and within the timeframes required by GDPR (72 hours to supervisory authorities) and applicable contractual obligations. Post-incident reviews produce root cause analyses and remediation actions that are tracked to completion.",
  },
  {
    question: "How do you handle vulnerability disclosures?",
    answer:
      "Aibidia operates a coordinated vulnerability disclosure process. Security researchers and customers can report vulnerabilities through a dedicated security contact. Reported vulnerabilities are triaged within 24 hours, assessed for risk and impact, and remediated according to defined SLAs — critical vulnerabilities in production-facing systems are addressed within 24 hours. Aibidia also conducts regular vulnerability scanning and dependency analysis as part of its CI/CD pipeline, and subscribes to threat intelligence feeds relevant to its technology stack.",
  },
  {
    question: "What are your data retention and deletion policies?",
    answer:
      "Data retention periods are configurable per customer, supporting the varying statutory retention requirements across jurisdictions — typically 7 to 10 years for transfer pricing documentation. When data reaches the end of its retention period or upon customer request, it is securely deleted from all primary and backup systems using methods that render it unrecoverable. Upon contract termination, customers are provided a defined data export period to retrieve their data in a standard format before secure deletion is performed.",
  },
  {
    question: "Do you perform regular penetration testing?",
    answer:
      "Yes. Aibidia engages independent third-party security firms to conduct penetration testing at least annually, covering the application layer, infrastructure, and API surfaces. Testing is scoped to reflect real-world attack scenarios relevant to a SaaS platform handling sensitive financial data. Findings are risk-rated, remediated according to defined SLAs, and retested to confirm resolution. A summary of the most recent penetration test — including scope, methodology, and remediation status — is available to customers and prospects under NDA.",
  },
  {
    question: "How is access to customer data controlled internally?",
    answer:
      "Internal access to customer data follows strict least-privilege principles. Aibidia employees do not have standing access to customer environments. Access requires explicit, time-bound justification approved through a formal access request process. All access events are logged immutably and subject to regular review. Production access is restricted to a small number of authorized personnel, and administrative actions are monitored through Azure Security Center with automated alerting for anomalous behavior.",
  },
  {
    question: "What happens to our data upon contract termination?",
    answer:
      "Upon termination, Aibidia provides a data export period (defined in the customer agreement) during which all customer data can be exported in a standard, portable format. After the export period expires, all customer data — including backups and derived datasets — is securely deleted from Aibidia's systems. A certificate of deletion is provided upon request, confirming that no customer data is retained beyond the agreed termination process.",
  },
  {
    question: "How do you ensure data isolation between tenants?",
    answer:
      "Aibidia implements strict multi-tenant isolation at multiple layers. Customer data is logically separated at the application and database levels, with tenant-specific access controls enforced on every data operation. Infrastructure-level network segmentation further isolates processing environments. Access control policies are enforced at the API gateway, ensuring that authentication tokens are scoped to a single tenant and cannot be used to access another customer's data. This architecture is validated through regular penetration testing that specifically includes tenant isolation testing scenarios.",
  },
  {
    question: "What compliance certifications do you hold?",
    answer:
      "Aibidia holds three independent certifications: ISO 27001:2022 (covering the design, development, and operation of the platform), SOC 2 Type II (covering Security, Availability, and Confidentiality trust service criteria over an extended audit period), and ISAE 3000 Type II (the European assurance standard, providing GDPR-aligned validation for EU-headquartered customers). Certificates and audit report summaries are available to customers and qualified prospects under NDA.",
  },
  {
    question: "How does Aibidia secure data ingestion from our ERP systems?",
    answer:
      "Data ingestion from ERP systems — including SAP S/4HANA, Oracle, and other financial platforms — occurs over encrypted, authenticated connections. Aibidia's ERP connectors use dedicated service-level credentials scoped to read-only access on the specific data objects required for transfer pricing analysis. No broader access is requested or required. Data integrity is validated at every stage of the ingestion pipeline, ensuring that financial data in Aibidia matches the source system exactly. Connector credentials are stored in encrypted vaults and rotated according to the customer's security policies.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-[var(--radius-card)] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-surface transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-grey-900 pr-4">
          {question}
        </span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className={`w-5 h-5 text-grey-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5 pt-0">
          <p className="text-sm text-grey-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Section header */}
        <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Enterprise Security FAQ
          </p>
          <h2>Questions your security team will ask</h2>
          <p className="mt-6">
            These are the questions that come up in every enterprise security
            review and vendor assessment. If you&apos;re evaluating Aibidia for
            your organization, this section is designed to give you direct,
            substantive answers — not marketing generalities.
          </p>
        </div>
        </ScrollReveal>

        {/* FAQ list */}
        <ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
