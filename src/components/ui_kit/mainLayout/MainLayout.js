import { CssBaseline } from "@mui/material";
import React from "react";
import Footer from "../footer";
import Header from "../header";
import Sidebar from "../sidebar/index.js";
import {
  MainLayoutComponents,
  MainLayoutContent,
  SidebarBox,
} from "./style.js";

const MainLayout = (props) => {
  const { header, sidebar, footer,children } = props;
  return (
    <MainLayoutComponents>
      <CssBaseline />
      {header && <Header />}
      <SidebarBox>
        {sidebar && <Sidebar />}
        <MainLayoutContent>{children}</MainLayoutContent>
      </SidebarBox>
      {footer && <Footer />}
    </MainLayoutComponents>
  );
};

export default MainLayout;
