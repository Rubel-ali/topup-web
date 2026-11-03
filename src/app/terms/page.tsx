import React from 'react';
import { Metadata } from 'next';
import TermsOfServiceSection from '@/components/legal/TermsOfServiceSection';

export const metadata: Metadata = {
  title: 'Terms of Service & Regulatory Framework | Apex Topup',
  description: 'Binding Commercial Legal Governance: Terms of service, scope of digital goods distribution, and registered office details for Apex Topup Digital Technologies.',
};

export default function TermsPage() {
  return <TermsOfServiceSection />;
}
