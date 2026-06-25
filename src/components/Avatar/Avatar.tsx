import type { ImgHTMLAttributes, HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  size?: AvatarSize;
  src?: string;
  alt?: string;
  initials?: string;
  imgProps?: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>;
}

const sizeClass: Record<AvatarSize, string> = {
  sm: 'brut-avatar--sm',
  md: 'brut-avatar--md',
  lg: 'brut-avatar--lg'
};

export function Avatar({ className, size = 'md', src, alt = '', initials, imgProps, ...props }: AvatarProps) {
  return (
    <span className={cn('brut-avatar', sizeClass[size], className)} aria-label={alt || initials} {...props}>
      {src ? <img className="brut-avatar__image" src={src} alt={alt} {...imgProps} /> : initials}
    </span>
  );
}