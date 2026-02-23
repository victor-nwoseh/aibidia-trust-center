const frameworks = [
  {
    name: "ISO 27001:2022",
    badge: "Certified",
    tagline: "International Information Security Standard",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    overview:
      "ISO 27001 is the internationally recognized standard for information security management systems (ISMS). Aibidia holds certification to the 2022 revision — the most current version — which incorporates updated controls for cloud services, threat intelligence, and data leakage prevention.",
    scopeTitle: "Certification Scope",
    scopeItems: [
      "Design, development, and operation of the Aibidia transfer pricing platform",
      "Supporting infrastructure and cloud services hosted on Microsoft Azure",
      "Internal processes for HR, access management, and vendor oversight",
      "Incident management and business continuity procedures",
    ],
    details: [
      {
        label: "What this means for customers",
        text: "Aibidia maintains a formally documented ISMS with defined risk treatment plans, regular internal audits, and management reviews. This gives enterprise procurement teams confidence that security is governed systematically — not ad hoc.",
      },
      {
        label: "Continuous improvement cycle",
        text: "ISO 27001 requires ongoing surveillance audits (typically annual) and a full recertification cycle every three years. Aibidia's ISMS is continuously updated based on risk assessments, audit findings, and changes to the threat landscape affecting financial and tax data.",
      },
    ],
  },
  {
    name: "SOC 2 Type II",
    badge: "Audited",
    tagline: "AICPA Trust Services Criteria",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 22h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 28h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 30l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    overview:
      "SOC 2 is the dominant security assurance framework for SaaS companies selling into the US enterprise market. Aibidia holds a Type II report, meaning an independent auditor has verified that Aibidia's controls not only exist but operate effectively over an extended observation period — typically 6 to 12 months.",
    scopeTitle: "Trust Service Criteria Covered",
    scopeItems: [
      "Security — protection of systems and data against unauthorized access",
      "Availability — systems are operational and accessible as committed",
      "Confidentiality — information designated as confidential is protected appropriately",
    ],
    details: [
      {
        label: "Type II vs. Type I",
        text: "A Type I report confirms controls are designed properly at a specific point in time. A Type II report goes further — it evaluates whether those controls operated effectively throughout the audit period. For enterprise buyers evaluating Aibidia, this distinction matters: Type II demonstrates sustained operational discipline, not a one-time snapshot.",
      },
      {
        label: "Relevance for US market expansion",
        text: "As Aibidia expands into the US enterprise market, the SOC 2 Type II report is often the first document requested by security and procurement teams. It provides a standardized, auditor-verified view of Aibidia's control environment in the format that US-based multinationals expect.",
      },
    ],
  },
  {
    name: "ISAE 3000 Type II",
    badge: "Assured",
    tagline: "European Assurance Standard",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        <path d="M24 4L6 14v12c0 10 8 17 18 20 10-3 18-10 18-20V14L24 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 18h18M15 24h18M15 30h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    overview:
      "ISAE 3000 (Revised) is an international assurance standard issued by IAASB, widely recognized across Europe. Aibidia's ISAE 3000 Type II report provides European-headquartered multinationals with an independent assurance engagement that aligns with EU regulatory expectations — particularly relevant for organizations subject to GDPR and EU corporate governance requirements.",
    scopeTitle: "Assurance Coverage",
    scopeItems: [
      "Controls over data processing, storage, and transfer within the Aibidia platform",
      "Privacy and data protection safeguards aligned with GDPR principles",
      "Organizational and technical measures supporting the security of personal and financial data",
      "Third-party and sub-processor governance",
    ],
    details: [
      {
        label: "Why ISAE 3000 matters alongside SOC 2",
        text: "While SOC 2 is the standard US enterprises expect, many European multinationals — particularly those in the DACH region and Nordics — prefer or require ISAE 3000 assurance. By holding both, Aibidia meets the compliance expectations of its global customer base without requiring customers to map between frameworks.",
      },
      {
        label: "GDPR validation",
        text: "The ISAE 3000 engagement covers controls directly relevant to GDPR compliance, including data minimization, purpose limitation, storage limitation, and data subject rights. For Aibidia's customers, this provides third-party validation that Aibidia's data processing activities align with EU data protection law.",
      },
    ],
  },
];

import ScrollReveal from "./ScrollReveal";

export default function ComplianceSection() {
  return (
    <section id="compliance" className="scroll-mt-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Section header */}
        <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Compliance
          </p>
          <h2>Three independent certifications, one consistent standard</h2>
          <p className="mt-6">
            Aibidia maintains three complementary compliance certifications,
            covering international, US, and European assurance frameworks. Each
            is independently audited and reflects Aibidia&apos;s commitment to
            meeting enterprise security expectations across every market it
            serves.
          </p>
        </div>
        </ScrollReveal>

        {/* Framework cards */}
        <ScrollReveal>
        <div className="space-y-10">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="bg-surface border border-border rounded-[var(--radius-card)] overflow-hidden"
            >
              {/* Card header */}
              <div className="bg-white px-5 py-6 md:px-8 md:py-8 border-b border-border">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="text-brand-500 shrink-0">{fw.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold text-grey-900">
                        {fw.name}
                      </h3>
                      <span className="inline-flex px-3 py-0.5 text-xs font-semibold bg-brand-500/10 text-brand-600 rounded-[var(--radius-badge)]">
                        {fw.badge}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-grey-500 mt-1">
                      {fw.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-grey-600 leading-relaxed mt-6 max-w-4xl">
                  {fw.overview}
                </p>
              </div>

              {/* Card body */}
              <div className="px-5 py-6 md:px-8 md:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Scope */}
                  <div>
                    <h4 className="text-sm font-semibold text-grey-800 uppercase tracking-wider mb-4">
                      {fw.scopeTitle}
                    </h4>
                    <ul className="space-y-3">
                      {fw.scopeItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="w-5 h-5 text-brand-500 shrink-0 mt-0.5"
                          >
                            <path
                              d="M6 10l3 3 5-5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-grey-600 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details */}
                  <div className="space-y-5">
                    {fw.details.map((detail) => (
                      <div key={detail.label}>
                        <h4 className="text-sm font-semibold text-grey-800">
                          {detail.label}
                        </h4>
                        <p className="text-sm text-grey-500 mt-1.5 leading-relaxed">
                          {detail.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>

        {/* Compliance roadmap */}
        <ScrollReveal>
        <div className="mt-16 bg-grey-900 rounded-[var(--radius-card)] px-5 py-8 md:px-8 md:py-10 text-center">
          <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">
            Looking Ahead
          </p>
          <h3 className="text-xl font-bold text-white">
            Compliance roadmap
          </h3>
          <p className="text-sm text-grey-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            As Aibidia scales into new markets and industry verticals, the
            compliance program continues to evolve. Potential future
            certifications under evaluation include CSA STAR for cloud-specific
            assurance, ISO 27701 for privacy information management, and
            region-specific frameworks as customer requirements dictate.
          </p>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
