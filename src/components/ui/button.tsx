// src/components/ui/Button.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const baseStyles = "px-8 py-3 rounded-full transition-colors";
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-white text-white hover:bg-white/10"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';