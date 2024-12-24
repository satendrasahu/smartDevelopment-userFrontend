import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';

// Container for the entire section with background gradient
export const DomainSectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '80px 20px',
  background: 'linear-gradient(135deg, #f5f5f5, #c1c1c1)',
  animation: 'backgroundAnimation 10s infinite alternate',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '60px 10px',
  },
}));

// Section title with a larger, bolder font
export const DomainSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: '600',
  color: '#333',
  marginBottom: '50px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
}));

// Card grid container with responsive spacing
export const DomainGridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '30px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr', // Stack cards on mobile
  },
}));

// Individual domain card design with animation and hover effects
export const DomainCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '350px',
  height: '400px',
  background: 'linear-gradient(145deg, #ececec, #ffffff)',
  boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  padding: '25px',
  position: 'relative',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 25px 40px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '350px',
  },
  animation: 'cardAnimation 1s ease-in-out',
}));

// Icon representing the domain (larger size with hover effect)
export const DomainIcon = styled('div')({
  fontSize: '50px',
  color: '#0a66c2',
  marginBottom: '20px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#0077b5',
  },
});

// Title inside the domain card
export const DomainTitle = styled(Typography)({
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '15px',
});

// Description inside the domain card
export const DomainDescription = styled(Typography)({
  fontSize: '16px',
  color: '#777',
  marginBottom: '20px',
  lineHeight: '1.5',
  textAlign: 'center',
});

// Button to view related projects
export const DomainViewButton = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  backgroundColor: '#0a66c2',
  color: '#fff',
  fontSize: '16px',
  '&:hover': {
    backgroundColor: '#0077b5',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    padding: '10px 20px',
  },
}));

// Keyframes for background and card animation
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

  '@keyframes cardAnimation': {
    '0%': {
      transform: 'scale(0.95)',
    },
    '50%': {
      transform: 'scale(1.05)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
};

export default globalStyles;
