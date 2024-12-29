import { Box, styled } from "@mui/material";

export const StyledSingleCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflowX:"hidden",
  height:"25vh",
  [theme.breakpoints.down("sm")]: {
    height:"44vh",
  },

  "& .scene": {
    width: "260px",
    height: "200px",
    borderRadius: "0.5rem",
    perspective: "1000px",
    position: "relative",
  },
  "& .scene .carousel.keen-slider": {
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "visible",
    top: "-50px",
    transform: "translateZ(-288px)",
    transformStyle: "preserve-3d",
  },
  "& .carousel__cell": {
    position: "absolute",
    width: "240px",
    // left: "10px",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    color: "#fff",
    fontWeight: 500,
    textAlign: "center",
    borderRadius:"0.5rem"
  },
}));
