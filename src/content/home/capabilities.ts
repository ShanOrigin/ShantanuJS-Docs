export interface CapabilityCardData {
  id: string;
  iconName: 'cpu' | 'layers' | 'zap' | 'sparkles' | 'check-circle' | 'shield-check';
  title: string;
  description: string;
}

export const capabilitiesContent = {
  badge: 'Core Capabilities',
  title: 'Engine Capabilities',
  description: 'Designed from the ground up to solve common 2D graphics bottlenecks in modern web applications.',
  cards: [
    {
      id: 'matrix-math',
      iconName: 'cpu',
      title: 'Explicit Matrix Math',
      description: 'All rotations, translations, scaling, and skewing operate on underlying 3x3 affine matrices, eliminating cumulative floating-point errors.',
    },
    {
      id: 'scene-graph',
      iconName: 'layers',
      title: 'Structured Scene Graph',
      description: 'Manage nested hierarchies effortlessly with Canvas and Group. Transforms flow downward deterministically.',
    },
    {
      id: 'svg-projection',
      iconName: 'zap',
      title: 'SVG DOM Projection',
      description: 'High-efficiency SVGRenderer updates only dirty nodes on each frame tick, keeping the browser responsive without layout reflows.',
    },
    {
      id: 'svg-filters',
      iconName: 'sparkles',
      title: 'Declarative SVG Filters',
      description: 'Attach reusable drop shadows, soft gaussian blurs, and graphical post-processing effects directly to shape nodes.',
    },
    {
      id: 'zero-dependencies',
      iconName: 'check-circle',
      title: 'Zero Dependencies',
      description: 'Zero runtime dependencies. Pure modern TypeScript packaging for maximum portability and minimal bundle overhead.',
    },
    {
      id: 'typescript-native',
      iconName: 'shield-check',
      title: 'TypeScript Native',
      description: 'Strongly typed API signatures for shape properties, matrix models, animation controllers, and synthetic event targets.',
    },
  ] as CapabilityCardData[],
} as const;
