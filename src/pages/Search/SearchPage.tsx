import React, { useState } from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { searchIndex, SearchEntry } from '../../content/search-index';
import { Search, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtered: SearchEntry[] = query.trim()
    ? searchIndex.filter((entry) => {
        const q = query.toLowerCase().trim();
        return (
          entry.title.toLowerCase().includes(q) ||
          entry.description.toLowerCase().includes(q) ||
          entry.keywords.some((k) => k.includes(q)) ||
          entry.section.toLowerCase().includes(q)
        );
      })
    : searchIndex;

  return (
    <PageLayout>
      <div className="container" style={{ padding: 'var(--space-8) var(--space-4)', maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <Badge variant="accent">Documentation Search</Badge>
          <h1 style={{ marginTop: 'var(--space-2)' }}>Search ShantanuJS</h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Search across all guide pages, API methods, shape primitives, and interactive demos.
          </p>
        </div>

        {/* Big Search Input */}
        <Card variant="surface" size="md" style={{ marginBottom: 'var(--space-8)' }}>
          <Input
            icon={<Search size={18} />}
            placeholder="Search docs, APIs, matrices, shapes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </Card>

        {/* Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dim)' }}>
            {query.trim() ? `${filtered.length} Results Found` : 'All Topics & APIs'}
          </div>

          {filtered.map((item) => (
            <a
              key={item.id}
              href={item.url}
              style={{
                textDecoration: 'none',
              }}
            >
              <Card variant="interactive" size="sm">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      className="neu-inset-sm"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: 'var(--radius-xs)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {item.category === 'API Method' ? <Sparkles size={16} /> : <BookOpen size={16} />}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                          {item.title}
                        </span>
                        <Badge variant={item.category === 'API Method' ? 'accent' : 'default'}>
                          {item.category}
                        </Badge>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={18} style={{ color: 'var(--text-dim)', flexShrink: 0 }} />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
