'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Gamepad2, 
  Menu, 
  X, 
  Headphones,
  ShieldCheck 
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B0E14]/95 backdrop-blur-md border-b border-[#1F293D]/90 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-3 sm:gap-4">
          
          {/* Left Group: Brand Logo & Desktop Navigation Links */}
          <div className="flex items-center space-x-3 xl:space-x-6 min-w-0">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-2.5 group shrink-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.5]" />
              </div>
              <div className="flex flex-col shrink-0">
                <span className="text-base sm:text-lg font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-emerald-400 whitespace-nowrap leading-tight">
                  APEX<span className="text-emerald-400">TOPUP</span>
                </span>
                <span className="text-[8px] sm:text-[9px] text-emerald-400/90 font-medium tracking-wider uppercase whitespace-nowrap leading-none mt-0.5">
                  Authorized Digital Rail
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link 
                href="/" 
                className="px-2 xl:px-2.5 py-1 text-xs xl:text-sm font-semibold text-slate-200 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-colors whitespace-nowrap"
              >
                Home
              </Link>
              <Link 
                href="/#catalog" 
                className="px-2 xl:px-2.5 py-1 text-xs xl:text-sm font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-colors whitespace-nowrap"
              >
                Game Top-Up
              </Link>
              <Link 
                href="/topup/googleplay" 
                className="px-2 xl:px-2.5 py-1 text-xs xl:text-sm font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-colors whitespace-nowrap"
              >
                Gift Cards
              </Link>
              <Link 
                href="/refund" 
                className="hidden xl:inline-flex px-2 xl:px-2.5 py-1 text-xs xl:text-sm font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-colors whitespace-nowrap"
              >
                Refund Policy
              </Link>
              <Link 
                href="/terms" 
                className="hidden xl:inline-flex px-2 xl:px-2.5 py-1 text-xs xl:text-sm font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-colors whitespace-nowrap"
              >
                Terms of Service
              </Link>
              <Link 
                href="/about" 
                className="hidden 2xl:inline-flex px-2 xl:px-2.5 py-1 text-xs xl:text-sm font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-colors whitespace-nowrap"
              >
                Legal Verification
              </Link>
            </nav>
          </div>

          {/* Right Group: Audit-Compliant Platform Trust Indicator + 24/7 Support Desk */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 shrink-0 ml-auto">
            {/* Audit-Compliant Trust Indicator (Platform-Agnostic) */}
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-slate-200 font-semibold tracking-wide">
                SSL 256-Bit Secured
              </span>
            </div>

            {/* 24/7 Priority Support */}
            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-xl hover:from-emerald-400 hover:to-teal-300 transition-all shadow-md shadow-emerald-500/20 active:scale-95 whitespace-nowrap shrink-0"
            >
              <Headphones className="w-3.5 h-3.5 stroke-[2.5] shrink-0" />
              <span className="whitespace-nowrap">24/7 Support</span>
            </Link>
          </div>

          {/* Mobile & Tablet Toggle */}
          <div className="lg:hidden flex items-center space-x-2 shrink-0">
            <div className="flex items-center space-x-1.5 text-[11px] text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 font-medium whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="whitespace-nowrap font-semibold">SSL Secured</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F141F] border-b border-[#1F293D] px-4 pt-3 pb-5 space-y-2 text-sm animate-in fade-in slide-in-from-top-2 duration-150">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-medium text-slate-200 hover:bg-slate-800 whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            href="/#catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-medium text-slate-200 hover:bg-slate-800 whitespace-nowrap"
          >
            Game Top-Up
          </Link>
          <Link
            href="/topup/googleplay"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-medium text-slate-200 hover:bg-slate-800 whitespace-nowrap"
          >
            Gift Cards
          </Link>
          <Link
            href="/refund"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-medium text-slate-200 hover:bg-slate-800 whitespace-nowrap"
          >
            Refund Policy
          </Link>
          <Link
            href="/terms"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-medium text-slate-200 hover:bg-slate-800 whitespace-nowrap"
          >
            Terms of Service
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-medium text-slate-200 hover:bg-slate-800 whitespace-nowrap"
          >
            Legal Verification
          </Link>
          <div className="pt-2 border-t border-[#1F293D]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-500 to-teal-400 shadow-md whitespace-nowrap"
            >
              <Headphones className="w-4 h-4 shrink-0" />
              <span>Contact 24/7 Support Desk</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
