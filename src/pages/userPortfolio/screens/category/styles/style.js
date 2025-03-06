import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "70vh",
  backgroundColor: "#f5f5f5",
  background: "linear-gradient(135deg, #f5f5f5, #c1c1c1)",
  animation: "backgroundAnimation 10s infinite alternate",
  padding: "20px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "40px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

export const ContactItems = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    gap: "15px",
  },
}));
