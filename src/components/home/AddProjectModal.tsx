import React, { useState, useEffect, useRef } from 'react';
import { usedByContent } from '../../content/home/usedBy';
import { usedByRepository } from '../../services/usedBy/localStorageRepository';
import { UsedByProject } from '../../services/usedBy/types';
import { X, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (project: UsedByProject) => void;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [usage, setUsage] = useState('');
  const [projectUrl, setProjectUrl] = useState('');

  const [errors, setErrors] = useState<{ name?: string; usage?: string; projectUrl?: string; general?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const timeout = setTimeout(() => {
      nameInputRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeout);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateUrl = (url: string): boolean => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; usage?: string; projectUrl?: string; general?: string } = {};

    const trimmedName = name.trim();
    const trimmedUsage = usage.trim();
    const trimmedUrl = projectUrl.trim();

    if (!trimmedName) {
      newErrors.name = usedByContent.validation.nameRequired;
    }

    if (!trimmedUsage) {
      newErrors.usage = usedByContent.validation.usageRequired;
    }

    if (!trimmedUrl) {
      newErrors.projectUrl = usedByContent.validation.urlRequired;
    } else if (!validateUrl(trimmedUrl)) {
      newErrors.projectUrl = usedByContent.validation.urlInvalid;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const savedProject = usedByRepository.addProject({
        name: trimmedName,
        usage: trimmedUsage,
        projectUrl: trimmedUrl,
      });

      // Clear form
      setName('');
      setUsage('');
      setProjectUrl('');
      setIsSubmitting(false);

      onSuccess(savedProject);
      onClose();
    } catch (err: any) {
      setIsSubmitting(false);
      setErrors({ general: err?.message || usedByContent.validation.saveError });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 'var(--z-modal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(6px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-project-modal-title"
        className="neu-surface"
        style={{
          width: '100%',
          maxWidth: '520px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--neu-raised-lg), 0 24px 48px rgba(0, 0, 0, 0.3)',
          border: '1px solid var(--border-subtle)',
          padding: 'var(--space-6)',
          backgroundColor: 'var(--bg-surface)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--space-5)' }}>
          <div>
            <h2 id="add-project-modal-title" style={{ fontSize: '1.4rem', fontWeight: 800 }}>
              {usedByContent.modal.title}
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              {usedByContent.modal.description}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="neu-icon-button"
            style={{ flexShrink: 0 }}
          >
            <X size={18} />
          </button>
        </div>

        {/* General Error Banner */}
        {errors.general && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid var(--error)',
              borderRadius: 'var(--radius-sm)',
              padding: '10px 14px',
              marginBottom: 'var(--space-4)',
              color: 'var(--error)',
              fontSize: '0.85rem',
            }}
          >
            <AlertCircle size={16} />
            <span>{errors.general}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Field 1: Your Name */}
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <label
              htmlFor="project-name"
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '6px',
              }}
            >
              {usedByContent.modal.fields.name.label} <span style={{ color: 'var(--error)' }}>*</span>
            </label>
            <input
              id="project-name"
              ref={nameInputRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={usedByContent.modal.fields.name.placeholder}
              className="neu-inset-sm"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                border: errors.name ? '1px solid var(--error)' : '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-surface-sunken)',
                color: 'var(--text-primary)',
                fontSize: '0.925rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
              }}
            />
            {errors.name && (
              <p style={{ color: 'var(--error)', fontSize: '0.775rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <AlertCircle size={13} /> {errors.name}
              </p>
            )}
          </div>

          {/* Field 2: What did you use ShantanuJS for? */}
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <label
              htmlFor="project-usage"
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '6px',
              }}
            >
              {usedByContent.modal.fields.usage.label} <span style={{ color: 'var(--error)' }}>*</span>
            </label>
            <textarea
              id="project-usage"
              rows={3}
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
              placeholder={usedByContent.modal.fields.usage.placeholder}
              className="neu-inset-sm"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                border: errors.usage ? '1px solid var(--error)' : '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-surface-sunken)',
                color: 'var(--text-primary)',
                fontSize: '0.925rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                resize: 'vertical',
                minHeight: '80px',
              }}
            />
            {errors.usage && (
              <p style={{ color: 'var(--error)', fontSize: '0.775rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <AlertCircle size={13} /> {errors.usage}
              </p>
            )}
          </div>

          {/* Field 3: Project Link */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <label
              htmlFor="project-url"
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '6px',
              }}
            >
              {usedByContent.modal.fields.projectUrl.label} <span style={{ color: 'var(--error)' }}>*</span>
            </label>
            <input
              id="project-url"
              type="url"
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              placeholder={usedByContent.modal.fields.projectUrl.placeholder}
              className="neu-inset-sm"
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                border: errors.projectUrl ? '1px solid var(--error)' : '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-surface-sunken)',
                color: 'var(--text-primary)',
                fontSize: '0.925rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
              }}
            />
            {errors.projectUrl && (
              <p style={{ color: 'var(--error)', fontSize: '0.775rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <AlertCircle size={13} /> {errors.projectUrl}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 'var(--space-3)' }}>
            <Button
              type="button"
              variant="normal"
              size="md"
              onClick={onClose}
              disabled={isSubmitting}
            >
              {usedByContent.modal.cancelButton}
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : usedByContent.modal.submitButton}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
