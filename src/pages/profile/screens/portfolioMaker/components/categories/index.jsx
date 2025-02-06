import React from "react";
import { Box, Grid, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  CenteredItemBox,
  StyledIconButton,
  PrimaryText,
} from "../../../../../../assets/css/common.styles";
import { StyledEcucationContainer } from "./style";
import { useTheme } from "@emotion/react";
import { Form, Formik } from "formik";
import { initialValues, categorySchema } from "./schema";
import useCategories from "./hooks/useCategories";
import DynamicFormContainer from "../../../../../../components/dynamicFormContainer/DynamicFormContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import TextField from "../../../../../../components/textField/TextField";
import TextArea from "../../../../../../components/textArea/TextArea";

const Categories = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handleSubmitHandler, categoryLoader, categoryData } = useCategories();

  const renderForm = ({ form, deleteForm, length }) => (
    <Formik
      initialValues={() => initialValues(categoryData)}
      validationSchema={() => categorySchema(t)}
      onSubmit={handleSubmitHandler}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            label={t("categoryName")}
            value={values?.categoryName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="categoryName"
            placeHolder={t("placeholderText", {
              text: t("categoryName"),
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
            <StyledIconButton type="submit" disabled={categoryLoader}>
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
            {t("editCategory")}
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
    </StyledEcucationContainer>
  );
};

export default Categories;
