import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// 按钮变体定义
const buttonVariants = cva(
  'btn inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'btn-primary bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500',
        secondary: 'btn-secondary bg-secondary-500 text-white hover:bg-secondary-600 focus-visible:ring-secondary-500',
        outline: 'btn-outline border border-accent-500 text-accent-600 hover:bg-accent-50 focus-visible:ring-accent-500',
        ghost: 'text-accent-600 hover:bg-accent-50 hover:text-accent-700 focus-visible:ring-accent-500',
        link: 'text-accent-600 underline-offset-4 hover:underline focus-visible:ring-accent-500',
        destructive: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        default: 'h-10 px-4 py-2',
        lg: 'h-12 px-8',
        xl: 'h-14 px-10 text-base',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-custom',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      rounded: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      loading = false,
      loadingText,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <div className="spinner mr-2" />
        )}
        {loading && loadingText ? loadingText : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };