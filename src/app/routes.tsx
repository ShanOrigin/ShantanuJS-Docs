import React, { useState, useEffect } from 'react';
import { HomePage } from '../pages/Home/HomePage';
import { ShapesPage } from '../pages/Docs/ShapesPage';
import { TransformationsPage } from '../pages/Docs/TransformationsPage';
import { FiltersPage } from '../pages/Docs/FiltersPage';
import { AnimationPage } from '../pages/Docs/AnimationPage';
import { ArchitecturePage } from '../pages/Docs/ArchitecturePage';
import { GalleryPage } from '../pages/Gallery/GalleryPage';
import { PlaygroundPage } from '../pages/Playground/PlaygroundPage';
import { AboutPage } from '../pages/About/AboutPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { SearchPage } from '../pages/Search/SearchPage';

export const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    // Intercept client-side link clicks
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.getAttribute('href') && !target.getAttribute('target')) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('/')) {
          e.preventDefault();
          if (href.includes('#')) {
            const [pathPart, hashPart] = href.split('#');
            if (pathPart && pathPart !== window.location.pathname) {
              window.history.pushState({}, '', href);
              setCurrentPath(pathPart);
              setTimeout(() => {
                const el = document.getElementById(hashPart);
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            } else {
              window.history.pushState({}, '', href);
              const el = document.getElementById(hashPart);
              el?.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            window.history.pushState({}, '', href);
            setCurrentPath(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Normalize path
  const normalized = currentPath.toLowerCase().replace(/\/$/, '') || '/';

  if (normalized === '/' || normalized === '') {
    return <HomePage />;
  }
  if (normalized === '/docs' || normalized === '/docs/shapes') {
    return <ShapesPage />;
  }
  if (normalized === '/docs/transformations') {
    return <TransformationsPage />;
  }
  if (normalized === '/docs/filters') {
    return <FiltersPage />;
  }
  if (normalized === '/docs/animation') {
    return <AnimationPage />;
  }
  if (normalized === '/docs/architecture') {
    return <ArchitecturePage />;
  }
  if (normalized === '/gallery') {
    return <GalleryPage />;
  }
  if (normalized === '/playground') {
    return <PlaygroundPage />;
  }
  if (normalized === '/about') {
    return <AboutPage />;
  }
  if (normalized === '/contact') {
    return <ContactPage />;
  }
  if (normalized === '/search') {
    return <SearchPage />;
  }

  // Fallback to Home
  return <HomePage />;
};
