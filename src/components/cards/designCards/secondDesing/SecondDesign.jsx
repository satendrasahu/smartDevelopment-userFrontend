import React from "react";
import "./style.css";
import { Box } from "@mui/material";
import { PrimaryText } from "../../../../assets/css/common.styles";

const SecondDesign = (props) => {
  const { listData } = props;
  const halfLength = Math.ceil(listData?.length / 2); // Calculate the midpoint
  const firstHalf = listData.slice(0, halfLength); // First half of the list
  const secondHalf = listData.slice(halfLength); // Second half of the list

  return (
    <Box style={{ zIndex: 0, position: "relative" }}>
      <Box className="uiCircles">
        {firstHalf?.map((item, index) => (
          <Box
            className="innerBox"
            key={index}
            style={{
              "--accent-color": item?.accentColor,
            }}
            sx={{
              marginTop: { xs: 0, sm: 0.5 },
            }}
          >
            <i className={`fa-brands ${item?.icon}`}></i>
            <PrimaryText
              props={{
                fontSize: "1rem",
                fontWeight: 500,
                color: listData?.color,
              }}
            >
              {item?.title}
            </PrimaryText>
          </Box>
        ))}
      </Box>

      <Box
        className="uiCircles uiCircles-vertical"
        sx={{
          marginTop: { xs: 0, sm: 0.25 },
        }}
      >
        {secondHalf?.map((item, index) => (
          <Box
            className="innerBox"
            key={index}
            style={{ "--accent-color": item?.accentColor }}
          >
            <i className={`fa-brands ${item?.icon}`}></i>
            <PrimaryText
              props={{
                fontSize: "1rem",
                fontWeight: 500,
                color: listData?.color,
              }}
            >
              {item?.title}
            </PrimaryText>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SecondDesign;
