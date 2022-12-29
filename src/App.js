import {Home, TopBar} from "./components";

function App() {
  return (
    <ThemeProvider theme={themes[theme]}>
        <CssBaseline />
        <Box>
          <TopBar/>
          <Container
            className="sections"
            sx={{ backgroundColor: "background.default" }}
            maxWidth={false}
          >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </Box>
    </ThemeProvider>
  );
}

export default App;
