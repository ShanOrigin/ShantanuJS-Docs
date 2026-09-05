import React from 'react';
import { capabilitiesContent } from '../../content/home/capabilities';
import { CapabilityCard } from './CapabilityCard';
import { Badge } from '../ui/Badge';
import { Sparkles } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section style={{ padding: 'var(--space-12) 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
          <Badge variant="accent" icon={<Sparkles size={13} />}>
            {capabilitiesContent.badge}
          </Badge>
          <h2 style={{ marginTop: 'var(--space-2)' }}>{capabilitiesContent.title}</h2>
          <p style={{ maxWidth: '620px', margin: 'var(--space-2) auto 0 auto', color: 'var(--text-muted)' }}>
            {capabilitiesContent.description}
          </p>
        </div>

        {/* 4-column responsive grid on desktop */}
        <div className="grid-capabilities-4">
          {capabilitiesContent.cards.map((card) => (
            <CapabilityCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
