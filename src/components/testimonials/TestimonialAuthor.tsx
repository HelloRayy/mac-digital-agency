import React from 'react';

interface TestimonialAuthorProps {
  name: string;
  role: string;
  avatarUrl?: string;
  className?: string;
}

/**
 * Testimonial Author component - Cloned 1:1 from pen.dev node Frame 427321510
 * - Avatar: 70x70px rounded-full with 2px stroke #ffffff80
 * - Name (fqVZe): 20px font-bold, color #010205, leading-[1.8]
 * - Role (o7SS9): 16px font-medium, color #878c91, leading-[1.8]
 * - Gap: 24px
 */
export const TestimonialAuthor: React.FC<TestimonialAuthorProps> = ({
  name,
  role,
  avatarUrl,
  className = '',
}) => {
  return (
    <div
      data-name="Frame 427321510"
      className={`flex items-center gap-4 sm:gap-6 ${className}`}
    >
      {/* Avatar (Ellipse 4 - 70x70px) */}
      <div
        data-name="Ellipse 4"
        className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden shrink-0 border-2 border-white/50 bg-[#2a2d34] shadow-sm"
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#010205] text-white font-bold text-xl">
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Frame 427321509: Name & Role */}
      <div data-name="Frame 427321509" className="flex flex-col justify-center">
        <h3
          data-name="Author Name"
          className="text-[#010205] text-[18px] sm:text-[20px] font-bold leading-[1.8] font-sans"
        >
          {name}
        </h3>
        <p
          data-name="Author Role"
          className="text-[#878c91] text-[14px] sm:text-[16px] font-medium leading-[1.8] font-sans"
        >
          {role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialAuthor;
