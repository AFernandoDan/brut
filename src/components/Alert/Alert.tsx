import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export type AlertTone = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  tone?: AlertTone;
  heading?: ReactNode;
  action?: ReactNode;
}

const toneClass: Record<AlertTone, string> = {
  info: 'brut-alert--info',
  success: 'brut-alert--success',
  warning: 'brut-alert--warning',
  danger: 'brut-alert--danger'
};

export function Alert({ className, tone = 'info', heading, action, children, ...props }: AlertProps) {
  return (
    <div className={cn('brut-alert', toneClass[tone], className)} role={tone === 'danger' ? 'alert' : 'status'} {...props}>
      {heading ? <h4 className="brut-alert__title">{heading}</h4> : null}
      <div className="brut-alert__body">{children}</div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}