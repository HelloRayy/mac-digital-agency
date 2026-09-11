import React from 'react';

interface FaqHeaderProps {
  onMoreQuestions?: () => void;
  onContactUs?: () => void;
  className?: string;
}

/**
 * FAQ Header component - Cloned 1:1 from pen.dev node Frame 427321495
 * - Headline (qWHxU): 48px font-semibold, color #010205, tracking-[-1.44px], leading-[1.3]
 * - Description (e80POr): 16px font-medium, color #878c91, max-w-[531px], leading-[1.8]
 * - Action Group (QWJAs / Frame 427321507):
 *   - "More Questions" pill button: rounded-[50px], border 1px #010205, py-[17px] px-4, font-bold
 *   - "Contact Us" text link: 16px font-semibold, color #010205
 *   - gap: 48px
 */
export const FaqHeader: React.FC<FaqHeaderProps> = ({
  onMoreQuestions,
  onContactUs,
  className = '',
}) => {
  return (
    <div
      data-name="Frame 427321495"
      className={`flex flex-col gap-8 sm:gap-10 lg:gap-12 max-w-[560px] ${className}`}
    >
      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Title qWHxU */}
        <h2
          data-name="Digital Marketing FAQs"
          className="text-[#010205] text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[1.25] sm:leading-[1.3] tracking-[-1px] sm:tracking-[-1.44px] font-sans"
        >
          Digital Marketing FAQs
        </h2>

        {/* Description e80POr */}
        <p
          data-name="Description"
          className="text-[#878c91] text-[15px] sm:text-[16px] font-medium leading-[1.8] font-sans max-w-[531px]"
        >
          As a leading digital marketing agency, we are dedicated to providing
          comprehensive educational resources and answering frequently asked
          questions to help our clients.
        </p>
      </div>

      {/* Frame 427321507: Button + Link Group */}
      <div
        data-name="Frame 427321507"
        className="flex flex-wrap items-center gap-6 sm:gap-12 pt-2"
      >
        {/* Frame 427320691: Pill button */}
        <button
          type="button"
          onClick={onMoreQuestions}
          className="w-[176px] h-[52px] rounded-[50px] border border-[#010205] flex items-center justify-center text-[#010205] font-sans font-bold text-[16px] tracking-[-0.32px] select-none transition-all duration-150 hover:bg-black/5 active:scale-[0.98] cursor-pointer"
        >
          More Questions
        </button>

        {/* Contact Us text link E0kumw */}
        <button
          type="button"
          onClick={onContactUs}
          className="text-[#010205] font-sans font-semibold text-[16px] leading-[1.8] select-none transition-all duration-150 hover:opacity-75 active:scale-[0.98] cursor-pointer py-2 px-3 rounded-full"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FaqHeader;
