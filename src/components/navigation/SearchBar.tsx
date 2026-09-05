import React from 'react';
import { useSearch } from '../../hooks/useSearch';
import { Search } from 'lucide-react';

export const SearchBar: React.FC = () => {
  const { openSearch } = useSearch();

  return (
    <button
      onClick={openSearch}
      className="neu-button"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-3)',
        padding: '0.45rem 0.85rem',
        borderRadius: 'var(--radius-sm)',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        minWidth: '170px',
        cursor: 'pointer',
      }}
      aria-label="Search documentation"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Search size={15} style={{ color: 'var(--accent-primary)' }} />
        <span>Search docs...</span>
      </div>
      <kbd
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          padding: '2px 5px',
          borderRadius: 'var(--radius-xs)',
          backgroundColor: 'var(--bg-surface-sunken)',
          color: 'var(--text-dim)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        ⌘K
      </kbd>
    </button>
  );
};
