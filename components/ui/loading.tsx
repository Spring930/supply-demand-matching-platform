import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// 加载器变体定义
const loadingVariants = cva(
  'inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
  {
    variants: {
      variant: {
        default: 'border-gray-300 border-r-transparent',
        primary: 'border-accent-200 border-r-transparent border-t-accent-500',
        secondary: 'border-secondary-200 border-r-transparent border-t-secondary-500',
        white: 'border-gray-200 border-r-transparent border-t-white',
      },
      size: {
        xs: 'h-3 w-3 border',
        sm: 'h-4 w-4 border',
        default: 'h-5 w-5 border-2',
        lg: 'h-6 w-6 border-2',
        xl: 'h-8 w-8 border-2',
        '2xl': 'h-12 w-12 border-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const loadingContainerVariants = cva(
  'flex items-center justify-center',
  {
    variants: {
      layout: {
        inline: 'inline-flex',
        block: 'flex',
        overlay: 'fixed inset-0 bg-white/80 backdrop-blur-sm z-50',
      },
      padding: {
        none: '',
        sm: 'p-2',
        default: 'p-4',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      layout: 'block',
      padding: 'default',
    },
  }
);

export interface LoadingProps
  extends VariantProps<typeof loadingVariants>,
    VariantProps<typeof loadingContainerVariants> {
  className?: string;
  text?: string;
  overlay?: boolean;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ variant, size, layout, padding, className, text, overlay = false, ...props }, ref) => {
    const containerLayout = overlay ? 'overlay' : layout;

    return (
      <div
        ref={ref}
        className={cn(loadingContainerVariants({ layout: containerLayout, padding }), className)}
        {...props}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className={cn(loadingVariants({ variant, size }))} />
          {text && (
            <p className="text-sm text-gray-600 animate-pulse">{text}</p>
          )}
        </div>
      </div>
    );
  }
);

Loading.displayName = 'Loading';

// 骨架屏组件
const SkeletonVariants = cva(
  'animate-pulse bg-gray-200 rounded',
  {
    variants: {
      variant: {
        default: 'bg-gray-200',
        light: 'bg-gray-100',
        dark: 'bg-gray-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SkeletonVariants> {
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, width, height, rounded = true, style, ...props }, ref) => {
    const skeletonStyle = {
      width,
      height,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={cn(
          SkeletonVariants({ variant }),
          rounded ? 'rounded-custom' : 'rounded-none',
          className
        )}
        style={skeletonStyle}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

// 页面加载组件
export interface PageLoadingProps {
  text?: string;
  size?: VariantProps<typeof loadingVariants>['size'];
}

const PageLoading: React.FC<PageLoadingProps> = ({ 
  text = '正在加载...', 
  size = 'xl' 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className={cn(loadingVariants({ variant: 'primary', size }))} />
        <p className="mt-4 text-gray-600 animate-pulse">{text}</p>
      </div>
    </div>
  );
};

// 按钮加载状态
export interface ButtonLoadingProps {
  size?: VariantProps<typeof loadingVariants>['size'];
  variant?: VariantProps<typeof loadingVariants>['variant'];
}

const ButtonLoading: React.FC<ButtonLoadingProps> = ({ 
  size = 'sm', 
  variant = 'white' 
}) => {
  return <div className={cn(loadingVariants({ variant, size }))} />;
};

export { Loading, Skeleton, PageLoading, ButtonLoading };