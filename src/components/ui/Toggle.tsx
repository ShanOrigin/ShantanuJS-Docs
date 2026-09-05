import React from 'react';

export interface ToggleProps {
  id?: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  id,
  label,
  checked,
  onChange,
  description,
}) => {
  const toggleId = id || `toggle-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label
          htmlFor={toggleId}
          style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
        >
          {label}
        </label>
        {description && (
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {description}
          </span>
        )}
      </div>
      <button
        id={toggleId}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        style={{
          position: 'relative',
          width: '46px',
          height: '24px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: checked ? 'var(--accent-primary)' : 'var(--bg-surface-sunken)',
          boxShadow: checked ? '0 0 10px var(--accent-glow)' : 'var(--neu-inset-sm)',
          border: '1px solid var(--border-subtle)',
          cursor: 'pointer',
          transition: 'all var(--transition-fast)',
          padding: 0,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '2px',
            left: checked ? '24px' : '3px',
            width: '18px',
            height: '18px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: '#ffffff',
            boxShadow: 'var(--neu-raised-sm)',
            transition: 'left var(--transition-fast)',
          }}
        />
      </button>
    </div>
  );
};
