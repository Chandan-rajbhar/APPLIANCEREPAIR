import React from 'react';
import { Phone, Check } from 'lucide-react';

export default function PreFooterCTA() {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="w-full max-w-[1400px] mx-auto glass-prefooter rounded-3xl p-10 sm:p-14 lg:p-18 text-center relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-amber-100/30 blur-3xl pointer-events-none" />

          {/* Top Navy Blue Gradient Badge */}
          <div className="inline-block px-4.5 py-1.5 rounded-full bg-gradient-to-r from-[#173860] via-[#204A7A] to-[#2B5888] text-white text-xs sm:text-[13px] font-bold tracking-wider mb-6 shadow-md border border-white/20">
            PROMPT & DEPENDABLE SERVICE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-glossy-heading">
            Get Your Appliance Repaired with <br className="hidden sm:block" /> Confidence
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto mt-5 leading-relaxed font-normal">
            Thousands of homeowners have trusted this simple process to resolve their appliance troubles quickly and reliably. Don't let a broken appliance continue to disrupt your daily routine. With fast and easy access to skilled professionals who arrive equipped with diagnostic expertise, you can get things back up and running smoothly. Call now to speak with a helpful representative and get your repair scheduled with clarity and care.
          </p>

          <p className="mt-6 text-sm sm:text-base lg:text-lg font-bold text-[#EA580C] max-w-2xl mx-auto drop-shadow-xs">
            Restore function and peace of mind — make a quick call to (877) 225-2046 and let skilled pros handle the rest for you.
          </p>

          {/* Big CTA Button with Light Sweep */}
          <div className="mt-9 flex flex-col items-center">
            <a
              href="tel:8772252046"
              className="btn-glossy-primary inline-flex items-center gap-3 px-9 sm:px-11 py-4 sm:py-4.5 rounded-full text-white font-extrabold text-base sm:text-lg tracking-wide uppercase"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>CALL NOW: (877) 225-2046</span>
            </a>
          </div>

          {/* Guarantees Row with Glass Accents */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm sm:text-base text-[#173860] font-semibold">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-white/80 shadow-2xs">
              <Check className="w-5 h-5 text-[#EA580C]" />
              <span>Same-day booking options</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-white/80 shadow-2xs">
              <Check className="w-5 h-5 text-[#EA580C]" />
              <span>Upfront transparent estimates</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-white/80 shadow-2xs">
              <Check className="w-5 h-5 text-[#EA580C]" />
              <span>100% satisfaction commitment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
