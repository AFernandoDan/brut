import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface TabsItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  items: TabsItem[];
  value: string;
  onValueChange: (value: string) => void;
  size?: 'sm' | 'md';
}

export function Tabs({ className, items, value, onValueChange, size = 'md', ...props }: TabsProps) {
  const activeItem = items.find((item) => item.id === value) ?? items[0];

  return (
    <div className={cn('brut-tabs', className)} {...props}>
      <div className="brut-tabs__list" role="tablist" aria-label="Brut tabs">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={value === item.id}
            disabled={item.disabled}
            onClick={() => onValueChange(item.id)}
            className={cn('brut-tab', `brut-tab--${size}`, value === item.id && 'brut-tab--active')}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="brut-tabs__panel" role="tabpanel">
        {activeItem?.content}
      </div>
    </div>
  );
}