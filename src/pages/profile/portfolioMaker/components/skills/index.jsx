import React from "react";
import { Box, Grid, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  StyledIconButton,
  PrimaryText,
} from "../../../../../assets/css/common.styles";
import { StyledSkillsContainer } from "./style";
import { useTheme } from "@emotion/react";
import { Form, Formik } from "formik";
import { initialValues, skillsSchema } from "./schema";
import DynamicFormContainer from "../../../../../components/dynamicFormContainer/DynamicFormContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import TextField from "../../../../../components/textField/TextField";
import TextArea from "../../../../../components/textArea/TextArea";
import useSkills from "./hooks/useSkills";
import { preventEnterKeyDefault } from "../../../../../utils/common.function";

const Skills = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handleSubmitHandler, skillsLoader, skillsData } = useSkills();

  const renderForm = ({ form, deleteForm, length }) => (
    <Formik
      initialValues={() => initialValues(skillsData)}
      validationSchema={() => skillsSchema(t)}
      onSubmit={handleSubmitHandler}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form onKeyDown={preventEnterKeyDefault}>
          <TextField
            label={t("skillName")}
            value={values.skillName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="skillName"
            placeHolder={t("placeholderText", {
              text: t("skillName"),
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

          <CenteredItemBox props={{ width: "100%" }}>
            {length > 1 && (
              <StyledIconButton onClick={() => deleteForm(form.id)}>
                <DeleteIcon />
              </StyledIconButton>
            )}
            <StyledIconButton type="submit" disabled={skillsLoader}>
              <DoneIcon />
            </StyledIconButton>
          </CenteredItemBox>
        </Form>
      )}
    </Formik>
  );

  return (
    <StyledSkillsContainer>
      <Box sx={{ width: "100%" }}>
        <CenteredItemBox props={{ marginBottom: theme.spacing(2) }}>
          <PrimaryText props={{ color: theme.colors.extra.highLightColor }}>
            {t("editSkills")}
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
    </StyledSkillsContainer>
  );
};

export default Skills;
