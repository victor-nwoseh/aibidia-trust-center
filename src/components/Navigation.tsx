"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Security", href: "#security" },
  { label: "Compliance", href: "#compliance" },
  { label: "Data Protection", href: "#data-protection" },
  { label: "FAQ", href: "#faq" },
  { label: "Documents", href: "#documents" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Brand */}
          <a href="#overview" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center transition-colors group-hover:bg-brand-600">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-grey-900 leading-tight">
                Aibidia
              </span>
              <span className="text-[10px] font-medium text-grey-400 uppercase tracking-widest leading-tight">
                Trust Center
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-grey-600 hover:text-brand-500 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#documents"
              className="ml-3 px-4 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-[var(--radius-button)] transition-colors"
            >
              Request Documents
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-grey-600 hover:text-grey-900 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-grey-600 hover:text-brand-500 hover:bg-surface rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#documents"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 mx-3 px-4 py-2.5 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-[var(--radius-button)] transition-colors text-center"
            >
              Request Documents
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
