import type { TextareaHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Textarea({ className, label, helperText, error, id, ...props }: TextareaProps) {
  const resolvedId = id ?? props.name;

  return (
    <label className={cn('brut-textarea', className)} htmlFor={resolvedId}>
      {label ? <span className="brut-field__label">{label}</span> : null}
      <textarea
        id={resolvedId}
        className={cn('brut-textarea__input', error && 'brut-textarea__input--error')}
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