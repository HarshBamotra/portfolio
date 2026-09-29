import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ className, children, ...props }) => {
  return (
    <span className={cn('badge', className)} {...props}>
      {children}
    </span>
  );
};
