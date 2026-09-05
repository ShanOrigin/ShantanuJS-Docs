import React from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { HeroSection } from '../../components/home/HeroSection';
import { QuickStarterSection } from '../../components/home/QuickStarterSection';
import { CapabilitiesSection } from '../../components/home/CapabilitiesSection';
import { UsedBySection } from '../../components/home/UsedBySection';

export const HomePage: React.FC = () => {
  return (
    <PageLayout>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Starter Template (with Dual Language TypeScript/JavaScript Monaco Editor) */}
      <QuickStarterSection />

      {/* 3. Engine Capabilities (4-column responsive grid with continuous icon ripples and hover gradients) */}
      <CapabilitiesSection />

      {/* 4. Used By Section (Empty state initially, in-page modal submission, localStorage persistence) */}
      <UsedBySection />
    </PageLayout>
  );
};
