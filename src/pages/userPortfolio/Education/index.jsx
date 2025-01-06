import React from "react";
import { StyledSkillsContainer } from "./style";
import { CenteredItemBox } from "../../../assets/css/common.styles";
import { v4 as uuidv4 } from "uuid";
import Heading1 from "../../../components/ui_kit/Headings/heading1/Heading1";
import { useTranslation } from "react-i18next";
import DesignedCard11 from "../../../components/cards/designCards/designedCard11/DesignedCard11";
const WorkExperience = () => {
  const { t } = useTranslation();
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
        <Heading1 title={t("education")} />
      </CenteredItemBox>
      {educationData?.map((eduData) => {
        return <DesignedCard11 {...eduData} key={uuidv4()} />;
      })}
    </StyledSkillsContainer>
  );
};

export default WorkExperience;
