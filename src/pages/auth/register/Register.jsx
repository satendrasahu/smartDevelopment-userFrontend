import React from "react";
import { DialogComponent } from "../../../components/dialog";
import { useDispatch, useSelector } from "react-redux";
import { handleRegisterPopup } from "../../../redux/slices/auth/Register.sclice";
import { useTranslation } from "react-i18next";

const Register = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { toggleRegisterPopup } = useSelector((state) => state.register);

  const closeDialog = () => {
    dispatch(handleRegisterPopup(false));
  };
  return (
    <DialogComponent
      title={" Successfull"}
      subTitle={"Do you want to Register"}
      dialogOpen={toggleRegisterPopup}
      handleDialogClose={closeDialog}
      secondaryButtonTitle={t("cancel")}
      primaryButtonTitle={t("register")}
    />
  );
};

export default Register;
