import React from 'react';
import { Metadata } from 'next';
import ContactSupportSection from '@/components/contact/ContactSupportSection';

export const metadata: Metadata = {
  title: 'Contact & Institutional Support Desk | ApexTopup BD',
  description: '24/7 Dedicated Merchant Helpdesk: Direct assistance for digital vouchers, instant top-up queries, payment reconciliations, and API support for Apex Topup Digital Technologies.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactSupportSection />;
}
