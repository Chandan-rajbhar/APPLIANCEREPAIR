import React from 'react';
import Hero from '../components/Hero';
import HowItWorksSteps from '../components/HowItWorksSteps';
import DarkBanner from '../components/DarkBanner';
import PreFooterCTA from '../components/PreFooterCTA';
import MobileHomeView from '../components/MobileHomeView';

export default function OverviewPage() {
  return (
    <>
      {/* ========================================================= */}
      {/* DEDICATED MODERN MOBILE VIEW (Only visible on < md screens)*/}
      {/* ========================================================= */}
      <div className="block md:hidden">
        <MobileHomeView />
      </div>

      {/* ========================================================= */}
      {/* DESKTOP VIEW (100% Intact & Untouched for md+ screens)     */}
      {/* ========================================================= */}
      <div className="hidden md:block">
        <Hero />
        <HowItWorksSteps />
        <DarkBanner />
        <PreFooterCTA />
      </div>
    </>
  );
}
