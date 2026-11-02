import React from 'react';
import { Calendar, Award, Sparkles, ThumbsUp } from 'lucide-react';

export default function WhyChooseCards() {
  return (
    <section id="why-choose" className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F7FAFD] to-white relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[450px] bg-blue-100/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#EA580C] block mb-2">
            WHY CHOOSE APPLIANCE EXPERTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-glossy-heading">
            Why Choose Our Appliance Repair Service
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
            Dedicated to prompt, honest, and reliable home appliance repair.
          </p>
        </div>

        {/* 2x2 Grid of Feature Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Card 1: Light Orange Icon Box */}
          <div className="glass-panel-interactive rounded-3xl p-8 sm:p-9 lg:p-10">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] border border-orange-200/80 text-[#EA580C] flex items-center justify-center mb-5 shadow-inner">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#173860] text-lg sm:text-xl lg:text-2xl mb-3 text-glossy-heading">
              Reliable Scheduling When You Need It Most
            </h3>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              We understand that appliance breakdowns happen at the worst times. We offer flexible scheduling, fast call dispatch, and swift service windows so you aren't left waiting around all day.
            </p>
          </div>

          {/* Card 2: Navy Blue Gradient Icon Box */}
          <div className="glass-panel-interactive rounded-3xl p-8 sm:p-9 lg:p-10">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#204A7A] to-[#122A47] text-orange-300 border border-white/20 flex items-center justify-center mb-5 shadow-[0_4px_15px_rgba(23,56,96,0.25)]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#173860] text-lg sm:text-xl lg:text-2xl mb-3 text-glossy-heading">
              Skilled and Experienced Local Professionals
            </h3>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              The technicians we connect you with bring deep diagnostic expertise to every service call. They are equipped to handle major and minor issues across all prominent appliance brands and configurations.
            </p>
          </div>

          {/* Card 3: Light Orange Icon Box */}
          <div className="glass-panel-interactive rounded-3xl p-8 sm:p-9 lg:p-10">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] border border-orange-200/80 text-[#EA580C] flex items-center justify-center mb-5 shadow-inner">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#173860] text-lg sm:text-xl lg:text-2xl mb-3 text-glossy-heading">
              Clear, Transparent Process
            </h3>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              From the moment you call, our team strives to make the repair process straightforward and predictable. You'll receive clear explanations of what needs repair and transparent pricing before any work proceeds.
            </p>
          </div>

          {/* Card 4: Navy Blue Gradient Icon Box */}
          <div className="glass-panel-interactive rounded-3xl p-8 sm:p-9 lg:p-10">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#204A7A] to-[#122A47] text-orange-300 border border-white/20 flex items-center justify-center mb-5 shadow-[0_4px_15px_rgba(23,56,96,0.25)]">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#173860] text-lg sm:text-xl lg:text-2xl mb-3 text-glossy-heading">
              Designed for Your Convenience
            </h3>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Instead of spending hours searching for technicians or comparing conflicting reviews, one call to our team connects you with an experienced local technician ready to handle your repair efficiently and with minimal fuss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
