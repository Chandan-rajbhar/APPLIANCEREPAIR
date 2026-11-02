import React from 'react';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import StatsCards from './StatsCards';
import technicianHeroImg from '../assets/technician-hero-clean.png';

export default function Hero() {
  return (
    <section id="overview" className="relative pt-10 pb-16 sm:pt-14 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-[#FFFDFB] to-white border-b border-slate-100">
      {/* Ambient background glows for glassmorphism reflections */}
      <div className="absolute top-0 right-0 w-[750px] h-[600px] bg-gradient-to-b from-blue-200/35 via-orange-100/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-[600px] h-[500px] bg-gradient-to-tr from-orange-200/25 via-blue-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 text-left">
            {/* Top Glass Pill / Badge */}
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full glass-badge mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 animate-pulse shadow-[0_0_8px_rgba(234,88,12,0.6)]"></span>
              <span className="uppercase tracking-wider font-extrabold text-xs sm:text-[13px] text-[#173860]">
                Certified Appliance Network
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-semibold text-xs sm:text-[13px]">
                15,000+ Homes Served
              </span>
            </div>

            {/* Main Headline with Luxurious Glossy Navy & Orange Gradients */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[66px] font-black tracking-tight leading-[1.08]">
              <span className="text-glossy-hero-navy block">
                Appliance repair,
              </span>
              <span className="text-glossy-hero-orange block my-1">
                done right at
              </span>
              <span className="text-glossy-hero-navy block">
                your doorstep.
              </span>
            </h1>

            {/* Subparagraph */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Expert repair for refrigerators, washers, dryers, ovens, microwaves & dishwashers. Trusted by thousands of homeowners with same-day dispatch and transparent upfront pricing.
            </p>

            {/* Dual Glossy CTA Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary Call CTA with Light Sweep */}
              <a
                href="tel:8772252046"
                className="btn-glossy-primary inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-full text-white font-extrabold text-base sm:text-lg tracking-wide group"
              >
                <Phone className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                <span>Call (877) 225-2046</span>
                <ArrowRight className="w-5 h-5 ml-0.5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary Direct Line Frosted Glass CTA */}
              <a
                href="tel:8772252046"
                className="btn-glossy-secondary inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-4 rounded-full text-[#173860] font-bold text-base sm:text-lg group"
              >
                <Phone className="w-5 h-5 text-[#EA580C] transition-transform group-hover:rotate-12" />
                <span>Direct Line: (877) 225-2046</span>
              </a>
            </div>

            {/* 4 Feature Trust Points with Subtle Glass Highlighting */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-7 border-t border-slate-200/80">
              <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/60 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#173860]">Same-day doorstep</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/60 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#173860]">Certified pros</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/60 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#173860]">Branded OEM parts</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/60 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#173860]">Upfront pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Technician & Appliances Showcase with Glass Effects */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Outer Decorative Glass Frame */}
            <div className="relative w-full max-w-[480px] xl:max-w-[540px] glass-panel rounded-3xl p-3.5 sm:p-4 group shadow-[0_25px_60px_-15px_rgba(23,56,96,0.18)]">
              {/* Image Container with Subtle Specular Highlight */}
              <div className="relative overflow-hidden rounded-2xl aspect-square bg-slate-900 shadow-inner">
                <img
                  src={technicianHeroImg}
                  alt="Appliance Repair Technician"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />

                {/* Glass Reflection Gradient Across Image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards with Glass Panels */}
        <div className="mt-16 pt-10 border-t border-slate-200/60">
          <StatsCards />
        </div>
      </div>
    </section>
  );
}
