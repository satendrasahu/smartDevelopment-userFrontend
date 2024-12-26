import React from "react";
import "keen-slider/keen-slider.min.css";
import { Grid } from "@mui/material";
import { HeroText, StyledSkillsContainer } from "./style";
import { useTranslation } from "react-i18next";
import ThirdCard from "../../../components/cards/ThirdCard";

export default function Skills() {
  const { t } = useTranslation();
  const skillsData = [
    { index: 1, heading: "aviator", title: "casino" },
    { index: 2, heading: "aviator", title: "casino" },
    { index: 3, heading: "aviator", title: "casino" },
    { index: 4, heading: "aviator", title: "casino" },
    { index: 5, heading: "aviator", title: "casino" },
    { index: 6, heading: "aviator", title: "casino" },
    { index: 7, heading: "aviator", title: "casino" },
  ];
  
  const allSkillsData = [
    {
      skillType: "Casino",
      skillsData, // Entire skillsData array
    },
    {
      skillType: "Sports",
      skillsData: skillsData.slice(2, 3), // Only 1 item (index 3)
    },
    {
      skillType: "Sports",
      skillsData: skillsData.slice(0, 3), // First 3 items (indices 1, 2, 3)
    },
    {
      skillType: "Sports",
      skillsData: skillsData.slice(0, 4), // First 4 items (indices 1, 2, 3, 4)
    },
  ];
  
  return (
    <StyledSkillsContainer>
      <Grid container>
        {allSkillsData?.map((allSkills) => {          return (
            <Grid item xs={12} md={6} mt={5} >
              <HeroText>{allSkills?.skillType}</HeroText>
              {allSkills?.skillsData?.map((skillsDetails) => {
                return <ThirdCard details={skillsDetails} />;
              })}
            </Grid>
          );
        })}
      </Grid>
    </StyledSkillsContainer>
  );
}
