import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";


const TopBar = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{ backgroundColor: "background.default", padding: 2 }}
      maxWidth="xl"
    >
      <Box className="wrapper" display="flex" justifyContent="space-between">
        <Box>
          <Typography className="logo" sx={{ color: "text.default" }}>
            TravelGenius.
          </Typography>
        </Box>
        <Box className="right" display="flex" justifyContent="space-between">
          <Typography variant="body1" color="initial">Home</Typography>
          <Typography variant="body1" color="initial">About</Typography>
          <Typography variant="body1" color="initial">FAQ</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default TopBar;
