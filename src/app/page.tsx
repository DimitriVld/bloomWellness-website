import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import SourcesStrip from "@/components/SourcesStrip/SourcesStrip";
import Features from "@/components/Features/Features";
import Friends from "@/components/Friends/Friends";
import Founder from "@/components/Founder/Founder";
import Pricing from "@/components/Pricing/Pricing";
import Faq from "@/components/Faq/Faq";
import FinalCta from "@/components/FinalCta/FinalCta";
import LegacyAnchors from "@/components/LegacyAnchors/LegacyAnchors";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <LegacyAnchors />
      <Hero />
      <SourcesStrip />
      <Features />
      <Friends />
      <Founder />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
