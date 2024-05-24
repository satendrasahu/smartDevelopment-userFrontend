import { Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDialog = styled(Dialog)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '20px',
  '& .MuiPaper-root': {
    borderRadius: '12px',
    backgroundColor: '#005E82'
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
