import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/layout/DigitalStoreFooter';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://apextopupbd.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ApexTopup BD - Instant Game Top-Up, Diamonds & Gift Cards in Bangladesh',
    template: '%s | ApexTopup BD',
  },
  description:
    'Buy Free Fire Diamonds, PUBG UC, Mobile Legends Diamonds, and Google Play Gift Cards with bKash, Nagad, and Rocket instantly. 100% genuine and automated delivery in Bangladesh.',
  keywords: [
    'Free Fire Diamond top up bKash',
    'PUBG Mobile UC buy Bangladesh',
    'Mobile Legends Diamonds bKash Nagad',
    'Google Play Gift Card BD',
    'Steam Wallet Code Bangladesh',
    'Valorant Points VP BD',
    'Instant Game Topup BD',
    'Gaming credit recharge bKash',
    'Apex Topup Digital Technologies',
    'ApexTopup BD',
    'Game recharge Bangladesh',
  ],
  authors: [{ name: 'Apex Topup Digital Technologies', url: siteUrl }],
  creator: 'Apex Topup Digital Technologies',
  publisher: 'Apex Topup Digital Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ApexTopup BD - Instant Game Top-Up & Gift Cards in Bangladesh',
    description:
      'Official automated digital distribution platform in Bangladesh. Buy Free Fire Diamonds, PUBG UC, Mobile Legends & Gift Cards instantly via bKash, Nagad & Rocket.',
    url: siteUrl,
    siteName: 'ApexTopup BD',
    locale: 'en_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApexTopup BD - Instant Game Top-Up in Bangladesh',
    description:
      'Buy Free Fire Diamonds, PUBG UC, and Gift Cards instantly with bKash and Nagad. Automated 24/7 delivery.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Apex Topup Digital Technologies',
  alternateName: 'ApexTopup BD',
  url: siteUrl,
  logo: `${siteUrl}/games/freefire.svg`,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+8801571086652',
      contactType: 'customer service',
      areaServed: 'BD',
      availableLanguage: ['Bengali', 'English'],
      email: 'support@apextopupbd.com',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Daripata, Bangabari, Gomastapur',
    addressLocality: 'Chapainawabganj',
    postalCode: '6320',
    addressCountry: 'BD',
  },
};

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ApexTopup BD',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/#catalog`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0B0E14] text-gray-100 antialiased selection:bg-emerald-500 selection:text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
