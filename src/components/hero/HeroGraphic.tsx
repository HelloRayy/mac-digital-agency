import React from 'react';
import { motion } from 'framer-motion';
import { CountUp } from '@/components/common/CountUp';

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
    <div className={`w-full lg:w-auto flex justify-center lg:justify-start overflow-visible ${className}`}>
      <div
        data-name="HeroRight-PhysicalBox"
        className="relative w-[610px] h-[548px] text-[#020407] select-none shrink-0 scale-[0.52] min-[390px]:scale-[0.58] min-[440px]:scale-[0.68] sm:scale-[0.8] md:scale-[0.9] lg:scale-100 origin-top lg:origin-top-left -mb-[260px] min-[390px]:-mb-[230px] min-[440px]:-mb-[175px] sm:-mb-[110px] md:-mb-[55px] lg:mb-0"
      >
      {/* Top Row: Card A (Glass Arch) & Card B (Stats Card) */}
      <div className="flex items-start gap-6">
        {/* Card A: 303x275px glass arch shape with laptop workspace image */}
        <motion.div
          data-name="Rectangle 23805"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[303px] h-[275px] rounded-[1000px_20px_20px_20px] overflow-hidden border border-[#ffffff]/30 shrink-0 shadow-lg bg-[#000000]/20"
        >
          <img
            src="/images/hero-laptop-work.jpg"
            alt="Agency Workspace and Analytics"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>

        {/* Card B: 259x281px stats card */}
        <motion.div
          data-name="Group 427320838"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="w-[259px] h-[281px] flex flex-col justify-between p-[25px] bg-[#f0f0f0] rounded-[20px] shrink-0"
        >
          <div className="flex flex-col gap-[30px] pt-[13px] w-[209px]">
            <CountUp
              to={230}
              duration={1.8}
              delay={0.4}
              suffix="+"
              className="font-sans font-bold text-[84px] text-[#010205] leading-[1.0] tracking-[-2.52px]"
            />
            <p
              data-name="some big companies..."
              className="font-sans font-medium text-[16px] text-[#5c5d5f] leading-[1.4]"
            >
              some big companies that we work with, and trust us very much
            </p>
          </div>

          {/* Progress bar: 211px total with 141px black active fill */}
          <div className="relative w-[211px] h-[7px] bg-[#d9d9d9] rounded-full overflow-hidden mb-1">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 141 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 h-full bg-[#000000] rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Card C: Dark Metrics Card (588x216px) */}
      <motion.div
        data-name="Group 427320836"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="w-[588px] h-[216px] flex items-end justify-between gap-6 py-8 px-[33px] bg-[#010205] rounded-[20px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] absolute top-[332px] left-0 z-10"
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

        {/* Right: 3 Lime Bar Chart Columns with animated scaleY */}
        <div className="flex items-end gap-2.5 w-[227px] shrink-0 self-end">
          <motion.div
            data-name="Rectangle 23807"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 1 }}
            className="bg-[#bae289] rounded-t-[2px] h-[95px] w-[69px]"
          />
          <motion.div
            data-name="Rectangle 23808"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 1 }}
            className="bg-[#99cf63] rounded-t-[2px] h-[136px] w-[69px]"
          />
          <motion.div
            data-name="Rectangle 23809"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 1 }}
            className="bg-[#77b248] rounded-t-[2px] h-[166px] w-[69px]"
          />
        </div>
      </motion.div>

      {/* Floating Badge D: 108x108px Trending Up Circle with Ambient Float */}
      <motion.div
        data-name="Group 427320837"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [-4, 4, -4] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.5 },
          scale: { duration: 0.5, delay: 0.5 },
          y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut' },
        }}
        className="flex items-center justify-center bg-[#010205] rounded-full shadow-[0px_30px_44px_-7px_rgba(0,0,0,0.44)] h-[108px] w-[108px] absolute top-0 left-[155px] z-20"
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
      </motion.div>
    </div>
  </div>
  );
};
