import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'normal' | 'primary' | 'inset' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'normal',
  size = 'md',
  active = false,
  icon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'neu-button-primary';
      case 'icon':
        return 'neu-icon-button';
      case 'inset':
        return 'neu-button active';
      case 'normal':
      default:
        return 'neu-button';
    }
  };

  const getSizeStyle = () => {
    if (variant === 'icon') {
      if (size === 'sm') return { width: 32, height: 32, fontSize: '0.8rem' };
      if (size === 'lg') return { width: 48, height: 48, fontSize: '1.2rem' };
      return { width: 40, height: 40 };
    }
    if (size === 'sm') return { padding: '0.35rem 0.75rem', fontSize: '0.825rem' };
    if (size === 'lg') return { padding: '0.8rem 1.6rem', fontSize: '1.05rem' };
    return {};
  };

  return (
    <button
      className={`${getVariantClass()} ${active ? 'active' : ''} ${className}`.trim()}
      style={getSizeStyle()}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="neu-btn-icon" style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </button>
  );
};
