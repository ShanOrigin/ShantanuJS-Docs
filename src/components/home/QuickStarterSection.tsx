import React from 'react';
import { quickStarterContent } from '../../content/home/quickStarter';
import { MonacoCodeEditor } from '../ui/MonacoCodeEditor';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Code2 } from 'lucide-react';

export const QuickStarterSection: React.FC = () => {
  return (
    <section style={{ padding: 'var(--space-10) 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <Badge variant="accent" icon={<Code2 size={13} />}>
            {quickStarterContent.badge}
          </Badge>
          <h2 style={{ marginTop: 'var(--space-2)' }}>{quickStarterContent.title}</h2>
          <p style={{ maxWidth: '640px', margin: 'var(--space-2) auto 0 auto', color: 'var(--text-muted)' }}>
            {quickStarterContent.description}
          </p>
        </div>

        {/* Dual Language Monaco Code Editor */}
        <Card variant="surface" size="md">
          <MonacoCodeEditor
            code={quickStarterContent.code}
            title="Quick Start Example"
            height="440px"
            readOnly={true}
          />
        </Card>
      </div>
    </section>
  );
};
