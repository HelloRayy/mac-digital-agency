import React from 'react';

interface HeroHeadlineProps {
  className?: string;
  onScheduleCall?: () => void;
  onViewCaseStudy?: () => void;
}

/**
 * Frame 427321462 (heroLeft) - Cloned 1:1 from pen.dev node NihTH
 * Bounding Box Constraints:
 * - Physical Box: 590px × 431px (Aspect Ratio: 1.37)
 * - Display / Layout: flex, Align: normal, Justify: normal
 */
export const HeroHeadline: React.FC<HeroHeadlineProps> = ({
  className = '',
  onScheduleCall,
  onViewCaseStudy,
}) => {
  return (
    <div
      data-name="Frame 427321462"
      className={`flex flex-col gap-12 text-[#020407] text-base leading-normal w-full max-w-[590px] shrink-0 ${className}`}
    >
      {/* Frame 427321461: Headline & Subtitle Container (gap-8 / 32px) */}
      <div className="flex flex-col gap-8 leading-normal">
        <h1
          data-name="Stay ahead of the curve with our forward-thinking"
          className="text-[#010205] text-[40px] sm:text-[54px] lg:text-[72px] font-semibold leading-tight tracking-[-2.16px]"
        >
          Stay ahead of the curve with our forward-thinking
        </h1>

        <p
          data-name="An award-winning SEO agency..."
          className="text-[#878c91] font-medium leading-relaxed max-w-[557px]"
        >
          An award-winning SEO agency with disciplines in digital marketing,
          design, and website development. focused on understanding you.
        </p>
      </div>

      {/* Frame 427321481: CTAs row (gap-14 / 56px, height: 55.98px on desktop) */}
      <div
        data-name="Frame 427321481"
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-14 min-h-[55.98px] sm:h-[55.98px] leading-normal"
      >
        {/* Frame 427320691: "Schedule Call" Button (231.59px × 55.98px) */}
        <button
          type="button"
          data-name="Schedule Call Button"
          onClick={onScheduleCall}
          className="flex items-center justify-center gap-[42px] py-4 px-8 bg-[#010205] text-[#ffffff] text-center rounded-[70px] h-[55.98px] min-w-[231.59px] leading-normal cursor-pointer shrink-0"
        >
          <span className="text-[#ffffff] text-base font-bold text-center leading-snug whitespace-nowrap">
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
            className="shrink-0"
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

        {/* Text button: View Case Study (height: 28.8px) */}
        <button
          type="button"
          data-name="View Case Study"
          onClick={onViewCaseStudy}
          className="text-[#010205] font-semibold text-center h-[28.8px] leading-relaxed bg-transparent cursor-pointer shrink-0 whitespace-nowrap"
        >
          View Case Study
        </button>
      </div>
    </div>
  );
};

export default HeroHeadline;
