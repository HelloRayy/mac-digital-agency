import React from 'react';
import { Navbar } from '@/components/navbar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-brand-text font-sans antialiased">
      {/* Sliced Navbar - Source of Truth: pen.dev node vijxI */}
      <Navbar />

      {/* Canvas placeholder area for upcoming sections */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px] py-16">
        <div className="border border-dashed border-gray-200 rounded-3xl p-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted">
            Canvas Source of Truth: figma-job.pen
          </p>
          <h2 className="text-2xl font-bold text-brand-dark mt-2">
            Navbar Slicing Verified
          </h2>
          <p className="text-sm text-brand-subtext mt-2 max-w-md mx-auto">
            Komponen Navbar telah terkloning 1:1 modular dari node <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-black">vijxI</code> (Frame 427320844). Siap melanjutkan ke seksi Hero (Desktop - 12).
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
