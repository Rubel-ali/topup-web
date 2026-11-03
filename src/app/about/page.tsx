'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  CheckCircle2, 
  FileCheck, 
  Eye, 
  Download, 
  X, 
  Building2, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  BadgeCheck,
  FileText
} from 'lucide-react';

export default function AboutPage() {
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12 select-none">
      
      {/* Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-sm">
          <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Registered Enterprise Entity</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Apex Topup Digital Technologies
        </h1>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Pioneering digital gaming distribution and electronic entertainment top-up infrastructure in Bangladesh.
        </p>
      </div>

      {/* Corporate Overview */}
      <div className="p-8 rounded-3xl bg-[#121824] border border-[#1F293D] space-y-6 text-sm text-gray-300 leading-relaxed shadow-xl">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-400" />
            <span>Who We Are</span>
          </h2>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            Govt. Registered E-Commerce
          </span>
        </div>

        <p>
          Founded and operating in Bangladesh, <strong className="text-white">Apex Topup Digital Technologies</strong> (অ্যাপেক্স টপআপ ডিজিটাল টেকনোলজিস) operates as a registered commercial digital goods distribution and IT-enabled services (ITES) platform. We specialize in providing verified electronic top-up solutions, in-game virtual currencies, and global digital gift cards to video game enthusiasts across South Asia.
        </p>
        <p>
          Our mission is to eliminate payment friction for regional gamers by bridging domestic mobile financial services (MFS)—including bKash, Nagad, and Rocket—with international gaming developers and licensed distribution networks via direct server APIs.
        </p>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#121824] border border-[#1F293D] space-y-3 hover:border-emerald-500/30 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base">Authorized Sourcing</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Every digital code and top-up unit distributed on our portal is legally procured from certified regional publishers and API aggregators.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121824] border border-[#1F293D] space-y-3 hover:border-emerald-500/30 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base">Zero-Wait Automation</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Our cloud delivery systems process orders within 60 seconds of transaction settlement, ensuring gamers never miss in-game events.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#121824] border border-[#1F293D] space-y-3 hover:border-emerald-500/30 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base">Regulatory Compliance</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            We adhere strictly to consumer protection frameworks, local e-commerce guidelines, and international financial transaction integrity.
          </p>
        </div>
      </div>

      {/* ─── INSTITUTIONAL TRADE LICENSE REGISTRATION CARD (Crucial for KYB Audit) ─── */}
      <div className="rounded-3xl bg-[#0D121B] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative watermark */}
        <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-400" />
              <h3 className="font-black text-white text-lg sm:text-xl">
                Official Trade License & Governance
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              Verified legal registration issued by the Local Government Division, Bangladesh.
            </p>
          </div>

          {/* Certificate Viewer Trigger Button */}
          <button
            type="button"
            onClick={() => setIsCertificateModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <Eye className="w-4 h-4 stroke-[2.5]" />
            <span>View Trade License Certificate</span>
          </button>
        </div>

        {/* Structured Legal Attributes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          
          <div className="p-3.5 rounded-xl bg-[#121824]/90 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Registered Commercial Entity
            </span>
            <div className="font-bold text-white text-sm">
              Apex Topup Digital Technologies
            </div>
            <div className="text-[11px] text-emerald-400/90 font-medium">
              অ্যাপেক্স টপআপ ডিজিটাল টেকনোলজিস
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#121824]/90 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Govt. Trade License No.
            </span>
            <div className="font-mono font-black text-emerald-400 text-base">
              145/2025-27
            </div>
            <div className="text-[11px] text-slate-400">
              ক্রমিক নং: ১৪৫ (বই নং: ১৪৫/২০২৫-২৭)
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#121824]/90 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Issuing Authority & Jurisdiction
            </span>
            <div className="font-bold text-slate-200">
              2 No. Bangabari Union Parishad
            </div>
            <div className="text-[11px] text-slate-400">
              ২নং বাঙ্গাবাড়ী ইউনিয়ন পরিষদ, গোমস্তাপুর, চাঁপাইনবাবগঞ্জ
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#121824]/90 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Nature of Authorized Business
            </span>
            <div className="font-bold text-slate-200">
              E-Commerce & Digital Goods Reseller
            </div>
            <div className="text-[11px] text-emerald-400/90 font-mono">
              অনুমোদিত ব্যবসার ধরণ: ই-কমার্স
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#121824]/90 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Registered Office Address
            </span>
            <div className="font-medium text-slate-200">
              Darigata, Bangabari, Gomastapur
            </div>
            <div className="text-[11px] text-slate-400">
              চাঁপাইনবাবগঞ্জ - ৬৩২০, বাংলাদেশ
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#121824]/90 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Validity & Compliance Status
            </span>
            <div className="font-bold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Valid through June 30, 2027</span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              অর্থ বছর: ২০২৫ - ২০২৭
            </div>
          </div>

        </div>

        {/* Verification Guarantee Footnote */}
        <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Audited for Payment Gateway Integration (bKash, Nagad, Stripe, TransFi)</span>
          </div>
          <button 
            type="button" 
            onClick={() => setIsCertificateModalOpen(true)}
            className="text-emerald-400 hover:text-emerald-300 font-bold underline flex items-center gap-1 cursor-pointer"
          >
            <span>Inspect Physical Certificate Scan</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* ─── MODAL LIGHTBOX: TRADE LICENSE CERTIFICATE VIEWER ─── */}
      {isCertificateModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsCertificateModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[92vh] bg-[#0E131F] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#121824]">
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Govt. Trade License Certificate
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Reg No: 145/2025-27 • Apex Topup Digital Technologies
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/legal/trade-license.jpg"
                  download="ApexTopup-Trade-License-145-2025-27.jpg"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  title="Download Certificate Copy"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsCertificateModalOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                  title="Close viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Certificate Image Canvas */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#070A0F] flex items-center justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white max-w-full">
                <img
                  src="/legal/trade-license.jpg"
                  alt="Apex Topup Digital Technologies Trade License Certificate (Reg No: 145/2025-27)"
                  className="w-full h-auto max-h-[72vh] object-contain"
                />
              </div>
            </div>

            {/* Modal Footer Banner */}
            <div className="px-5 py-3 border-t border-white/10 bg-[#0E131F] flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Authorized Jurisdiction: 2 No. Bangabari UP, Gomastapur</span>
              </div>
              <a
                href="/legal/trade-license.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
              >
                <span>Full Resolution</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
