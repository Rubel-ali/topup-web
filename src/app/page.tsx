'use client';

import React from 'react';
import DigitalStoreHero from '@/components/home/DigitalStoreHero';
import GameCatalogSection from '@/components/catalog/GameCatalogSection';
import ConsumerProtectionSection from '@/components/home/ConsumerProtectionSection';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Institutional-Grade Digital Store Hero & Telemetry Showcase */}
      <DigitalStoreHero />

      {/* Complete Verified Digital Catalog Showcase with Real-Time Search & Category Filters */}
      <GameCatalogSection />

      {/* Institutional Sourcing & Consumer Protection Architecture Bento Grid */}
      <ConsumerProtectionSection />
    </div>
  );
}
