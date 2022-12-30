import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { CenteredContainer } from "../../../utils";

const Home = () => {
  return (
    <>
      <Typography variant="h1">Welcome to the AI Travel Planner</Typography>
      <Typography variant="body1">
        Plan your dream vacation with the help of our intelligent AI assistant.
      </Typography>
      <Button variant="contained" color="primary">
        Start planning
      </Button>
    </>
  );
};

export default Home;
