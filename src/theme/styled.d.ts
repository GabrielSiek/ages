import 'styled-components';
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      primaryHover: string;
      bgDark: string;
      border: string;
      textLight: string;
    };
  }
  interface ThemeOptions {
    customColors?: {
      primaryHover?: string;
      bgDark?: string;
      border?: string;
      textLight?: string;
    };
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
