import { Box, Button, Divider, Tooltip, Typography } from "@mui/material";
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
  fontSize :theme.spacing(2),
  ...props,
}));
export const SecondaryText = styled(Typography)(({ theme, props }) => ({
  color: theme.colors.secondary.textColor,
  ...props,
}));
export const StyledDivider = styled(Divider)(({ theme, props }) => ({
  borderWidth: theme.spacing(0.15),
  borderColor: theme.colors.primary.textColor,
  color:"red",
  width:'100%',
  margin: theme.spacing(1.5, 0),
  border: `1px solid ${theme.colors.extra.highLightColor}`,
  boxShadow: `0 0 10px ${theme.colors.extra.highLightColor}`,
  ...props,
}));


export const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: theme.colors.primary.mainColor,
  },
}));