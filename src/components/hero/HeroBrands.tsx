import React from 'react';
import { AfterpayLogo, BasecampLogo, MazeLogo } from './BrandLogos';

interface HeroBrandsProps {
  className?: string;
}

/**
 * Frame 427321494 - Cloned 1:1 from pen.dev canvas node nxrlV
 * - Physical Box: 377px × 33px (Aspect Ratio: 11.33)
 * - Container: gap 64px, text 150px
 * - Logos (Frame 427321493): gap 27.93px
 */
export const HeroBrands: React.FC<HeroBrandsProps> = ({ className = '' }) => {
  return (
    <div
      data-name="Frame 427321494"
      className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-[64px] ${className}`}
    >
      {/* Node A0fvuT: Text fixed-width 150px */}
      <p
        data-name="A0fvuT"
        className="font-sans font-semibold text-[14px] text-brand-dark leading-[1.6] w-[150px] shrink-0"
      >
        Trusted by the world's biggest brands
      </p>

      {/* Frame 427321493: 377px x 33px Box */}
      <div
        data-name="Frame 427321493"
        className="flex flex-wrap items-center gap-[27.93px] text-brand-text text-base h-[33.3073px] leading-normal"
      >
        <AfterpayLogo />
        <BasecampLogo />
        <MazeLogo />
      </div>
    </div>
  );
};

export default HeroBrands;
