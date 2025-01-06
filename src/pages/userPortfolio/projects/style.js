import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledWorkProjectContainer = styled(Box)(({ theme, props }) => ({
  padding: "1rem auto",
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "70vh",
  transition: "background 0.5s ease",
  animation: "fadeIn 1.5s ease-in-out",
  background:"#f0f4f8",
  boxShadow: `0 25px 60px rgba(0, 0, 0, 0.15)`,
  padding :theme.spacing(3,2),
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

export const ProjectCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "7rem 0rem 5rem 0rem",
  overflow: "hidden",
  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
  backgroundColor: "#fff",
  padding: theme.spacing(1),
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
export const DomainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "12.5rem",
  width: "12.5rem", // Can also use percentages like "100%"
  aspectRatio: "1", // Ensures the height adjusts to maintain a 1:1 ratio
  borderRadius: "50%",
  padding: theme.spacing(0.5),
  border: "1rem outset #fff",
  boxShadow:
    "-0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.45), inset -0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.45)",
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  // height:"20rem",
  borderRadius: "0.25rem",
  padding: theme.spacing(0.5),
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));

export const BodyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  // height:"calc(100vh - 45rem)",
  // overflow: "auto",
}));

export const TagContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  textAlign: "left",
}));
