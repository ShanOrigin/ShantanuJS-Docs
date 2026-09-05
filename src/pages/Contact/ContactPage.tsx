import React from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { MessageSquare, Bug, GitPullRequest, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../../components/ui/GithubIcon';

export const ContactPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="container" style={{ padding: 'var(--space-8) var(--space-4)', maxWidth: '960px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
          <Badge variant="accent">Community & Support</Badge>
          <h1 style={{ marginTop: 'var(--space-2)' }}>Contact & Get Involved</h1>
          <p style={{ maxWidth: '600px', margin: 'var(--space-3) auto 0 auto', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Connect with the ShantanuJS project maintainers, report issues, ask questions, or contribute improvements.
          </p>
        </div>

        <div className="grid-responsive-2" style={{ gap: 'var(--space-6)' }}>
          {/* GitHub Discussions */}
          <Card variant="surface" size="md">
            <div
              className="neu-surface-sm"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                marginBottom: 'var(--space-3)',
              }}
            >
              <MessageSquare size={22} />
            </div>
            <h3>GitHub Discussions</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '8px 0 var(--space-4) 0' }}>
              Ask questions about library usage, propose architectural ideas, share projects built with ShantanuJS, or discuss feature roadmaps.
            </p>
            <a href="https://github.com/ShanOrigin/ShantanuJS/discussions" target="_blank" rel="noreferrer">
              <Button variant="normal" size="sm" icon={<ExternalLink size={14} />}>
                Join Discussions
              </Button>
            </a>
          </Card>

          {/* Issue Tracker */}
          <Card variant="surface" size="md">
            <div
              className="neu-surface-sm"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--error)',
                marginBottom: 'var(--space-3)',
              }}
            >
              <Bug size={22} />
            </div>
            <h3>Issue Tracker</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '8px 0 var(--space-4) 0' }}>
              Found a bug in matrix transformations, curves, or rendering? File a reproduction case on GitHub to help us resolve it.
            </p>
            <a href="https://github.com/ShanOrigin/ShantanuJS/issues" target="_blank" rel="noreferrer">
              <Button variant="normal" size="sm" icon={<ExternalLink size={14} />}>
                Report an Issue
              </Button>
            </a>
          </Card>

          {/* Contributions & PRs */}
          <Card variant="surface" size="md">
            <div
              className="neu-surface-sm"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--success)',
                marginBottom: 'var(--space-3)',
              }}
            >
              <GitPullRequest size={22} />
            </div>
            <h3>Contributing Code</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '8px 0 var(--space-4) 0' }}>
              We welcome pull requests for geometry accuracy, rendering optimization, documentation improvements, and unit testing.
            </p>
            <a href="https://github.com/ShanOrigin/ShantanuJS/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">
              <Button variant="normal" size="sm" icon={<ExternalLink size={14} />}>
                Contributing Guidelines
              </Button>
            </a>
          </Card>

          {/* Official Repository */}
          <Card variant="surface" size="md">
            <div
              className="neu-surface-sm"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-secondary)',
                marginBottom: 'var(--space-3)',
              }}
            >
              <GithubIcon size={22} />
            </div>
            <h3>Official GitHub Repository</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '8px 0 var(--space-4) 0' }}>
              Explore the TypeScript library source code, test suites, build pipelines, and release tags directly on GitHub.
            </p>
            <a href="https://github.com/ShanOrigin/ShantanuJS" target="_blank" rel="noreferrer">
              <Button variant="primary" size="sm" icon={<GithubIcon size={14} />}>
                Star on GitHub
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};
