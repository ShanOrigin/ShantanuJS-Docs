import { documentationSections } from './navigation';
import { shapesDoc } from './documentation/shapes';
import { transformationsDoc } from './documentation/transformations';
import { filtersDoc } from './documentation/filters';
import { animationDoc } from './documentation/animation';
import { architectureDoc } from './documentation/architecture';

export interface SearchEntry {
  id: string;
  title: string;
  section: string;
  category: string;
  description: string;
  keywords: string[];
  url: string;
}

const docs = [shapesDoc, transformationsDoc, filtersDoc, animationDoc, architectureDoc];

export function generateSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  // Add top-level sections
  for (const sec of documentationSections) {
    entries.push({
      id: `sec-${sec.id}`,
      title: sec.title,
      section: 'Documentation',
      category: 'Section',
      description: sec.description,
      keywords: [sec.title.toLowerCase(), sec.id, 'docs', 'guide'],
      url: sec.slug,
    });
  }

  // Add individual doc blocks & APIs
  for (const doc of docs) {
    for (const block of doc.blocks) {
      const keywords = [
        doc.title.toLowerCase(),
        block.title.toLowerCase(),
        doc.category.toLowerCase(),
        ...(block.lead ? [block.lead.toLowerCase()] : []),
      ];

      entries.push({
        id: `block-${doc.id}-${block.id}`,
        title: `${doc.title}: ${block.title}`,
        section: doc.title,
        category: doc.category,
        description: block.lead || block.content[0] || doc.description,
        keywords,
        url: `${doc.slug}#${block.id}`,
      });

      if (block.apiReference?.methods) {
        for (const method of block.apiReference.methods) {
          entries.push({
            id: `api-${doc.id}-${method.name}`,
            title: `${method.name}`,
            section: `${doc.title} API`,
            category: 'API Method',
            description: method.description,
            keywords: [method.name.toLowerCase(), 'method', 'api', doc.title.toLowerCase()],
            url: `${doc.slug}#api-reference`,
          });
        }
      }
    }
  }

  // Add navigation and general pages
  entries.push(
    {
      id: 'page-home',
      title: 'Home — ShantanuJS Overview',
      section: 'General',
      category: 'Overview',
      description: 'Matrix-driven 2D graphics, transformations, animation, and filters for modern web applications.',
      keywords: ['home', 'landing', 'hero', 'overview', 'shantanujs'],
      url: '/',
    },
    {
      id: 'page-gallery',
      title: 'Interactive Demo Gallery',
      section: 'Showcase',
      category: 'Demos',
      description: 'Browse interactive live demos of shapes, affine transforms, and filter effects.',
      keywords: ['gallery', 'demos', 'showcase', 'playground', 'interactive'],
      url: '/gallery',
    },
    {
      id: 'page-playground',
      title: 'Code Playground',
      section: 'Playground',
      category: 'Tools',
      description: 'Real-time interactive code editor and visual sandbox for ShantanuJS.',
      keywords: ['playground', 'editor', 'sandbox', 'live', 'code'],
      url: '/playground',
    },
    {
      id: 'page-about',
      title: 'About ShantanuJS',
      section: 'Project',
      category: 'Information',
      description: 'Project philosophy, origin in algorithm visualization, architecture, and maintainer details.',
      keywords: ['about', 'origin', 'philosophy', 'maintainer', 'shantanu'],
      url: '/about',
    },
    {
      id: 'page-contact',
      title: 'Contact & Community',
      section: 'Project',
      category: 'Community',
      description: 'Connect with the project maintainers via GitHub Issues, Discussions, and repository.',
      keywords: ['contact', 'github', 'support', 'issues', 'community'],
      url: '/contact',
    }
  );

  return entries;
}

export const searchIndex = generateSearchIndex();
