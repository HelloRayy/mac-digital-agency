import React from 'react';

interface HeroHeadlineProps {
  className?: string;
  onScheduleCall?: () => void;
  onViewCaseStudy?: () => void;
}

/**
 * Frame 427321462 (heroLeft) - Cloned 1:1 from pen.dev node NihTH
 * Iteration 2: Validation of typography, exact letter-spacing, line-heights, and CTA paddings
 * - Frame 427321461: gap 32px
 *   - Headline: 72px, weight 600, leading-[1.1], tracking-[-2.16px], max-w-[700px]
 *   - Subtitle: 16px, weight 500, leading-[1.8], color #878c91, max-w-[557px]
 * - Frame 427321481: gap 56px
 *   - "Schedule Call": py-4 px-8, gap 42px, radius 70, weight 700, 16px -0.32px
 *   - "View Case Study": weight 600, 16px, leading-[1.8], color #010205
 */
export const HeroHeadline: React.FC<HeroHeadlineProps> = ({
  className = '',
  onScheduleCall,
  onViewCaseStudy,
}) => {
  return (
    <div
      data-name="Frame 427321462"
      className={`flex flex-col gap-[48px] max-w-[700px] ${className}`}
    >
      {/* Frame 427321461: Headline & Subtitle Container (gap: 32px) */}
      <div className="flex flex-col gap-[32px]">
        <h1
          data-name="Stay ahead of the curve with our forward-thinking"
          className="font-sans font-semibold text-[40px] sm:text-[54px] lg:text-[72px] text-[#010205] leading-[1.1] tracking-[-2.16px] max-w-[700px]"
        >
          Stay ahead of the curve with our forward-thinking
        </h1>

        <p
          data-name="An award-winning SEO agency..."
          className="font-sans font-medium text-[16px] text-[#878c91] leading-[1.8] max-w-[557px]"
        >
          An award-winning SEO agency with disciplines in digital marketing,
          design, and website development. focused on understanding you.
        </p>
      </div>

      {/* Frame 427321481: CTAs row (gap: 56px) */}
      <div
        data-name="Frame 427321481"
        className="flex flex-wrap items-center gap-[28px] sm:gap-[56px]"
      >
        {/* Frame 427320691: "Schedule Call" Button */}
        <button
          type="button"
          data-name="Schedule Call Button"
          onClick={onScheduleCall}
          className="inline-flex items-center justify-center gap-[42px] bg-[#010205] text-white py-[16px] px-[32px] rounded-[70px] cursor-pointer"
        >
          <span className="font-sans font-bold text-[16px] leading-[1.4] tracking-[-0.32px] text-white">
            Schedule Call
          </span>

          {/* arrow-right icon from pen.dev node QxfZ0 */}
          <svg
            data-name="arrow-right"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5 12H19"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Text button: View Case Study */}
        <button
          type="button"
          data-name="View Case Study"
          onClick={onViewCaseStudy}
          className="font-sans font-semibold text-[16px] text-[#010205] leading-[1.8] bg-transparent cursor-pointer"
        >
          View Case Study
        </button>
      </div>
    </div>
  );
};
