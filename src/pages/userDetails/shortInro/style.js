import { Box, Button, styled, Typography } from "@mui/material";

export const StyledShortIntroContainer = styled(Box)(({ theme, props }) => ({
  padding: "3.5rem",
  background: `linear-gradient(135deg, ${theme.colors.primary.mainColor} 40%, ${theme.colors.secondary.mainColor} 100%)`, // Gradient background
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "93vh",
  transition: "background 0.5s ease",
  animation: "fadeIn 1.5s ease-in-out",
  boxShadow: `0 25px 60px rgba(0, 0, 0, 0.15)`,
  borderRadius: "1rem 1rem 0rem 0rem",
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
    minHeight: "auto",
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

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  color: theme.colors.primary.textColor,
  fontSize: "clamp(1rem, 3vw, 1.3rem)",
  maxWidth: "80%",
  margin: "auto",
  textAlign: "center",
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export const StyledImage = styled("img")(({ theme }) => ({
  width: "100%", // Make image larger
  // border:"1px solid red",
  // maxWidth: "500px", // Increase the max width of the image
  height: "auto",
  maxHeight: "84.5vh",
  // display:"hidden",
  borderRadius: "50%",
  // boxShadow: `0 20px 50px rgba(0, 0, 0, 0.1)`, // Softer shadow
  transition: "transform 0.5s ease-in-out, box-shadow 0.3s ease",
  opacity: 0,
  animation: "fadeInImage 1s forwards, zoomInImage 0.5s ease-out", // Animation for zoom effect
  "@keyframes fadeInImage": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes zoomInImage": {
    "0%": {
      transform: "scale(0.1)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
  "&:hover": {
    transform: "scale(1.1)", // Slight zoom effect on hover
    boxShadow: `0 25px 60px rgba(0, 0, 0, 0.15)`,
  },

  [theme.breakpoints.down("sm")]: {
    maxHeight: "60vh",
    maxWidth: "85vw",
    borderRadius: "50%",
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
