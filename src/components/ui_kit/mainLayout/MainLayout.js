import { Box, CssBaseline } from "@mui/material";
import React from "react";
import Footer from "../footer";
import Header from "../header";
import Sidebar from "../sidebar/index.js";
import { MainLayoutComponents, MainLayoutContent } from "./style.js";

const MainLayout = (props) => {
  const { header, sidebar, children, footer } = props;
  return (
    <MainLayoutComponents>
      <CssBaseline />
      {header && <Header />}
      <Box sx={{ display: "flex" }}>
        {sidebar && <Sidebar />}
        <MainLayoutContent>{children}</MainLayoutContent>
      </Box>
      {footer && <Footer />}
    </MainLayoutComponents>
  );
};

export default MainLayout;
