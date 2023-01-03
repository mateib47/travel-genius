import { Container } from "@mui/material";
import styled from "@emotion/styled";
import {Grid} from "@mui/material";

export const CenteredContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    minHeight:"100vh"
  }));

  export const CenteredGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  }));