import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const DomainSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap:"3rem",
  padding: "80px 20px",
  background: "linear-gradient(135deg, #f5f5f5, #c1c1c1)",
  animation: "backgroundAnimation 10s infinite alternate",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "60px 10px",
  },
}));
export const DomainGridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr", // Stack cards on mobile
  },
}));
