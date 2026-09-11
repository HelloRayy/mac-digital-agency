import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

export const FaqItem: React.FC<FaqItemProps> = ({
  item,
  isOpen,
  onToggle,
  isFirst = false,
}) => {
  return (
    <div
      data-name={isOpen ? 'faqOpen' : 'faqClose'}
      className={`w-full ${
        isFirst ? 'border-t border-black' : ''
      } border-b border-black py-5 sm:py-[26px] px-2 sm:px-4 transition-colors duration-200`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 sm:gap-12 text-left cursor-pointer select-none group transition-all duration-150 p-2 -m-2 rounded-[12px] hover:bg-black/[0.02] active:scale-[0.99]"
        aria-expanded={isOpen}
      >
        <span className="text-[#010205] text-[18px] sm:text-[22px] lg:text-[24px] font-semibold leading-[1.4] sm:leading-[1.5] tracking-[-0.5px] sm:tracking-[-0.72px] max-w-[500px] transition-colors duration-200 group-hover:text-black">
          {item.question}
        </span>
        <div
          className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 text-[#010205] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          {isOpen ? (
            <Minus className="w-6 h-6 stroke-[2]" />
          ) : (
            <Plus className="w-6 h-6 stroke-[2]" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 sm:pt-6 lg:pt-8 pr-6 sm:pr-12 pb-2">
              <p className="text-[#878c91] text-[15px] sm:text-[16px] font-medium leading-[1.8] font-sans">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
