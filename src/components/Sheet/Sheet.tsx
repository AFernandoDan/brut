import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
}

export function Sheet({ className, heading, children, ...props }: SheetProps) {
  return (
    <div className={cn('brut-sheet', className)} {...props}>
      {heading ? <div className="brut-card__title">{heading}</div> : null}
      {children}
    </div>
  );
}