import React from 'react';

interface HeroGraphicProps {
  className?: string;
}

/**
 * Hero Right - Cloned 1:1 with Bounding Box Constraints:
 * - Physical Box: 610px × 548px (Aspect Ratio: 1.11)
 * - Display / Layout: block, Align: normal, Justify: normal
 *
 * Sesuai referensi styling pen.dev:
 * - Top row: flex gap-6 (Card A: 303x275px + Card B: 259x281px = 586px)
 * - Card C: 588x216px dark metrics card (absolute top-[332px] left-0)
 * - Badge D: 108x108px trending-up circle (absolute top-0 left-[155px])
 */
export const HeroGraphic: React.FC<HeroGraphicProps> = ({ className = '' }) => {
  return (
    <div
      data-name="HeroRight-PhysicalBox"
      className={`relative w-[610px] h-[548px] text-[#020407] select-none shrink-0 ${className}`}
    >
      {/* Top Row: Card A (Glass Arch) & Card B (Stats Card) */}
      <div className="flex items-start gap-6">
        {/* Card A: 303x275px glass arch shape */}
        <div
          data-name="Rectangle 23805"
          className="w-[303px] h-[275px] bg-[#000000]/20 rounded-tl-[1000px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] border border-[#ffffff]/20 backdrop-blur-md shrink-0"
          style={{ borderRadius: '1000px 20px 20px 20px' }}
        />

        {/* Card B: 259x281px stats card */}
        <div
          data-name="Group 427320838"
          className="w-[259px] h-[281px] flex flex-col justify-between p-[25px] bg-[#f0f0f0] rounded-[20px] shrink-0"
        >
          <div className="flex flex-col gap-[30px] pt-[13px] w-[209px]">
            <span
              data-name="230+"
              className="font-sans font-bold text-[84px] text-[#010205] leading-[1.0] tracking-[-2.52px]"
            >
              230+
            </span>
            <p
              data-name="some big companies..."
              className="font-sans font-medium text-[16px] text-[#5c5d5f] leading-[1.4]"
            >
              some big companies that we work with, and trust us very much
            </p>
          </div>

          {/* Progress bar: 211px total with 141px black active fill */}
          <div className="relative w-[211px] h-[7px] bg-[#d9d9d9] rounded-full overflow-hidden mb-1">
            <div className="absolute top-0 left-0 w-[141px] h-full bg-[#000000] rounded-full" />
          </div>
        </div>
      </div>

      {/* Card C: Dark Metrics Card (588x216px) */}
      <div
        data-name="Group 427320836"
        className="w-[588px] h-[216px] flex items-end justify-between gap-6 py-8 px-[33px] bg-[#010205] rounded-[20px] shadow-[rgba(0,_0,_0,_0)_0px_0px_0px_0px,_rgba(0,_0,_0,_0)_0px_0px_0px_0px,_rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] absolute top-[332px] left-0 z-10"
      >
        {/* Left: Tag + Headline */}
        <div className="flex flex-col gap-8 max-w-[280px]">
          <div className="flex items-center gap-[13px] h-[21px]">
            <div className="w-[54px] h-[1px] bg-white shrink-0" />
            <span className="font-sans font-semibold text-[14px] text-white tracking-[-0.42px] whitespace-nowrap">
              Drive More Traffic and Sales
            </span>
          </div>

          <h3 className="text-[#ffffff] text-[32px] font-semibold leading-[1.3] tracking-[-0.64px]">
            Drive more traffic and product sales
          </h3>
        </div>

        {/* Right: 3 Lime Bar Chart Columns */}
        <div className="flex items-end gap-2.5 w-[227px] shrink-0 self-end">
          <div
            data-name="Rectangle 23807"
            className="bg-[#bae289] rounded-t-[2px] h-[95px] w-[69px]"
          />
          <div
            data-name="Rectangle 23808"
            className="bg-[#99cf63] rounded-t-[2px] h-[136px] w-[69px]"
          />
          <div
            data-name="Rectangle 23809"
            className="bg-[#77b248] rounded-t-[2px] h-[166px] w-[69px]"
          />
        </div>
      </div>

      {/* Floating Badge D: 108x108px Trending Up Circle */}
      <div
        data-name="Group 427320837"
        className="flex items-center justify-center bg-[#010205] rounded-full shadow-[rgba(0,_0,_0,_0.44)_0px_30px_44.26px_-6.84px] h-[108px] w-[108px] absolute top-0 left-[155px] z-20"
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
            d="M2 36L17 21L27 31L46 12"
            stroke="#a8d67b"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34 12H46V24"
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
