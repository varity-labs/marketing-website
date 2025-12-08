import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Stats,
  Problem,
  Solution,
  HowItWorks,
  Features,
  AIDashboard,
  Security,
  Partners,
  PricingPreview,
  CTA,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <AIDashboard />
        <Security />
        <Partners />
        <PricingPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
