'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Scale, 
  FileText, 
  Gamepad2, 
  UserCheck, 
  CreditCard, 
  ShieldCheck, 
  Building2, 
  Printer, 
  Copy, 
  Check, 
  ArrowLeft, 
  ExternalLink, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles,
  Info,
  ChevronRight,
  Shield,
  FileCheck,
  Calendar,
  MapPin,
  Zap
} from 'lucide-react';

interface ClauseItem {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
}

const CLAUSES: ClauseItem[] = [
  { id: 'clause-agreement', title: '1. Agreement to Terms & Enterprise Binding', shortTitle: 'Agreement to Terms', icon: FileText },
  { id: 'clause-scope', title: '2. Scope of Services & Digital Reseller Boundaries', shortTitle: 'Scope of Services', icon: Gamepad2 },
  { id: 'clause-responsibilities', title: '3. Customer Responsibilities & Player UID Accuracy', shortTitle: 'UID Accuracy & Safety', icon: UserCheck },
  { id: 'clause-payment', title: '4. Payment Rails, S2S Dispatch & Security', shortTitle: 'Payment & S2S Settlement', icon: CreditCard },
  { id: 'clause-ip', title: '5. Intellectual Property & Publisher Trademarks', shortTitle: 'IP & Trademarks', icon: ShieldCheck },
  { id: 'clause-governance', title: '6. Registered Office, Jurisdiction & Governing Law', shortTitle: 'Office & Governing Law', icon: Building2 },
];

