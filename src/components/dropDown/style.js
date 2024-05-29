import { styled } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";
import { Paper } from "@mui/material";


export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
  width: '100%',
  maxWidth: '300px',
  [theme.breakpoints.down("sm")]: {
    maxWidth: '100%'
  },

  "& .MuiOutlinedInput-root": {
    background: theme.colors.secondary.mainColor,
    "& fieldset": {
      borderColor: theme.colors.primary.mainColor,
    },
    "&:hover fieldset": {
      borderColor: theme.colors.extra.highLightColor,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.colors.extra.highLightColor,
    },
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: theme.colors.primary.textColor, // Label color when focused
  },
  "& .MuiInputBase-input": {
    color: theme.colors.primary.textColor, // Input text color
    "&::placeholder": {
      color: theme.colors.primary.textColor, // Placeholder text color
      opacity: 1,
    },
  },
  "& .MuiFormLabel-root": {
    color: theme.colors.primary.textColor // Label color
  },
  "& .no-options": {
    color: 'white', // Set the color to white for the "no options" text
  },
}));



export const CustomPaper = styled(Paper)(({ theme }) => ({
  background: theme.colors.primary.mainColor,
  color :theme.colors.primary.textColor
}));