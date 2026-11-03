import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ApexTopup BD - Instant Game Top-Up, Diamonds & Gift Cards in Bangladesh',
  description: 'Buy Free Fire Diamonds, PUBG UC, Mobile Legends Diamonds, and Google Play Gift Cards with bKash, Nagad, and Rocket instantly. 100% genuine and automated delivery.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0B0E14] text-gray-100 antialiased selection:bg-emerald-500 selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

