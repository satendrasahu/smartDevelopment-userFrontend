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
  PrimaryButton,
  PrimaryText,
  SecondaryButton,
} from "../../../assets/css/common.styles";
import TextField from "../../../components/textField/TextField";
import { AccountCircle, BorderLeft } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const Login = () => {
  const dispatch = useDispatch();
  const theme = useTheme()
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
              <CenteredItemBox props={{marginBottom :theme.spacing(2)}}>
                <PrimaryText props={{color :theme.colors.extra.highLightColor }}>{t("Login")}</PrimaryText>
              </CenteredItemBox>
              <TextField
                label={t("userNameOrEmail")}
                icon={<AccountCircle />}
              />
              <TextField
                label={t("password")}
                icon={<AccountCircle />}
              />
              <CenteredItemBox >
                <SecondaryButton props={{width :"100%"}}>{t('cancel')}</SecondaryButton>
                <PrimaryButton props={{width :"100%"}}>{t('login')}</PrimaryButton>
              </CenteredItemBox>
            </Form>
          )}
        </Formik>
      </StyledLoginContainer>
    </DialogComponent>
  );
};

export default Login;
