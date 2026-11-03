import React from 'react';
import { RefreshCcw, ShieldAlert, CheckCircle, Clock } from 'lucide-react';

export default function RefundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase">
          <RefreshCcw className="w-3.5 h-3.5" />
          <span>Consumer Protection Guarantee</span>
        </div>
        <h1 className="text-3xl font-black text-white">Refund & Cancellation Policy</h1>
        <p className="text-xs text-gray-400">Clear, fair, and transparent guidelines for all digital transactions</p>
      </div>

      <div className="p-8 rounded-3xl bg-[#121824] border border-[#1F293D] space-y-6 text-sm text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>1. Eligibility for Full Refund</span>
          </h2>
          <p>
            At <strong>Apex Topup Digital Technologies</strong> (Govt. Trade Reg: <strong>145/2025-27</strong>), we maintain a 100% consumer money-back guarantee under the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-gray-400 pl-2">
            <li><strong>Non-Delivery / System Failure:</strong> If payment was successfully deducted from your bKash, Nagad, or Rocket account, but game credits or digital codes were not delivered within 2 hours due to server outages or technical errors.</li>
            <li><strong>Out of Stock:</strong> If the selected digital voucher package or gift card becomes unavailable after transaction confirmation.</li>
            <li><strong>Duplicate Charges:</strong> If our automated payment gateway charged your account more than once for a single order.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>2. Ineligibility for Refund</span>
          </h2>
          <p>
            Because digital vouchers and game diamonds are instant consumable virtual assets, refunds cannot be granted once:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-gray-400 pl-2">
            <li>The diamonds, UC, or gift card codes have already been successfully deposited and confirmed by the game publisher server (Garena, KRAFTON, Moonton, etc.).</li>
            <li>The customer supplied an incorrect third-party Player ID (UID) and the top-up was successfully delivered to that unintended account.</li>
            <li>Customer changed their mind after the digital item has been distributed.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center space-x-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>3. Refund Processing Timelines</span>
          </h2>
          <p>
            Once an eligible refund request is approved by our technical audit team:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-gray-400 pl-2">
            <li><strong>bKash / Nagad / Rocket:</strong> Refunds are disbursed within <strong>24 to 48 hours</strong> back to the originating sender mobile number.</li>
            <li><strong>Card / Online Banking:</strong> Refunds are initiated within 3–5 business days, subject to the card issuing bank&apos;s settlement schedule.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">4. How to Request a Refund</h2>
          <p>
            To initiate a claim, please submit your Order ID, Transaction TrxID, and registered mobile number via email to:
          </p>
          <div className="p-4 rounded-xl bg-[#0B0E14] border border-[#1F293D] text-xs">
            <p><strong className="text-white">Email:</strong> refunds@apextopupbd.com</p>
            <p><strong className="text-white">Live Support Hotline:</strong> +880 1700-000000</p>
            <p><strong className="text-white">Support Window:</strong> 24 Hours / 7 Days a week</p>
          </div>
        </section>
      </div>
    </div>
  );
}

