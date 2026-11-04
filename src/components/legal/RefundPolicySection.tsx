'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  RefreshCw, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  HelpCircle, 
  FileText, 
  ArrowLeft, 
  ExternalLink, 
  Lock, 
  Zap, 
  Scale, 
  Sparkles,
  Server,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function RefundPolicySection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@apextopupbd.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('01571086652');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans select-none text-slate-300">
      
      {/* Centered Ambient Ambient Glow */}
      <div 
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-5xl h-96 [background:radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_65%)]" 
        aria-hidden="true" 
      />

      {/* ─── BREADCRUMB & TOP NAV ─── */}
      <div className="flex items-center justify-between">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Storefront</span>
        </Link>
        
        <div className="inline-flex items-center space-x-2 text-xs text-slate-400 font-medium bg-[#0F1523]/80 border border-white/10 px-3 py-1.5 rounded-xl">
          <Scale className="w-3.5 h-3.5 text-emerald-400" />
          <span>Govt Trade Reg: <strong className="text-white font-semibold">145/2026-27</strong></span>
        </div>
      </div>

      {/* ─── HEADER SECTION ─── */}
      <div className="relative text-center max-w-3xl mx-auto space-y-4">
        {/* Micro-Pill Tag */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-sm shadow-emerald-950/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Consumer Protection & Escrow Assurance</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Refund & Cancellation Policy
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Clear, fair, and transparent guidelines for all digital transactions at Apex Topup Digital Technologies. Enforced by automated server API reconciliations and consumer protection laws.
        </p>

        {/* ─── TOP METRIC HIGHLIGHTS (3 COMPACT PILLS) ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 text-left">
          
          {/* Metric 1 */}
          <div className="p-4 rounded-2xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all flex items-center space-x-3.5 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Delivery Guarantee</div>
              <div className="text-sm font-extrabold text-white flex items-center gap-1.5">
                <span>&lt; 2-Hour SLA</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold">Auto-Trigger</span>
              </div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="p-4 rounded-2xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all flex items-center space-x-3.5 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Reversal Guarantee</div>
              <div className="text-sm font-extrabold text-white flex items-center gap-1.5">
                <span>100% Wallet Return</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold">0% Fee</span>
              </div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="p-4 rounded-2xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all flex items-center space-x-3.5 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Legal Governance</div>
              <div className="text-sm font-extrabold text-white flex items-center gap-1.5">
                <span>DNCRP Aligned</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold">Trade Reg</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─── SECTION 1: ELIGIBILITY VS INELIGIBILITY (2-COLUMN BENTO GRID) ─── */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-400 font-bold text-xs border border-emerald-500/30 flex items-center justify-center">
            1
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Eligibility Matrix (Protected vs Excluded Scenarios)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* ── LEFT COLUMN: 100% FULL REFUND PROTECTED ── */}
          <div className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-emerald-500/25 p-6 sm:p-7 space-y-6 flex flex-col justify-between shadow-xl shadow-emerald-950/20 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-500/15">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shadow-inner">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white tracking-tight">
                      Full Refund Protected
                    </h3>
                    <p className="text-[11px] text-emerald-400 font-medium">100% Guaranteed Reversal</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  Guaranteed
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Under the commercial authorization of <strong>Apex Topup Digital Technologies</strong>, full refunds with <strong>0% deduction</strong> are programmatically granted under these verified conditions:
              </p>

              {/* Scenario Cards */}
              <div className="space-y-3">
                
                {/* Condition 1 */}
                <div className="p-3.5 rounded-2xl bg-[#090D15] border border-emerald-500/15 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Non-Delivery / Publisher Outage</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      &gt; 2 Hours
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Payment was successfully deducted from your bKash, Nagad, or Rocket, but game credits were not delivered within 2 hours due to upstream distributor or server maintenance.
                  </p>
                </div>

                {/* Condition 2 */}
                <div className="p-3.5 rounded-2xl bg-[#090D15] border border-emerald-500/15 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Out-of-Stock Digital Vouchers</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Instant Trigger
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    The requested gift card code (Google Play, Steam, etc.) or specific diamond denomination became unavailable post-payment confirmation.
                  </p>
                </div>

                {/* Condition 3 */}
                <div className="p-3.5 rounded-2xl bg-[#090D15] border border-emerald-500/15 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Duplicate Gateway Debits</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Auto-Reversed
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Network lag or gateway double-posting caused your MFS wallet or card to be charged multiple times for a single checkout session.
                  </p>
                </div>

              </div>
            </div>

            <div className="pt-3 border-t border-emerald-500/15 flex items-center justify-between text-[11px] text-emerald-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero processing deductions (0% Fee)</span>
              </span>
              <span className="font-mono text-slate-400">Direct Reversal Rail</span>
            </div>
          </div>

          {/* ── RIGHT COLUMN: NON-REFUNDABLE SCENARIOS (EXCLUSIONS) ── */}
          <div className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-rose-500/20 p-6 sm:p-7 space-y-6 flex flex-col justify-between shadow-xl shadow-rose-950/10 relative overflow-hidden group hover:border-rose-500/35 transition-all">
            <div className="absolute top-0 right-0 w-36 h-36 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-rose-500/15">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/25 shadow-inner">
                    <XCircle className="w-5 h-5 text-rose-400 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white tracking-tight">
                      Non-Refundable Scenarios
                    </h3>
                    <p className="text-[11px] text-rose-400/90 font-medium">Consumable Digital Asset Exclusions</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-[10px] font-bold uppercase tracking-wider">
                  Exclusions
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Because game credits and digital codes are instant, irrevocable virtual items, refunds strictly cannot be issued under the following circumstances:
              </p>

              {/* Exclusion Cards */}
              <div className="space-y-3">
                
                {/* Exclusion 1 */}
                <div className="p-3.5 rounded-2xl bg-[#090D15] border border-rose-500/15 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-rose-400" />
                      <span>Confirmed Server Delivery</span>
                    </span>
                    <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                      Non-Revocable
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    The diamonds, UC, or gift codes have been delivered and verified by official publisher server APIs (Garena, KRAFTON, Moonton, etc.).
                  </p>
                </div>

                {/* Exclusion 2 */}
                <div className="p-3.5 rounded-2xl bg-[#090D15] border border-rose-500/15 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      <span>User-Provided Incorrect Player UID</span>
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      Input Error
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    The customer mistakenly provided an incorrect Player ID / Zone ID and the automated server rail delivered credits to that account as instructed.
                  </p>
                </div>

                {/* Exclusion 3 */}
                <div className="p-3.5 rounded-2xl bg-[#090D15] border border-rose-500/15 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                      <span>Post-Delivery Change of Mind</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      Final Sale
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Once digital voucher keys or direct top-ups are fulfilled, transactions cannot be cancelled or swapped for alternative packages.
                  </p>
                </div>

              </div>
            </div>

            <div className="pt-3 border-t border-rose-500/15 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-rose-400" />
                <span>Publisher Server Logs Are Final Authority</span>
              </span>
              <span className="font-mono text-rose-400">Strict Anti-Fraud Rail</span>
            </div>
          </div>

        </div>
      </div>

      {/* ─── SECTION 2: AUTOMATED SETTLEMENT TIMELINES (VISUAL STEPPER) ─── */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="w-6 h-6 rounded-lg bg-sky-500/15 text-sky-400 font-bold text-xs border border-sky-500/30 flex items-center justify-center">
            2
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Automated Settlement Timelines & Disbursement Speeds
          </h2>
        </div>

        <div className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Once an eligible refund claim is initiated, our automated escrow system conducts cross-server reconciliation with the upstream publisher before triggering financial reversal:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
            
            {/* Timeline Card 1 */}
            <div className="relative p-5 rounded-2xl bg-[#090D15] border border-sky-500/20 space-y-3 group hover:border-sky-500/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                  Stage 01
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  &lt; 1 Hour
                </span>
              </div>

              <div className="flex items-center space-x-3 pt-1">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Automated Audit Review</h4>
                  <p className="text-[10px] text-slate-400">Server Log Reconciliation</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Our verification bot checks the publisher API response status (delivery failure or timeout) to approve the reversal instantly.
              </p>
            </div>

            {/* Timeline Card 2 */}
            <div className="relative p-5 rounded-2xl bg-[#090D15] border border-emerald-500/20 space-y-3 group hover:border-emerald-500/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Stage 02 (MFS Rails)
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  24 to 48 Hours
                </span>
              </div>

              <div className="flex items-center space-x-3 pt-1">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">bKash / Nagad / Rocket</h4>
                  <p className="text-[10px] text-slate-400">Direct Wallet Disbursal</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Reversal funds are deposited directly back into the originating mobile wallet with matching transaction reference and 0% deduction.
              </p>
            </div>

            {/* Timeline Card 3 */}
            <div className="relative p-5 rounded-2xl bg-[#090D15] border border-purple-500/20 space-y-3 group hover:border-purple-500/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                  Stage 03 (Banking)
                </span>
                <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  3 to 5 Days
                </span>
              </div>

              <div className="flex items-center space-x-3 pt-1">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Visa / Mastercard / Gateway</h4>
                  <p className="text-[10px] text-slate-400">Card Issuer Settlement</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                For international gateway checkouts (TransFi/Cards), reversals follow card association rules and reflect on bank statements in 3–5 working days.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ─── SECTION 3: INSTANT DISPUTE & CLAIM SUBMISSION HUB ─── */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-400 font-bold text-xs border border-emerald-500/30 flex items-center justify-center">
            3
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Instant Dispute & Claim Submission Hub
          </h2>
        </div>

        <div className="rounded-3xl bg-[#0F1523]/90 backdrop-blur-md border border-white/10 p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left: How to File a Dispute */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>3-Step Quick Submission</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                How to File a Dispute Claim
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                If your order meets the eligibility criteria, submit a claim immediately. To expedite automated approval, provide the following parameters:
              </p>

              {/* Required Parameters Pill Stack */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#090D15] border border-white/10">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 border border-emerald-500/30">
                    A
                  </span>
                  <div className="text-xs">
                    <span className="text-white font-bold">Order ID:</span>
                    <span className="text-slate-400 ml-1.5 font-mono text-[11px]">(e.g., TOPUP_1793666962222_DE13I)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#090D15] border border-white/10">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 border border-emerald-500/30">
                    B
                  </span>
                  <div className="text-xs">
                    <span className="text-white font-bold">Transaction TrxID / Hash:</span>
                    <span className="text-slate-400 ml-1.5 font-mono text-[11px]">(from bKash/Nagad/Rocket SMS)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-[#090D15] border border-white/10">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 border border-emerald-500/30">
                    C
                  </span>
                  <div className="text-xs">
                    <span className="text-white font-bold">Registered Mobile Number:</span>
                    <span className="text-slate-400 ml-1.5 font-mono text-[11px]">(Contact number entered during checkout)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact & Action Triggers */}
            <div className="space-y-4 rounded-2xl bg-[#090D15] border border-white/10 p-6 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Dispute Resolution Channels</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24/7 Monitored</span>
                </span>
              </div>

              {/* Email Dispute Desk Box */}
              <div className="p-4 rounded-xl bg-[#0F1523] border border-white/10 space-y-2">
                <div className="text-xs text-slate-400 font-medium">Official Dispute Desk:</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight select-all">
                    support@apextopupbd.com
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/15 text-slate-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Hotline Box */}
              <div className="p-4 rounded-xl bg-[#0F1523] border border-white/10 space-y-2">
                <div className="text-xs text-slate-400 font-medium">Live Customer Care Line:</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight select-all">
                    +880 1571-086652
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/15 text-slate-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all cursor-pointer"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Hotline</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Fast Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="mailto:support@apextopupbd.com?subject=Dispute%20Claim%20Submission"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 active:scale-98 flex items-center justify-center space-x-2 text-center"
                >
                  <Mail className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                  <span>Email Dispute Desk</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-white/20 transition-all active:scale-98 flex items-center justify-center space-x-2 text-center"
                >
                  <HelpCircle className="w-4 h-4 text-emerald-400" />
                  <span>Open 24/7 Live Desk</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ─── SECTION 4: COMPLIANCE & DISPUTE GOVERNANCE FOOTER ─── */}
      <div className="rounded-2xl bg-[#0E1422]/60 border border-white/5 p-6 space-y-4 text-xs text-slate-400 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5">
          <div className="flex items-center space-x-2 text-white font-bold">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Commercial Regulatory & Consumer Rights Compliance Notice</span>
          </div>
          <div className="flex items-center space-x-3 text-[11px]">
            <span className="text-emerald-400 font-semibold">DNCRP Compliant</span>
            <span>•</span>
            <span className="text-slate-400">Govt Trade Reg: 145/2026-27</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px] leading-relaxed text-slate-400">
          <div>
            <span className="font-semibold text-slate-300 block mb-1">National Consumer Protection:</span>
            Operating strictly in conformance with the Directorate of National Consumer Rights Protection (DNCRP) guidelines and the Bangladesh Information & Communication Technology (ICT) Act.
          </div>
          <div>
            <span className="font-semibold text-slate-300 block mb-1">Zero Hidden Deduction Guarantee:</span>
            Apex Topup Digital Technologies does not assess or deduct any administrative or convenience processing fees on eligible, approved reversals.
          </div>
          <div>
            <span className="font-semibold text-slate-300 block mb-1">Audit Trail & Data Retention:</span>
            All API telemetry timestamps, order identifiers, and MFS TrxIDs are preserved in immutable audit logs for 180 days for gateway compliance verification (TransFi, Stripe, bKash).
          </div>
        </div>
      </div>

    </div>
  );
}

