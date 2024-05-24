import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const DesktopFooterStyle = styled(Box)(({ theme }) => ({
    padding : theme.spacing(5),
    color : theme.colors.primary.textColor,
    background: theme.colors.primary.mainColor,
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2,5),
      },
    [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(3,5),
      },
}));
