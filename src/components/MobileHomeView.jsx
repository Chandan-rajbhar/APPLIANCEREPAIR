import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Zap,
  Star,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Clock,
  Wrench,
  BadgeCheck,
  DollarSign,
  X
} from 'lucide-react';
import { APPLIANCES } from '../data/appliancesData';
import technicianHeroImg from '../assets/technician-hero-clean.png';

export default function MobileHomeView() {
  const [selectedAppliance, setSelectedAppliance] = useState(null);

  // Take top 6 appliances for the mobile home view (with "View All" linking to /appliances)
  const featuredAppliances = APPLIANCES.slice(0, 6);

  const getBadgeForAppliance = (id) => {
    switch (id) {
      case 'refrigerators':
        return { text: 'URGENT 24/7', color: 'bg-red-50 text-red-600 border-red-200' };
      case 'washers':
        return { text: 'POPULAR', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'dryers':
        return { text: 'SAME-DAY', color: 'bg-orange-50 text-orange-700 border-orange-200' };
      case 'ovens':
        return { text: 'TOP RATED', color: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'dishwashers':
        return { text: 'LEAK FIX', color: 'bg-blue-50 text-blue-700 border-blue-200' };
      default:
        return { text: 'GUARANTEED', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
    }
  };

  return (
    <div className="px-3.5 pt-3 pb-24 space-y-3.5 bg-gradient-to-b from-[#F5F8FC] via-[#FFFDFB] to-slate-50 min-h-screen">
      {/* ========================================================= */}
      {/* 1. HERO GLASS CARD (Reduced by 30% for Mobile)           */}
      {/* ========================================================= */}
      <div className="relative rounded-2xl overflow-hidden glass-panel p-3.5 bg-gradient-to-br from-white via-orange-50/20 to-blue-50/30 border border-white/90 shadow-[0_8px_24px_rgba(23,56,96,0.06)]">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 text-[#EA580C] text-[9.5px] font-black uppercase tracking-wider mb-2 shadow-xs">
          <Zap className="w-2.5 h-2.5 fill-current" />
          <span>Same-Day Dispatch • Certified Techs</span>
        </div>

        {/* Technician Visual Showcase with Floating Social Proof */}
        <div className="relative rounded-xl overflow-hidden mb-3 h-44 sm:h-48 bg-slate-900 shadow-sm">
          <img
            src={technicianHeroImg}
            alt="Appliance Repair Expert"
            className="w-full h-full object-cover object-[center_32%]"
          />
          {/* Subtle gradient shade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

          {/* Floating Rating Pill (Matching Reference) */}
          <div className="absolute bottom-2 right-2 glass-badge rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white bg-black/50 backdrop-blur-md border border-white/30 flex items-center gap-1 shadow-md">
            <Star className="w-3 h-3 text-amber-400 fill-current" />
            <span>4.9/5 • 15k+ Homes</span>
          </div>
        </div>

        {/* Hero Typography (Reduced ~30%) */}
        <h1 className="text-[19px] sm:text-xl font-black tracking-tight leading-[1.16] mb-1.5">
          <span className="text-glossy-hero-navy block">Appliance repair,</span>
          <span className="text-glossy-hero-orange block">done right at</span>
          <span className="text-glossy-hero-navy block">your doorstep.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[11px] text-slate-600 leading-snug mb-3">
          Expert diagnostics & doorstep repair across all major brands with same-day dispatch and upfront pricing.
        </p>

        {/* Primary Call CTA (Reduced padding ~30%) */}
        <a
          href="tel:8772252046"
          className="btn-glossy-primary w-full py-2.5 rounded-full text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-[0_6px_16px_rgba(234,88,12,0.3)] active:scale-98 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Book Service Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* ========================================================= */}
      {/* 2. DARK ASSURANCE BANNER                                 */}
      {/* ========================================================= */}
      <div className="rounded-2xl p-3.5 bg-gradient-to-r from-[#173860] via-[#1b416e] to-[#0e243d] text-white border border-white/15 shadow-md flex items-center justify-between gap-3 relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-400/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-inner">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[8.5px] font-black uppercase tracking-wider inline-block">
              ASSURED
            </span>
            <h4 className="font-extrabold text-xs mt-0.5 leading-snug">
              100% Upfront Pricing & OEM Parts
            </h4>
            <p className="text-[9.5px] text-slate-300">
              Licensed Techs • 90-Day Labor Warranty
            </p>
          </div>
        </div>

        <a
          href="tel:8772252046"
          className="shrink-0 px-3 py-1.5 rounded-full text-[10.5px] font-bold text-[#173860] bg-white hover:bg-slate-100 flex items-center gap-0.5 shadow-sm active:scale-95 transition-transform"
        >
          <span>Call Direct</span>
          <ChevronRight className="w-3 h-3" />
        </a>
      </div>

      {/* ========================================================= */}
      {/* 3. 4-ITEM FEATURE STRIP                                  */}
      {/* ========================================================= */}
      <div className="grid grid-cols-4 gap-1.5">
        {/* Item 1 */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 text-center border border-slate-200/70 shadow-xs flex flex-col items-center justify-center">
          <div className="w-7 h-7 rounded-xl bg-orange-50 text-[#EA580C] border border-orange-100 flex items-center justify-center mb-1">
            <Clock className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-extrabold text-[#173860] leading-tight block">
            Express
          </span>
          <span className="text-[8px] text-slate-500 block leading-tight mt-0.5 whitespace-nowrap">
            2h Slot
          </span>
        </div>

        {/* Item 2 */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 text-center border border-slate-200/70 shadow-xs flex flex-col items-center justify-center">
          <div className="w-7 h-7 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-1">
            <BadgeCheck className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-extrabold text-[#173860] leading-tight block">
            Certified
          </span>
          <span className="text-[8px] text-slate-500 block leading-tight mt-0.5 whitespace-nowrap">
            Licensed
          </span>
        </div>

        {/* Item 3 */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 text-center border border-slate-200/70 shadow-xs flex flex-col items-center justify-center">
          <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-1">
            <DollarSign className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-extrabold text-[#173860] leading-tight block">
            Upfront
          </span>
          <span className="text-[8px] text-slate-500 block leading-tight mt-0.5 whitespace-nowrap">
            Fair Rates
          </span>
        </div>

        {/* Item 4 */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 text-center border border-slate-200/70 shadow-xs flex flex-col items-center justify-center">
          <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-extrabold text-[#173860] leading-tight block">
            100% OEM
          </span>
          <span className="text-[8px] text-slate-500 block leading-tight mt-0.5 whitespace-nowrap">
            90d Guard
          </span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. 2-COLUMN APPLIANCE CARDS GRID                          */}
      {/* ========================================================= */}
      <div className="pt-1">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-2.5 px-1">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-orange-100/70 text-[#EA580C] flex items-center justify-center">
              <Wrench className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-sm sm:text-base font-extrabold text-[#173860]">
              Appliances We Service
            </h2>
          </div>
          <Link
            to="/appliances"
            className="text-xs font-bold text-[#EA580C] flex items-center gap-0.5 hover:underline"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {featuredAppliances.map((app) => {
            const badge = getBadgeForAppliance(app.id);
            return (
              <div
                key={app.id}
                onClick={() => setSelectedAppliance(app)}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Badges Row */}
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span
                      className={`text-[8.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${badge.color}`}
                    >
                      {badge.text}
                    </span>
                    <span className="inline-flex items-center gap-0.5 text-[9.5px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full border border-amber-200/60">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      4.9
                    </span>
                  </div>

                  {/* Realistic Commercial Appliance Product Image */}
                  <div className="w-full h-24 sm:h-28 rounded-xl bg-slate-50 border border-slate-100/80 flex items-center justify-center p-1.5 my-2 overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.name}
                      className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Category & Title */}
                  <span className="text-[9.5px] text-slate-400 font-semibold block leading-tight">
                    {app.tag}
                  </span>
                  <h3 className="font-extrabold text-[#173860] text-xs sm:text-sm leading-tight mt-0.5">
                    {app.name}
                  </h3>
                  <p className="text-[10.5px] text-slate-500 mt-1 line-clamp-1 leading-tight">
                    {app.desc}
                  </p>
                </div>

                {/* Card Action Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedAppliance(app);
                  }}
                  className="btn-glossy-secondary w-full py-1.5 rounded-xl text-[10.5px] font-bold text-[#173860] flex items-center justify-center gap-1 mt-2.5 active:scale-95"
                >
                  <span>Book Repair</span>
                  <ArrowRight className="w-3 h-3 text-[#EA580C]" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. INTERACTIVE APPLIANCE DETAIL MODAL                    */}
      {/* ========================================================= */}
      {selectedAppliance && (
        <div className="fixed inset-0 z-50 bg-[#173860]/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel rounded-3xl max-w-sm w-full p-6 shadow-2xl relative border border-white/90 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedAppliance(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#173860] p-1.5 rounded-full hover:bg-white/60 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 shrink-0 shadow-xs">
                <img
                  src={selectedAppliance.image}
                  alt={selectedAppliance.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C]">
                  {selectedAppliance.tag}
                </span>
                <h3 className="text-lg font-bold text-[#173860]">
                  {selectedAppliance.name}
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {selectedAppliance.details}
            </p>

            <div className="space-y-2.5">
              <a
                href="tel:8772252046"
                className="btn-glossy-primary w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-white font-bold text-xs tracking-wide"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call (877) 225-2046 for Same-Day Repair</span>
              </a>

              <button
                onClick={() => setSelectedAppliance(null)}
                className="btn-glossy-secondary w-full py-2.5 rounded-full text-[#173860] text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
