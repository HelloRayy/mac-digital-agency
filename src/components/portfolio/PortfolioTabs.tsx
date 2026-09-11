import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface TabItem {
  id: string;
  label: string;
  count: number;
}

const DEFAULT_TABS: TabItem[] = [
  { id: 'all', label: 'All Work', count: 20 },
  { id: 'ui-ux', label: 'UI/UX Design', count: 10 },
  { id: 'digital-marketing', label: 'Digital Marketing', count: 5 },
  { id: 'branding', label: 'Branding', count: 5 },
];

interface PortfolioTabsProps {
  className?: string;
  activeTabId?: string;
  onTabChange?: (tabId: string) => void;
}

export const PortfolioTabs: React.FC<PortfolioTabsProps> = ({
  className = '',
  activeTabId = 'all',
  onTabChange,
}) => {
  const [selectedTab, setSelectedTab] = useState(activeTabId);

  useEffect(() => {
    setSelectedTab(activeTabId);
  }, [activeTabId]);

  const handleSelect = (id: string) => {
    setSelectedTab(id);
    onTabChange?.(id);
  };

  return (
    <div
      data-name="Frame 427321490"
      className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 ${className}`}
    >
      {DEFAULT_TABS.map((tab) => {
        const isActive = selectedTab === tab.id;
        const formattedLabel =
          tab.id === 'ui-ux'
            ? `${tab.label}[${tab.count}]`
            : `${tab.label} [${tab.count}]`;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleSelect(tab.id)}
            className={`relative h-[46px] sm:h-[50px] min-w-[130px] min-[390px]:min-w-[150px] sm:min-w-[200px] xl:w-[236px] rounded-[50px] px-3.5 sm:px-6 py-[10px] sm:py-[13px] flex items-center justify-center text-[13px] min-[390px]:text-[14px] sm:text-[16px] font-bold tracking-[-0.32px] cursor-pointer select-none whitespace-nowrap transition-colors duration-200 active:scale-[0.98] ${
              isActive
                ? 'text-brand-dark'
                : 'border border-white text-white bg-transparent hover:bg-white/5'
            }`}
          >
            {/* Sliding Pill Background with Framer Motion layoutId */}
            {isActive && (
              <motion.div
                layoutId="activePortfolioTabPill"
                className="absolute inset-0 bg-brand-lime rounded-[50px]"
                transition={{
                  type: 'spring',
                  stiffness: 450,
                  damping: 35,
                }}
              />
            )}
            <span className="relative z-10">{formattedLabel}</span>
          </button>
        );
      })}
    </div>
  );
};

export default PortfolioTabs;
