import React from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { AboutSection } from '@/components/about';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-brand-text font-sans antialiased">
      {/* Sliced Navbar - Source of Truth: pen.dev node vijxI */}
      <Navbar />

      {/* Sliced Sections */}
      <main>
        {/* Hero Section - Source of Truth: pen.dev node w8YfR (Desktop - 12) */}
        <HeroSection />

        {/* About Section - Source of Truth: pen.dev node tWqI8 (Desktop - 14) */}
        <AboutSection />
      </main>
    </div>
  );
};

export default App;
