'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GameItem, GamePackage } from '@/data/games';
import { 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  Check, 
  CreditCard, 
  ArrowLeft, 
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  X,
  ExternalLink,
  Lock,
  RefreshCw,
  Clock,
  Sparkles,
  Server,
  Building2,
  ChevronRight
} from 'lucide-react';

interface ToastItem {
  id: string;
  type: 'error' | 'warning' | 'success';
  title: string;
  message: string;
}

interface ProductCheckoutFlowProps {
  game: GameItem;
}

export default function ProductCheckoutFlow({ game }: ProductCheckoutFlowProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [playerId, setPlayerId] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<GamePackage>(game.packages[1] || game.packages[0]);
  const [paymentMethod, setPaymentMethod] = useState<'BKASH' | 'NAGAD' | 'ROCKET'>('BKASH');
  const [userPhone, setUserPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Toastify-style Notifications State
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [hasInputError, setHasInputError] = useState(false);

  const showToast = (title: string, message: string, type: 'error' | 'warning' | 'success' = 'error') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  // Embedded Payment Modal State (Option 3)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentModalUrl, setPaymentModalUrl] = useState<string | null>(null);
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  // Listen for Gateway events
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const d = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (d && (d.event === 'ORDER_SUCCESS' || d.status === 'SUCCESS' || d.type === 'TRANSFI_PAYMENT_SUCCESS')) {
          router.push(`/checkout/success?orderId=${activeOrderId || d.orderId}`);
        }
      } catch {
        // Ignore non-json cross-origin messages
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [activeOrderId, router]);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!playerId.trim()) {
      setHasInputError(true);
      inputRef.current?.focus();
      showToast(
        'তথ্য দেওয়া আবশ্যক!',
        `অনুগ্রহ করে আপনার সঠিক ${game.inputLabel} লিখুন।`,
        'error'
      );
      return;
    }

    if (game.deliveryType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(playerId.trim())) {
        setHasInputError(true);
        inputRef.current?.focus();
        showToast(
          'সঠিক ইমেইল লিখুন!',
          'একটি সক্রিয় জিমেইল বা ইমেইল ঠিকানা দিন (যেমন: user@gmail.com)।',
          'warning'
        );
        return;
      }
    }

    setIsProcessing(true);

    try {
      // Call create-order API
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameId: game.id,
          gameTitle: game.title,
          packageId: selectedPackage.id,
          packageName: selectedPackage.name,
          amountBdt: selectedPackage.priceBdt,
          playerId: playerId.trim(),
          paymentMethod,
          userPhone: userPhone.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to initiate payment session');
      }

      if (data.checkoutUrl) {
        // Embedded modal popup inside the page
        setPaymentModalUrl(data.checkoutUrl);
        setActiveOrderId(data.orderId || null);
        setIsIframeLoading(true);
        setIsPaymentModalOpen(true);
      } else {
        router.push(`/checkout?orderId=${data.orderId}&amount=${selectedPackage.priceBdt}`);
      }
      setIsProcessing(false);
    } catch (err: any) {
      setErrorMsg(err.message || 'Checkout failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 font-sans select-none">
      
      {/* Background Ambient Glow */}
      <div 
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-96 [background:radial-gradient(ellipse_at_top,rgba(16,185,129,0.06),transparent_60%)]" 
        aria-hidden="true"
      />

      {/* Back to Catalog Breadcrumb */}
      <div>
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors py-1 px-2.5 rounded-lg hover:bg-white/5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Games & Channels</span>
        </Link>
      </div>

      {/* ─── PRODUCT HERO BANNER ─── */}
      <div className="rounded-3xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 p-6 sm:p-7 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 shadow-xl">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/5 border border-white/10 p-2 overflow-hidden shrink-0 flex items-center justify-center shadow-inner">
          <img 
            src={game.image} 
            alt={game.title} 
            className="w-full h-full object-contain filter drop-shadow" 
          />
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Instant Server Dispatch</span>
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-medium">
              Verified Publisher API Rail
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {game.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            Official Publisher: <span className="text-slate-200 font-medium">{game.publisher}</span> • Instant automated server recharge
          </p>
        </div>
      </div>

      {/* ─── 2-COLUMN CHECKOUT TERMINAL ─── */}
      <form noValidate onSubmit={handleCheckout} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Column: Form Steps (2 Cols Wide) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* STEP 1: Account / Delivery Input */}
          <div className="p-6 rounded-2xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <span className="w-7 h-7 rounded-full bg-emerald-500/15 text-emerald-400 font-bold text-xs border border-emerald-500/30 flex items-center justify-center">
                1
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Enter {game.inputLabel}
              </h2>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2">
                {game.inputLabel} <span className="text-emerald-400">*</span>
              </label>
              <input
                ref={inputRef}
                type={game.deliveryType === 'email' ? 'email' : 'text'}
                value={playerId}
                onChange={(e) => {
                  setPlayerId(e.target.value);
                  if (hasInputError) setHasInputError(false);
                }}
                placeholder={game.inputPlaceholder}
                className={`w-full px-4 py-3 rounded-xl bg-[#090D15] text-white placeholder-slate-500 text-sm focus:outline-none transition-all ${
                  hasInputError
                    ? 'border-2 border-rose-500 ring-4 ring-rose-500/20 shadow-lg shadow-rose-500/10 animate-shake'
                    : 'border border-white/10 focus:border-emerald-500/60 focus:ring-4 focus:ring-emerald-500/10'
                }`}
              />
              <p className="mt-2 text-xs text-slate-400 flex items-center space-x-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>
                  {game.deliveryType === 'email'
                    ? 'আপনার নিজস্ব সক্রিয় জিমেইল/ইমেইল দিন। পেমেন্ট কনফার্ম হওয়া মাত্রই ডিজিটাল গিফট কার্ড রিডিম কোড এই ইমেইলে স্বয়ংক্রিয়ভাবে পাঠিয়ে দেওয়া হবে।'
                    : 'Make sure your ID is accurate. We deliver directly to this game profile.'}
                </span>
              </p>
            </div>
          </div>

          {/* STEP 2: Select Top-Up Package */}
          <div className="p-6 rounded-2xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <span className="w-7 h-7 rounded-full bg-emerald-500/15 text-emerald-400 font-bold text-xs border border-emerald-500/30 flex items-center justify-center">
                2
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Select Top-Up Package
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {game.packages.map((pkg) => {
                const isSelected = selectedPackage.id === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackage(pkg)}
                    className={`relative p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer group ${
                      isSelected
                        ? 'border-emerald-500/80 bg-emerald-500/10 ring-1 ring-emerald-500/40 shadow-lg shadow-emerald-500/10'
                        : 'border-white/10 bg-[#090D15] hover:border-white/20 hover:bg-[#0C121D]'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-2.5 right-3 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 uppercase tracking-wide shadow-sm">
                        BEST VALUE
                      </span>
                    )}
                    <div className="font-bold text-sm text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      {pkg.amountText}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 font-normal">
                      {pkg.name}
                    </div>
                    <div className="mt-3 text-emerald-400 font-extrabold text-base tabular-nums flex items-baseline gap-1">
                      <span>৳{pkg.priceBdt}</span>
                      <span className="text-[10px] text-slate-500 font-normal">BDT</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3: Payment Channel */}
          <div className="p-6 rounded-2xl bg-[#0F1523]/80 backdrop-blur-md border border-white/10 space-y-4 shadow-lg">
            <div className="flex items-center space-x-3">
              <span className="w-7 h-7 rounded-full bg-emerald-500/15 text-emerald-400 font-bold text-xs border border-emerald-500/30 flex items-center justify-center">
                3
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Select Payment Channel
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* bKash */}
              <button
                type="button"
                onClick={() => setPaymentMethod('BKASH')}
                className={`p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between transition-all cursor-pointer group ${
                  paymentMethod === 'BKASH'
                    ? 'border-pink-500 bg-pink-500/10 ring-1 ring-pink-500 shadow-lg shadow-pink-500/10'
                    : 'border-white/10 bg-[#090D15] hover:border-pink-500/40 hover:bg-[#0C121D]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-pink-500/25 p-1.5 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform overflow-hidden">
                    <img 
                      src="/bkash.webp" 
                      alt="bKash" 
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(236,72,153,0.3)]" 
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm text-white">bKash Direct</p>
                    <p className="text-[10px] text-slate-400">0% fee • Instant</p>
                  </div>
                </div>
                {paymentMethod === 'BKASH' && <Check className="w-5 h-5 text-pink-500 shrink-0" />}
              </button>

              {/* Nagad */}
              <button
                type="button"
                onClick={() => setPaymentMethod('NAGAD')}
                className={`p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between transition-all cursor-pointer group ${
                  paymentMethod === 'NAGAD'
                    ? 'border-orange-500 bg-orange-500/10 ring-1 ring-orange-500 shadow-lg shadow-orange-500/10'
                    : 'border-white/10 bg-[#090D15] hover:border-orange-500/40 hover:bg-[#0C121D]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-orange-500/25 p-1.5 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform overflow-hidden">
                    <img 
                      src="/nagad.webp" 
                      alt="Nagad" 
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(249,115,22,0.3)]" 
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm text-white">Nagad Direct</p>
                    <p className="text-[10px] text-slate-400">0% fee • Instant</p>
                  </div>
                </div>
                {paymentMethod === 'NAGAD' && <Check className="w-5 h-5 text-orange-500 shrink-0" />}
              </button>

              {/* Rocket */}
              <button
                type="button"
                onClick={() => setPaymentMethod('ROCKET')}
                className={`p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between transition-all cursor-pointer group ${
                  paymentMethod === 'ROCKET'
                    ? 'border-purple-500 bg-purple-500/10 ring-1 ring-purple-500 shadow-lg shadow-purple-500/10'
                    : 'border-white/10 bg-[#090D15] hover:border-purple-500/40 hover:bg-[#0C121D]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-purple-500/25 p-1.5 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform overflow-hidden">
                    <img 
                      src="/rocket.webp" 
                      alt="DBBL Rocket" 
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(168,85,247,0.3)]" 
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm text-white">DBBL Rocket</p>
                    <p className="text-[10px] text-slate-400">0% fee • Instant</p>
                  </div>
                </div>
                {paymentMethod === 'ROCKET' && <Check className="w-5 h-5 text-purple-500 shrink-0" />}
              </button>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Your Contact Number (for SMS & confirmation)
              </label>
              <input
                type="tel"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                placeholder="017XXXXXXXX"
                className="w-full px-4 py-2.5 rounded-xl bg-[#090D15] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500/60"
              />
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: STICKY ORDER SUMMARY & COMPLIANCE (1 Col Wide) ─── */}
        <div className="lg:col-span-1 space-y-4 sticky top-24">
          
          {/* Main Summary Card */}
          <div className="p-6 rounded-2xl bg-[#0F1523]/90 backdrop-blur-md border border-white/10 space-y-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Order Summary</span>
              </h3>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                1 Item Selected
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Product:</span>
                <span className="text-white font-medium text-right">{game.title}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Package:</span>
                <span className="text-emerald-400 font-semibold text-right">{selectedPackage.name}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>{game.deliveryType === 'email' ? 'Delivery Email:' : 'Target Account:'}</span>
                <span className="text-white font-medium text-right truncate max-w-[160px]">{playerId || '—'}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Payment Gateway:</span>
                <span className="text-white font-medium">{paymentMethod} Direct</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Convenience Fee:</span>
                <span className="text-emerald-400 font-medium">৳0 (Free)</span>
              </div>
              
              <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                <span className="text-slate-300 font-bold">Total Amount:</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">
                  ৳{selectedPackage.priceBdt}
                </span>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/50 text-red-400 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* High-Conversion Refined Checkout CTA Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-slate-950 font-black text-sm uppercase tracking-wider hover:from-emerald-400 hover:to-teal-300 transition-all shadow-xl shadow-emerald-500/25 active:scale-98 disabled:opacity-50 flex items-center justify-center space-x-2 cursor-pointer"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Connecting Gateway...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-current stroke-[2.5]" />
                  <span>Pay ৳{selectedPackage.priceBdt} & Top-Up</span>
                </>
              )}
            </button>

            <div className="pt-1 text-center text-xs text-slate-400 flex items-center justify-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Secured by 256-Bit Automated Payment Gateway</span>
            </div>
          </div>

          {/* Mini Institutional Trust & Guarantee Pod (Eliminates Negative Space) */}
          <div className="rounded-2xl bg-[#0F1523]/60 border border-white/5 p-4 space-y-2.5 text-xs text-slate-400 shadow-md">
            <div className="flex items-center gap-2 text-slate-300 font-semibold pb-1 border-b border-white/5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Buyer Protection Guarantees</span>
            </div>
            
            <div className="flex items-start gap-2">
              <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Instant Server Dispatch: Digital credits credited within 60 seconds of payment settlement.</span>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Zero-Password Logging: We only require Player UID or Delivery Email. Zero sensitive credentials stored.</span>
            </div>

            <div className="flex items-start gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>100% Refund Guarantee: Automated reversal to your bKash/Nagad wallet if publisher APIs timeout.</span>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Building2 className="w-3 h-3 text-emerald-400" />
                <span>Trade Reg: 145/2025-27</span>
              </span>
              <span className="text-emerald-400 font-medium">BFIU Aligned</span>
            </div>
          </div>

        </div>
      </form>

      {/* ─── EMBEDDED IN-PAGE PAYMENT WIDGET MODAL ─── */}
      {isPaymentModalOpen && paymentModalUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => {
            if (window.confirm('Are you sure you want to close the payment window? Your pending order will remain open.')) {
              setIsPaymentModalOpen(false);
            }
          }}
        >
          <div 
            className="relative w-full max-w-lg md:max-w-xl h-[92vh] max-h-[760px] bg-[#0E131F] border border-emerald-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#121824] select-none">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white">
                      Instant Payment Gateway
                    </h4>
                    <span className="text-[10px] font-sans font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      SSL 256-Bit
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans flex items-center gap-1.5">
                    <span>Order: {activeOrderId || 'TOPUP_ACTIVE'}</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-bold">৳{selectedPackage.priceBdt} BDT</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={paymentModalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
                  title="Open in new window"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline text-[11px]">New Tab</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsPaymentModalOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                  title="Close payment window"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Iframe Container */}
            <div className="relative flex-1 bg-[#090D14] overflow-hidden">
              {isIframeLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#090D14] space-y-3">
                  <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
                  <p className="text-xs text-slate-400 font-medium">Connecting to secure banking rail...</p>
                  <span className="text-[11px] text-emerald-400/80">Authorized Payment Rail</span>
                </div>
              )}

              <iframe
                src={paymentModalUrl}
                title="ApexTopup Payment Session"
                className="w-full h-full border-0 bg-transparent"
                allow="payment; camera; microphone; geolocation"
                onLoad={() => setIsIframeLoading(false)}
              />
            </div>

            {/* Modal Footer Banner */}
            <div className="px-5 py-2.5 border-t border-white/10 bg-[#0E131F] flex items-center justify-between text-[11px] text-slate-400 select-none">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Cardholder Data Stored • Automated Instant Top-up</span>
              </div>
              <span className="text-[10px] text-slate-500">
                Apex Topup Digital Technologies
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ─── TOASTIFY-STYLE FLOATING NOTIFICATION STACK ─── */}
      <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none max-w-sm sm:max-w-md w-full px-4 sm:px-0">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto relative overflow-hidden rounded-2xl p-4 shadow-2xl backdrop-blur-xl border transition-all duration-300 animate-in slide-in-from-top-4 fade-in ${
              t.type === 'error'
                ? 'bg-[#181016]/95 border-rose-500/50 shadow-rose-950/40 text-rose-100'
                : t.type === 'warning'
                ? 'bg-[#1A160E]/95 border-amber-500/50 shadow-amber-950/40 text-amber-100'
                : 'bg-[#0E1A17]/95 border-emerald-500/50 shadow-emerald-950/40 text-emerald-100'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-xl shrink-0 ${
                  t.type === 'error'
                    ? 'bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30'
                    : t.type === 'warning'
                    ? 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30'
                    : 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30'
                }`}
              >
                {t.type === 'error' && <AlertCircle className="w-5 h-5" />}
                {t.type === 'warning' && <AlertTriangle className="w-5 h-5" />}
                {t.type === 'success' && <CheckCircle2 className="w-5 h-5" />}
              </div>

              <div className="flex-1 pr-2">
                <h5 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                  <span>{t.title}</span>
                </h5>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed font-normal">
                  {t.message}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setToasts((prev) => prev.filter((item) => item.id !== t.id))}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                title="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Toastify-style shrinking animated progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
              <div
                className={`h-full ${
                  t.type === 'error'
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500'
                    : t.type === 'warning'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-400'
                }`}
                style={{
                  animation: 'toastProgress 4.5s linear forwards',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

