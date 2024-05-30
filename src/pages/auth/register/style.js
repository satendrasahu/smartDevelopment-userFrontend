import { Box, styled } from "@mui/material";

export const StyledRegisterContainer = styled(Box)(({ theme, props }) => ({
  padding: theme.spacing(1),
  width :"100%",
  ...props,
}));
