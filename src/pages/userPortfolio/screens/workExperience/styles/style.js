import { Box, styled } from "@mui/material";

export const StyledWorkExperienceContainer = styled(Box)(
  ({ theme, props }) => ({
    padding: theme.spacing(5,'auto'),
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
    transition: "background 0.5s ease",
    animation: "fadeIn 1.5s ease-in-out",
    boxShadow: `0 25px 60px rgba(0, 0, 0, 0.15)`,
    "@keyframes fadeIn": {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3,0.5),
    },
  })
);
