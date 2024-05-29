import {  Box, styled } from "@mui/material";

export const StyledCodeSnippet = styled(Box)(({ theme, props,editorTheme }) => ({
    backgroundColor: editorTheme === "light" ? theme.colors.extra.whiteColor : theme.colors.extra.mainColor,
    width: "calc(100vw - 273px)",
    
    [theme.breakpoints.down("md")]: {
      width: "calc(100vw - 195px)",
    },
    [theme.breakpoints.down("sm")]: {
        width: "calc(100vw - 50px)",
      },
  ...props,
}));
