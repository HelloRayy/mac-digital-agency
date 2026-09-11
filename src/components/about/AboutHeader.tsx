import React from 'react';

interface AboutHeaderProps {
  className?: string;
}

/**
 * Frame 427321487 - Cloned 1:1 from pen.dev canvas node c3NqE
 * - Bounding width: 1280px
 * - Headline (Tu9JP): 684px, 48px, 600 weight, -1.44px tracking
 * - Description (WI89C): 557px, 16px, 500 weight, 1.8 leading
 */
export const AboutHeader: React.FC<AboutHeaderProps> = ({ className = '' }) => {
  return (
    <div
      data-name="Frame 427321487"
      className={`flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[73px] w-full ${className}`}
    >
      {/* Tu9JP: Headline */}
      <h2
        data-name="Provide the best service with out of the box ideas"
        className="text-brand-dark text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[1.3] tracking-[-1.44px] max-w-[684px]"
      >
        Provide the best service with out of the box ideas
      </h2>

      {/* WI89C: Description body */}
      <p
        data-name="we are a passionate team..."
        className="text-brand-muted text-[16px] font-medium leading-[1.8] max-w-[557px]"
      >
        we are a passionate team of digital marketing enthusiasts dedicated to
        helping businesses succeed in the digital world. With years of experience
        and a deep understanding of the ever-evolving online landscape, we stay
        at the forefront of industry trends and technologies.
      </p>
    </div>
  );
};

export default AboutHeader;
