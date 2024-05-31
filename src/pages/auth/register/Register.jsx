import React, { useState } from "react";
import { DialogComponent } from "../../../components/dialog";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { StyledRegisterContainer } from "./style";
import { Form, Formik } from "formik";
import { initialValues, registerSchema } from "./register.schema";
import {
  CenteredItemBox,
  PrimaryButton,
  PrimaryText,
  SecondaryButton,
  StyledIconButton,
  StyledLinkButton,
} from "../../../assets/css/common.styles";
import TextField from "../../../components/textField/TextField";
import {
  AccountCircle,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import WcIcon from '@mui/icons-material/Wc';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { useTheme } from "@emotion/react";
import { handleRegisterPopup } from "../../../redux/slices/auth/register.slice";
import { Grid } from "@mui/material";
import { handleLoginPopup } from "../../../redux/slices/auth/login.sclice";

const Register = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { t } = useTranslation();
  const { toggleRegisterPopup } = useSelector((state) => state.register);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const closeDialog = () => {
    dispatch(handleRegisterPopup(false));
  };
  const handleClickShowPassword = (e) => {
    const { name } = e.currentTarget;
    console.log(name);
    setShowPassword((prev) => {
      return {
        ...prev,
        [name]: !prev?.[name],
      };
    });
  };

  const handleSubmitHandler = (values) => {
    console.log("Form submitted with values:", values);
    // Add your form submission logic here
  };

  const changeDialog = () => {
    dispatch(handleRegisterPopup(false));
    dispatch(handleLoginPopup(true));
  };

  return (
    <DialogComponent
      dialogOpen={toggleRegisterPopup}
      handleDialogClose={closeDialog}
    >
      <StyledRegisterContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={() => registerSchema(t)}
          onSubmit={handleSubmitHandler}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
                <PrimaryText
                  props={{ color: theme.colors.extra.highLightColor }}
                >
                  {t("register")}
                </PrimaryText>
              </CenteredItemBox>
              <Grid container spacing={1}>
                <Grid item sm={12} md={6}>
                  <TextField
                    styledProps={{
                      margin: 0,
                    }}
                    label={t("firstName")}
                    startIcon={<AccountCircle />}
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="firstName"
                    placeHolder={t("placeholderText", { text: t("firstName") })}
                    isRequired
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <TextField
                    styledProps={{
                      margin: 0,
                    }}
                    label={t("lastName")}
                    startIcon={<AccountCircle />}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="lastName"
                    placeHolder={t("placeholderText", { text: t("lastName") })}
                    isRequired
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <TextField
                    styledProps={{
                      margin: 0,
                    }}
                    label={t("userName")}
                    startIcon={<AccountCircle />}
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="userName"
                    placeHolder={t("placeholderText", { text: t("userName") })}
                    isRequired
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <TextField
                    styledProps={{
                      margin: 0,
                    }}
                    label={t("email")}
                    startIcon={<EmailIcon />}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    placeHolder={t("placeholderText", { text: t("email") })}
                    isRequired
                  />
                </Grid>

                <Grid item sm={12} md={6}>
                  <TextField
                    styledProps={{
                      margin: 0
                    }}
                    label={t("password")}
                    startIcon={<LockIcon />}
                    type={showPassword?.password ? "text" : "password"}
                    endIcon={
                      <StyledIconButton
                        name="password"
                        onClick={handleClickShowPassword}
                        props={{padding:theme.spacing(0)}}
                      >
                        {showPassword?.password ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </StyledIconButton>
                    }
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    placeHolder={t("placeholderText", { text: t("password") })}
                    isRequired
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <TextField
                    styledProps={{
                      margin: 0,
                    }}
                    label={t("confirmPassword")}
                    startIcon={<LockIcon />}
                    type={showPassword?.confirmPassword ? "text" : "password"}
                    endIcon={
                      <StyledIconButton
                        name="confirmPassword"
                        onClick={handleClickShowPassword}
                        props={{padding:theme.spacing(0)}}
                      >
                        {showPassword?.confirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </StyledIconButton>
                    }
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="confirmPassword"
                    placeHolder={t("placeholderText", {
                      text: t("confirmPassword"),
                    })}
                    isRequired
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <TextField
                    styledProps={{
                      margin: 0,
                    }}
                    label={t("mobileNum")}
                    startIcon={<SmartphoneIcon />}
                    value={values.mobileNum}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="mobileNum"
                    placeHolder={t("placeholderText", { text: t("mobileNum") })}
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <TextField
                    styledProps={{
                      margin: 0,
                    }}
                    label={t("gender")}
                    startIcon={<WcIcon />}
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="gender"
                    placeHolder={t("placeholderText", { text: t("gender") })}
                  />
                </Grid>
              </Grid>

              <CenteredItemBox props={{ marginTop: theme.spacing(2) }}>
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
        <CenteredItemBox props={{ marginTop: theme.spacing(2) }}>
          <StyledLinkButton onClick={changeDialog}>
            {t("hasAccount")} {t("login")}
          </StyledLinkButton>
        </CenteredItemBox>
      </StyledRegisterContainer>
    </DialogComponent>
  );
};

export default Register;
