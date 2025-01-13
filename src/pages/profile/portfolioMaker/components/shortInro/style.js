
import { Box, Button, styled, Typography } from "@mui/material";
// const fallbackImage ="https://static.vecteezy.com/system/resources/previews/024/999/781/non_2x/3d-sportsman-character-exuding-confidence-with-arms-crossed-pose-in-a-dynamic-setting-free-png.png"

export const StyledShortIntroContainer = styled(Box)(({ theme, props }) => ({
  padding: theme.spacing(5,3.5),
  background: `linear-gradient(135deg, ${theme.colors.primary.mainColor} 40%, ${theme.colors.secondary.mainColor} 100%)`, // Gradient background
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // minHeight: "80vh",
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

export const StyledImage = styled("img")(({ theme }) => ({
  width: "100%", // Make image larger
  height: "auto",
  maxHeight: "60vh",
  borderRadius: "50%",
  // boxShadow: `0 20px 50px rgba(0, 0, 0, 0.1)`, // Softer shadow
  transition: "transform 0.5s ease-in-out, box-shadow 0.3s ease",  
  opacity: 0,
  animation: "fadeInImage 1s forwards, zoomInImage 0.5s ease-out", // Animation for zoom effect
  // background: `url(${fallbackImage}) center center / cover no-repeat`, // Fallback background image
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
