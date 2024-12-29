import {Paper, styled,Grid } from "@mui/material";
export const ResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(2,0.5),
  },
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(2),
  },
  [theme.breakpoints.down("lg")]: {
    margin: theme.spacing(2),
  },
}));