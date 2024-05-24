import React from "react";
import { DialogComponent } from "../../../components/dialog";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginPopup } from "../../../redux/slices/auth/login.sclice";
import { useTranslation } from "react-i18next";

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { toggleLoginPopup } = useSelector((state) => state.login);

  const closeDialog = () => {
    dispatch(handleLoginPopup(false));
  };
  return (
    <DialogComponent
      title={"Register Successfull"}
      subTitle={"Do you want to login"}
      dialogOpen={toggleLoginPopup}
      handleDialogClose={closeDialog}
      secondaryButtonTitle={t("cancel")}
      primaryButtonTitle={t("login")}
    />
  );
};

export default Login;
