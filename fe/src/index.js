// IMPs - ExtLib
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// IMPs - local
import App from './App';

// DATA
const root = createRoot(document.getElementById('root'));
const theme = createTheme({ colorSchemes: { dark: true }});

// MAIN
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
