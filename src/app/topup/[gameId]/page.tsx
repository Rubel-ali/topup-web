import React from 'react';
import { notFound } from 'next/navigation';
import { GAMES } from '@/data/games';
import TopupClient from './TopupClient';

interface TopupPageProps {
  params: Promise<{ gameId: string }>;
}

export function generateStaticParams() {
  return GAMES.map((g) => ({
    gameId: g.id,
  }));
}

export default async function TopupPage({ params }: TopupPageProps) {
  const { gameId } = await params;
  const game = GAMES.find((g) => g.id === gameId);

  if (!game) {
    notFound();
  }

  return <TopupClient game={game} />;
}