export default function TermsOfServiceSection() {
  const [activeSection, setActiveSection] = useState<string>('clause-agreement');
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedLicense, setCopiedLicense] = useState(false);

  // Active section spy on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const clause of CLAUSES) {
        const element = document.getElementById(clause.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(clause.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToClause = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Darigata, Bangabari, Gomastapur, Chapainawabganj-6320, Bangladesh');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyLicense = () => {
    navigator.clipboard.writeText('145/2025-27');
    setCopiedLicense(true);
    setTimeout(() => setCopiedLicense(false), 2500);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-sans select-none text-slate-300">
      
      {/* Background Ambient Glow */}
      <div 
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-5xl h-96 [background:radial-gradient(ellipse_at_top,rgba(16,185,129,0.07),transparent_65%)]" 
        aria-hidden="true" 
      />

      {/* ─── BREADCRUMB & METADATA BAR ─── */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Storefront</span>
        </Link>
        
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 bg-[#0F1523]/80 border border-white/10 px-3 py-1.5 rounded-xl">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Effective Season: <strong className="text-white font-medium">2026</strong></span>
          </span>
          <button 
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center space-x-1.5 text-xs text-slate-300 hover:text-emerald-400 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-xl transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print Document</span>
          </button>
        </div>
      </div>

      {/* ─── HEADER & COMPLIANCE BANNER ─── */}
      <header className="relative text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-sm shadow-emerald-950/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <Scale className="w-3.5 h-3.5 text-emerald-400" />
          <span>Binding Commercial Legal Governance</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Terms of Service & Regulatory Framework
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
          These binding Terms of Service govern all digital transactions, game voucher distributions, and electronic settlement activities facilitated by Apex Topup Digital Technologies.
        </p>

        {/* Top Compliance Signal Strip */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-[#0F1523]/90 border border-white/10 text-slate-300 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Govt Trade Reg: <strong className="text-emerald-400 font-semibold">145/2025-27</strong></span>
          </span>
          <span className="px-3 py-1 rounded-full bg-[#0F1523]/90 border border-white/10 text-slate-300 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            <span>Registered in Bangladesh</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-[#0F1523]/90 border border-white/10 text-slate-300 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>ICT Act 2006 & DNCRP Compliant</span>
          </span>
        </div>
      </header>

      {/* ─── 2-COLUMN RESPONSIVE LEGAL TERMINAL ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
        
        {/* ── LEFT SIDEBAR: STICKY TABLE OF CONTENTS (lg:col-span-4) ── */}
        <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
          
          {/* Table of Contents Card */}
          <div className="rounded-3xl bg-[#0F1523]/90 backdrop-blur-md border border-white/10 p-5 space-y-3 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Table of Contents</span>
              </span>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                6 Clauses
              </span>
            </div>

            <nav className="space-y-1 text-xs">
              {CLAUSES.map((clause) => {
                const Icon = clause.icon;
                const isActive = activeSection === clause.id;
                return (
                  <button
                    key={clause.id}
                    type="button"
                    onClick={() => scrollToClause(clause.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-left cursor-pointer group ${
                      isActive 
                        ? 'bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30 shadow-sm shadow-emerald-950/40' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 truncate">
                      <Icon className={`w-4 h-4 shrink-0 transition-colors ${isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                      <span className="truncate">{clause.shortTitle}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? 'text-emerald-400 translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'}`} />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick Enterprise Verification Card */}
          <div className="rounded-2xl bg-[#0F1523]/70 backdrop-blur-md border border-white/10 p-4 space-y-3 text-xs shadow-md">
            <div className="flex items-center space-x-2 text-white font-bold pb-2 border-b border-white/5">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Registered Enterprise Entity</span>
            </div>
            
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Apex Topup Digital Technologies operates legally under authorized municipal trade registration in Gomastapur, Chapainawabganj.
            </p>

            <div className="p-2.5 rounded-xl bg-[#090D15] border border-white/5 space-y-1.5 text-[11px]">
              <div className="flex justify-between items-center text-slate-400">
                <span>Trade License:</span>
                <span className="text-emerald-400 font-bold font-sans">145/2025-27</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Registration Authority:</span>
                <span className="text-white font-medium">Bangabari UP</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Status:</span>
                <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Audit Active</span>
                </span>
              </div>
            </div>

            <div className="pt-1">
              <Link 
                href="/refund" 
                className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center justify-between group"
              >
                <span>Read Consumer Refund SLA</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </aside>

        {/* ── RIGHT MAIN STREAM: STRUCTURED MODULAR CARDS (lg:col-span-8) ── */}
        <main className="lg:col-span-8 space-y-6">
          
          {/* ── CLAUSE 1: AGREEMENT TO TERMS ── */}
          <article 
            id="clause-agreement" 
            className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 p-6 sm:p-7 space-y-4 shadow-xl transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Clause 01</span>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Agreement to Terms & Legal Contract
                  </h2>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-medium hidden sm:inline-block">
                Legally Enforceable
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
              <p>
                By accessing, browsing, or utilizing the electronic services offered by <strong>Apex Topup Digital Technologies</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operating under Bangladesh Government Trade License No. <strong className="text-white">145/2025-27</strong>, you irrevocably agree to be bound by these binding Terms of Service and our accompanying Consumer Protection Policies.
              </p>
              <p>
                If you do not agree with or cannot comply with any provision articulated within these terms, you are expressly prohibited from utilizing the website, ordering gaming credits, or initiating electronic checkout sessions. Continued access constitutes full legal consent.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#090D15] border border-white/5 flex items-start space-x-3 text-xs text-slate-400">
              <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                These terms constitute a legally binding electronic agreement under the Information and Communication Technology (ICT) Act of Bangladesh and relevant electronic transaction frameworks.
              </span>
            </div>
          </article>

          {/* ── CLAUSE 2: SCOPE OF SERVICES & DIGITAL RESELLER BOUNDARIES ── */}
          <article 
            id="clause-scope" 
            className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 p-6 sm:p-7 space-y-4 shadow-xl transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0">
                  <Gamepad2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Clause 02</span>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Scope of Services & Reseller Boundaries
                  </h2>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-medium hidden sm:inline-block">
                Digital Distribution
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
              <p>
                Apex Topup Digital Technologies operates strictly as an independent, registered digital goods reseller and IT-enabled services provider (ITES). Our commercial scope encompasses:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                <li className="p-2.5 rounded-xl bg-[#090D15] border border-white/5 flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>In-Game Virtual Currencies (Diamonds, UC, VP)</span>
                </li>
                <li className="p-2.5 rounded-xl bg-[#090D15] border border-white/5 flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Electronic Entertainment Gift Cards (Google Play, Steam)</span>
                </li>
                <li className="p-2.5 rounded-xl bg-[#090D15] border border-white/5 flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct Publisher API Automated Recharge</span>
                </li>
                <li className="p-2.5 rounded-xl bg-[#090D15] border border-white/5 flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Domestic Mobile Wallet Settlement Routing</span>
                </li>
              </ul>

              <div className="p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-300/90 leading-relaxed flex items-start space-x-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Explicit Non-Banking Disclaimer:</strong> We do not offer physical goods, cash withdrawal facilities, escrow banking deposits, or currency exchange mechanisms. All assets are non-transferable virtual credits once redeemed.
                </span>
              </div>
            </div>
          </article>

          {/* ── CLAUSE 3: USER RESPONSIBILITIES & GAME IDS ── */}
          <article 
            id="clause-responsibilities" 
            className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 p-6 sm:p-7 space-y-4 shadow-xl transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Clause 03</span>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Customer Responsibilities & Player UID Accuracy
                  </h2>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-medium hidden sm:inline-block">
                User Verification
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
              <p>
                Because server-to-server top-up dispatches occur in real time, customers bear sole responsibility for verifying all parameters prior to checkout confirmation:
              </p>
              
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#090D15] border border-white/5">
                  <strong className="text-white block mb-0.5">1. Player Identifier Accuracy:</strong>
                  You must accurately supply your Player UID, Zone ID, or recipient delivery email. Our automated system executes delivery exactly according to the entered identifier.
                </div>
                <div className="p-3 rounded-xl bg-[#090D15] border border-white/5">
                  <strong className="text-white block mb-0.5">2. Non-Liability on User Input Error:</strong>
                  The Company shall bear zero liability for credits successfully deposited into an unintended third-party account as a direct consequence of customer typographical error.
                </div>
                <div className="p-3 rounded-xl bg-[#090D15] border border-white/5">
                  <strong className="text-white block mb-0.5">3. Zero-Password Security Mandate:</strong>
                  Apex Topup Digital Technologies will never solicit your account password, email credentials, or 2FA codes. Never share credentials with third parties impersonating support staff.
                </div>
              </div>
            </div>
          </article>

          {/* ── CLAUSE 4: PAYMENT PROCESSING & S2S SETTLEMENT ── */}
          <article 
            id="clause-payment" 
            className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 p-6 sm:p-7 space-y-4 shadow-xl transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Clause 04</span>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Payment Processing, Gateway Settlement & S2S Dispatch
                  </h2>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-medium hidden sm:inline-block">
                PCI-DSS Aligned
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
              <p>
                All electronic transactions on this website are routed via licensed domestic aggregators (bKash, Nagad, DBBL Rocket) and certified international gateway rails (TransFi, Visa, Mastercard):
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3 rounded-xl bg-[#090D15] border border-white/5 space-y-1">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Zero Cardholder Data Storage</span>
                  </span>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Card details and OTPs are tokenized directly on PCI-DSS certified gateway servers. We never touch or store sensitive financial credentials.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#090D15] border border-white/5 space-y-1">
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Server-to-Server Webhook Delivery</span>
                  </span>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Digital credits are triggered programmatically via encrypted server webhooks immediately upon gateway settlement confirmation.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* ── CLAUSE 5: INTELLECTUAL PROPERTY & PUBLISHER TRADEMARKS ── */}
          <article 
            id="clause-ip" 
            className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 p-6 sm:p-7 space-y-4 shadow-xl transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Clause 05</span>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Intellectual Property & Publisher Trademarks
                  </h2>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-medium hidden sm:inline-block">
                Fair Use Notice
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
              <p>
                All video game titles, publisher marks, trade names, character logos, and registered intellectual properties displayed on this platform—including but not limited to <strong>Garena (Free Fire)</strong>, <strong>KRAFTON (PUBG Mobile)</strong>, <strong>Moonton (Mobile Legends)</strong>, <strong>Valve Corporation (Steam)</strong>, <strong>Google LLC (Google Play)</strong>, and <strong>Riot Games (Valorant)</strong>—are the exclusive property of their respective copyright holders.
              </p>
              <p className="text-slate-400 text-xs">
                Their display on this platform serves solely to identify authentic digital products for reseller distribution and does not imply direct franchise ownership, joint venture, or publisher endorsement unless specifically documented.
              </p>
            </div>
          </article>

          {/* ── CLAUSE 6: REGISTERED OFFICE & GOVERNING LAW ── */}
          <article 
            id="clause-governance" 
            className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 p-6 sm:p-7 space-y-5 shadow-xl transition-all"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Clause 06</span>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Registered Corporate Office & Governing Law
                  </h2>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                Jurisdiction: BD
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300">
              <p>
                These Terms of Service and any contractual disputes arising from the use of our services shall be governed by, interpreted, and construed in accordance with the substantive laws and electronic commerce regulations of the <strong>People’s Republic of Bangladesh</strong>.
              </p>
            </div>

            {/* Premium Dark Glass Corporate Showcase Box (Modern Tabular Sans-Serif) */}
            <div className="rounded-2xl bg-[#090D15] border border-white/10 p-5 space-y-4 shadow-inner">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/5">
                <div className="flex items-center space-x-2 text-white font-bold text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Official Commercial Registered Headquarters</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Verified Legal Entity
                </span>
              </div>

              {/* Physical Address Block in Modern Sans-Serif */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                
                <div className="space-y-1">
                  <span className="text-slate-400 font-medium block">Registered Operating Entity:</span>
                  <span className="text-white font-bold text-sm block">Apex Topup Digital Technologies</span>
                  <span className="text-slate-400 block pt-0.5 leading-relaxed">
                    Darigata, Bangabari, Gomastapur,<br />
                    Chapainawabganj - 6320, Bangladesh.
                  </span>
                </div>

                <div className="space-y-1 sm:border-l sm:border-white/5 sm:pl-4">
                  <span className="text-slate-400 font-medium block">Government Trade Authorization:</span>
                  <span className="text-emerald-400 font-bold text-sm block tabular-nums">
                    Trade Reg: 145/2025-27
                  </span>
                  <span className="text-slate-400 block pt-0.5 leading-relaxed">
                    2 No. Bangabari Union Parishad Registry,<br />
                    Gomastapur Upazila, Rajshahi Division.
                  </span>
                </div>

              </div>

              {/* Action Buttons Row */}
              <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/15 text-slate-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all cursor-pointer font-medium"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyLicense}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-emerald-500/15 text-slate-300 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/30 transition-all cursor-pointer font-medium"
                  >
                    {copiedLicense ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">License Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Trade Reg</span>
                      </>
                    )}
                  </button>
                </div>

                <span className="text-[11px] text-slate-400">
                  Judicial Forum: District Courts of Chapainawabganj
                </span>
              </div>
            </div>

          </article>

        </main>

      </div>

    </div>
  );
}
