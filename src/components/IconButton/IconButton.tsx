import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  size?: 'sm' | 'md';
}

export function IconButton({ className, icon, label, size = 'md', type = 'button', ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn('brut-button brut-icon-button', size === 'sm' && 'brut-button--sm', className)}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
}