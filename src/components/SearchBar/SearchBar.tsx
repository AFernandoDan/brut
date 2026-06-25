import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  leadingIcon?: React.ReactNode;
}

export function SearchBar({ className, leadingIcon, ...props }: SearchBarProps) {
  return (
    <label className={cn('brut-searchbar', className)}>
      {leadingIcon ? <span>{leadingIcon}</span> : null}
      <input className="brut-searchbar__input" type="search" {...props} />
    </label>
  );
}