import React from 'react';
import { CtaBanner } from './CtaBanner';
import { FooterBrand } from './FooterBrand';
import { FooterNav } from './FooterNav';

interface FooterSectionProps {
  className?: string;
  onGetStarted?: () => void;
}

/**
 * Section Desktop - 18 - Cloned 1:1 from pen.dev canvas node LOOi4
 * - Background: #fafafa
 * - CTA Banner: Frame 427320835 (dark rounded-30px container)
 * - Footer Links: Frame 427321781 (108px gap between Brand and Navigation)
 */
export const FooterSection: React.FC<FooterSectionProps> = ({
  className = '',
  onGetStarted,
}) => {
  return (
    <footer
      id="contact"
      data-name="Desktop - 18"
      className={`w-full bg-[#fafafa] pt-6 sm:pt-10 pb-16 sm:pb-24 px-2 sm:px-4 ${className}`}
    >
      {/* 1. CTA Banner (Frame 427320835) */}
      <CtaBanner onGetStarted={onGetStarted} />

      {/* 2. Footer Links (Frame 427321781) */}
      <div
        data-name="Frame 427321781"
        className="max-w-[1280px] mx-auto mt-16 sm:mt-20 lg:mt-[84px] px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row items-start justify-between gap-12 sm:gap-16 lg:gap-[108px]"
      >
        {/* Brand & Description (Frame 427320752) */}
        <FooterBrand className="w-full lg:w-auto shrink-0" />

        {/* Navigation, Licence & Contact Links (Frame 427321780) */}
        <FooterNav className="w-full lg:flex-1" />
      </div>
    </footer>
  );
};

export default FooterSection;
