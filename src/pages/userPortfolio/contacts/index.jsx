import React from "react";
import { Grid, Typography, IconButton, Paper, Button } from "@mui/material";
import {
  LinkedIn,
  Phone,
  Email,
  GitHub,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import "./ContactUs.css";
import { PrimaryText } from "../../../assets/css/common.styles";
import { useTranslation } from "react-i18next";

// Reusable Contact Item Component
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

// Reusable Button Item Component
const ButtonItem = ({ href, label, variant, color }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Button href={href} variant={variant} color={color} fullWidth>
      {label}
    </Button>
  </Grid>
);

const Contact = () => {
  const { t } = useTranslation();
  const contactInfo = [
    {
      href: "tel:+123456789",
      icon: <Phone fontSize="large" />,
      text: "+91-8517959992",
    },
    {
      href: "mailto:your.email@example.com",
      icon: <Email fontSize="large" />,
      text: "satendrasahu@gmail.com",
    },
    {
      href: "https://www.linkedin.com/in/satendra-sahu/",
      icon: <LinkedIn fontSize="large" />,
      text: "LinkedIn",
    },
    {
      href: "https://github.com/satendrasahu",
      icon: <GitHub fontSize="large" />,
      text: "GitHub",
    },
    {
      href: "https://twitter.com/yourhandle",
      icon: <Twitter fontSize="large" />,
      text: "Twitter",
    },
    {
      href: "https://youtube.com/yourchannel",
      icon: <YouTube fontSize="large" />,
      text: "Watch My Intro Video",
    },
  ];

  const QestionAnswer = [
    {
      question: t("howdoStartProjectWithYou"),
      answer: t("simplyReachOutTontactOptionsAbove"),
    },
    {
      question: t("whatAreYourWorkingHours"),
      answer: t("imAvailable"),
    },
  ];
  return (
    <div className="contact-us">
      <div className="contact-header">
        <Typography variant="h3" color="textPrimary">
          {t("letsConnect")}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {t("ILoveHearYou")}
        </Typography>
      </div>

      <Grid container spacing={2} justifyContent="center">
        {contactInfo.map((item, index) => (
          <ContactItem
            key={index}
            href={item.href}
            icon={item.icon}
            text={item.text}
          />
        ))}

        <ButtonItem
          href="#hire-me"
          label="Hire Me"
          variant="contained"
          color="primary"
        />
        <ButtonItem
          href="/resume.pdf"
          label="Download Resume"
          variant="outlined"
          color="secondary"
        />
      </Grid>

      {/* FAQ Section */}
      {/* FAQ Section */}

      {/* FAQ Section */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
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
      </div>

      <Typography variant="body1" color="textSecondary" className="footer-text">
        {t("letsConnectMessage")}
      </Typography>
    </div>
  );
};

export default Contact;
