import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  PrimaryButton,
  PrimaryText,
} from "../../../../../assets/css/common.styles";
import { StyledAboutMeContainer } from "./style";
import { useTheme } from "@emotion/react";
import { Form, Formik } from "formik";
import TextArea from "../../../../../components/textArea";
import { initialValues, shortInfoSchema } from "./schema";
import useShortInfo from "./hooks/useShortInfo";
import DynamicFormContainer from "../../../../../components/dynamicFormContainer/DynamicFormContainer";

const AboutMe = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handleSubmitHandler, shortInfoLoader } = useShortInfo();

  const renderForm = ({ form, index, deleteForm }) => (
    <Formik
      initialValues={initialValues}
      validationSchema={() => shortInfoSchema(t)}
      onSubmit={handleSubmitHandler}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <CenteredItemBox props={{ width: "100%" }}>
                <TextArea
                  styledProps={{ margin: "1rem 0rem", width: "100%" }}
                  value={values.shortIntroText}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="shortIntroText"
                  placeHolder={t("placeholderText", {
                    text: t("shortIntroText"),
                  })}
                />
                <PrimaryButton
                  variant="outlined"
                  color="error"
                  onClick={() => deleteForm(form.id)}
                >
                  {t("delete")}
                </PrimaryButton>
                <PrimaryButton type="submit" disabled={shortInfoLoader}>
                  {t("save")}
                </PrimaryButton>
              </CenteredItemBox>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );

  return (
    <StyledAboutMeContainer>
      <Box sx={{ width: "100%" }}>
        <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <PrimaryText props={{ color: theme.colors.extra.highLightColor }}>
            {t("editShortIntro")}
          </PrimaryText>
        </CenteredItemBox>
        <Grid container alignItems="center">
          <DynamicFormContainer
            StyledGridItemProps={{
              md: 6,
            }}
            renderForm={renderForm}
          />
        </Grid>
      </Box>
    </StyledAboutMeContainer>
  );
};

export default AboutMe;
