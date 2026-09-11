import React from 'react';

export interface ProjectItem {
  id: string;
  type: 'project' | 'action';
  companyYear?: string;
  title?: string;
  imageUrl?: string;
  actionText?: string;
  onActionClick?: () => void;
}

interface PortfolioCardProps {
  item: ProjectItem;
  className?: string;
}

/**
 * Portfolio Card Component - Cloned 1:1 from pen.dev canvas node Frame 427320847
 * - Type 'action': Group 427320846 (460x460px circular card with 163px lime "See Details" badge)
 * - Type 'project': Group 427320845 / 427320847 (460x460px rounded-30px card with 10px white border, header tag line, and title)
 */
export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, className = '' }) => {
  if (item.type === 'action') {
    return (
      <div
        data-name="Group 427320846"
        className={`w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] xl:w-[460px] xl:h-[460px] rounded-full bg-[#c3c3c3] border-[8px] xl:border-[11px] border-white/40 flex items-center justify-center shrink-0 select-none ${className}`}
      >
        {/* Group 427320844: Inner 163px Lime Button */}
        <button
          type="button"
          onClick={item.onActionClick}
          className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] xl:w-[163px] xl:h-[163px] rounded-full bg-brand-lime flex items-center justify-center text-black font-sans font-bold text-[16px] sm:text-[18px] tracking-[-0.54px] cursor-pointer shadow-[0px_45px_66px_-10px_rgba(0,0,0,0.44)]"
        >
          {item.actionText || 'See Details'}
        </button>
      </div>
    );
  }

  return (
    <div
      data-name="Group 427320845"
      className={`w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] xl:w-[460px] xl:h-[460px] rounded-[30px] border-[8px] xl:border-[10px] border-white/30 bg-[#2a2d34] relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 shrink-0 select-none ${className}`}
    >
      {/* Background Image with Darker Overlay */}
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.title || 'Portfolio project'}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

      {/* Frame 427321478: Top line + Company. Year */}
      <div
        data-name="Frame 427321478"
        className="relative z-10 flex items-center gap-[13px]"
      >
        <div className="w-[40px] sm:w-[54px] h-[1px] bg-white shrink-0" />
        <span className="font-sans font-semibold text-[15px] sm:text-[17px] text-white tracking-[-0.51px]">
          {item.companyYear}
        </span>
      </div>

      {/* Project Title */}
      <h4
        data-name="Project Title"
        className="relative z-10 font-sans font-semibold text-[20px] sm:text-[24px] text-white leading-[1.4]"
      >
        {item.title}
      </h4>
    </div>
  );
};

export default PortfolioCard;
