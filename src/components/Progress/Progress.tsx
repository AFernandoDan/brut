import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
}

export function Progress({ className, value, max = 100, label, showValue = true, ...props }: ProgressProps) {
  const normalized = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div className={cn('brut-progress', className)} {...props}>
      {(label || showValue) ? (
        <div className="brut-progress__label">
          {label ? <span>{label}</span> : <span>Progress</span>}
          {showValue ? <span>{Math.round(normalized)}%</span> : null}
        </div>
      ) : null}
      <div className="brut-progress__track" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div className="brut-progress__bar" style={{ width: `${normalized}%` }} />
      </div>
    </div>
  );
}