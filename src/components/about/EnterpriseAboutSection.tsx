'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  Zap, 
  Scale, 
  FileCheck, 
  ExternalLink, 
  Eye, 
  Download, 
  X, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  ArrowLeft, 
  Lock, 
  FileBadge, 
  Sparkles,
  Award,
  Hash,
  Shield,
  Copy,
  Check
} from 'lucide-react';

export default function EnterpriseAboutSection() {
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [isHashModalOpen, setIsHashModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedLicense, setCopiedLicense] = useState(false);

  const CERTIFICATE_HASH = 'SHA256:8F9C4A2E7D1B6F03E5A8C2D9F4B1E7A0C3D6F9E2B5A8D1C4F7E0A3C6B9D2E5F8';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(CERTIFICATE_HASH);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const handleCopyLicense = () => {
    navigator.clipboard.writeText('145/2025-27');
    setCopiedLicense(true);
    setTimeout(() => setCopiedLicense(false), 2500);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-sans select-none text-slate-300 antialiased">
      
      {/* Background Ambient Glow */}
      <div 
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-5xl h-96 [background:radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_65%)]" 
        aria-hidden="true" 
      />

      {/* ─── BREADCRUMB ─── */}
      <div className="flex items-center justify-between">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Storefront</span>
        </Link>
        
        <div className="inline-flex items-center space-x-2 text-xs text-slate-400 font-medium bg-[#0F1523]/80 border border-white/10 px-3 py-1.5 rounded-xl">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>Govt Trade Reg: <strong className="text-white font-semibold tabular-nums">145/2025-27</strong></span>
        </div>
      </div>

      {/* ─── SECTION HEADER ─── */}
      <header className="relative text-center max-w-3xl mx-auto space-y-4">
        {/* Micro-Pill Tag */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-sm shadow-emerald-950/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Registered Corporate Entity</span>
        </div>

        {/* Title with Subtle Metallic Gradient */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
          Apex Topup Digital Technologies
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Pioneering digital gaming distribution and electronic entertainment top-up infrastructure in Bangladesh. Operating under authorized municipal commercial trade registration.
        </p>
      </header>

      {/* ─── PRIMARY NARRATIVE CARD (WHO WE ARE) ─── */}
      <section className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 p-6 sm:p-8 space-y-5 shadow-xl transition-all relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Enterprise Profile</span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Corporate Profile & Mission
              </h2>
            </div>
          </div>
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified ITES & Digital Reseller</span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300 font-sans">
          <p>
            Founded and operating in Bangladesh, <strong className="text-white font-bold">Apex Topup Digital Technologies</strong> (<span className="text-emerald-300 font-medium">অ্যাপেক্স টপআপ ডিজিটাল টেকনোলজিস</span>) operates as a registered commercial digital goods distribution and IT-enabled services (ITES) platform. We specialize in providing verified electronic top-up solutions, in-game virtual currencies, and global digital gift cards to video game enthusiasts across South Asia.
          </p>
          <p className="text-slate-400">
            Our mission is to eliminate payment friction for regional gamers by bridging domestic mobile financial services (MFS)—including bKash, Nagad, and DBBL Rocket—with international gaming developers and licensed distribution networks via direct server APIs (S2S). We are engineered from the ground up for high transaction throughput, automated delivery SLAs, and strict compliance with national digital commerce regulations.
          </p>
        </div>
      </section>

      {/* ─── CORE OPERATIONAL PILLARS (3-CARD BALANCED BENTO GRID) ─── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Pillar 1: Authorized Sourcing */}
        <div className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 p-6 space-y-4 shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
          <div className="space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-emerald-400 stroke-[2.2]" />
            </div>
            
            <h3 className="text-base font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              Authorized Sourcing
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Every digital code, voucher, and top-up unit distributed on our portal is legally procured from certified regional publishers and authorized API distribution channels.
            </p>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-emerald-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Genuine Credits</span>
            </span>
            <span className="text-slate-400">Direct Publisher Rail</span>
          </div>
        </div>

        {/* Pillar 2: Zero-Wait Automation */}
        <div className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 p-6 space-y-4 shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
          <div className="space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 text-emerald-400 stroke-[2.2]" />
            </div>
            
            <h3 className="text-base font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              Zero-Wait Automation
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Our cloud delivery systems process orders within 60 seconds of transaction settlement, ensuring gamers receive in-game assets instantly without manual bottlenecks.
            </p>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-emerald-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Avg Latency: ~320ms</span>
            </span>
            <span className="text-slate-400">&lt;60s SLA Guarantee</span>
          </div>
        </div>

        {/* Pillar 3: Regulatory Compliance */}
        <div className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 p-6 space-y-4 shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
          <div className="space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6 text-emerald-400 stroke-[2.2]" />
            </div>
            
            <h3 className="text-base font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              Regulatory Compliance
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              We adhere strictly to Bangladesh ICT guidelines, consumer protection frameworks (DNCRP), domestic AML directives, and international payment security standards.
            </p>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-emerald-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Trade Reg: 145/2025-27</span>
            </span>
            <span className="text-slate-400">DNCRP Aligned</span>
          </div>
        </div>

      </section>

      {/* ─── OFFICIAL TRADE LICENSE & CORPORATE GOVERNANCE GRID ─── */}
      <section className="rounded-3xl bg-[#0F1523]/90 backdrop-blur-md border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        
        {/* Section Top Header with Glass Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                <FileBadge className="w-4 h-4 text-emerald-400" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Official Trade License & Governance
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Verified legal registration issued by the Local Government Division, People’s Republic of Bangladesh.
            </p>
          </div>

          {/* Certificate Action Button */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsCertificateModalOpen(true)}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider border border-emerald-500/30 shadow-lg shadow-emerald-950/30 transition-all cursor-pointer group"
            >
              <Eye className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>View Trade License Certificate</span>
            </button>
          </div>
        </div>

        {/* 6-Field Telemetry Grid in Crisp Sans-Serif */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
          
          {/* Field 1: Registered Entity Name */}
          <div className="p-4 rounded-2xl bg-[#090D15] border border-white/10 space-y-1.5 hover:border-emerald-500/25 transition-all">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Registered Commercial Entity
            </span>
            <div className="text-sm font-bold text-white">
              Apex Topup Digital Technologies
            </div>
            <div className="text-xs text-emerald-400 font-medium">
              অ্যাপেক্স টপআপ ডিজিটাল টেকনোলজিস
            </div>
          </div>

          {/* Field 2: Govt. Trade License No */}
          <div className="p-4 rounded-2xl bg-[#090D15] border border-white/10 space-y-1.5 hover:border-emerald-500/25 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Govt. Trade License No.
              </span>
              <button
                type="button"
                onClick={handleCopyLicense}
                className="text-[10px] text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copiedLicense ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold text-emerald-400 tabular-nums">
                145/2025-27
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/25">
                Active & Verified
              </span>
            </div>
            <div className="text-xs text-slate-400">
              ক্রমিক নং: ১৪৫ (বই নং: ১৪৫/২০২৫-২৭)
            </div>
          </div>

          {/* Field 3: Issuing Authority */}
          <div className="p-4 rounded-2xl bg-[#090D15] border border-white/10 space-y-1.5 hover:border-emerald-500/25 transition-all">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Issuing Authority & Registry
            </span>
            <div className="text-sm font-semibold text-slate-100">
              2 No. Bangabari Union Parishad
            </div>
            <div className="text-xs text-slate-400">
              ২নং বাঙ্গাবাড়ী ইউনিয়ন পরিষদ, গোমস্তাপুর, চাঁপাইনবাবগঞ্জ
            </div>
          </div>

          {/* Field 4: Business Category */}
          <div className="p-4 rounded-2xl bg-[#090D15] border border-white/10 space-y-1.5 hover:border-emerald-500/25 transition-all">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Authorized Business Category
            </span>
            <div className="text-sm font-semibold text-slate-100">
              E-Commerce & Digital Goods Reseller
            </div>
            <div className="text-xs text-slate-400">
              অনুমোদিত ব্যবসার ধরণ: ই-কমার্স ও তথ্যপ্রযুক্তিভিত্তিক সেবা
            </div>
          </div>

          {/* Field 5: Registered Office */}
          <div className="p-4 rounded-2xl bg-[#090D15] border border-white/10 space-y-1.5 hover:border-emerald-500/25 transition-all">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Registered Commercial Office
            </span>
            <div className="text-sm font-medium text-slate-100">
              Darigata, Bangabari, Gomastapur
            </div>
            <div className="text-xs text-slate-400">
              চাঁপাইনবাবগঞ্জ - ৬৩২০, রাজশাহী বিভাগ, বাংলাদেশ
            </div>
          </div>

          {/* Field 6: License Validity */}
          <div className="p-4 rounded-2xl bg-[#090D15] border border-white/10 space-y-1.5 hover:border-emerald-500/25 transition-all">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Licensing Validity Period
            </span>
            <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Valid Through June 30, 2027</span>
            </div>
            <div className="text-xs text-slate-400">
              মেয়াদকাল: অর্থ বছর ২০২৫ - ২০২৭
            </div>
          </div>

        </div>

      </section>

      {/* ─── AUDIT & SETTLEMENT COMPLIANCE FOOTER STRIP ─── */}
      <footer className="rounded-2xl bg-[#0E1422]/60 border border-white/5 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 shadow-md">
        <div className="flex items-center space-x-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Audited for Payment Gateway Integration (<strong className="text-white">bKash, Nagad, Stripe, TransFi</strong>)
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={() => setIsHashModalOpen(true)}
            className="inline-flex items-center space-x-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition-colors cursor-pointer group"
          >
            <Hash className="w-3.5 h-3.5 text-emerald-400" />
            <span>Inspect Digital Certificate Hash</span>
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </footer>

      {/* ─── TRADE LICENSE CERTIFICATE VIEWER MODAL ─── */}
      {isCertificateModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsCertificateModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#0E131F] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121824]">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <FileBadge className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Government Trade License Certificate
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Trade Reg: 145/2025-27 • 2 No. Bangabari Union Parishad
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href="/legal/trade-license.jpg"
                  download="ApexTopup-Trade-License-145-2025-27.jpg"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsCertificateModalOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-[#070A0F]">
              <img 
                src="/legal/trade-license.jpg" 
                alt="Government Trade License - Apex Topup Digital Technologies" 
                className="max-h-[72vh] w-auto object-contain rounded-xl border border-white/10 shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-white/10 bg-[#121824] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified by Local Government Division, Bangladesh</span>
              </span>
              <span className="text-emerald-400 font-medium">Valid through June 30, 2027</span>
            </div>
          </div>
        </div>
      )}

      {/* ─── DIGITAL CERTIFICATE HASH INSPECTION MODAL ─── */}
      {isHashModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsHashModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-[#0E131F] border border-white/15 rounded-3xl shadow-2xl p-6 space-y-5 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Hash className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Digital Document Hash</h3>
                  <p className="text-[11px] text-slate-400">Cryptographic KYB Verification Token</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsHashModalOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              International settlement gateways (TransFi, Stripe) and payment partners can verify the integrity of the official trade registration certificate using this cryptographic checksum:
            </p>

            <div className="p-3.5 rounded-xl bg-[#070A0F] border border-white/10 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                SHA-256 Digest
              </span>
              <div className="text-xs font-mono text-emerald-400 break-all select-all leading-relaxed">
                {CERTIFICATE_HASH}
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={handleCopyHash}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition-all cursor-pointer"
              >
                {copiedHash ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Hash Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy SHA-256 Hash</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsHashModalOpen(false);
                  setIsCertificateModalOpen(true);
                }}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                View Certificate Image
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

