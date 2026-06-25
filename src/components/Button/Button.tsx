import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'brut-button--sm',
  md: 'brut-button--md',
  lg: 'brut-button--lg'
};

const variantClass: Record<ButtonVariant, string> = {
  primary: 'brut-button--primary',
  secondary: 'brut-button--secondary',
  ghost: 'brut-button--ghost'
};

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  leadingIcon,
  trailingIcon,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn('brut-button', variantClass[variant], sizeClass[size], className)}
      {...props}
    >
      {leadingIcon ? <span className="brut-button__icon">{leadingIcon}</span> : null}
      <span className="brut-button__label">{children}</span>
      {trailingIcon ? <span className="brut-button__icon">{trailingIcon}</span> : null}
    </button>
  );
}