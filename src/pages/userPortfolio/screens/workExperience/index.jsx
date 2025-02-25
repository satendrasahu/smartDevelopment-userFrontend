import React from "react";
import { StyledWorkExperienceContainer } from "./styles/style";
import { v4 as uuidv4 } from "uuid";
import Heading1 from "../../../../components/ui_kit/Headings/heading1/Heading1";
import DesignedCard12 from "../../../../components/cards/designCards/designedCard12/DesignedCard12";
import { CenteredItemBox } from "../../../../assets/css/common.styles";
import useWorkExperience from "./hooks/useWorkExperience";

export default function WorkExperience() {
  const { t, experienceData } = useWorkExperience();
  return (
    <StyledWorkExperienceContainer>
      <CenteredItemBox>
        <Heading1 title={t("workExperience")} />
      </CenteredItemBox>
      {experienceData?.map((expData) => {
        return <DesignedCard12 {...expData} key={uuidv4()} />;
      })}
    </StyledWorkExperienceContainer>
  );
}
