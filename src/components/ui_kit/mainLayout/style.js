

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainLayoutComponents = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

export const MainLayoutContent = styled(Box)(() => ({ flexGrow: 1 }));
export const SidebarBox = styled(Box)(({theme}) => ({ 
  flexGrow: 1,
  display:'flex',
  [theme.breakpoints.down("md")]: {
    display:'block',
  },


 }));
