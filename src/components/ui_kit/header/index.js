import React from "react";
import Box from "@mui/material/Box";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { useTheme, useMediaQuery } from "@mui/material";
import Login from "../../../pages/auth/login/Login";
export default function Header() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return <Box>
    {isLargeScreen ? <MobileHeader /> : <DesktopHeader />}
    <Login/>
    </Box>;
}
