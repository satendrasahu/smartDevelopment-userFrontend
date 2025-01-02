import { Box, Button, styled, Typography } from "@mui/material";

export const StyledSkillsContainer = styled(Box)(({ theme, props }) => ({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "5rem",
  justifyContent: "center",
  background:
    "linear-gradient(135deg, rgb(215, 215, 215), rgba(255,255,255,0.75))",
  alignItems: "center",
  minHeight: "100vh",
  transition: "background 0.5s ease",
  animation: "fadeIn 1.5s ease-in-out",
  // boxShadow: `0 25px 60px rgba(0, 0, 0, 0.15)`,
  // borderRadius: "0.25rem",
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem",
  },
}));

export const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "30vh",
  maxWidth: "80vw",
  width: "100%",
  borderRadius: "0.25rem 10rem 0rem 10rem ",
  border: `1rem solid ${theme.colors.extra.newColor18}`,
  opacity: "1",
  display: "flex",
  gap: "1rem",
  background: theme.colors.extra.newColor18,
  boxShadow:
    "inset 5px 5px 5px rgba(0, 0, 0, 0.5), inset -5px -5px 15px rgba(255, 255, 255, 0.5), 5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(255, 255, 255, 0.5)",

  [theme.breakpoints.down("xl")]: {
    maxWidth: "100% !important",
    width: "100%",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const ShortNameBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  width: "30rem",
  borderRadius: "0.25rem 10rem 0rem 10rem ",
  border: `1rem solid ${theme.colors.extra.newColor18}`,
  opacity: "1",
  background: theme.colors.extra.newColor18,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "top 0.3s ease, background 0.3s ease",
  animation: "fadeIn 2s ease-in-out",
  boxShadow:
    "inset 5px 5px 5px rgba(0, 0, 0, 0.5), inset -5px -5px 15px rgba(255, 255, 255, 0.5), 5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(255, 255, 255, 0.5)",

    [theme.breakpoints.down("md")]: {
      maxWidth: "30rem",
      width: "calc(100% - 2rem)",
      padding: theme.spacing(0.5),
      margin: theme.spacing(0.5),
    },
  }));

export const InnerBox = styled(Box)(({ theme }) => {
  return {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 6, 1, 1),
    width: "100%",
    opacity: "1",
    display: "flex",
    gap: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      borderRadius: "10rem 0.25rem 10rem 0rem ",
      boxShadow:
        "inset 5px 5px 5px rgba(0, 0, 0, 0.5), inset -5px -5px 15px rgba(255, 255, 255, 0.5), 5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(255, 255, 255, 0.5)",
    },

    [theme.breakpoints.down("md")]: {
      borderRadius: "0rem 0rem 0rem 10rem",
      width: "calc(100% - 2rem)",
    },
    "& .contentBox": {
      margin: theme.spacing(3),
      [theme.breakpoints.down("lg")]: {
        margin: theme.spacing(0),
        borderRadius: "10rem 0.25rem 10rem 0rem ",
      },
    },
  };
});
