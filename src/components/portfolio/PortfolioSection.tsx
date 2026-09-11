import React, { useState, useRef, useEffect } from 'react';
import { PortfolioTabs } from './PortfolioTabs';
import { PortfolioCard, ProjectItem } from './PortfolioCard';

interface PortfolioSectionProps {
  className?: string;
  onSeeDetails?: () => void;
}

interface CategorizedProjectItem extends ProjectItem {
  category: 'all' | 'ui-ux' | 'digital-marketing' | 'branding';
}

const ALL_PROJECTS: CategorizedProjectItem[] = [
  // 0. All Work Flagship Showcase (Position 0 & 1)
  {
    id: 'details-action-all',
    type: 'action',
    actionText: 'See Details',
    imageUrl: '/images/hero-creative-arch.jpg',
    category: 'all',
  },
  {
    id: 'all-work-flagship',
    type: 'project',
    companyYear: 'MAC Agency. 2024',
    title: 'Omnichannel Digital Marketing & Global Brand Ecosystem',
    imageUrl: '/images/hero-laptop-work.jpg',
    category: 'all',
  },

  // 1. UI/UX Design Group (Position 2, 3, 4)
  {
    id: 'details-action-uiux',
    type: 'action',
    actionText: 'See Details',
    imageUrl: '/images/portfolio-dribbble-shot.jpg',
    category: 'ui-ux',
  },
  {
    id: 'ai-wave',
    type: 'project',
    companyYear: 'Ai Corporation. 2023',
    title: 'Ai Wave - Ai Chatbot Mobile App',
    imageUrl: '/images/ai-wave-app.jpg',
    category: 'ui-ux',
  },
  {
    id: 'app-lancer',
    type: 'project',
    companyYear: 'Lancer Corporation. 2023',
    title: 'App Lancer - Freelance Mobile App',
    imageUrl: '/images/app-lancer-ui.jpg',
    category: 'ui-ux',
  },

  // 2. Digital Marketing Group (Position 5, 6, 7)
  {
    id: 'details-action-marketing',
    type: 'action',
    actionText: 'See Details',
    imageUrl: '/images/hero-laptop-work.jpg',
    category: 'digital-marketing',
  },
  {
    id: 'hyperion-seo',
    type: 'project',
    companyYear: 'Hyperion Media. 2024',
    title: 'Hyperion - 300% Organic Traffic Surge',
    imageUrl: '/images/portfolio-dribbble-shot.jpg',
    category: 'digital-marketing',
  },
  {
    id: 'basecamp-ads',
    type: 'project',
    companyYear: 'Basecamp Corp. 2023',
    title: 'Basecamp - Omnichannel Paid Funnel',
    imageUrl: '/images/ai-wave-app.jpg',
    category: 'digital-marketing',
  },

  // 3. Branding Group (Position 8, 9, 10)
  {
    id: 'details-action-branding',
    type: 'action',
    actionText: 'See Details',
    imageUrl: '/images/hero-creative-arch.jpg',
    category: 'branding',
  },
  {
    id: 'zenith-identity',
    type: 'project',
    companyYear: 'Zenith Corp. 2024',
    title: 'Zenith - Visual Identity & Design System',
    imageUrl: '/images/app-lancer-ui.jpg',
    category: 'branding',
  },
  {
    id: 'finflow-rebrand',
    type: 'project',
    companyYear: 'FinFlow Inc. 2023',
    title: 'FinFlow - Global Modern Brand Elevation',
    imageUrl: '/images/hero-laptop-work.jpg',
    category: 'branding',
  },
];

const CATEGORY_FIRST_INDEX: Record<string, number> = {
  'all': 0,
  'ui-ux': 2,
  'digital-marketing': 5,
  'branding': 8,
};

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  className = '',
  onSeeDetails,
}) => {
  const [activeTab, setActiveTab] = useState('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isProgrammaticScroll = useRef(false);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const targetIndex = CATEGORY_FIRST_INDEX[tabId] ?? 0;
    const targetCard = cardRefs.current[targetIndex];
    const container = scrollContainerRef.current;

    if (container) {
      isProgrammaticScroll.current = true;
      if (tabId === 'all' || targetIndex === 0) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (targetCard) {
        const paddingOffset = window.innerWidth < 640 ? 24 : 64;
        const targetLeft = targetCard.offsetLeft - paddingOffset;
        container.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
      }

      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 700);
    }
  };

  // Synchronize active tab pill with manual horizontal scrolling
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      const currentScrollLeft = container.scrollLeft;
      const uiuxCard = cardRefs.current[CATEGORY_FIRST_INDEX['ui-ux']];
      const dmCard = cardRefs.current[CATEGORY_FIRST_INDEX['digital-marketing']];
      const brandingCard = cardRefs.current[CATEGORY_FIRST_INDEX['branding']];

      const thresholdOffset = window.innerWidth < 640 ? 100 : 220;

      if (brandingCard && currentScrollLeft >= brandingCard.offsetLeft - thresholdOffset) {
        setActiveTab('branding');
      } else if (dmCard && currentScrollLeft >= dmCard.offsetLeft - thresholdOffset) {
        setActiveTab('digital-marketing');
      } else if (uiuxCard && currentScrollLeft >= uiuxCard.offsetLeft - thresholdOffset) {
        setActiveTab('ui-ux');
      } else {
        setActiveTab('all');
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

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
            onTabChange={handleTabChange}
          />
        </div>

        {/* Frame 427320847: Portfolio Projects Row (Continuous Horizontal Scroll Carousel) */}
        <div
          ref={scrollContainerRef}
          data-lenis-prevent
          data-name="Frame 427320847"
          className="mt-14 sm:mt-16 lg:mt-[70px] w-full overflow-x-auto pb-6 px-6 sm:px-10 lg:px-16 scrollbar-none scroll-smooth"
        >
          <div className="flex items-center justify-start gap-8 sm:gap-10 lg:gap-[54px] w-max min-w-full">
            {ALL_PROJECTS.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="shrink-0"
              >
                <PortfolioCard
                  item={{
                    ...item,
                    onActionClick: onSeeDetails,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
