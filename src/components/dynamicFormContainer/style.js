import { Grid, styled } from "@mui/material";

export const StyledGridItem = styled(Grid)(({ theme }) => ({
    padding: "0rem 1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem",
    },
  }));

