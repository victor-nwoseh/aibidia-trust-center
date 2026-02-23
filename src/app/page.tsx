import HeroSection from "@/components/HeroSection";
import SecurityArchitecture from "@/components/SecurityArchitecture";
import ComplianceSection from "@/components/ComplianceSection";
import DataProtection from "@/components/DataProtection";
import FAQSection from "@/components/FAQSection";
import DocumentAccess from "@/components/DocumentAccess";
import AboutProject from "@/components/AboutProject";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SecurityArchitecture />
      <ComplianceSection />
      <DataProtection />
      <FAQSection />
      <DocumentAccess />
      <AboutProject />
    </main>
  );
}
