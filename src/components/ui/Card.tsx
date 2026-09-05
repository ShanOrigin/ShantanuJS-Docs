import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'sunken' | 'interactive' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'surface',
  size = 'md',
  children,
  className = '',
  style,
  ...props
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'sunken':
        return size === 'sm' ? 'neu-inset-sm' : 'neu-inset';
      case 'interactive':
        return 'neu-card-interactive';
      case 'glass':
        return 'neu-glass';
      case 'surface':
      default:
        if (size === 'sm') return 'neu-surface-sm';
        if (size === 'lg') return 'neu-surface-lg';
        return 'neu-surface';
    }
  };

  const getPaddingStyle = () => {
    switch (size) {
      case 'sm':
        return { padding: 'var(--space-3)' };
      case 'lg':
        return { padding: 'var(--space-8)' };
      case 'md':
      default:
        return { padding: 'var(--space-6)' };
    }
  };

  return (
    <div
      className={`${getVariantClass()} ${className}`.trim()}
      style={{ ...getPaddingStyle(), ...style }}
      {...props}
    >
      {children}
    </div>
  );
};
