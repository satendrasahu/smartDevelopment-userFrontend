import { Typography, styled } from "@mui/material";

export const StyledTypography = styled(Typography)(({ theme }) => ({
    color:theme.colors.extra.errorColor,
    marginTop:"-3px",
    marginLeft :"5px"
  }));