import Hero from "@/components/Hero/Hero";
import Story from "@/components/Story/Story";
import Features from "@/components/Features/Features";
import IntegrationsStrip from "@/components/Integrations/IntegrationsStrip";
import Showcase from "@/components/Showcase/Showcase";
import Pricing from "@/components/Pricing/Pricing";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Features />
      <IntegrationsStrip />
      <Showcase />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
