import React from "react";
import { Box, Grid, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  StyledIconButton,
  PrimaryText,
} from "../../../../../../assets/css/common.styles";
import { StyledWorkExperienceContainer } from "./style";
import { useTheme } from "@emotion/react";
import { Form, Formik } from "formik";
import { initialValues, workExperienceSchema } from "./schema";
import useWorkExperience from "./hooks/useWorkExperience";
import DynamicFormContainer from "../../../../../../components/dynamicFormContainer/DynamicFormContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import TextField from "../../../../../../components/textField/TextField";
const WorkExperience = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handleSubmitHandler, workExperienceLoader, workExperienceData } =
    useWorkExperience();

  const renderForm = ({ form, deleteForm }) => (
    <Formik
      initialValues={() => initialValues(workExperienceData)}
      validationSchema={() => workExperienceSchema(t)}
      onSubmit={handleSubmitHandler}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            label={t("desigNationName")}
            value={values.desigNationName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="desigNationName"
            placeHolder={t("placeholderText", {
              text: t("desigNationName"),
            })}
            isRequired
          />
          <TextField
            label={t("technologyName")}
            value={values.technologyName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="technologyName"
            placeHolder={t("placeholderText", {
              text: t("technologyName"),
            })}
            isRequired
          />

          <TextField
            label={t("designationTechName")}
            value={values.designationTechName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="designationTechName"
            placeHolder={t("placeholderText", {
              text: t("designationTechName"),
            })}
            isRequired
          />

          <TextField
            label={t("companyName")}
            value={values.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="companyName"
            placeHolder={t("placeholderText", {
              text: t("companyName"),
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
            label={t("companyWebsite")}
            value={values.companyWebsite}
            onChange={handleChange}
            onBlur={handleBlur}
            name="companyWebsite"
            placeHolder={t("placeholderText", {
              text: t("companyWebsite"),
            })}
            isRequired
          />

          <CenteredItemBox props={{ width: "100%" }}>
            <StyledIconButton onClick={() => deleteForm(form.id)}>
              <DeleteIcon />
            </StyledIconButton>
            <StyledIconButton  type="submit" disabled={workExperienceLoader}>
              <DoneIcon />
            </StyledIconButton>
          </CenteredItemBox>
        </Form>
      )}
    </Formik>
  );

  return (
    <StyledWorkExperienceContainer>
      <Box sx={{ width: "100%" }}>
        <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <PrimaryText props={{ color: theme.colors.extra.highLightColor }}>
            {t("editWorkExperience")}
          </PrimaryText>
          <Switch
            // checked={showChatNotification}
            // onChange={handleSwitchChange}
            // value={showChatNotification}
            inputProps={{ "aria-label": "controlled" }}
          />
        </CenteredItemBox>
        <Grid container alignItems="center" justifyContent="center">
          <DynamicFormContainer
            StyledGridItemProps={{
              xs: 12,
              lg: 6,
            }}
            renderForm={renderForm}
          />
        </Grid>
      </Box>
    </StyledWorkExperienceContainer>
  );
};

export default WorkExperience;
