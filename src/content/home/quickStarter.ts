export const quickStarterContent = {
  badge: 'Developer API',
  title: 'Quick Starter Template',
  description: 'Complete code example demonstrating Canvas initialization, shape creation, matrix batching, and RequestAnimationFrame animation.',
  code: {
    typescript: `import { ShantanuJS } from 'shantanujs';

// 1. Initialize Canvas surface with strong type signatures
const canvas = new ShantanuJS.Canvas({
  id: 'stage',
  width: 800,
  height: 480,
  context: 'SVG',
  fill: '#0f131a',
});

// 2. Add geometric shape
const rect = new ShantanuJS.Shapes.Rect({
  x: 80,
  y: 80,
  width: 180,
  height: 110,
  fill: '#4f46e5',
  stroke: '#818cf8',
  'stroke-width': 2,
});
canvas.add(rect);

// 3. Batch apply affine transforms
rect.beginT();
rect.translate({ x: 120, y: 40, tType: 'relative' });
rect.rotate({ angle: 25, tType: 'pivot' });
rect.scale({ sx: 1.15, sy: 1.15, tType: 'pivot' });
rect.skew({ sx: 10, sy: 0, tType: 'pivot' });
rect.endT();

// 4. Trigger continuous RequestAnimationFrame animation
rect.animate({
  attrs: {
    translate: { x: 320, y: 40 },
    rotate: { angle: 180 },
    fill: '#0ea5e9',
  },
  duration: 1400,
  ease: 'easeInOutCubic',
  advanceOptions: {
    controls: { direction: 'alternate', loop: true },
  },
});`,
    javascript: `import { ShantanuJS } from 'shantanujs';

// 1. Initialize Canvas surface
const canvas = new ShantanuJS.Canvas({
  id: 'stage',
  width: 800,
  height: 480,
  context: 'SVG',
  fill: '#0f131a',
});

// 2. Add geometric shape
const rect = new ShantanuJS.Shapes.Rect({
  x: 80,
  y: 80,
  width: 180,
  height: 110,
  fill: '#4f46e5',
  stroke: '#818cf8',
  'stroke-width': 2,
});
canvas.add(rect);

// 3. Batch apply affine transforms
rect.beginT();
rect.translate({ x: 120, y: 40, tType: 'relative' });
rect.rotate({ angle: 25, tType: 'pivot' });
rect.scale({ sx: 1.15, sy: 1.15, tType: 'pivot' });
rect.skew({ sx: 10, sy: 0, tType: 'pivot' });
rect.endT();

// 4. Trigger continuous RequestAnimationFrame animation
rect.animate({
  attrs: {
    translate: { x: 320, y: 40 },
    rotate: { angle: 180 },
    fill: '#0ea5e9',
  },
  duration: 1400,
  ease: 'easeInOutCubic',
  advanceOptions: {
    controls: { direction: 'alternate', loop: true },
  },
});`,
  },
} as const;
