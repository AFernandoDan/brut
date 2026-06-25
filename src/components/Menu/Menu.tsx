import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Menu({ className, children, ...props }: MenuProps) {
  return (
    <div className={cn('brut-menu', className)} role="menu" {...props}>
      {children}
    </div>
  );
}

export interface MenuItemProps extends HTMLAttributes<HTMLButtonElement> {
  label: ReactNode;
}

export function MenuItem({ className, label, ...props }: MenuItemProps) {
  return (
    <button type="button" className={cn('brut-menu__item', className)} role="menuitem" {...props}>
      {label}
    </button>
  );
}