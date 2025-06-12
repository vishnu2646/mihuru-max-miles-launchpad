
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { RewardsSection } from '@/components/RewardsSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { StepsSection } from '@/components/StepsSection';
import { EligibilitySection } from '@/components/EligibilitySection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-mihuru-dark text-white overflow-hidden">
      <Header />
      <HeroSection />
      <RewardsSection />
      <StepsSection />
      <BenefitsSection />
      
      <div id="application-form" className="py-16 px-4 bg-gradient-to-b from-mihuru-dark/95 to-mihuru-dark">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            Check Your <span className="text-mihuru-gold">Eligibility</span>
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Find out if you qualify for our exclusive business loan program in just a few steps
          </p>
        </div>
        <EligibilitySection />
      </div>
      
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
