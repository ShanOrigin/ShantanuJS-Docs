import React, { useEffect, useRef } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { Search, X, ArrowRight, CornerDownLeft, Sparkles, BookOpen } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const SearchModal: React.FC = () => {
  const { isOpen, closeSearch, query, setQuery, results } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 'var(--z-modal)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 'clamp(20px, 8vw, 80px) var(--space-4)',
        animation: 'fadeIn 150ms ease-out',
      }}
      onClick={closeSearch}
    >
      <div
        className="neu-surface"
        style={{
          width: '100%',
          maxWidth: '640px',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: 'var(--neu-raised-lg)',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '80vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--space-4) var(--space-5)',
            borderBottom: '1px solid var(--border-subtle)',
            gap: '12px',
          }}
        >
          <Search size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs, shapes, transformations, APIs (e.g. 'pivot', 'Rect', 'shadow')..."
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              outline: 'none',
              fontSize: '1.05rem',
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-primary)',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          )}
          <kbd
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              padding: '2px 6px',
              borderRadius: 'var(--radius-xs)',
              backgroundColor: 'var(--bg-surface-sunken)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div
          style={{
            overflowY: 'auto',
            padding: 'var(--space-3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          {query.trim() && results.length === 0 && (
            <div
              style={{
                padding: 'var(--space-8)',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
              }}
            >
              No matching documentation or APIs found for "{query}"
            </div>
          )}

          {!query.trim() && (
            <div
              style={{
                padding: 'var(--space-4)',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Quick Links</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <a href="/docs/shapes" onClick={closeSearch} className="neu-badge neu-badge-accent">
                  Shapes Guide
                </a>
                <a href="/docs/transformations" onClick={closeSearch} className="neu-badge neu-badge-accent">
                  Affine Matrix Transforms
                </a>
                <a href="/docs/filters" onClick={closeSearch} className="neu-badge neu-badge-accent">
                  SVG Filters
                </a>
                <a href="/gallery" onClick={closeSearch} className="neu-badge">
                  Demo Gallery
                </a>
              </div>
            </div>
          )}

          {results.map((entry) => (
            <a
              key={entry.id}
              href={entry.url}
              onClick={closeSearch}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid transparent',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-surface-elevated)';
                e.currentTarget.style.boxShadow = 'var(--neu-raised-sm)';
                e.currentTarget.style.borderColor = 'var(--border-muted)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  className="neu-inset-sm"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-xs)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    flexShrink: 0,
                  }}
                >
                  {entry.category === 'API Method' ? <Sparkles size={16} /> : <BookOpen size={16} />}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                      {entry.title}
                    </span>
                    <Badge variant={entry.category === 'API Method' ? 'accent' : 'default'}>
                      {entry.category}
                    </Badge>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {entry.description.substring(0, 75)}...
                  </span>
                </div>
              </div>

              <ArrowRight size={16} style={{ color: 'var(--text-dim)', flexShrink: 0 }} />
            </a>
          ))}
        </div>

        {/* Footer info */}
        <div
          style={{
            padding: '8px 16px',
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface-sunken)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'var(--text-dim)',
          }}
        >
          <span>Navigate with mouse or keyboard</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>Select</span>
            <CornerDownLeft size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};
