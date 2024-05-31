import { styled } from "@mui/material/styles";
import { Toolbar, Typography } from "@mui/material";

export const LogoTypography = styled(Typography)(({ theme, props }) => ({
  flexGrow: 1,
  cursor: "pointer",
  textAlign: "left",
  color:theme.colors.primary.textColor,
  textDecoration: "none",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },

  ...props,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 1),
  },
}));
