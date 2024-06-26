import { createTheme } from '@mui/material'

import { colors } from './colors/index'

export const theme = createTheme({
  spacing: (factor) => `${1 * factor}rem`,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: colors.darkNavyBlue,
          color: colors.white,
          fill: colors.white
        }
      }
    },
    MuiTextField: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            width: 200,
            borderRadius: 3
          }
        },
        {
          props: { size: 'medium' },
          style: {
            width: 317,
            borderRadius: 5
          }
        },
        {
          props: { size: 'large' },
          style: {
            width: 417,
            borderRadius: 5
          }
        }
      ]
    },
    MuiSwitch: {
      variants: [
        {
          props: { size: 'medium' },
          style: {
            width: '64px',
            height: '45px',
            '&.MuiSwitch-root': {
              padding: 11
            },
            '& .MuiSwitch-thumb': {
              width: 18,
              height: 18,
              margin: '4px'
            },
            '& .MuiSwitch-track': {
              borderRadius: 10
            }
          }
        },
        {
          props: { size: 'small' },
          style: {
            width: '42px',
            height: '28px',
            '&.MuiSwitch-root': {
              padding: 6
            },
            '& .MuiSwitch-thumb': {
              width: 9,
              height: 9,
              margin: '5px'
            },
            '& .MuiSwitch-track': {
              borderRadius: 15
            }
          }
        },
        {
          props: { size: 'large' },
          style: {
            width: '80px',
            height: '62px',
            '&.MuiSwitch-root': {
              padding: 16
            },
            '& .MuiSwitch-thumb': {
              width: 24,
              height: 24,
              margin: '10px'
            },
            '& .MuiSwitch-track': {
              borderRadius: 16
            }
          }
        }
      ]
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: `2px solid ${colors.purple}`,
            color: colors.purple,
            fontWeight: 800,
            '&:hover': {
              border: `2px solid ${colors.purple}`,
              backgroundColor: colors.purple,
              color: colors.white
            }
          }
        },
        {
          props: { variant: 'text' },
          style: {
            color: colors.black,
            backgroundColor: colors.white,
            boxShadow: '0px 2px 10px rgba(103, 103, 103, 0.12), inset 0px -6px 14px rgba(0, 0, 0, 0.12)',
            '&:hover': {
              color: colors.purple,
              backgroundColor: colors.white,
              boxShadow: 'inset 0px 0px 13px rgba(89, 80, 229, 0.27)'
            }
          }
        },
        {
          props: { size: 'large' },
          style: {
            minWidth: '200px',
            minHeight: '50px'
          }
        },
        {
          props: { size: 'medium' },
          style: {
            minWidth: '150px',
            minHeight: '40px'
          }
        },
        {
          props: { size: 'small' },
          style: {
            minWidth: '100px',
            minHeight: '30px'
          }
        }
      ]
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: '0.4em',
            height: '0.2em'
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            backgroundColor: colors.grey500,
            height: '50px',
            border: '6px solid transparent',
            borderRadius: '15px'
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: colors.grey500
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: colors.grey500
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555'
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: colors.grey500
          }
        }
      }
    }
  },
  palette: {
    primary: {
      main: colors.purple,
      light: colors.lightPurple,
      dark: colors.purple
    },
    error: {
      main: colors.red
    },
    success: {
      main: colors.activeGreen
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    },
    fontFamily: [
      'IBM Plex Sans'
      // 'Rubik, sans-serif'
    ],
    fontWeightThin: 100,
    fontWeightExtraLight: 200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    fontWeightBoldBlack: 900
  },
  border: {
    primaryBorder: colors.btnSecondary,
    secondaryBorder: 'rgba(145, 184, 194, 0.15)',
    darkBorder: 'rgba(0, 72, 100, 0.50)',
    dark: '#253539',
    active: '#33c16c',
    green: '#55FA97',
    grey: '#4d575b',
    transparent: 'transparent'
  },

  shadows: [
    'none',
    '0px 2px 0px 0px rgba(0, 72, 100, 0.50)',
    '0px 6px 6px rgba(0, 0, 0, 0.25)',
    '0px 0px 20px rgba(51, 193, 108, 0.4)',
    'inset 0px 2px 12px rgba(255, 255, 255, 0.02)',
    '0px 0px 24.1117px rgba(40, 169, 9, 0.5), inset -4px -4px 10px #0D5B2C, inset 4px 4px 10px #45FF90'
  ],
  drawer: {
    width: 240
  },
  colors: colors,
  drawerWidth: 300
})
