import { Box, InputLabel, styled, TextField } from "@mui/material";

export const CustomTextArea = styled(TextField)(({ theme, props }) => ({
	borderRadius: theme.spacing(0.25),
	color :theme.colors.primary.textColor,
	background : theme.colors.extra.darkColor,
	width: '100%',
	fontFamily: 'Inter !important',
	color: theme.colors.primary.textColor,
	'& .MuiInputBase-root': {
		padding: '16px', // Padding for the input text
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			border: 'none',
		},
		'&:hover fieldset': {
			border: 'none',
		},
		'&.Mui-focused fieldset': {
			border: 'none',
		},
	},
	'& .MuiInputBase-input': {
		fontSize: '14px',
		resize: 'vertical', // Allows vertical resize
	},
	'& .Mui-disabled': {
		// color: "#fff !important",
		'-webkit-text-fill-color': '#fff !important',
		cursor: 'not-allowed',
		'& .MuiInputBase-input': {
			color: '#fff !important',
		},
	},
	...props,
}));


export const StyledTextField = styled(Box)(({ theme, props }) => ({
	margin :theme.spacing(2,0),
	...props,
  }));
  
  
  export const StyledInputLabel = styled(InputLabel)(({ theme, props }) => ({
	display :'flex',
	color :theme.colors.primary.textColor,
	...props,
  }));