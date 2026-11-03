import React from 'react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black text-white">Terms of Service</h1>
        <p className="text-xs text-gray-400">Last updated: January 2026</p>
      </div>

      <div className="p-8 rounded-3xl bg-[#121824] border border-[#1F293D] space-y-6 text-sm text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by <strong>Apex Topup Digital Technologies</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operating under Bangladesh Government Trade License No. <strong>145/2025-27</strong>, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">2. Scope of Services</h2>
          <p>
            Apex Topup Digital Technologies operates exclusively as a registered digital goods reseller and IT-enabled services provider, facilitating electronic game vouchers, direct server virtual currency top-ups (e.g. Free Fire Diamonds, PUBG Mobile UC, MLBB Diamonds), and digital entertainment gift cards. We do not provide physical merchandise or financial deposit services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. User Responsibilities & Game IDs</h2>
          <p>
            Customers are solely responsible for providing accurate and valid Player IDs (UID), Character IDs, Zone IDs, or email addresses when ordering digital products. The Company shall not be liable for top-ups credited to incorrect third-party game accounts resulting from inaccurate customer input.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">4. Payment Processing & Verification</h2>
          <p>
            All electronic payments on our platform are processed through certified third-party payment gateways and mobile financial service providers (bKash, Nagad, Rocket, card processors). Orders are fulfilled automatically via direct server APIs upon successful confirmation of payment receipt.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">5. Intellectual Property</h2>
          <p>
            All video game titles, publisher logos (including Garena, KRAFTON, Moonton, Valve, Google, Riot Games), and related assets displayed on this site are the trademarks and copyrighted properties of their respective owners. Their display does not imply endorsement or direct partnership unless explicitly specified.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">6. Registered Office & Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws, ICT act, and consumer protection regulations of Bangladesh. The registered office of <strong>Apex Topup Digital Technologies</strong> is located at:
          </p>
          <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-[#1F293D] text-xs font-mono text-slate-300">
            Darigata, Bangabari, Gomastapur, Chapainawabganj-6320, Bangladesh.<br />
            Govt. Trade License No: 145/2025-27 (2 No. Bangabari Union Parishad).
          </div>
        </section>
      </div>
    </div>
  );
}

