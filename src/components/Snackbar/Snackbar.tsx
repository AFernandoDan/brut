import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  action?: ReactNode;
}

export function Snackbar({ className, action, children, ...props }: SnackbarProps) {
  return (
    <div className={cn('brut-snackbar', className)} role="status" {...props}>
      <div>{children}</div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}