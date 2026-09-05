import { UsedByProject, NewUsedByProjectInput } from './types';
import { USED_BY_STORAGE_KEY } from './constants';

export class LocalStorageUsedByRepository {
  private storageKey: string;

  constructor(key: string = USED_BY_STORAGE_KEY) {
    this.storageKey = key;
  }

  getProjects(): UsedByProject[] {
    if (typeof window === 'undefined' || !window.localStorage) {
      return [];
    }

    try {
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.filter(
          (item) =>
            item &&
            typeof item.id === 'string' &&
            typeof item.name === 'string' &&
            typeof item.usage === 'string' &&
            typeof item.projectUrl === 'string'
        );
      }
      return [];
    } catch (err) {
      console.warn('Failed to read Used By projects from localStorage:', err);
      return [];
    }
  }

  addProject(input: NewUsedByProjectInput): UsedByProject {
    if (typeof window === 'undefined' || !window.localStorage) {
      throw new Error('localStorage is unavailable in this environment.');
    }

    const trimmedName = input.name.trim();
    const trimmedUsage = input.usage.trim();
    const trimmedUrl = input.projectUrl.trim();

    if (!trimmedName || !trimmedUsage || !trimmedUrl) {
      throw new Error('All fields are required.');
    }

    const newProject: UsedByProject = {
      id: `project-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
      name: trimmedName,
      usage: trimmedUsage,
      projectUrl: trimmedUrl,
      createdAt: new Date().toISOString(),
    };

    const currentList = this.getProjects();
    const updatedList = [newProject, ...currentList];

    try {
      window.localStorage.setItem(this.storageKey, JSON.stringify(updatedList));
    } catch (err) {
      console.error('Failed to save project to localStorage:', err);
      throw new Error('Unable to save your project locally. Storage may be full.');
    }

    return newProject;
  }

  clearProjects(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(this.storageKey);
    }
  }
}

export const usedByRepository = new LocalStorageUsedByRepository();
