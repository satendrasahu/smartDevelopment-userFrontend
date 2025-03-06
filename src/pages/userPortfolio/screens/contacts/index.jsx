import React from "react";
import { Grid, Typography, IconButton, Paper, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import "./ContactUs.css";
import useContactHook from "./hooks/useContactHook";
import { PrimaryButton } from "../../../../assets/css/common.styles";

const ContactItem = ({ href, icon, text }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Paper className="contact-item">
      <IconButton href={href} target="_blank" className="contact-icon">
        {icon}
      </IconButton>
      <Typography variant="h6" className="contact-text">
        {text}
      </Typography>
    </Paper>
  </Grid>
);

const Contact = () => {
  const { contactInfo, QestionAnswer, t, contactButton } = useContactHook();

  return (
    <Box className="contact-us">
      <Box className="contact-header">
        <Typography variant="h3" color="textPrimary">
          {t("letsConnect")}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {t("ILoveHearYou")}
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        {contactInfo.map((item) => (
          <ContactItem
            key={uuidv4()}
            href={item.href}
            icon={item.icon}
            text={item.text}
          />
        ))}

        {contactButton?.map((button) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <PrimaryButton key={uuidv4()} href={button?.href} fullWidth>
                {button?.label}
              </PrimaryButton>
            </Grid>
          );
        })}
      </Grid>

      <Box style={{ marginTop: "2rem", textAlign: "center" }}>
        <Typography variant="h5" color="textPrimary" gutterBottom>
          {t("frequentlyAskedQuestions")}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ marginBottom: 2 }}
        >
          {t("havequestionsHereAre")}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {QestionAnswer?.map((faq, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  padding: 2,
                  textAlign: "left",
                  boxShadow: 2,
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <Typography variant="subtitle1" color="textPrimary">
                  {faq.question}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {faq.answer}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography variant="body1" color="textSecondary" className="footer-text">
        {t("letsConnectMessage")}
      </Typography>
    </Box>
  );
};

export default Contact;
