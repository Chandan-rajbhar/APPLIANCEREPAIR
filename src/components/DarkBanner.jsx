import React from 'react';
import { Zap, Phone } from 'lucide-react';

export default function DarkBanner() {
  return (
    <section className="py-8 sm:py-10 bg-white/60">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="glass-banner rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle specular reflection across banner */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-gradient-to-b from-white/10 to-transparent blur-2xl pointer-events-none" />

          <div className="max-w-3xl text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-orange-300 text-xs font-bold tracking-wider mb-3.5 border border-white/20 backdrop-blur-md shadow-xs">
              <Zap className="w-3.5 h-3.5 fill-current text-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
              <span>RAPID SAME-DAY RESPONSE</span>
            </div>
            <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed font-normal drop-shadow-xs">
              Our straightforward process puts you in control. A quick call connects you with the right technician, who arrives prepared, explains the diagnostic clearly, and provides honest recommendations before any work begins.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto relative z-10">
            <a
              href="tel:8772252046"
              className="btn-glossy-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full text-white font-extrabold text-sm sm:text-base tracking-wide"
            >
              <Phone className="w-4.5 h-4.5 fill-current" />
              <span>CALL NOW: (877) 225-2046</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
