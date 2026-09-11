import React from 'react';

interface BlogHeaderProps {
  onSeeMore?: () => void;
  className?: string;
}

/**
 * Blog Header Component - Cloned 1:1 from pen.dev node Frame 427321487
 * - Headline (d0moR): 48px font-semibold, leading-[1.3], tracking-[-1.44px], max-w-[684px]
 * - Description (EJAlO): 16px font-medium, color #878c91, max-w-[557px], leading-[1.8]
 * - Button (ZW767): 156px pill button, rounded-[50px], border 1px #010205
 */
export const BlogHeader: React.FC<BlogHeaderProps> = ({
  onSeeMore,
  className = '',
}) => {
  return (
    <div
      data-name="Frame 427321487"
      className={`w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[73px] ${className}`}
    >
      {/* Headline d0moR */}
      <h2
        data-name="Digital Marketing & SEO Services..."
        className="text-[#010205] text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[1.25] sm:leading-[1.3] tracking-[-1px] sm:tracking-[-1.44px] max-w-[684px] font-sans"
      >
        Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
      </h2>

      {/* Frame 427321495: Description + Button */}
      <div
        data-name="Frame 427321495"
        className="flex flex-col items-start gap-8 lg:gap-12 max-w-[557px]"
      >
        <p
          data-name="Description"
          className="text-[#878c91] text-[15px] sm:text-[16px] font-medium leading-[1.8] font-sans"
        >
          We are the top digital marketing agency for branding corp. We offer a
          full range of services to help clients improve their search engine
          rankings and drive more traffic to their websites.
        </p>

        {/* Frame 427320691: See more button */}
        <button
          type="button"
          onClick={onSeeMore}
          className="w-[156px] h-[52px] rounded-[50px] border border-[#010205] flex items-center justify-center text-[#010205] font-sans font-bold text-[16px] tracking-[-0.32px] select-none transition-all duration-200 hover:bg-[#010205] hover:text-white active:scale-[0.98] cursor-pointer"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default BlogHeader;
