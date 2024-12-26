import React from "react";
import "keen-slider/keen-slider.min.css";
import { Grid } from "@mui/material";
import { HeroText, SkillsBox, StyledSkillsContainer } from "./style";
import { useTranslation } from "react-i18next";
import ThirdCard from "../../../components/cards/ThirdCard";
import { PrimaryText } from "../../../assets/css/common.styles";

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
      {allSkillsData?.map((allSkills) => {
        return (
          <SkillsBox>
            <PrimaryText props={{fontSize:"1.5rem", textAlign:"left"}}>{allSkills?.skillType}</PrimaryText>
            <Grid container>
              {allSkills?.skillsData?.map((skillsDetails) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ThirdCard details={skillsDetails} />
                  </Grid>
                );
              })}
            </Grid>
          </SkillsBox>
        );
      })}
    </StyledSkillsContainer>
  );
}
