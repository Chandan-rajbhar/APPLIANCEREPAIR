import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#132C4A] via-[#10243E] to-[#0A1728] text-slate-300 pt-16 pb-10 border-t border-[#204A7A]/50">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-14 mb-14">
          {/* Col 1 */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-[#EA580C] flex items-center justify-center text-white shadow-sm">
                <Wrench className="w-4.5 h-4.5" />
              </div>
              <span className="font-extrabold tracking-wider text-sm sm:text-base text-white font-mono">
                APEX APPLIANCE REPAIR
              </span>
            </Link>
            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed mb-5">
              Connecting homeowners with independent appliance repair professionals. Prompt, trustworthy service for refrigerators, washers, dryers, and more.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A3D63] border border-[#2B5888] text-xs font-bold text-orange-300">
              <ShieldCheck className="w-4 h-4" />
              <span>LICENSED & VETTED PROS NETWORK</span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white mb-4">
              24/7 DISPATCH HOTLINE
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-2.5">
              Agents and dispatchers available 24 hours a day, 7 days a week.
            </p>
            <p className="text-sm text-slate-300 mb-2.5">
              For urgent repair and emergency inquiries:
            </p>
            <a
              href="tel:8772252046"
              className="block text-xl sm:text-2xl font-black text-[#EA580C] hover:text-orange-400 transition-colors mb-2.5 tracking-tight"
            >
              (877) 225-2046
            </a>
            <p className="text-xs sm:text-sm text-slate-400">
              Fast response times across all service areas.
            </p>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white mb-4">
              COVERAGE & COMPLIANCE
            </h4>
            <ul className="text-sm sm:text-[15px] text-slate-300 space-y-3 leading-relaxed">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                <span>Master EPA-Universal Certified Network</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                <span>Licensed & Insured Contractors</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                <span>Multi-Brand Diagnostic Specialists</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                <span>EPA Section 608 Compliant</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white mb-4">
              SERVICE GUARANTEE
            </h4>
            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed mb-5">
              Every repair includes dedicated diagnosis, upfront price quote, and a 90-day warranty on installed parts and labor.
            </p>
            <a
              href="tel:8772252046"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300"
            >
              <span>Schedule Diagnostic Checkup</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright Bar scaled up */}
        <div className="pt-8 border-t border-[#1C3E63] flex flex-col sm:flex-row items-center justify-between gap-5 text-xs sm:text-sm text-slate-400">
          <div>
            © 2026 Apex Appliance Repair Co. All rights reserved. Both Phone & Operator Services: +1 (877) 225-2046.
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Accessible Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
