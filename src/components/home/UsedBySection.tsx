import React, { useState, useEffect } from 'react';
import { usedByContent } from '../../content/home/usedBy';
import { usedByRepository } from '../../services/usedBy/localStorageRepository';
import { UsedByProject } from '../../services/usedBy/types';
import { UsedByCard } from './UsedByCard';
import { AddProjectModal } from './AddProjectModal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Users, PlusCircle } from 'lucide-react';

export const UsedBySection: React.FC = () => {
  const [projects, setProjects] = useState<UsedByProject[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Initial load from local storage
    const loaded = usedByRepository.getProjects();
    setProjects(loaded);
  }, []);

  const handleProjectAdded = (newProject: UsedByProject) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  return (
    <section style={{ padding: 'var(--space-12) 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <Badge variant="accent" icon={<Users size={13} />}>
            {usedByContent.badge}
          </Badge>
          <h2 style={{ marginTop: 'var(--space-2)' }}>{usedByContent.title}</h2>
          <p style={{ maxWidth: '580px', margin: 'var(--space-2) auto 0 auto', color: 'var(--text-muted)' }}>
            {usedByContent.description}
          </p>
        </div>

        {/* Dynamic Project Cards Grid (if projects exist) */}
        {projects.length > 0 && (
          <div
            className="grid-responsive-2"
            style={{
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-8)',
            }}
          >
            {projects.map((project) => (
              <UsedByCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Add Project Button (Centered) */}
        <div style={{ textAlign: 'center', marginTop: projects.length > 0 ? 'var(--space-6)' : 'var(--space-4)' }}>
          <Button
            type="button"
            variant="normal"
            size="md"
            icon={<PlusCircle size={17} style={{ color: 'var(--accent-primary)' }} />}
            onClick={() => setModalOpen(true)}
            style={{
              fontWeight: 600,
              padding: '10px 24px',
            }}
          >
            {usedByContent.addProjectButton}
          </Button>
        </div>
      </div>

      {/* Add Project Modal */}
      <AddProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={handleProjectAdded}
      />
    </section>
  );
};
