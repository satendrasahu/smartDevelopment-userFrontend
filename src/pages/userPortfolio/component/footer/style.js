import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const FooterStyle = styled(Box)(({ theme }) => ({
    padding : theme.spacing(1),
    color : theme.colors.primary.textColor,
    background: theme.colors.primary.mainColor,
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2,0.5),
      },
}));


export const ProfileBox = styled(Box)(({ theme }) => ({
  display :"flex",
  flexDirection:"column",
  alignItems:'center',
  gap :"1rem",
  padding : theme.spacing(1),
}));


export const StyledImage = styled("img")(({ theme }) => ({
  width: "20rem",
  height:"20rem", // Make image larger
  height: "auto",
  aspectRatio: "1",
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