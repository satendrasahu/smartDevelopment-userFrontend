import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainWrap = styled(Box)(({ theme, props }) => ({
  // background:theme.colors.extra.dark,
  margin: theme.spacing(7, 5),
  minHeight: "100vh",
  width: `calc(100vw-230px)`,
  borderRadius: theme.borderRadius,
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(6.5, 0.5),
  },

  ...props,
}));

export const PrimaryButton = styled(Button)(({ theme, props }) => ({
  background: theme.colors.primary.btnColor,
  color: theme.colors.primary.textColor,
  fontWeight: theme.typography.fontWeightSemiBold,
  padding: theme.spacing(0.5, 1),
  margin: theme.spacing(0.5),

  borderRadius: theme.spacing(0.25),
  [theme.breakpoints.down("md")]: {
    minWidth: "auto",
  },
  "&:hover": {
    background: theme.colors.primary.btnHoverColor,
    color: theme.colors.white,
  },
  ...props,
}));
export const SecondaryButton = styled(Button)(({ theme, props }) => ({
  background: theme.colors.btnSecondary,
  color: theme.colors.dark,
  fontWeight: theme.typography.fontWeightSemiBold,
  padding: theme.spacing(0.5, 1),
  margin: theme.spacing(0.5),

  borderRadius: theme.spacing(0.25),
  [theme.breakpoints.down("md")]: {
    minWidth: "auto",
  },
  "&:hover": {
    background: theme.colors.btnSecondaryHover,
    color: theme.colors.white,
  },
  ...props,
}));

export const CenteredItemBox = styled(Box)(({ theme, props }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  ...props,
}));

export const PrimaryText = styled(Typography)(({ theme, props }) => ({
  color: theme.colors.primary.textColor,

  ...props,
}));
export const SecondaryText = styled(Typography)(({ theme, props }) => ({
  color: theme.colors.secondary.textColor,
  ...props,
}));
