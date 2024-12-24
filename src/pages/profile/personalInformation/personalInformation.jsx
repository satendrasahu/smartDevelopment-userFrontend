import React from "react";
import { StyledPersonalInformationContainer } from "./style";
import { Form, Formik } from "formik";
import { Box, Grid } from "@mui/material";
import { useDispatch  } from "react-redux";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import {
  initialValues,
  personalInformationInitialValues,
  personalInformationSchema,
} from "./schema";
import {
  CenteredItemBox,
  PrimaryButton,
} from "../../../assets/css/common.styles";
import TextField from "../../../components/textField/TextField";
import EmailIcon from "@mui/icons-material/Email";
import WcIcon from "@mui/icons-material/Wc";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { AccountCircle } from "@mui/icons-material";
import ProfilePic from "../components/ProfilePic";
import TitleHeading from "../../../components/ui_kit/Headings/TitleHeading";
import ResetPassword from "./ResetPassword";

const PersonalInformation = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { t } = useTranslation();

  const handleSubmitHandler = (values) => {
    console.log("Form submitted with values:", values);
    // Add your form submission logic here
  };
  return (
    <>
      <StyledPersonalInformationContainer>
        <ProfilePic />
        <Formik
          initialValues={personalInformationInitialValues}
          validationSchema={() => personalInformationSchema(t)}
          onSubmit={handleSubmitHandler}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
                <TitleHeading
                  title={t("personalDetails")}
                  subTitle={t("personalDetails")}
                />
              </CenteredItemBox>
              <Grid container spacing={1}>
                <Grid item sm={12} md={6} xs={12}>
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
                <Grid item sm={12} md={6} xs={12}>
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
                <Grid item sm={12} md={6} xs={12}>
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
                <Grid item sm={12} md={6} xs={12}>
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
                <Grid item sm={12} md={6} xs={12}>
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

                <Grid item sm={12} md={6} xs={12}>
                  <TextField
                    styledProps={{
                      margin: 0,
                    }}
                    label={t("alternateMobileNumber")}
                    startIcon={<SmartphoneIcon />}
                    value={values.alternateMobileNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="alternateMobileNumber"
                    placeHolder={t("placeholderText", { text: t("alternateMobileNumber") })}
                  />
                </Grid>

                <Grid item sm={12} md={6} xs={12}>
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

              <CenteredItemBox props={{ margin: "2rem" }}>
                <PrimaryButton type="submit">
                  {t("updateProfile")}
                </PrimaryButton>
              </CenteredItemBox>
            </Form>
          )}
        </Formik>
      </StyledPersonalInformationContainer>
      <Box mt={2}>
        <ResetPassword />
      </Box>
    </>
  );
};

export default PersonalInformation;
