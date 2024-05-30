import {  Typography, styled } from "@mui/material";

export const StyledMessageError = styled(Typography)(({ theme, props }) => ({
  color :theme.colors.extra.errorColor,
  fontSize :theme.spacing(0.75),
  ...props,
}));
