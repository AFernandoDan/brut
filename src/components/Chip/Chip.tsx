import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export type ChipTone = 'default' | 'accent' | 'warning' | 'danger';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: ChipTone;
}

const toneClass: Record<ChipTone, string> = {
  default: 'brut-chip--default',
  accent: 'brut-chip--accent',
  warning: 'brut-chip--warning',
  danger: 'brut-chip--danger'
};

export function Chip({ className, tone = 'default', children, ...props }: ChipProps) {
  return (
    <span className={cn('brut-chip', toneClass[tone], className)} {...props}>
      {children}
    </span>
  );
}