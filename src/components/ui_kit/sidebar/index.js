import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const Sidebar = () => {
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return isMediumScreen ? <MobileSidebar /> : <DesktopSidebar />;
};

export default Sidebar;
