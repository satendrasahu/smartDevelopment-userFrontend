import {
  Box,
  Chip,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  OutlinedInput,
  styled,
} from "@mui/material";

export const StyledTextField = styled(Box)(({ theme, props }) => ({
  margin: theme.spacing(2, 0),
  ...props,
}));

export const StyledInputLabel = styled(InputLabel)(({ theme, props }) => ({
  display: "flex",
  color: theme.colors.primary.textColor,
  ...props,
}));

export const StyledOutlinedInput = styled(OutlinedInput)(
  ({ theme, props }) => ({
    width: "100%",
    color: theme.colors.primary.textColor,
    background: theme.colors.extra.darkColor,
    position: "relative",
    transition: "top 0.3s ease, background 0.3s ease",
    borderColor: "in",
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.colors.extra.highLightColor,
        borderWidth: "0 0 2px 0",
        boxShadow: `0 0 10px ${theme.colors.extra.highLightColor}`,
      },
    },
    ...props,
  })
);

export const StyledInputAdornment = styled(InputAdornment)(
  ({ theme, props }) => ({
    color: theme.colors.primary.textColor,
    cursor: "pointer",
    ...props,
  })
);

export const StyledChip = styled(Chip)(({ theme, props }) => {
  return {
    maxWidth:"100%",
    border: "none !important",
    color: `${theme.colors.extra.whiteColor}!important`,
    margin: `${theme.spacing(0.2)} !important`,
    background: `${theme.colors.primary.btnColor}!important`,
    "& svg": {
      fill: theme.colors.extra.whiteColor,
    },
  };
});

export const StyledList = styled(List)(({ theme }) => ({
  color: theme.colors.extra.whiteColor,
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  margin: theme.spacing(0.5, 0),
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  borderRadius: theme.spacing(0.25),
  background: theme.colors.primary.btnColor,
  color: theme.colors.extra.whiteColor,
  cursor: "pointer",
  "&:hover": {
    background: "rgba(0,109,150,0.7)",
  },
  "& svg": {
    fill: theme.colors.extra.whiteColor,
  },
}));
