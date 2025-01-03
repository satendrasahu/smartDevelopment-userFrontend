import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// export const MainWrap = styled(Box)(({ theme, props }) => ({
//   // background:theme.colors.extra.dark,
//   border:"1px solid red",
//   margin: theme.spacing(6, 2),
//   minHeight: "calc(100vh - 440px)",
//   // width: "calc(100vw - 230px) !important",
//   width: "auto",
//   borderRadius: theme.borderRadius,
//   [theme.breakpoints.down("md")]: {
//     margin: theme.spacing(6.5, 0.5),
//   },
//   ...props,
// }));


export const MainWrap = styled(Box)(({ theme, props }) => ({
  // background:theme.colors.extra.dark,
  margin: theme.spacing(7, 5),
  minHeight:"calc(100vh - 440px)",
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
    color: theme.colors.extra.whiteColor,
  },

  "&:focus": {
    outline: "none",
  },

  "&.Mui-disabled": {
    background: theme.colors.extra.cancelBtnColor,
    color:"#FFF"
  },
  ...props,
}));
export const SecondaryButton = styled(Button)(({ theme, props }) => ({
  background: theme.colors.secondary.btnColor,
  color: theme.colors.primary.textColor,
  fontWeight: theme.typography.fontWeightSemiBold,
  padding: theme.spacing(0.5, 1),
  margin: theme.spacing(0.5),

  borderRadius: theme.spacing(0.25),
  [theme.breakpoints.down("md")]: {
    minWidth: "auto",
  },
  "&:hover": {
    background: theme.colors.secondary.btnHoverColor,
    color: theme.colors.extra.whiteColor,
  },
  ...props,
}));

export const StyledIconButton = styled(IconButton)(({ theme, props }) => ({
  color: theme.colors.primary.textColor,
  ...props,
}));
export const StyledLinkButton = styled(Link)(({ theme, props }) => ({
  color: theme.colors.extra.highLightColor,
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    color: theme.colors.primary.btnColor,
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
  fontSize: theme.spacing(2),
  ...props,
}));
export const SecondaryText = styled(Typography)(({ theme, props }) => ({
  color: theme.colors.secondary.textColor,
  ...props,
}));
export const StyledDivider = styled(Divider)(({ theme, props }) => ({
  borderWidth: theme.spacing(0.15),
  borderColor: theme.colors.primary.textColor,
  color: "red",
  width: "100%",
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
