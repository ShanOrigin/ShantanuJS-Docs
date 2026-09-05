import React from 'react';
import { documentationSections } from '../../content/navigation';
import { useSearch } from '../../hooks/useSearch';
import { Search, BookOpen, Sparkles, Layers, Info, Mail } from 'lucide-react';
import { GithubIcon } from '../ui/GithubIcon';

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const { openSearch } = useSearch();

  if (!isOpen) return null;

  return (
    <div
      className="neu-glass"
      style={{
        position: 'fixed',
        top: '64px',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(16px)',
        zIndex: 'var(--z-modal)',
        overflowY: 'auto',
        padding: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        animation: 'fadeIn 200ms ease-in-out',
      }}
    >
      {/* Search trigger on mobile */}
      <button
        onClick={() => {
          onClose();
          openSearch();
        }}
        className="neu-button"
        style={{
          width: '100%',
          justifyContent: 'flex-start',
          gap: '10px',
          color: 'var(--text-muted)',
          padding: '10px 14px',
        }}
      >
        <Search size={16} style={{ color: 'var(--accent-primary)' }} />
        <span>Search documentation...</span>
      </button>

      {/* Main Pages Navigation */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase' }}>
          Overview
        </span>
        <a href="/" onClick={onClose} className="neu-button" style={{ justifyContent: 'flex-start', gap: '10px' }}>
          <Layers size={16} />
          <span>Home</span>
        </a>
        <a href="/gallery" onClick={onClose} className="neu-button" style={{ justifyContent: 'flex-start', gap: '10px' }}>
          <Sparkles size={16} />
          <span>Demo Gallery</span>
        </a>
        <a href="/playground" onClick={onClose} className="neu-button" style={{ justifyContent: 'flex-start', gap: '10px' }}>
          <BookOpen size={16} />
          <span>Playground</span>
        </a>
        <a href="/about" onClick={onClose} className="neu-button" style={{ justifyContent: 'flex-start', gap: '10px' }}>
          <Info size={16} />
          <span>About</span>
        </a>
        <a href="/contact" onClick={onClose} className="neu-button" style={{ justifyContent: 'flex-start', gap: '10px' }}>
          <Mail size={16} />
          <span>Contact</span>
        </a>
      </div>

      {/* Documentation Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'var(--space-2)' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase' }}>
          Documentation Sections
        </span>
        {documentationSections.map((sec) => (
          <a
            key={sec.id}
            href={sec.slug}
            onClick={onClose}
            className="neu-button"
            style={{
              justifyContent: 'flex-start',
              padding: '10px 14px',
              backgroundColor: 'var(--bg-surface-elevated)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{sec.title}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{sec.description}</span>
            </div>
          </a>
        ))}
      </div>

      {/* External Repository Link */}
      <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)' }}>
        <a
          href="https://github.com/ShanOrigin/ShantanuJS"
          target="_blank"
          rel="noreferrer"
          className="neu-button"
          style={{ width: '100%', gap: '8px' }}
        >
          <GithubIcon size={16} />
          <span>GitHub Repository</span>
        </a>
      </div>
    </div>
  );
};
