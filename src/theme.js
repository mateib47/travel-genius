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
          main: "#13678A",
        },
        secondary: {
          main: "#45C4B0",
        },
        background: {
          default: "#fff",
        },
        text: {
          default: "#000",
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