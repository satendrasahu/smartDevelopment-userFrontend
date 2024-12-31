import { Box, styled } from "@mui/material";

export const StyledSkillsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 0.5),
  height: "100%",
  background: "linear-gradient(135deg, rgb(215, 215, 215), #c1c1c1)",
  animation: "backgroundAnimation 10s infinite alternate",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "5rem",
  [theme.breakpoints.down("sm")]: {
    padding: "60px 10px",
  },
}));
