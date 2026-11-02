import React from 'react';
import Hero from '../components/Hero';
import HowItWorksSteps from '../components/HowItWorksSteps';
import DarkBanner from '../components/DarkBanner';
import PreFooterCTA from '../components/PreFooterCTA';

export default function OverviewPage() {
  return (
    <>
      <Hero />
      <HowItWorksSteps />
      <DarkBanner />
      <PreFooterCTA />
    </>
  );
}
