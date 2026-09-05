import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'warning';
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  icon,
  className = '',
  style,
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'accent':
        return 'neu-badge-accent';
      case 'success':
        return 'neu-badge';
      default:
        return 'neu-badge';
    }
  };

  return (
    <span className={`${getVariantStyle()} ${className}`.trim()} style={style}>
      {icon && <span style={{ display: 'inline-flex', fontSize: '0.9em' }}>{icon}</span>}
      {children}
    </span>
  );
};
