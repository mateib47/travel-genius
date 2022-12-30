import {
    createTheme,
    ThemeProvider,
    responsiveFontSizes,
  } from "@mui/material/styles";
  
  let globalTheme = createTheme();
  globalTheme = responsiveFontSizes(globalTheme);
  
  export const theme = 
    createTheme({
      ...globalTheme,
      palette: {
        primary: {
          main: '#00bcd4',
        },
        secondary: {
          main: '#f44336',
        },
        tertiary: {
          main: '#e91e63',
        },
        background: {
          default: '#fff',
          paper: '#fafafa',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
        },
      },
      typography: {
        h1: {
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'text.primary',
        },
        h2: {
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: 'text.primary',
        },
        h3: {
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'text.primary',
        },
        h4: {
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'text.primary',
        },
        h5: {
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: 'text.primary',
        },
        h6: {
          fontSize: '1rem',
          fontWeight: 'bold',
          color: 'text.primary',
        },
        body1: {
          fontSize: '1rem',
          color: 'text.primary',
        },
        body2: {
          fontSize: '0.875rem',
          color: 'text.secondary',
        },
      },
      components: {
        // todo: remove once the issue is addressed: https://github.com/mui/material-ui/issues/31185
        MuiFormControl: {
          styleOverrides: {
            root: { paddingTop: `10px !important` },
          },
        },
        MuiInputLabel: {
          styleOverrides: {
            root: { paddingTop: `10px !important` },
          },
        },
      },
    })