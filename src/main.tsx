import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import App from './App';
import theme from './theme/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MUIThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </StyledThemeProvider>
    </MUIThemeProvider>
  </StrictMode>
);