import { Box, styled, Typography } from "@mui/material";

export const StyledAchievementsContainer = styled(Box)(({ theme }) => ({
  padding: "2rem 4rem",
  background: `linear-gradient(135deg,  ${theme.palette.secondary.main} 50%, ${theme.palette.primary.main} 100%)`,
  minHeight: "93vh",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: `0 25px 60px rgba(0, 0, 0, 0.1)`,
  animation: "fadeIn 1.5s ease-in-out",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0.5rem",
  },
}));

export const HeroText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  textAlign: "center",
  marginBottom: "1rem",
  fontSize: "clamp(3rem, 6vw, 5rem)",
  letterSpacing: "1px",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

export const SubtitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
  color: theme.palette.secondary.main,
  textAlign: "center",
  marginBottom: "2rem",
  fontStyle: "italic",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

export const StyledImage = styled("img")({
    width: "100%", // Make image larger
    // maxWidth: "500px", // Increase the max width of the image
    height: "auto",
    borderRadius: "10%",
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
        transform: "scale(0.8)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
    "&:hover": {
      transform: "scale(1.1)", // Slight zoom effect on hover
      boxShadow: `0 25px 60px rgba(0, 0, 0, 0.15)`,
    },
  });
// Achievements List Styles
const styles = {
  achievementsList: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)",
    marginTop: "2rem",
    transition: "box-shadow 0.3s ease-in-out",
    "@media (max-width: 600px)": {
      padding: "1.5rem",
    },
    "@media (max-width: 480px)": {
      padding: "1rem",
    },
  },
  achievementItem: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    color: "#333",
    lineHeight: 1.6,
    fontWeight: 400,
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateX(5px)",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
    },
  },
  icon: {
    marginRight: "1rem",
    color: "#ffb300", // Gold color for achievement icons
  },
};

export default styles;

