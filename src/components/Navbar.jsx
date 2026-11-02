import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Wrench, Phone } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Overview', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Appliances', path: '/appliances' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Reviews', path: '/reviews' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-navbar">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* ========================================================= */}
        {/* DESKTOP HEADER (100% Intact & Untouched for md+ Screens) */}
        {/* ========================================================= */}
        <div className="hidden md:flex items-center justify-between h-18 sm:h-20">
          {/* Logo with glass container */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/25 flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform backdrop-blur-md">
                <Wrench className="w-4.5 h-4.5 text-orange-400 drop-shadow-[0_2px_4px_rgba(234,88,12,0.4)]" />
              </div>
              <span className="font-extrabold tracking-wide text-sm sm:text-base text-white font-mono drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                APEX APPLIANCE REPAIR
              </span>
            </Link>
          </div>

          {/* Nav Links with glossy highlight */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-11 text-[15px] sm:text-base font-semibold tracking-normal">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `relative py-1.5 transition-all duration-200 ${
                    isActive
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-200 to-orange-400 font-bold drop-shadow-[0_2px_8px_rgba(234,88,12,0.4)]'
                      : 'text-slate-100 hover:text-white hover:drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-[2.5px] bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 rounded-full shadow-[0_0_8px_rgba(234,88,12,0.8)]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Top Right Orange Call Button with Light Sweep */}
          <div className="flex items-center">
            <a
              href="tel:8772252046"
              className="btn-glossy-primary inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-bold text-xs sm:text-sm tracking-wide"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now: (877) 225-2046</span>
            </a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE HEADER (Modern App Top Bar for < md Screens)      */}
        {/* ========================================================= */}
        <div className="flex md:hidden items-center justify-between h-16">
          {/* Mobile Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/25 flex items-center justify-center text-white shadow-inner backdrop-blur-md">
              <Wrench className="w-4 h-4 text-orange-400" />
            </div>
            <span className="font-extrabold tracking-wide text-xs text-white font-mono">
              APEX REPAIR
            </span>
          </Link>

          {/* Right Action Items: 24/7 Pulse Badge + Compact Call Button */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold text-emerald-300 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>24/7 LIVE</span>
            </div>

            <a
              href="tel:8772252046"
              className="btn-glossy-primary px-3 py-1.5 rounded-full text-white text-xs font-bold flex items-center gap-1 shadow-sm shrink-0"
              aria-label="Call Now"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
