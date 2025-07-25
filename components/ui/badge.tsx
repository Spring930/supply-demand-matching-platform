import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// 徽章变体定义
const badgeVariants = cva(
  'badge inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        primary: 'badge-primary bg-accent-100 text-accent-700 hover:bg-accent-200',
        secondary: 'badge-secondary bg-secondary-100 text-secondary-700 hover:bg-secondary-200',
        success: 'bg-green-100 text-green-700 hover:bg-green-200',
        warning: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
        error: 'bg-red-100 text-red-700 hover:bg-red-200',
        outline: 'border border-gray-200 text-gray-700 hover:bg-gray-50',
        ghost: 'text-gray-700 hover:bg-gray-100',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-xs',
        default: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
      rounded: {
        default: 'rounded-md',
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'full',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, rounded, icon, removable, onRemove, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, rounded }), className)}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className="flex-shrink-0 ml-1 h-4 w-4 rounded-full hover:bg-black/10 flex items-center justify-center"
          >
            <span className="text-xs">×</span>
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };