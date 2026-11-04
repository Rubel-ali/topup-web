'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Gamepad2, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Lock, 
  CreditCard,
  Zap,
  Building2,
  ChevronRight
} from 'lucide-react';

export default function DigitalStoreFooter() {
  return (
    <footer className="bg-[#070A0F] border-t border-white/10 pt-16 pb-16 md:pb-20 text-slate-400 select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ─── TIER 1: 4-COLUMN NAVIGATION & CORPORATE OFFICE GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Authorization */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Gamepad2 className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-white">
                  APEX<span className="text-emerald-400">TOPUP</span>
                </span>
                <span className="text-[10px] text-emerald-400/90 font-medium tracking-wide uppercase">
                  Authorized Distribution Rail
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
              Bangladesh’s premier institutional digital gaming credits, diamond top-up, and electronic gift voucher reseller platform. 100% verified server delivery.
            </p>

            <div className="inline-flex items-center space-x-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Registered Enterprise Entity</span>
            </div>
          </div>

          {/* Col 2: Popular Direct Channels */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Popular Direct Channels
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link 
                  href="/topup/freefire" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Free Fire Diamonds Top-Up
                </Link>
              </li>
              <li>
                <Link 
                  href="/topup/pubg" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  PUBG Mobile UC Store
                </Link>
              </li>
              <li>
                <Link 
                  href="/topup/mobilelegends" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Mobile Legends Diamonds
                </Link>
              </li>
              <li>
                <Link 
                  href="/topup/googleplay" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Google Play Gift Cards
                </Link>
              </li>
              <li>
                <Link 
                  href="/topup/steam" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Steam Wallet Gift Cards
                </Link>
              </li>
              <li>
                <Link 
                  href="/topup/valorant" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Valorant Points (VP)
                </Link>
              </li>
              <li>
                <Link 
                  href="/topup/roblox" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Roblox Robux Store
                </Link>
              </li>
              <li>
                <Link 
                  href="/topup/codm" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Call of Duty Mobile CP
                </Link>
              </li>
              <li>
                <Link 
                  href="/topup/clashofclans" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Clash of Clans Gems
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Policies */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  About Our Enterprise
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Privacy & Data Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/refund" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block text-slate-400"
                >
                  Contact Customer Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Corporate Office */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Registered Corporate Office
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Darigata, Bangabari, Gomastapur,<br />
                  Chapainawabganj-6320, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+880 1571-086652</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>supportapextopupbd@gmail.com</span>
              </li>
              <li className="pt-1">
                <div className="flex items-center space-x-2 text-xs bg-[#0F1420] border border-white/10 px-3 py-1.5 rounded-lg text-slate-300 w-fit">
                  <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Govt Trade Reg: <strong className="text-emerald-400 font-semibold">145/2025-27</strong></span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* ─── TIER 2: AUTHORIZED PAYMENT RAILS & SETTLEMENT SHOWCASE ─── */}
        <div className="rounded-2xl bg-[#0F1420]/80 border border-white/5 p-6 backdrop-blur-md shadow-inner">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Authorized Payment Rails & Settlement Networks
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-2xl font-normal leading-relaxed">
                All digital top-ups and gift vouchers settle directly via compliant domestic mobile financial rails and licensed international gateways. Zero cardholder data stored.
              </p>
            </div>

            {/* Balanced Payment Badges (Clean Equal-Height Grid) */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* TransFi Rail */}
              <div className="h-10 px-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                <span>TransFi Rail</span>
              </div>

              {/* bKash Direct */}
              <div className="h-10 px-3.5 rounded-xl bg-pink-950/40 border border-pink-700/40 text-pink-300 text-xs font-semibold flex items-center gap-2 shadow-sm">
                <img src="/bkash.webp" alt="bKash" className="w-4 h-4 object-contain" />
                <span>bKash Direct</span>
              </div>

              {/* Nagad Direct */}
              <div className="h-10 px-3.5 rounded-xl bg-orange-950/40 border border-orange-700/40 text-orange-300 text-xs font-semibold flex items-center gap-2 shadow-sm">
                <img src="/nagad.webp" alt="Nagad" className="w-4 h-4 object-contain" />
                <span>Nagad Direct</span>
              </div>

              {/* Rocket MFS */}
              <div className="h-10 px-3.5 rounded-xl bg-purple-950/40 border border-purple-700/40 text-purple-300 text-xs font-semibold flex items-center gap-2 shadow-sm">
                <img src="/rocket.webp" alt="Rocket" className="w-4 h-4 object-contain" />
                <span>Rocket MFS</span>
              </div>

              {/* Visa & Mastercard */}
              <div className="h-10 px-3.5 rounded-xl bg-blue-950/40 border border-blue-700/40 text-blue-300 text-xs font-semibold flex items-center gap-2 shadow-sm">
                <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                <span>Visa / Mastercard</span>
              </div>

              {/* SSL 256-Bit */}
              <div className="h-10 px-3.5 rounded-xl bg-emerald-950/40 border border-emerald-700/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 shadow-sm">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>SSL 256-Bit Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── TIER 3: BOTTOM LEGAL & COMPLIANCE STRIP (Zero Clipping) ─── */}
        <div className="pt-6 pb-2 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3 font-sans">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Apex Topup Digital Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400 text-[11px]">
            <span>Govt Trade License No: <strong className="text-emerald-400 font-semibold">145/2025-27</strong></span>
            <span>•</span>
            <span>PCI-DSS Validated Gateway Rails</span>
            <span>•</span>
            <span className="text-slate-300">BFIU AML Aligned</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

