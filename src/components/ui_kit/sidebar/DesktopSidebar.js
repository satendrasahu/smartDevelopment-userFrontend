import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../theme/colors";
import { sideBarList } from "./common";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from "react-i18next";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: colors.secondary.btnColor,
  color: colors.primary.textColor,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(4)})`,
  background: colors.secondary.btnColor,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(4)})`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      maxHeight: "calc(100vh - 215px)",
      paddingTop: "70px",
      position: "absolute",
      zIndex: 0,
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      maxHeight: "calc(100vh - 215px)",
      paddingTop: "70px",
      zIndex: 0,
      position: "absolute",
    },
  }),
}));

export default function MiniDrawer() {
  const { toggleSidebar } = useSelector((state) => state.layout);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {t} = useTranslation()

  const visitPage = (route) => {
    navigate(route);
  };

  const renderSidebarList = useCallback(() => {
    return sideBarList(t, visitPage);
  }, [sideBarList]);
  return (
    <Drawer variant="permanent" open={toggleSidebar}>
      <List>
        {renderSidebarList()?.map(
          (data, index) => (
            <ListItem key={uuidv4()} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: toggleSidebar ? "initial" : "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: toggleSidebar ? 1 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {data?.icon}
                </ListItemIcon>
                <ListItemText
                  primary={data?.title}
                  sx={{ opacity: toggleSidebar ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
}
