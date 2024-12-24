import React from "react";
import { Box } from "@mui/material";
import { PrimaryText } from "../../../assets/css/common.styles";
import { colors } from "../../../theme/colors";

const TitleHeading = ({ title,subTitle }) => {
  return (
    <>
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PrimaryText>{title}</PrimaryText>
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
          opacity: 0.2,
        }}
      >
        <PrimaryText props={{
             fontSize: "2.5rem",
             fontStyle:"italic",
             color: colors.extra.highLightColor,

        }}>{subTitle}</PrimaryText>
      </Box>
    </Box>

    </>
  );
};

export default TitleHeading;
