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
const STATS_AVATARS = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    alt: 'Client 1',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    alt: 'Client 2',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    alt: 'Client 3',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    alt: 'Client 4',
  },
];

export const AboutStatsCard: React.FC<AboutStatsCardProps> = ({ className = '' }) => {
  return (
    <div
      data-name="Group 427320841"
      className={`w-full max-w-[438px] lg:w-[438px] h-auto min-h-[340px] sm:h-[382px] bg-[#010205] rounded-[30px] p-6 sm:p-8 lg:p-[40px] flex flex-col justify-between shrink-0 select-none ${className}`}
    >
      {/* Frame 427321484: Stats Headline & Subtitle (gap 27px) */}
      <div data-name="Frame 427321484" className="flex flex-col gap-4 sm:gap-[27px]">
        <span
          data-name="920+"
          className="font-sans font-bold text-[64px] sm:text-[72px] lg:text-[84px] text-white leading-none tracking-[-2.52px]"
        >
          920+
        </span>
        <p
          data-name="Project finish with superbly"
          className="font-sans font-medium text-[16px] sm:text-[19px] text-[#878c91] leading-[1.7]"
        >
          Project finish with superbly
        </p>
      </div>

      {/* Frame 427321491: 4 client avatar circles (70x70px, gap 7px) + plus */}
      <div data-name="Frame 427321491" className="flex items-center gap-1.5 sm:gap-[7px] pt-4 sm:pt-0">
        {/* 4 Ellipses: 70x70px on desktop with photo avatars and 2px border-white/50 */}
        {STATS_AVATARS.map((avatar) => (
          <div
            key={avatar.id}
            data-name={`Ellipse ${avatar.id}`}
            className="w-[46px] h-[46px] min-[400px]:w-[54px] min-[400px]:h-[54px] lg:w-[70px] lg:h-[70px] rounded-full overflow-hidden bg-[#2a2d34] border-2 border-white/50 shrink-0"
          >
            <img
              src={avatar.url}
              alt={avatar.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}

        {/* Plus Symbol: 74px bold Plus Jakarta Sans */}
        <span
          data-name="+"
          className="font-sans font-bold text-[38px] sm:text-[54px] lg:text-[74px] text-white leading-none tracking-[-2.22px] flex items-center justify-center shrink-0 ml-1 select-none"
        >
          +
        </span>
      </div>
    </div>
  );
};

export default AboutStatsCard;
