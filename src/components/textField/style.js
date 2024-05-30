import { Box, styled } from "@mui/material";

export const StyledTextField = styled(Box)(({ theme, props }) => ({
  padding: theme.spacing(0, 1.2),
  marginBottom: theme.spacing(2),
  // display: "flex",
  position: "relative",
  "& .MuiFormControl-root": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    "& .MuiInputLabel-root": {
      "& .MuiInputLabel-asterisk": {
        color: theme.colors.extra.errorColor,
        marginLeft: "2px",
      },
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.colors.primary.btnColor,
        },
      },
    },
  },

  // "& .MuiOutlinedInput-input": {
  //   background: 'green',//theme.colors.black,
  //   borderRadius: "0",
  //   color: 'red',//theme.colors.whiteColor,
  //   padding: theme.spacing(0.4, 0.313),
  //   minHeight: "23px",
  //   "&:hover": {
  //     "& .MuiOutlinedInput-notchedOutline": {
  //       borderColor: "transparent",
  //     },
  //   },
  // },
  "& .MuiInput-root": {
    background: theme.colors.extra.darkColor,
    borderRadius: "0.313rem",
    color: theme.colors.primary.textColor,
    height: "2.188rem",
    padding: "0 0.625rem",
    marginTop: "0rem",
    overflow: "hidden",
    width: "100%",
    fontSize: theme.spacing(0.875),
    [theme.breakpoints.down("md")]: {
      fontSize: theme.spacing(0.75),
    },
    "&:hover": {
      "&:before": {
        borderColor: theme.colors.extra.mainColor,
      },
    },
    "&:after": {
      borderColor: theme.colors.extra.highLightColor
    },
  },
  "& .MuiSvgIcon-root": {
    color: theme.colors.extra.whiteColor,
  },
  // "& .MuiInputLabel-root": {
  //   color: theme.colors.primary.textColor,
  //   fontSize: theme.spacing(0.875),
  //   transform: "none",
  //   position: "static",
  //   minWidth: "140px",
  //   whiteSpace: "unset",
  //   [theme.breakpoints.down("md")]: {
  //     minWidth: "80px",
  //   },
    
  // },
  "& .MuiOutlinedInput-root": {
    width: "100%",
    background: theme.colors.extra.darkColor,

    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor:theme.colors.primary.btnColor,
        borderWidth: "0 0 2px 0",
      },
    },
  },
  "& .MuiFormGroup-root": {
    "& .MuiFormControlLabel-label": {
      color: theme.colors.extra.whiteColor,
    },
  },

  ...props,
}));
