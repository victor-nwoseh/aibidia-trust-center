# Aibidia Trust Center

A prototype Trust Center for [Aibidia](https://aibidia.com), built to demonstrate how the company's enterprise security posture could be communicated to prospects and customers.

**Live site:** [aibidia-trust-center.vercel.app](https://aibidia-trust-center.vercel.app)

## Context

Aibidia is a Series B transfer pricing platform trusted by multinationals like Unilever, Nokia, and Olympus. The company holds three independent security certifications — ISO 27001:2022, SOC 2 Type II, and ISAE 3000 Type II — but has no public-facing trust center. For a company expanding into the US enterprise market, where security review gates every procurement process, this is a meaningful gap.

This project is a working prototype that addresses that gap.

## What's Included

- **Security Architecture** — Cloud infrastructure, application security, encryption, access controls, monitoring, and ERP integration security
- **Compliance Frameworks** — ISO 27001:2022, SOC 2 Type II, and ISAE 3000 Type II with scope details and audit context
- **Data Protection** — GDPR compliance, data residency, processing safeguards, sub-processor transparency, retention policies, and cross-border transfer mechanisms
- **Enterprise FAQ** — 12 questions that security teams actually ask during procurement
- **Document Access** — Simulated NDA-gated document request flow for SOC 2 reports, ISO certificates, pen test summaries, and DPA templates

## Disclaimer

This is a prototype demonstration built by Victor Nwoseh. It is **not** an official Aibidia publication and has no affiliation with the company. All content is based on publicly available information.

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Deployed on Vercel

## Local Development

```bash
npm install
npm run dev
```

Opens at [localhost:3000](http://localhost:3000).
