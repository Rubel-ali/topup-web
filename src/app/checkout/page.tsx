'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Zap, CheckCircle2, Lock, X, ExternalLink, Loader2 } from 'lucide-react';

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || `ORD_${Date.now()}`;
  const amount = searchParams.get('amount') || '500';
  const checkoutUrl = searchParams.get('checkoutUrl');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  // Fallback hosted checkout
  const finalPayUrl = checkoutUrl || `https://sandbox-buy.transfi.com/?apiKey=apextopup&walletAddress=0x380B3096586af5a68C9cAd348c2621Fe3BA99e76&fiatCurrency=BDT&cryptoCurrency=USDT&fiatAmount=${amount}&partnerOrderId=${orderId}`;

  // Listen for Gateway events
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const d = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (d && (d.event === 'ORDER_SUCCESS' || d.status === 'SUCCESS' || d.type === 'TRANSFI_PAYMENT_SUCCESS')) {
          router.push(`/checkout/success?orderId=${orderId}`);
        }
      } catch {
        // Ignore non-json cross-origin messages
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [orderId, router]);

  const handlePayNow = () => {
    setModalUrl(finalPayUrl);
    setIsIframeLoading(true);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <div className="rounded-3xl bg-[#121824] border border-[#1F293D] p-8 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/20">
          <Lock className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Secure Payment Gateway
          </span>
          <h1 className="text-2xl font-black text-white mt-1">Order Checkout Session</h1>
          <p className="text-xs text-gray-400 mt-2">
            Order Reference: <span className="font-mono text-gray-300 font-bold">{orderId}</span>
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0B0E14] border border-[#1F293D] space-y-3 text-sm text-left">
          <div className="flex justify-between">
            <span className="text-gray-400">Product:</span>
            <span className="text-white font-semibold">Game Credits & Voucher Top-Up</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Gateway Rail:</span>
            <span className="text-emerald-400 font-semibold">bKash / Nagad / TransFi</span>
          </div>
          <div className="pt-2 border-t border-[#1F293D] flex justify-between items-baseline">
            <span className="text-gray-300 font-bold">Payable Amount:</span>
            <span className="text-3xl font-black text-emerald-400">৳{amount} <span className="text-xs text-gray-500 font-normal">BDT</span></span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handlePayNow}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-black text-base uppercase tracking-wider hover:from-emerald-400 hover:to-teal-300 transition-all shadow-xl shadow-emerald-500/25 active:scale-98 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Proceed to Payment (৳{amount})</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <Link
            href="/"
            className="block text-xs text-gray-500 hover:text-gray-400 transition-colors pt-2"
          >
            Cancel Order & Return to Store
          </Link>
        </div>

        <div className="pt-4 border-t border-[#1F293D]/80 flex items-center justify-center space-x-2 text-xs text-gray-500">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Encrypted with End-to-End Banking Standard Gateway</span>
        </div>
      </div>

      {/* Embedded Modal */}
      {isModalOpen && modalUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => {
            if (window.confirm('Are you sure you want to close the payment window?')) {
              setIsModalOpen(false);
            }
          }}
        >
          <div 
            className="relative w-full max-w-lg md:max-w-xl h-[92vh] max-h-[760px] bg-[#0E131F] border border-emerald-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#121824] select-none">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Instant Payment Gateway</h4>
                  <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                    <span>Order: {orderId}</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-bold">৳{amount} BDT</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={modalUrl}
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
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                  title="Close payment window"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 bg-[#090D14] overflow-hidden">
              {isIframeLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#090D14] space-y-3">
                  <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
                  <p className="text-xs text-slate-400 font-medium">Connecting to secure banking rail...</p>
                  <span className="text-[11px] font-mono text-emerald-400/80">Authorized Payment Rail</span>
                </div>
              )}

              <iframe
                src={modalUrl}
                title="Payment Checkout Session"
                className="w-full h-full border-0 bg-transparent"
                allow="payment; camera; microphone; geolocation"
                onLoad={() => setIsIframeLoading(false)}
              />
            </div>

            <div className="px-5 py-2.5 border-t border-white/10 bg-[#0E131F] flex items-center justify-between text-[11px] text-slate-400 select-none">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Cardholder Data Stored • Instant Server Dispatch</span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">
                Apex Topup Digital Technologies
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}

