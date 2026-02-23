const footerLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Security", href: "#security" },
  { label: "Compliance", href: "#compliance" },
  { label: "Data Protection", href: "#data-protection" },
  { label: "FAQ", href: "#faq" },
  { label: "Documents", href: "#documents" },
];

export default function Footer() {
  return (
    <footer className="bg-grey-900 text-grey-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-tight">
                  Aibidia
                </span>
                <span className="text-[10px] font-medium text-grey-500 uppercase tracking-widest leading-tight">
                  Trust Center
                </span>
              </div>
            </div>
            <p className="text-sm text-grey-400 leading-relaxed max-w-xs">
              Security, compliance, and data protection information for
              Aibidia&apos;s enterprise transfer pricing platform.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Sections
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-grey-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & About */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Security Inquiries
            </h4>
            <p className="text-sm text-grey-400 leading-relaxed mb-4">
              For security questions, document requests, or to report a
              vulnerability, please use the document request form or contact
              Aibidia&apos;s security team directly.
            </p>
            <a
              href="#about"
              className="inline-block text-sm text-brand-500 hover:text-brand-600 font-medium transition-colors"
            >
              About This Project
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-grey-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-grey-500">
              This Trust Center is a prototype demonstration. It is not an
              official Aibidia publication. All information is based on publicly
              available sources.
            </p>
            <p className="text-xs text-grey-500 shrink-0">
              &copy; {new Date().getFullYear()} Prototype by Victor Nwoseh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
