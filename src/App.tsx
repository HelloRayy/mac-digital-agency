import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Sparkles, ArrowRight } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans flex flex-col justify-center items-center py-20">
      <Container className="text-center space-y-6 max-w-3xl">
        <div className="flex justify-center">
          <Badge variant="lime" className="gap-2">
            <Sparkles size={14} />
            Design System Initialized
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Digital Marketing <span className="text-brand-lime">Agency</span>
        </h1>

        <p className="text-brand-subtext text-base sm:text-lg max-w-xl mx-auto">
          Setup awal proyek Vite + React 19 + TypeScript + Tailwind CSS berhasil dikonfigurasi sesuai desain figma-job.pen.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button variant="primary" size="md">
            Get Started
            <ArrowRight size={16} />
          </Button>
          <Button variant="outline" size="md">
            View Design Tokens
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-10 text-left">
          <div className="p-4 rounded-2xl bg-brand-card border border-brand-border">
            <p className="text-xs text-brand-muted uppercase font-semibold">Background</p>
            <p className="text-sm font-mono text-white mt-1">#010205</p>
          </div>
          <div className="p-4 rounded-2xl bg-brand-card border border-brand-border">
            <p className="text-xs text-brand-muted uppercase font-semibold">Accent Lime</p>
            <p className="text-sm font-mono text-brand-lime mt-1">#99ea48</p>
          </div>
          <div className="p-4 rounded-2xl bg-brand-card border border-brand-border">
            <p className="text-xs text-brand-muted uppercase font-semibold">Typography</p>
            <p className="text-sm font-sans text-white mt-1">Plus Jakarta Sans</p>
          </div>
          <div className="p-4 rounded-2xl bg-brand-card border border-brand-border">
            <p className="text-xs text-brand-muted uppercase font-semibold">Stack</p>
            <p className="text-sm font-mono text-white mt-1">React 19 + Vite</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
