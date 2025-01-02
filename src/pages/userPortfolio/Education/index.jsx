import React from "react";
import {
  MainBox,
  StyledSkillsContainer,
  ShortNameBox,
  InnerBox,
} from "./style";
import { CenteredItemBox, PrimaryText } from "../../../assets/css/common.styles";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";
import { colors } from "../../../theme/colors";
import Heading1 from "../../../components/ui_kit/Headings/heading1/Heading1";
import { useTranslation } from "react-i18next";
const WorkExperience = () => {
  const {t} = useTranslation()
  const educationData = [
    {
      index: 1,
      courseName: " Master of Computer Aplication",
      shortCourseName: "MCA",
      shortCollageName: "BIT(Mesra)",
      collageName: "Birla Institute of Technology Mesra, Ranchi(Jharkhand).",
      duration: "2018-2021",
      collageWebsite: "https://www.bitmesra.ac.in/",
    },
    {
      index: 2,
      courseName: "BatcherBachelor of Science in Computer Science",
      shortCourseName: "BSC(cse)",
      shortCollageName: "GNSPSC (Indore)",
      collageName:
        "Govt. Nirbhay Singh Patel Science College (DAVV), Indore(Madhya Pradesh).",
      duration: "2015-2018",
      collageWebsite: "https://gnspsc.ac.in/",
    },
  ];

  return (
    <StyledSkillsContainer>
      <CenteredItemBox>
        <Heading1 title={t("education")}/>
      </CenteredItemBox>
      {educationData?.map((eduData) => {
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
                {eduData?.shortCourseName}
              </PrimaryText>
              <PrimaryText
                props={{
                  fontSize: "clamp(1rem, 1.25vw, 1.5rem)",
                  textAlign: "center",
                }}
              >
                {eduData?.shortCollageName}
              </PrimaryText>
              <PrimaryText
                props={{ fontSize: "0.875rem", textAlign: "center" }}
              >
                {eduData?.duration}
              </PrimaryText>
            </ShortNameBox>
            <InnerBox>
              <Box key={uuidv4()} className="contentBox">
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
                  {eduData?.courseName}
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
                  {eduData?.collageName}
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
                  {eduData?.duration}
                </PrimaryText>
              </Box>
            </InnerBox>
          </MainBox>
        );
      })}
    </StyledSkillsContainer>
  );
};

export default WorkExperience;
