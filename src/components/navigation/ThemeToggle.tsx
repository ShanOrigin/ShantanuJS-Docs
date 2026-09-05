import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="neu-icon-button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={18} style={{ color: '#fbbf24', transition: 'transform var(--transition-bounce)' }} />
      ) : (
        <Moon size={18} style={{ color: '#6366f1', transition: 'transform var(--transition-bounce)' }} />
      )}
    </button>
  );
};
