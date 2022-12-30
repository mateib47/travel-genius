import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@mui/material/Container";
import { theme } from "./theme";

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}></ThemeProvider>
    <App />
  </BrowserRouter>
);
