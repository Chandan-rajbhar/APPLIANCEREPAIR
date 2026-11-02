import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Wrench, Phone, Refrigerator, Star } from 'lucide-react';

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-8px_30px_rgba(23,56,96,0.08)] h-16">
      <div className="w-full max-w-md mx-auto h-full grid grid-cols-5 items-center px-1">
        {/* Tab 1: Home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `h-full flex flex-col items-center justify-center transition-colors ${
              isActive ? 'text-[#EA580C]' : 'text-slate-500 hover:text-[#173860]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Home className="w-5 h-5" />
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                Home
              </span>
              {isActive && <span className="w-1 h-1 rounded-full bg-[#EA580C] mt-0.5" />}
            </>
          )}
        </NavLink>

        {/* Tab 2: Services */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `h-full flex flex-col items-center justify-center transition-colors ${
              isActive ? 'text-[#EA580C]' : 'text-slate-500 hover:text-[#173860]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Wrench className="w-5 h-5" />
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                Services
              </span>
              {isActive && <span className="w-1 h-1 rounded-full bg-[#EA580C] mt-0.5" />}
            </>
          )}
        </NavLink>

        {/* Tab 3: Center Elevated Call Button (Properly Centered in Middle) */}
        <div className="h-full flex flex-col items-center justify-center relative">
          <a
            href="tel:8772252046"
            className="flex flex-col items-center -mt-5 group"
            aria-label="Call Dispatch"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#EA580C] via-[#F05A22] to-amber-500 text-white shadow-[0_6px_16px_rgba(234,88,12,0.45)] border-[3px] border-white flex items-center justify-center transition-transform active:scale-95 group-hover:scale-105">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <span className="text-[9.5px] font-extrabold text-[#EA580C] mt-0.5 tracking-tight whitespace-nowrap">
              Call Now
            </span>
          </a>
        </div>

        {/* Tab 4: Appliances */}
        <NavLink
          to="/appliances"
          className={({ isActive }) =>
            `h-full flex flex-col items-center justify-center transition-colors ${
              isActive ? 'text-[#EA580C]' : 'text-slate-500 hover:text-[#173860]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Refrigerator className="w-5 h-5" />
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                Appliances
              </span>
              {isActive && <span className="w-1 h-1 rounded-full bg-[#EA580C] mt-0.5" />}
            </>
          )}
        </NavLink>

        {/* Tab 5: Reviews */}
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            `h-full flex flex-col items-center justify-center transition-colors ${
              isActive ? 'text-[#EA580C]' : 'text-slate-500 hover:text-[#173860]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Star className="w-5 h-5" />
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                Reviews
              </span>
              {isActive && <span className="w-1 h-1 rounded-full bg-[#EA580C] mt-0.5" />}
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
