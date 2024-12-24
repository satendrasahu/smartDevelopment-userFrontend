import React from 'react';
import { Box, Typography } from '@mui/material';

const AnimationOne = ({ text = "Education" }) => {
  return (
    <Box
      sx={{
        '@keyframes shine': {
          '0%': { backgroundPosition: '-120%' },
          '50%': { backgroundPosition: '120%' },
          '100%': { backgroundPosition: '120%' },
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '5rem',
          fontFamily: '"Frozen", serif',
          backgroundImage: 'url("https://assets.codepen.io/209981/ice.jpg")',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: 'contain',
          position: 'relative',
          WebkitTextStroke: '1px #4f90ab',
          filter: `
            drop-shadow(0 0 2px rgba(255,255,255, 0.7))
            drop-shadow(0 0 2px rgba(41, 131, 172, 0.7))
            drop-shadow(0 0 30px rgba(125, 204, 239, 0.8))
            drop-shadow(0 0 30px rgba(58, 122, 155, 0.8))
          `,
          '& .animation': {
            position: 'absolute',
            left: 0,
            background: `
              linear-gradient(
                45deg,
                rgba(255, 255, 255, 0) 45%,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(255, 255, 255, 0) 55%
              )
            `,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shine 2s linear infinite',
            backgroundSize: '200%',
          },
        }}
      >
        <span>{text}</span>
        <span className="animation" aria-hidden="true">{text}</span>
      </Typography>
    </Box>
  );
};

export default AnimationOne;
