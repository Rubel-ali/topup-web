'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Server, 
  Cpu, 
  Lock, 
  CheckCircle2, 
  Clock, 
  Scale, 
  Zap, 
  FileCheck, 
  Activity, 
  RefreshCcw, 
  BadgeCheck,
  Building2,
  Fingerprint
} from 'lucide-react';

export default function ConsumerProtectionSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 select-none">
      
      {/* Centered Ambient Radial Glow Background */}
      <div 
        className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 w-full max-w-4xl h-96 [background:radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_70%)]" 
        aria-hidden="true" 
      />

      {/* ─── SECTION HEADER ─── */}
      <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-12">
        {/* Micro-Pill Tag with live green indicator */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-sm shadow-emerald-950/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Audit-Ready Merchant Compliance</span>
        </div>

        {/* Title with Subtle Metallic Gradient Text */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
          Institutional Sourcing & Consumer Protection Architecture
        </h2>

        {/* Subtitle Summary */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Apex Topup Digital Technologies operates under registered commercial trade authorization in Bangladesh. Every order is executed through direct publisher server APIs, enforced by zero-credential storage and automated instant refund SLAs.
        </p>
      </div>

      {/* ─── 3-CARD BALANCED BENTO GRID ─── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* ── CARD 1: Automated Direct Server API Dispatch ── */}
        <div className="group relative rounded-2xl bg-[#121824]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
          <div className="space-y-4">
            
            {/* Header Icon with Emerald Pulse Ring */}
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6 text-emerald-400 stroke-[2.2]" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase">
                S2S API Rail
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors">
                Direct Server-to-Server Dispatch
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                As soon as checkout settles across domestic mobile rails (bKash/Nagad/Rocket), our cloud infrastructure dispatches digital credits directly into player accounts via publisher server rails.
              </p>
            </div>

            {/* Visual Mini-Telemetry Proof Tokens */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0E14] border border-white/5 text-[11px]">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Avg Cloud Latency</span>
                </span>
                <span className="font-mono font-bold text-emerald-400">
                  ~320ms Direct Rail
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-[11px] text-emerald-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Zero Credential Logging (Player UID Only)</span>
              </div>
            </div>

          </div>

          {/* Bottom Telemetry Meta Row */}
          <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Protocol: TLS 1.3 Encrypted</span>
            <span className="text-emerald-400 font-semibold">99.98% SLA</span>
          </div>
        </div>

        {/* ── CARD 2: 100% Automated Reversal Guarantee ── */}
        <div className="group relative rounded-2xl bg-[#121824]/80 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1">
          <div className="space-y-4">
            
            {/* Header Icon with Cyan Glow Ring */}
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-cyan-400 stroke-[2.2]" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold tracking-wider uppercase">
                Escrow Protected
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
                Automated Reversal Guarantee
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                If an upstream distributor undergoes publisher maintenance or an order exceeds our SLA threshold, full refunds are programmatically credited to the originating bKash or Nagad wallet.
              </p>
            </div>

            {/* Visual Mini-Telemetry Proof Tokens */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0E14] border border-white/5 text-[11px]">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Auto-Refund Trigger</span>
                </span>
                <span className="font-mono font-bold text-cyan-400">
                  &lt; 120 Mins Timeout
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/5 border border-cyan-500/15 text-[11px] text-cyan-300 font-medium">
                <RefreshCcw className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">Instant Return to Source Wallet (bKash/Nagad)</span>
              </div>
            </div>

          </div>

          {/* Bottom Telemetry Meta Row */}
          <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Deductions: 0% Fee</span>
            <span className="text-cyan-400 font-semibold">100% Guaranteed</span>
          </div>
        </div>

        {/* ── CARD 3: Anti-Fraud & AML Protocol ── */}
        <div className="group relative rounded-2xl bg-[#121824]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
          <div className="space-y-4">
            
            {/* Header Icon with Emerald Glow Ring */}
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <Lock className="w-6 h-6 text-emerald-400 stroke-[2.2]" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold tracking-wider uppercase">
                AML Aligned
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors">
                Anti-Fraud & AML Telemetry
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Operating in strict compliance with consumer protection and e-commerce standards, transactions undergo automated velocity checks and source validation through licensed MFS aggregators.
              </p>
            </div>

            {/* Visual Mini-Telemetry Proof Tokens */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0E14] border border-white/5 text-[11px]">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Fingerprint className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Velocity Monitoring</span>
                </span>
                <span className="font-mono font-bold text-emerald-400">
                  Real-Time AI Filter
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-[11px] text-emerald-300 font-medium">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">BFIU & AML Guideline Aligned</span>
              </div>
            </div>

          </div>

          {/* Bottom Telemetry Meta Row */}
          <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Aggregators: Licensed MFS</span>
            <span className="text-emerald-400 font-semibold">KYB Verified</span>
          </div>
        </div>

      </div>

      {/* ─── INSTITUTIONAL AUDIT BADGE STRIP ─── */}
      <div className="mt-8 p-4 rounded-2xl bg-[#0D121B] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-slate-300">
            Registered Entity: <strong className="text-white">Apex Topup Digital Technologies</strong> (Govt Trade License: <span className="font-mono text-emerald-400 font-semibold">145/2026-27</span>)
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Zero Storage of Game Passwords
          </span>
          <span>•</span>
          <span>TransFi & Stripe Audit Ready</span>
        </div>
      </div>

    </section>
  );
}
