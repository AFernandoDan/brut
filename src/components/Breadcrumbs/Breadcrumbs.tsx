import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ className, items, ...props }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('brut-breadcrumbs', className)} {...props}>
      {items.map((item, index) => (
        <span key={index} className="brut-breadcrumbs__item">
          {index > 0 ? <span className="brut-breadcrumbs__separator">/</span> : null}
          {item.href && !item.current ? <a href={item.href}>{item.label}</a> : <span aria-current={item.current ? 'page' : undefined}>{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}