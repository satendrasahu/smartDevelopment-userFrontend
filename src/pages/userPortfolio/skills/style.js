import { Box, Button, styled, Typography } from "@mui/material";

export const StyledSkillsContainer = styled(Box)(({ theme, props }) => ({
  padding: "1rem 3rem",
  //  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  transition: "background 0.5s ease",
  animation: "fadeIn 1.5s ease-in-out",
  // boxShadow: `0 25px 60px rgba(0, 0, 0, 0.15)`,
  // borderRadius: "0.25rem",
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0rem",
  },
}));

export const SkillsBox = styled(Box)(({ theme }) => ({

  width: '100%',
  // background: 'linear-gradient(145deg, #ececec, #ffffff)',
  boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
  borderRadius: '.5px',
  margin:theme.spacing(1,0),
  padding:theme.spacing(1,0),
  position: 'relative',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',

}));
