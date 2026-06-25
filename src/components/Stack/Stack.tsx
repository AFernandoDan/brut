import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export type StackDirection = 'row' | 'column';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'between';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: StackDirection;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
}

const gapClass: Record<NonNullable<StackProps['gap']>, string> = {
  xs: 'brut-stack--gap-xs',
  sm: 'brut-stack--gap-sm',
  md: 'brut-stack--gap-md',
  lg: 'brut-stack--gap-lg'
};

export function Stack({
  className,
  direction = 'column',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        'brut-stack',
        direction === 'row' ? 'brut-stack--row' : 'brut-stack--column',
        gapClass[gap],
        `brut-stack--align-${align}`,
        `brut-stack--justify-${justify}`,
        wrap && 'brut-stack--wrap',
        className
      )}
      {...props}
    />
  );
}