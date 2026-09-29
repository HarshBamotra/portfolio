import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverable = true,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('card', hoverable && 'card-hover', className)}
      {...props}
    >
      {children}
    </div>
  );
};
