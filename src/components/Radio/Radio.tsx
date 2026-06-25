import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Radio({ className, label, id, ...props }: RadioProps) {
  const resolvedId = id ?? props.name;

  return (
    <label className={cn('brut-radio', className)} htmlFor={resolvedId}>
      <span className={cn('brut-radio__control', props.checked && 'brut-radio__control--checked')} />
      <input id={resolvedId} type="radio" className="sr-only" {...props} />
      {label ? <span className="brut-radio__label">{label}</span> : null}
    </label>
  );
}