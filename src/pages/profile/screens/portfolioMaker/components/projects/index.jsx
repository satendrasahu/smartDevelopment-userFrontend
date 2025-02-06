import React from "react";
import { Box, Grid, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  StyledIconButton,
  PrimaryText,
} from "../../../../../../assets/css/common.styles";
import { StyledProjectsContainer } from "./style";
import { useTheme } from "@emotion/react";
import { Form, Formik } from "formik";
import { initialValues, projectsSchema } from "./schema";
import DynamicFormContainer from "../../../../../../components/dynamicFormContainer/DynamicFormContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import TextField from "../../../../../../components/textField/TextField";
import TextArea from "../../../../../../components/textArea/TextArea";
import useProjects from "./hooks/useProjects";
import TextFieldWithChips from "../../../../../../components/TextFieldWithChips/TextFieldWithChips";
import { preventEnterKeyDefault } from "../../../../../../utils/common.function";
import { outputTypeList } from "../../../../../../components/TextFieldWithChips/constant";

const Projects = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handleSubmitHandler, projectsLoader, projectsData } = useProjects();

  const renderForm = ({ form, deleteForm, length }) => (
    <Formik
      initialValues={() => initialValues(projectsData)}
      validationSchema={() => projectsSchema(t)}
      onSubmit={handleSubmitHandler}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form onKeyDown={preventEnterKeyDefault}>
          <TextField
            label={t("domainName")}
            value={values.domainName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="domainName"
            placeHolder={t("placeholderText", {
              text: t("domainName"),
            })}
            isRequired
          />

          <TextField
            label={t("projectName")}
            value={values?.projectName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="projectName"
            placeHolder={t("placeholderText", {
              text: t("projectName"),
            })}
            isRequired
          />

          <TextArea
            outerLabel={t("description")}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            name="description"
            placeHolder={t("placeholderText", {
              text: t("description"),
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
              text: t("durationPlaceHolder"),
            })}
            isRequired
          />

          <TextField
            label={t("projectLink")}
            value={values.projectLink}
            onChange={handleChange}
            onBlur={handleBlur}
            name="projectLink"
            placeHolder={t("placeholderText", {
              text: t("projectLink"),
            })}
          />

          <TextFieldWithChips
            label={t("skillTags")}
            value={values.skillTags}
            onBlur={handleBlur}
            name="skillTags"
            placeHolder={t("placeholderText", {
              text: t("skillTagsPlaceholder"),
            })}
            isRequired
          />

          <TextFieldWithChips
            label={t("responsibilities")}
            value={values.responsibilities}
            onBlur={handleBlur}
            name="responsibilities"
            placeHolder={t("placeholderText", {
              text: t("responsibilitiesPlaceholder"),
            })}
            isRequired
            outputType={outputTypeList.LIST}
          />

          <CenteredItemBox props={{ width: "100%" }}>
            {length > 1 && (
              <StyledIconButton onClick={() => deleteForm(form.id)}>
                <DeleteIcon />
              </StyledIconButton>
            )}
            <StyledIconButton type="submit" disabled={projectsLoader}>
              <DoneIcon />
            </StyledIconButton>
          </CenteredItemBox>
        </Form>
      )}
    </Formik>
  );

  return (
    <StyledProjectsContainer>
      <Box sx={{ width: "100%" }}>
        <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <PrimaryText props={{ color: theme.colors.extra.highLightColor }}>
            {t("editProjectDetails")}
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
    </StyledProjectsContainer>
  );
};

export default Projects;
