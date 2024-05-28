import { styled } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
  width:'100%',
  maxWidth :"300px",

  "& .MuiOutlinedInput-root": {
    background: theme.colors.primary.mainColor,
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
    color: theme.colors.primary.textColor, //theme.palette.primary.dark,
  },
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },

  '& .base-Popper-root':{
    background :'red',
    '& .MuiPaper-root' :{
        background :'red'
    }
  }
}));
