import React from 'react';
import { ThemeProvider } from 'styled-components';

import ChecksInterface from './components/ChecksInterface';
import GlobalStyle from './globalStyle.css';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ChecksInterface />
    </ThemeProvider>
  );
}
