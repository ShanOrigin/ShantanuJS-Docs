import React, { useState } from 'react';
import { HeroAnimation } from '../animation/HeroAnimation';
import { ShantanuBrandText } from '../animation/ShantanuBrandText';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { GithubIcon } from '../ui/GithubIcon';
import { NpmIcon } from '../ui/NpmIcon';
import { projectMetadata } from '../../content/metadata';
import { heroContent } from '../../content/home/hero';
import { Sparkles, Layers, Terminal, Copy, Check } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = async () => {
    try {
      await navigator.clipboard.writeText(heroContent.installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy install command:', err);
    }
  };

  return (
    <section style={{ padding: 'var(--space-4) 0 var(--space-8) 0' }}>
      <div className="container">
        <Card
          variant="surface"
          size="lg"
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: 'clamp(2rem, 5vw, 3.5rem) var(--space-6)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--neu-raised-lg)',
          }}
        >
          {/* Top-Right GitHub and NPM controls inside Hero */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              zIndex: 5,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
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

          {/* Author's custom animation integration boundary */}
          <HeroAnimation showBranding={false} />

          {/* Hero Branding & Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginTop: 'var(--space-2)',
            }}
          >
            {/* <Badge variant="accent" style={{ marginBottom: 'var(--space-4)', fontSize: '0.825rem' }}>
              {heroContent.badge}
            </Badge> */}

            {/* Per-letter flowing gradient and sine-wave letter motion */}
            <ShantanuBrandText size="hero" withMotion={true} />

            {/* Taglines */}
            <p
              style={{
                fontSize: 'clamp(1.2rem, 2.8vw, 1.5rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginTop: 'var(--space-4)',
                lineHeight: 1.4,
              }}
            >
              {heroContent.tagline}
            </p>

            {/*
            <p
              style={{
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                fontWeight: 500,
                color: 'var(--text-muted)',
                marginTop: 'var(--space-2)',
                maxWidth: '680px',
                letterSpacing: '0.02em',
              }}
            >
              {heroContent.subtitle}
            </p>
            */}

            {/* Action Buttons: Live Playground & Demo Gallery only */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                marginTop: 'var(--space-5)',
              }}
            >
              <a href={heroContent.actions.playground.href} className="hero-action-btn neu-button">
                <span className="btn-icon-wrapper">
                  <Sparkles size={18} style={{ color: 'var(--accent-primary)' }} />
                </span>
                <span className="btn-text">{heroContent.actions.playground.label}</span>
              </a>

              <a href={heroContent.actions.gallery.href} className="hero-action-btn neu-button">
                <span className="btn-icon-wrapper">
                  <Layers size={18} style={{ color: 'var(--accent-secondary)' }} />
                </span>
                <span className="btn-text">{heroContent.actions.gallery.label}</span>
              </a>
            </div>

            {/* npm installation command with integrated copy button */}
            <div
              style={{
                marginTop: 'var(--space-5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                className="neu-inset-sm"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '6px 10px 6px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  backgroundColor: 'var(--bg-surface-sunken)',
                  color: 'var(--text-secondary)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={15} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                  <span>{heroContent.installCommand}</span>
                </div>

                <span
                  className="neu-badge neu-badge-accent"
                  style={{
                    fontSize: '0.7rem',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {heroContent.packageVersion}
                </span>

                <button
                  type="button"
                  onClick={handleCopyInstall}
                  aria-label={copied ? heroContent.copiedLabel : heroContent.copyLabel}
                  title={copied ? heroContent.copiedLabel : heroContent.copyLabel}
                  className="neu-button"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-full)',
                    color: copied ? 'var(--success)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    minWidth: '68px',
                    justifyContent: 'center',
                  }}
                >
                  {copied ? <Check size={13} style={{ color: 'var(--success)' }} /> : <Copy size={13} />}
                  <span>{copied ? heroContent.copiedLabel : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
