import React from "react";
import { useTheme } from "@mui/material";
import {
  StyledWorkExperienceContainer,
} from "./style";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import Heading1 from "../../../components/ui_kit/Headings/heading1/Heading1";
import DesignedCard12 from "../../../components/cards/designCards/designedCard12/DesignedCard12";
import { CenteredItemBox } from "../../../assets/css/common.styles";

export default function WorkExperience() {
  const { t } = useTranslation();
  const theme = useTheme();
  const experienceData = [
    {
      index: 1,
      desigNationName: "Solution Engineer",
      technologyName: "MERN + NEXT",
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
    <StyledWorkExperienceContainer>
       <CenteredItemBox>
              <Heading1 title={t("workExperience")} />
            </CenteredItemBox>
      {experienceData?.map((expData) => {
        return (
         <DesignedCard12 {...expData}  key={uuidv4()}/>
        );
      })}
    </StyledWorkExperienceContainer>
  );
}
