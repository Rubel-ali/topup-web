'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  X, 
  Flame, 
  Zap, 
  ShieldCheck, 
  BadgeCheck, 
  Clock, 
  ArrowRight, 
  Gamepad2, 
  Smartphone, 
  Monitor, 
  Gift, 
  CheckCircle2,
  Sparkles,
  Server
} from 'lucide-react';
import { GAMES, GameItem } from '@/data/games';

export type CategoryFilter = 'all' | 'mobile' | 'pc' | 'giftcard';

interface CategoryTab {
  id: CategoryFilter;
  label: string;
  icon: React.ElementType;
}

const CATEGORY_TABS: CategoryTab[] = [
  { id: 'all', label: 'All Channels', icon: Flame },
  { id: 'mobile', label: 'Mobile Games', icon: Smartphone },
  { id: 'pc', label: 'PC & Console', icon: Monitor },
  { id: 'giftcard', label: 'eGift Cards', icon: Gift },
];

export default function GameCatalogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Filter games based on search query and category
  const filteredGames = useMemo(() => {
    return GAMES.filter((game) => {
      const matchesCategory =
        activeCategory === 'all' || game.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        game.title.toLowerCase().includes(query) ||
        game.publisher.toLowerCase().includes(query) ||
        (game.deliveryBadge && game.deliveryBadge.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const handleImageError = (gameId: string) => {
    setFailedImages((prev) => ({ ...prev, [gameId]: true }));
  };

  const clearSearch = () => setSearchQuery('');

  return (
    <section 
      id="catalog" 
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-20 select-none"
    >
      {/* Ambient Radial Lighting Glow */}
      <div 
        className="pointer-events-none absolute inset-x-0 -top-20 h-96 [background:radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_70%)]" 
        aria-hidden="true"
      />

      {/* ─── SECTION HEADER ─── */}
      <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#1F293D]/80">
        <div className="space-y-2">
          {/* Micro-Pill Tag */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-bold tracking-wider uppercase shadow-sm shadow-emerald-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 fill-emerald-400 text-emerald-400" />
              Authorized BD Redemption Rails
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            Select Game or Digital Voucher Channel
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            Automated instant server top-ups via UID, Character ID, or electronic code delivery backed by direct publisher distribution gateways.
          </p>
        </div>

        {/* Live Catalog Telemetry Pill */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#121824]/90 border border-white/5 text-[11px] text-slate-300 font-medium">
          <Server className="w-3.5 h-3.5 text-emerald-400" />
          <span>Active Endpoints:</span>
          <span className="text-emerald-400 font-bold font-mono">6/6 Operational</span>
        </div>
      </div>

      {/* ─── SEARCH & FILTER CONTROLS BAR ─── */}
      <div className="relative flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 mb-8">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-[#121824]/90 backdrop-blur-md rounded-2xl border border-white/5 overflow-x-auto no-scrollbar">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950 stroke-[2.5]' : 'text-emerald-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input Box */}
        <div className="relative flex-1 lg:max-w-xs">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search game, voucher, publisher..."
              className="w-full pl-9 pr-9 py-2.5 rounded-2xl bg-[#121824]/90 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-all backdrop-blur-md"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>

      {/* ─── CHANNELS GRID (3-COLUMN RESPONSIVE) ─── */}
      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => {
            const isGiftCard = game.category === 'giftcard';
            const lowestPrice = game.packages && game.packages.length > 0 
              ? Math.min(...game.packages.map((p) => p.priceBdt))
              : 85;

            const hasImageFailed = failedImages[game.id];
            const badgeText = game.deliveryBadge || game.badge;
            const apiTagText = game.apiTag || (isGiftCard ? 'GLOBAL E-CODE' : 'OFFICIAL DIRECT API');
            const latencyText = game.latency || 'Avg 30s Server Dispatch';

            return (
              <Link
                key={game.id}
                href={`/topup/${game.id}`}
                className="group relative rounded-2xl bg-[#121824]/80 backdrop-blur-md border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1"
              >
                {/* 16:9 Media Preview with Aspect Ratio Guard */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  {!hasImageFailed ? (
                    <img
                      src={game.image}
                      alt={game.title}
                      loading="lazy"
                      onError={() => handleImageError(game.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    /* Fallback High-Fidelity Vector Card Header */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#121824] to-black p-4 text-center">
                      <Gamepad2 className="w-10 h-10 text-emerald-400/80 mb-2" />
                      <span className="text-sm font-black text-white">{game.title}</span>
                      <span className="text-[10px] text-emerald-400 font-mono tracking-wider uppercase mt-1">
                        {game.publisher} Verified Rail
                      </span>
                    </div>
                  )}

                  {/* Dark Vignette Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-black/30 pointer-events-none" />

                  {/* Top Floating Glass Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                    {/* Category Micro-Chip */}
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                      {isGiftCard ? 'VOUCHER' : game.category.toUpperCase()}
                    </span>

                    {/* Delivery Status Badge */}
                    <span 
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider shadow-lg ${
                        isGiftCard
                          ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300'
                          : 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                      }`}
                    >
                      <Zap className={`w-3 h-3 ${isGiftCard ? 'fill-cyan-400 text-cyan-400' : 'fill-emerald-400 text-emerald-400'}`} />
                      <span>{badgeText}</span>
                    </span>
                  </div>

                  {/* Bottom Image Brand Label */}
                  <div className="absolute bottom-2.5 left-4 right-4 pointer-events-none">
                    <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 drop-shadow">
                      <span>{game.publisher}</span>
                      <BadgeCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 inline" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight drop-shadow truncate group-hover:text-emerald-300 transition-colors">
                      {game.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body & Telemetry */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    
                    {/* Pricing Row with Modern Tabular Font */}
                    <div className="flex items-baseline justify-between pt-1">
                      <div>
                        <span className="block text-[11px] font-semibold text-slate-400 tracking-wide">
                          Starting from
                        </span>
                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-2xl sm:text-3xl font-black text-white tracking-tight font-[tabular-nums]">
                            ৳{lowestPrice}
                          </span>
                          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                            BDT
                          </span>
                        </div>
                      </div>

                      {/* Official API Chip */}
                      <div className="text-right">
                        <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-md border ${
                          isGiftCard
                            ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                            : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                        }`}>
                          <ShieldCheck className="w-3 h-3" />
                          <span>{apiTagText}</span>
                        </span>
                      </div>
                    </div>

                    {/* Telemetry Row: Latency + Delivery Requirement */}
                    <div className="pt-2 border-t border-white/5 space-y-1.5 text-xs text-slate-400">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>Dispatch Speed</span>
                        </span>
                        <span className="font-semibold text-slate-200">
                          {latencyText}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-slate-300 pt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">Instant delivery via {game.inputLabel}</span>
                      </div>
                    </div>

                  </div>

                  {/* Primary Action Button (Tactile Full-Card Action Chip) */}
                  <div className="pt-2">
                    <div className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-400 text-slate-200 group-hover:text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-all duration-300 shadow-md group-hover:shadow-emerald-500/20">
                      <span>Configure Order</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Instant Rail</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 rounded-3xl bg-[#121824]/60 border border-white/5 backdrop-blur-md space-y-4">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">No game or voucher channels found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              We couldn&apos;t find any channels matching &quot;{searchQuery}&quot;. Try adjusting your search query or reset category filter.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors cursor-pointer shadow-md shadow-emerald-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* Footer Audit Guarantee Pill */}
      <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Publisher Certified Distribution Rails: Direct Server API Integration</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Zero Credentials Stored
          </span>
          <span>•</span>
          <span>100% Automated Refund Rail</span>
        </div>
      </div>

    </section>
  );
}

