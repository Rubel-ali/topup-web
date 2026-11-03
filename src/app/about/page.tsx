import React from 'react';
import { Metadata } from 'next';
import EnterpriseAboutSection from '@/components/about/EnterpriseAboutSection';

export const metadata: Metadata = {
  title: 'Corporate Governance & Trade Registration | Apex Topup',
  description: 'Enterprise Identity & Trade Governance: Official trade license details, corporate profile, and commercial ITES authorization for Apex Topup Digital Technologies.',
};

export default function AboutPage() {
  return <EnterpriseAboutSection />;
}
