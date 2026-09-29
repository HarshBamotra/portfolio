import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn('section-header', className)}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
};
