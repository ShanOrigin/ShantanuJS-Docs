import React from 'react';
import { ThemeProvider } from './providers/ThemeProvider';
import { SearchProvider } from './providers/SearchProvider';
import { Router } from './routes';
import '../styles/globals.css';

export const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <SearchProvider>
        <Router />
      </SearchProvider>
    </ThemeProvider>
  );
};

export default App;
