import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { colors } from "../../../../theme/colors";

const ToolGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "2rem",
  width: "100%",
}));

const ToolCard = styled(Box)(({ color }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: `linear-gradient(45deg, ${color}, #000000)`,
  padding: "30px",
  borderRadius: "16px",
  width: "180px",
  height: "210px",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  opacity: 0.9,
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
    background: `linear-gradient(45deg, ${colors.extra.newColor1}, ${colors.extra.newColor2}, ${colors.extra.mainColor})`,
    opacity: 1,
  },
}));

const ToolIcon = styled("i")({
  fontSize: "4rem",
  marginBottom: "15px",
  color: "#fff",
  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
  "&:hover": {
    transform: "rotate(20deg)",
    opacity: 1,
  },
});

const ToolLabel = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "600",
  color: "#fff",
  transition: "color 0.3s ease-in-out, text-shadow 0.3s ease-in-out",
  "&:hover": {
    color: "#FFD700",
    textShadow: "0px 0px 20px rgba(255, 215, 0, 0.8)",
  },
});

const ToolCardComponent = ({ icon, title, color }) => (
  <ToolCard color={color}>
    <ToolIcon className={icon} />
    <ToolLabel>{title}</ToolLabel>
  </ToolCard>
);

const DesignedCard8 = (props) => {
  const { listData } = props;
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <ToolGrid>
        {listData?.map((tool, index) => (
          <ToolCardComponent
            key={uuidv4()}
            icon={tool.icon}
            title={tool.title}
            color={tool.accentColor}
          />
        ))}
      </ToolGrid>
    </Box>
  );
};

export default DesignedCard8;
