import { Container } from "@mui/material";
import styled from "@emotion/styled";

export const CenteredContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"100vh"
  }));