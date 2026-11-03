import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 space-y-4">
      <h2 className="text-4xl font-black text-white">404 - Page Not Found</h2>
      <p className="text-sm text-gray-400">The requested digital store channel or page could not be located.</p>
      <Link 
        href="/"
        className="px-6 py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors"
      >
        Return to Store Home
      </Link>
    </div>
  );
}

