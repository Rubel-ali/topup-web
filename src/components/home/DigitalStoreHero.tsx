'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Gamepad2, 
  ShieldCheck, 
  Zap, 
  CreditCard, 
  Headphones, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  X, 
  Clock, 
  Sparkles, 
  Server, 
  Lock, 
  Flame, 
  ChevronRight 
} from 'lucide-react';
import { GAMES } from '@/data/games';
import LiveApiInspectorModal from '@/components/telemetry/LiveApiInspectorModal';

export default function DigitalStoreHero() {
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 border-b border-[#1F293D]/80">
        {/* Ambient Radial Backlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-500/5 blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Hero Header */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Compliance Micro-Pill */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#121824]/90 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide shadow-lg shadow-emerald-950/40 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="uppercase text-[11px] tracking-wider text-slate-200">
                Official API Distribution Network in Bangladesh
              </span>
              <span className="hidden sm:inline-block text-slate-500">|</span>
              <span className="hidden sm:inline-flex items-center text-[10px] text-cyan-400 font-sans font-medium">
                <Activity className="w-3 h-3 mr-1" /> Multi-Gateway S2S Rail: Active
              </span>
            </div>

            {/* Dynamic Masked Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-100 leading-[1.15]">
              Instant Game Credits & Digital Vouchers{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 drop-shadow-sm">
                Delivered in Seconds
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Authorized direct publisher API redemption for Free Fire, PUBG Mobile, Steam, and PlayStation networks via{' '}
              <span className="text-pink-400 font-semibold">bKash</span>,{' '}
              <span className="text-orange-400 font-semibold">Nagad</span>, and{' '}
              <span className="text-purple-400 font-semibold">Rocket</span>. Zero merchant surcharge, 100% automated server dispatch.
            </p>

            {/* Action Hub: Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <a
                href="#catalog"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-slate-950 font-black text-sm tracking-wider uppercase shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-98 transition-all"
              >
                <Gamepad2 className="w-4 h-4 fill-current stroke-[2.5]" />
                <span>Explore Digital Catalog</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsVerifyModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-[#121824]/90 border border-slate-700 hover:border-emerald-500/40 text-slate-200 hover:text-white font-bold text-sm tracking-wide shadow-md backdrop-blur-md hover:bg-[#161F2E] active:scale-98 transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verify Instant Delivery</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-sans font-bold">
                  Live API
                </span>
              </button>
            </div>
          </div>

          {/* 4-Column Balanced Trust & Telemetry Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Pod 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#121824]/80 border border-white/10 hover:border-emerald-500/30 backdrop-blur-md transition-all duration-300 group hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Latency 18ms
                </span>
              </div>
              <div className="text-xl font-black text-slate-100">&lt;60s Direct Engine</div>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                Automated publisher server API dispatch within seconds of payment.
              </p>
            </div>

            {/* Pod 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#121824]/80 border border-white/10 hover:border-emerald-500/30 backdrop-blur-md transition-all duration-300 group hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Certified
                </span>
              </div>
              <div className="text-xl font-black text-slate-100">100% Authorized</div>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                Official regional game digital vouchers and licensed publisher API codes.
              </p>
            </div>

            {/* Pod 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#121824]/80 border border-white/10 hover:border-emerald-500/30 backdrop-blur-md transition-all duration-300 group hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Instant MFS
                </span>
              </div>
              <div className="text-xl font-black text-slate-100">Zero Merchant Fee</div>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                Direct bKash, Nagad, Rocket, and card rails without extra surcharges.
              </p>
            </div>

            {/* Pod 4 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#121824]/80 border border-white/10 hover:border-emerald-500/30 backdrop-blur-md transition-all duration-300 group hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <Headphones className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Bengali & Eng
                </span>
              </div>
              <div className="text-xl font-black text-slate-100">24/7 Priority Desk</div>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                Dedicated customer assistance and instant dispute resolution anytime.
              </p>
            </div>
          </div>

          {/* Quick Featured Catalog Showcase (Above Fold Strip - Eliminating the Void) */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                <Flame className="w-4 h-4 text-emerald-400" />
                <span>Instant Top-Up Channels Available Now</span>
              </div>
              <a
                href="#catalog"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center space-x-1"
              >
                <span>View Full Catalog</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 4-Item Quick Access Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {GAMES.slice(0, 4).map((game) => (
                <Link
                  key={game.id}
                  href={`/topup/${game.id}`}
                  className="group relative rounded-2xl bg-[#121824] border border-[#1F293D] hover:border-emerald-500/40 overflow-hidden transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 group-hover:border-emerald-500/30 transition-colors bg-gray-900">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider truncate">
                        {game.publisher}
                      </div>
                      <h4 className="text-sm font-black text-slate-100 truncate group-hover:text-emerald-400 transition-colors">
                        {game.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#1F293D]/60 text-xs">
                    <span className="text-slate-400 text-[11px]">From ৳{game.packages[0].priceBdt}</span>
                    <span className="font-bold text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center">
                      Top-Up <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Compliance & Order Verification Modal */}
      <LiveApiInspectorModal 
        isOpen={isVerifyModalOpen} 
        onClose={() => setIsVerifyModalOpen(false)} 
      />
    </>
  );
}

