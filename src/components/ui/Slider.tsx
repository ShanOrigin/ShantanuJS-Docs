import React from 'react';

export interface SliderProps {
  id?: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (val: number) => void;
  description?: string;
}

export const Slider: React.FC<SliderProps> = ({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange,
  description,
}) => {
  const inputId = id || `slider-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label
          htmlFor={inputId}
          style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
          }}
        >
          {label}
        </label>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.825rem',
            fontWeight: 600,
            color: 'var(--accent-primary)',
            backgroundColor: 'var(--bg-surface-sunken)',
            padding: '2px 8px',
            borderRadius: 'var(--radius-xs)',
            boxShadow: 'var(--neu-inset-sm)',
          }}
        >
          {value}
          {unit}
        </span>
      </div>
      {description && (
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {description}
        </span>
      )}
      <input
        id={inputId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number.parseFloat(e.target.value))}
        className="neu-slider"
        aria-label={label}
      />
    </div>
  );
};
