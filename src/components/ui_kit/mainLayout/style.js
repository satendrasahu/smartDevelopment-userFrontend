

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainLayoutComponents = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

export const MainLayoutContent = styled(Box)(() => ({ flexGrow: 1 }));
