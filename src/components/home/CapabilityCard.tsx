import React from 'react';
import { CapabilityCardData } from '../../content/home/capabilities';
import { Card } from '../ui/Card';
import { Cpu, Layers, Zap, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export interface CapabilityCardProps {
  data: CapabilityCardData;
}

const getIcon = (iconName: CapabilityCardData['iconName']) => {
  switch (iconName) {
    case 'cpu':
      return { icon: <Cpu size={24} />, color: 'var(--accent-primary)' };
    case 'layers':
      return { icon: <Layers size={24} />, color: 'var(--accent-secondary)' };
    case 'zap':
      return { icon: <Zap size={24} />, color: 'var(--accent-tertiary)' };
    case 'sparkles':
      return { icon: <Sparkles size={24} />, color: 'var(--success)' };
    case 'check-circle':
      return { icon: <CheckCircle2 size={24} />, color: 'var(--warning)' };
    case 'shield-check':
      return { icon: <ShieldCheck size={24} />, color: 'var(--accent-primary)' };
    default:
      return { icon: <Sparkles size={24} />, color: 'var(--accent-primary)' };
  }
};

export const CapabilityCard: React.FC<CapabilityCardProps> = ({ data }) => {
  const { icon, color } = getIcon(data.iconName);

  return (
    <Card variant="interactive" size="md" className="feature-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Icon with continuous CSS ripple animation and subtle hover scale */}
      <div
        className="neu-surface-sm capability-icon-container"
        style={{ color }}
      >
        <span className="capability-icon-ripple" />
        {icon}
      </div>

      <h3
        className="feature-card-title"
        style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1.3,
          marginBottom: 'var(--space-2)',
        }}
      >
        {data.title}
      </h3>

      <p
        style={{
          fontSize: '0.9rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginTop: 'auto',
        }}
      >
        {data.description}
      </p>
    </Card>
  );
};
