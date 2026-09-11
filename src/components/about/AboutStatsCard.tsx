import React from 'react';

interface AboutStatsCardProps {
  className?: string;
}

/**
 * Group 427320841 - Cloned 1:1 from pen.dev canvas node u6f8YX
 * - Physical Box: 438px × 382px, cornerRadius: 30px
 * - Fill: #010205 (Rectangle 23812)
 * - Padding: 40px (left: 40px, top: 40px, bottom: 40px)
 * - Stats text (Frame 427321484, gap: 27px):
 *   - "920+": 84px bold, Plus Jakarta Sans, -2.52px tracking, fill #ffffff
 *   - "Project finish with superbly": 19px medium, 1.7 line-height, fill #878c91
 * - Bottom row (Frame 427321491, gap: 7px):
 *   - 4 Ellipses: 70px × 70px, fill #c6c6c6, stroke #ffffff80 (2px outer border)
 *   - "+": 74px bold, Plus Jakarta Sans, -2.22px tracking, fill #ffffff
 */
export const AboutStatsCard: React.FC<AboutStatsCardProps> = ({ className = '' }) => {
  return (
    <div
      data-name="Group 427320841"
      className={`w-full max-w-[438px] lg:w-[438px] h-[382px] bg-[#010205] rounded-[30px] p-[40px] flex flex-col justify-between shrink-0 select-none ${className}`}
    >
      {/* Frame 427321484: Stats Headline & Subtitle (gap 27px) */}
      <div data-name="Frame 427321484" className="flex flex-col gap-[27px]">
        <span
          data-name="920+"
          className="font-sans font-bold text-[72px] sm:text-[84px] text-white leading-none tracking-[-2.52px]"
        >
          920+
        </span>
        <p
          data-name="Project finish with superbly"
          className="font-sans font-medium text-[19px] text-[#878c91] leading-[1.7]"
        >
          Project finish with superbly
        </p>
      </div>

      {/* Frame 427321491: 4 minimalist grey circles (70x70px, gap 7px) + plus */}
      <div data-name="Frame 427321491" className="flex items-center gap-[7px]">
        {/* 4 Ellipses: 70x70px with #c6c6c6 fill and 2px border-white/50 */}
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            data-name={`Ellipse ${num}`}
            className="w-[54px] h-[54px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#c6c6c6] border-2 border-white/50 shrink-0"
          />
        ))}

        {/* Plus Symbol: 74px bold Plus Jakarta Sans */}
        <span
          data-name="+"
          className="font-sans font-bold text-[54px] sm:text-[74px] text-white leading-none tracking-[-2.22px] flex items-center justify-center shrink-0 ml-1 select-none"
        >
          +
        </span>
      </div>
    </div>
  );
};

export default AboutStatsCard;
