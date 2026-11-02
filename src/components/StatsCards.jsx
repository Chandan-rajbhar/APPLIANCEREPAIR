import React from 'react';

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full max-w-[1440px] mx-auto">
      {/* Stat 1 */}
      <div className="glass-panel-interactive rounded-2xl py-7 sm:py-8 px-5 sm:px-6 text-center group cursor-default">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#EA580C] tracking-tight drop-shadow-[0_2px_8px_rgba(234,88,12,0.2)]">
          99.4%
        </div>
        <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-2 group-hover:text-[#173860] transition-colors">
          Customer satisfaction
        </div>
      </div>

      {/* Stat 2 */}
      <div className="glass-panel-interactive rounded-2xl py-7 sm:py-8 px-5 sm:px-6 text-center group cursor-default">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173860] tracking-tight text-glossy-heading">
          15,000+
        </div>
        <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-2 group-hover:text-[#173860] transition-colors">
          Happy homeowners
        </div>
      </div>

      {/* Stat 3 */}
      <div className="glass-panel-interactive rounded-2xl py-7 sm:py-8 px-5 sm:px-6 text-center group cursor-default">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#EA580C] tracking-tight drop-shadow-[0_2px_8px_rgba(234,88,12,0.2)]">
          100%
        </div>
        <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-2 group-hover:text-[#173860] transition-colors">
          Committed to top-tier service
        </div>
      </div>

      {/* Stat 4 */}
      <div className="glass-panel-interactive rounded-2xl py-7 sm:py-8 px-5 sm:px-6 text-center group cursor-default">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173860] tracking-tight text-glossy-heading">
          24/7
        </div>
        <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-2 group-hover:text-[#173860] transition-colors">
          Emergency response
        </div>
      </div>
    </div>
  );
}
