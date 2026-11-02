import React from 'react';
import AppliancesGrid from '../components/AppliancesGrid';
import HowItWorksSteps from '../components/HowItWorksSteps';
import DarkBanner from '../components/DarkBanner';
import PreFooterCTA from '../components/PreFooterCTA';
import { Phone, CheckCircle2 } from 'lucide-react';

export default function AppliancesPage() {
  return (
    <div className="bg-white">
      {/* Page Header with Glass & Glow */}
      <section className="relative pt-14 pb-14 sm:pt-18 sm:pb-18 bg-gradient-to-b from-[#F5F8FC] via-[#FFF9F5] to-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-orange-100/25 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-badge mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-[#173860]">All Major Household Units</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            <span className="text-glossy-heading">Appliances </span>
            <span className="text-glossy-hero-orange">We Service</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From residential kitchens to full laundry rooms, we connect you with certified specialists who service all makes, models, and vintages.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:8772252046"
              className="btn-glossy-primary inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white font-bold text-sm sm:text-base tracking-wide"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call For Service: (877) 225-2046</span>
            </a>
            <div className="btn-glossy-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#173860]">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#EA580C]" />
              <span>Same-Day & Next-Day Availability</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Appliances Grid */}
      <AppliancesGrid />

      {/* How It Works Steps */}
      <HowItWorksSteps />

      {/* Callout Banner */}
      <DarkBanner />

      {/* Pre-Footer CTA */}
      <PreFooterCTA />
    </div>
  );
}
