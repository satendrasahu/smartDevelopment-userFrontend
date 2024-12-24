import { Box, styled } from "@mui/material";

export const StyledPersonalInformationContainer = styled(Box)(
  ({ theme, props }) => ({
    background: theme.colors.secondary.btnColor,
    borderRadius:theme.borderRadius,
    padding: '1rem !important',//theme.spacing(1),
    width: "100%",
    boxShadow: `0 0px 10px ${theme.colors.extra.highLightColor}`,
    ...props,
  })
);
