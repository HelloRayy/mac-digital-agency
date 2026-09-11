import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer';

  const variants = {
    primary:
      'bg-brand-lime text-black font-semibold hover:bg-brand-limeHover shadow-sm hover:shadow-[0_0_20px_rgba(153,234,72,0.3)]',
    secondary:
      'bg-brand-surface text-white hover:bg-brand-cardHover border border-brand-border hover:border-brand-lime/40',
    outline:
      'border border-white/20 text-white hover:border-brand-lime hover:text-brand-lime bg-transparent',
    ghost:
      'text-brand-subtext hover:text-white hover:bg-white/5 bg-transparent',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
