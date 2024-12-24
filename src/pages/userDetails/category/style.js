import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';

// Full-size card container with a title at the top
export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column', // Align items vertically
  minHeight: '100vh', // Full screen height
  backgroundColor: '#f5f5f5',
  background: 'linear-gradient(135deg, #f5f5f5, #c1c1c1)',
  animation: 'backgroundAnimation 10s infinite alternate',
  padding: '20px',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
  },
}));

// Section title for the card area
export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '40px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px', // Adjust font size for small screens
  },
}));

// Container to hold cards and apply spacing between them
export const ContactItems = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '20px', // Gap between cards
  [theme.breakpoints.down('sm')]: {
    gap: '15px', // Smaller gap on mobile screens
  },
}));

// Card that contains the icon, title, description, and button
export const Card = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',
  maxWidth: '500px', // Limiting card width
  height: '500px', // Fixed height for the card
  background: 'linear-gradient(145deg, #e0e0e0, #ffffff)',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.08)',
  borderRadius: '15px',
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'center',
  padding: '20px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease, background-color 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f5f5f5', // Slight background color change on hover
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%', // Adjust width for small screens
    height: '400px', // Adjust height for small screens
  },
  animation: 'cardBounce 1s ease-in-out',
}));

// Large icon representing the domain
export const DomainIcon = styled('div')({
  fontSize: '60px',
  color: '#0a66c2', // Icon color
  marginBottom: '20px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#0077b5', // LinkedIn blue for hover effect
  },
  animation: 'iconBounce 1.5s infinite alternate',
});

// Title inside the card
export const CardTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
  transition: 'color 0.3s ease',
});

// Description inside the card
export const CardDescription = styled(Typography)({
  fontSize: '16px',
  color: '#666',
  marginBottom: '20px',
  lineHeight: '1.5',
  maxWidth: '80%',
  transition: 'color 0.3s ease',
});

// Button for viewing related projects
export const ViewProjectButton = styled(Button)(({ theme }) => ({
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#0a66c2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0077b5',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    padding: '8px 16px',
  },
}));

// Keyframes for background animation (same as before)
const globalStyles = {
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

  // Bounce effect for the card
  '@keyframes cardBounce': {
    '0%': {
      transform: 'scale(1) rotate(0deg)',
    },
    '50%': {
      transform: 'scale(1.05) rotate(5deg)',
    },
    '100%': {
      transform: 'scale(1) rotate(0deg)',
    },
  },

  // Bounce effect for the icon
  '@keyframes iconBounce': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
};

export default globalStyles;
