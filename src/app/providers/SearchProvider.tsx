import React, { createContext, useState, useEffect } from 'react';
import { SearchEntry, searchIndex } from '../../content/search-index';

export interface SearchContextType {
  isOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  query: string;
  setQuery: (q: string) => void;
  results: SearchEntry[];
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchEntry[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const cleanQuery = query.toLowerCase().trim();
    const matched = searchIndex.filter((entry) => {
      const matchTitle = entry.title.toLowerCase().includes(cleanQuery);
      const matchDesc = entry.description.toLowerCase().includes(cleanQuery);
      const matchKeywords = entry.keywords.some((kw) => kw.includes(cleanQuery));
      const matchSection = entry.section.toLowerCase().includes(cleanQuery);
      return matchTitle || matchDesc || matchKeywords || matchSection;
    });

    setResults(matched.slice(0, 10));
  }, [query]);

  // Global hotkey: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openSearch = () => {
    setIsOpen(true);
  };

  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
  };

  return (
    <SearchContext.Provider
      value={{
        isOpen,
        openSearch,
        closeSearch,
        query,
        setQuery,
        results,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
