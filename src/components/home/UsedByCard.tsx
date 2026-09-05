import React from 'react';
import { UsedByProject } from '../../services/usedBy/types';
import { usedByContent } from '../../content/home/usedBy';
import { Card } from '../ui/Card';
import { ExternalLink } from 'lucide-react';

export interface UsedByCardProps {
  project: UsedByProject;
}

export const UsedByCard: React.FC<UsedByCardProps> = ({ project }) => {
  return (
    <Card variant="surface" size="md" className="feature-card used-by-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ marginBottom: 'var(--space-3)' }}>
        <h3
          className="feature-card-title"
          style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.3,
            wordBreak: 'break-word',
          }}
        >
          {project.name}
        </h3>
      </div>

      <p
        style={{
          fontSize: '0.925rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
          marginBottom: 'var(--space-4)',
          flex: 1,
          wordBreak: 'break-word',
          whiteSpace: 'pre-wrap',
        }}
      >
        {project.usage}
      </p>

      <div style={{ marginTop: 'auto', paddingTop: 'var(--space-2)' }}>
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="neu-button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.85rem',
            fontWeight: 600,
            padding: '6px 14px',
            color: 'var(--accent-primary)',
          }}
        >
          <span>{usedByContent.card.viewProject}</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </Card>
  );
};
