import React, { useState } from "react";
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
  StyledIconButton,
} from "../../../assets/css/common.styles";
import TextField from "../../../components/textField/TextField";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import { useTheme } from "@emotion/react";

const Login = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { t } = useTranslation();
  const { toggleLoginPopup } = useSelector((state) => state.login);
  const [showPassword, setShowPassword] = useState(false);
  const closeDialog = () => {
    dispatch(handleLoginPopup(false));
  };
  const togglePasswordVisibility = () => setShowPassword((show) => !show);
  const handleSubmitHandler = (values) => {
    console.log("Form submitted with values:", values);
    // Add your form submission logic here
  };

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
              <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
                <PrimaryText
                  props={{ color: theme.colors.extra.highLightColor }}
                >
                  {t("Login")}
                </PrimaryText>
              </CenteredItemBox>
              <TextField
                label={t("userNameOrEmail")}
                startIcon={<AccountCircle />}
                value={values.userNameOrEmailOrMobile}
                onChange={handleChange}
                onBlur={handleBlur}
                name="userNameOrEmailOrMobile"
                placeHolder="place holder"
                isRequired
              />
              <TextField
                label={t("password")}
                startIcon={<LockIcon />}
                type={showPassword ? "text" : "password"}
                endIcon={
                  showPassword ? (
                    <Visibility onClick={togglePasswordVisibility} />
                  ) : (
                    <VisibilityOff onClick={togglePasswordVisibility} />
                  )
                }
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                isRequired
              />

              <CenteredItemBox>
                <SecondaryButton
                  props={{ width: "100%" }}
                  type="button"
                  onClick={closeDialog}
                >
                  {t("cancel")}
                </SecondaryButton>
                <PrimaryButton props={{ width: "100%" }} type="submit">
                  {t("login")}
                </PrimaryButton>
              </CenteredItemBox>
            </Form>
          )}
        </Formik>
      </StyledLoginContainer>
    </DialogComponent>
  );
};

export default Login;
