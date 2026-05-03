import type { Metadata } from 'next';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export const metadata: Metadata = {
  title: 'Vertibis – MSME Business Health Scoring for CAs',
  description:
    'Instant MSME health scores, AI advisory, and GSTN integration for Chartered Accountants. Start free with 50 reports/year.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
