import React, { useCallback } from "react";
import ButtonsSlider from "../slider/ButtonsSlider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { sideBarList } from "./common";
import { useNavigate } from "react-router-dom";
const MobileSidebar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const staticsButtons = [
    {
      src: "#",
      icon: <InboxIcon />,
      title: t("all"),
      isShow: true,
      tabId: 0,
    },
  ];

  

  const visitPage = (route) => {
    navigate(route);
  };

  const renderSidebarList = useCallback(() => {
    return sideBarList(t, visitPage);
  }, [sideBarList]);

  return (
   
    <Box mt={10}>
      <ButtonsSlider
      renderData={renderSidebarList()}
      // extraButtons={extraButtons}
      staticsButtons={staticsButtons}
    />
    </Box>
  );
};

export default MobileSidebar;
