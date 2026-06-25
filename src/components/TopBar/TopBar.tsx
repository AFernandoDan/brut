import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface TopBarProps extends HTMLAttributes<HTMLElement> {
  heading: ReactNode;
  actions?: ReactNode;
}

export function TopBar({ className, heading, actions, ...props }: TopBarProps) {
  return (
    <header className={cn('brut-topbar', className)} {...props}>
      <div className="brut-topbar__title">{heading}</div>
      {actions ? <div>{actions}</div> : null}
    </header>
  );
}