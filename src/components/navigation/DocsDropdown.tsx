import React, { useState, useRef, useEffect } from 'react';
import { documentationSections } from '../../content/navigation';
import { ChevronDown, Shapes, Move, Sparkles, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Shapes: <Shapes size={18} style={{ color: 'var(--accent-primary)' }} />,
  Move: <Move size={18} style={{ color: 'var(--accent-secondary)' }} />,
  Sparkles: <Sparkles size={18} style={{ color: 'var(--accent-tertiary)' }} />,
  Cpu: <Cpu size={18} style={{ color: 'var(--success)' }} />,
};

export const DocsDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`neu-button ${isOpen ? 'active' : ''}`}
        style={{
          padding: '0.45rem 0.9rem',
          fontSize: '0.9rem',
        }}
      >
        <span>Docs</span>
        <ChevronDown
          size={15}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform var(--transition-fast)',
          }}
        />
      </button>

      {/* Dropdown Menu Panel */}
      {isOpen && (
        <div
          className="neu-glass"
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            left: '0',
            minWidth: '280px',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-2)',
            zIndex: 'var(--z-dropdown)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            animation: 'dropdownFadeIn 180ms cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: 'var(--neu-raised-lg)',
          }}
        >
          {documentationSections.map((sec) => (
            <a
              key={sec.id}
              href={sec.slug}
              onClick={() => setIsOpen(false)}
              className="neu-button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '12px',
                padding: '10px 14px',
                width: '100%',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'none',
                backgroundColor: 'transparent',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-surface-elevated)';
                e.currentTarget.style.boxShadow = 'var(--neu-raised-sm)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                className="neu-surface-sm"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-xs)',
                }}
              >
                {iconMap[sec.icon || 'Shapes'] || <Shapes size={18} />}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {sec.title}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {sec.description.substring(0, 42)}...
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
