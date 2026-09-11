import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'lime' | 'dark' | 'outline' | 'active';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'outline',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors';

  const variants = {
    lime: 'bg-brand-lime/10 text-brand-lime border border-brand-lime/30',
    dark: 'bg-brand-card text-brand-subtext border border-brand-border',
    outline: 'border border-white/15 text-brand-subtext',
    active: 'bg-brand-lime text-black border border-brand-lime font-bold',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
