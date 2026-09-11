import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onGetStarted?: () => void;
  className?: string;
}

/**
 * CTA Banner Component - Cloned 1:1 from pen.dev node Frame 427320835 (Desktop - 18)
 * - Container: max-w-[1408px], bg-[#020609], rounded-[30px], height 235px (desktop)
 * - Headline (EGR1P): 80px font-semibold (responsive 36-80px), color #ffffff, letterSpacing: -2.4px, leading-[1.3]
 * - Button (Nub0m): Pill rounded-[70px], fill #ffffff, text "Get Started" 16px bold, arrow-right 24x24
 */
export const CtaBanner: React.FC<CtaBannerProps> = ({
  onGetStarted,
  className = '',
}) => {
  return (
    <motion.div
      data-name="Frame 427320835"
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35, margin: '0px 0px -100px 0px' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-[1408px] mx-auto bg-[#020609] rounded-[30px] pt-12 sm:pt-16 lg:pt-[80px] pb-10 sm:pb-12 lg:pb-[51px] px-6 sm:px-12 lg:px-16 flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-12 select-none ${className}`}
    >
      {/* Headline EGR1P */}
      <h2
        data-name="Ready to work with us ?"
        className="text-white text-[28px] min-[380px]:text-[36px] sm:text-[54px] lg:text-[72px] xl:text-[80px] font-semibold leading-[1.3] tracking-[-1.5px] lg:tracking-[-2.4px] font-sans text-center lg:text-left"
      >
        Ready to work with us ?
      </h2>

      {/* Frame 427320691: Get Started button */}
      <button
        type="button"
        onClick={onGetStarted}
        className="group h-[56px] px-8 rounded-[70px] bg-white flex items-center justify-center gap-6 sm:gap-[42px] shrink-0 text-[#010205] select-none transition-all duration-200 hover:bg-brand-lime active:scale-[0.98] cursor-pointer"
      >
        <span className="font-sans font-bold text-[16px] tracking-[-0.32px] whitespace-nowrap">
          Get Started
        </span>
        <ArrowRight className="w-6 h-6 stroke-[2] transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
};

export default CtaBanner;
