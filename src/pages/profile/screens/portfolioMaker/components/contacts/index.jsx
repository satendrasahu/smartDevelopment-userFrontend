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
import { initialValues, contactsSchema } from "./schema";
import DynamicFormContainer from "../../../../../../components/dynamicFormContainer/DynamicFormContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import TextField from "../../../../../../components/textField/TextField";
import useContacts from "./hooks/useContacts";
import { preventEnterKeyDefault } from "../../../../../../utils/common.function";

const Contacts = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handleSubmitHandler, projectsLoader, projectsData } = useContacts();

  const renderForm = ({ form, deleteForm, length }) => (
    <Formik
      initialValues={() => initialValues(projectsData)}
      validationSchema={() => contactsSchema(t)}
      onSubmit={handleSubmitHandler}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form onKeyDown={preventEnterKeyDefault}>
          <TextField
            label={t("contactType")}
            value={values?.contactType}
            onChange={handleChange}
            onBlur={handleBlur}
            name="contactType"
            placeHolder={t("placeholderText", {
              text: t("contactType"),
            })}
            isRequired
          />

          <TextField
            label={t("contactName")}
            value={values.contactName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="contactName"
            placeHolder={t("placeholderText", {
              text: t("contactName"),
            })}
            isRequired
          />

          <TextField
            label={t("contactLink")}
            value={values.contactLink}
            onChange={handleChange}
            onBlur={handleBlur}
            name="contactLink"
            placeHolder={t("placeholderText", {
              text: t("durationPlaceHolder"),
            })}
            isRequired
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
            {t("editContactDeatils")}
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

export default Contacts;
