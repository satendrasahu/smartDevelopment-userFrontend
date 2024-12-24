import React, { useState } from 'react'
import { StyledPersonalInformationContainer } from './style'
import { Form, Formik } from 'formik'
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useTheme } from '@emotion/react';
import { changePasswordInitialValues, changePasswordSchema, initialValues, personalInformationSchema } from './schema';
import { CenteredItemBox, PrimaryButton, PrimaryText, StyledIconButton } from '../../../assets/css/common.styles';
import TextField from '../../../components/textField/TextField';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import {
    Visibility,
    VisibilityOff,
  } from "@mui/icons-material";
import TitleHeading from '../../../components/ui_kit/Headings/TitleHeading';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState({
      currentPassword: false,
      password: false,
      confirmPassword: false,
    });
  
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
  return (
    <StyledPersonalInformationContainer>
        <Formik
          initialValues={changePasswordInitialValues}
          validationSchema={() => changePasswordSchema(t)}
          onSubmit={handleSubmitHandler}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <CenteredItemBox props={{ margin: theme.spacing(5,0,2,0) }}>
                <TitleHeading title={t("changePassword")} subTitle={t("changePassword")}/>
              </CenteredItemBox>
              <Grid container spacing={1}>
              
              <Grid item sm={12} md={6} xs={12}>
                  <TextField
                    styledProps={{
                      margin: 0
                    }}
                    label={t("currentPassword")}
                    startIcon={<LockIcon />}
                    type={showPassword?.currentPassword ? "text" : "password"}
                    endIcon={
                      <StyledIconButton
                        name="currentPassword"
                        onClick={handleClickShowPassword}
                        props={{padding:theme.spacing(0),background:"inherit !important"}}
                      >
                        {showPassword?.currentPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </StyledIconButton>
                    }
                    value={values.currentPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="currentPassword"
                    placeHolder={t("placeholderText", { text: t("password") })}
                    isRequired
                  />
                </Grid>
                <Grid item sm={12} md={6} xs={12}>
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
                        props={{padding:theme.spacing(0),background:"inherit !important"}}
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
                <Grid item sm={12} md={6} xs={12}>
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
                        props={{padding:theme.spacing(0),background:"inherit !important"}}
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
                
              </Grid>

              <CenteredItemBox props={{margin:"2rem"}}>
                <PrimaryButton type="submit" disabled >
                  {t("changePassword")}
                </PrimaryButton>
              </CenteredItemBox>
            </Form>
          )}
        </Formik>
      </StyledPersonalInformationContainer>
  )
}

export default ResetPassword