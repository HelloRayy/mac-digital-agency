import React from 'react';
import { motion } from 'framer-motion';
import { AboutHeader } from './AboutHeader';
import { AboutStatsCard } from './AboutStatsCard';
import { AboutVideoCard } from './AboutVideoCard';

interface AboutSectionProps {
  className?: string;
  onPlayVideo?: () => void;
}

/**
 * Section Desktop - 14 - Cloned 1:1 from pen.dev canvas node tWqI8
 * - Container: max-w-[1440px] px-6 md:px-12 lg:px-[80px]
 * - Header (Frame 427321487): 1280px width, 73px gap
 * - Cards Row (Frame 427321492): 24px gap
 *   - Card 1 (Group 427320841): 438px × 382px Stats Card
 *   - Card 2 (Group 427320842): 818px × 382px Video Showcase Card
 *   - Badge (Group 427320837): 163px Lime Play Button
 */
export const AboutSection: React.FC<AboutSectionProps> = ({
  className = '',
  onPlayVideo,
}) => {
  return (
    <section
      id="about"
      data-name="Desktop - 14"
      className={`w-full bg-white relative py-[60px] lg:py-[80px] ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px] flex flex-col">
        {/* Frame 427321487: Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <AboutHeader />
        </motion.div>

        {/* Frame 427321492: Cards Row (Stats + Video Card) */}
        <div
          data-name="Frame 427321492"
          className="mt-[48px] lg:mt-[72px] flex flex-col lg:flex-row items-center gap-6 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-auto"
          >
            <AboutStatsCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3, margin: '0px 0px -100px 0px' }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:flex-1"
          >
            <AboutVideoCard onPlayClick={onPlayVideo} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
