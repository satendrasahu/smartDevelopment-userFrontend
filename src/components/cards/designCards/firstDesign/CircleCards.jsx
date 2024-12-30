import React from "react";
import styles from "./CircleCards.module.css";
import { Box } from "@mui/material";
import { PrimaryText } from "../../../../assets/css/common.styles";
const CircleCards = (props) => {
  const { listData } = props;

  return (
    <Box className={styles.circleCardsList}>
      {listData?.map((step, index) => (
        <Box
          key={index}
          className={styles.circleCard}
          style={{ "--accent-color": step.accentColor }} // Apply dynamic color here
        >
          <Box
            sx={{
              fontSize: "2rem",
              color: step.accentColor,
              textAlign: "center",
            }}
          >
            <i className={`fa-solid ${step.icon}`}></i>
          </Box>
          <PrimaryText props={{ fontSize: "2rem", fontWeight: 500 }}>
            {step.title}
          </PrimaryText>
          <PrimaryText props={{ fontSize: "0.8rem", fontWeight: 300 }}>
            {step.description}
          </PrimaryText>
        </Box>
      ))}
    </Box>
  );
};

export default CircleCards;
