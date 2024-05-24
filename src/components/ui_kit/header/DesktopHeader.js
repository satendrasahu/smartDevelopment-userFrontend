import React, { useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HeaderLinks from "./components/HeaderLinks";
import { useTranslation } from "react-i18next";

import { appDetails, headerLinks } from "../../../utils/common.Data";
import SearchBox from "./components/SearchBox";
import HeaderButtons from "./components/HeaderButtons";
import { colors } from "../../../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { handleSidebar } from "../../../redux/slices/layout/layout.slice";
import { ROUTE_PATHS } from "../../../routes/routesPath";
function DesktopHeader() {
  const { t } = useTranslation();
  const {toggleSidebar} = useSelector(state=>state.layout)
  const dispatch = useDispatch()
  const getHeaderLinks = useMemo(() => {
    return headerLinks(t);
  }, [headerLinks]);

  const handleSidbarToggle = () => {
    dispatch(handleSidebar(!toggleSidebar))
  };



  return (
    <AppBar  position="fixed"  sx={{background: colors.primary.mainColor}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleSidbarToggle}
            edge="start"
            sx={{
              marginRight : "1rem"
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={ROUTE_PATHS.home}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {appDetails.APP_NAME}
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <HeaderLinks renderLinksData={getHeaderLinks} />
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <SearchBox />
            <HeaderButtons />
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default DesktopHeader;
