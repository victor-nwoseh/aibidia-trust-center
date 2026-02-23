const domains = [
  {
    title: "Cloud Infrastructure",
    subtitle: "Microsoft Azure",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 14h32" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="11" r="1" fill="currentColor" />
        <circle cx="13" cy="11" r="1" fill="currentColor" />
        <circle cx="17" cy="11" r="1" fill="currentColor" />
        <rect x="10" y="20" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="22" y="20" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    points: [
      {
        label: "Azure-hosted platform",
        description:
          "Aibidia's platform runs on Microsoft Azure, leveraging Azure's SOC 1/2/3, ISO 27001, and CSA STAR certified data centers. Infrastructure is provisioned in EU regions by default, with additional region availability for data residency requirements.",
      },
      {
        label: "Network segmentation",
        description:
          "Production environments are isolated using Azure Virtual Networks with strict network security groups. Customer-facing services are separated from internal processing and data layers through defense-in-depth network architecture.",
      },
      {
        label: "Infrastructure as Code",
        description:
          "All infrastructure is defined and deployed through version-controlled templates, ensuring reproducibility, auditability, and eliminating configuration drift across environments.",
      },
    ],
  },
  {
    title: "Application Security",
    subtitle: "Secure SDLC",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 12h24v20H8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 8h16v4H12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 20l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    points: [
      {
        label: "Secure development lifecycle",
        description:
          "Security is embedded in every phase of development. Threat modeling is performed for new features, and security requirements are defined alongside functional requirements before implementation begins.",
      },
      {
        label: "Code review and static analysis",
        description:
          "All code changes undergo mandatory peer review. Automated static analysis and dependency scanning run in CI/CD pipelines, catching vulnerabilities before code reaches production.",
      },
      {
        label: "Vulnerability management",
        description:
          "Structured vulnerability management includes regular scanning, risk-based prioritization, and defined SLAs for remediation. Critical vulnerabilities in production-facing systems are addressed within 24 hours.",
      },
    ],
  },
  {
    title: "Data Encryption",
    subtitle: "At Rest & In Transit",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="10" y="18" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 18v-4a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="25" r="2" fill="currentColor" />
        <path d="M20 27v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    points: [
      {
        label: "Encryption at rest",
        description:
          "All customer data is encrypted at rest using AES-256 encryption. Azure-managed encryption keys are protected by FIPS 140-2 Level 2 validated hardware security modules, with key rotation policies enforced automatically.",
      },
      {
        label: "Encryption in transit",
        description:
          "All data in transit is protected using TLS 1.2 or higher. This applies to all client-to-server communications, internal service-to-service traffic, and data flows between Aibidia's platform and customer ERP systems.",
      },
      {
        label: "Key management",
        description:
          "Encryption keys are managed through Azure Key Vault with strict access policies. Key usage is fully audited, and separation of duties ensures that no single individual can access both encrypted data and its decryption keys.",
      },
    ],
  },
  {
    title: "Access Controls",
    subtitle: "Identity & Authorization",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 20l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    points: [
      {
        label: "Role-based access control",
        description:
          "Aibidia implements granular role-based access control within the platform. Customer administrators define roles aligned to their organizational structure — ensuring transfer pricing analysts, tax directors, and regional controllers see only the data relevant to their responsibilities.",
      },
      {
        label: "Multi-factor authentication & SSO",
        description:
          "MFA is enforced for all user accounts. Enterprise customers can integrate their existing identity providers via SAML 2.0 SSO, enabling centralized identity governance and ensuring Aibidia fits within their existing IAM frameworks.",
      },
      {
        label: "Least privilege principle",
        description:
          "Internal access to production systems follows strict least-privilege policies. Aibidia employees require explicit, time-bound justification for access to customer environments, with all access events logged and reviewed.",
      },
    ],
  },
  {
    title: "Monitoring & Logging",
    subtitle: "Continuous Visibility",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 22h6l3-6 4 10 3-8 4 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 32h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 28v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    points: [
      {
        label: "Continuous security monitoring",
        description:
          "Aibidia maintains 24/7 monitoring of infrastructure and application health. Azure Monitor and Azure Security Center provide real-time threat detection, with automated alerting for anomalous patterns such as unusual data access or authentication failures.",
      },
      {
        label: "Comprehensive audit logging",
        description:
          "All significant system events — user logins, data access, configuration changes, and administrative actions — are logged immutably. Audit logs are retained in accordance with compliance requirements and are available for customer review upon request.",
      },
      {
        label: "Anomaly detection",
        description:
          "Behavioral analytics identify deviations from normal usage patterns. This includes detection of atypical data export volumes, access from unusual geographies, and privilege escalation attempts — critical for protecting sensitive financial data.",
      },
    ],
  },
  {
    title: "ERP Integration Security",
    subtitle: "SAP S/4HANA & Financial Systems",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="22" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="24" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 18v3a3 3 0 003 3h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M29 18v3a3 3 0 01-3 3h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    points: [
      {
        label: "Secure data pipelines",
        description:
          "Data ingestion from SAP S/4HANA, Oracle, and other ERP systems occurs over encrypted, authenticated connections. Aibidia's integration layer validates data integrity at every stage of the pipeline, ensuring that transfer pricing inputs match their source systems exactly.",
      },
      {
        label: "Minimal data extraction",
        description:
          "Aibidia follows a data minimization approach — only the specific financial and transactional data required for transfer pricing analysis is extracted from customer ERPs. No unnecessary data is collected, reducing the attack surface and simplifying data governance.",
      },
      {
        label: "Connector security",
        description:
          "ERP connectors use service-level authentication with dedicated credentials that are scoped to read-only access on the specific data objects required. Credentials are stored in encrypted vaults and rotated according to the customer's security policies.",
      },
    ],
  },
];

import ScrollReveal from "./ScrollReveal";

export default function SecurityArchitecture() {
  return (
    <section id="security" className="scroll-mt-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Section header */}
        <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Security Architecture
          </p>
          <h2>Built for regulated, audit-critical environments</h2>
          <p className="mt-6">
            Aibidia&apos;s security architecture is designed around the
            specific requirements of enterprise transfer pricing — where
            financial data flows across jurisdictions, integrates with core ERP
            systems, and must withstand scrutiny from tax authorities worldwide.
          </p>
        </div>
        </ScrollReveal>

        {/* Domain grid */}
        <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="bg-surface border border-border rounded-[var(--radius-card)] p-5 md:p-8 hover:border-brand-500/30 hover:shadow-md transition-all duration-300"
            >
              {/* Domain header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-brand-500 shrink-0 mt-0.5">
                  {domain.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-grey-900">
                    {domain.title}
                  </h3>
                  <p className="text-sm font-medium text-brand-500 mt-0.5">
                    {domain.subtitle}
                  </p>
                </div>
              </div>

              {/* Points */}
              <div className="space-y-5">
                {domain.points.map((point) => (
                  <div key={point.label}>
                    <h4 className="text-sm font-semibold text-grey-800">
                      {point.label}
                    </h4>
                    <p className="text-sm text-grey-500 mt-1 leading-relaxed">
                      {point.description}
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
