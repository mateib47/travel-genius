import { Home, TopBar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material";
import { CenteredContainer } from "./utils";




function App() {
  return (
    <>
      <CssBaseline />
      <Box minHeight="100vh">
        <TopBar />
        <CenteredContainer maxWidth="md">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </CenteredContainer>
      </Box>
    </>
  );
}

export default App;
