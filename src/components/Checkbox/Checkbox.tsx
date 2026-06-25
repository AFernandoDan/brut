import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Checkbox({ className, label, id, ...props }: CheckboxProps) {
  const resolvedId = id ?? props.name;

  return (
    <label className={cn('brut-checkbox', className)} htmlFor={resolvedId}>
      <span className={cn('brut-checkbox__control', props.checked && 'brut-checkbox__control--checked')} />
      <input id={resolvedId} type="checkbox" className="sr-only" {...props} />
      {label ? <span className="brut-checkbox__label">{label}</span> : null}
    </label>
  );
}