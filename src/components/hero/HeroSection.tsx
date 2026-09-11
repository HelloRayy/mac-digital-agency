import React from 'react';
import { HeroHeadline } from './HeroHeadline';
import { HeroGraphic } from './HeroGraphic';
import { HeroBrands } from './HeroBrands';

interface HeroSectionProps {
  className?: string;
}

/**
 * Frame 427321782 - Cloned 1:1 from pen.dev canvas node w8YfR
 * - bounds: 1298x548px within 1440px desktop frame
 * - left: Frame 427321462 (HeroHeadline)
 * - right: Group 427320839 (HeroGraphic)
 * - bottom: Frame 427321494 (HeroBrands)
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section
      data-name="Frame 427321782"
      className={`w-full bg-white relative pt-[32px] lg:pt-[54px] pb-[48px] lg:pb-[64px] ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px] flex flex-col">
        {/* Upper 2-column layout: Headline (Left) & Graphic Composition (Right) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[48px] lg:gap-[40px] xl:gap-[60px]">
          <HeroHeadline className="flex-1 shrink-0" />
          <HeroGraphic className="flex-1 shrink-0" />
        </div>

        {/* Bottom row: Trusted by brand logos (Frame 427321494) */}
        <div className="mt-[48px] lg:mt-[64px] pt-[24px]">
          <HeroBrands />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
