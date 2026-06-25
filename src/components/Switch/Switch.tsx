import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Switch({ className, label, id, ...props }: SwitchProps) {
  const resolvedId = id ?? props.name;

  return (
    <label className={cn('brut-switch', props.checked && 'brut-switch--checked', className)} htmlFor={resolvedId}>
      {label ? <span className="brut-switch__label">{label}</span> : null}
      <span className="brut-switch__track">
        <span className="brut-switch__thumb" />
      </span>
      <input id={resolvedId} type="checkbox" className="sr-only" {...props} />
    </label>
  );
}