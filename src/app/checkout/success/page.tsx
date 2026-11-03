'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, HelpCircle, Download } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || `TOPUP_${Date.now().toString().slice(-6)}`;

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <div className="rounded-3xl bg-[#121824] border border-emerald-500/30 p-8 shadow-2xl text-center space-y-6">
        
        {/* Animated Success Badge */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-75" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
            Payment Confirmed
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
            Top-Up Order Successful!
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-sm mx-auto">
            Your transaction has been verified on the banking rail and server delivery is processing.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="p-5 rounded-2xl bg-[#0B0E14] border border-[#1F293D] space-y-3 text-sm text-left">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">Order Reference:</span>
            <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
              {orderId}
            </span>
          </div>

          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">Delivery Status:</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Automated API Dispatching (~30s)</span>
            </span>
          </div>

          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">Settlement Rail:</span>
            <span className="text-white font-medium">bKash / Nagad Direct</span>
          </div>

          <div className="pt-2 border-t border-[#1F293D] flex justify-between items-center text-xs">
            <span className="text-gray-400">Security Guarantee:</span>
            <span className="text-emerald-400 font-medium">100% Money-Back SLA</span>
          </div>
        </div>

        {/* Guidance Note */}
        <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-left text-xs text-gray-300 space-y-1">
          <p className="font-bold text-white flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Delivery Verification Note:</span>
          </p>
          <p className="text-gray-400 leading-relaxed">
            ইন-গেম ডায়মন্ড/ইউসি সরাসরি আপনার প্লেয়ার আইডিতে জমা হয়ে যাবে। ডিজিটাল গিফট কার্ড কোডের ক্ষেত্রে আপনার দেওয়া ইমেইল ইনবক্স চেক করুন।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <Link
            href="/"
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-sm uppercase tracking-wider hover:from-emerald-400 hover:to-teal-300 transition-all shadow-lg shadow-emerald-500/20 active:scale-98 flex items-center justify-center space-x-2"
          >
            <span>Back to Store Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="block text-xs text-gray-400 hover:text-emerald-400 transition-colors"
          >
            Need Help? Contact 24/7 Support Desk
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading order receipt...</div>}>
      <SuccessContent />
    </Suspense>
  );
}

