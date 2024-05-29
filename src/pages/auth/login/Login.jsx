import React from "react";
import { DialogComponent } from "../../../components/dialog";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginPopup } from "../../../redux/slices/auth/login.sclice";
import { useTranslation } from "react-i18next";
import { StyledLoginContainer } from "./style";
import { Form, Formik } from "formik";
import { initialValues, loginSchema } from "./login.schema";
import {
  CenteredItemBox,
  PrimaryText,
} from "../../../assets/css/common.styles";
import TextField from "../../../components/textField/TextField";
import { AccountCircle } from "@mui/icons-material";

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { toggleLoginPopup } = useSelector((state) => state.login);

  const closeDialog = () => {
    dispatch(handleLoginPopup(false));
  };
  const handleSubmitHandler = () => {};
  return (
    <DialogComponent
      dialogOpen={toggleLoginPopup}
      handleDialogClose={closeDialog}
    >
      <StyledLoginContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={() => loginSchema(t)}
          onSubmit={handleSubmitHandler}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <CenteredItemBox>
                <PrimaryText>{t("Login")}</PrimaryText>
              </CenteredItemBox>
              <TextField
                label={t("userNameOrEmail")}
                icon={<AccountCircle />}
              />
            </Form>
          )}
        </Formik>
      </StyledLoginContainer>
    </DialogComponent>
  );
};

export default Login;
