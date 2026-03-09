import { type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/helpers';
import './Button.css';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn('btn', `btn--${variant}`, `btn--${size}`, className)}
      {...props}
    >
      {children}
    </button>
  );
}
