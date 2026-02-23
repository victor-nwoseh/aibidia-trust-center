const pillars = [
  {
    title: "GDPR Compliance Posture",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 20h24M20 6c-4 4-6 9-6 14s2 10 6 14c4-4 6-9 6-14s-2-10-6-14z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    lead: "Aibidia is headquartered in Helsinki, Finland — making it an EU-native data processor subject to GDPR from inception, not by adaptation.",
    points: [
      {
        label: "EU-native by design",
        text: "Unlike vendors who retrofit GDPR compliance onto products built for other regulatory environments, Aibidia's platform was designed within the EU legal framework from day one. Data protection principles — lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity, and confidentiality — are embedded in the product architecture.",
      },
      {
        label: "Data protection governance",
        text: "Aibidia maintains a formal data protection program with designated responsibility for privacy compliance. Data protection impact assessments (DPIAs) are conducted for new features and processing activities that involve sensitive financial data, ensuring privacy risks are identified and mitigated before deployment.",
      },
      {
        label: "Data subject rights",
        text: "Aibidia supports its customers in fulfilling data subject rights requests — including access, rectification, erasure, and portability — through documented procedures and platform capabilities. As a data processor, Aibidia acts on the instructions of its customers (the data controllers) in accordance with applicable data processing agreements.",
      },
    ],
  },
  {
    title: "Data Residency & Sovereignty",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="14" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 20h28" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
        <circle cx="16" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
    lead: "Transfer pricing data is jurisdictionally sensitive — it is subject to tax authority scrutiny in every country where an enterprise operates. Data residency is not optional; it is a compliance requirement.",
    points: [
      {
        label: "EU-default hosting",
        text: "By default, all customer data is hosted within EU-based Azure data centers. This ensures that data residency requirements under GDPR and national data protection laws are met without additional configuration or contractual negotiation.",
      },
      {
        label: "Regional availability",
        text: "For customers with specific data sovereignty requirements — such as mandates to keep data within a particular country or region — Aibidia offers configurable data residency options leveraging Azure's global data center footprint. This is particularly relevant for multinationals with subsidiaries in jurisdictions with strict data localization laws.",
      },
      {
        label: "Transparency on data location",
        text: "Aibidia provides clear documentation on where customer data is stored and processed. There are no hidden data transfers or undisclosed processing locations. Customers know exactly which Azure regions host their data at all times.",
      },
    ],
  },
  {
    title: "Data Processing Safeguards",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 4L6 12v8c0 9 6 16 14 18 8-2 14-9 14-18v-8L20 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 20l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lead: "As a processor of sensitive financial and intercompany transaction data, Aibidia enforces strict safeguards on how data is handled throughout its lifecycle.",
    points: [
      {
        label: "Purpose limitation",
        text: "Customer data is processed solely for the purposes defined in the data processing agreement — transfer pricing analysis, documentation, and compliance reporting. Aibidia does not use customer data for product analytics, model training, or any secondary purpose without explicit authorization.",
      },
      {
        label: "Data isolation",
        text: "Customer environments are logically isolated at the application, database, and infrastructure layers. One customer's transfer pricing data is never accessible to another customer, and Aibidia's architecture ensures strict tenant separation across all processing operations.",
      },
      {
        label: "Processing records",
        text: "Aibidia maintains records of processing activities (ROPA) as required under GDPR Article 30. These records document the categories of data processed, processing purposes, data recipients, and retention periods — available for regulatory inspection and customer review.",
      },
    ],
  },
  {
    title: "Sub-Processor Transparency",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="26" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="26" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 19l-1 2M23 19l1 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    lead: "Enterprise customers need to understand not just how Aibidia handles their data, but which third parties are involved in processing it.",
    points: [
      {
        label: "Sub-processor register",
        text: "Aibidia maintains a current register of all sub-processors involved in the processing of customer data. This includes the sub-processor's identity, location, and the specific processing function they perform. The register is made available to customers and updated whenever changes occur.",
      },
      {
        label: "Due diligence and contractual controls",
        text: "Before engaging any sub-processor, Aibidia conducts a security and privacy due diligence assessment. Sub-processors are bound by data processing agreements that impose obligations equivalent to those in Aibidia's own customer agreements, ensuring consistent protection standards throughout the processing chain.",
      },
      {
        label: "Change notification",
        text: "Customers are notified in advance of any changes to Aibidia's sub-processor list, providing them with the opportunity to assess and, where applicable, object to the engagement of new sub-processors — in accordance with GDPR Article 28 requirements.",
      },
    ],
  },
  {
    title: "Data Retention & Deletion",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 12v8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lead: "Transfer pricing documentation is subject to statutory retention periods that vary by jurisdiction — typically 7 to 10 years in most tax regimes. Aibidia's retention policies are designed to support these requirements while respecting data minimization principles.",
    points: [
      {
        label: "Configurable retention periods",
        text: "Customers can configure data retention periods aligned to their jurisdictional and internal compliance requirements. Aibidia's platform supports retention policies that reflect the varying statutory obligations across the countries where a multinational operates.",
      },
      {
        label: "Secure deletion",
        text: "When data reaches the end of its retention period — or upon customer request — it is securely deleted from all primary and backup systems. Deletion is performed using methods that render data unrecoverable, and confirmation of deletion is provided to the customer upon request.",
      },
      {
        label: "Contract termination",
        text: "Upon termination of a customer agreement, Aibidia provides a defined data export period during which the customer can retrieve their data in a standard, portable format. After this period, all customer data is securely deleted in accordance with the agreed data processing terms.",
      },
    ],
  },
  {
    title: "Cross-Border Data Transfers",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 20h24M8 20l5-5M8 20l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 14H8M32 14l-5-5M32 14l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 26H8M32 26l-5-5M32 26l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lead: "Transfer pricing is inherently cross-border — multinational enterprises manage intercompany transactions across dozens of jurisdictions. The data flows that support this work must comply with international data transfer regulations.",
    points: [
      {
        label: "EU Standard Contractual Clauses",
        text: "Where personal data is transferred outside the EEA, Aibidia relies on EU Standard Contractual Clauses (SCCs) adopted by the European Commission. These are incorporated into Aibidia's data processing agreements and supplemented with transfer impact assessments as required by the Schrems II decision.",
      },
      {
        label: "Transfer impact assessments",
        text: "Aibidia conducts transfer impact assessments (TIAs) for international data flows, evaluating the legal framework in the destination country and implementing supplementary technical and organizational measures where necessary to maintain an essentially equivalent level of data protection.",
      },
      {
        label: "Minimizing cross-border exposure",
        text: "By defaulting to EU-based hosting and enabling regional data residency configurations, Aibidia minimizes the need for cross-border data transfers in the first place. Where transfers are necessary — such as for global support operations — they are limited in scope, encrypted in transit, and governed by appropriate transfer mechanisms.",
      },
    ],
  },
];

