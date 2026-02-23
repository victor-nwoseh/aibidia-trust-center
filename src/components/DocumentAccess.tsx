"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const documents = [
  {
    title: "SOC 2 Type II Report",
    description:
      "Full audit report covering Security, Availability, and Confidentiality trust service criteria over the most recent observation period.",
    classification: "Confidential — NDA Required",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 12h10M11 16h10M11 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "ISO 27001:2022 Certificate",
    description:
      "Certificate of registration confirming Aibidia's ISMS certification to ISO/IEC 27001:2022, including scope of certification and issuing body.",
    classification: "Available on Request",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="14" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 22l-2 7 6-3 6 3-2-7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 14l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Penetration Test Summary",
    description:
      "Executive summary of the most recent third-party penetration test, including scope, methodology, key findings, and remediation status.",
    classification: "Confidential — NDA Required",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 4L6 10v6c0 7 4 13 10 16 6-3 10-9 10-16v-6L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 16l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Data Processing Agreement (DPA) Template",
    description:
      "Standard DPA template incorporating EU Standard Contractual Clauses, GDPR Article 28 provisions, and Aibidia-specific technical and organizational measures.",
    classification: "Available on Request",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 20c2-2 4-1 5 0s3 2 5 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 12h10M11 16h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Security Whitepaper",
    description:
      "Comprehensive overview of Aibidia's security architecture, data protection practices, and compliance posture — designed for enterprise security review teams.",
    classification: "Available on Request",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 10h12M10 14h12M10 18h8M10 22h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

type FormState = "idle" | "submitting" | "submitted";

export default function DocumentAccess() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [selectedDocs, setSelectedDocs] = useState<Set<string>>(new Set());

  const toggleDoc = (title: string) => {
    setSelectedDocs((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulated submission
    setTimeout(() => {
      setFormState("submitted");
    }, 1500);
  };

  return (
    <section id="documents" className="scroll-mt-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Section header */}
        <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-4">
            Document Access
          </p>
          <h2>Request security documentation</h2>
          <p className="mt-6">
            Aibidia provides detailed security and compliance documentation to
            customers and qualified prospects. Some documents are available on
            request; others require an executed NDA due to the confidential
            nature of their contents.
          </p>
        </div>
        </ScrollReveal>

        <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Document list */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-semibold text-grey-900 mb-4">
              Available Documents
            </h3>
            {documents.map((doc) => {
              const isSelected = selectedDocs.has(doc.title);
              return (
                <button
                  key={doc.title}
                  type="button"
                  onClick={() => toggleDoc(doc.title)}
                  disabled={formState === "submitted"}
                  className={`w-full text-left bg-white border rounded-[var(--radius-card)] p-5 transition-all duration-200 ${
                    isSelected
                      ? "border-brand-500 shadow-sm ring-1 ring-brand-500/20"
                      : "border-border hover:border-grey-300"
                  } ${formState === "submitted" ? "opacity-60 cursor-default" : "cursor-pointer"}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 mt-0.5 transition-colors ${
                        isSelected ? "text-brand-500" : "text-grey-400"
                      }`}
                    >
                      {doc.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-sm font-semibold text-grey-900">
                          {doc.title}
                        </h4>
                        <span
                          className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-[var(--radius-badge)] ${
                            doc.classification.includes("NDA")
                              ? "bg-grey-100 text-grey-600"
                              : "bg-brand-500/10 text-brand-600"
                          }`}
                        >
                          {doc.classification}
                        </span>
                      </div>
                      <p className="text-sm text-grey-500 mt-1 leading-relaxed">
                        {doc.description}
                      </p>
                    </div>
                    <div className="shrink-0 mt-1">
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-brand-500 border-brand-500"
                            : "border-grey-300"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            viewBox="0 0 12 12"
                            fill="none"
                            className="w-3 h-3 text-white"
                          >
                            <path
                              d="M3 6l2 2 4-4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Request form */}
          <div className="lg:col-span-2">
            <div className="bg-surface border border-border rounded-[var(--radius-card)] p-6 lg:sticky lg:top-28">
              <h3 className="text-base font-semibold text-grey-900 mb-1">
                Request Form
              </h3>
              <p className="text-xs text-grey-500 mb-5">
                Select documents above and fill in your details below.
              </p>

              {formState === "submitted" ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6 text-brand-500"
                    >
                      <path
                        d="M7 12l4 4 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-grey-900 mb-1">
                    Request Received
                  </h4>
                  <p className="text-xs text-grey-500 leading-relaxed">
                    This is a prototype demonstration. In production, Aibidia&apos;s
                    security team would review your request and respond within 2
                    business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-grey-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full px-3 py-2 text-sm border border-border rounded-[var(--radius-button)] bg-white text-grey-900 placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-grey-700 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane.smith@company.com"
                      className="w-full px-3 py-2 text-sm border border-border rounded-[var(--radius-button)] bg-white text-grey-900 placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-grey-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Corporation"
                      className="w-full px-3 py-2 text-sm border border-border rounded-[var(--radius-button)] bg-white text-grey-900 placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-grey-700 mb-1">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      placeholder="Information Security Manager"
                      className="w-full px-3 py-2 text-sm border border-border rounded-[var(--radius-button)] bg-white text-grey-900 placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-grey-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any specific questions or context for your request..."
                      className="w-full px-3 py-2 text-sm border border-border rounded-[var(--radius-button)] bg-white text-grey-900 placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-colors resize-none"
                    />
                  </div>

                  {selectedDocs.size > 0 && (
                    <div className="bg-white border border-border rounded-[var(--radius-button)] p-3">
                      <p className="text-xs font-medium text-grey-600 mb-2">
                        Selected Documents ({selectedDocs.size})
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {[...selectedDocs].map((title) => (
                          <span
                            key={title}
                            className="inline-flex px-2 py-0.5 text-xs bg-brand-500/10 text-brand-600 rounded-[var(--radius-badge)]"
                          >
                            {title}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={selectedDocs.size === 0 || formState === "submitting"}
                    className={`w-full py-2.5 text-sm font-medium rounded-[var(--radius-button)] transition-all ${
                      selectedDocs.size === 0
                        ? "bg-grey-200 text-grey-400 cursor-not-allowed"
                        : formState === "submitting"
                        ? "bg-brand-600 text-white cursor-wait"
                        : "bg-brand-500 text-white hover:bg-brand-600"
                    }`}
                  >
                    {formState === "submitting"
                      ? "Submitting..."
                      : selectedDocs.size === 0
                      ? "Select documents to continue"
                      : `Request ${selectedDocs.size} Document${selectedDocs.size > 1 ? "s" : ""}`}
                  </button>

                  <p className="text-[11px] text-grey-400 text-center leading-relaxed">
                    This is a UI demonstration. No data is collected or
                    transmitted. In production, requests would be routed to
                    Aibidia&apos;s security team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
