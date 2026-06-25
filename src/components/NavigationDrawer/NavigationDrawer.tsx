import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface NavigationDrawerProps extends HTMLAttributes<HTMLElement> {
  heading?: ReactNode;
}

export function NavigationDrawer({ className, heading, children, ...props }: NavigationDrawerProps) {
  return (
    <aside className={cn('brut-drawer', className)} {...props}>
      {heading ? <div className="brut-topbar__title">{heading}</div> : null}
      {children}
    </aside>
  );
}