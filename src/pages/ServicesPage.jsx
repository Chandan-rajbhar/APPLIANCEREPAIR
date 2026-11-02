import React from 'react';
import RestorationCards from '../components/RestorationCards';
import DarkBanner from '../components/DarkBanner';
import PreFooterCTA from '../components/PreFooterCTA';
import { Phone, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header with Ambient Glow & Glassmorphism */}
      <section className="relative pt-14 pb-14 sm:pt-18 sm:pb-18 bg-gradient-to-b from-[#F5F8FC] via-[#FFF9F5] to-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-100/30 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-badge mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-[#173860]">Comprehensive Repair Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            <span className="text-glossy-heading block sm:inline">Our Appliance Repair </span>
            <span className="text-glossy-hero-orange block sm:inline">Services & Solutions</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Professional diagnostic, restoration, and component replacement services for all major household appliances. Fast, certified, and backed by our satisfaction guarantee.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:8772252046"
              className="btn-glossy-primary inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white font-bold text-sm sm:text-base tracking-wide"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Direct Hotline: (877) 225-2046</span>
            </a>
            <div className="btn-glossy-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#173860]">
              <ShieldCheck className="w-4.5 h-4.5 text-[#204A7A]" />
              <span>Full Diagnostic & Multi-Brand Parts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Restoration Cards */}
      <RestorationCards />

      {/* Callout Banner */}
      <DarkBanner />

      {/* Pre-Footer CTA */}
      <PreFooterCTA />
    </div>
  );
}
