import { projectMetadata } from '../metadata';

export const heroContent = {
  badge: 'TypeScript 2D Graphics Engine',
  title: projectMetadata.name,
  tagline: 'Experience the math-first engine live.',
  subtitle: 'Live Affine Matrix · Transformations · Animations · Filters',
  actions: {
    playground: {
      label: 'Live Playground',
      href: projectMetadata.routes.playground,
    },
    gallery: {
      label: 'Demo Gallery',
      href: projectMetadata.routes.gallery,
    },
  },
  installCommand: `npm install ${projectMetadata.packageName}`,
  packageVersion: projectMetadata.version,
  copyLabel: 'Copy command',
  copiedLabel: 'Copied',
} as const;
