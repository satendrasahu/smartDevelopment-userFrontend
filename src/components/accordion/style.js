import { Accordion, styled } from "@mui/material";

export const StyledAccordion = styled(Accordion)(({ theme, props }) => ({
  background: theme.colors.primary.mainColor,
  color: theme.colors.primary.textColor,
  border: `1px solid ${theme.colors.extra.highLightColor}`,
  boxShadow: `0 0 10px ${theme.colors.extra.highLightColor}`,
  borderRadius: theme.borderRadius,
  margin: theme.spacing(2, 0),
  padding: "1rem",
  "& .count":{
    transform: `rotate(180deg)`
  },
  "& svg": {
    color: theme.colors.extra.whiteColor,
  },
  "& .accordion-summery":{
    background: theme.colors.primary.btnColor,
    borderRadius: theme.borderRadius,
    "&:hover": {
        background: theme.colors.primary.btnHoverColor,
        color: theme.colors.white,
      },
  },
  "& .accordion-details":{
    background: theme.colors.extra.darkColor,
    borderRadius: theme.borderRadius,
  },
  ...props,
}));
