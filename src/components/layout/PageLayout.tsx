import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SearchModal } from '../navigation/SearchModal';

export interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <SearchModal />
    </div>
  );
};
