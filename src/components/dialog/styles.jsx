import { Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDialog = styled(Dialog)(({theme}) => ({
  
  '& .MuiPaper-root': {
    borderRadius: '12px',
    backgroundColor:theme.colors.extra.mainColor,
    border: `1px solid ${theme.colors.extra.highLightColor}`,
  boxShadow: `0 0 10px ${theme.colors.extra.highLightColor}`,
  },
  "&.confirmation-modal": {
    "& .MuiTypography-root": {
      fontSize: "1.2rem",
      marginBottom: "1.5rem",
    },
    "& .MuiButton-root": {
      "&:hover": {
        background: "rgb(0, 49, 68)",
      }
    }
  },

}))
