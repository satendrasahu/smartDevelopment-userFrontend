import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import { isMobile } from "react-device-detect";
import MobileSidebar from "./MobileSidebar";

const Sidebar = () => {
  return isMobile ? <MobileSidebar /> : <DesktopSidebar />;
};

export default Sidebar;
