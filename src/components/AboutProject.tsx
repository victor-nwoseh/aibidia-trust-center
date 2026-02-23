import ScrollReveal from "./ScrollReveal";

export default function AboutProject() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <p className="text-brand-500 font-semibold text-sm uppercase tracking-wider mb-4">
              About This Project
            </p>
            <h2>This Trust Center is a prototype — built with intent</h2>

            <div className="mt-8 space-y-6">
              <p className="leading-relaxed">
                This site was built by{" "}
                <span className="font-semibold text-grey-900">
                  Victor Nwoseh
                </span>{" "}
                as a targeted demonstration for the{" "}
                <span className="font-semibold text-grey-900">
                  Information Security Specialist
                </span>{" "}
                role at Aibidia. It is not an official Aibidia publication and
                has no affiliation with the company.
              </p>

              <div className="bg-white border border-border rounded-[var(--radius-card)] p-5 md:p-6 space-y-5">
                <div>
                  <h3 className="text-base font-semibold text-grey-900 mb-2">
                    Why this exists
                  </h3>
                  <p className="text-sm text-grey-600 leading-relaxed">
                    During my research into Aibidia, I identified a gap: the
                    company holds three independent security certifications —
                    ISO 27001:2022, SOC 2 Type II, and ISAE 3000 Type II — but
                    has no public-facing trust center to communicate this
                    posture to prospects and customers. For a Series B company
                    expanding into the US enterprise market, where security
                    review is a gate in every procurement process, this is a
                    meaningful gap. Rather than simply noting it, I built the
                    solution.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-grey-900 mb-2">
                    What it demonstrates
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "The ability to identify a real security communication gap and take initiative to address it",
                      "Deep understanding of enterprise security expectations — the questions buyers ask, the frameworks they evaluate, and the documentation they require",
                      "Working knowledge of Aibidia's product context: transfer pricing, ERP integrations, multinational data flows, and the regulatory landscape",
                      "Practical execution: translating security and compliance concepts into clear, professional, externally-facing communication",
                    ].map((item, i) => (
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

                <div>
                  <h3 className="text-base font-semibold text-grey-900 mb-2">
                    How it was built
                  </h3>
                  <p className="text-sm text-grey-600 leading-relaxed">
                    Built in a focused sprint using Next.js and Tailwind CSS.
                    All content is based on publicly available information about
                    Aibidia — including job postings, the company website,
                    product documentation, and public certification
                    announcements. No confidential or proprietary information
                    was used.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/victor-nwoseh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-[var(--radius-button)] transition-colors"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M4.5 3A1.5 1.5 0 003 4.5v11A1.5 1.5 0 004.5 17h11a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0015.5 3h-11zM7 7.5a1 1 0 11-2 0 1 1 0 012 0zM5.5 9H7v5H5.5V9zM9 9h1.5v.7c.4-.5 1-.8 1.7-.8 1.5 0 2.3 1 2.3 2.6V14h-1.5v-2.3c0-.8-.3-1.2-1-1.2-.7 0-1 .5-1 1.3V14H9V9z" />
                  </svg>
                  LinkedIn Profile
                </a>
                <a
                  href="mailto:victor.nwoseh05@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-grey-700 bg-white border border-border hover:border-grey-300 hover:bg-surface rounded-[var(--radius-button)] transition-colors"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                    <rect x="3" y="5" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 7l7 4 7-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
