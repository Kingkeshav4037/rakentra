import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  lightBackground?: boolean;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  lightBackground = true,
  align = 'center',
}) => {
  return (
    <div className={`section-header align-${align} ${lightBackground ? 'bg-light-text' : 'bg-dark-text'}`}>
      {badge && (
        <span className={`badge ${lightBackground ? 'badge-accent' : ''} section-badge`}>
          {badge}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
};

export default SectionHeader;
