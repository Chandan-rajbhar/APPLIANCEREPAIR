import React from 'react';
import { Waves, Refrigerator, Flame, ChevronRight } from 'lucide-react';

export default function RestorationCards() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-[#FBFBFC] via-[#F6F9FD] to-white relative">
      {/* Soft ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[400px] bg-orange-100/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#EA580C] block mb-2">
            COMPLETE APPLIANCE RESTORATION SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-glossy-heading">
            Comprehensive Appliance Restoration
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
            Every repair begins with a thorough multi-point diagnostic checkup. We find and fix the core problem so it doesn't return.
          </p>
        </div>

        {/* 3 Showcase Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Card 1: Laundry */}
          <div className="glass-panel-interactive rounded-3xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3.5 py-1.5 rounded-full glass-badge text-xs font-semibold text-[#173860]">
                  Laundry Care
                </span>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] border border-orange-200/60 text-[#EA580C] flex items-center justify-center shadow-xs">
                  <Waves className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#173860] mb-4 text-glossy-heading">
                Laundry Appliance Repair
              </h3>

              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                Washer not spinning? Dryer not drying? Nothing is more frustrating than a pile of unfinished laundry. We handle water intake failures, abnormal vibrations, loud grinding noises, failing motor bearings, drainage issues, drum belt failures, and heating cycle faults. We carefully diagnose electrical boards and calibrate heating thermostats, delivering quick and enduring solutions so your weekly routines stay on track without missing a beat.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200/60">
              <a
                href="tel:8772252046"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#EA580C] hover:text-orange-700 group"
              >
                <span>View Laundry Diagnostic Specs</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: Refrigeration */}
          <div className="glass-panel-interactive rounded-3xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3.5 py-1.5 rounded-full glass-badge text-xs font-semibold text-[#173860]">
                  Refrigeration
                </span>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] border border-orange-200/60 text-[#EA580C] flex items-center justify-center shadow-xs">
                  <Refrigerator className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#173860] mb-4 text-glossy-heading">
                Refrigeration Appliance Repair
              </h3>

              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                A refrigerator failure can lead to spoiled food, costly waste, and major family disruption. From clicking compressors and erratic cooling to faulty evaporator fans, refrigerant leaks, clogged condenser coils, and malfunctioning defrost timers, our certified pros pinpoint the exact problem. We restore crisp cooling fast, preventing food spoilage and safeguarding your household peace of mind.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200/60">
              <a
                href="tel:8772252046"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#EA580C] hover:text-orange-700 group"
              >
                <span>Explore Fridge & Freezer Services</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: Kitchen */}
          <div className="glass-panel-interactive rounded-3xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3.5 py-1.5 rounded-full glass-badge text-xs font-semibold text-[#173860]">
                  Kitchen Heat & Wash
                </span>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] border border-orange-200/60 text-[#EA580C] flex items-center justify-center shadow-xs">
                  <Flame className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#173860] mb-4 text-glossy-heading">
                Kitchen Appliance Repair
              </h3>

              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                Ovens that cook unevenly, burners that refuse to ignite, and dishwashers that leave dishes greasy or water pooling on the floor disrupt your home immediately. We service gas and electric ranges, induction cooktops, built-in convection ovens, drawer microwaves, and silent-wash dishwashers. Using original-grade components and precise calibration, we restore your cooking appliances to peak culinary precision.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200/60">
              <a
                href="tel:8772252046"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#EA580C] hover:text-orange-700 group"
              >
                <span>Full Cooking & Dish Care Specs</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
