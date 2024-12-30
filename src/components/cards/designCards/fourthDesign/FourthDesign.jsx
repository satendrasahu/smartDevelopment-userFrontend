import React from "react";
import "./style.css";
import { Box } from "@mui/material";
import { PrimaryText } from "../../../../assets/css/common.styles";

const FourthDesign = (props) => {
  const { listData } = props;

  return (
    <Box className="forthDesignMainCard">
      {listData?.map((item, index) => (
        <Box key={index} className="forthDesignItem" style={{ "--accent-color": item.accentColor }}>
          <Box className="icon">
            <i className={item.iconClass}></i>
          </Box>
          <PrimaryText
            props={{ fontSize: "1.25rem", fontWeight: 700, padding: "0.125rem" }}
          >
            {item.title}
          </PrimaryText>
          <PrimaryText
            props={{ fontSize: "0.8rem", fontWeight: 300, padding: "0.125rem" }}
          >
            {item.description}
          </PrimaryText>
        </Box>
      ))}
    </Box>
  );
};

export default FourthDesign;
