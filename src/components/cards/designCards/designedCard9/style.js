import { styled } from "@mui/system";
import { Box } from "@mui/material";
export const Parent = styled(Box)(({ theme }) => ({
  width: "290px",
  height: "300px",
  perspective: "1000px",
  "&:hover .card": {
    transform: "rotate3d(1, 1, 0, 30deg)",
    background:theme.colors.extra.newColor18,
    boxShadow:
      "rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px",
  },
  "&:hover .social-button": {
    transform: "translate3d(0, 0, 50px)",
    boxShadow: "rgba(5, 71, 17, 0.2) -5px 20px 10px 0px",
  },
}));

export const Card = styled(Box)(({ theme }) => ({
  height: "100%",
  borderRadius: "50px",
  background:
    "linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%)",
  transition: "all 0.5s ease-in-out",
  transformStyle: "preserve-3d",
  boxShadow:
    "rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px",
}));

export const Glass = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: "8px",
  borderRadius: "55px",
  borderTopRightRadius: "100%",
  background: `linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%)`,
  transformStyle: "preserve-3d",
  transform: "translate3d(0px, 0px, 25px)",
  borderLeft: "1px solid white",
  borderBottom: "1px solid white",
  transition: "all 0.5s ease-in-out",
}));

export const Bottom = styled(Box)(({ theme }) => ({
  padding: "10px 12px",
  transformStyle: "preserve-3d",
  position: "absolute",
  bottom: "20px",
  left: "20px",
  right: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transform: "translate3d(0, 0, 26px)",
}));

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
