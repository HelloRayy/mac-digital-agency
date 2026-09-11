import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialControlsProps {
  currentIndex: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

/**
 * Testimonial Controls component - Cloned 1:1 from pen.dev node Frame 427321508
 * - Prev Button (Frame 427320691): rounded-[70px], border 1px #010205, py-4 px-8, arrow-left 24x24
 * - Counter (F6LGSu): 16px font-semibold, #010205, leading-[1.8]
 * - Next Button (Frame 427320692): rounded-[70px], bg #010205, py-4 px-8, arrow-right 24x24 white
 * - Gap: 38px
 */
export const TestimonialControls: React.FC<TestimonialControlsProps> = ({
  currentIndex,
  totalCount,
  onPrev,
  onNext,
  className = '',
}) => {
  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalCount).padStart(2, '0');

  return (
    <div
      data-name="Frame 427321508"
      className={`flex items-center gap-6 sm:gap-[38px] select-none ${className}`}
    >
      {/* Prev Button (Frame 427320691) */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous testimonial"
        className="w-[72px] sm:w-[88px] h-[52px] sm:h-[56px] rounded-[70px] border border-[#010205] flex items-center justify-center text-[#010205] transition-all duration-150 hover:bg-black/5 active:scale-[0.98] cursor-pointer"
      >
        <ArrowLeft className="w-6 h-6 stroke-[2]" />
      </button>

      {/* Counter F6LGSu */}
      <span
        data-name="Counter"
        className="font-sans font-semibold text-[16px] text-[#010205] leading-[1.8] tracking-tight min-w-[48px] text-center"
      >
        {formattedIndex}/{formattedTotal}
      </span>

      {/* Next Button (Frame 427320692) */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next testimonial"
        className="w-[72px] sm:w-[88px] h-[52px] sm:h-[56px] rounded-[70px] bg-[#010205] flex items-center justify-center text-white transition-all duration-150 hover:bg-[#1a1d24] active:scale-[0.98] cursor-pointer"
      >
        <ArrowRight className="w-6 h-6 stroke-[2]" />
      </button>
    </div>
  );
};

export default TestimonialControls;
