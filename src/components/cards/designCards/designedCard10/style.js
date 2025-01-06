import { Box, styled, Typography } from "@mui/material";

// Individual domain card design with animation and hover effects
export const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "350px",
  minHeight: "400px",
  borderRadius: "0rem 7.5rem 0rem 7.5rem",
  background: "linear-gradient(145deg, #ececec, #ffffff)",
  border: "1rem outset #fff",
  boxShadow:
    "inset 5px 5px 5px rgba(0, 0, 0, 0.5), inset -5px -5px 15px rgba(255, 255, 255, 0.5), 5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(0, 0, 0, 0.5)",
  padding: "25px",
  position: "relative",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    border: "1rem inset #fff",
    boxShadow:
      "inset 5px 5px 5px rgba(0, 0, 0, 0.5), inset -5px -5px 15px rgba(0,0,0,0.5), 5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(255, 255, 255, 0.5)",
  },
  animation: "cardAnimation 1s ease-in-out",
}));

// Icon representing the domain (larger size with hover effect)
export const IconBox = styled(Box)(({ theme, commonColor }) => ({
  width: "6rem",
  aspectRatio: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "2.5rem",
  border: `0.4rem solid ${commonColor || "#fff"}`,
  borderRadius: "50%",
  background: commonColor || "#fff",
  boxShadow:
    "-0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.45), inset -0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.45)",
}));

// Title inside the domain card
export const Title = styled(Typography)({
  fontSize: "22px",
  fontWeight: "bold",
  color: "#333",
});

// Description inside the domain card
export const Description = styled(Typography)({
  fontSize: "16px",
  color: "#777",
  marginBottom: "1.5rem",
  lineHeight: "1.5",
  textAlign: "center",
});
