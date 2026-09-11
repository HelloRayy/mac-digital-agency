import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BlogHeader } from './BlogHeader';
import { BlogCard, BlogPostItem } from './BlogCard';

const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'boost-business',
    tagColor: '#45a7de',
    readTime: '5 min read',
    title: 'How a Digital Marketing Agency Can Boost Your Business',
    excerpt:
      'We are the top digital marketing agency for branding corp. We offer a full rang engine ....',
    isActive: false,
  },
  {
    id: 'trends-strategies',
    tagColor: '#ea5f38',
    readTime: '5 min read',
    title: 'The Latest Trends and Strategies with a Digital Marketing Agency',
    excerpt:
      'Working with this digital marketing agency has been a true partnership. They have taken the time to understand our business and industry',
    isActive: false,
  },
  {
    id: 'maximize-roi',
    tagColor: '#6a26f1',
    readTime: '5 min read',
    title: 'Maximizing ROI with the Expertise of a Digital Marketing Agency',
    excerpt:
      'What sets this digital marketing agency apart is their commitment to transparency and collaboration. They keep us informed every step of the way,',
    isActive: false,
  },
];

interface BlogSectionProps {
  className?: string;
  onSeeMore?: () => void;
  onReadPost?: (id: string) => void;
}

/**
 * Section Desktop - 15 - Cloned 1:1 from pen.dev canvas node kWLz3
 * - Background: #fafafa
 * - Padding: py-16 sm:py-20 lg:py-[70px] px-6 sm:px-12 lg:px-20
 * - Max Width: 1280px inner container
 * - Header: Frame 427321487 (Headline + Description + "See more" button)
 * - Cards: Frame 427321496 (3 columns, 24px gap)
 */
export const BlogSection: React.FC<BlogSectionProps> = ({
  className = '',
  onSeeMore,
  onReadPost,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="blog"
      data-name="Desktop - 15"
      className={`w-full bg-[#fafafa] py-16 sm:py-20 lg:py-[70px] px-6 sm:px-12 lg:px-20 ${className}`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 lg:gap-[60px]">
        {/* Frame 427321487: Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <BlogHeader onSeeMore={onSeeMore} />
        </motion.div>

        {/* Frame 427321496: 3 Blog Cards Row */}
        <div
          data-name="Frame 427321496"
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <BlogCard
                post={{
                  ...post,
                  isActive: activeId === post.id,
                  onReadMore: () => {
                    setActiveId((prev) => (prev === post.id ? null : post.id));
                    onReadPost?.(post.id);
                  },
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
