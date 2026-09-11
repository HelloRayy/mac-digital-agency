import React from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { AboutSection } from '@/components/about';
import { PortfolioSection } from '@/components/portfolio';
import { TestimonialsSection } from '@/components/testimonials';
import { FaqSection } from '@/components/faq';
import { BlogSection } from '@/components/blog';
import { FooterSection } from '@/components/footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-brand-text font-sans antialiased flex flex-col justify-between">
      {/* Sliced Navbar - Source of Truth: pen.dev node vijxI */}
      <Navbar />

      {/* Sliced Sections */}
      <main className="flex-1">
        {/* Hero Section - Source of Truth: pen.dev node w8YfR (Desktop - 12) */}
        <HeroSection />

        {/* About Section - Source of Truth: pen.dev node tWqI8 (Desktop - 14) */}
        <AboutSection />

        {/* Portfolio Section - Source of Truth: pen.dev node V0W9G (Desktop - 10) */}
        <PortfolioSection />

        {/* Testimonials Section - Source of Truth: pen.dev node xkDqq (Desktop - 17) */}
        <TestimonialsSection />

        {/* FAQ Section - Source of Truth: pen.dev node newIL (Frame 427321502) */}
        <FaqSection />

        {/* Blog & Services Section - Source of Truth: pen.dev node kWLz3 (Desktop - 15) */}
        <BlogSection />
      </main>

      {/* Footer & CTA Section - Source of Truth: pen.dev node LOOi4 (Desktop - 18) */}
      <FooterSection />
    </div>
  );
};

export default App;
