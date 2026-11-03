import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black text-white">Privacy & Data Policy</h1>
        <p className="text-xs text-gray-400">Committed to protecting user data & transactional confidentiality</p>
      </div>

      <div className="p-8 rounded-3xl bg-[#121824] border border-[#1F293D] space-y-6 text-sm text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">1. Information We Collect</h2>
          <p>
            When you purchase gaming credits or top-ups on <strong>Apex Topup Digital Technologies</strong> (Govt. Trade Reg: <strong>145/2025-27</strong>), we collect minimal information necessary to fulfill your order:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-gray-400 pl-2">
            <li>Gaming Identifier: Player ID (UID), Character ID, or Zone ID.</li>
            <li>Contact Details: Mobile phone number or delivery email address for receipt distribution.</li>
            <li>Transaction Identifiers: Unique Order ID, transaction reference, and timestamp.</li>
          </ul>
          <p className="text-xs text-emerald-400 font-semibold mt-1">
            * Note: We never ask for or store passwords, PINs, or confidential game login credentials.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">2. Use of Information</h2>
          <p>
            The collected information is utilized strictly to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-gray-400 pl-2">
            <li>Route digital items into the targeted game server account.</li>
            <li>Send digital receipt notifications and customer service updates.</li>
            <li>Comply with anti-fraud verification and electronic commerce guidelines.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. Payment Security & Financial Data</h2>
          <p>
            We do not store your bank account details, credit card numbers, or mobile wallet PINs on our servers. All financial transactions are handled externally via encrypted TLS/SSL communication with regulated payment gateways.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">4. Data Sharing & Third Parties</h2>
          <p>
            We do not sell, trade, or rent personal identification data to marketing agencies. Information is shared only with technical APIs required to disburse the ordered virtual products.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">5. Contact Data Officer</h2>
          <p>
            If you have questions regarding your data or wish to request deletion of order history, please reach out to our privacy desk at: <strong>support@apextopupbd.com</strong>.
          </p>
          <p className="text-xs text-slate-400">
            Registered Office: Darigata, Bangabari, Gomastapur, Chapainawabganj-6320, Bangladesh.
          </p>
        </section>
      </div>
    </div>
  );
}

