import React from "react";
import "keen-slider/keen-slider.min.css";
import { Grid } from "@mui/material";
import {
  ButtonStyled,
  DescriptionText,
  HeroText,
  StyledAboutMeContainer,
} from "./style";
import CircularSlider3D from "../../../components/slider/keenSlider/circularSlider3D/CircularSlider3D";
import { CenteredItemBox } from "../../../assets/css/common.styles";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  const skillsData = [
    {
      src: "",
      title: "casino",
    },
    {
      src: "",
      title: "sports",
    },
    {
      src: "",
      title: "aviator",
    },
    {
      src: "",
      title: "kigFish",
    },
    {
      src: "",
      title: "freefire",
    },
    {
      src: "",
      title: "pubg",
    },
    {
      src: "",
      title: "favourite",
    },
  ];

  const aboutMeData = [
    {
      description: `  Hello! I'm Satendra Sahu, a highly motivated and experienced
            Full-Stack Developer with over 5 years of expertise in building
            robust, scalable, and user-friendly web applications. I specialize
            in developing end-to-end solutions using modern technologies,
            including React.js, Next.js, Node.js, Express.js, PostgreSQL,
            MongoDB, and Docker.`,
    },

    {
      description: `My work spans diverse domains such as I-Gaming, FinTech, and
            E-commerce, where I have contributed to the success of both
            user-facing and admin-facing platforms. With a strong foundation in
            front-end and back-end development, I take pride in delivering
            high-quality code, optimizing application performance, and creating
            seamless user experiences. Additionally, my proficiency in tools
            like Material-UI, Bootstrap, and Tailwind CSS enables me to craft
            visually appealing and responsive interfaces. Beyond coding.`,
    },
    {
      description: `I have experience in project planning, team management, and client
            collaboration, ensuring projects meet deadlines and exceed
            expectations. My passion for technology drives me to stay updated
            with the latest trends and continuously improve my skills. Let’s
            build something amazing together!`,
    },
  ];

  return (
    <StyledAboutMeContainer>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        
        <Grid item xs={12}>
          <HeroText>{t("About Me")}</HeroText>
          {aboutMeData?.map((descriptionData) => {
            return (
              <DescriptionText>{descriptionData?.description}</DescriptionText>
            );
          })}

          <CenteredItemBox>
            <ButtonStyled>{t("Contact Me")}</ButtonStyled>
          </CenteredItemBox>
        </Grid>

        <Grid item xs={12} >
          {/* <CircularSlider3D renderData={skillsData} /> */}
        </Grid>
      </Grid>
    </StyledAboutMeContainer>
  );
}
