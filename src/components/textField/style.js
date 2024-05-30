import { Box, InputAdornment, InputLabel, OutlinedInput, styled } from "@mui/material";

export const StyledTextField = styled(Box)(({ theme, props }) => ({
  margin :theme.spacing(2,0),
  ...props,
}));


export const StyledInputLabel = styled(InputLabel)(({ theme, props }) => ({
  display :'flex',
  color :theme.colors.primary.textColor,
  ...props,
}));

export const StyledOutlinedInput = styled(OutlinedInput)(({ theme, props }) => ({
  width :'100%',
  color :theme.colors.primary.textColor,
  background : theme.colors.extra.darkColor,
  position: "relative",
    transition: "top 0.3s ease, background 0.3s ease", 
    borderColor: "in",
  "&.Mui-focused": {
    
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor:theme.colors.extra.highLightColor,
      borderWidth: "0 0 2px 0",
      boxShadow: `0 0 10px ${theme.colors.extra.highLightColor}`,
    },
  },
  ...props,
}));

export const StyledInputAdornment= styled(InputAdornment)(({ theme, props }) => ({
  color :theme.colors.primary.textColor,
  cursor :"pointer",
  ...props,
}));

