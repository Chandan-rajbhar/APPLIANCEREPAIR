import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { APPLIANCES } from '../data/appliancesData';

export default function AppliancesGrid({ title, subtitle, showDirectLine = true }) {
  const [selectedAppliance, setSelectedAppliance] = useState(null);

  return (
    <section id="appliances" className="py-16 sm:py-24 bg-white/60 relative">
      {/* Soft background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-blue-100/25 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-5">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#EA580C] block mb-2">
              COMPREHENSIVE APPLIANCE REPAIR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-glossy-heading">
              {title || 'Appliances We Service'}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-2xl">
              {subtitle || 'From refrigerators to washers, we repair a wide variety of household appliances efficiently.'}
            </p>
          </div>

          {showDirectLine && (
            <div>
              <a
                href="tel:8772252046"
                className="btn-glossy-secondary inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full text-[#173860] text-xs sm:text-sm font-semibold transition group"
              >
                <Phone className="w-4 h-4 text-[#EA580C] transition-transform group-hover:rotate-12" />
                <span>Direct Line: (877) 225-2046</span>
              </a>
            </div>
          )}
        </div>

        {/* 10 Appliance Cards Grid with Glassmorphic Panels */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {APPLIANCES.map((app) => {
            const IconComponent = app.icon;
            return (
              <div
                key={app.id}
                onClick={() => setSelectedAppliance(app)}
                className="group glass-panel-interactive rounded-2xl p-5 sm:p-6 lg:p-7 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Glossy Orange Icon Container */}
                  <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] text-[#EA580C] border border-orange-200/60 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#F05A22] group-hover:to-[#EA580C] group-hover:text-white transition-all duration-300 shadow-xs group-hover:shadow-[0_4px_15px_rgba(234,88,12,0.35)]">
                    <IconComponent className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <h3 className="font-bold text-[#173860] text-sm sm:text-base lg:text-lg group-hover:text-[#EA580C] transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 mt-1.5 leading-snug">
                    {app.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal with Frosted Glass Overlay */}
      {selectedAppliance && (
        <div className="fixed inset-0 z-50 bg-[#173860]/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel rounded-3xl max-w-lg w-full p-7 sm:p-8 shadow-[0_25px_60px_-15px_rgba(15,35,60,0.4)] relative border border-white/80 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedAppliance(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-[#173860] p-1.5 rounded-full hover:bg-white/60 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] border border-orange-200/80 text-[#EA580C] flex items-center justify-center shrink-0 shadow-inner">
                <selectedAppliance.icon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                  {selectedAppliance.tag}
                </span>
                <h3 className="text-xl font-bold text-glossy-heading">
                  {selectedAppliance.name} Repair
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              {selectedAppliance.details}
            </p>

            <div className="space-y-3">
              <a
                href="tel:8772252046"
                className="btn-glossy-primary w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-full text-white font-bold text-sm tracking-wide"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call (877) 225-2046 for Same-Day Repair</span>
              </a>

              <button
                onClick={() => setSelectedAppliance(null)}
                className="btn-glossy-secondary w-full py-3 rounded-full text-[#173860] text-sm font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
