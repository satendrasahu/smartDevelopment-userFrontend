import { makeStyles, styled } from '@mui/styles'
import {
  TextField
} from '@mui/material';
export const useStyles = makeStyles((theme) => ({
  inputLabel: {
    color: theme.colors.white,
    paddingBottom: theme.spacing(1)
  }
}))




export const CustomTextField = styled(TextField)(({ theme }) => {
  return {
    width: '100%',
    background: theme.colors.primaryDarkBlue,
    // borderRadius: theme.spacing(1),
    '& .MuiInputBase-root': {
      maxHeight: theme.spacing(7),
      backgroundColor: theme.colors.btnSecondaryHover,
      borderRadius: theme.spacing(0.5),
      '& .MuiInputBase-input': {
        color: theme.palette.primary.contrastText,
        // fontSize: theme.spacing(1.875),
        fontWeight: theme.typography.fontWeightRegular,
        padding: theme.spacing(1)

      },
      '& .MuiSvgIcon-root': {
        fill: theme.palette.primary.contrastText
      },
      '& .MuiOutlinedInput-notchedOutline': {
        // borderColor:
      },
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: "green"
        }
      },
      '&:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          // borderColor: theme.palette.border.transparent
        }
      },
      '&.Mui-focused, &.Mui-focused:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          // borderColor: theme.palette.border.green
        }
      },
      '&.Mui-disabled': {
        // backgroundColor: theme.palette.secondary.light,
        cursor: 'no-drop'
      }
    },
    ".MuiInputBase-input.Mui-disabled": {
      // WebkitTextFillColor: theme.palette.lightShade.light_09,
      // color: theme.palette.lightShade.light_09
    }

  }
})
