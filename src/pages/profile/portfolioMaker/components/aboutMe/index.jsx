import React from "react";
import { Box, Grid, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  StyledIconButton,
  PrimaryText,
} from "../../../../../assets/css/common.styles";
import { StyledAboutMeContainer } from "./style";
import { useTheme } from "@emotion/react";
import { Form, Formik } from "formik";
import TextArea from "../../../../../components/textArea";
import { initialValues, aboutMeSchema } from "./schema";
import useAboutMeInfo from "./hooks/useAboutMeInfo";
import DynamicFormContainer from "../../../../../components/dynamicFormContainer/DynamicFormContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
const AboutMe = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handleSubmitHandler, aboutMeLoader,aboutMeData } = useAboutMeInfo();

  const renderForm = ({ form, deleteForm }) => (
    <Formik
      initialValues={()=>initialValues(aboutMeData)}
      validationSchema={() => aboutMeSchema(t)}
      onSubmit={handleSubmitHandler}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <CenteredItemBox props={{ width: "100%" }}>
            <TextArea
              styledProps={{ margin: "1rem 0rem", width: "100%" }}
              value={values.shortIntroText}
              onChange={handleChange}
              onBlur={handleBlur}
              name="aboutMeText"
              placeHolder={t("placeholderText", {
                text: t("aboutMeText"),
              })}
            />
            <StyledIconButton onClick={() => deleteForm(form.id)}>
              <DeleteIcon />
            </StyledIconButton>
            <StyledIconButton type="submit" disabled={aboutMeLoader}>
              <DoneIcon />
            </StyledIconButton>
          </CenteredItemBox>
        </Form>
      )}
    </Formik>
  );

  return (
    <StyledAboutMeContainer>
      <Box sx={{ width: "100%" }}>
        <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <PrimaryText props={{ color: theme.colors.extra.highLightColor }}>
            {t("editAboutMeInfo")}
          </PrimaryText>
          <Switch
            // checked={showChatNotification}
            // onChange={handleSwitchChange}
            // value={showChatNotification}
            inputProps={{ "aria-label": "controlled" }}
          />
        </CenteredItemBox>
        <Grid container alignItems="center">
          <DynamicFormContainer
            StyledGridItemProps={{
              xs: 12,
              lg: 6,
            }}
            renderForm={renderForm}
          />
        </Grid>
      </Box>
    </StyledAboutMeContainer>
  );
};

export default AboutMe;
