import { createTheme } from '@mui/material/styles';
import { tokens } from './globals';

const theme = createTheme({
  spacing: (factor: number) => tokens.spacing[factor] ?? factor,

  palette: {
    primary: { 
      main: tokens.colors.primary, 
      light: tokens.colors.primary_light, 
      dark: tokens.colors.primary_dark,
    },
    background: { 
      default: tokens.colors.bg, 
      paper: tokens.colors.bg_light,
    },
    text: { 
      primary: tokens.colors.text, 
      secondary: tokens.colors.text_muted,
    },
    success: {
      main: tokens.colors.success,
      light: tokens.colors.success_light,
    },
    warning: {
      main: tokens.colors.warning,
      light: tokens.colors.warning_light,
    },
    error: {
      main: tokens.colors.error,
      light: tokens.colors.error_light,
    },
    info: {
      main: tokens.colors.info,
      light: tokens.colors.info_light,
    },
  },

  customColors: {
    primaryHover: tokens.colors.primary_hover,
    bgDark: tokens.colors.bg_dark,
    border: tokens.colors.border,
    textLight: tokens.colors.text_light,
  },


  //only for tests
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          fontSize: "16px",
          borderRadius: 8,
          padding: 16,
          paddingTop: 8,
          paddingBottom: 8,
          "&:hover": {
            backgroundColor: tokens.colors.primary_hover,
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;
