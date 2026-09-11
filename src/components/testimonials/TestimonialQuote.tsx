import React from 'react';

interface TestimonialQuoteProps {
  quote: string;
  className?: string;
}

/**
 * Testimonial Quote component - Cloned 1:1 from pen.dev node PMYb9
 * - Font: Plus Jakarta Sans, 36px font-semibold, leading-[1.6] (57.6px)
 * - Letter spacing: -1.08px (-0.03em)
 * - Color: #010205
 * - Max width: 1280px
 */
export const TestimonialQuote: React.FC<TestimonialQuoteProps> = ({
  quote,
  className = '',
}) => {
  return (
    <blockquote
      data-name="Testimonial Quote"
      className={`text-[#010205] text-[24px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.5] lg:leading-[1.6] tracking-[-0.72px] lg:tracking-[-1.08px] max-w-[1280px] min-h-[170px] sm:min-h-[190px] lg:min-h-[235px] flex items-start select-none ${className}`}
    >
      “ {quote} ”
    </blockquote>
  );
};

export default TestimonialQuote;
