import React, { useState } from 'react';
import { FaqHeader } from './FaqHeader';
import { FaqItem, FaqItemData } from './FaqItem';

const FAQ_ITEMS: FaqItemData[] = [
  {
    id: 'why-digital-marketing',
    question: 'Why is digital marketing important for my business?',
    answer:
      'Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.',
  },
  {
    id: 'improve-visibility',
    question: "How can digital marketing help improve my website's visibility?",
    answer:
      "Through a combination of Search Engine Optimization (SEO), high-value content creation, technical performance tuning, and targeted digital campaigns, we ensure your website ranks organically for relevant high-intent keywords and reaches your core target audience effectively.",
  },
  {
    id: 'results-timeline',
    question: 'How long does it take to see results from digital marketing efforts?',
    answer:
      'While paid advertising campaigns (PPC and Paid Social) can generate targeted traffic and qualified leads within days, compounding organic strategies like SEO and brand authority typically show substantial, scalable results within 3 to 6 months of continuous optimization.',
  },
  {
    id: 'measure-success',
    question: 'How do you measure the success of digital marketing campaigns?',
    answer:
      'We measure success using transparent, high-impact business metrics including Conversion Rate (CVR), Return on Ad Spend (ROAS), Customer Acquisition Cost (CAC), organic ranking momentum, and direct revenue attribution tracked through comprehensive real-time dashboards.',
  },
];

interface FaqSectionProps {
  className?: string;
  onMoreQuestions?: () => void;
  onContactUs?: () => void;
}

/**
 * Section Frame 427321502 - Cloned 1:1 from pen.dev canvas node newIL
 * - Outer Background: #f3f3f3 with 16px padding
 * - Inner White Card (Desktop - 16 / naqP3): rounded-[28px], bg-white, py-[66px] px-6 sm:px-12 lg:px-[80px]
 * - Two column layout with 90px gap:
 *   - Left: FaqHeader (Title, Description, Actions)
 *   - Right: FaqAccordion list (4 items, top/bottom black borders)
 */
export const FaqSection: React.FC<FaqSectionProps> = ({
  className = '',
  onMoreQuestions,
  onContactUs,
}) => {
  // First item open by default as designed in pen.dev (faqOpen)
  const [openId, setOpenId] = useState<string | null>('why-digital-marketing');

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      data-name="Frame 427321502"
      className={`w-full bg-[#fafafa] py-4 sm:py-6 px-2 sm:px-4 ${className}`}
    >
      {/* Desktop - 16: Inner White Rounded Card */}
      <div
        data-name="Desktop - 16"
        className="max-w-[1408px] mx-auto bg-white rounded-[28px] py-14 sm:py-16 lg:py-[66px] px-6 sm:px-12 lg:px-[80px] flex flex-col lg:flex-row items-start justify-between gap-12 sm:gap-16 lg:gap-[90px] lg:min-h-[632px] transition-all duration-300"
      >
        {/* Left Column: Header + Actions */}
        <FaqHeader
          onMoreQuestions={onMoreQuestions}
          onContactUs={onContactUs}
          className="w-full lg:w-1/2 shrink-0"
        />

        {/* Right Column: Accordion List */}
        <div
          data-name="Frame 427321500"
          className="w-full lg:w-1/2 flex flex-col"
        >
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
