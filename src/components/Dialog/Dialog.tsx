import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
}

export function Dialog({ className, heading, children, ...props }: DialogProps) {
  return (
    <div className={cn('brut-dialog', className)} role="dialog" aria-modal="true" {...props}>
      {heading ? <div className="brut-card__title">{heading}</div> : null}
      {children}
    </div>
  );
}