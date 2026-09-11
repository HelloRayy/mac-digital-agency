import React from 'react';

interface HeroGraphicProps {
  className?: string;
}

/**
 * Group 427320839 (hero-right) - Cloned 1:1 from pen.dev node at9gn
 * Iteration 2: Pixel-perfect alignment and exact coordinates matching canvas
 * - Card A (u77Isn): 303x275px, cornerRadius: [1000px, 20px, 20px, 20px], fill: #00000033
 * - Card B (QAT91): 259x281px, fill: #f0f0f0, 230+ metrics with gap 30px and 211px dual bar
 * - Card C (awx77): 588x216px, fill: #010205, headline + 3 lime bar charts (95px, 136px, 166px)
 * - Circle D (g1Jp4R): 108x108px, fill: #010205, shadow: 0px 30px 44.26px -6.84px rgba(0,0,0,0.44)
 */
export const HeroGraphic: React.FC<HeroGraphicProps> = ({ className = '' }) => {
  return (
    <div
      data-name="Group 427320839"
      className={`relative w-full max-w-[766px] h-auto min-h-[548px] select-none ${className}`}
    >
      {/* Upper Row: Card A and Card B */}
      <div className="flex flex-col sm:flex-row items-start gap-[24px] lg:absolute lg:top-[32px] lg:left-[180px]">
        {/* Card A: Glass arch shape (Rectangle 23805) - 303x275px */}
        <div
          data-name="Rectangle 23805"
          className="w-[260px] sm:w-[303px] h-[240px] sm:h-[275px] bg-[#000000]/20 backdrop-blur-[73.5px] border border-white/20 shrink-0"
          style={{ borderRadius: '1000px 20px 20px 20px' }}
        />

        {/* Card B: Stats Card (Group 427320838) - 259x281px */}
        <div
          data-name="Group 427320838"
          className="w-[259px] h-[281px] bg-[#f0f0f0] rounded-[20px] p-[25px] flex flex-col justify-between shrink-0"
        >
          {/* Frame 427321475: layout vertical, gap 30px */}
          <div className="flex flex-col gap-[30px] pt-[13px]">
            <span
              data-name="230+"
              className="font-sans font-bold text-[84px] text-[#010205] leading-[1.0] tracking-[-2.52px]"
            >
              230+
            </span>
            <p
              data-name="some big companies..."
              className="font-sans font-medium text-[16px] text-[#5c5d5f] leading-[1.5] w-[211px]"
            >
              some big companies that we work with, and trust us very much
            </p>
          </div>

          {/* Group 427320840: Dual-color Progress Bar (211px total, 141px black active) */}
          <div className="relative w-[211px] h-[6.65px] bg-[#d9d9d9] rounded-full overflow-hidden mb-[16px]">
            <div className="absolute top-0 left-0 w-[141px] h-full bg-[#000000] rounded-full" />
          </div>
        </div>
      </div>

      {/* Card C: Dark Metrics Card (Group 427320836) - 588x216px */}
      <div
        data-name="Group 427320836"
        className="w-full max-w-[588px] min-h-[216px] bg-[#010205] rounded-[20px] px-[33px] py-[28px] sm:py-[32px] flex flex-col sm:flex-row sm:items-end justify-between gap-[24px] mt-6 lg:mt-0 lg:absolute lg:top-[331px] lg:left-[180px] shadow-2xl"
      >
        {/* Left: Frame 427321479 (gap 32px) */}
        <div className="flex flex-col gap-[32px] max-w-[280px]">
          {/* Frame 427321478 (gap 13px, alignItems center) */}
          <div className="flex items-center gap-[13px]">
            <div className="w-[54px] h-[1px] bg-white shrink-0" />
            <span className="font-sans font-semibold text-[14px] text-white tracking-[-0.42px] whitespace-nowrap">
              Drive More Traffic and Sales
            </span>
          </div>

          <h3 className="font-sans font-semibold text-[28px] sm:text-[32px] text-white leading-[1.3] tracking-[-0.64px]">
            Drive more traffic and product sales
          </h3>
        </div>

        {/* Right: Frame 427321480 (gap 10px, alignItems end) */}
        <div className="flex items-end gap-[10px] shrink-0 self-end">
          {/* Rectangle 23807: 69x95px, #bae289 */}
          <div
            data-name="Rectangle 23807"
            className="w-[54px] sm:w-[69px] h-[95px] bg-[#bae289] rounded-t-sm"
          />
          {/* Rectangle 23808: 69x136px, #99cf63 */}
          <div
            data-name="Rectangle 23808"
            className="w-[54px] sm:w-[69px] h-[136px] bg-[#99cf63] rounded-t-sm"
          />
          {/* Rectangle 23809: 69x166px, #77b248 */}
          <div
            data-name="Rectangle 23809"
            className="w-[54px] sm:w-[69px] h-[166px] bg-[#77b248] rounded-t-sm"
          />
        </div>
      </div>

      {/* Floating Badge D: Group 427320837 (108x108px, trending-up icon) */}
      <div
        data-name="Group 427320837"
        className="hidden lg:flex absolute top-0 left-[335px] w-[108px] h-[108px] rounded-full bg-[#010205] items-center justify-center z-10"
        style={{
          boxShadow: '0px 30px 44.26px -6.84px rgba(0, 0, 0, 0.44)',
        }}
      >
        <svg
          data-name="trending-up"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 12L14.5 21.5L9.5 16.5L2 24"
            stroke="#a8d67b"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34 12H44V22"
            stroke="#a8d67b"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
