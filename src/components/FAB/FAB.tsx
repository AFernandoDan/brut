import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface FABProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
}

export function FAB({ className, icon, label, type = 'button', ...props }: FABProps) {
  return (
    <button type={type} className={cn('brut-fab', className)} aria-label={label} {...props}>
      {icon}
    </button>
  );
}