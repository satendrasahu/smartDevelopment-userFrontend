import {Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  borderRadius: 10,
  background: 'linear-gradient(145deg, #e0e0e0, #ffffff)',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  '&:hover': {
    transform: 'scale(1.1) rotateY(15deg)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
  },
});

export const styles = {
  contactUs: {
    padding: '60px 20px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #f5f5f5, #c1c1c1)',
    animation: 'backgroundAnimation 10s infinite alternate',
    width: '100%',
  },
  '@keyframes backgroundAnimation': {
    '0%': {
      background: 'linear-gradient(135deg, #f5f5f5, #c1c1c1)',
    },
    '50%': {
      background: 'linear-gradient(135deg, #e6e6e6, #ffffff)',
    },
    '100%': {
      background: 'linear-gradient(135deg, #f5f5f5, #c1c1c1)',
    },
  },
  contactHeader: {
    marginBottom: 40,
  },
  faqSection: {
    marginTop: 30,
  },
  footerText: {
    marginTop: 30,
    fontSize: 18,
    color: '#333',
  },
  '@media screen and (max-width: 600px)': {
    contactUs: {
      padding: 20,
    },
    contactHeader: {
      marginBottom: 20,
    },
    footerText: {
      fontSize: 16,
    },
  },
};