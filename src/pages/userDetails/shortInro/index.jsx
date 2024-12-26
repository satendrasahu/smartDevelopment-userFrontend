import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CenteredItemBox } from "../../../assets/css/common.styles";
import {
  ButtonStyled,
  DescriptionText,
  HeroText,
  StyledShortIntroContainer,
  StyledImage,
  SubtitleText,
} from "./style";
import { useTheme } from "@emotion/react";

const ShortIntro = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <StyledShortIntroContainer>
      <Grid container justifyContent="center" alignItems="center">
        {/* Left Section: Image */}
        <Grid
          item
          xs={12}
          md={6}
          textAlign="center"
          sx={{
            [theme.breakpoints.down("sm")]: {
              paddingTop: "2rem",
              marginBottom: "3rem",
            },

            [theme.breakpoints.down("md")]: {
              marginBottom: "4rem",
            },
          }}
        >
          <StyledImage
            src="https://as2.ftcdn.net/v2/jpg/09/33/74/03/1000_F_933740387_6v4QtD2VWJuOzSMNRDVmlnD9uEfwwd5h.webp"
            // src="https://static.vecteezy.com/system/resources/previews/024/999/781/non_2x/3d-sportsman-character-exuding-confidence-with-arms-crossed-pose-in-a-dynamic-setting-free-png.png"
            alt="Satendra Sahu"
            onLoad={handleImageLoad}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        </Grid>
        <Grid item xs={12} md={6} textAlign="center"
        
        sx={{
          [theme.breakpoints.down("md")]: {
            paddingBottom: "4rem",
          },
        }}>
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
