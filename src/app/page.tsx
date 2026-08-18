import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ShowcasePreview } from "@/components/sections/ShowcasePreview";
import { LabPreview } from "@/components/sections/LabPreview";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ShowcasePreview />
      <LabPreview />
      <AboutSection />
      <CTASection />
    </>
  );
}
