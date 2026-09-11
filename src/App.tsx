import React from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-brand-text font-sans antialiased">
      {/* Sliced Navbar - Source of Truth: pen.dev node vijxI */}
      <Navbar />

      {/* Sliced Hero Section - Source of Truth: pen.dev node w8YfR (Frame 427321782) */}
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default App;
