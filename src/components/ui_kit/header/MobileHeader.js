import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import HeaderButtons from "./components/HeaderButtons";
import { appDetails, headerLinks } from "../../../utils/common.Data";
import { colors } from "../../../theme/colors";
import SearchBox from "./components/SearchBox";
import { LogoTypography, StyledToolbar } from "./header.styles";
const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const getHeaderLinks = useMemo(() => {
    return headerLinks(t);
  }, [headerLinks]);

  const changePath = (pathName) => {
    navigate(pathName);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center",background: colors.primary.mainColor, height:"100%" }}>
      <Typography variant="h6" sx={{ my: 2, ml: 1 }}>
        {appDetails.APP_NAME}
      </Typography>

      <Divider />
      {isSmallScreen && (
        <>
          <HeaderButtons />
          <Divider />
        </>
      )}

      <List>
        {getHeaderLinks?.map((linkData) => (
          <ListItem key={linkData} disablePadding>
            <ListItemButton
              sx={{ textAlign: "eft" }}
              onClick={() => changePath(linkData?.srcUrl)}
            >
              <ListItemText primary={linkData?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: colors.primary.mainColor}}>
        <StyledToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <LogoTypography variant="h6" component="div">
            {appDetails.APP_NAME}
          </LogoTypography>

          <Box sx={{ display: "flex" }}>
            <SearchBox />
            {!isSmallScreen && <HeaderButtons />}
          </Box>
        </StyledToolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
           
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:colors.secondaryColor,
              color : colors.primary.textColor
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
