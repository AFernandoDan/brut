import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function TextField({ className, label, helperText, error, id, ...props }: TextFieldProps) {
  const resolvedId = id ?? props.name;

  return (
    <label className={cn('brut-field', className)} htmlFor={resolvedId}>
      {label ? <span className="brut-field__label">{label}</span> : null}
      <input
        id={resolvedId}
        className={cn('brut-field__input', error && 'brut-field__input--error')}
        aria-invalid={Boolean(error)}
        aria-describedby={helperText || error ? `${resolvedId}-hint` : undefined}
        {...props}
      />
      {error ? (
        <span id={`${resolvedId}-hint`} className="brut-field__message brut-field__message--error">
          {error}
        </span>
      ) : helperText ? (
        <span id={`${resolvedId}-hint`} className="brut-field__message">
          {helperText}
        </span>
      ) : null}
    </label>
  );
}