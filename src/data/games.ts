export interface GamePackage {
  id: string;
  name: string;
  amountText: string;
  priceBdt: number;
  popular?: boolean;
}

export interface GameItem {
  id: string;
  title: string;
  publisher: string;
  category: 'mobile' | 'pc' | 'giftcard';
  badge: string;
  deliveryBadge?: string;
  apiTag?: string;
  latency?: string;
  image: string;
  fallbackImage?: string;
  inputLabel: string;
  inputPlaceholder: string;
  deliveryType?: 'uid' | 'email' | 'riot_id';
  packages: GamePackage[];
}

export const GAMES: GameItem[] = [
  {
    id: 'freefire',
    title: 'Free Fire Diamonds',
    publisher: 'Garena',
    category: 'mobile',
    badge: '⚡ INSTANT UID TOP-UP',
    deliveryBadge: '⚡ INSTANT UID TOP-UP',
    apiTag: 'OFFICIAL DIRECT API',
    latency: 'Avg 28s Server Dispatch',
    image: '/games/freefire.svg',
    deliveryType: 'uid',
    inputLabel: 'Player ID (UID)',
    inputPlaceholder: 'Enter 10-digit UID (e.g. 1234567890)',
    packages: [
      { id: 'ff_115', name: '115 Diamonds', amountText: '115 💎', priceBdt: 85 },
      { id: 'ff_240', name: '240 Diamonds', amountText: '240 💎', priceBdt: 175, popular: true },
      { id: 'ff_355', name: '355 Diamonds', amountText: '355 💎', priceBdt: 260 },
      { id: 'ff_610', name: '610 Diamonds', amountText: '610 💎', priceBdt: 430, popular: true },
      { id: 'ff_1240', name: '1,240 Diamonds', amountText: '1,240 💎', priceBdt: 860 },
      { id: 'ff_2530', name: '2,530 Diamonds', amountText: '2,530 💎', priceBdt: 1750 },
      { id: 'ff_weekly', name: 'Weekly Membership', amountText: 'Weekly VIP 🎟️', priceBdt: 190 },
      { id: 'ff_monthly', name: 'Monthly Membership', amountText: 'Monthly VIP 👑', priceBdt: 790 },
    ],
  },
  {
    id: 'pubg',
    title: 'PUBG Mobile UC',
    publisher: 'KRAFTON',
    category: 'mobile',
    badge: 'OFFICIAL DIRECT API',
    deliveryBadge: 'OFFICIAL DIRECT API',
    apiTag: 'DIRECT SERVER RAIL',
    latency: 'Avg 35s Server Dispatch',
    image: '/games/pubg.svg',
    deliveryType: 'uid',
    inputLabel: 'Character ID',
    inputPlaceholder: 'Enter PUBG Character ID (e.g. 5123456789)',
    packages: [
      { id: 'pubg_60', name: '60 UC', amountText: '60 UC 🪙', priceBdt: 95 },
      { id: 'pubg_325', name: '325 UC', amountText: '300 + 25 UC 🪙', priceBdt: 470, popular: true },
      { id: 'pubg_660', name: '660 UC', amountText: '600 + 60 UC 🪙', priceBdt: 930, popular: true },
      { id: 'pubg_1800', name: '1,800 UC', amountText: '1,500 + 300 UC 🪙', priceBdt: 2450 },
      { id: 'pubg_3850', name: '3,850 UC', amountText: '3,000 + 850 UC 🪙', priceBdt: 4850 },
    ],
  },
  {
    id: 'mobilelegends',
    title: 'Mobile Legends: Bang Bang',
    publisher: 'Moonton',
    category: 'mobile',
    badge: 'ZONE & SERVER SUPPORTED',
    deliveryBadge: 'ZONE & SERVER SUPPORTED',
    apiTag: 'OFFICIAL DIRECT API',
    latency: 'Avg 25s Server Dispatch',
    image: '/games/mobilelegends.svg',
    deliveryType: 'uid',
    inputLabel: 'User ID & Zone ID',
    inputPlaceholder: 'User ID (12345678) Zone (1234)',
    packages: [
      { id: 'ml_86', name: '86 Diamonds', amountText: '86 💎', priceBdt: 145 },
      { id: 'ml_172', name: '172 Diamonds', amountText: '172 💎', priceBdt: 290, popular: true },
      { id: 'ml_257', name: '257 Diamonds', amountText: '257 💎', priceBdt: 435 },
      { id: 'ml_706', name: '706 Diamonds', amountText: '706 💎', priceBdt: 1150 },
      { id: 'ml_pass', name: 'Weekly Diamond Pass', amountText: 'Diamond Pass 🛡️', priceBdt: 210, popular: true },
    ],
  },
  {
    id: 'googleplay',
    title: 'Google Play Gift Card',
    publisher: 'Google LLC',
    category: 'giftcard',
    badge: 'US / GLOBAL E-CODE',
    deliveryBadge: 'GLOBAL E-CODE',
    apiTag: 'AUTOMATED EMAIL DISPATCH',
    latency: 'Avg 15s Server Dispatch',
    image: '/games/googleplay.svg',
    deliveryType: 'email',
    inputLabel: 'Delivery Email Address',
    inputPlaceholder: 'Enter email where code will be sent',
    packages: [
      { id: 'gp_5', name: '$5 US Gift Card', amountText: '$5 USD Card 🎁', priceBdt: 620 },
      { id: 'gp_10', name: '$10 US Gift Card', amountText: '$10 USD Card 🎁', priceBdt: 1220, popular: true },
      { id: 'gp_15', name: '$15 US Gift Card', amountText: '$15 USD Card 🎁', priceBdt: 1830 },
      { id: 'gp_25', name: '$25 US Gift Card', amountText: '$25 USD Card 🎁', priceBdt: 3050 },
      { id: 'gp_50', name: '$50 US Gift Card', amountText: '$50 USD Card 🎁', priceBdt: 6100 },
    ],
  },
  {
    id: 'steam',
    title: 'Steam Wallet Card',
    publisher: 'Valve Corporation',
    category: 'giftcard',
    badge: 'GLOBAL E-CODE',
    deliveryBadge: 'GLOBAL E-CODE',
    apiTag: 'AUTOMATED EMAIL DISPATCH',
    latency: 'Avg 20s Server Dispatch',
    image: '/games/steam.svg',
    deliveryType: 'email',
    inputLabel: 'Delivery Email Address',
    inputPlaceholder: 'Enter email to receive code',
    packages: [
      { id: 'steam_5', name: '$5 Steam Card', amountText: '$5 Steam Wallet 🎮', priceBdt: 630 },
      { id: 'steam_10', name: '$10 Steam Card', amountText: '$10 Steam Wallet 🎮', priceBdt: 1240, popular: true },
      { id: 'steam_20', name: '$20 Steam Card', amountText: '$20 Steam Wallet 🎮', priceBdt: 2480 },
      { id: 'steam_50', name: '$50 Steam Card', amountText: '$50 Steam Wallet 🎮', priceBdt: 6200 },
    ],
  },
  {
    id: 'valorant',
    title: 'Valorant Points',
    publisher: 'Riot Games',
    category: 'pc',
    badge: 'RIOT ID DELIVERY',
    deliveryBadge: 'RIOT ID DELIVERY',
    apiTag: 'OFFICIAL DIRECT API',
    latency: 'Avg 40s Server Dispatch',
    image: '/games/valorant.svg',
    deliveryType: 'riot_id',
    inputLabel: 'Riot ID (Name#TAG)',
    inputPlaceholder: 'e.g. Jett#1234',
    packages: [
      { id: 'val_475', name: '475 VP', amountText: '475 VP ⚡', priceBdt: 520 },
      { id: 'val_1000', name: '1,000 VP', amountText: '1,000 VP ⚡', priceBdt: 1050, popular: true },
      { id: 'val_2050', name: '2,050 VP', amountText: '2,050 VP ⚡', priceBdt: 2090 },
      { id: 'val_3650', name: '3,650 VP', amountText: '3,650 VP ⚡', priceBdt: 3650 },
    ],
  },
];
