import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import styles, { ButtonStyled, HeroText, SubtitleText, StyledImage, StyledResponsibilitiesContainer } from "./style";

const Responsibilities = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);

  const responsibilities = [
    t("Develop and maintain web applications using the MERN stack, including MongoDB, Express, React, Node.js, and Next.js."),
    t("Write clean, efficient, and well-documented code that meets project requirements and follows industry best practices."),
    t("Collaborate with project managers, designers, and other developers to conceptualize, craft, and implement features and functionality."),
    t("Testing and debugging code for optimal performance and functionality."),
    t("Client calls and interviews, scheduling interviews for new candidates."),
    t("Training and session for colleagues and juniors, playing a mentor role."),
  ];

  return (
    <StyledResponsibilitiesContainer>
      <HeroText>{t("myResponsibilities")}</HeroText>
      
      <Grid container spacing={6} justifyContent="center" alignItems="center" mt={0}>
        {/* Left Section: Image */}
        <Grid item xs={12} md={6}>
        
          <StyledImage
            src="https://desunacademy.in/wp-content/uploads/2024/01/MERN-Stack-Development.png"
            alt="Satendra Sahu"
            onLoad={handleImageLoad}
            style={{
              opacity: imageLoaded ? 1 : 0,
              animation: "zoomIn 1.5s ease-in-out",
            }}
          />
        </Grid>

        {/* Right Section: Responsibilities */}
        <Grid item xs={12} md={6}>
          <Box sx={styles.responsibilities}>
            <SubtitleText>{t("As a Full Stack Developer")}</SubtitleText>
            <ul style={{padding:"0"}}>
              {responsibilities.map((text, index) => (
                <li key={index} style={styles.responsibilityItem}>
                  <CheckCircleOutline fontSize="small" style={styles.icon} />
                  <Typography sx={{ animation: `fadeInItem ${index * 0.3}s ease-out` }}>
                    {text}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </StyledResponsibilitiesContainer>
  );
};

export default Responsibilities;









