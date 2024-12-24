import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ProfileContainer = styled(Box)(({ theme }) => ({
  width: "100%",

  "& .MuiBox-root": {
    padding: theme.spacing(0),
  },
  "& .tabs-headings": {
    display: "grid !important",
    backgroundColor: theme.colors.secondary.mainColor,
    padding: theme.spacing(0, 0.25),
    borderRadius: theme.borderRadius,
    "& .MuiTabs-flexContainer": {
      gap: theme.spacing(1),
      overflow: "auto",
      "::-webkit-scrollbar": {
        width: 0,
        height: "0.07rem",
      },

      "& button": {
        padding: theme.spacing(0, 1),
        color: theme.colors.extra.whiteColor,
        borderRadius: theme.borderRadius,
        marginRight: theme.spacing(0),
        background: theme.colors.primary.btnColor,
        boxShadow: `0 0px 5px ${theme.colors.extra.darkColor}`,
        "&:active": {
          background: theme.colors.primary.btnColor,
        },
      },
      "& button:hover": {
        background: theme.colors.primary.btnHoverColor,
        border: "none",
      },
    },
    [theme.breakpoints.down("md")]: {
      overflow: "hidden",
      width: "auto",
    },
  },
}));
