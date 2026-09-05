import React from 'react';
import { Box, Heart, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/GithubIcon';
import { documentationSections } from '../../content/navigation';

export const Footer: React.FC = () => {
  return (
    <footer
      className="neu-surface"
      style={{
        marginTop: 'var(--space-16)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'var(--space-12) 0 var(--space-8) 0',
        borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-8)',
            marginBottom: 'var(--space-10)',
          }}
        >
          {/* Brand & Mission */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                className="neu-surface-sm"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--accent-gradient)',
                  color: '#ffffff',
                }}
              >
                <Box size={18} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  color: 'var(--text-primary)',
                }}
              >
                Shantanu<span style={{ color: 'var(--accent-primary)' }}>JS</span>
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              Zero-runtime-dependency 2D graphics and animation engine for the browser. Built on explicit geometry, affine matrices, and structured SVG DOM projection.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'var(--space-2)' }}>
              <span className="neu-badge neu-badge-accent">Apache-2.0 License</span>
              <span className="neu-badge">v0.1.0-beta.0</span>
            </div>
          </div>

          {/* Documentation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
              Documentation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {documentationSections.map((sec) => (
                <a
                  key={sec.id}
                  href={sec.slug}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {sec.title}
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Tools */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
              Showcase & Tools
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="/gallery" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Interactive Demo Gallery
              </a>
              <a href="/playground" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Code Playground
              </a>
              <a href="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                About & Architecture
              </a>
              <a href="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Contact & Community
              </a>
            </div>
          </div>

          {/* Ecosystem & Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
              Ecosystem
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="https://github.com/ShanOrigin/ShantanuJS"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                }}
              >
                <GithubIcon size={15} />
                <span>GitHub Repository</span>
                <ExternalLink size={12} style={{ color: 'var(--text-dim)' }} />
              </a>
              <a
                href="https://www.npmjs.com/package/shantanujs"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                }}
              >
                <Box size={15} />
                <span>npm: shantanujs</span>
                <ExternalLink size={12} style={{ color: 'var(--text-dim)' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: 'var(--space-6)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Shantanu Suryawanshi. Released under Apache-2.0.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>Crafted with</span>
            <Heart size={14} style={{ color: 'var(--error)', fill: 'var(--error)' }} />
            <span>for modern 2D graphics developers.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
