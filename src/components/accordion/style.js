import { Accordion, styled } from "@mui/material";

export const StyledAccordion = styled(Accordion)(({ theme, props }) => ({
  background: theme.colors.primary.mainColor,
  color: theme.colors.primary.textColor,
  border: `1px solid ${theme.colors.extra.highLightColor}`,
  boxShadow: `0 0 10px ${theme.colors.extra.highLightColor}`,
  borderRadius: theme.borderRadius,
  margin: theme.spacing(2, 0),
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0.3),
    borderRadius: theme.spacing(0.3),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(0.5),
  },
  "& .count": {
    transform: `rotate(180deg)`,
  },
  "& svg": {
    color: theme.colors.extra.whiteColor,
  },
  "& .accordion-summery": {
    background: theme.colors.primary.btnColor,
    borderRadius: theme.borderRadius,
    [theme.breakpoints.down("sm")]: {
      borderRadius: theme.spacing(0.3),
      padding: theme.spacing(0.3),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0.5),
      borderRadius: theme.spacing(0.5),
    },
    "&:hover": {
      background: theme.colors.primary.btnHoverColor,
      color: theme.colors.white,
    },
  },
  "& .accordion-details": {
    background: theme.colors.extra.darkColor,
    borderRadius: theme.borderRadius,
    [theme.breakpoints.down("sm")]: {
      borderRadius: theme.spacing(0.3),
      padding: theme.spacing(0.3),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0.5),
      borderRadius: theme.spacing(0.5),
    },
  },
  ...props,
}));
