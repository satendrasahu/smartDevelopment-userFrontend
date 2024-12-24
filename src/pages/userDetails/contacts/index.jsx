import React from 'react';
import { Grid, Typography, IconButton, Paper, Button } from '@mui/material';
import { LinkedIn, Phone, Email, GitHub, Twitter, YouTube } from '@mui/icons-material';
import './ContactUs.css';

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

const ContactUs = () => {
  const contactInfo = [
    { href: 'tel:+123456789', icon: <Phone fontSize="large" />, text: '+1 234 567 89' },
    { href: 'mailto:your.email@example.com', icon: <Email fontSize="large" />, text: 'your.email@example.com' },
    { href: 'https://www.linkedin.com/in/satendra-sahu/', icon: <LinkedIn fontSize="large" />, text: 'LinkedIn' },
    { href: 'https://github.com/yourprofile', icon: <GitHub fontSize="large" />, text: 'GitHub' },
    { href: 'https://twitter.com/yourhandle', icon: <Twitter fontSize="large" />, text: 'Twitter' },
    { href: 'https://youtube.com/yourchannel', icon: <YouTube fontSize="large" />, text: 'Watch My Intro Video' },
  ];

  return (
    <div className="contact-us">
      <div className="contact-header">
        <Typography variant="h3" color="textPrimary">Let's Connect</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          I’d love to hear from you. Reach out via the options below!
        </Typography>
      </div>

      <Grid container spacing={4} justifyContent="center">
        {contactInfo.map((item, index) => (
          <ContactItem key={index} href={item.href} icon={item.icon} text={item.text} />
        ))}

        <ButtonItem href="#hire-me" label="Hire Me" variant="contained" color="primary" />
        <ButtonItem href="/resume.pdf" label="Download Resume" variant="outlined" color="secondary" />
      </Grid>

      {/* FAQ Section */}
      <div className="faq-section">
        <Typography variant="h5" color="textPrimary">Frequently Asked Questions</Typography>
        <Typography variant="body1" color="textSecondary">
          - How do I start a project with you?
          <br />
          - What are your working hours?
        </Typography>
      </div>

      {/* Footer */}
      <Typography variant="body1" color="textSecondary" className="footer-text">
        Available for freelance projects, collaborations, or just to connect! Let's make something great together.
      </Typography>
    </div>
  );
};

export default ContactUs;
