import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Slider({ className, label, ...props }: SliderProps) {
  return (
    <label className={cn('brut-slider', className)}>
      {label ? <span className="brut-slider__label">{label}</span> : null}
      <input type="range" {...props} />
    </label>
  );
}