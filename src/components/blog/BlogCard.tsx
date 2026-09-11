import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface BlogPostItem {
  id: string;
  tagColor: string;
  readTime: string;
  title: string;
  excerpt: string;
  isActive?: boolean;
  onReadMore?: () => void;
}

interface BlogCardProps {
  post: BlogPostItem;
  className?: string;
}

/**
 * Blog Card Component - Cloned 1:1 from pen.dev nodes Frame 427320848/849/850
 * - Background: #ffffff, rounded-[20px]
 * - Padding: 32px (p-8)
 * - Tag row: 14x14 colored dot + "5 min read" (14px font-medium #878c91)
 * - Title: 26px font-semibold, leading-[1.5], tracking-[-0.78px], #010205
 * - Excerpt: 14px font-medium, leading-[1.6], #878c91, max-w-[220px]
 * - Button: Pill rounded-[70px] (solid black or border black) with 24x24 arrow
 */
export const BlogCard: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  return (
    <article
      data-name="Blog Card"
      className={`w-full bg-white rounded-[20px] p-6 sm:p-8 flex flex-col justify-between gap-10 sm:gap-14 select-none ${className}`}
    >
      {/* Frame 427321497: Top meta + Title */}
      <div className="flex flex-col gap-6">
        {/* Meta row: Colored dot + Read time */}
        <div className="flex items-center justify-between">
          <div
            className="w-[14px] h-[14px] rounded-full shrink-0"
            style={{ backgroundColor: post.tagColor }}
          />
          <span className="font-sans font-medium text-[14px] text-[#878c91] leading-[1.6]">
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-sans font-semibold text-[22px] sm:text-[26px] text-[#010205] leading-[1.4] sm:leading-[1.5] tracking-[-0.66px] sm:tracking-[-0.78px]">
          {post.title}
        </h3>
      </div>

      {/* Frame 427321503: Excerpt + Arrow Button */}
      <div className="flex items-center justify-between gap-6 pt-2">
        <p className="font-sans font-medium text-[14px] text-[#878c91] leading-[1.6] max-w-[220px] line-clamp-3">
          {post.excerpt}
        </p>

        <button
          type="button"
          onClick={post.onReadMore}
          aria-label={`Read more about ${post.title}`}
          className={`w-[72px] sm:w-[88px] h-[52px] sm:h-[56px] rounded-[70px] flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer active:scale-[0.98] group/arrow ${
            post.isActive
              ? 'bg-[#010205] text-white hover:bg-[#1a1d24]'
              : 'border border-[#010205] text-[#010205] hover:bg-[#010205] hover:text-white'
          }`}
        >
          <ArrowRight className="w-6 h-6 stroke-[2] transition-transform duration-200 group-hover/arrow:translate-x-1" />
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
