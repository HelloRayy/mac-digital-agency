import React from 'react';
import { CountUp } from '@/components/common/CountUp';

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
      className={`relative overflow-hidden w-full max-w-[438px] lg:w-[438px] h-auto min-h-[340px] sm:h-[382px] bg-[#030407] rounded-[30px] p-6 sm:p-8 lg:p-[40px] flex flex-col justify-between shrink-0 select-none ${className}`}
    >
      {/* Background Layered Cards Pattern - Styled from user reference */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-[30px]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 438 382"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Ambient Background Gradient */}
            <linearGradient id="statsBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#08090d" />
              <stop offset="50%" stopColor="#040507" />
              <stop offset="100%" stopColor="#010204" />
            </linearGradient>

            {/* Back Card Gradient */}
            <linearGradient id="cardGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#252731" />
              <stop offset="45%" stopColor="#14151a" />
              <stop offset="100%" stopColor="#090a0c" />
            </linearGradient>

            {/* Middle Card Gradient */}
            <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2d303b" />
              <stop offset="40%" stopColor="#1a1c23" />
              <stop offset="100%" stopColor="#0a0b0e" />
            </linearGradient>

            {/* Front Card Gradient */}
            <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#242630" />
              <stop offset="50%" stopColor="#16171d" />
              <stop offset="100%" stopColor="#08090c" />
            </linearGradient>

            {/* Deep shadow for middle card */}
            <filter id="cardShadow2" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="-12" dy="16" stdDeviation="18" floodColor="#000000" floodOpacity="0.8" />
            </filter>

            {/* Deep shadow for front card */}
            <filter id="cardShadow1" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="-10" dy="14" stdDeviation="16" floodColor="#000000" floodOpacity="0.85" />
            </filter>

            {/* Top highlight gradient border */}
            <linearGradient id="cardStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Base Background */}
          <rect width="438" height="382" fill="url(#statsBg)" />

          {/* Back Card (Rightmost, angled) */}
          <g transform="translate(260, -70) rotate(9)">
            <rect
              x="0"
              y="0"
              width="230"
              height="480"
              rx="34"
              fill="url(#cardGrad3)"
              stroke="url(#cardStroke)"
              strokeWidth="1"
            />
          </g>

          {/* Middle Card (Center, angled 14deg, casts shadow) */}
          <g transform="translate(130, -50) rotate(15)" filter="url(#cardShadow2)">
            <rect
              x="0"
              y="0"
              width="250"
              height="470"
              rx="32"
              fill="url(#cardGrad2)"
              stroke="url(#cardStroke)"
              strokeWidth="1"
            />
          </g>

          {/* Front Card (Bottom-left to center, horizontal top with rounded corner) */}
          <g transform="translate(-30, 140)" filter="url(#cardShadow1)">
            <rect
              x="0"
              y="0"
              width="268"
              height="290"
              rx="26"
              fill="url(#cardGrad1)"
              stroke="url(#cardStroke)"
              strokeWidth="1"
            />
          </g>
        </svg>
      </div>
      {/* Frame 427321484: Stats Headline & Subtitle (gap 27px) */}
      <div data-name="Frame 427321484" className="relative z-10 flex flex-col gap-4 sm:gap-[27px]">
        <CountUp
          to={920}
          duration={2.0}
          delay={0.2}
          suffix="+"
          className="font-sans font-bold text-[64px] sm:text-[72px] lg:text-[84px] text-white leading-none tracking-[-2.52px]"
        />
        <p
          data-name="Project finish with superbly"
          className="font-sans font-medium text-[16px] sm:text-[19px] text-[#878c91] leading-[1.7]"
        >
          Project finish with superbly
        </p>
      </div>

      {/* Frame 427321491: 4 client avatar circles (70x70px, gap 7px) + plus */}
      <div data-name="Frame 427321491" className="relative z-10 flex items-center gap-1.5 sm:gap-[7px] pt-4 sm:pt-0">
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

        {/* Plus Symbol: smaller size for clean balance with avatars */}
        <span
          data-name="+"
          className="font-sans font-bold text-[24px] sm:text-[30px] lg:text-[38px] text-white leading-none flex items-center justify-center shrink-0 ml-1.5 select-none"
        >
          +
        </span>
      </div>
    </div>
  );
};

export default AboutStatsCard;
