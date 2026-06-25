import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
}

export function Card({ className, eyebrow, heading, description, footer, children, ...props }: CardProps) {
  return (
    <article className={cn('brut-card', className)} {...props}>
      {eyebrow ? <div className="brut-card__eyebrow">{eyebrow}</div> : null}
      {heading ? <h3 className="brut-card__title">{heading}</h3> : null}
      {description ? <p className="brut-card__description">{description}</p> : null}
      {children ? <div className="brut-card__content">{children}</div> : null}
      {footer ? <footer className="brut-card__footer">{footer}</footer> : null}
    </article>
  );
}