import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { CenteredContainer } from "../../../utils";

const Welcome = () => {
  return (
    <CenteredContainer>
      <Typography variant="h1" align="center">Welcome to the AI Travel Planner</Typography>
      <Typography variant="body1" align="center">
        Plan your dream vacation with the help of our intelligent AI assistant.
      </Typography>
      <Button variant="contained" color="primary" sx={{m:2}}>
        Start planning
      </Button>
    </CenteredContainer>
  );
};

export default Welcome;
