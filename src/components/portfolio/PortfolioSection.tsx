import React, { useState } from 'react';
import { PortfolioTabs } from './PortfolioTabs';
import { PortfolioCard, ProjectItem } from './PortfolioCard';

interface PortfolioSectionProps {
  className?: string;
  onSeeDetails?: () => void;
}

const PORTFOLIO_ITEMS: ProjectItem[] = [
  {
    id: 'details-action',
    type: 'action',
    actionText: 'See Details',
  },
  {
    id: 'ai-wave',
    type: 'project',
    companyYear: 'Ai Corporation. 2023',
    title: 'Ai Wave - Ai Chatbot Mobile App',
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'app-lancer',
    type: 'project',
    companyYear: 'Lancer Corporation. 2023',
    title: 'App Lancer - Freelance Mobile App',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
  },
];

/**
 * Section Desktop - 10 - Cloned 1:1 from pen.dev canvas node V0W9G
 * - Container: max-w-[1440px] px-2 sm:px-4 py-4
 * - Inner Dark Card (Frame 427320835): bg-[#020609] rounded-[30px]
 * - Headline (C0AD2): 48px font-semibold, 1280px max-width, center aligned
 * - Tabs (Frame 427321490): 4 filter pills
 * - Cards row (Frame 427320847): 54px gap, horizontal scroll with 460px cards
 */
export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  className = '',
  onSeeDetails,
}) => {
  const [activeTab, setActiveTab] = useState('ui-ux');

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
          data-name="Frame 427320847"
          className="mt-14 sm:mt-16 lg:mt-[70px] w-full flex items-center justify-start gap-8 sm:gap-10 lg:gap-[54px] overflow-x-auto pb-6 px-6 sm:px-10 lg:px-16 scrollbar-none"
        >
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioCard
              key={item.id}
              item={{
                ...item,
                onActionClick: onSeeDetails,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
