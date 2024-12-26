import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { StarOutline } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import styles, { HeroText, SubtitleText, StyledImage, StyledAchievementsContainer } from "./style";

const Achievements = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);


  const achievements = [
    t("Achieved the 'Top Developer' title in my previous company for exceeding performance expectations."),
    t("Successfully led the migration of legacy systems to the MERN stack for multiple projects."),
    t("Recognized for implementing industry-standard security practices in web applications."),
    t("Mentored a team of junior developers, guiding them to improve their skills in React and Node.js."),
    t("Consistently delivered projects ahead of deadlines, ensuring client satisfaction."),
    t("Awarded 'Employee of the Year' for exceptional contributions to project management and development."),
  ];

  return (
    <StyledAchievementsContainer>
      <HeroText>{t("My Achievements")}</HeroText>

      <Grid container spacing={6} justifyContent="center" alignItems="center">
        {/* Left Section: Achievements */}
        <Grid item xs={12} md={6}>
          <Box sx={styles.achievementsList}>
            <SubtitleText>{t("Key Milestones")}</SubtitleText>
            <ul style={{ paddingLeft: "1.5rem" }}>
              {achievements.map((text, index) => (
                <li key={index} style={styles.achievementItem}>
                  <StarOutline fontSize="small" style={styles.icon} />
                  <Typography sx={{ animation: `fadeInItem ${index * 0.3}s ease-out` }}>
                    {text}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Grid>

        {/* Right Section: Image */}
        <Grid item xs={12} md={6}>
        <StyledImage
            // src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3Jhd3BpeGVsX29mZmljZV8zMl9mdWxsX2JvZHlfM2RfYXZhdGFyXzNkX3JlbmRlcl9vZl9hX2pveWZ1bF9idV9kMTJlY2Q4MC1kZWE0LTRiMWMtOTNhMS1hZmVkYmUyYjY1MGUucG5n.pnghttps://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3Jhd3BpeGVsX29mZmljZV8zMl9mdWxsX2JvZHlfM2RfYXZhdGFyXzNkX3JlbmRlcl9vZl9hX2pveWZ1bF9idV9kMTJlY2Q4MC1kZWE0LTRiMWMtOTNhMS1hZmVkYmUyYjY1MGUucG5n.png"
            src="https://desunacademy.in/wp-content/uploads/2024/01/MERN-Stack-Development.png"
            alt="Satendra Sahu"
            onLoad={handleImageLoad}
            style={{
              opacity: imageLoaded ? 1 : 0,
              animation: "zoomIn 1.5s ease-in-out",
            }}
          />
          </Grid>
      </Grid>
    </StyledAchievementsContainer>
  );
};

export default Achievements;
