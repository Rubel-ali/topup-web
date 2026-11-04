import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GAMES } from '@/data/games';
import TopupClient from './TopupClient';

interface TopupPageProps {
  params: Promise<{ gameId: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://apextopupbd.com';

export function generateStaticParams() {
  return GAMES.map((g) => ({
    gameId: g.id,
  }));
}

export async function generateMetadata({ params }: TopupPageProps): Promise<Metadata> {
  const { gameId } = await params;
  const game = GAMES.find((g) => g.id === gameId);

  if (!game) {
    return {
      title: 'Game Top-Up | ApexTopup BD',
    };
  }

  const title = `${game.title} Top-Up in Bangladesh | Instant bKash & Nagad`;
  const description = `Buy ${game.title} (${game.publisher}) in Bangladesh with bKash, Nagad, and Rocket. Automated 30-second server dispatch, official publisher direct rail, 100% money-back guarantee.`;

  return {
    title,
    description,
    keywords: [
      `${game.title} top up`,
      `${game.title} bKash`,
      `${game.title} Nagad`,
      `${game.title} buy Bangladesh`,
      `${game.publisher} topup BD`,
      `${game.title} price in BD`,
      'Instant game credits BD',
      'ApexTopup BD',
    ],
    alternates: {
      canonical: `/topup/${game.id}`,
    },
    openGraph: {
      title: `${game.title} Instant Top-Up | ApexTopup BD`,
      description,
      url: `${siteUrl}/topup/${game.id}`,
      siteName: 'ApexTopup BD',
      images: [
        {
          url: `${siteUrl}${game.image}`,
          width: 800,
          height: 600,
          alt: `${game.title} Top-Up BD`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.title} Top-Up Bangladesh | bKash & Nagad`,
      description,
      images: [`${siteUrl}${game.image}`],
    },
  };
}

export default async function TopupPage({ params }: TopupPageProps) {
  const { gameId } = await params;
  const game = GAMES.find((g) => g.id === gameId);

  if (!game) {
    notFound();
  }

  const minPrice = Math.min(...game.packages.map((p) => p.priceBdt));
  const maxPrice = Math.max(...game.packages.map((p) => p.priceBdt));

  const jsonLdProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${game.title} Instant Top-Up`,
    description: `Official ${game.title} game credits and vouchers in Bangladesh with automated bKash & Nagad settlement.`,
    image: `${siteUrl}${game.image}`,
    brand: {
      '@type': 'Brand',
      name: game.publisher,
    },
    category:
      game.category === 'mobile'
        ? 'Mobile Game Currency'
        : game.category === 'pc'
        ? 'PC Game Points'
        : 'Digital Gift Cards',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'BDT',
      lowPrice: minPrice,
      highPrice: maxPrice,
      offerCount: game.packages.length,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Apex Topup Digital Technologies',
        url: siteUrl,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1580',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <TopupClient game={game} />
    </>
  );
}
