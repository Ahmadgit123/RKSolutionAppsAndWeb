import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessSection } from '../components/home/ProcessSection';
import { ProjectEstimator } from '../components/home/ProjectEstimator';
import { FaqSection } from '../components/home/FaqSection';
import { CtaBanner } from '../components/home/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      
      {/* Interactive Estimator Anchor */}
      <section className="py-16 bg-[#060912] border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectEstimator />
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSection />
      <FaqSection />
      <CtaBanner />
    </div>
  );
};
