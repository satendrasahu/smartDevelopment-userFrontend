import React from "react";
import { Grid } from "@mui/material";
import { CenteredItemBox } from "../../../../assets/css/common.styles";
import {
  ButtonStyled,
  DescriptionText,
  HeroText,
  StyledShortIntroContainer,
  StyledImage,
  SubtitleText,
  ImageContainer,
  IntroContainer,
} from "./styles/style";
import useShortInfoHook from "./hooks/useShortInfoHook";

const ShortIntro = ({ handleTabClick, redirectIdTab }) => {
  const {
    t,
    imageLoaded,
    imageError,
    handleImageLoad,
    handleImageError,
  } = useShortInfoHook();
  return (
    <StyledShortIntroContainer>
      <Grid container justifyContent="center" alignItems="center">
        <ImageContainer item xs={12} md={6}>
          <StyledImage
            src={
              imageError
                ? ""
                : "https://as2.ftcdn.net/v2/jpg/09/33/74/03/1000_F_933740387_6v4QtD2VWJuOzSMNRDVmlnD9uEfwwd5h.webp"
            }
            alt="Satendra Sahu"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        </ImageContainer>
        <IntroContainer item xs={12} md={6}>
          <HeroText>{t("Hey there!")}</HeroText>
          <SubtitleText>{t("I'm Satendra Sahu")}</SubtitleText>
          <DescriptionText>{t("shortIntro")}</DescriptionText>
          <CenteredItemBox>
            <ButtonStyled
              onClick={() => {
                handleTabClick(redirectIdTab);
              }}
            >
              {t("contactMe")}
            </ButtonStyled>
          </CenteredItemBox>
        </IntroContainer>
      </Grid>
    </StyledShortIntroContainer>
  );
};

export default ShortIntro;
