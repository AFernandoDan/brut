import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function List({ className, children, ...props }: ListProps) {
  return (
    <div className={cn('brut-list', className)} role="list" {...props}>
      {children}
    </div>
  );
}

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  meta?: ReactNode;
}

export function ListItem({ className, heading, meta, ...props }: ListItemProps) {
  return (
    <div className={cn('brut-list-item', className)} role="listitem" {...props}>
      <div className="brut-list-item__title">{heading}</div>
      {meta ? <div className="brut-list-item__meta">{meta}</div> : null}
    </div>
  );
}