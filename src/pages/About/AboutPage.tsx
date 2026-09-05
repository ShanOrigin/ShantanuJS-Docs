import React from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Box, Code2, Compass, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon } from '../../components/ui/GithubIcon';

export const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="container" style={{ padding: 'var(--space-8) var(--space-4)', maxWidth: '960px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
          <Badge variant="accent">Project & Philosophy</Badge>
          <h1 style={{ marginTop: 'var(--space-2)' }}>About ShantanuJS</h1>
          <p style={{ maxWidth: '640px', margin: 'var(--space-3) auto 0 auto', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            A zero-runtime-dependency 2D graphics and animation library built for mathematical precision, transparent rendering behavior, and structured SVG DOM projection.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {/* Origin Section */}
          <Card variant="surface" size="lg">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-4)' }}>
              <div
                className="neu-surface-sm"
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
                <Compass size={20} />
              </div>
              <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Project Origin</h2>
            </div>
            <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              ShantanuJS originated during the architectural development of{' '}
              <a href="https://github.com/ShanOrigin/code-perspective" target="_blank" rel="noreferrer">
                Code Perspective
              </a>
              , a project dedicated to visual representations of complex data structures and algorithmic flows.
            </p>
            <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: 'var(--space-3)' }}>
              Existing web animation engines frequently rely on heavy runtime abstractions, opaque black-box render loops, or loose CSS string manipulations that introduce cumulative floating-point errors. ShantanuJS evolved from an experimental SVG module into a standalone graphics engine focused on deterministic matrix algebra, explicit geometry, and lightweight runtime performance.
            </p>
          </Card>

          {/* Core Philosophy */}
          <Card variant="surface" size="lg">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-4)' }}>
              <div
                className="neu-surface-sm"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-secondary)',
                }}
              >
                <Layers size={20} />
              </div>
              <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Core Philosophy</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
              <div className="neu-surface-sm" style={{ padding: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  <CheckCircle size={16} />
                  <span>Math-First Design</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  All shapes, curves, and transformations calculate exact 3x3 affine matrices and geometric boundary formulas.
                </p>
              </div>

              <div className="neu-surface-sm" style={{ padding: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-secondary)', fontWeight: 600 }}>
                  <CheckCircle size={16} />
                  <span>Zero Dependencies</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  No hidden peer dependencies, polyfills, or heavyweight runtime frameworks. Just clean TypeScript compilation.
                </p>
              </div>

              <div className="neu-surface-sm" style={{ padding: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-tertiary)', fontWeight: 600 }}>
                  <CheckCircle size={16} />
                  <span>DOM Efficiency</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  The internal SVGRenderer batches modifications and synchronizes only dirty attributes to prevent layout reflows.
                </p>
              </div>

              <div className="neu-surface-sm" style={{ padding: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', fontWeight: 600 }}>
                  <CheckCircle size={16} />
                  <span>Interactive Sandboxes</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                  First-class support for interactive playgrounds, synthetic pointer events, and live parameter modulation.
                </p>
              </div>
            </div>
          </Card>

          {/* Current Status & Roadmap */}
          <Card variant="surface" size="lg">
            <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>Current Status & Roadmap</h2>
            <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              ShantanuJS is currently in active pre-release development (<code>v0.1.0-beta.0</code>). The core geometry models, affine transformation pipelines, curve primitives, RequestAnimationFrame engine, and SVG filters are implemented and validated.
            </p>
            <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: 'var(--space-3)' }}>
              Upcoming roadmap priorities include:
            </p>
            <ul style={{ paddingLeft: '20px', marginTop: '8px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li>Sub-pixel raycasting and precise non-convex polygon hit testing for pointer events.</li>
              <li>Expanded curve interpolation algorithms including natural cubic splines.</li>
              <li>Pluggable Canvas2D and WebGL rendering backends.</li>
            </ul>

            <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
              <a href="https://github.com/ShanOrigin/ShantanuJS" target="_blank" rel="noreferrer">
                <Button variant="primary" icon={<GithubIcon size={16} />}>
                  View on GitHub
                </Button>
              </a>
              <a href="/docs/shapes">
                <Button variant="normal" icon={<Code2 size={16} />}>
                  Browse API Docs
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};
