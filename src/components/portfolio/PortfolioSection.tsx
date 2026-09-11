import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioTabs } from './PortfolioTabs';
import { PortfolioCard, ProjectItem } from './PortfolioCard';

interface PortfolioSectionProps {
  className?: string;
  onSeeDetails?: () => void;
}

const PORTFOLIO_DATA: Record<string, ProjectItem[]> = {
  'all': [
    {
      id: 'details-action',
      type: 'action',
      actionText: 'See Details',
      imageUrl: '/images/portfolio-dribbble-shot.jpg',
    },
    {
      id: 'ai-wave',
      type: 'project',
      companyYear: 'Ai Corporation. 2023',
      title: 'Ai Wave - Ai Chatbot Mobile App',
      imageUrl: '/images/ai-wave-app.jpg',
    },
    {
      id: 'app-lancer',
      type: 'project',
      companyYear: 'Lancer Corporation. 2023',
      title: 'App Lancer - Freelance Mobile App',
      imageUrl: '/images/app-lancer-ui.jpg',
    },
    {
      id: 'finflow-growth',
      type: 'project',
      companyYear: 'FinFlow Corp. 2024',
      title: 'FinFlow - Fintech Analytics Dashboard',
      imageUrl: '/images/hero-laptop-work.jpg',
    },
    {
      id: 'zenith-brand',
      type: 'project',
      companyYear: 'Zenith Studio. 2024',
      title: 'Zenith - Creative Brand Architecture',
      imageUrl: '/images/hero-creative-arch.jpg',
    },
  ],
  'ui-ux': [
    {
      id: 'details-action',
      type: 'action',
      actionText: 'See Details',
      imageUrl: '/images/portfolio-dribbble-shot.jpg',
    },
    {
      id: 'ai-wave',
      type: 'project',
      companyYear: 'Ai Corporation. 2023',
      title: 'Ai Wave - Ai Chatbot Mobile App',
      imageUrl: '/images/ai-wave-app.jpg',
    },
    {
      id: 'app-lancer',
      type: 'project',
      companyYear: 'Lancer Corporation. 2023',
      title: 'App Lancer - Freelance Mobile App',
      imageUrl: '/images/app-lancer-ui.jpg',
    },
  ],
  'digital-marketing': [
    {
      id: 'details-action-marketing',
      type: 'action',
      actionText: 'See Details',
      imageUrl: '/images/hero-laptop-work.jpg',
    },
    {
      id: 'hyperion-seo',
      type: 'project',
      companyYear: 'Hyperion Media. 2024',
      title: 'Hyperion - 300% Organic Traffic Surge',
      imageUrl: '/images/portfolio-dribbble-shot.jpg',
    },
    {
      id: 'basecamp-ads',
      type: 'project',
      companyYear: 'Basecamp Corp. 2023',
      title: 'Basecamp - Omnichannel Paid Funnel',
      imageUrl: '/images/ai-wave-app.jpg',
    },
  ],
  'branding': [
    {
      id: 'details-action-branding',
      type: 'action',
      actionText: 'See Details',
      imageUrl: '/images/hero-creative-arch.jpg',
    },
    {
      id: 'zenith-identity',
      type: 'project',
      companyYear: 'Zenith Corp. 2024',
      title: 'Zenith - Visual Identity & Design System',
      imageUrl: '/images/app-lancer-ui.jpg',
    },
    {
      id: 'finflow-rebrand',
      type: 'project',
      companyYear: 'FinFlow Inc. 2023',
      title: 'FinFlow - Global Modern Brand Elevation',
      imageUrl: '/images/hero-laptop-work.jpg',
    },
  ],
};

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  className = '',
  onSeeDetails,
}) => {
  const [activeTab, setActiveTab] = useState('ui-ux');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Smoothly reset horizontal scroll position whenever tab changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const currentItems = PORTFOLIO_DATA[activeTab] || PORTFOLIO_DATA['ui-ux'];

  return (
    <section
      id="case-study"
      data-name="Desktop - 10"
      className={`w-full bg-[#fafafa] py-4 sm:py-6 px-2 sm:px-4 ${className}`}
    >
      {/* Frame 427320835: Main Dark Container (1408px × 926px in pen.dev) */}
      <div
        data-name="Frame 427320835"
        className="max-w-[1408px] mx-auto bg-[#020609] rounded-[30px] py-16 sm:py-20 flex flex-col items-center overflow-hidden"
      >
        {/* Frame 427321487: Text & Button Group Container */}
        <div
          data-name="Frame 427321487"
          className="flex flex-col items-center gap-10 sm:gap-[53px] w-full max-w-[1280px] text-center px-4 sm:px-8 lg:px-16"
        >
          {/* Headline C0AD2 */}
          <h2
            data-name="Real-world examples of how we have helped..."
            className="text-white text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[1.3] tracking-[-1.44px] max-w-[1280px]"
          >
            Real-world examples of how we have helped companies achieve their
            marketing objectives.
          </h2>

          {/* Filter Pills Frame 427321490 */}
          <PortfolioTabs
            activeTabId={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Frame 427320847: Portfolio Projects Row (54px gap, scrollable, starts at x:64px) */}
        <div
          ref={scrollContainerRef}
          data-name="Frame 427320847"
          className="mt-14 sm:mt-16 lg:mt-[70px] w-full overflow-x-auto pb-6 px-6 sm:px-10 lg:px-16 scrollbar-none scroll-smooth"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="flex items-center justify-start gap-8 sm:gap-10 lg:gap-[54px] w-max min-w-full"
            >
              {currentItems.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={{
                    ...item,
                    onActionClick: onSeeDetails,
                  }}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
