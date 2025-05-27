import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={cn('container max-w-screen-xl px-4 py-8 md:py-12', className)}>
      {children}
    </div>
  );
}
