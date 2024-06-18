import React, { useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
import { StyledContainer } from "./header.styles";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
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
      
      <StyledContainer >
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
           {toggleSidebar ?  <MenuOpenIcon/>:<DoubleArrowIcon/>} 
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
      </StyledContainer>
    </AppBar>
  );
}
export default DesktopHeader;
