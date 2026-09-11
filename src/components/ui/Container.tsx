import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full', className)} {...props}>
      {children}
    </div>
  );
};
