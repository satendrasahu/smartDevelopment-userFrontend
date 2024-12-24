import { styled } from "@mui/system";
import { Box, Typography, Button } from "@mui/material";

export const ProjectCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
  backgroundColor: "#fff",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05) rotate(5deg) ",
    boxShadow: "0px 25px 40px rgba(0, 0, 0, 0.15)",
    // background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
  },

  [theme.breakpoints.down("sm")]: {
    "&:hover": {
    transform: "scale(1.05) ",
  },
  },
}));

export const ProjectImage = styled("img")({
  width: "100%",
  height: "250px",
  objectFit: "cover",
  transition: "transform 0.5s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const ProjectDetails = styled(Box)(({ theme }) => ({
  padding: "20px",
}));

export const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.5rem",
  marginBottom: "10px",
}));

export const ProjectDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  marginBottom: "20px",
  color: "#555",
}));

export const ProjectDuration = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#007bff",
  marginBottom: "15px",
}));

export const ProjectButton = styled(Button)(({ theme }) => ({
  marginTop: "15px",
  padding: "10px 20px",
  background: "#007bff",
  color: "#fff",
  "&:hover": {
    background: "#0056b3",
  },
}));

export const TagContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  marginBottom: "10px",
}));

export const globalStyles = {
  "@keyframes backgroundAnimation": {
    "0%": {
      background: "linear-gradient(135deg, #f5f5f5, #c1c1c1)",
    },
    "50%": {
      background: "linear-gradient(135deg, #e6e6e6, #ffffff)",
    },
    "100%": {
      background: "linear-gradient(135deg, #f5f5f5, #c1c1c1)",
    },
  },
};

export default globalStyles;
