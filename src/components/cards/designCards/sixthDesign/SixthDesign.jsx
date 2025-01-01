import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { PrimaryText } from "../../../../assets/css/common.styles";
import { v4 as uuidv4 } from "uuid";

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

const Card = styled(Box)(({ theme, commonColor }) => ({
  flex: "1 1 250px", // Allow cards to adapt flexibly
  maxWidth: "250px", // Maintain consistent width
  minHeight: "350px", // Ensure consistent height
  padding: "4rem 1rem 7rem 1rem",
  backgroundColor: commonColor || "teal", // Use commonColor or fallback to teal
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "1rem",
  "&:after": {
    content: '""',
    display: "block",
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    borderBottom: `20px solid ${commonColor || "gray"}`,
    borderLeft: `20px solid ${commonColor || "gray"}`,
    borderRight: `20px solid ${commonColor || "gray"}`, // Use commonColor or fallback
    borderTop: `20px solid ${commonColor || "gray"}`,
    position: "absolute",
    filter: "drop-shadow(-5px 5px 3px rgba(0,0,0,0.5))",
  },
  "&:before": {
    content: '""',
    display: "block",
    width: 0,
    height: 0,
    borderTop: `40px solid ${commonColor || "gray"}`,
    borderRight: `40px solid ${commonColor || "gray"}`,
    borderLeft: `40px solid ${commonColor || "gray"}`, // Use commonColor or fallback
    borderBottom: `40px solid ${commonColor || "gray"}`,
    bottom: 0,
    left: 0,
    position: "absolute",
    filter: "drop-shadow(7px -7px 5px rgba(0,0,0,0.5))",
  },
}));

const IconBox = styled(Box)(({ theme, commonColor }) => ({
  width: "6rem",
  aspectRatio: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "2.5rem",
  border: `0.4rem solid ${commonColor || "teal"}`,
  borderRadius: "50%",
  background: commonColor || "teal",
  boxShadow:
    "-0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.45), inset -0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.45)",
}));

const SixthDesign = ({ listData }) => {
  return (
    <CardContainer>
      {listData?.map((items) => (
        <Card key={uuidv4()} commonColor={items.accentColor}>
          <IconBox commonColor={items.accentColor}>
            <i className={items.icon}></i>
          </IconBox>
          <PrimaryText
            props={{
              fontSize: "2rem",
              fontWeight: 500,
              color: items.color || "white",
            }}
          >
            {items.title}
          </PrimaryText>
          {items.description && (
            <PrimaryText
              props={{
                fontSize: "0.8rem",
                fontWeight: 300,
                color: items.color || "white",
              }}
            >
              {items.description}
            </PrimaryText>
          )}
        </Card>
      ))}
    </CardContainer>
  );
};

export default SixthDesign;
