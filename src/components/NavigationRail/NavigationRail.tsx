import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface NavigationRailProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function NavigationRail({ className, children, ...props }: NavigationRailProps) {
  return (
    <aside className={cn('brut-rail', className)} {...props}>
      {children}
    </aside>
  );
}