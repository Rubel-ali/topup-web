'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderId: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          Customer Care Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Contact & Support</h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Need help with an order, diamond delivery, or payment query? Our support desk operates 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-[#121824] border border-[#1F293D] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Direct Helpline</h3>
            <p className="text-xs text-gray-400">Available 24 hours daily for urgent payment tracking.</p>
            <div className="text-emerald-400 font-bold text-sm">+880 1700-000000</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121824] border border-[#1F293D] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Official Support Email</h3>
            <p className="text-xs text-gray-400">Send dispute tickets, B2B inquiries or refund receipts.</p>
            <div className="text-emerald-400 font-bold text-sm">support@apextopupbd.com</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121824] border border-[#1F293D] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Registered Office</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Darigata, Bangabari, Gomastapur,<br />
              Chapainawabganj-6320, Bangladesh.<br />
              <span className="text-emerald-400 font-mono text-[11px] block mt-1">Govt Trade Reg: 145/2025-27</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 p-8 rounded-3xl bg-[#121824] border border-[#1F293D]">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Delivered Successfully!</h3>
              <p className="text-sm text-gray-400 max-w-md mx-auto">
                Thank you for reaching out. A customer support representative will review your query and respond within 30 minutes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-xl bg-[#0B0E14] border border-[#1F293D] text-xs font-bold text-gray-300 hover:text-white"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Send an Inquiry Ticket</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1F293D] text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1F293D] text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Mobile Phone (bKash / Nagad)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="017XXXXXXXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1F293D] text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Order Reference ID (Optional)</label>
                  <input
                    type="text"
                    value={formData.orderId}
                    onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                    placeholder="e.g. ORD_123456"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1F293D] text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Message / Issue Details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your question or top-up query in detail..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1F293D] text-white text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-extrabold text-sm uppercase tracking-wider hover:from-emerald-400 hover:to-teal-300 transition-all shadow-md shadow-emerald-500/20 flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Support Ticket</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

