import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export type BadgeTone = 'default' | 'inverse' | 'accent' | 'success' | 'danger';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const toneClass: Record<BadgeTone, string> = {
  default: 'brut-badge--default',
  inverse: 'brut-badge--inverse',
  accent: 'brut-badge--accent',
  success: 'brut-badge--success',
  danger: 'brut-badge--danger'
};

export function Badge({ className, tone = 'default', children, ...props }: BadgeProps) {
  return (
    <span className={cn('brut-badge', toneClass[tone], className)} {...props}>
      {children}
    </span>
  );
}