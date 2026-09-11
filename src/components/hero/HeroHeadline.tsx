import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.h1
          data-name="Stay ahead of the curve with our forward-thinking"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#010205] text-[40px] sm:text-[54px] lg:text-[72px] font-semibold leading-tight tracking-[-2.16px]"
        >
          Stay ahead of the curve with our forward-thinking
        </motion.h1>

        <motion.p
          data-name="An award-winning SEO agency..."
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#878c91] font-medium leading-relaxed max-w-[557px]"
        >
          An award-winning SEO agency with disciplines in digital marketing,
          design, and website development. focused on understanding you.
        </motion.p>
      </div>

      {/* Frame 427321481: CTAs row */}
      <motion.div
        data-name="Frame 427321481"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 min-[380px]:gap-4 sm:gap-6 min-h-[48px] sm:h-[55.98px] leading-normal"
      >
        {/* Frame 427320691: "Schedule Call" Button (231.59px × 55.98px on desktop) */}
        <button
          type="button"
          data-name="Schedule Call Button"
          onClick={onScheduleCall}
          className="group flex items-center justify-center gap-3 sm:gap-[42px] py-3 sm:py-4 px-4 min-[380px]:px-5 sm:px-8 bg-[#010205] text-white border border-[#010205] text-center rounded-[70px] h-[48px] sm:h-[55.98px] min-w-[160px] min-[380px]:min-w-[180px] sm:min-w-[231.59px] leading-normal cursor-pointer shrink-0 transition-all duration-300 hover:bg-white hover:text-[#010205] active:scale-[0.98]"
        >
          <span className="text-[14px] sm:text-base font-bold text-center leading-snug whitespace-nowrap transition-colors duration-300">
            Schedule Call
          </span>

          {/* Animated Slide-Up Arrow Icons from pen.dev node QxfZ0 */}
          <div className="relative overflow-hidden w-5 h-5 sm:w-6 sm:h-6 shrink-0">
            {/* Primary Arrow: slides up and out */}
            <svg
              data-name="arrow-right-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-5 h-5 sm:w-6 sm:h-6 absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-full"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Secondary Arrow: slides in from below */}
            <svg
              data-name="arrow-right-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-5 h-5 sm:w-6 sm:h-6 absolute inset-0 transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        {/* Text button: View Case Study */}
        <button
          type="button"
          data-name="View Case Study"
          onClick={onViewCaseStudy}
          className="text-[#010205] text-[14px] sm:text-base font-semibold text-center py-2.5 sm:py-3.5 px-4 min-[380px]:px-5 sm:px-7 rounded-[50px] leading-normal bg-transparent cursor-pointer shrink-0 whitespace-nowrap transition-all duration-150 hover:bg-black/5 active:scale-[0.98]"
        >
          View Case Study
        </button>
      </motion.div>
    </div>
  );
};

export default HeroHeadline;
