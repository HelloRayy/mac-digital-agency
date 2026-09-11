import React from 'react';
import { HeroHeadline } from './HeroHeadline';
import { HeroGraphic } from './HeroGraphic';
import { HeroBrands } from './HeroBrands';

interface HeroSectionProps {
  className?: string;
}

/**
 * Frame 427321782 - Cloned 1:1 from pen.dev canvas node w8YfR
 * - HeroLeft: HeroHeadline (max-w-[600px])
 * - HeroRight: HeroGraphic (Physical Box: 610px × 548px)
 * - Container: max-w-[1440px] px-6 md:px-12 lg:px-[80px]
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section
      data-name="Frame 427321782"
      className={`w-full bg-white relative pt-[32px] lg:pt-[48px] pb-[48px] lg:pb-[64px] ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px] flex flex-col">
        {/* Upper 2-column layout: Balanced with 610px right box */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 xl:gap-[48px]">
          <HeroHeadline />
          <HeroGraphic className="self-center lg:self-start" />
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
