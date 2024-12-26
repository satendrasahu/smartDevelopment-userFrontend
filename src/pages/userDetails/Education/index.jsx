import React from "react";
import "keen-slider/keen-slider.min.css";
import { Box } from "@mui/material";
import { StyledSkillsContainer } from "./style";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  PrimaryText,
} from "../../../assets/css/common.styles";
import { colors } from "../../../theme/colors";
import { v4 as uuidv4 } from "uuid";
import AnimationOne from "../../../components/ui_kit/Headings/AnimationOne";

export default function Education() {
  const { t } = useTranslation();
  const educationData = [
    {
      index: 1,
      degreeName: " Master of Computer Aplication (MCA)",
      collageName: "Birla Institute of Technology Mesra Ranchi(Jharkhand).",
      duration: "2018-2021",
      collageWebsite: "https://www.bitmesra.ac.in/",
    },
    {
      index: 2,
      degreeName: "BatcherBachelor of Science in Computer Science",
      collageName: "Govt. Nirbhay Singh Patel Science College (DAVV) Indore.",
      duration: "2015-2018",
      collageWebsite: "https://gnspsc.ac.in/",
    },
  ];

  return (
    <StyledSkillsContainer>
      <CenteredItemBox>
        {/* <PrimaryText>Education</PrimaryText> */}
        <AnimationOne/>
      </CenteredItemBox>
      {educationData?.map((eduData) => {
        return (
          <CenteredItemBox
            props={{
              width: "100%",
              maxWidth: "1500px",
              background: "#fff",
              width: "100%",
              padding: "1rem",
              borderRadius: "1rem",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out", // Smooth transition for all
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", 
              },
            }}
            onClick={() => window.open(eduData?.collageWebsite)}
          >
            <Box key={uuidv4()}>
              <PrimaryText
                props={{
                  color: colors.extra.highLightColor,
                  fontSize: "2rem",
                  fontWeight: "800",
                  fontStyle: "oblique",
                  fontFamily: "Abril Fatface, serif", //"Cinzel, serif"
                  transition: "top 0.3s ease, background 0.3s ease",
                  animation: "fadeIn 2s ease-in-out",
                }}
              >
                {eduData?.degreeName}
              </PrimaryText>
              <PrimaryText
                props={{
                  color: colors.extra.darkColor,
                  fontSize: "1.5rem",
                  fontStyle: "italic",
                  fontFamily: "Spectral, serif",
                  transition: "top 0.3s ease, background 0.3s ease",
                  animation: "fadeIn 2.5s ease-in-out",
                }}
              >
                {eduData?.collageName}
              </PrimaryText>
              <PrimaryText
                props={{
                  color: colors.extra.darkColor,
                  fontSize: "1rem",
                  fontFamily: "Cinzel, serif",
                  transition: "top 0.3s ease, background 0.3s ease",
                  animation: "fadeIn 3s ease-in-out",
                }}
              >
                {eduData?.duration}
              </PrimaryText>
            </Box>
          </CenteredItemBox>
        );
      })}
    </StyledSkillsContainer>
  );
}
