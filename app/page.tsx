import type { Metadata } from 'next';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

export const metadata: Metadata = {
  title: 'Vertibis - MSME Business Health Scoring for Partners',
  description:
    'MSME health scores, AI advisory, client consent, and partner intelligence for CAs and consultants.',
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
