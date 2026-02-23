const certifications = [
  {
    name: "ISO 27001:2022",
    description: "Information Security Management System",
    detail:
      "Independently certified to the latest ISO 27001:2022 standard, covering the design, development, and operation of Aibidia's transfer pricing platform.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 24l5 5 11-11"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "SOC 2 Type II",
    description: "Trust Services Criteria",
    detail:
      "Audited over an extended observation period, validating that Aibidia's controls for security, availability, and confidentiality operate effectively over time — not just at a single point.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect
          x="6"
          y="10"
          width="36"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M6 18h36"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 26l4 4 8-8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "ISAE 3000 Type II",
    description: "European Assurance Standard",
    detail:
      "Meets the ISAE 3000 (Revised) assurance standard recognized across the EU, providing European-headquartered multinationals with independent validation aligned to their regulatory expectations.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path
          d="M24 4L6 14v12c0 10 8 17 18 20 10-3 18-10 18-20V14L24 4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M17 24l5 5 9-9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  return (
    <section id="overview" className="scroll-mt-20">
      {/* Hero */}
      <div className="bg-grey-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-4">
              Aibidia Trust Center
            </p>
            <h1 className="text-white">
              Enterprise-grade security for the world&apos;s most sensitive
              transfer pricing data
            </h1>
            <p className="mt-6 text-lg text-grey-300 leading-relaxed max-w-2xl">
              Multinational enterprises like Unilever, Nokia, and Olympus trust
              Aibidia to handle their intercompany pricing, financial
              allocations, and cross-border tax data. That trust is built on a
              security posture designed for regulated, audit-critical
              environments — validated by three independent certifications.
            </p>
          </div>
        </div>
      </div>

      {/* Certification Badges */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-center text-sm font-semibold text-grey-400 uppercase tracking-wider mb-10">
            Independently Certified
          </p>
          <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group bg-surface border border-border border-t-2 border-t-brand-500 rounded-[var(--radius-card)] p-5 md:p-8 text-center hover:border-brand-500/30 hover:border-t-brand-600 hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center text-brand-500 mb-5">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-grey-900">
                  {cert.name}
                </h3>
                <p className="text-sm font-medium text-brand-500 mt-1">
                  {cert.description}
                </p>
                <p className="text-sm text-grey-500 mt-3 leading-relaxed">
                  {cert.detail}
                </p>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Positioning Statement */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2>Why security is foundational to transfer pricing</h2>
            <p className="mt-6 leading-relaxed">
              Transfer pricing data sits at the intersection of financial
              reporting, tax compliance, and intercompany governance. It flows
              between ERP systems, crosses jurisdictional boundaries, and is
              subject to audit by tax authorities in every country where a
              multinational operates. A breach doesn&apos;t just expose
              numbers — it exposes an enterprise&apos;s entire intercompany
              economic model.
            </p>
            <p className="mt-4 leading-relaxed">
              Aibidia was built with this context from day one. As a
              Helsinki-headquartered, EU-native platform, security and data
              protection are not retrofit features — they are architectural
              decisions embedded in every layer of the product, from how data is
              ingested from SAP and other ERP systems to how it is stored,
              processed, and made available to distributed finance and tax teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
