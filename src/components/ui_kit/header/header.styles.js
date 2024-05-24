import { styled } from "@mui/material/styles";
import { Toolbar, Typography } from "@mui/material";

export const LogoTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  cursor: "pointer",
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 1),
  },
}));
