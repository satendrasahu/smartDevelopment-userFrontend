import React from "react";
import "./style.css";
import { Box } from "@mui/material";
import { PrimaryText } from "../../../../assets/css/common.styles";

const FifthDesignedCard = (props) => {
  const { listData } = props;

  return (
    <Box className="mainCard">
      {listData.map((card, index) => (
        <Box
          key={index}
          style={{ "--accent-color": card.accentColor }}
          className="innerCard"
        >
          <Box className="icon">
            <i className={card.icon}></i>
          </Box>
          <PrimaryText props={{ fontSize: "1.3rem", fontWeight: 700, color: "#000" }}>
            {card.title}
          </PrimaryText>
          <PrimaryText props={{ fontSize: "0.875rem", fontWeight: 300, color: "#000" }}>
            {card.description}
          </PrimaryText>
        </Box>
      ))}
    </Box>
  );
};

export default FifthDesignedCard;
