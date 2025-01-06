import React from "react";
import { InnerBox, MainBox, ShortNameBox } from "./style";
import { Box } from "@mui/material";
import { colors } from "../../../../theme/colors";
import { PrimaryText } from "../../../../assets/css/common.styles";

const DesignedCard11 = (props) => {
  const {
    shortCourseName,
    shortCollageName,
    courseName,
    collageName,
    duration,
  } = props;
  return (
    <MainBox>
      <ShortNameBox>
        <PrimaryText
          props={{
            fontSize: "clamp(1.5rem, 1.75vw, 2rem)",
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          {shortCourseName}
        </PrimaryText>
        <PrimaryText
          props={{
            fontSize: "clamp(1rem, 1.25vw, 1.5rem)",
            textAlign: "center",
          }}
        >
          {shortCollageName}
        </PrimaryText>
        <PrimaryText props={{ fontSize: "0.875rem", textAlign: "center" }}>
          {duration}
        </PrimaryText>
      </ShortNameBox>
      <InnerBox>
        <Box className="contentBox">
          <PrimaryText
            props={{
              color: colors.extra.highLightColor,
              fontSize: "clamp(1.5rem, 1.75vw, 2rem)",
              fontWeight: "clamp(600, 700, 8000)",
              fontStyle: "oblique",
              fontFamily: "Abril Fatface, serif", //"Cinzel, serif"
              transition: "top 0.3s ease, background 0.3s ease",
              animation: "fadeIn 2s ease-in-out",
              textAlign: "center",
            }}
          >
            {courseName}
          </PrimaryText>
          <PrimaryText
            props={{
              color: colors.extra.darkColor,
              fontSize: "clamp(1rem, 1.25vw, 1.5rem)",
              fontStyle: "italic",
              fontFamily: "Spectral, serif",
              transition: "top 0.3s ease, background 0.3s ease",
              animation: "fadeIn 2.5s ease-in-out",
              textAlign: "center",
            }}
          >
            {collageName}
          </PrimaryText>
          <PrimaryText
            props={{
              color: colors.extra.darkColor,
              fontSize: "clamp(0.875rem, 1vw, 1rem)",
              fontFamily: "Cinzel, serif",
              transition: "top 0.3s ease, background 0.3s ease",
              animation: "fadeIn 3s ease-in-out",
              textAlign: "center",
            }}
          >
            {duration}
          </PrimaryText>
        </Box>
      </InnerBox>
    </MainBox>
  );
};

export default DesignedCard11;
