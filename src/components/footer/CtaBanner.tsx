import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onGetStarted?: () => void;
  className?: string;
}

/**
 * CTA Banner Component - Cloned 1:1 from pen.dev node Frame 427320835 (Desktop - 18)
 * - Container: max-w-[1408px], bg-[#020609], rounded-[30px], height 235px (desktop)
 * - Headline (EGR1P): 80px font-semibold (responsive 36-80px), color #ffffff, letterSpacing: -2.4px, leading-[1.3]
 * - Button (Nub0m): Pill rounded-[70px], fill #ffffff, text "Get Started" 16px bold, arrow-right 24x24
 */
export const CtaBanner: React.FC<CtaBannerProps> = ({
  onGetStarted,
  className = '',
}) => {
  return (
    <div
      data-name="Frame 427320835"
      className={`w-full max-w-[1408px] mx-auto bg-[#020609] rounded-[30px] pt-12 sm:pt-16 lg:pt-[80px] pb-10 sm:pb-12 lg:pb-[51px] px-6 sm:px-12 lg:px-16 flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-12 select-none ${className}`}
    >
      {/* Headline EGR1P */}
      <h2
        data-name="Ready to work with us ?"
        className="text-white text-[38px] sm:text-[54px] lg:text-[72px] xl:text-[80px] font-semibold leading-[1.3] tracking-[-1.5px] lg:tracking-[-2.4px] font-sans text-center lg:text-left"
      >
        Ready to work with us ?
      </h2>

      {/* Frame 427320691: Get Started button */}
      <button
        type="button"
        onClick={onGetStarted}
        className="h-[56px] px-8 rounded-[70px] bg-white flex items-center justify-center gap-6 sm:gap-[42px] shrink-0 text-[#010205] select-none"
      >
        <span className="font-sans font-bold text-[16px] tracking-[-0.32px] whitespace-nowrap">
          Get Started
        </span>
        <ArrowRight className="w-6 h-6 stroke-[2]" />
      </button>
    </div>
  );
};

export default CtaBanner;
