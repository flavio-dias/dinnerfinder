import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsProvider } from './src/hooks/useRestaurantsApi';
import Navigation from './src/navigation';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsProvider>
        <Navigation />
      </RestaurantsProvider>
    </ThemeProvider>
  );
}

