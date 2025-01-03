import React from "react";
import { Box, useTheme } from "@mui/material";
import {
  InnerBox,
  MainBox,
  ShortNameBox,
  StyledSkillsContainer,
} from "./style";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  PrimaryText,
} from "../../../assets/css/common.styles";
import { colors } from "../../../theme/colors";
import { v4 as uuidv4 } from "uuid";
import Heading1 from "../../../components/ui_kit/Headings/heading1/Heading1";

export default function WorkExperience() {
  const { t } = useTranslation();
  const theme = useTheme();
  const experienceData = [
    {
      index: 1,
      // desigNationName: "Solution Engineer",
      // technologyName: "MERN + NEXT",
      designationTechName:
        "Solution Engineer | Full Stack Developer (MERN + Next.js)",
      companyName: "Birla Institute of Technology Mesra, Ranchi(Jharkhand).",
      duration: "2018-2021",
      companyWebsite: "https://www.bitmesra.ac.in/",
    },
    {
      index: 2,
      desigNationName: "MERN Stack devloper",
      technologyName: "MERN + NEXT",
      designationTechName: "Full Stack Developer (MERN + Next.js)",
      companyName:
        "Govt. Nirbhay Singh Patel Science College (DAVV), Indore(Madhya Pradesh).",
      duration: "2015-2018",
      companyWebsite: "https://gnspsc.ac.in/",
    },
  ];

  return (
    <StyledSkillsContainer>
      {experienceData?.map((expData) => {
        return (
          <MainBox key={uuidv4()}>
            <ShortNameBox>
              <PrimaryText
                props={{
                  fontSize: "clamp(1.5rem, 1.75vw, 2rem)",
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                {expData?.desigNationName}
              </PrimaryText>
              <PrimaryText
                props={{
                  fontSize: "clamp(1rem, 1.25vw, 1.5rem)",
                  textAlign: "center",
                }}
                // onClick={() => window.open(expData?.collageWebsite)}
              >
                {expData?.technologyName}
              </PrimaryText>
              <PrimaryText
                props={{ fontSize: "0.875rem", textAlign: "center" }}
              >
                {expData?.duration}
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
                  {expData?.designationTechName}
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
                  {expData?.companyName}
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
                  {expData?.duration}
                </PrimaryText>
              </Box>
            </InnerBox>
          </MainBox>
        );
      })}
    </StyledSkillsContainer>
  );
}
