import React from "react";
import { Box, Grid, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  StyledIconButton,
  PrimaryText,
} from "../../../../../assets/css/common.styles";
import { StyledEcucationContainer } from "./style";
import { useTheme } from "@emotion/react";
import { Form, Formik } from "formik";
import { initialValues, workExperienceSchema } from "./schema";
import useEducation from "./hooks/useEducation";
import DynamicFormContainer from "../../../../../components/dynamicFormContainer/DynamicFormContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import TextField from "../../../../../components/textField/TextField";
const Education = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handleSubmitHandler, educationLoader, educationData } =
    useEducation();

  const renderForm = ({ form, deleteForm }) => (
    <Formik
      initialValues={() => initialValues(educationData)}
      validationSchema={() => workExperienceSchema(t)}
      onSubmit={handleSubmitHandler}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            label={t("courseName")}
            value={values.courseName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="courseName"
            placeHolder={t("placeholderText", {
              text: t("courseName"),
            })}
            isRequired
          />
          <TextField
            label={t("shortCourseName")}
            value={values.shortCourseName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="shortCourseName"
            placeHolder={t("placeholderText", {
              text: t("shortCourseName"),
            })}
            isRequired
          />

          <TextField
            label={t("shortCollageName")}
            value={values.shortCollageName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="shortCollageName"
            placeHolder={t("placeholderText", {
              text: t("shortCollageName"),
            })}
            isRequired
          />

          <TextField
            label={t("collageName")}
            value={values.collageName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="collageName"
            placeHolder={t("placeholderText", {
              text: t("collageName"),
            })}
            isRequired
          />
          <TextField
            label={t("duration")}
            value={values.duration}
            onChange={handleChange}
            onBlur={handleBlur}
            name="duration"
            placeHolder={t("placeholderText", {
              text: t("duration"),
            })}
            isRequired
          />
          <TextField
            label={t("collageWebsite")}
            value={values.collageWebsite}
            onChange={handleChange}
            onBlur={handleBlur}
            name="collageWebsite"
            placeHolder={t("placeholderText", {
              text: t("collageWebsite"),
            })}
            isRequired
          />

          <CenteredItemBox props={{ width: "100%" }}>
            <StyledIconButton onClick={() => deleteForm(form.id)}>
              <DeleteIcon />
            </StyledIconButton>
            <StyledIconButton type="submit" disabled={educationLoader}>
              <DoneIcon />
            </StyledIconButton>
          </CenteredItemBox>
        </Form>
      )}
    </Formik>
  );

  return (
    <StyledEcucationContainer>
      <Box sx={{ width: "100%" }}>
        <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <PrimaryText props={{ color: theme.colors.extra.highLightColor }}>
            {t("editEducationDetails")}
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
    </StyledEcucationContainer>
  );
};

export default Education;
