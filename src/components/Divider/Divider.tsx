import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientation;
}

export function Divider({ className, orientation = 'horizontal', ...props }: DividerProps) {
  return <hr className={cn('brut-divider', `brut-divider--${orientation}`, className)} {...props} />;
}