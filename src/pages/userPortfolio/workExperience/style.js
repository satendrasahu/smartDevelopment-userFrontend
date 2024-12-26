import { Box, Button, styled, Typography } from "@mui/material";

export const StyledSkillsContainer = styled(Box)(({ theme, props }) => ({
  padding: "1rem 3rem",
 display: "flex",
  justifyContent: "center",
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
    padding: "0rem",
  },
}));






export const HeroText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.colors.primary.textColor,
  textAlign: "center",
  marginBottom: "1rem",
  fontSize: "clamp(3rem, 6vw, 5rem)",
  letterSpacing: "1px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
}));

export const SubtitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
  color: theme.colors.extra.highLightColor, // Using highlight color for distinction
  textAlign: "center",
  marginBottom: "2rem",
  fontStyle: "italic",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));





