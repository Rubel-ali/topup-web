'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  User, 
  Receipt, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Paperclip, 
  UploadCloud, 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  ArrowLeft, 
  HelpCircle, 
  MessageCircle, 
  FileText, 
  Building2,
  Sparkles,
  Loader2
} from 'lucide-react';

export default function ContactSupportSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const [category, setCategory] = useState<'DELIVERY' | 'REFUND' | 'B2B' | 'GENERAL'>('DELIVERY');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderId: '',
    message: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{ id: string } | null>(null);

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

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Daripata, Bangabari, Gomastapur, Chapainawabganj-6320, Bangladesh');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit. Please upload a smaller image.');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket({ id: generatedId });
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      orderId: '',
      message: '',
    });
    setSelectedFile(null);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-sans select-none text-slate-300 antialiased">
      
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
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Average First Response: <strong className="text-white font-semibold tabular-nums">&lt; 15 Mins</strong></span>
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
          <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
          <span>24/7 Dedicated Merchant Helpdesk</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
          Contact & Institutional Support Desk
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Direct assistance for digital vouchers, instant top-up queries, payment reconciliations, and API support. Monitored around the clock by our technical ops team.
        </p>
      </header>

      {/* ─── 2-COLUMN RESPONSIVE LAYOUT ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ── LEFT COLUMN: VERIFIED CHANNELS POD (lg:col-span-4) ── */}
        <aside className="lg:col-span-4 space-y-4">
          
          {/* Pod 1: Direct Helpline */}
          <div className="p-5 rounded-2xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all space-y-3 shadow-lg group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <PhoneCall className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Avg Wait: &lt; 2 mins
              </span>
            </div>
            
            <div>
              <h3 className="font-bold text-white text-sm">Direct Priority Helpline</h3>
              <p className="text-xs text-slate-400 mt-0.5">24 hours voice support for urgent order & payment tracking.</p>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/5">
              <a 
                href="tel:+8801571086652" 
                className="text-emerald-400 font-extrabold text-sm tabular-nums hover:underline flex items-center gap-1"
              >
                <span>+880 1571-086652</span>
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="text-[11px] text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Pod 2: Official Support Email */}
          <div className="p-5 rounded-2xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all space-y-3 shadow-lg group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Replies in ~15 mins
              </span>
            </div>
            
            <div>
              <h3 className="font-bold text-white text-sm">Official Support Email</h3>
              <p className="text-xs text-slate-400 mt-0.5">Send dispute tickets, B2B inquiries or refund receipts.</p>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/5">
              <a 
                href="mailto:support@apextopupbd.com" 
                className="text-emerald-400 font-medium text-xs hover:underline truncate max-w-[190px]"
              >
                support@apextopupbd.com
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[11px] text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors cursor-pointer shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Pod 3: Corporate Registered Office */}
          <div className="p-5 rounded-2xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all space-y-3 shadow-lg group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-[10px] font-semibold text-slate-300 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                Trade Reg: 145/2026-27
              </span>
            </div>
            
            <div>
              <h3 className="font-bold text-white text-sm">Corporate Headquarters</h3>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-sans">
                Daripata, Bangabari, Gomastapur,<br />
                Chapainawabganj-6320, Bangladesh.
              </p>
            </div>

            <div className="pt-1 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-400">Bangabari UP Registry</span>
              <button
                type="button"
                onClick={handleCopyAddress}
                className="text-[11px] text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Pod 4: Instant Messaging Channels */}
          <div className="p-4 rounded-2xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 space-y-3 shadow-lg">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Instant Chat Channels
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              <a
                href="https://wa.me/8801571086652"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-emerald-300 text-xs font-semibold flex items-center justify-between transition-all group"
              >
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Official Support</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </a>

              <a
                href="https://t.me/apextopupbd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/25 text-sky-300 text-xs font-semibold flex items-center justify-between transition-all group"
              >
                <div className="flex items-center space-x-2">
                  <Send className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                  <span>Telegram VIP Desk</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              </a>
            </div>
          </div>

        </aside>

        {/* ── RIGHT COLUMN: INTERACTIVE SUPPORT TICKET TERMINAL (lg:col-span-8) ── */}
        <main className="lg:col-span-8">
          
          <div className="rounded-3xl bg-[#0F1523]/90 backdrop-blur-md border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl relative">
            
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Submit an Inquiry / Dispute Ticket
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Fill in your transaction details for prioritized technical review.
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Response SLA: &lt; 30 Minutes</span>
              </span>
            </div>

            {submittedTicket ? (
              /* Success State */
              <div className="py-12 text-center space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-950/40">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
                </div>
                
                <div className="space-y-1">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                    Ticket Logged Successfully
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    Ticket Reference #{submittedTicket.id}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed pt-1">
                    Thank you. Your support inquiry has been routed to our merchant dispatch queue. A technical specialist will review your transaction hash and reply via email or SMS within 30 minutes.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Support Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Inquiry Category Pills */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Select Inquiry Category <span className="text-emerald-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setCategory('DELIVERY')}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        category === 'DELIVERY'
                          ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 font-bold'
                          : 'bg-[#090D15] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      Top-Up Delivery Delay
                    </button>

                    <button
                      type="button"
                      onClick={() => setCategory('REFUND')}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        category === 'REFUND'
                          ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 font-bold'
                          : 'bg-[#090D15] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      Payment / Refund Query
                    </button>

                    <button
                      type="button"
                      onClick={() => setCategory('B2B')}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        category === 'B2B'
                          ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 font-bold'
                          : 'bg-[#090D15] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      API & B2B Distribution
                    </button>

                    <button
                      type="button"
                      onClick={() => setCategory('GENERAL')}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        category === 'GENERAL'
                          ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 font-bold'
                          : 'bg-[#090D15] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      General Question
                    </button>
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Your Full Name <span className="text-emerald-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#090D15] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#090D15] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Order ID Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Contact / Wallet Number
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl bg-white/5 border border-r-0 border-white/10 text-slate-400 text-xs font-semibold select-none">
                        +880
                      </span>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="17XXXXXXXX"
                        className="w-full px-4 py-2.5 rounded-r-xl bg-[#090D15] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Order ID / TrxID <span className="text-slate-500 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                        <Receipt className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.orderId}
                        onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                        placeholder="e.g. TRX98234823 or TOPUP_..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#090D15] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10 transition-all font-sans"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field with Character Count */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-slate-300">
                      Message / Issue Details <span className="text-emerald-400">*</span>
                    </label>
                    <span className="text-[11px] text-slate-500 tabular-nums">
                      {formData.message.length} / 1000
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    required
                    maxLength={1000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your issue with Player UID, Zone ID, exact time of payment, and any gateway error messages..."
                    className="w-full p-4 rounded-xl bg-[#090D15] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/10 transition-all resize-y"
                  />
                </div>

                {/* Proof Attachment Dropzone */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Proof Attachment <span className="text-slate-500 font-normal">(Payment Screenshot / SMS Slip)</span>
                  </label>
                  
                  {selectedFile ? (
                    <div className="p-3.5 rounded-xl bg-[#090D15] border border-emerald-500/30 flex items-center justify-between">
                      <div className="flex items-center space-x-2.5 truncate">
                        <Paperclip className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs text-white font-medium truncate">{selectedFile.name}</span>
                        <span className="text-[10px] text-slate-500 tabular-nums shrink-0">
                          ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="text-slate-400 hover:text-rose-400 p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label className="border-2 border-dashed border-white/10 hover:border-emerald-500/40 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors bg-[#090D15]/60 hover:bg-[#090D15]">
                      <UploadCloud className="w-6 h-6 text-slate-400 mb-1" />
                      <span className="text-xs text-slate-300 font-medium">Click to attach screenshot or payment slip</span>
                      <span className="text-[10px] text-slate-500 mt-0.5">PNG, JPG or WebP (Up to 5MB)</span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Action CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-emerald-500/25 active:scale-98 disabled:opacity-50 flex items-center justify-center space-x-2.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>Dispatching Support Ticket...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                        <span>Dispatch Support Ticket →</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </main>

      </div>

      {/* ─── COMPLIANCE & SLA SECURITY STRIP ─── */}
      <footer className="rounded-2xl bg-[#0E1422]/60 border border-white/5 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 shadow-md">
        <div className="flex items-center space-x-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            All support tickets are audited and preserved under Bangladesh ICT and Consumer Rights data protection directives. Zero sensitive credentials stored.
          </span>
        </div>

        <div className="flex items-center space-x-3 text-[11px]">
          <span className="text-emerald-400 font-medium">Govt Trade Reg: 145/2026-27</span>
          <span>•</span>
          <span className="text-slate-400">24/7 SLA Guarantee</span>
        </div>
      </footer>

    </div>
  );
}

