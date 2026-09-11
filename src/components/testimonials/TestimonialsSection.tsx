import React, { useState } from 'react';
import { TestimonialQuote } from './TestimonialQuote';
import { TestimonialAuthor } from './TestimonialAuthor';
import { TestimonialControls } from './TestimonialControls';

export interface TestimonialItem {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  avatarUrl?: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'basecamp',
    quote:
      'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
    authorName: 'Michael Kaizer',
    authorRole: 'CEO of Basecamp Corp',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'lancer',
    quote:
      'Their growth strategies and intuitive UI/UX design transformed our conversion metrics within the first 90 days. Working with them feels like having an elite in-house marketing squad.',
    authorName: 'Sophia Reynolds',
    authorRole: 'Head of Marketing at Lancer',
    avatarUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'ai-wave',
    quote:
      'The attention to detail and data-driven approach allowed us to scale user acquisition 4x while cutting our CAC in half. Truly one of the best partners we have ever collaborated with.',
    authorName: 'Marcus Vance',
    authorRole: 'Founder & CTO at AiWave',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'stripe-partner',
    quote:
      'From brand positioning to high-converting funnel execution, their team delivered beyond expectations. Our product launch was a monumental success thanks to their campaigns.',
    authorName: 'Elena Rostova',
    authorRole: 'VP Product at FinFlow',
    avatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'hyperion',
    quote:
      'Exceptional creativity matched with rigorous analytics. They gave our brand a modern, authoritative voice that resonated deeply with our enterprise clients.',
    authorName: 'David Chen',
    authorRole: 'Chief Strategy Officer at Hyperion',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
  },
];

interface TestimonialsSectionProps {
  className?: string;
}

/**
 * Section Desktop - 17 - Cloned 1:1 from pen.dev canvas node xkDqq
 * - Container: max-w-[1440px] px-6 sm:px-12 lg:px-20 py-16 lg:py-[115px]
 * - Background: #fafafa
 * - Layout: vertical, gap: 74px (Frame 427321512)
 * - Quote: 36px font-semibold, leading-[1.6], letterSpacing: -1.08px
 * - Bottom Row: Frame 427321511 (justify-between items-center)
 * - Author: Frame 427321510 (70px circle, Michael Kaizer, CEO of Basecamp Corp)
 * - Controls: Frame 427321508 (Prev pill, 01/05, Next solid black pill)
 */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <section
      id="testimonials"
      data-name="Desktop - 17"
      className={`w-full bg-[#fafafa] py-16 sm:py-20 lg:py-[115px] px-6 sm:px-12 lg:px-20 ${className}`}
    >
      {/* Frame 427321512: Main section container (1280px max-width, gap: 74px) */}
      <div
        data-name="Frame 427321512"
        className="max-w-[1280px] mx-auto flex flex-col gap-10 sm:gap-14 lg:gap-[74px]"
      >
        {/* Quote Top: Frame / Text PMYb9 */}
        <TestimonialQuote quote={currentTestimonial.quote} />

        {/* Bottom Row: Frame 427321511 */}
        <div
          data-name="Frame 427321511"
          className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-6"
        >
          {/* Author info: Frame 427321510 */}
          <TestimonialAuthor
            name={currentTestimonial.authorName}
            role={currentTestimonial.authorRole}
            avatarUrl={currentTestimonial.avatarUrl}
          />

          {/* Carousel controls: Frame 427321508 */}
          <TestimonialControls
            currentIndex={currentIndex}
            totalCount={TESTIMONIALS_DATA.length}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
