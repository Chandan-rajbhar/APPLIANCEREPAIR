import React from 'react';
import { Clock } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/appliancesData';

export default function HowItWorksSteps() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gradient-to-b from-[#FBFBFC] via-[#F4F8FC] to-white border-t border-slate-100 relative">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-14 gap-5">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#EA580C] block mb-2">
              SIMPLE STEP-BY-STEP PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-glossy-heading">
              How It Works
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-2xl">
              From first call to completed repair in five straightforward steps.
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-badge text-[#173860] text-xs sm:text-sm font-semibold shadow-xs">
              <Clock className="w-4 h-4 text-[#EA580C]" />
              <span>Open 24/7 · Immediate Dispatch</span>
            </div>
          </div>
        </div>

        {/* 5 Step Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {HOW_IT_WORKS_STEPS.map((st) => {
            const StepIcon = st.icon;
            return (
              <div
                key={st.num}
                className="glass-panel-interactive rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F05A22] to-[#EA580C] text-white font-extrabold text-sm flex items-center justify-center shadow-[0_4px_12px_rgba(234,88,12,0.35)]">
                      {st.num}
                    </span>
                    <StepIcon className="w-5 h-5 text-[#204A7A]/70" />
                  </div>

                  <h3 className="font-bold text-[#173860] text-base sm:text-lg mb-2.5 text-glossy-heading">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <span className="text-xs sm:text-sm font-bold text-[#EA580C]">
                    {st.link}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
