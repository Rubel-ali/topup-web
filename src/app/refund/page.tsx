import React from 'react';
import { Metadata } from 'next';
import RefundPolicySection from '@/components/legal/RefundPolicySection';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | ApexTopup BD',
  description: 'Consumer Protection and Escrow Assurance: Clear, fair, and transparent refund guidelines for all digital transactions at Apex Topup Digital Technologies.',
  alternates: {
    canonical: '/refund',
  },
};

export default function RefundPage() {
  return <RefundPolicySection />;
}
