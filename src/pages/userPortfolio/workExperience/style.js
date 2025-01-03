import { Box, Button, styled, Typography } from "@mui/material";

export const StyledSkillsContainer = styled(Box)(({ theme, props }) => ({
  padding: "1rem auto",
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "70vh",
  transition: "background 0.5s ease",
  animation: "fadeIn 1.5s ease-in-out",
  boxShadow: `0 25px 60px rgba(0, 0, 0, 0.15)`,
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0rem",
  },
}));

export const MainBox = styled(Box)(({ theme }) => ({
  minHeight: "20rem",
  maxWidth: "80vw",
  width: "100%",
  borderRadius: "10em 0rem 10rem 0rem ",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  gap: "1rem",
  background: theme.colors.extra.newColor18,
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
  width: "20rem",
  minWidth: "20rem",
  minHeight: "20rem",
  // width:"min-content",
  borderRadius: "50%",
  border: `1rem solid ${theme.colors.extra.newColor18}`,
  opacity: "1",
  background: theme.colors.extra.newColor18,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  animation: "fadeIn 2s ease-in-out",
  boxShadow:
    "inset 5px 5px 5px rgba(0, 0, 0, 0.5), inset -5px -5px 15px rgba(255, 255, 255, 0.5), 5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(255, 255, 255, 0.5)",
  transition:
    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export const InnerBox = styled(Box)(({ theme }) => {
  return {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    width: "100%",
    height: "100%",
    minHeight: "20rem",
    opacity: "1",
    display: "flex",
    gap: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    // [theme.breakpoints.up("lg")]: {
    borderRadius: "10rem 0.25rem 10rem 0rem ",
    boxShadow:
      "inset 5px 5px 5px rgba(0, 0, 0, 0.5), inset -5px -5px 15px rgba(255, 255, 255, 0.5), 5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(255, 255, 255, 0.5)",
    // },

    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0),
    },
    "& .contentBox": {
      margin: theme.spacing(3),
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      transition:
        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
      [theme.breakpoints.down("lg")]: {
        margin: theme.spacing(0),
        borderRadius: "10rem 0.25rem 10rem 0rem ",
      },
    },
  };
});
