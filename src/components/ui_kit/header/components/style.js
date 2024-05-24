import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import { Box, Grid } from "@mui/material";
export const HeaderButtons = styled(Box)(({ theme }) => ({
  profileSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  profilePic: {
    height: 35,
    width: 35,
  },
  userName: {
    fontSize: theme.spacing(0.8),
  },

 
  beforeLoginButtonsBox: {
    display: "flex",
    gap: theme.spacing(0.5),
  },
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginRight: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const HeaderLinksComponents = styled(Grid)(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginLeft: theme.spacing(2),
  "& a": {
    textAlign: "center",
    color: theme.colors.primary.textColor,
    textDecoration: "none",
    padding: theme.spacing(1.19, 1),
    fontWeight: theme.typography.fontWeightBold,
    position: "relative",
    fontSize: theme.spacing(0.875),
    [theme.breakpoints.down("xl")]: {
      padding: theme.spacing(1.19, 0.5),
      fontSize: theme.spacing(0.75),
    },
    "&:after": {
      content: "''",
      transition: "background ease .5s",
      backgroundColor: "transparent",
    },
    "&:hover": {
      color: theme.colors.white,
      "&:after": {
        content: "''",
        backgroundColor: theme.colors.btnSecondary,
        width: "100%",
        height: "3px",
        bottom: "0",
        left: "0",
        position: "absolute",
      },
    },
    "&.active": {
      color: theme.colors.white,
      "&:after": {
        content: "''",
        backgroundColor: theme.colors.btnSecondary,
        width: "100%",
        height: "3px",
        bottom: "0",
        left: "0",
        position: "absolute",
      },
    },
  },
}));





// export const HeaderLinksComponents = styled(Grid)(({ theme }) => ({
//   display: "flex",
//   width: "100%",
//   marginLeft: theme.spacing(2),
//   "& a": {
//     textAlign: "center",
//     color: theme.palette.text.primary,
//     textDecoration: "none",
//     padding: theme.spacing(1.19, 1),
//     fontWeight: theme.typography.fontWeightBold,
//     position: "relative",
//     fontSize: theme.spacing(0.875),
//     [theme.breakpoints.down("xl")]: {
//       padding: theme.spacing(1.19, 0.5),
//       fontSize: theme.spacing(0.75),
//     },
//     "&:after": {
//       content: "''",
//       transition: "background ease .5s",
//       backgroundColor: "transparent",
//       position: "absolute",
//       width: "100%",
//       height: "3px",
//       bottom: 0,
//       left: 0,
//     },
//     "&:hover": {
//       color: theme.palette.common.white,
//       "&:after": {
//         backgroundColor: theme.palette.secondary.main,
//       },
//     },
//     "&.active": {
//       color: theme.palette.common.white,
//       "&:after": {
//         backgroundColor: theme.palette.secondary.main,
//       },
//     },
//   },
// }));
