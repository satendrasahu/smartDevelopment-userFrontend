import { Box, Button, styled, Typography } from "@mui/material";

export const StyledAboutMeContainer = styled(Box)(({ theme, props }) => ({
  padding: "1rem 3rem",
  background: `linear-gradient(135deg, ${theme.colors.primary.mainColor} 40%, ${theme.colors.secondary.mainColor} 100%)`, // Gradient background
  // Gradient background
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



export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  color: theme.colors.primary.textColor,
  fontSize: "clamp(1rem, 3vw, 1.3rem)",
  maxWidth: "80%",
  margin: "auto",

  marginBottom:"1rem",
  // textAlign: "center",
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));


export const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: "3rem",
  padding: "1rem 2.5rem",
  fontSize: "1.5rem",
  backgroundColor: theme.colors.primary.btnColor,
  color: "#fff", // Light text for the button
  borderRadius: "30px",
  textTransform: "none",
  fontWeight: 600,
  border: `2px solid ${theme.colors.extra.highLightColor}`, // Adding border to make the button pop
  "&:hover": {
    backgroundColor: theme.colors.primary.btnHoverColor,
    borderColor: theme.colors.extra.highLightColor, // Keep border color on hover
  },
}));




