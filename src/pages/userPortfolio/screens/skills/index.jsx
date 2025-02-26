import React from "react";
import { StyledSkillsContainer } from "./styles/style";
import NeonText from "../../../../components/ui_kit/Headings/TextAnimationTwo/AnimationTwo";
import useSkillsHook from "./hooks/useSkillsHook";
import SkillSection from "./components/SkillsSection";

const SkillsData = () => {
  const { t, skills } = useSkillsHook();
  return (
    <StyledSkillsContainer>
      <NeonText title={t("skills")} />
      {skills.map((skill, index) => (
        <SkillSection key={index} {...skill} />
      ))}
    </StyledSkillsContainer>
  );
};

export default SkillsData;