import ScrollReveal from "./ScrollReveal";

export default function DataProtection() {
  return (
    <section id="data-protection" className="scroll-mt-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Section header */}
        <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Data Protection &amp; Privacy
          </p>
          <h2>
            Protecting the data that multinationals can&apos;t afford to expose
          </h2>
          <p className="mt-6">
            Transfer pricing data reveals how a multinational structures its
            intercompany economics — pricing policies, cost allocations, profit
            distributions, and the rationale behind them. This data is audited
            by tax authorities, scrutinized by regulators, and central to
            financial reporting. Aibidia&apos;s data protection framework is
            built for this level of sensitivity.
          </p>
        </div>
        </ScrollReveal>

        {/* Pillars */}
        <ScrollReveal>
        <div className="space-y-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface border border-border rounded-[var(--radius-card)] p-5 md:p-8 lg:p-10"
            >
              {/* Pillar header */}
              <div className="flex items-start gap-4 mb-2">
                <div className="text-brand-500 shrink-0 mt-0.5">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-grey-900">
                    {pillar.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-grey-600 leading-relaxed mb-6 ml-0 md:ml-14">
                {pillar.lead}
              </p>

              {/* Points grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ml-0 md:ml-14">
                {pillar.points.map((point) => (
                  <div key={point.label}>
                    <h4 className="text-sm font-semibold text-grey-800 mb-1.5">
                      {point.label}
                    </h4>
                    <p className="text-sm text-grey-500 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
