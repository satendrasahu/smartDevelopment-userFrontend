import React from "react";
import "./style.css";
import { Box } from "@mui/material";
import { PrimaryText } from "../../../../assets/css/common.styles";

const StandingCards = (props) => {
  const { listData } = props;

  return (
    <Box className="mainBox">
      {listData?.map((item, index) => (
        <Box
          className="designedCard"
          key={index}
          style={{ "--accent-color": item?.accentColor }}
        >
          <Box className="icon">
            <i className={`fa-brands ${item?.icon}`}></i>
          </Box>
          <PrimaryText className="title" props={{ color: listData?.color }}>
            {item?.title}
          </PrimaryText>
          {item?.description && (
            <PrimaryText className="descr" props={{ color: listData?.color }}>
              {item.description}
            </PrimaryText>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default StandingCards;
