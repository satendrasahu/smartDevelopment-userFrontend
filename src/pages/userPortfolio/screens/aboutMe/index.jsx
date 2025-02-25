import React from "react";
import "keen-slider/keen-slider.min.css";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import {
  ButtonStyled,
  DescriptionText,
  HeroText,
  StyledAboutMeContainer,
} from "./styles/style";
import CircularSlider3D from "../../../../components/slider/keenSlider/circularSlider3D/CircularSlider3D";
import useAboutMe from "./hooks/useAboutMe";
import { CenteredItemBox } from "../../../../assets/css/common.styles";

export default function AboutMe() {
  const { skillsData, aboutMeData, t } = useAboutMe();
  return (
    <StyledAboutMeContainer>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <HeroText>{t("aboutMe")}</HeroText>
          {aboutMeData?.map((descriptionData) => {
            return (
              <DescriptionText key={uuidv4()}>
                {descriptionData?.description}
              </DescriptionText>
            );
          })}

          <CenteredItemBox>
            <ButtonStyled>{t("contactMe")}</ButtonStyled>
          </CenteredItemBox>
        </Grid>

        <Grid item xs={12} mt={5} mb={2}>
          <CircularSlider3D renderData={skillsData} />
        </Grid>
      </Grid>
    </StyledAboutMeContainer>
  );
}
