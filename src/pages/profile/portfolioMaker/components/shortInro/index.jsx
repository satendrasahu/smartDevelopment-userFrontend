import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  PrimaryButton,
  PrimaryText,
} from "../../../../../assets/css/common.styles";
import { StyledShortIntroContainer, StyledImage } from "./style";
import { useTheme } from "@emotion/react";
import { Form, Formik } from "formik";
import TextField from "../../../../../components/textField/TextField";
import { AccountCircle } from "@mui/icons-material";
import { initialValues, shortInfoSchema } from "./schema";
import useShortInfo from "./hooks/useShortInfo";
import TextArea from "../../../../../components/textArea/TextArea";
import useImageUploader from "./hooks/useImageUploader";

const ShortIntro = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handleSubmitHandler, shortInfoLoader } = useShortInfo();
  const { imageLoaded, imageError, handleImageLoad, handleImageError } =
    useImageUploader();

  return (
    <StyledShortIntroContainer>
      <Grid container justifyContent="center" alignItems="center">
        {/* Left Section: Image */}
        <Grid
          item
          xs={12}
          md={6}
          textAlign="center"
          sx={{
            [theme.breakpoints.down("sm")]: {
              paddingTop: "2rem",
              marginBottom: "3rem",
            },

            [theme.breakpoints.down("md")]: {
              marginBottom: "4rem",
            },
          }}
        >
          {/* <StyledImage
            src={imageError ? "" : "https://as2.ftcdn.net/v2/jpg/09/33/74/03/1000_F_933740387_6v4QtD2VWJuOzSMNRDVmlnD9uEfwwd5h.webp"}
            alt="Satendra Sahu"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          /> */}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          // textAlign="center"
          sx={{
            padding: "1rem",
            [theme.breakpoints.down("md")]: {
              paddingBottom: "4rem",
              padding: "0.5rem",
            },
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={() => shortInfoSchema(t)}
            onSubmit={handleSubmitHandler}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
                  <PrimaryText
                    props={{ color: theme.colors.extra.highLightColor }}
                  >
                    {t("editShortIntro")}
                  </PrimaryText>
                </CenteredItemBox>
                <TextField
                  label={t("helloText")}
                  startIcon={<AccountCircle />}
                  value={values.helloText}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="helloText"
                  placeHolder={t("placeholderText", {
                    text: `${t("helloText")} : like ${t("heyThere")}`,
                  })}
                  isRequired
                />
                <TextField
                  label={t("fullName")}
                  startIcon={<AccountCircle />}
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="fullName"
                  placeHolder={t("placeholderText", {
                    text: t("fullName"),
                  })}
                  isRequired
                />
                <TextArea
                  outerLabel={t("shortIntroText")}
                  value={values.shortIntroText}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="shortIntroText"
                  placeHolder={t("placeholderText", {
                    text: t("shortIntroText"),
                  })}
                  isRequired
                />

                <CenteredItemBox>
                  <PrimaryButton
                    props={{ width: "50%" }}
                    type="submit"
                    disabled={shortInfoLoader}
                  >
                    {t("save")}
                  </PrimaryButton>
                </CenteredItemBox>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </StyledShortIntroContainer>
  );
};

export default ShortIntro;
