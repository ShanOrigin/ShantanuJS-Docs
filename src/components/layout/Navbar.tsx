import React, { useState } from 'react';
import { DocsDropdown } from '../navigation/DocsDropdown';
import { SearchBar } from '../navigation/SearchBar';
import { ThemeToggle } from '../navigation/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from '../ui/GithubIcon';
import { NpmIcon } from '../ui/NpmIcon';
import { MobileNavigation } from './MobileNavigation';
import { projectMetadata } from '../../content/metadata';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const brandLetters = ['S', 'h', 'a', 'n', 't', 'a', 'n', 'u', 'J', 'S'];

  return (
    <header
      className="neu-glass"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-sticky)',
        width: '100%',
        padding: '0.6rem 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-4)',
        }}
      >
        {/* Left: Brand Logo & Title with Sequential Letter Animation */}
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
          aria-label="ShantanuJS Homepage"
        >
          <div
            className="neu-surface-sm"
            style={{
              width: '85px',
              height: '85px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <img
              src="/logo.png"
              alt="ShantanuJS Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                userSelect: 'none',
              }}
            >
              {brandLetters.map((letter, idx) => (
                <span
                  key={idx}
                  className="nav-animated-letter"
                  style={{
                    animationDelay: `${idx * 0.08}s`,
                    background:
                      idx < 8
                        ? 'linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%)'
                        : 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              {projectMetadata.version}
            </span>
          </div>
        </a>

        {/* Center: Primary Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--space-3)',
          }}
          className="desktop-nav"
        >
          <DocsDropdown />

          <a href="/about" className="neu-button" style={{ padding: '0.45rem 0.9rem', fontSize: '0.9rem' }}>
            About Us
          </a>

          <a href="/contact" className="neu-button" style={{ padding: '0.45rem 0.9rem', fontSize: '0.9rem' }}>
            Contact Us
          </a>
        </nav>

        {/* Right: Controls [ Search ] [ GitHub ] [ NPM ] [ Theme ] */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <div className="desktop-search">
            <SearchBar />
          </div>

          {/*
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="hide-mobile">
            <a
              href={projectMetadata.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="neu-icon-button"
              aria-label="GitHub Repository"
              title="GitHub Repository"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={projectMetadata.npmUrl}
              target="_blank"
              rel="noreferrer"
              className="neu-icon-button"
              aria-label="NPM Package"
              title="NPM Package (shantanujs)"
              style={{ color: '#cb3837' }}
            >
              <NpmIcon size={20} />
            </a>
          </div>
          */}

          <ThemeToggle />

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="neu-icon-button mobile-menu-btn"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileNavigation isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-search { display: block !important; }
          .mobile-menu-btn { display: none !important; }
          .hide-mobile { display: inline-flex !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .desktop-search { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
};
