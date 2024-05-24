import React, { memo, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { PrimaryButton } from "../../../../assets/css/common.styles";
import { handleLoginPopup } from "../../../../redux/slices/auth/login.sclice";
import { handleRegisterPopup } from "../../../../redux/slices/auth/register.slice";

const HeaderButtons = () => {
  const isLoggin = false; //getAuthToken();
  const dispatch = useDispatch();

  const onLoginClick = () => {
    dispatch(handleLoginPopup(true))
  };
  const onRegisterClick = () => {
    dispatch(handleRegisterPopup(true))
  };
  const isInRange = useMediaQuery("(min-width:600px) and (max-width:700px)");
  const { t } = useTranslation();
  const beforeLoginButtons = [
    {
      name: t("login"),
      onBtnClick: onLoginClick,
      showButton: true,
    },
    {
      name: t("register"),
      onBtnClick: onRegisterClick,
      showButton: !isInRange,
    },
  ];
  const handleLogout = () => {};

  const settings = [
    {
      title: t("logout"),
      onBtnClick: handleLogout,
    },
  ];

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return isLoggin ? (
    <>
      <Box sx={{ textAlign: "center" }}>
        <IconButton onMouseOver={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            sx={{ height: "35px", width: "35px" }}
          />
        </IconButton>
        <Typography sx={{ fontSize: "13px" }}>User</Typography>
      </Box>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem onClick={setting?.onBtnClick} key={uuidv4()}>
            <Typography textAlign="center">{setting?.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  ) : (
    <Box sx={{ display: "content" }}>
      {beforeLoginButtons?.map((button) => {
        return (
          button?.showButton && (
            <PrimaryButton
              key={uuidv4()}
              variant="contained"
              color="primary"
              onClick={button?.onBtnClick}
            >
              {button?.name}
            </PrimaryButton>
          )
        );
      })}
    </Box>
  );
};

export default memo(HeaderButtons);
