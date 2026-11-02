import React from 'react';
import StatsCards from '../components/StatsCards';
import DarkBanner from '../components/DarkBanner';
import PreFooterCTA from '../components/PreFooterCTA';
import { Star, CheckCircle2 } from 'lucide-react';

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Sarah M.',
      location: 'Oakridge',
      service: 'Refrigerator Repair',
      rating: 5,
      date: '2 days ago',
      comment: 'My refrigerator stopped cooling right before the weekend. Called the dispatch line and had a technician at my door within 3 hours. Replaced the defrost timer and saved all my groceries. Outstanding service!'
    },
    {
      name: 'David R.',
      location: 'Westfield',
      service: 'Washing Machine Repair',
      rating: 5,
      date: 'Last week',
      comment: 'Front load washer wouldn’t drain and was flashing an error code. The technician was extremely knowledgeable, had the drain pump in his van, and fixed it within 45 minutes with upfront pricing.'
    },
    {
      name: 'Elena K.',
      location: 'Pinewood',
      service: 'Oven & Range Repair',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Gas oven wouldn’t ignite for dinner party preparations. The team dispatched a tech same-day. Honest, transparent estimate and great craftmanship. Will definitely call again!'
    },
    {
      name: 'Marcus T.',
      location: 'Riverside',
      service: 'Dryer Heating Element',
      rating: 5,
      date: '3 weeks ago',
      comment: 'Dryer was spinning but blowing completely cold air. Quick intake, clear arrival window, and fixed the heating element with a 90-day warranty. Highly recommended.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative pt-14 pb-14 sm:pt-18 sm:pb-18 bg-gradient-to-b from-[#F5F8FC] via-[#FFF9F5] to-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-orange-100/20 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-badge mb-5">
            <span className="text-[#EA580C] font-bold">★ 4.98 / 5.0 Rating</span>
            <span className="text-slate-300">·</span>
            <span className="text-[#173860] font-semibold text-xs sm:text-sm">15,000+ Verified Service Calls</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            <span className="text-glossy-heading block sm:inline">Customer Reviews & </span>
            <span className="text-glossy-hero-orange block sm:inline">Homeowner Testimonials</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Read real feedback from homeowners who trusted our network for same-day and next-day appliance restoration.
          </p>

          <div className="mt-14">
            <StatsCards />
          </div>
        </div>
      </section>

      {/* Reviews Grid with Glassmorphic Cards */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F7FAFD] to-white relative">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#EA580C] block mb-2">
              VERIFIED HOMEOWNER FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-glossy-heading">
              Real Experiences From Real Customers
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-3 leading-relaxed">
              Every review represents a homeowner whose daily routine was restored without delay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="glass-panel-interactive rounded-3xl p-8 sm:p-9 lg:p-10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-[#EA580C]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current drop-shadow-xs" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-400">
                    {rev.date}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-slate-200/60">
                  <div>
                    <div className="text-sm sm:text-base font-bold text-[#173860] flex items-center gap-2">
                      <span>{rev.name}</span>
                      <span className="text-slate-400 font-normal">({rev.location})</span>
                    </div>
                    <div className="text-xs sm:text-sm text-[#EA580C] font-semibold mt-0.5">
                      {rev.service}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50/90 border border-emerald-200/60 px-3 py-1 rounded-full font-bold shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout Banner */}
      <DarkBanner />

      {/* Pre-Footer CTA */}
      <PreFooterCTA />
    </div>
  );
}
