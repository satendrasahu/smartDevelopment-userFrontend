import { Box,styled } from "@mui/material";

export const StyledSkillsContainer = styled(Box)(({ theme, props }) => ({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "5rem",
  justifyContent: "center",
  background:
    "linear-gradient(135deg, rgb(215, 215, 215), rgba(255,255,255,0.75))",
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
    padding: "0.5rem",
  },
}));
