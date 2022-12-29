import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Topbar = ({ open, setOpen, theme }) => {
  const theme = useTheme();

  return (
    <Container
      sx={{ backgroundColor: "background.default", padding: 0 }}
      maxWidth="xl"
    >
      <div className="wrapper">
        <div>
          <Typography className="logo" sx={{ color: "text.default" }}>
            TravelGenius.
          </Typography>
        </div>
        <div className="right">
          <Container className="sections" onClick={() => setOpen(!open)}>
            
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Topbar;
