import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/system";
import { CenteredItemBox } from "../../../assets/css/common.styles";
import { ButtonStyled, DescriptionText, HeroText, StyledShortIntroContainer, StyledImage, SubtitleText } from "./style";


const ShortIntro = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <StyledShortIntroContainer>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {/* Left Section: Image */}
        <Grid item xs={12} md={6}>
          {!imageLoaded && (
            <div
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "500px",
                backgroundColor: "#ccc",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="loader" style={{ color: "#fff" }}>
                Loading...
              </div>
            </div>
          )}
          <StyledImage
            src="https://as2.ftcdn.net/v2/jpg/09/33/74/03/1000_F_933740387_6v4QtD2VWJuOzSMNRDVmlnD9uEfwwd5h.webp"
            alt="Satendra Sahu"
            onLoad={handleImageLoad}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        </Grid>

        {/* Right Section: Text Content */}
        <Grid item xs={12} md={6}>
          <HeroText>{t("Hey there!")}</HeroText>
          <SubtitleText>{t("I'm Satendra Sahu")}</SubtitleText>
          <DescriptionText>{t("shortIntro")}</DescriptionText>
          <CenteredItemBox>
            <ButtonStyled>{t("Contact Me")}</ButtonStyled>
          </CenteredItemBox>
        </Grid>
      </Grid>
    </StyledShortIntroContainer>
  );
};

export default ShortIntro;
