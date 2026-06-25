import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
}

export function Tooltip({ className, label, ...props }: TooltipProps) {
  return (
    <div className={cn('brut-tooltip', className)} role="tooltip" {...props}>
      {label}
    </div>
  );
}