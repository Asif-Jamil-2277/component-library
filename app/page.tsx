import { HeroSection } from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection
        badge="AI-Powered Digital Solutions"
        title="Build Better Digital Experiences"
        highlightedText="With Modern Technology"
        description="We help businesses create powerful digital products, automate workflows, and build modern digital experiences."
        primaryButton={{
          label: "Start a Project",
          href: "#contact",
        }}
        secondaryButton={{
          label: "Explore Services",
          href: "#services",
        }}
      />
    </main>
  );
}