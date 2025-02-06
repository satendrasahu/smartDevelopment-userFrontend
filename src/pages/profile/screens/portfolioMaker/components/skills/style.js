import { Box, styled } from "@mui/material";
export const StyledSkillsContainer = styled(Box)(({ theme, props }) => ({
  padding: "2rem 0rem !important",
  background: `linear-gradient(135deg, ${theme.colors.primary.mainColor} 40%, ${theme.colors.secondary.mainColor} 100%)`, 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // minHeight: "80vh",
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
    minHeight: "auto",
  },
}));
