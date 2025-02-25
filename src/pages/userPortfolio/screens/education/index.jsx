import React from "react";
import { StyledSkillsContainer } from "./styles/style";
import { CenteredItemBox } from "../../../../assets/css/common.styles";
import { v4 as uuidv4 } from "uuid";
import Heading1 from "../../../../components/ui_kit/Headings/heading1/Heading1";
import DesignedCard11 from "../../../../components/cards/designCards/designedCard11/DesignedCard11";
import useEducationHook from "./hooks/useEducationHook";

const WorkExperience = () => {
  const { t, educationData } = useEducationHook();
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
