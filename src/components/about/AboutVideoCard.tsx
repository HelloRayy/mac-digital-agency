import React from 'react';

interface AboutVideoCardProps {
  className?: string;
  onPlayClick?: () => void;
}

/**
 * Group 427320842 & Group 427320837 - Cloned 1:1 from pen.dev
 * - Card: 818px × 382px, cornerRadius: 30px
 * - Background: Dark image fill with overlay
 * - Center Text: "HOW WE WORK" (48px, 600 weight, 12.96px letter spacing)
 * - Play Badge (eipgi): 163px circle with 12px #fafafa border, #99ea48 fill, and solar:play-bold
 */
export const AboutVideoCard: React.FC<AboutVideoCardProps> = ({
  className = '',
  onPlayClick,
}) => {
  return (
    <div
      data-name="Group 427320842-Container"
      className={`relative w-full lg:flex-1 h-[382px] rounded-[30px] overflow-visible ${className}`}
    >
      {/* Main Showcase Card (818px × 382px on desktop) */}
      <div
        data-name="Group 427320842"
        className="w-full h-full rounded-[30px] overflow-hidden relative bg-brand-dark flex items-center justify-center"
      >
        {/* Background Image with Clean Modern Overlay */}
        <img
          src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1200&auto=format&fit=crop&q=80"
          alt="How we work team collaboration"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* NObA5: Centered Headline "HOW WE WORK" */}
        <h3
          data-name="HOW WE WORK"
          className="relative z-10 text-white font-sans font-semibold text-[28px] sm:text-[38px] lg:text-[48px] leading-tight tracking-[6px] sm:tracking-[10px] lg:tracking-[12.96px] text-center select-none uppercase pl-[6px] sm:pl-[10px] lg:pl-[12.96px]"
        >
          HOW WE WORK
        </h3>
      </div>

      {/* Floating Play Button Badge (Group 427320837) */}
      <button
        type="button"
        data-name="Group 427320837"
        onClick={onPlayClick}
        aria-label="Play video: How we work"
        className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 lg:-bottom-8 lg:-right-8 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] xl:w-[163px] xl:h-[163px] bg-brand-lime rounded-full border-[8px] sm:border-[12px] border-[#fafafa] flex items-center justify-center shadow-[0px_45px_66px_-10px_rgba(0,0,0,0.44)] cursor-pointer z-20 shrink-0"
      >
        {/* solar:play-bold vector icon with exact 1:1 pen.dev positioning */}
        <svg
          data-name="solar:play-bold"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-10 sm:h-10 xl:w-[44px] xl:h-[44px]"
        >
          <g transform="translate(7.333, 3.666)">
            <path
              d="M17.409 7.35331c0.4803 0.25541 0.88205 0.63669 1.16221 1.10298 0.28016 0.46629 0.42817 1.00003 0.42817 1.54402 0 0.54399-0.14801 1.07772-0.42817 1.54401-0.28016 0.46629-0.68191 0.84757-1.16221 1.10299l-12.812 6.967c-2.063 1.122-4.597-0.338-4.597-2.646l0-13.935c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968z"
              transform="scale(1.83333)"
              fill="#000000"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default AboutVideoCard;
