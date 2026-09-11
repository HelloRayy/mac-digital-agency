import React from 'react';

interface AboutStatsCardProps {
  className?: string;
}

const AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
];

/**
 * Group 427320841 - Cloned 1:1 from pen.dev canvas node u6f8YX
 * - Physical Box: 438px × 382px, cornerRadius: 30px
 * - Fill: #010205 (bg-brand-dark)
 * - Stat: "920+" (84px bold), "Project finish with superbly" (19px medium)
 * - Avatars: 4 circles 70x70px with white/50 border + "+" symbol
 */
export const AboutStatsCard: React.FC<AboutStatsCardProps> = ({ className = '' }) => {
  return (
    <div
      data-name="Group 427320841"
      className={`w-full lg:w-[438px] h-[382px] bg-brand-dark rounded-[30px] p-8 sm:p-10 flex flex-col justify-between shrink-0 select-none ${className}`}
    >
      {/* Frame 427321484: Stats content */}
      <div data-name="Frame 427321484" className="flex flex-col gap-4 sm:gap-[27px]">
        <span
          data-name="920+"
          className="font-sans font-bold text-[64px] sm:text-[84px] text-white leading-none tracking-[-2.52px]"
        >
          920+
        </span>
        <p
          data-name="Project finish with superbly"
          className="font-sans font-medium text-[17px] sm:text-[19px] text-brand-muted leading-[1.7]"
        >
          Project finish with superbly
        </p>
      </div>

      {/* Frame 427321491: Avatars + Plus indicator */}
      <div data-name="Frame 427321491" className="flex items-center gap-[7px]">
        <div className="flex items-center gap-[7px]">
          {AVATARS.map((src, index) => (
            <div
              key={index}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] xl:w-[70px] xl:h-[70px] rounded-full border-2 border-white/50 overflow-hidden shrink-0 bg-[#c6c6c6]"
            >
              <img
                src={src}
                alt={`Client avatar ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Plus Symbol */}
        <span
          data-name="+"
          className="font-sans font-bold text-[50px] sm:text-[64px] xl:text-[74px] text-white leading-none tracking-[-2.22px] flex items-center select-none"
        >
          +
        </span>
      </div>
    </div>
  );
};

export default AboutStatsCard;
