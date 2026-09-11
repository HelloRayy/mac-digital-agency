import React from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

interface FaqItemProps {
  item: FaqItemData;
  isOpen: boolean;
  onToggle: () => void;
  isFirst?: boolean;
}

/**
 * FAQ Accordion Item component - Cloned 1:1 from pen.dev nodes v1h3RD / wso1b
 * - Question (ia5hu): 24px font-semibold, leading-[1.5], tracking-[-0.72px], color #010205
 * - Answer (hjuQy): 16px font-medium, leading-[1.8], color #878c91
 * - Padding: py-[26px] px-4 sm:px-6
 * - Borders: top border if first or open, bottom border solid black
 * - Icon: 24x24 Minus (when open) or Plus (when closed)
 */
export const FaqItem: React.FC<FaqItemProps> = ({
  item,
  isOpen,
  onToggle,
  isFirst = false,
}) => {
  return (
    <div
      data-name={isOpen ? 'faqOpen' : 'faqClose'}
      className={`w-full transition-colors ${
        isFirst ? 'border-t border-black' : ''
      } border-b border-black py-6 sm:py-[26px] px-2 sm:px-6`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 sm:gap-12 text-left cursor-pointer group select-none"
        aria-expanded={isOpen}
      >
        <span className="text-[#010205] text-[18px] sm:text-[22px] lg:text-[24px] font-semibold leading-[1.4] sm:leading-[1.5] tracking-[-0.5px] sm:tracking-[-0.72px] max-w-[500px]">
          {item.question}
        </span>
        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 text-[#010205] group-hover:scale-110 transition-transform">
          {isOpen ? (
            <Minus className="w-6 h-6 stroke-[2]" />
          ) : (
            <Plus className="w-6 h-6 stroke-[2]" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="mt-6 sm:mt-8 lg:mt-10 pr-6 sm:pr-12 animate-fadeIn">
          <p className="text-[#878c91] text-[15px] sm:text-[16px] font-medium leading-[1.8] font-sans">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
